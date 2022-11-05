import { Directions } from '../game/logic/enums/Directions';
import { TileStates } from '../game/logic/enums/TileStates';
import { ColorClasses } from '../game/logic/enums/ColorClasses';
import { PathTileLogic } from '../game/logic/tiles/PathTileLogic';
import { WallTileLogic } from '../game/logic/tiles/WallTileLogic';
import { CheckerTileLogic } from '../game/logic/tiles/CheckerTileLogic';
import { SourceTileLogic } from '../game/logic/tiles/SourceTileLogic';
import { RobotLogic } from '../game/logic/RobotLogic';
import { ControllerTileLogic } from '../game/logic/tiles/ControllerTileLogic';

import {level1Controllers, level1Map, level1Robot} from './levels';

export function generate_lvl1() {
    return generate(level1Controllers, level1Map, level1Robot);
}

function generate(lvlControllers, lvlMap, lvlRobot) {
    var controllers = [];
    for(let i = 0; i < lvlControllers.length; i++)
        controllers.push(new ControllerTileLogic(lvlControllers[i]));
    var lvlMxSize = 15;
    var levelMx = createMx(lvlMxSize);
    for(let i = 0; i < lvlMxSize; i++) {
        for(let j = 0; j < lvlMxSize; j++) {
            var state = lvlMap[i][j][0];
            var color = lvlMap[i][j][1];
            var controllerNum = lvlMap[i][j][2] - 1;
            switch (state) {
                case TileStates.Path:
                    levelMx[i][j] = new PathTileLogic(color, controllers[controllerNum]);
                    break;
                case TileStates.Wall:
                    levelMx[i][j] = new WallTileLogic(color, controllers[controllerNum]);
                    break;
                case TileStates.Checker:
                    levelMx[i][j] = new CheckerTileLogic(color, controllers[controllerNum]);
                    break;
                case TileStates.Source:
                    levelMx[i][j] = new SourceTileLogic(color, controllers[controllerNum]);
                    break;
                case TileStates.Controller:
                    levelMx[i][j] = controllers[controllerNum]
                    break;
                default:
                    levelMx[i][j] = new PathTileLogic(ColorClasses.Gray, controllers[1]);
                    break;
            }
        }
    }

    createNeighbourhood(levelMx, lvlMxSize);

    var robot = new RobotLogic(lvlRobot[0], lvlRobot[1], lvlRobot[2]);
    levelMx[lvlRobot[3]][lvlRobot[4]].placeRobot(robot);

    return [levelMx, robot];
}

function createMx(lvlMxSize) {
    var levelMx = new Array(lvlMxSize);
    for(let i = 0; i < lvlMxSize; i++) 
        levelMx[i] = new Array(lvlMxSize)
    return levelMx;
}

function createNeighbourhood(levelMx, lvlMxSize) {

    for(let i = 0; i < lvlMxSize; i++) {
        for(let j = 0; j < lvlMxSize; j++) {
            if (i === 0) {
                if (j === 0) {
                    levelMx[i][j].setNeighbours(null, levelMx[i+1][j], null, levelMx[i][j+1]);
                }
                else if (j === lvlMxSize-1) {
                    levelMx[i][j].setNeighbours(null, levelMx[i+1][j], levelMx[i][j-1], null);
                }
                else {
                    levelMx[i][j].setNeighbours(null, levelMx[i+1][j], levelMx[i][j-1], levelMx[i][j+1]);
                }
            }
            
            else if (i === lvlMxSize-1) {
                if (j === 0) {
                    levelMx[i][j].setNeighbours(levelMx[i-1][j], null, null, levelMx[i][j+1]);
                }
                else if (j === lvlMxSize-1) {
                    levelMx[i][j].setNeighbours(levelMx[i-1][j], null, levelMx[i][j-1], null);
                }
                else {
                    levelMx[i][j].setNeighbours(levelMx[i-1][j], null, levelMx[i][j-1], levelMx[i][j+1]);
                }
            }
            
            else {
                if (j === 0) {
                    levelMx[i][j].setNeighbours(levelMx[i-1][j], levelMx[i+1][j], null, levelMx[i][j+1]);
                }
                else if (j === lvlMxSize-1) {
                    levelMx[i][j].setNeighbours(levelMx[i-1][j], levelMx[i+1][j], levelMx[i][j-1], null);
                }
                else {
                    levelMx[i][j].setNeighbours(levelMx[i-1][j], levelMx[i+1][j], levelMx[i][j-1], levelMx[i][j+1]);
                }
            }
        }
    }
}