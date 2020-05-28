import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner, Dropdown, ButtonGroup } from 'react-bootstrap'
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

let categoryArray = [];
class ProducCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            isLoading: false,
            showToast: false,

            showConfirmDeleteModal: false,
            delete_category_id: '',
            delete_category_name: '',
            index: '',


            categoryValue: '',
            subCategoryValue: '',

            categoryError: '',
            subCategoryError: '',

            categories_list: [],
            sub_categories_list: [],

            editRequestedCategory: '',
            showModalMessage: '',
            showModal: false,

            searchType: 'Category',
            filterStr: '',
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            categories_list: nextProps.categories_list,
            sub_categories_list: nextProps.sub_categories_list,
            token: nextProps.token
        });
        categoryArray = nextProps.categories_list
    }

    async addCategory(currentComponent) {
        let data = [];
        data = {
            category: { value: this.state.categoryValue, label: this.state.categoryValue },
            sub_category: { value: this.state.subCategoryValue, label: this.state.subCategoryValue }
        }
        const url = MuhalikConfig.PATH + '/api/categories/category';
        await axios.post(url, {
            data
        }, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            currentComponent.setState({ isLoading: false })
            currentComponent.setState({ showModalMessage: 'Product Category Added Successfully' })
            currentComponent.setState({ showModal: true })
            return true;
        }).catch(function (error) {
            currentComponent.setState({ isLoading: false });
            try {
                alert('Error: ', error.response.data.message);
            } catch (err) {
                console.log('Request Failed:', error)
            }
            return false;
        });
    }

    async handleSubmit() {
        if (this.state.categoryValue == '' || this.state.subCategoryValue == '') {
            if (this.state.categoryValue == '') {
                this.setState({ categoryError: 'Enter Value First' });
            }
            if (this.state.subCategoryValue == '') {
                this.setState({ subCategoryError: 'Enter Value First' });
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

    handleFilterStrChange(e) {
        this.setState({ filterStr: e.target.value });
        let array = [];
        if (e.target.value != '') {
            if (this.state.searchType == 'Category') {
                categoryArray.filter(function (data) {
                    const value = data.value.toLowerCase()
                    if (value.includes(e.target.value.toLowerCase())) {
                        array.push(data);
                    }
                })
            } else {
                let currentComponent = this
                this.state.sub_categories_list.filter(function (element) {
                    const value = element.value.toLowerCase()
                    if (value.includes(e.target.value.toLowerCase())) {
                        categoryArray.filter(function (e) {
                            if (element.category_id == e._id) {
                                array.push(e)
                            }
                        })
                    }
                })
                let a = []
                array.map(x => {
                    if (!a.includes(x)) {
                        a.push(x)
                    }
                })
                array = a
            }
            this.setState({ categories_list: array })
        } else {
            this.setState({ categories_list: categoryArray })
        }
    }
    //  => Chane
    handleCategoryChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categories_list);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ categories_list: copyArray })
    }

    //  => Edit
    async handleEditCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categories_list);
        var obj = {};
        obj['_id'] = copyArray[index]._id;
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ categories_list: copyArray })
    }
    //  => Cancle
    handleCancelCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categories_list);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].error = '';
        copyArray[index].label = true;
        this.setState({ categories_list: copyArray })
    }
    //  => Update
    async handleUpdateCategoryClick() {
        let copyArray = [];
        let index = this.state.index
        copyArray = Object.assign([], this.state.categories_list);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ categories_list: copyArray });
        } else {
            const currentComponent = this
            let data = [];
            data = {
                category: { value: copyArray[index].value, label: copyArray[index].value },
            }
            const url = MuhalikConfig.PATH + `/api/categories/category/${copyArray[index]._id}`
            await axios.put(url, {
                data
            }, {
                headers: { 'authorization': this.state.token }
            }).then(function (response) {
                copyArray[index].label = copyArray[index].value;
                copyArray[index].prevVal = copyArray[index].value;
                currentComponent.setState({
                    categories_list: copyArray,
                    showModalMessage: 'Product Category Updated Successfully',
                    showModal: true
                });
                categoryArray = copyArray
            }).catch(function (error) {
                try {
                    alert('Error: ', error.response.data.message);
                } catch (err) {
                    alert('Category Update Failed');
                    console.log('Request Failed:', error)
                }
            });
        }
    }


    // 
    // Sub Category
    handleSubCategoryChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sub_categories_list);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ sub_categories_list: copyArray })
    }

    //  => Edit
    async handleEditSubCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sub_categories_list);
        var obj = {};
        obj['_id'] = copyArray[index]._id;
        obj['category_id'] = copyArray[index].category_id;
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ sub_categories_list: copyArray })
    }
    //  => Cancle
    handleCancelSubCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sub_categories_list);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].error = '';
        copyArray[index].label = true;
        this.setState({ sub_categories_list: copyArray })
    }
    //  => Update
    async handleUpdateSubCategoryClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sub_categories_list);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ categories_list: copyArray });
        } else {
            const currentComponent = this
            let data = [];
            data = {
                value: copyArray[index].value,
                label: copyArray[index].value,
                category_id: copyArray[index].category_id
            }
            const url = MuhalikConfig.PATH + `/api/categories/sub-category/${copyArray[index]._id}`
            await axios.put(url, {
                data
            }, {
                headers: { 'authorization': this.state.token }
            }).then(function (response) {
                copyArray[index].label = copyArray[index].value;
                copyArray[index].prevVal = copyArray[index].value;
                currentComponent.setState({
                    sub_categories_list: copyArray,
                    showModalMessage: 'Product Sub Category Updated Successfully',
                    showModal: true
                });
                categoryArray = copyArray
            }).catch(function (error) {
                try {
                    alert('Error: ', error.response.data.message);
                } catch (err) {
                    console.log('Request Failed:', error)
                }
            });
        }
    }
    //  => Delete
    async handleDeleteSubCategoryClick() {
        this.setState({ showConfirmDeleteModal: false })
        let copyArray = [];
        const index = this.state.index
        const currentComponent = this
        copyArray = Object.assign([], this.state.sub_categories_list);

        const url = MuhalikConfig.PATH + `/api/categories/sub-category/${copyArray[index]._id}`
        await axios.delete(url, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            copyArray.splice(index, 1);
            currentComponent.setState({
                sub_categories_list: copyArray,
                showModalMessage: 'Product Category Deleted',
                showModal: true
            })
            categoryArray = copyArray
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
                    title={'Delete Sub Category'}
                    _id={this.state.delete_category_id}
                    name={this.state.delete_category_name}
                    confirm={this.handleDeleteSubCategoryClick.bind(this)}
                />

                <TitleRow icon={faListAlt} title={' Admin Dashboard / Product Categories'} />



                {/* Add New Category */}
                <CardAccordion title={'Add New Category'}>
                    <Form.Row>
                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
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
                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
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
                        <Form.Group as={Col}>
                            <Button type="submit" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                {this.state.isLoading ? 'Uploading' : 'Add Category'}
                                {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                            </Button>
                        </Form.Group>
                    </Form.Row>

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
                                <InputGroup.Prepend >
                                    <Form.Control as="select" variant="primary" size='sm'
                                        value={this.state.searchType} onChange={(e) => this.setState({ searchType: e.target.value })}>
                                        <option>Category</option>
                                        <option>Sub Category</option>
                                    </Form.Control>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                    placeholder="Search Here"
                                    name="search"
                                    value={this.state.filterStr}
                                    onChange={(e) => this.handleFilterStrChange(e)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <hr />
                    {this.state.categories_list && this.state.categories_list.map((element, index) =>
                        <div key={index}>
                            <Form.Row>
                                <Form.Group as={Col} lg={6} md={6} sm={8} xs={12}>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        name="sku"
                                        value={element.value}
                                        disabled={element.label}
                                        onChange={(e) => this.handleCategoryChange(e, index)}
                                        isInvalid={element.error}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {element.error}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className='sm_xs_show mr-auto'></div>
                                <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                    <Button type="submit" variant={element.label ? "outline-primary" : "outline-success"} size="sm" block style={styles.submit_btn}
                                        onClick={element.label ? () => this.handleEditCategoryClick(index) : () => this.handleUpdateCategoryClick(index)}
                                        disabled={element.label ? false : element.error}
                                    >
                                        <div>{element.label ? 'Edit' : 'Update'}</div>
                                    </Button>
                                </Form.Group>
                                <div className='sm_xs_show mr-auto'>
                                </div>
                                <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                    <Button type="submit" variant={element.label ? "outline-danger" : "outline-primary"}
                                        size="sm" block style={styles.submit_btn}
                                        onClick={element.label ? null : () => this.handleCancelCategoryClick(index)}
                                        disabled={element.label ? true : false}
                                    >
                                        <div>{element.label ? 'Delete' : 'Cancel'}</div>
                                    </Button>
                                </Form.Group>
                            </Form.Row>
                            <hr className='pb-0 pt-0 mt-0' />
                            <Form.Row >
                                {this.state.sub_categories_list.map((e, i) => (element._id == e.category_id) ?
                                    <Col lg={6} md={6} sm={12} xs={12} key={e._id}>
                                        <Form.Row>
                                            <Form.Group as={Col} lg="auto" md="auto" sm={8} xs={12}>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    name="sku"
                                                    value={e.value}
                                                    disabled={e.label}
                                                    onChange={(event) => this.handleSubCategoryChange(event, i)}
                                                    isInvalid={e.error}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {e.error}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <div className='mr-auto'></div>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                                <Button type="submit" variant={e.label ? "outline-primary" : "outline-success"} size="sm" block style={styles.submit_btn}
                                                    onClick={e.label ? () => this.handleEditSubCategoryClick(i) : () => this.handleUpdateSubCategoryClick(i)}
                                                    disabled={e.label ? false : e.error}
                                                >
                                                    <div>{e.label ? 'Edit' : 'Update'}</div>
                                                </Button>
                                            </Form.Group>
                                            <div className='sm_xs_show mr-auto'></div>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                                <Button type="submit" variant={e.label ? "outline-danger" : "outline-primary"} size="sm" block style={styles.submit_btn}
                                                    onClick={
                                                        e.label ?
                                                            () => this.setState({
                                                                showConfirmDeleteModal: true,
                                                                delete_category_id: e._id,
                                                                delete_category_name: e.value,
                                                                index: index
                                                            })
                                                            :
                                                            () => this.handleCancelSubCategoryClick(i)}
                                                >
                                                    <div>{e.label ? 'Delete' : 'Cancel'}</div>
                                                </Button>
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                    :
                                    null
                                )}
                            </Form.Row>
                            <hr className='mb-0' />
                            <hr className='pb-0 pt-0 mt-0' />
                        </div>
                    )}
                </CardAccordion>
                <style jsx>
                    {`
                        @media only screen and (min-width: 768px){
                            .sm_xs_show {
                                display: none
                            }
                        }
                    `}
                </style>
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
