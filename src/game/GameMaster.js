import GameBoard from './display/GameBoard';

import {useState, useEffect} from 'react';
import { ColorClasses } from './logic/enums/ColorClasses';

function GameMaster({map, robotInit, exContr, stepSpeed, gameOver}) {

    const [tiles, setTiles] = useState(null);
    const [robot, setRobot] = useState(null);
    
    const [speed, setSpeed] = useState(1000);

    const [executionController, setExecutionController] = useState(null)

    useEffect( () => {
        setTiles(map);
        setRobot(robotInit);
    },
        [map, robotInit]
    );
    useEffect( () => {
        setSpeed(stepSpeed)
    },
        [stepSpeed]
    );

    useEffect( () => {
        if (robot && exContr) {
            exContr.updateConditionState(assembleConditionState());
        }
        setExecutionController(exContr);
    },
        [exContr]
    );

    useEffect( () => {
        if (executionController && executionController.hasCode()) {
            var commandObj = executionController.execute();
            if (commandObj.delayRequired)
                setTimeout(runCommand, speed, commandObj.command);
            else
                runCommand(commandObj.command);
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
            else {
                var success = checkWin();
                if (success) {
                    finishGame(true, "");
                }
                else {
                    finishGame(false, "There are still unvitiated fields.")
                }
            }
        }
    },
        [robot]
    );

    function runCommand(command) {
        eval(command);
    }

    function checkWin() {
        var success = true;
        for (let i = 0; i < tiles.length; i++) {
            for (let j = 0; j < tiles[i].length; j++) {
                if (tiles[i][j].getColor() !== ColorClasses.Gray) {
                    success = false;
                    break;
                }
            }
            if (!success) break;
        }
        return success;
    }

    function finishGame(success, reason) {
        setExecutionController(null);
        gameOver(success, reason);
    }
    
    function moveForward() {    
        var result = robot.moveForward();
        if (result[0])
            setRobot(robot.clone());
        else
            finishGame(false, result[1]);
    }

    function turnLeft() {
        robot.turnLeft();
        setRobot(robot.clone());
    }

    function turnRight() {
        robot.turnRight();
        setRobot(robot.clone());
    }

    function turnAround() {
        robot.turnAround();
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

    function assembleConditionState() {
        var condState = {
            canTurnLeft: robot.canGoLeft(),
            canTurnRight: robot.canGoRight(),
            currentTileState: robot.getLocation().getState(),
            currentTileColor: robot.getLocation().getColor()
        }
        return condState;
    }

    return (
        <div>
            { tiles && robot &&
            <GameBoard tiles = {tiles} robot = {robot} />
            }
        </div>
    );
}

export default GameMaster;

/**
 *  <button onClick={moveForward}>Move Forward</button>
    <button onClick={turnLeft}>Turn Left</button>
    <button onClick={turnRight}>Turn Right</button>
    <button onClick={drain}>Drain</button>
    <button onClick={camouflage}>Camouflage</button>
    <button onClick={vitiate}>Vitiate</button>
 */