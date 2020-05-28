import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import React, { Component } from 'react';
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../.././../styleSheet'
import axios from 'axios';
import AlertModal from '../../../../alert-modal';
import ConfirmModal from '../../../../confirm-modal'
import TitleRow from '../../../../title-row';
import CardAccordion from '../../../../card_accordion';
import { getUncodededTokenFromStorage } from '../../../../../../sdk/core/authentication-service'

let fieldsArray = [];
class ProducFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            isLoading: false,
            showToast: false,

            showConfirmDeleteModal: false,
            isFieldDelete: '',
            delete_field_id: '',
            delete_field_name: '',
            delete_field_index: '',

            fieldValue: '',
            error: '',
            fields_list: [],
            field_requests_list: [],

            editRequestedField: '',
            showModalMessage: '',
            showModal: false,

            filterStr: '',
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            fields_list: nextProps.fields_list,
            field_requests_list: nextProps.field_requests_list,
            token: nextProps.token
        });
    }

    async addField(fieldValue, currentComponent) {
        const url = MuhalikConfig.PATH + '/api/categories/field';
        let data = [];
        data = { label: fieldValue, value: fieldValue }
        await axios.post(url, {
            data
        }, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            currentComponent.setState({ isLoading: false })
            currentComponent.setState({ showModalMessage: 'Product Field Added Successfully' })
            currentComponent.setState({ showModal: true })
        }).catch(function (error) {
            currentComponent.setState({ isLoading: false });
            alert('Error: ', error.response.data.message);
        });
    }

    handleFilterStrChange(e) {
        this.setState({ filterStr: e.target.value });
        if (e.target.value == '') {
            this.setState({ fields_list: fieldsArray });
        } else {
            let array = [];
            this.state.fields_list.filter(function (data) {
                const value = data.value.toLowerCase()
                if (value.includes(e.target.value.toLowerCase())) {
                    array.push(data);
                }
            })
            this.setState({ fields_list: array });
        }
    }

    handleSubmit() {
        if (this.state.fieldValue == '') {
            this.setState({ error: 'Enter Value First' })
        } else {
            this.setState({ isLoading: true })
            this.setState({ error: '' })
            this.addField(this.state.fieldValue, this)
        }
    }



    // Field Request 
    // => Field Value 
    handleFieldRequestChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.field_requests_list);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ field_requests_list: copyArray })
    }
    //  => Edit
    async handleEditFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.field_requests_list);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['entry_date'] = copyArray[index].entry_date;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ field_requests_list: copyArray })
    }
    //  => Cancle
    handleCancelFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.field_requests_list);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].label = true;
        copyArray[index].error = '';
        this.setState({ field_requests_list: copyArray })
    }
    // Update
    handleUpdateFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.field_requests_list);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ field_requests_list: copyArray });
        } else {
            this.setState({
                field_requests_list: copyArray,
                showModalMessage: 'Product Field Updated Successfully',
                showModal: true
            });
            fieldsArray = copyArray
        }
    }
    //  => Add
    async handleAddFieldRequestClick(index) {
        const url = MuhalikConfig.PATH + '/api/categories/field';
        let copyArray = [];
        copyArray = Object.assign([], this.state.field_requests_list);
        const currentComponent = this
        let data = [];
        data = { label: copyArray[index].value, value: copyArray[index].value }
        console.log('data:', data)
        await axios.post(url, {
            data
        }, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            copyArray.splice(index, 1);
            currentComponent.setState({
                field_requests_list: copyArray,
                showModalMessage: 'Product Field Added Successfully',
                showModal: true
            })
        }).catch(function (error) {
            try {
                alert('Error: ', error.response.data.message);
            } catch (err) {
                alert('Add Field Failed ');
                console.log('Request Failed:', error)
            }
        });
    }
    //  => Delete
    async handleDeleteFieldRequestClick() {
        let index = this.state.delete_field_index
        this.setState({ showConfirmDeleteModal: false })
        let copyArray = [];
        const currentComponent = this
        copyArray = Object.assign([], this.state.field_requests_list);

        const url = MuhalikConfig.PATH + `/api/categories/field-request/${copyArray[index]._id}`
        await axios.delete(url, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            copyArray.splice(index, 1);
            currentComponent.setState({
                field_requests_list: copyArray,
                showModalMessage: 'Product Request Field Discarded',
                showModal: true
            })
            fieldsArray = copyArray
        }).catch(function (error) {
            try {
                alert('Error: ', error.response.data.message);
            } catch (err) {
                alert('Delete Field Failed ');
                console.log('Request Failed:', error)
            }
        });
    }






    // All fields
    //  => Chane
    handleFieldChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fields_list);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ fields_list: copyArray })
    }

    //  => Edit
    async handleEditFieldClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fields_list);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ fields_list: copyArray })
    }
    //  => Cancle
    handleCancelFieldClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fields_list);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].error = '';
        copyArray[index].label = true;
        this.setState({ fields_list: copyArray })
    }
    //  => Update
    async handleUpdateFieldClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fields_list);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ fields_list: copyArray });
        } else {
            const currentComponent = this
            let data = [];
            data = {
                value: copyArray[index].value,
                label: copyArray[index].value
            }
            const url = MuhalikConfig.PATH + `/api/categories/field/${copyArray[index]._id}`
            await axios.put(url, {
                data
            }, {
                headers: { 'authorization': this.state.token }
            }).then(function (response) {
                copyArray[index].label = copyArray[index].value;
                copyArray[index].prevVal = copyArray[index].value;
                currentComponent.setState({
                    fields_list: copyArray,
                    showModalMessage: 'Product Field Updated Successfully',
                    showModal: true
                });
                fieldsArray = copyArray
            }).catch(function (error) {
                try {
                    alert('Error: ', error.response.data.message);
                } catch (err) {
                    alert('Update field Failed')
                    console.log('Request Failed:', error)
                }
            });

        }
    }
    //  => Delete
    async handleDeleteFieldClick() {
        let index = this.state.delete_field_index
        this.setState({ showConfirmDeleteModal: false })
        let copyArray = [];
        const currentComponent = this
        copyArray = Object.assign([], this.state.fields_list);

        const url = MuhalikConfig.PATH + `/api/categories/field/${copyArray[index]._id}`
        await axios.delete(url, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            copyArray.splice(index, 1);
            currentComponent.setState({
                fields_list: copyArray,
                showModalMessage: 'Product Field Deleted',
                showModal: true
            })
            fieldsArray = copyArray
        }).catch(function (error) {
            try {
                alert('Error: ', error.response.data.message);
            } catch (err) {
                console.log('Request Failed:', error)
            }
        });
    }

    render() {
        return (
            <>
                <AlertModal
                    onHide={(e) => this.setState({ showModal: false })}
                    show={this.state.showModal}
                    header={'Success'}
                    message={this.state.showModalMessage}
                    iconname={faThumbsUp}
                    color={"#00b300"}
                />
                <ConfirmModal
                    onHide={() => this.setState({ showConfirmDeleteModal: false })}
                    show={this.state.showConfirmDeleteModal}
                    title={'Delete Add Field Request ?'}
                    _id={this.state.delete_field_id}
                    name={this.state.delete_field_name}
                    confirm={this.state.isFieldDelete ? this.handleDeleteFieldClick.bind(this) : this.handleDeleteFieldRequestClick.bind(this)}
                />
                <TitleRow icon={faListAlt} title={' Admin Dashboard / Product Fields'} />

                {/* Add New Field */}
                <CardAccordion title={'Add New Field'}>
                    <Form.Group>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                size="sm"
                                placeholder="Enter Field Value"
                                name="sku"
                                value={this.state.fieldValue}
                                onChange={(e) => this.setState({ fieldValue: e.target.value })}
                                isInvalid={this.state.error}
                            />
                            <Form.Control.Feedback type="invalid">
                                {this.state.error}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="outline-primary" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                            {this.state.isLoading ? 'Uploading' : 'Add Field'}
                            {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                        </Button>
                    </Form.Group>
                </CardAccordion>

                {/* Add Field Requests */}
                <CardAccordion title={'Add Field Requests'} notification={true} badge={99}>
                    {this.state.field_requests_list && this.state.field_requests_list.map((element, index) =>
                        <Form.Row key={index}>
                            <Form.Group as={Col} lg={2} md={2} sm={3} xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    name="date"
                                    value={element.entry_date}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group as={Col} lg={2} md={2} sm={3} xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    name="vendor"
                                    value={'Vendor Name'}
                                    disabled={true}
                                />
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        placeholder="Enter Field Value"
                                        name="sku"
                                        value={element.value}
                                        onChange={(e) => this.handleFieldRequestChange(e, index)}
                                        isInvalid={element.error}
                                        disabled={element.label}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {element.error}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
                                    onClick={() => element.label ? this.handleEditFieldRequestClick(index) : this.handleUpdateFieldRequestClick(index)}
                                    disabled={element.label ? false : element.error}>
                                    <div>{element.label ? 'Edit' : 'Update'}</div>
                                </Button>
                            </Form.Group>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-primary" size="sm" block style={styles.submit_btn}
                                    onClick={() => { element.label ? this.handleAddFieldRequestClick(index) : this.handleCancelFieldRequestClick(index) }}>
                                    <div>{element.label ? 'Add' : 'Cancel'}</div>
                                </Button>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-danger" size="sm" block style={styles.submit_btn}
                                    onClick={() => this.setState({
                                        isFieldDelete: false,
                                        showConfirmDeleteModal: true,
                                        delete_field_id: element._id,
                                        delete_field_name: element.value,
                                        delete_field_index: index,
                                    })}
                                >
                                    <div>Discard</div>
                                </Button>
                            </Form.Group>

                        </Form.Row>
                    )}
                </CardAccordion>

                {/* All Fields */}
                <CardAccordion title={'All Fields'}>
                    <Form.Row style={{ margin: '0% 5%' }}>
                        <Form.Group as={Col}>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Field Value"
                                    name="sku"
                                    value={this.state.filterStr}
                                    onChange={(e) => this.handleFilterStrChange(e)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <hr />
                    {this.state.fields_list && this.state.fields_list.map((element, index) =>
                        <Form.Row key={index}>
                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    name="sku"
                                    value={element.entry_date}
                                    disabled={true}
                                />
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        placeholder="Enter Field Value"
                                        name="sku"
                                        value={element.value}
                                        onChange={(e) => this.handleFieldChange(e, index)}
                                        disabled={element.label}
                                        isInvalid={element.error}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {element.error}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
                                    onClick={element.label ? () => this.handleEditFieldClick(index) : () => this.handleUpdateFieldClick(index)}
                                    disabled={element.label ? false : element.error}>
                                    <div>{element.label ? 'Edit' : 'Update'}</div>
                                </Button>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant={element.label ? "outline-danger" : "outline-primary"} size="sm" block style={styles.submit_btn}
                                    onClick={element.label ?
                                        () => this.setState({
                                            isFieldDelete: true,
                                            showConfirmDeleteModal: true,
                                            delete_field_id: element._id,
                                            delete_field_name: element.value,
                                            delete_field_index: index,
                                        })
                                        : () => this.handleCancelFieldClick(index)}>
                                    <div>{element.label ? 'Delete' : 'Cancel'}</div>
                                </Button>
                            </Form.Group>

                        </Form.Row>
                    )}
                </CardAccordion>
            </>
        )
    }
}

const styles = {
    title_row: {
        borderBottom: '1px solid gray',
        padding: '1.5% 4%'
    },
    title_fontawesome: {
        color: 'gray',
        marginRight: '3%',
        width: '26px',
        height: '26px',
        maxHeight: '26px',
        maxWidth: '26px',
    },
    title: {
        color: 'gray'
    },

    card: {
        // width: '100%',
        margin: '2%'
    },
    card_body: {
        // padding: '5%'
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
    error: {
        width: '100%',
        textAlign: 'center',
        color: '#DC3545',
        fontSize: '14px',
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
export default ProducFields
