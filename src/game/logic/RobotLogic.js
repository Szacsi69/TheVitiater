import { Directions } from "./enums/Directions";
import { Robot } from "../display/Robot"
import { TileStates } from "./enums/TileStates";

export class RobotLogic {
    constructor(dir, color, memColor, tile = null) {
        this.dir = dir;
        this.color = color;
        this.memColor = memColor;
        this.tile = tile;
        if (tile) this.tile.placeRobot(this);
    }

    getDir() { return this.dir; }
    getColor() { return this.color; }
    getMemColor() { return this.memColor; }
    getLocation() { return this.tile }
    setLocation(tile) { this.tile = tile; }

    moveForward() {
        var nextTile = null;
        switch(this.dir) {
            case Directions.Up:
                nextTile = this.tile.getUpNeighbour();
                break;
            case Directions.Down:
                nextTile = this.tile.getDownNeighbour();
                break;
            case Directions.Left:
                nextTile = this.tile.getLeftNeighbour();
                break;
            case Directions.Right:
                nextTile = this.tile.getRightNeighbour();
                break;
            default:
                break;
        }
        if (!this.tile.canMoveOut())
            return [false, "The Vitiater got eliminated by a Checker."];
        if (nextTile === null || !nextTile.canMoveIn(this))
            return [false, "The Vitiater collided with the wall."];
        this.tile.removeRobot();
        nextTile.placeRobot(this);
        return [true, "Success!"];
    }

    turnLeft() {
        if (this.dir > 0)
            this.dir = this.dir - 1;
        else 
            this.dir = 3;
    }

    turnRight() {
        if (this.dir < 3)
            this.dir = this.dir + 1;
        else
            this.dir = 0;
    }

    turnAround() {
        if (this.dir < 2)
            this.dir += 2;
        else
            this.dir -= 2;
    }

    drain() {
        var drainResult = this.tile.gotDrained();
        if (drainResult)
            this.memColor = drainResult;
    }

    camouflage() {
        this.color = this.memColor;
    }

    vitiate() {
        var success = this.tile.gotVitiated(this.memColor);
        return success;
    }

    canGoLeft() {
        switch(this.dir) {
            case Directions.Up:
                return this.tile.getLeftNeighbour()?.getState() !== TileStates.Wall;
            case Directions.Down:
                return this.tile.getRightNeighbour()?.getState() !== TileStates.Wall;
            case Directions.Left:
                return this.tile.getDownNeighbour()?.getState() !== TileStates.Wall;
            case Directions.Right:
                return this.tile.getUpNeighbour()?.getState() !== TileStates.Wall;
            default:
                break;
        }
    }

    canGoRight() {
        switch(this.dir) {
            case Directions.Up:
                return this.tile.getRightNeighbour()?.getState() !== TileStates.Wall;
            case Directions.Down:
                return this.tile.getLeftNeighbour()?.getState() !== TileStates.Wall;
            case Directions.Left:
                return this.tile.getUpNeighbour()?.getState() !== TileStates.Wall;
            case Directions.Right:
                return this.tile.getDownNeighbour()?.getState() !== TileStates.Wall;
            default:
                break;
        }
    }

    clone() {
        return new RobotLogic(this.dir, this.color, this.memColor, this.tile);
    }

    display(key = 0) {
        var rotation = 0;
        switch (this.dir) {
            case Directions.Up:
                rotation = -90;
                break;
            case Directions.Down:
                rotation = 90;
                break;
            case Directions.Left:
                rotation = -180;
                break;
            case Directions.Right:
                rotation = 0;
                break;
            default:
                rotation = 0;
                break;
        }
        return <Robot key={key} color={this.color} memColor={this.memColor} rotation={rotation} />
    }
}