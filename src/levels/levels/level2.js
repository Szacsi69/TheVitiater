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

const controllers = [G, Z];
const mapSize = 15;
const map = [
    [ [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2] ],
    [ [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2] ],
    [ [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2] ],
    [ [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2] ],
    [ [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2], [W, Z, 2] ],
    [ [P, G, 1], [P, G, 1], [P, G, 1], [P, G, 1], [C, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2] ],
    [ [P, G, 1], [P, G, 1], [P, G, 1], [P, G, 1], [S, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2] ],
    [ [P, G, 1], [P, G, 1], [P, G, 1], [P, G, 1], [K, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2] ],
    [ [S, G, 1], [P, G, 1], [P, G, 1], [P, G, 1], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2] ],
    [ [K, G, 1], [P, G, 1], [P, G, 1], [P, G, 1], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2], [P, Z, 2] ],
    [ [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1] ],
    [ [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1] ],
    [ [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1] ],
    [ [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1] ],
    [ [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1], [W, G, 1] ]
];
const robot = [Directions.Right, ColorClasses.Gray, ColorClasses.Gray, 5, 0];

export const Level2 = {controllers: controllers, map: map, mapSize: mapSize, robot: robot};