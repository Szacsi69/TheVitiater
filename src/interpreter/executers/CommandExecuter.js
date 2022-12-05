import { BaseExecuter } from "./BaseExecuter";

export class CommandExecuter extends BaseExecuter {

    constructor(codeStack, conditionAsserters) {
        super(codeStack, conditionAsserters);
    }

    execute() {
        return {noMoreToExecute: true, toExecute: this.codeStack, shouldDelay: true};
    }

    clone() {
        return new CommandExecuter(this.codeStack);
    }
}