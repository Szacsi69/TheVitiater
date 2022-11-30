import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from "react";

export function SaveModal({show, xml, exit}) {
    const [codeName, setCodeName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const saveCode = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/post', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: codeName,
                    codeXml: xml
                })
            });
            if (response.ok) {
                close();
            }
            else {
                const content = await response.json();
                if (content.message)
                    setErrorMsg(content.message);
            }
        } catch (err) {
            setErrorMsg("Sikertelen mentés.");
        }
    }

    function close() {
        setErrorMsg("");
        setCodeName("");
        exit();
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Give your program a name!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { errorMsg &&
                    <p className="text-danger">{errorMsg}</p>
                }
                <input type="text" placeholder="Enter name..." className="form-control"
                            onChange={e => setCodeName(e.target.value)} /> 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={close}>
                Close
            </Button>
            <Button variant="success" disabled={codeName === ""} onClick={saveCode}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
    );
}