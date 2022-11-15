
export class GoalTileColorAsserter {
    constructor(condTileColor) {
        this.condTileColor = condTileColor;
    }
    assert(conditionState) {
        return conditionState.currentTileColor === this.condTileColor;
    }
}