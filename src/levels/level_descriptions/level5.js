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

const controllers = [Z, G];
const mapSize = 15;
const map = [
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [P, Z, 1], [P, Z, 1], [P, Z, 1], [P, Z, 1], [C, Z, 1], [K, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [P, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [P, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [P, Z, 1], [P, G, 2], [P, G, 2], [P, G, 2], [P, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, G, 2], [W, G, 2], [W, G, 2], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, Z, 1], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, Z, 1], [W, Z, 1], [W, Z, 1] ],
    [ [W, Z, 1], [W, Z, 1], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, G, 2], [W, Z, 1], [W, Z, 1] ]
];
const robot = { direction: Directions.Right, innerColor: ColorClasses.Gray, outerColor: ColorClasses.Gray, posRow: 7, posColumn: 4};

const description = {title: "Objective", details: "Vitiate all of the fields in the level, turning them gray!"}

const maxBlockLimit = 10;

export const Level5 = {controllers: controllers, map: map, mapSize: mapSize, robot: robot, description: description, maxBlockLimit: maxBlockLimit};