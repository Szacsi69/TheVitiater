import "../css/workspace.css";

import "./blockly_components/blocks";
import "./blockly_components/generator";

import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

function Workspace({exportCodeObj}) {
    const [xml, setXml] = useState("");
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
            }
            ]
        },
        {
            kind: "category",
            name: "Command",
            colour: "#5CA699",
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
            colour: "#5CA699",
            contents: [
                {
                    kind: "block",
                    type: "selection_block"
                },
                {
                    kind: "block",
                    type: "turn_selection_block"
                }
            ]
        },
        {
            kind: "category",
            name: "Loop",
            colour: "#5CA699",
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
                        scrollbars: false,
                    }}
                    onWorkspaceChange={workspaceDidChange}
                    onXmlChange={setXml}
                />
                <button className="btn btn-success" onClick={() => exportCodeObj(JSON.parse(codeDto))}>Run</button>  
            </div>
            <pre id="generated-xml">{xml}</pre>
            <textarea
                id="code"
                style={{ height: "200px", width: "400px" }}
                value={codeDto}
                readOnly
            ></textarea>
        </>
    );
}

export default Workspace;

// <button onClick={() => exportCodeObj(JSON.parse(codeDto))}>RUN</button>