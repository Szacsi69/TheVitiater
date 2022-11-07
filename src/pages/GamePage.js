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
    const [level, setLevel] = useState(null)
    const [executionController, setExecutionController] = useState(null);
    const [goBack, setGoBack] = useState(false);

    useEffect( () => {
        var lvl = levels()[lvlNum - 1];
        lvl = generate(lvl);
        setLevel(lvl);
    },
        []
    );

    function startLevelOver() {
        var lvl = levels()[lvlNum - 1];
        lvl = generate(lvl);
        setLevel(lvl);
    }

    function createExecutionController(codeDto) {
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
                <div className="col-6 d-flex justify-content-start">
                    <div className="btn btn-secondary m-1" onClick={() => setGoBack(true)}>Back to levels</div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <img className="logo" alt="logo" src={logoImg} />
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <Workspace exportCodeObj={createExecutionController}/>
                </div>
                <div className="col-2 d-flex flex-column align-items-around">
                    <button type="button" className="btn btn-danger mt-2 mb-2" onClick={startLevelOver}>Start Over</button>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    { level &&
                    <GameMaster map={level.map} robotInit={level.robot} exContr={executionController} />
                    }
                </div>
            </div>
        </div>
    );
}