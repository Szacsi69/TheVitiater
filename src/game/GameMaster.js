import GameBoard from './display/GameBoard';

import {useState, useEffect} from 'react';

function GameMaster({map, robotInit, exContr}) {

    const [tiles, setTiles] = useState(null)
    const [robot, setRobot] = useState(null)

    const [executionController, setExecutionController] = useState(null)

    useEffect( () => {
        setTiles(map);
        setRobot(robotInit);
    },
        [map, robotInit]
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

    function assembleConditionState() {
        var condState = {
            canTurnLeft: robot.canGoLeft(),
            canTurnRight: robot.canGoRight(),
            currentTile: robot.getLocation().getState()
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