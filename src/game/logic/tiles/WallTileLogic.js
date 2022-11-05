import { TileStates } from "../enums/TileStates";
import { TileLogic } from "./TileLogic";

import { WallTile } from "../../display/tiles/WallTile"

export class WallTileLogic extends TileLogic {
    constructor(color, controller) {
        super(TileStates.Wall, color, controller);
    }

    canMoveIn(robot) {
        return false;
    }

    display(key = 0) {
        var display = null;
        if (this.robot)
            display = this.robot.display(key);
        else
            display = <WallTile key={key}  color={this.color} animate={this.animate} />;
        this.animate = false;
        return display;
    }
}