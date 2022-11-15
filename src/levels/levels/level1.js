import { TileStates } from '../../game/logic/enums/TileStates';
import { ColorClasses } from '../../game/logic/enums/ColorClasses';
import { Directions } from '../../game/logic/enums/Directions';

const G = ColorClasses.Gray;
const Z = ColorClasses.Green;
const Y = ColorClasses.Yellow;

const P = TileStates.Path;
const W = TileStates.Wall;
const S = TileStates.Source;
const C = TileStates.Checker;
const K = TileStates.Controller;

const controllers = [Z, Y];
const mapSize = 15;
const map = [
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
const robot = [Directions.Right, ColorClasses.Gray, ColorClasses.Gray, 10, 0];

const description = {title: "Objective", details: "Vitiate all of the fields in the level, turning them gray!"}

export const Level1 = {controllers: controllers, map: map, mapSize: mapSize, robot: robot, description: description};