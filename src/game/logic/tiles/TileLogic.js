import { Tile } from "../../display/tiles/Tile"

export class TileLogic {
    constructor(state, color, controller = null) {
        this.state = state;
        this.color = color;
        this.controller = controller;
        this.robot = null;
        this.animate = true;
    }

    getState() { return this.state; }
    setState(state) { this.state = state; }
    getColor() { return this.color; }
    setColor(color) { this.color = color; }

    updateColor() {
        var prevColor = this.color;
        this.color = this.controller.getColor();
        if (prevColor !== this.color)
            this.animate = true;
    }

    setNeighbours(up, down, left, right) {
        this.upNeighbour = up;
        this.downNeighbour = down;
        this.leftNeighbour = left;
        this.rightNeighbour = right;
    }
    getUpNeighbour() { return this.upNeighbour }
    getDownNeighbour() { return this.downNeighbour }
    getLeftNeighbour() { return this.leftNeighbour }
    getRightNeighbour() { return this.rightNeighbour }

    placeRobot(robot) {
        this.robot = robot;
        robot.setLocation(this);
    }
    removeRobot() { this.robot = null; }

    canMoveIn(robot) {
        return true;
    }

    canMoveOut() {
        return true;
    }

    gotDrained() {
        return null;
    }

    gotVitiated(color) {
        return null;
    }

    display(key = 0) {
        var display = null;
        if (this.robot)
            display = this.robot.display(key);
        else
            display = <Tile key={key}  displayImg={null} animate={this.animate} />;
        this.animate = false;
        return display;   
    }
}