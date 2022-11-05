import { TileStates } from "../enums/TileStates";
import { TileLogic } from "./TileLogic";

import { CheckerTile } from "../../display/tiles/CheckerTile"

export class CheckerTileLogic extends TileLogic {
    constructor(color, controller) {
        super(TileStates.Checker, color, controller);
    }

    canMoveOut() {
        if (this.robot.getColor() === this.color)
            return true;
        else
            return false;
    }

    display(key = 0) {
        var display = null;
        if (this.robot)
            display = this.robot.display(key);
        else
            display = <CheckerTile key={key}  color={this.color} animate={this.animate} />;
        this.animate = false;
        return display;
    }
}