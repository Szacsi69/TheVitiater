
export class BaseExecuter {
    constructor(codeStack, conditionAsserters) {
        this.codeStack = codeStack;
        this.conditionAsserters = conditionAsserters;
    }

    updateCond(conditionState) { }

    execute() { }
}