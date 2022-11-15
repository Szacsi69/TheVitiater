
export class GoalTileStateAsserter {
    constructor(condTileState) {
        this.condTileState = condTileState;
    }
    assert(conditionState) {
        return conditionState.currentTileState === this.condTileState;
    }
}