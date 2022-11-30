import { BaseExecuter } from "./BaseExecuter";

export class LoopExecuter extends BaseExecuter {
    constructor(codeStack, conditionAsserters, looptrap = 20) {
        super(codeStack, conditionAsserters);
        this.codeStackSave = this.cloneCodeStack(codeStack);
        this.cond = false;
        this.shouldCheckCond = true;
        this.condSuccess = false;
        this.looptrap = looptrap;
    }

    updateCond(conditionState) {
        this.cond = false;
        for (let i = 0; i < this.conditionAsserters.length; i++) {
            this.cond = this.cond || !this.conditionAsserters[i].assert(conditionState);
        }
        for(let i = 0; i < this.codeStack.length; i ++)
            this.codeStack[i].updateCond(conditionState);
    }

    checkCond() {
        this.shouldCheckCond = false;
        this.condSuccess = this.cond;
    }

    execute() {
        if (this.codeStack.length === 0)
            return [true, "console.log('No commands in loop.'); idle();", false];
        if (this.shouldCheckCond)
            this.checkCond();
        if(this.condSuccess) {
            var result = this.codeStack[this.codeStack.length - 1].execute();
            if (result[0]) {
                this.codeStack.pop();
                if (this.codeStack.length === 0) {
                    if (this.looptrap === 0) throw 'Infinite loop occured in the code.';
                    this.looptrap--;
                    this.shouldCheckCond = true;
                    this.codeStack = this.cloneCodeStack(this.codeStackSave);
                    return [false, result[1], result[2]];
                }
                else 
                    return [false, result[1], result[2]];
            }
            else 
                return [false, result[1], result[2]];
        }
        else {
            return [true, "console.log('Loop condition is not true.'); idle();", false];
        }
    }

    cloneCodeStack(codeStack) {
        var copy = [];
        for(let i = codeStack.length - 1; i >= 0; i--) {
            copy.push(codeStack[i].clone());
        }
        return copy;
    }

    clone() {
        var copyStack = [];
        for(let i = this.codeStack.length - 1; i >= 0; i--) {
            copyStack.push(this.codeStack[i].clone());
        }
        return new LoopExecuter(copyStack, this.conditionAsserters, this.looptrap);
    }
}