import { TileStates } from '../game/logic/enums/TileStates';
import { ColorClasses } from '../game/logic/enums/ColorClasses';
import { Directions } from '../game/logic/enums/Directions';

const G = ColorClasses.Gray;
const Z = ColorClasses.Green;
const Y = ColorClasses.Yellow;

const P = TileStates.Path;
const W = TileStates.Wall;
const S = TileStates.Source;
const C = TileStates.Checker;
const K = TileStates.Controller;

export const level1Controllers = [Z, Y];
export const level1Map = [
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [P, Z, 1], [P, Z, 1], [P, Z, 1], [P, Z, 1], [K, Z, 1], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [P, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [P, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [P, Z, 1], [P, Z, 1], [P, Z, 1], [P, Z, 1], [C, Z, 1], [P, Y, 2], [K, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [P, Z, 1], [P, Z, 1], [P, Z, 1], [P, Z, 1], [P, Z, 1], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ],
    [ [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2], [W, Y, 2] ]
];
export const level1Robot = [Directions.Right, ColorClasses.Gray, ColorClasses.Gray, 10, 0];