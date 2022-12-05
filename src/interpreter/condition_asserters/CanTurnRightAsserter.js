import { BaseAsserter } from "./BaseAsserter";

export class CanTurnRightAsserter extends BaseAsserter {
    assert(conditionPack) {
        return conditionPack.canTurnRight;
    }
}