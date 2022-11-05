
export class CurrentTileAsserter {
    constructor(condTileState) {
        this.condTileState = condTileState;
    }
    assert(conditionState) {
        return conditionState.currentTile === this.condTileState;
    }
}