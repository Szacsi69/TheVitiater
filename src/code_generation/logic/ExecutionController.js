import { CommandExecuter } from "./executers/CommandExecuter";
import { LoopExecuter } from "./executers/LoopExecuter";
import { SelectionExecuter } from "./executers/SelectionExecuter";
import { CanTurnLeftAsserter } from "./condition_asserters/CanTurnLeftAsserter";
import { CanTurnRightAsserter } from "./condition_asserters/CanTurnRightAsserter";
import { CurrentTileAsserter } from "./condition_asserters/CurrentTileAsserter";

export class ExecutionController {
    constructor(codeStack = []) {
        this.codeStack = codeStack;
    }

    generateCodeStructure(dto) {
        try {
            dto = dto.code;
            for(let i = dto.length - 1; i >= 0; i--) {
                this.codeStack.push(this.dtoToCode(dto[i]));
            }
        }
        catch (err) {
            this.codeStack = [];
            this.codeStack.push(new CommandExecuter(`console.log(${err});`));
        }
    }

    dtoToCode(dto) {
        var condAsserter = null;
        var codeStack = [];
        if (dto.type === "command")
            return new CommandExecuter(dto.content);
        if (dto.type === "selection") {
            if (dto.condition === "not_set")
                throw '"One of the blocks has no condition when it should."';
            switch (dto.condition.cond) {
                case "canTurnLeft":
                    condAsserter = new CanTurnLeftAsserter();
                    break;
                case "canTurnRight":
                    condAsserter = new CanTurnRightAsserter();
                    break;
                case "currentTile":
                    condAsserter = new CurrentTileAsserter(dto.condition.value);
                    break;
                default:
                    break;
            }
            for(let i = dto.content.length - 1; i >= 0; i--) {
                codeStack.push(this.dtoToCode(dto.content[i]));
            }
            return new SelectionExecuter(codeStack, condAsserter)
        }
        if (dto.type === "loop") {
            if (dto.condition === "not_set")
                throw '"One of the blocks has no condition when it should."';            
            switch (dto.condition.cond) {
                case "currentTile":
                    condAsserter = new CurrentTileAsserter(dto.condition.value);
                    break;
                default:
                    break;
            }
            for(let i = dto.content.length - 1; i >= 0; i--) {
                codeStack.push(this.dtoToCode(dto.content[i]));
            }
            return new LoopExecuter(codeStack, condAsserter)
        }
    }

    updateConditionState(conditionState) {
        for(let i = 0; i < this.codeStack.length; i++)
            this.codeStack[i].updateCond(conditionState); 
    }

    execute() {
        try {
            var result = this.codeStack[this.codeStack.length - 1].execute();
            if (result[0]) {
                this.codeStack.pop();
            }
            return result[1];
        }
        catch (err) {
            this.codeStack = [];
            return `console.log("${err}");`
        }
    }

    hasCode() {
        return this.codeStack.length > 0;
    }

    clone() {
        return new ExecutionController(this.codeStack);
    }
}