import Blockly from 'blockly';

Blockly.Blocks['checker_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAmElEQVRIS+1W0RKAIAiT///oys46rITpkfiAj0qbWwjQdqzksGgZYiKq9I8aouFUinPwk+hrT/szCM5NLBH0kKM4JzECbB0TxM28+cXqzIYmxUhGX99wDv/nxG/FVU0pIJqNlufr1GpLVRJWKJ7ldHpZrfVR9GYajn8BcSmZ1g1AfEZlyol+HP1YHBBa9nSNt9GP0dI4GrcD6UxPtv5LGXYAAAAASUVORK5CYII=", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "TileState");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['source_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAlUlEQVRIS+2W2wrAMAhD5/9/9DoHFhnKIrZdGfray8EY0tJ51fFBEYOJaCmae+3gVY1zk3uBZ8kuirody8LIoes7C3w7jaukFpOhbrfyIGUuZATengKbkYnI5YULcjYcIDVjS+7/SY28WMMDBIEibg+7usARBVJZHQE998LgDMQ7+/rZmwHVd+7zr57dqb6/P4srocJqoKLNtgfulM0AAAAASUVORK5CYII=", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "TileState");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['controller_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAzklEQVRIS+1X0Q6AIAiM///oSqfOKeCZTKvpW2YccBwSnfc6FiySgInIxB0XV2nL72nAo8lwgBE42kp7GzgSa80xnGqTygpGIq/uEeLYAnx5ceVBTJMTlzmvY1bgQYMj6c65Le0k4KrqDDuXGnEJPBIp8u37Itb4QSLKNduV6v8DVwKfUdUoZ5bn2AbCAeRDAddwep2q5MRWYNHFuNvme8Atj9FUIwOEeju1HJHet/TfHASmAKPpkeYxjQZJIbuqRWrRqkZrQ/yFQQ08PXcBH5Fttuw3O4EAAAAASUVORK5CYII=", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "TileState");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gray_color_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAQUlEQVRIS+3TsQ0AIAhFQdjdhLG1t//aHANAcnn0rNn1YdrhV+qoX0kXatQxAXHFaO/FqFHHBMQVo/XH4hJXTOAARBxNHfuAVtwAAAAASUVORK5CYII=", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "TileColor");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['green_color_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAQ0lEQVRIS+3TsQ0AIAhFQdnNFZ3SIbS3/9gcA0ByedTc64wPUw53qaPukh6oUccExBWjfRejRh0TEFeM1h+LS1wxgQserVL5Y0he3gAAAABJRU5ErkJggg==", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "TileColor");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['yellow_color_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAQklEQVRIS+3TsQ0AIAhFQZjH/UdxHuztvzbHAJBcHj17TX2YdviVOupX0oUadUxAXDHaezFq1DEBccVo/bG4xBUTON1wWeMJBtISAAAAAElFTkSuQmCC", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, "TileColor");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["Left","left"], ["Right","right"], ["Around", "around"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drain'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drain");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['camouflage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Camouflage");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['vitiate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vitiate");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tile_selection_block'] = {
  init: function() {
    this.appendValueInput("goal_tile_state")
        .setCheck("TileState")
        .appendField("do if standing on");
    this.appendValueInput("goal_tile_color")
        .setCheck("TileColor")
        .appendField("and its color");
    this.appendStatementInput("do_blocks")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn_selection_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("do if there's path to the")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "direction");
    this.appendStatementInput("do_blocks")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_block'] = {
  init: function() {
    this.appendValueInput("goal_tile_state")
        .setCheck("TileState")
        .appendField("repeat until standing on");
    this.appendValueInput("goal_tile_color")
        .setCheck("TileColor")
        .appendField("and its color");
    this.appendStatementInput("repeat_blocks")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};