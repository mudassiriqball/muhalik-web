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

let categoryArray = [];
class ProducCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,

            categoryValue: '',
            subCategoryValue: '',
            subSubCategoryValue: '',

            categoryError: '',
            subCategoryError: '',
            subSubCategoryError: '',

            categoryList: [],
            categoryRequestList: [],

            editRequestedCategory: '',
            showModalMessage: '',
            showModal: false,

            filterStr: '',
        }
    }

    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/categories/categories';
        const currentComponent = this;
        await axios.get(url, {
            headers: { 'authorization': await getUncodededTokenFromStorage() }
        }).then((response) => {
            let copyArray = [];
            copyArray = response.data.data;
            // copyArray.forEach(element => {
            //     let item = []
            //     item.push({ label: true })
            //     element.push(item)
            // })
            // console.log('copy array:', copyArray)
            currentComponent.setState({ categoryList: copyArray });
            currentComponent.setState({ categoryRequestList: currentComponent.state.categoryList });
            categoryArray = copyArray;
        }).catch((error) => {
            console.log('Caterories_1 Fetchig Error: ', error)
        })
    }

    async addCategory(currentComponent) {
        let data = [];
        data = { category: this.state.categoryValue, sub_category: this.state.subCategoryValue, sub_sub_category: this.state.subSubCategoryValue }
        const url = MuhalikConfig.PATH + '/api/categories/category';
        await axios.post(url, {
            data
        }, {
            headers: { 'authorization': await getUncodededTokenFromStorage() }
        }).then(function (response) {
            currentComponent.setState({ isLoading: false })
            currentComponent.setState({ showModalMessage: 'Product Category Added Successfully' })
            currentComponent.setState({ showModal: true })
            return true;
        }).catch(function (error) {
            currentComponent.setState({ isLoading: false });
            alert('Error: ', error.response.data.message);
            return false;
        });
    }

    handleFilterStrChange(e) {
        this.setState({ filterStr: e.target.value });
        if (e.target.value == '') {
            this.setState({ categoryList: categoryArray });
        } else {
            let array = [];
            this.state.categoryList.filter(function (data) {
                // var value = data.value.toLowerCase;
                if (data.value.includes(e.target.value)) {
                    array.push(data);
                }
            })
            this.setState({ categoryList: array });
        }
    }

    async handleSubmit() {
        if (this.state.categoryValue == '' || this.state.subCategoryValue == '' || this.state.subSubCategoryValue == '') {
            if (this.state.categoryValue == '') {
                this.setState({ categoryError: 'Enter Value First' });
            }
            if (this.state.subCategoryValue == '') {
                this.setState({ subCategoryError: 'Enter Value First' });
            }
            if (this.state.subSubCategoryValue == '') {
                this.setState({ subSubCategoryError: 'Enter Value First' });
            }
        } else {
            this.setState({ isLoading: true })
            this.addCategory(this)
        }
    }



    // // Category Request 
    // // => Field Value 
    // handleCategoryRequestChange = (e, index) => {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray[index].value = e.target.value;

    //     if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
    //         copyArray[index].error = ''
    //     } else {
    //         copyArray[index].error = 'Value must be 3-20 characters'
    //     }
    //     this.setState({ categoryRequestList: copyArray })
    // }
    // //  => Edit
    // async handleEditCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     var obj = {};
    //     obj['value'] = copyArray[index].value;
    //     obj['label'] = false;
    //     obj['prevVal'] = copyArray[index].value;
    //     obj['error'] = '';
    //     copyArray[index] = obj
    //     await this.setState({ categoryRequestList: copyArray })
    // }
    // //  => Cancle
    // handleCancelCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray[index].value = copyArray[index].prevVal;
    //     copyArray[index].label = true;
    //     copyArray[index].error = '';
    //     this.setState({ categoryRequestList: copyArray })
    // }
    // // Update
    // handleUpdateCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     if (copyArray[index].value == copyArray[index].prevVal) {
    //         copyArray[index].error = 'Enter Different Value';
    //         this.setState({ categoryRequestList: copyArray });
    //     } else {
    //         if (copyArray[index].error == '') {
    //             copyArray[index].label = true;
    //             this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Updated Successfully', showModal: true });
    //         }
    //     }
    // }
    // //  => Add
    // handleAddCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray.splice(index, 1);
    //     this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Added Successfully', showModal: true })
    //     this.addCategory(this)
    // }
    // //  => Delete
    // handleDeleteCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray.splice(index, 1);
    //     this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Deleted', showModal: true })
    // }






    // All categories
    //  => Chane
    handleCategoryChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryList);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ categoryList: copyArray })
    }

    //  => Edit
    async handleEditCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryList);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ categoryList: copyArray })
    }
    //  => Cancle
    handleCancelCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryList);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].error = '';
        copyArray[index].label = true;
        this.setState({ categoryList: copyArray })
    }
    //  => Update
    handleUpdateCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryList);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ categoryRequestList: copyArray });
        } else {
            if (copyArray[index].error == '') {
                copyArray[index].label = true;
                categoryArray.forEach((element, i) => {
                    if (copyArray[index].prevVal == element.value) {
                        element.value = copyArray[index].value;
                    }
                });
                this.setState({ categoryList: copyArray, showModalMessage: 'Product Category Updated Successfully', showModal: true });
            }
        }
    }
    //  => Delete
    handleDeleteCategoryClick = (index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryList);
        categoryArray.forEach((element, i) => {
            if (copyArray[index].value == element.value) {
                categoryArray.splice(index, 1);
            }
        });
        copyArray.splice(index, 1);
        this.setState({ categoryList: copyArray, showModalMessage: 'Product Category Deleted', showModal: true })
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
                <TitleRow icon={faListAlt} title={' Admin Dashboard / Product Categories'} />



                {/* Add New Category */}
                <CardAccordion title={'Add New Category'}>
                    <Form.Row>
                        <Form.Group as={Col} lg={4} md={4} sm={4} xs={12}>
                            <Form.Label style={styles.label}>Category</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Category Value"
                                    name="sku"
                                    value={this.state.categoryValue}
                                    onChange={(e) => this.setState({ categoryValue: e.target.value, categoryError: '' })}
                                    isInvalid={this.state.categoryError}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.categoryError}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} lg={4} md={4} sm={4} xs={12}>
                            <Form.Label style={styles.label}>Sub Category</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Category Value"
                                    name="sku"
                                    value={this.state.subCategoryValue}
                                    onChange={(e) => this.setState({ subCategoryValue: e.target.value, subCategoryError: '' })}
                                    isInvalid={this.state.subCategoryError}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.subCategoryError}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} lg={4} md={4} sm={4} xs={12}>
                            <Form.Label style={styles.label}>Sub Sub Category</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Category Value"
                                    name="sku"
                                    value={this.state.subSubCategoryValue}
                                    onChange={(e) => this.setState({ subSubCategoryValue: e.target.value, subSubCategoryError: '' })}
                                    isInvalid={this.state.subSubCategoryError}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.subSubCategoryError}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Button type="submit" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                            {this.state.isLoading ? 'Uploading' : 'Add Category'}
                            {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                        </Button>
                    </Form.Group>
                </CardAccordion>

                {/* Add Category Requests */}
                {/* <CardAccordion title={'Add Category Requests'}>
                    {this.state.categoryRequestList.map((element, index) =>
                        <Form.Row>
                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Category Value"
                                    name="sku"
                                    value={element.value}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Category Value"
                                    name="sku"
                                    value={element.value}
                                    disabled={true}
                                />
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        placeholder="Enter Category Value"
                                        name="sku"
                                        value={element.value}
                                        onChange={(e) => this.handleCategoryRequestChange(e, index)}
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
                                    onClick={() => element.label ? this.handleEditCategoryRequestClick(index) : this.handleUpdateCategoryRequestClick(index)} >
                                    <div>{element.label ? 'Edit' : 'Update'}</div>
                                </Button>
                            </Form.Group>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-primary" size="sm" block style={styles.submit_btn}
                                    onClick={() => { element.label ? this.handleAddCategoryRequestClick(index) : this.handleCancelCategoryRequestClick(index) }}>
                                    <div>{element.label ? 'Add' : 'Cancel'}</div>
                                </Button>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-danger" size="sm" block style={styles.submit_btn}
                                    onClick={() => this.handleDeleteCategoryRequestClick(index)}>
                                    <div>Discard</div>
                                </Button>
                            </Form.Group>

                        </Form.Row>
                    )}
                </CardAccordion> */}

                {/* All Categories */}
                <CardAccordion title={'All Categories'}>
                    <Form.Row style={{ margin: '0% 5%' }}>
                        <Form.Group as={Col}>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Enter Category Value"
                                    name="sku"
                                    value={this.state.filterStr}
                                    onChange={(e) => this.handleFilterStrChange(e)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <hr />
                    {this.state.categoryList.map((element, index) =>
                        <Form.Row>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs={12}>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    name="sku"
                                    value={element.entry_date}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group as={Col} lg={3} md={3} sm={3} xs={12}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        placeholder="Enter Category Value"
                                        name="sku"
                                        value={element.category}
                                        onChange={(e) => this.handleCategoryChange(e, index)}
                                        disabled={element.label}
                                        isInvalid={element.error}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {element.error}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={3} md={3} sm={3} xs={12}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        placeholder="Enter Category Value"
                                        name="sku"
                                        value={element.sub_category}
                                        onChange={(e) => this.handleCategoryChange(e, index)}
                                        disabled={element.label}
                                        isInvalid={element.error}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {element.error}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={3} md={3} sm={3} xs={12}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        placeholder="Enter Category Value"
                                        name="sku"
                                        value={element.sub_sub_category}
                                        onChange={(e) => this.handleCategoryChange(e, index)}
                                        disabled={element.label}
                                        isInvalid={element.error}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {element.error}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
                                    onClick={element.label ? () => this.handleEditCategoryClick(index) : () => this.handleUpdateCategoryClick(index)} >
                                    <div>{element.label ? 'Edit' : 'Update'}</div>
                                </Button>
                            </Form.Group>
                            <div className="mr-auto"></div>
                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                <Button type="submit" variant={element.label ? "outline-danger" : "outline-primary"} size="sm" block style={styles.submit_btn}
                                    onClick={element.label ? () => this.handleDeleteCategoryClick(index) : () => this.handleCancelCategoryClick(index)}>
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
export default ProducCategories
