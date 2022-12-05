
export class BaseAsserter {
    constructor(condValue = null) {
        this.condValue = condValue;
    }

    assert(conditionState) {
        return true;
    }
}