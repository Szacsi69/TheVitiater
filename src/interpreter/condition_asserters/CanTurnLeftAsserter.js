import { BaseAsserter } from "./BaseAsserter";

export class CanTurnLeftAsserter extends BaseAsserter {
    assert(conditionPack) {
        return conditionPack.canTurnLeft;
    }
}