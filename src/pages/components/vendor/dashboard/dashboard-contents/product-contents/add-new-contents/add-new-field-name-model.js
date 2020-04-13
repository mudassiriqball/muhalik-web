import { Modal, Form, InputGroup, Button } from 'react-bootstrap';
import React, { Component } from 'react';

function AddNewFieldNameModal(props) {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");

    function handleAdd() {
        if (value != "") {
            console.log("handle Category:", value)
            return true;
        } else {
            setError('Please Enter Value')
        }
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Field
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label style={{ fontSize: '14px', textAlign: 'center', width: '100%' }}>
                    Your Request for Adding New Field Name will be send to Admin, Admin will Approve/Discard it.
                </Form.Label>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Enter Field Name"
                            name="sku"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            isInvalid={error}
                        />
                        <Form.Control.Feedback type="invalid">
                            {error}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" className="mr-auto" onClick={handleAdd ? props.onHide : null}>
                    Add
                </Button>
                <Button size="sm" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddNewFieldNameModal;