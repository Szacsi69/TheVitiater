import Blockly from 'blockly';
import { TileStates } from '../../game/logic/enums/TileStates';

Blockly.JavaScript['checker_input'] = function(block) {
    var condDto = `{"cond": "currentTile", "value":${TileStates.Checker}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['source_input'] = function(block) {
    var condDto = `{"cond": "currentTile", "value":${TileStates.Source}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['controller_input'] = function(block) {
    var condDto = `{"cond": "currentTile", "value":${TileStates.Controller}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
  };

Blockly.JavaScript['move'] = function(block) {
    var content = '"setTimeout(moveForward, 1000);"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['turn'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var content = '""';
    if (dropdown_direction === "left")
        content = '"setTimeout(turnLeft, 1000);"';
    else if (dropdown_direction === "right")
        content = '"setTimeout(turnRight, 1000);"';
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['drain'] = function(block) {
    var content = '"setTimeout(drain, 1000);"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['camouflage'] = function(block) {
    var content = '"setTimeout(camouflage, 1000);"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['vitiate'] = function(block) {
    var content = '"setTimeout(vitiate, 1000);"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['selection_block'] = function(block) {
    var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_do_blocks = Blockly.JavaScript.statementToCode(block, 'do_blocks');
    var condition = value_condition ? value_condition : '"not_set"';
    var content = statements_do_blocks;
    content = content.slice(0, -2);

    var codeDto = `{ "type": "selection", "condition": ${condition}, "content": [${content}]}, `;
    return codeDto;
};

Blockly.JavaScript['turn_selection_block'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var condition = '""';
    if (dropdown_direction === "left")
        condition = '{"cond": "canTurnLeft"}';
    else if (dropdown_direction === "right")
        condition = '{"cond": "canTurnRight"}';
    var statements_do_blocks = Blockly.JavaScript.statementToCode(block, 'do_blocks');
    var content = statements_do_blocks;
    content = content.slice(0, -2);

    var codeDto = `{ "type": "selection", "condition": ${condition}, "content": [${content}]}, `;
    return codeDto;
};

Blockly.JavaScript['loop_block'] = function(block) {
    var value_goal_tile = Blockly.JavaScript.valueToCode(block, 'goal_tile', Blockly.JavaScript.ORDER_ATOMIC);
    var condDto = value_goal_tile ? value_goal_tile : '"not_set"';
    var statements_repeat_blocks = Blockly.JavaScript.statementToCode(block, 'repeat_blocks');
    var content = statements_repeat_blocks;
    content = content.slice(0, -2);

    var codeDto = `{ "type": "loop", "condition": ${condDto}, "content": [${content}]}, `;
    return codeDto;
};