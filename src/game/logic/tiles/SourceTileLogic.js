import { TileStates } from "../enums/TileStates";
import { TileLogic } from "./TileLogic";

import { SourceTile } from "../../display/tiles/SourceTile"

export class SourceTileLogic extends TileLogic {
    constructor(color, controller) {
        super(TileStates.Wall, color, controller);
    }

    gotDrained() {
        return this.color;
    }

    display(key = 0) {
        var display = null;
        if (this.robot)
            display = this.robot.display(key);
        else
            display = <SourceTile key={key}  color={this.color} animate={this.animate} />;
        this.animate = false;
        return display;
    }
}