import { Modal, Form, InputGroup, Button, Spinner } from 'react-bootstrap'
import React, { Component } from 'react'
import axios from 'axios'
import MuhalikConfig from '../../../../../../../sdk/muhalik.config'
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'

function AddNewFieldNameModal(props) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [error, setError] = React.useState("")
    const [message, setMessage] = React.useState("")

    async function handleAdd() {
        if (value.length > 2 && value.length < 21) {
            setIsLoading(true)
            const url = MuhalikConfig.PATH + '/api/categories/field-request';
            let data = []
            data = {
                value: value,
                label: value
            }
            await axios.post(url, {
                data
            }, {
                headers: { 'authorization': props.token }
            }).then((response) => {
                setIsLoading(false)
                setMessage('Your Request Sended Successfully, You will be informed soon')
            }).catch((error) => {
                setIsLoading(false)
                setMessage('Request Failed')
            });
        } else {
            setError('Must be 2-20 characters')
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
                {message ?
                    <Form.Label style={{ fontSize: '14px', textAlign: 'center', width: '100%' }}>{message}</Form.Label>
                    :
                    <>
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
                                    onChange={(e) => {
                                        setValue(e.target.value)
                                        if (e.target.value.length > 2 && e.target.value.length < 21) {
                                            setError("")
                                        }
                                    }}
                                    isInvalid={error}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {error}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </>
                }
            </Modal.Body>
            <Modal.Footer>
                {message ?
                    <Button size="sm" className="mr-auto" onClick={() => { setMessage("") }}>Add More?</Button>
                    :
                    <Button size="sm" className="mr-auto" onClick={handleAdd}>
                        {isLoading ? 'Adding' : 'Add Field'}
                        {isLoading ? <Spinner animation="grow" size="sm" /> : <div></div>}
                    </Button>
                }
                <Button size="sm" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNewFieldNameModal