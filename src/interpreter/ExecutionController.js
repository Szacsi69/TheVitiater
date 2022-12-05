import { CommandExecuter } from "./executers/CommandExecuter";
import { LoopExecuter } from "./executers/LoopExecuter";
import { SelectionExecuter } from "./executers/SelectionExecuter";
import { CanTurnLeftAsserter } from "./condition_asserters/CanTurnLeftAsserter";
import { CanTurnRightAsserter } from "./condition_asserters/CanTurnRightAsserter";
import { GoalTileStateAsserter } from "./condition_asserters/GoalTileStateAsserter";
import { GoalTileColorAsserter } from "./condition_asserters/GoalTileColorAsserter";

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
            this.codeStack.push(new CommandExecuter(`finishGame(false, "Error: ${err}");`, []));
        }
    }

    dtoToCode(dto) {
        var codeStack = [];
        if (dto.type === "command")
            return new CommandExecuter(dto.content, []);
        if (dto.type === "selection") {
            var conditionAsserters = [];
            if (dto.conditions.length === 0)
                throw 'One of the blocks has no condition when it should.';
            for (let i = 0; i < dto.conditions.length; i++) {
                switch (dto.conditions[i].cond) {
                    case "canTurnLeft":
                        conditionAsserters.push(new CanTurnLeftAsserter());
                        break;
                    case "canTurnRight":
                        conditionAsserters.push(new CanTurnRightAsserter());
                        break;
                    case "goalTileState":
                        conditionAsserters.push(new GoalTileStateAsserter(dto.conditions[i].value));
                        break;
                    case "goalTileColor":
                        conditionAsserters.push(new GoalTileColorAsserter(dto.conditions[i].value));
                        break;
                    default:
                        break;
                }
            }
            for(let i = dto.content.length - 1; i >= 0; i--) {
                codeStack.push(this.dtoToCode(dto.content[i]));
            }

            return new SelectionExecuter(codeStack, conditionAsserters)
        }
        if (dto.type === "loop") {
            var conditionAsserters = [];
            if (dto.conditions.length === 0)
                throw 'One of the blocks has no condition when it should.';            
            for (let i = 0; i < dto.conditions.length; i++) {
                switch (dto.conditions[i].cond) {
                    case "goalTileState":
                        conditionAsserters.push(new GoalTileStateAsserter(dto.conditions[i].value));
                        break;
                    case "goalTileColor":
                        conditionAsserters.push(new GoalTileColorAsserter(dto.conditions[i].value));
                        break;
                    default:
                        break;
                }
            }
            for(let i = dto.content.length - 1; i >= 0; i--) {
                codeStack.push(this.dtoToCode(dto.content[i]));
            }
            return new LoopExecuter(codeStack, conditionAsserters)
        }
    }

    updateConditionState(conditionState) {
        for(let i = 0; i < this.codeStack.length; i++)
            this.codeStack[i].updateCond(conditionState);
    }

    execute() {
        try {
            var result = this.codeStack[this.codeStack.length - 1].execute();
            if (result.noMoreToExecute) {
                this.codeStack.pop();
            }
            return {command: result.toExecute, delayRequired: result.shouldDelay};
        }
        catch (err) {
            this.codeStack = [];
            return {command: `finishGame(false, "Error: ${err}");`, delayRequired: false};
        }
    }

    hasCode() {
        return this.codeStack.length > 0;
    }

    clone() {
        return new ExecutionController(this.codeStack);
    }
}