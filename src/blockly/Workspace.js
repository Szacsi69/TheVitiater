import "../css/workspace.css";

import "./blockly_components/blocks";
import "./blockly_components/generator";

import React, { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

import { SaveModal } from "./modals/SaveModal";
import { LoadModal } from "./modals/LoadModal";

function Workspace({maxBlockLimit, exportCapacity, exportCodeObj, permitRun}) {
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showLoadModal, setShowLoadModal] = useState(false);

    const [xml, setXml] = useState("");
    const [blockLimit, setBlockLimit] = useState(0);
    const [capacity, setCapacity] = useState(0);
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

    useEffect(() => {
        setBlockLimit(maxBlockLimit);
    },
        [maxBlockLimit]
    );

    useEffect(() => {
        exportCapacity(capacity)
    },
        [capacity]
    );

    function workspaceDidChange(workspace) {
        if (workspace.getAllBlocks(false).length > 0)
            setEmptyWorkSpace(false);
        else
            setEmptyWorkSpace(true);
        setCapacity(workspace.remainingCapacity());

        var newCodeDto = Blockly.JavaScript.workspaceToCode(workspace);
        newCodeDto = newCodeDto.slice(0, -2)
        newCodeDto = '{"code": [' + newCodeDto + ']}';
        setCodeDto(newCodeDto);
    }

    function closeSaveModal() {
        setShowSaveModal(false);
    }

    function closeLoadModal() {
        setShowLoadModal(false);
    }

    function loadXml(loadXml) {
        setShowLoadModal(false);
        var dom = Blockly.Xml.textToDom(loadXml);
        Blockly.mainWorkspace.clear();
        Blockly.Xml.domToWorkspace(dom, Blockly.mainWorkspace, );
    }

    return (
        <>  
            { blockLimit &&
            <div>
                <BlocklyWorkspace
                    toolboxConfiguration={toolboxCategories}
                    initialXml={initialXml}
                    className="workspace"
                    workspaceConfiguration={{
                        scrollbars: true,
                        maxBlocks: blockLimit,
                        trashcan: true,
                        maxInstances: {
                            ["move"]: 5,
                        }
                    }}
                    onWorkspaceChange={workspaceDidChange}
                    onXmlChange={setXml}
                />
                <div className="btn-group col-12">
                    <button type="button" className="btn btn-secondary btn-block" disabled={emptyWorkSpace} onClick={() => setShowSaveModal(true)}>Save</button>
                    <button type="button" className="btn btn-success btn-block" disabled={!permitRun || emptyWorkSpace} onClick={() => exportCodeObj(JSON.parse(codeDto))}>Run</button>
                    <button type="button" className="btn btn-secondary btn-block"  onClick={() => setShowLoadModal(true)}>Load</button>
                </div>
            </div>
            }
           <SaveModal show={showSaveModal} xml={xml} exit={closeSaveModal} />
           <LoadModal show={showLoadModal} load={loadXml} exit={closeLoadModal} />
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
