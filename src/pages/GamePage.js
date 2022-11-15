import '../css/base.css';
import logoImg from '../img/page_assets/title.png';

import Workspace from '../code_generation/Workspace';
import GameMaster from '../game/GameMaster';
import { ExecutionController } from '../code_generation/logic/ExecutionController';

import {levels} from '../levels/level_generator';
import {generate} from '../levels/level_generator';

import { Link, Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export function GamePage() {
    const { lvlNum } = useParams();
    const [level, setLevel] = useState(null);
    const [executionController, setExecutionController] = useState(null);
    const [gameSpeed, setGameSpeed] = useState(1000);
    const [permitRun, setPermitRun] = useState(true);
    const [permitStartOver, setPermitStartOver] = useState(false);
    const [levelDescription, setLevelDescription] = useState(null);
    const [over, setOver] = useState(null);

    const [goBack, setGoBack] = useState(false);

    useEffect( () => {
        var lvl = levels()[lvlNum - 1];
        lvl = generate(lvl);
        setLevel(lvl);
        setLevelDescription(lvl.description);
    },
        []
    );

    function gameOver(success, reason) {
        if (success) {
            var o = {success: true, reason: ""};
            setOver(o);
        }
        else {
            var o = {success: false, reason: reason};
            setOver(o);
        }
        setPermitStartOver(true);
    }

    function startLevelOver() {
        var lvl = levels()[lvlNum - 1];
        lvl = generate(lvl);
        setLevel(lvl);
        setExecutionController(null);
        setPermitRun(true);
        setPermitStartOver(false);
        setOver(null);
    }

    function createExecutionController(codeDto) {
        setPermitRun(false);
        setPermitStartOver(false);
        var exContr = new ExecutionController();
        exContr.generateCodeStructure(codeDto);
        setExecutionController(exContr);
    }

    if (goBack) {
        return <Navigate to="/levels" />;
    }

    return (
        <div className="base d-flex flex-column">
            <div className="header-div row">
                <div className="col-4 d-flex justify-content-start">
                    <div className="btn btn-secondary m-1" onClick={() => setGoBack(true)}>Back to levels</div>
                </div>
                <div className="col-4 d-flex justify-content-around">
                    <button type="button" disabled={!permitStartOver} className="btn btn-block btn-danger mt-1 mb-1" onClick={startLevelOver}>Start Over</button>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <img className="logo" alt="logo" src={logoImg} />
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-5">
                    <Workspace exportCodeObj={createExecutionController} permitRun={permitRun}/>
                </div>
                
                <div className="col-2 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column">
                        { levelDescription &&
                        <div>
                            <p className="text-center fw-bold text-decoration-underline text-white">{levelDescription.title}</p>
                            <p className="text-center text-white">{levelDescription.details}</p>
                        </div>
                        }
                        { over && over.success &&
                        <div>
                            <p className="text-center fw-bold text-decoration-underline text-success">Congratulations!</p>
                            <p className="text-center text-success">You've completed the level successfully!</p>
                            <p className="text-center text-success">Press <span className="fw-bold text-success">Back to levels</span> to select an another level!</p>
                        </div>
                        }
                        { over && !over.success &&
                        <div>
                            <p className="text-center fw-bold text-decoration-underline text-danger">Game Over!</p>
                            <p className="text-center text-danger">{over.reason}</p>
                            <p className="text-center text-danger">Press <span className="fw-bold text-danger">Start Over</span> to try again.</p>
                        </div>
                        }
                    </div>
                    <div className="flex-column bg-secondary border border-2 p-2">
                        <p className="text-center bg-dark text-light border border-1">Speed: <span className="fw-bold">{gameSpeed === 1000 ? "Normal" : "Fast"}</span></p>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center">
                                <button type="buton" className="btn btn-warning fw-bold" disabled={gameSpeed === 1000} onClick={() => setGameSpeed(1000)}>Normal</button>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                    <button type="buton" className="btn btn-warning fw-bold" disabled={gameSpeed === 100} onClick={() => setGameSpeed(100)}>Fast</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    { level &&
                    <GameMaster map={level.map} robotInit={level.robot} exContr={executionController} stepSpeed={gameSpeed} gameOver={gameOver} />
                    }
                </div>
            </div>
        </div>
    );
}

/*
<div className="col-2 d-flex flex-column align-items-around justify-content-around">
    <button type="button" className="btn btn-block btn-danger mt-2 mb-2" onClick={startLevelOver}>Start Over</button>
</div>
*/