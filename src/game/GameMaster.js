import GameBoard from './display/GameBoard';
import Workspace from '../code_generation/Workspace'

import {useState, useEffect} from 'react';
import { ExecutionController } from '../code_generation/logic/ExecutionController';

function GameMaster({lvlCreate}) {

    const [tiles, setTiles] = useState(null)
    const [robot, setRobot] = useState(null)

    const [executionController, setExecutionController] = useState(null)

    useEffect( () => {
        var lvlComponents = lvlCreate();
        var lvlMx = lvlComponents[0];
        var robotInit = lvlComponents[1];
        setTiles(lvlMx);
        setRobot(robotInit);
    },
        [lvlCreate]
    );

    useEffect( () => {
        if (executionController && executionController.hasCode()) {
            var command = executionController.execute();
            eval(command);
        }
    },
        [executionController]
    );

    useEffect( () => {
        if (tiles && robot && executionController) {
            if (executionController.hasCode()) {
                var exContr = executionController.clone();
                exContr.updateConditionState(assembleConditionState());
                setExecutionController(exContr);
            }
        }
    },
        [robot]
    );
    
    function moveForward() {    
        var result = robot.moveForward();
        if (result[0])
            setRobot(robot.clone());
        else
            alert(result[1]);
    }

    function turnLeft() {
        robot.turnLeft();
        setRobot(robot.clone());
    }

    function turnRight() {
        robot.turnRight();
        setRobot(robot.clone());
    }

    function drain() {
        robot.drain();
        setRobot(robot.clone());
    }

    function camouflage() {
        robot.camouflage();
        setRobot(robot.clone());
    }

    function vitiate() {
        var success = robot.vitiate();
        if (success) {
            tiles.map(tileRow => tileRow.map(tile => tile.updateColor()));
        }
        setRobot(robot.clone());
    }

    function idle() {
        setRobot(robot.clone());
    }

    function runScript(codeDto) {
        var exContr = new ExecutionController();
        exContr.generateCodeStructure(codeDto);
        exContr.updateConditionState(assembleConditionState());
        setExecutionController(exContr);
    }

    function assembleConditionState() {
        var condState = {
            canTurnLeft: robot.canGoLeft(),
            canTurnRight: robot.canGoRight(),
            currentTile: robot.getLocation().getState()
        }
        return condState;
    }

    return (
        <div className="row">
            <div className="col-6">
                <Workspace runCode={runScript}/>
            </div>
            <div className="col-6">
                { tiles && robot &&
                <div className="board border border-dark border-4">
                    <GameBoard tiles = {tiles} robot = {robot} />
                </div>
                }
                
                <button onClick={moveForward}>Move Forward</button>
                <button onClick={turnLeft}>Turn Left</button>
                <button onClick={turnRight}>Turn Right</button>
                <button onClick={drain}>Drain</button>
                <button onClick={camouflage}>Camouflage</button>
                <button onClick={vitiate}>Vitiate</button>
            </div>
        </div>
    );
}

export default GameMaster;