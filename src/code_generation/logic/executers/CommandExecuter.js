import { BaseExecuter } from "./BaseExecuter";

export class CommandExecuter extends BaseExecuter {

    execute() {
        return [true, this.codeStack];
    }

    clone() {
        return new CommandExecuter(this.codeStack);
    }
}