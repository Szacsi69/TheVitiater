import { TileStates } from "../enums/TileStates";
import { TileLogic } from "./TileLogic";

import { PathTile } from "../../display/tiles/PathTile"

export class PathTileLogic extends TileLogic {
    constructor(color, controller) {
        super(TileStates.Path, color, controller);
    }

    display(key = 0) {
        var display = null;
        if (this.robot)
            display = this.robot.display(key);
        else
            display = <PathTile key={key}  color={this.color} animate={this.animate} />;
        this.animate = false;
        return display;
    }
}