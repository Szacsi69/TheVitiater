
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import React, { useState, useEffect, useCallback } from "react";

import { CodeElement } from "./CodeElement";

export function LoadModal({show, load, exit}) {
    const [codeElements, setCodeElements] = useState([])
    const [errorMsg, setErrorMsg] = useState("");

    useEffect( () => {
        downloadCodes();
    },
        [show]
    );

    const downloadCodes = useCallback(
        () => {
            (
                async () => {
                    try {
                        const response = await fetch('http://localhost:8000/api/getAll', {
                            headers: {'Content-Type': 'application/json'},
                        });
                        if (response.ok) {
                            const codeElementsArray = await response.json();
                            assembleCodeElements(codeElementsArray);
                        }
                        else {
                            const content = await response.json();
                            if (content.message)
                                setErrorMsg(content.message);
                        }
                    } catch(err) {
                        setErrorMsg("Hiba.");
                    }
                }
            )();
        },
            []
    );

    const downloadSpecificCode = (codeElem) => {
        (
            async () => {
                try {
                    var id = codeElem._id;
                    var url = 'http://localhost:8000/api/getOne/' + id;
                    const response = await fetch(url, {
                        headers: {'Content-Type': 'application/json'},
                    });
                    if (response.ok) {
                        var resultCodeElem = await response.json();
                        load(resultCodeElem.codeXml);
                    }
                    else {
                        const content = await response.json();
                        if (content.message)
                            setErrorMsg(content.message);
                    }
                } catch(err) {
                    setErrorMsg("Hiba.");
                }
            }
        )();
    }

    const deleteSpecificCode = (codeElem) => {
        (
            async () => {
                try {
                    var id = codeElem._id;
                    var url = 'http://localhost:8000/api/delete/' + id;
                    const response = await fetch(url, {
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'}
                    });
                    if (response.status === 204) {
                        downloadCodes();
                    }
                    else {
                        const content = await response.json();
                        if (content.message)
                            setErrorMsg(content.message);
                    }
                } catch(err) {
                    setErrorMsg("Hiba.");
                }
            }
        )();
    }

    function assembleCodeElements(codeElementsArray) {
        var elements = [];
        for(let i = 0; i < codeElementsArray.length; i++) {
            elements.push(<CodeElement key={i} codeElem={codeElementsArray[i]} use={downloadSpecificCode} del={deleteSpecificCode} />)
        }
        setCodeElements(elements);
    }

    function close() {
        setErrorMsg("");
        exit();
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Select the program you want to use!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { errorMsg &&
                    <p className="text-danger">{errorMsg}</p>
                }
                <div className="p-2">
                    {codeElements}
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={close}>
                Close
            </Button>
        </Modal.Footer>
        </Modal>
    );
}