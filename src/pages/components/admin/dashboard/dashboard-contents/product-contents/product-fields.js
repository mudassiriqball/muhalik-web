import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import React, { Component } from 'react';
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../.././../styleSheet'
import axios from 'axios';
import AlertModal from '../../../../alert-modal';
import TitleRow from '../../../../title-row';
import CardAccordion from '../../../../card_accordion';
import { getUncodededTokenFromStorage } from '../../../../../../sdk/core/authentication-service'

let fieldsArray = [];
class ProducFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,
            fieldValue: '',
            error: '',
            fieldList: [],
            fieldRequestList: [],

            editRequestedField: '',
            showModalMessage: '',
            showModal: false,

            filterStr: '',
        }
    }

    // Getting Product Fields from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/categories/fields';

        await axios.get(url, {
            headers: { 'authorization': await getUncodededTokenFromStorage() }
        }).then(function (response) {
            await this.abc(response.data.data.docs)
        }).catch(function (error) {
            alert('Fields_1 Fetchig Error: ', error)
        })
    }
    abc(data) {
        console.log('Fields_1:', data)
        let copyArray = [];
        copyArray = data;
        copyArray.forEach((e, index) => {
            e.label = true;
        })
        this.setState({ fieldList: copyArray });
        this.setState({ fieldRequestList: copyArray });
        console.log('asasasasa:', this.state.fieldsArray[0].value)
        fieldsArray = copyArray;
    }

    async addField(fieldValue, currentComponent) {
        const url = MuhalikConfig.PATH + '/api/categories/add-field';
        let data = [];
        data = { label: fieldValue, value: fieldValue }
        await axios.post(url, {
            data
        }, {
            headers: { 'authorization': await getUncodededTokenFromStorage() }
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
            this.setState({ fieldList: fieldsArray });
        } else {
            let array = [];
            this.state.fieldList.filter(function (data) {
                // var value = data.value.toLowerCase;
                if (data.value.includes(e.target.value)) {
                    array.push(data);
                }
            })
            this.setState({ fieldList: array });
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
        copyArray = Object.assign([], this.state.fieldRequestList);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ fieldRequestList: copyArray })
    }
    //  => Edit
    async handleEditFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldRequestList);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ fieldRequestList: copyArray })
    }
    //  => Cancle
    handleCancelFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldRequestList);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].label = true;
        copyArray[index].error = '';
        this.setState({ fieldRequestList: copyArray })
    }
    // Update
    handleUpdateFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldRequestList);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ fieldRequestList: copyArray });
        } else {
            if (copyArray[index].error == '') {
                copyArray[index].label = true;
                this.setState({ fieldRequestList: copyArray, showModalMessage: 'Product Field Updated Successfully', showModal: true });
            }
        }
    }
    //  => Add
    handleAddFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldRequestList);
        copyArray.splice(index, 1);
        this.setState({ fieldRequestList: copyArray, showModalMessage: 'Product Field Added Successfully', showModal: true })
        this.addField(copyArray[index].value, this)
    }
    //  => Delete
    handleDeleteFieldRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldRequestList);
        copyArray.splice(index, 1);
        this.setState({ fieldRequestList: copyArray, showModalMessage: 'Product Field Deleted', showModal: true })
    }






    // All fields
    //  => Chane
    handleFieldChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldList);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ fieldList: copyArray })
    }

    //  => Edit
    async handleEditFieldClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldList);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ fieldList: copyArray })
    }
    //  => Cancle
    handleCancelFieldClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldList);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].error = '';
        copyArray[index].label = true;
        this.setState({ fieldList: copyArray })
    }
    //  => Update
    handleUpdateFieldClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldList);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ fieldRequestList: copyArray });
        } else {
            if (copyArray[index].error == '') {
                copyArray[index].label = true;
                fieldsArray.forEach((element, i) => {
                    if (copyArray[index].prevVal == element.value) {
                        element.value = copyArray[index].value;
                    }
                });
                this.setState({ fieldList: copyArray, showModalMessage: 'Product Field Updated Successfully', showModal: true });
            }
        }
    }
    //  => Delete
    handleDeleteFieldClick = (index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.fieldList);
        fieldsArray.forEach((element, i) => {
            if (copyArray[index].value == element.value) {
                fieldsArray.splice(index, 1);
            }
        });
        copyArray.splice(index, 1);
        this.setState({ fieldList: copyArray, showModalMessage: 'Product Field Deleted', showModal: true })
    }

    render() {
        return (
            <>
                <AlertModal
                    onHide={(e) => this.setState({ showModal: false })}
                    show={this.state.showModal}
                    header={'Success'}
                    message={this.state.showModalMessage}
                    iconName={faThumbsUp}
                    color={"#00b300"}
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
                <CardAccordion title={'Add Field Requests'}>
                    {this.state.fieldRequestList.map((data, index) =>
                        <Form.Row>
                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Field Value"
                                    name="sku"
                                    value={data.entry_date}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Field Value"
                                    name="sku"
                                    value={data.entry_date}
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
                                        value={data.value}
                                        onChange={(e) => this.handleFieldRequestChange(e, index)}
                                        isInvalid={data.error}
                                        disabled={data.label}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {data.error}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
                                    onClick={() => data.label ? this.handleEditFieldRequestClick(index) : this.handleUpdateFieldRequestClick(index)} >
                                    <div>{data.label ? 'Edit' : 'Update'}</div>
                                </Button>
                            </Form.Group>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-primary" size="sm" block style={styles.submit_btn}
                                    onClick={() => { data.label ? this.handleAddFieldRequestClick(index) : this.handleCancelFieldRequestClick(index) }}>
                                    <div>{data.label ? 'Add' : 'Cancel'}</div>
                                </Button>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-danger" size="sm" block style={styles.submit_btn}
                                    onClick={() => this.handleDeleteFieldRequestClick(index)}>
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
                    {this.state.fieldList && this.state.fieldList.map((element, index) =>
                        <Form.Row>
                            <Form.Group as={Col} lg={8} md={8} sm={12} xs={12}>
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
                            <Form.Group as={Col} lg={1} md={1} sm="auto" xs="auto">
                                <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
                                    onClick={element.label ? () => this.handleEditFieldClick(index) : () => this.handleUpdateFieldClick(index)} >
                                    <div>{element.label ? 'Edit' : 'Update'}</div>
                                </Button>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg={2} md={2} sm="auto" xs="auto">
                                <Button type="submit" variant={element.label ? "outline-danger" : "outline-primary"} size="sm" block style={styles.submit_btn}
                                    onClick={element.label ? () => this.handleDeleteFieldClick(index) : () => this.handleCancelFieldClick(index)}>
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
