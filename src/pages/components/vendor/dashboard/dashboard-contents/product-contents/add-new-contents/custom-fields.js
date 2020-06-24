import React, { Component } from 'react';
import { Accordion, Form, InputGroup, Col, Button, Row, Card, Modal, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import GlobalStyleSheet from '../../../../../../../styleSheet';
import Select, { components } from 'react-select';
import AddNewFieldNameModal from './add-new-field-name-model';
import AlertModal from '../../../../../alert-modal'


const groupStyles = {
    border: `1px solid ${GlobalStyleSheet.admin_primry_color}`,
    borderRadius: '5px',
    background: 'white',
    color: `${GlobalStyleSheet.admin_primry_color}`,
};

const Group = props => (
    <div style={groupStyles}>
        <components.Group {...props} />
    </div>
);


const CustomFields = props => {
    const [modalShow, setModalShow] = React.useState(false);
    const [fieldName, setFieldName] = React.useState('');
    const [fieldValue, setFieldValue] = React.useState('');
    const [error, setError] = React.useState('');
    const [userStatusAlert, setUserStatusAlert] = React.useState(false);
    const [statusAlertMessage, setStatusAlertMessage] = React.useState('');

    function handleAddCustomFieldBtnClick() {
        if (fieldName != '' && fieldValue != '') {
            const copyArray = Object.assign([], props.customFieldsArray)
            copyArray.push({
                name: fieldName.value,
                value: fieldValue,
            })
            props.setFieldsArrayHandler(copyArray)
            setError('');
            setFieldName('');
            setFieldValue('');
        } else {
            setError('Enter Field Name and Value');
        }
    }

    function deleteCustomFieldsClick(index) {
        const copyArray = Object.assign([], props.customFieldsArray);
        copyArray.splice(index, 1);
        props.setFieldsArrayHandler(copyArray)

    }

    function saveCustomFieldsHandler() {
        if (props.customFieldsArray != '') {
            setError('');
            props.saveCustomFieldsHandler();
        }
        else {
            setError('Add Fields First');
        }
    }
    function handleShowModal() {
        if (props.user_status == 'disapproved') {
            setUserStatusAlert(true)
            setStatusAlertMessage('You can\'t upload product, Your account is not approved yet')
        } else if (props.user_status == 'restricted') {
            setUserStatusAlert(true)
            setStatusAlertMessage('You can\'t upload product, Your account has blocked, Contact to Admin')
        } else {
            setModalShow(true)
        }
    }

    return (
        <>
            <AlertModal
                onHide={(e) => setUserStatusAlert(false)}
                show={userStatusAlert}
                header={'Error'}
                message={statusAlertMessage}
                iconname={faExclamationTriangle}
                color={"#ff3333"}
            />
            {props.hideCustomFields ?
                <Form.Label style={styles.label}> Please First Create Variations </Form.Label>
                :
                <>
                    <Form.Row style={{ margin: '0%', padding: '1.5%', background: `${GlobalStyleSheet.body_color}` }}>
                        <Form.Group as={Col} lg={5} md={5} sm={12} xs={12}>
                            <Form.Label style={styles.label}>Field Name</Form.Label>
                            <Select
                                id={'1'}
                                instanceId={'1'}
                                inputId={'1'}
                                styles={GlobalStyleSheet.react_select_styles}
                                options={props.fields_list}
                                components={{ Group }}
                                value={fieldName}
                                onChange={(e) => setFieldName(e)}
                            />
                            <Nav.Link style={{ padding: '0%', margin: '0%', fontSize: '14px' }} onClick={handleShowModal}>
                                Add New
                        </Nav.Link>
                            <AddNewFieldNameModal
                                {...props}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} lg={7} md={7} sm={12} xs={12}>
                            <Form.Label style={styles.label}>Field Value </Form.Label>
                            <InputGroup>
                                <Form.Control
                                    style={{ fontSize: '14px' }}
                                    type="text"
                                    placeholder="Enter Value"
                                    name="sku"
                                    value={fieldValue}
                                    onChange={(e) => setFieldValue(e.target.value)}
                                />
                                <Button variant="outline-primary" size="sm" style={{ marginLeft: '1%' }} onClick={handleAddCustomFieldBtnClick}>Add</Button>
                            </InputGroup>
                        </Form.Group>
                        <span className="mr-auto"> {error} </span>
                        <Row style={{ width: '100%', display: 'flex', alignItems: 'center' }} noGutters>
                            {props.isVariableProduct ?
                                <Form.Label style={styles.label} className="mr-auto">For Variable Products each Custom Field will be added to all variations</Form.Label>
                                : null
                            }
                            <div className='mr-auto'></div>
                            <Button variant="outline-primary" size="sm" onClick={saveCustomFieldsHandler}>Save Fields</Button>
                        </Row>
                    </Form.Row>

                </>
            }


            {/* Map */}
            <div style={{ background: `${GlobalStyleSheet.body_color}`, marginTop: '1%' }}>
                {props.customFieldsArray && props.customFieldsArray.map((element, index) =>
                    <Form.Row style={{ padding: '1% 2%' }} key={index}>
                        <Col lg={5} md={5} sm={12} xs={12}>
                            <Form.Control
                                as="select"
                                size="sm"
                                value={element.name}
                                onChange={() => element.name}
                            >
                                <option>{element.name}</option>
                            </Form.Control>
                        </Col>
                        <Col lg={7} md={7} sm={12} xs={12}>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Value"
                                    name="sku"
                                    value={element.value}
                                    onChange={() => element.value}
                                />
                                <Button variant="outline-danger" size="sm" style={{ marginLeft: '1%' }}
                                    onClick={() => deleteCustomFieldsClick(index)}> delete</Button>
                            </InputGroup>
                        </Col>
                    </Form.Row>
                )}
            </div>
            <style jsx>{`
                span {
                    color: red;
                    font-size: 13px
                }
            `}</style>
        </>
    )
}

const styles = {
    row: {
        margin: '2%',
        padding: '0%'
    },
    card: {
        width: '100%'
    },
    card_header: {
        width: '100%',
        alignItems: 'center',
        // color: '#6A7074',
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
    },
    label: {
        fontSize: '13px',
    },
    accordin_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '10%',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}
export default CustomFields;