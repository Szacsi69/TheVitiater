import "../css/workspace.css";

import "./blockly_components/blocks";
import "./blockly_components/generator";

import React, { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

function Workspace({exportCodeObj, permitRun}) {
    const [xml, setXml] = useState("");
    const [emptyWorkSpace, setEmptyWorkSpace] = useState(true);
    const [codeDto, setCodeDto] = useState("");

    const initialXml = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
    const toolboxCategories = {
        kind: "categoryToolbox",
        contents: [
        {
            kind: "category",
            name: "Input",
            colour: "#5CA699",
            contents: [
                {
                    kind: "block",
                    type: "checker_input"
                },
                {
                    kind: "block",
                    type: "source_input"
                },
                {
                    kind: "block",
                    type: "controller_input"
                },
                {
                    kind: "block",
                    type: "gray_color_input"
                },
                {
                    kind: "block",
                    type: "green_color_input"
                },
                {
                    kind: "block",
                    type: "yellow_color_input"
                }
            ]
        },
        {
            kind: "category",
            name: "Command",
            colour: "#A6745B",
            contents: [
                {
                    kind: "block",
                    type: "move"
                },
                {
                    kind: "block",
                    type: "turn"
                },
                {
                    kind: "block",
                    type: "drain"
                },
                {
                    kind: "block",
                    type: "camouflage"
                },
                {
                    kind: "block",
                    type: "vitiate"
                }
            ]
        },
        {
            kind: "category",
            name: "Selection",
            colour: "#5B68A6",
            contents: [
                {
                    kind: "block",
                    type: "turn_selection_block"
                },
                {
                    kind: "block",
                    type: "tile_selection_block"
                }
            ]
        },
        {
            kind: "category",
            name: "Loop",
            colour: "#995BA6",
            contents: [
                {
                    kind: "block",
                    type: "loop_block"
                }
            ]
        }
        ],
    };
    function workspaceDidChange(workspace) {
        if (workspace.getAllBlocks(false).length > 0) {
            setEmptyWorkSpace(false);
        }
        else
            setEmptyWorkSpace(true);
        var newCodeDto = Blockly.JavaScript.workspaceToCode(workspace);
        newCodeDto = newCodeDto.slice(0, -2)
        newCodeDto = '{"code": [' + newCodeDto + ']}';
        setCodeDto(newCodeDto);
    }

    return (
        <>
            <div className="row">
                <BlocklyWorkspace
                    toolboxConfiguration={toolboxCategories}
                    initialXml={initialXml}
                    className="workspace"
                    workspaceConfiguration={{
                        scrollbars: true,
                    }}
                    onWorkspaceChange={workspaceDidChange}
                    onXmlChange={setXml}
                />
                <button className="btn btn-success" disabled={!permitRun || emptyWorkSpace} onClick={() => exportCodeObj(JSON.parse(codeDto))}>Run</button>  
            </div>
        </>
    );
}

export default Workspace;

// <button onClick={() => exportCodeObj(JSON.parse(codeDto))}>RUN</button>

/*
    <pre id="generated-xml">{xml}</pre>
    <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={codeDto}
        readOnly
    ></textarea>
*/
