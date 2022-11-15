import { BaseExecuter } from "./BaseExecuter";

export class CommandExecuter extends BaseExecuter {

    constructor(codeStack, conditionAsserters) {
        super(codeStack, conditionAsserters);
    }

    execute() {
        return [true, this.codeStack, true];
    }

    clone() {
        return new CommandExecuter(this.codeStack);
    }
}