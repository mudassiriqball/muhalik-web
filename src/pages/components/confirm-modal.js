import { Modal, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ConfirmModal(props) {
    return (
        <Modal
            show={props.show} onHide={props.onHide}
            size="md"
            aria-labelledby="alert-modal"
            centered
        >
            <div style={{
                border: '1px solid #ff3333', borderRadius: '5px'
            }}>
                <Modal.Header closeButton style={{ color: '#ff3333', borderBottom: '1px solid #ff3333' }}>
                    <FontAwesomeIcon icon={faTrash} style={{
                        color: '#ff3333',
                        marginRight: '10px',
                        width: '35px',
                        height: '35px',
                        maxHeight: '35px',
                        maxWidth: '35px',
                    }} ></FontAwesomeIcon>
                    <Modal.Title id="alert-modal">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form.Label style={{ fontSize: '14px', padding: '0%', margin: '0%' }}>
                        <span style={{ fontWeight: 'bold' }}> Name: </span>
                        {props.name}
                    </Form.Label>
                    <br />
                    <Form.Label style={{ fontSize: '14px', padding: '0%', margin: '0%' }}>
                        <span style={{ fontWeight: 'bold' }}> ID: </span>
                        {props._id}
                    </Form.Label>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant='outline-danger' className='mr-auto' onClick={props.confirm}>Confirm</Button>
                    <Button size="sm" variant='outline-primary' onClick={props.onHide}>Cancel</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default ConfirmModal