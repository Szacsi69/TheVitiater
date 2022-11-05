import { Directions } from './logic/enums/Directions';
import { TileStates } from './logic/enums/TileStates';
import { ColorClasses } from './logic/enums/ColorClasses';
import { PathTileLogic } from './logic/tiles/PathTileLogic';
import { WallTileLogic } from './logic/tiles/WallTileLogic';
import { CheckerTileLogic } from './logic/tiles/CheckerTileLogic';
import { SourceTileLogic } from './logic/tiles/SourceTileLogic';
import { RobotLogic } from './logic/RobotLogic';
import { ControllerTileLogic } from './logic/tiles/ControllerTileLogic';

export function level() {
    var lvlMxSize = 15;
    var levelMx = createMx(lvlMxSize);

    var grayController = new ControllerTileLogic(ColorClasses.Gray);    
    var yellowController1 = new ControllerTileLogic(ColorClasses.Yellow);    
    var yellowController2 = new ControllerTileLogic(ColorClasses.Yellow);

    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < lvlMxSize; j++) {
            levelMx[i][j] = new WallTileLogic(ColorClasses.Yellow, yellowController2);
        }
    }
    for (let j = 0; j < 11; j++) {
        levelMx[5][j] = new WallTileLogic(ColorClasses.Gray, grayController);
    }
    for (let j = 10; j < 15; j++) {
        levelMx[4][j] = new WallTileLogic(ColorClasses.Yellow, yellowController2);
    }

    for(let i = 5; i < 10; i++) {
        for(let j = 0; j < 4; j++) {
            levelMx[i][j] = new WallTileLogic(ColorClasses.Gray, grayController);
        }
    }
    for(let i = 5; i < 10; i++) {
        for(let j = 11; j < 15; j++) {
            levelMx[i][j] = new WallTileLogic(ColorClasses.Yellow, yellowController2);
        }
    }

    for(let i = 10; i < lvlMxSize; i++) {
        for(let j = 0; j < lvlMxSize; j++) {
            levelMx[i][j] = new WallTileLogic(ColorClasses.Yellow, yellowController2);
        }
    }
    
    levelMx[6][4] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[6][5] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[6][6] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[6][7] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[6][8] = yellowController1;
    levelMx[6][9] = new WallTileLogic(ColorClasses.Gray, grayController);
    levelMx[6][10] = new WallTileLogic(ColorClasses.Gray, grayController);

    levelMx[7][4] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    for(let j = 5; j < 9; j++)
        levelMx[7][j] = new WallTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[7][9] = new WallTileLogic(ColorClasses.Gray, grayController);
    levelMx[7][10] = new WallTileLogic(ColorClasses.Gray, grayController);

    levelMx[8][4] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    for(let j = 5; j < 9; j++)
        levelMx[8][j] = new WallTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[8][9] = new WallTileLogic(ColorClasses.Gray, grayController);
    levelMx[8][10] = new WallTileLogic(ColorClasses.Gray, grayController);

    levelMx[9][4] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[9][5] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[9][6] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[9][7] = new PathTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[9][8] =  new CheckerTileLogic(ColorClasses.Yellow, yellowController1);
    levelMx[9][9] = new PathTileLogic(ColorClasses.Gray, grayController);
    levelMx[9][10] = yellowController2;

    

    for(let j = 0; j < 5; j++) {
        levelMx[10][j] = new PathTileLogic(ColorClasses.Gray, grayController);
    }  

    for(let j = 6; j < lvlMxSize; j++) {
        levelMx[10][j] = new WallTileLogic(ColorClasses.Yellow, yellowController2);
    }
    for(let j = 0; j < 6; j++) {
        levelMx[11][j] = new WallTileLogic(ColorClasses.Gray, grayController);
    } 

    for(let i = 12; i < lvlMxSize; i++) {
        for(let j = 0; j < lvlMxSize; j++) {
            levelMx[i][j] = new WallTileLogic(ColorClasses.Yellow, yellowController2);
        }
    }
    levelMx[10][5] = new WallTileLogic(ColorClasses.Gray, grayController);

    createNeighbourhood(levelMx, lvlMxSize);

    var robot = new RobotLogic(Directions.Right, ColorClasses.Gray, ColorClasses.Gray)
    levelMx[10][0].placeRobot(robot);
    return [levelMx, robot]
}

export function colorTestLevel() {
    var lvlMxSize = 15;
    var levelMx = createMx(lvlMxSize);
    
    var grayController = new ControllerTileLogic(ColorClasses.Gray);    
    var greenController = new ControllerTileLogic(ColorClasses.Green);
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < lvlMxSize; j++) {
            levelMx[i][j] = new WallTileLogic(ColorClasses.Green, greenController);
        }
    }
    for(let i = 5; i < 10; i++) {
        for(let j = 0; j < 5; j++) {
            levelMx[i][j] = new PathTileLogic(ColorClasses.Gray, grayController);
        }
        for(let j = 5; j < lvlMxSize; j++) {
            levelMx[i][j] = new PathTileLogic(ColorClasses.Green, greenController);
        }
    }
    for(let i = 10; i < lvlMxSize; i++) {
        for(let j = 0; j < lvlMxSize; j++) {
            levelMx[i][j] = new WallTileLogic(ColorClasses.Gray, grayController);
        }
    }
    levelMx[5][5] = new CheckerTileLogic(ColorClasses.Green, greenController);

    levelMx[6][5] = new SourceTileLogic(ColorClasses.Green, greenController);

    levelMx[7][5] = greenController;

    levelMx[8][0] = new SourceTileLogic(ColorClasses.Gray, grayController);
    levelMx[9][0] = grayController;
    

    createNeighbourhood(levelMx, lvlMxSize);

    var robot = new RobotLogic(Directions.Right, ColorClasses.Gray, ColorClasses.Gray)
    levelMx[5][0].placeRobot(robot);
    return [levelMx, robot]
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

function createMx(lvlMxSize) {
    var levelMx = new Array(lvlMxSize);
    for(let i = 0; i < lvlMxSize; i++) 
        levelMx[i] = new Array(lvlMxSize)
    return levelMx;
}