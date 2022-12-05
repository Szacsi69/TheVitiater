import { BaseExecuter } from "./BaseExecuter";

export class SelectionExecuter extends BaseExecuter {
    constructor(codeStack, conditionAsserters) {
        super(codeStack, conditionAsserters);
        this.cond = false;
        this.shouldCheckCond = true;
        this.condSuccess = false;
    }

    updateCond(conditionState) {
        this.cond = true;
        for (let i = 0; i < this.conditionAsserters.length; i++) {
            this.cond = this.cond && this.conditionAsserters[i].assert(conditionState);
        }
        for(let i = 0; i < this.codeStack.length; i ++)
            this.codeStack[i].updateCond(conditionState);
    }

    checkCond() {
        this.shouldCheckCond = false;
        if (this.cond)
            this.condSuccess = true;
        else
            this.condSuccess = false;
    }

    execute() {
        if (this.codeStack.length === 0)
            return {noMoreToExecute: true, toExecute: "console.log('No commands in selection.'); idle();", shouldDelay: false};
        if (this.shouldCheckCond)
            this.checkCond();
        if(this.condSuccess) {
            var result = this.codeStack[this.codeStack.length - 1].execute();
            if (result.noMoreToExecute) {
                this.codeStack.pop();
                if (this.codeStack.length === 0)
                    return {noMoreToExecute: true, toExecute: result.toExecute, shouldDelay: result.shouldDelay};
                else 
                    return {noMoreToExecute: false, toExecute: result.toExecute, shouldDelay: result.shouldDelay};
            }
            else 
                return {noMoreToExecute: false, toExecute: result.toExecute, shouldDelay: result.shouldDelay};
        }
        else {
            return {noMoreToExecute: true, toExecute: "console.log('Selection condition is not true.'); idle();", shouldDelay: false};
        }
    }

    clone() {
        var copyStack = [];
        for(let i = this.codeStack.length - 1; i >= 0; i--) {
            copyStack.push(this.codeStack[i].clone());
        }
        return new SelectionExecuter(copyStack, this.conditionAsserters);
    }
}