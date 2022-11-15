import Blockly from 'blockly';
import { TileStates } from '../../game/logic/enums/TileStates';
import { ColorClasses } from '../../game/logic/enums/ColorClasses';

Blockly.JavaScript['checker_input'] = function(block) {
    var condDto = `{"cond": "goalTileState", "value":${TileStates.Checker}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['source_input'] = function(block) {
    var condDto = `{"cond": "goalTileState", "value":${TileStates.Source}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['controller_input'] = function(block) {
    var condDto = `{"cond": "goalTileState", "value":${TileStates.Controller}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['gray_color_input'] = function(block) {
    var condDto = `{"cond": "goalTileColor", "value":${ColorClasses.Gray}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['green_color_input'] = function(block) {
    var condDto = `{"cond": "goalTileColor", "value":${ColorClasses.Green}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['yellow_color_input'] = function(block) {
    var condDto = `{"cond": "goalTileColor", "value":${ColorClasses.Yellow}}`
    return [condDto, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['move'] = function(block) {
    var content = '"moveForward();"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['turn'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var content = '""';
    if (dropdown_direction === "left")
        content = '"turnLeft();"';
    else if (dropdown_direction === "right")
        content = '"turnRight();"';
    else if (dropdown_direction === "around")
        content = '"turnAround();"';
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['drain'] = function(block) {
    var content = '"drain();"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['camouflage'] = function(block) {
    var content = '"camouflage();"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['vitiate'] = function(block) {
    var content = '"vitiate();"'
    var codeDto = `{ "type": "command", "content": ${content} }, `;
    return codeDto;
};

Blockly.JavaScript['tile_selection_block'] = function(block) {
    var value_goal_tile_state = Blockly.JavaScript.valueToCode(block, 'goal_tile_state', Blockly.JavaScript.ORDER_ATOMIC);
    var value_goal_tile_color = Blockly.JavaScript.valueToCode(block, 'goal_tile_color', Blockly.JavaScript.ORDER_ATOMIC);
    var conditions = value_goal_tile_state && value_goal_tile_color ? value_goal_tile_state + ', ' + value_goal_tile_color : '';
    var statements_do_blocks = Blockly.JavaScript.statementToCode(block, 'do_blocks');
    var content = statements_do_blocks;
    content = content.slice(0, -2);
    var codeDto = `{ "type": "selection", "conditions": [${conditions}], "content": [${content}]}, `;
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

    var codeDto = `{ "type": "selection", "conditions": [${condition}], "content": [${content}]}, `;
    return codeDto;
};

Blockly.JavaScript['loop_block'] = function(block) {
    var value_goal_tile_state = Blockly.JavaScript.valueToCode(block, 'goal_tile_state', Blockly.JavaScript.ORDER_ATOMIC);
    var value_goal_tile_color = Blockly.JavaScript.valueToCode(block, 'goal_tile_color', Blockly.JavaScript.ORDER_ATOMIC);
    var conditions = value_goal_tile_state && value_goal_tile_color ? value_goal_tile_state + ', ' + value_goal_tile_color : '';
    var statements_repeat_blocks = Blockly.JavaScript.statementToCode(block, 'repeat_blocks');
    var content = statements_repeat_blocks;
    content = content.slice(0, -2);
    var codeDto = `{ "type": "loop", "conditions": [${conditions}], "content": [${content}]}, `;
    return codeDto;
};