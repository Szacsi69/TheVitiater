import { BaseAsserter } from "./BaseAsserter";

export class GoalTileColorAsserter extends BaseAsserter {
    constructor(condValue) {
        super(condValue)
    }
    assert(conditionState) {
        return conditionState.currentTileColor === this.condValue;
    }
}