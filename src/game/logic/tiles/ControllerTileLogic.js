import { TileStates } from "../enums/TileStates";
import { TileLogic } from "./TileLogic";

import { ControllerTile } from "../../display/tiles/ControllerTile"

export class ControllerTileLogic extends TileLogic {
    constructor(color) {
        super(TileStates.Controller, color);
    }

    updateColor() {
        return true;
    }

    gotVitiated(color) {
        this.color = color;
        return true;
    }

    display(key = 0) {
        var display = null;
        if (this.robot)
            display = this.robot.display(key);
        else
            display = <ControllerTile key={key}  color={this.color} animate={this.animate} />;
        this.animate = false;
        return display;
    }
}