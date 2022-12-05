import { BaseAsserter } from "./BaseAsserter";

export class GoalTileStateAsserter extends BaseAsserter {
    constructor(condValue) {
        super(condValue)
    }
    assert(conditionState) {
        return conditionState.currentTileState === this.condValue;
    }
}