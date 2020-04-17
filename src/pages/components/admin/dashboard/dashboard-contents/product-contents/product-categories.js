import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import React, { Component } from 'react';
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../.././../styleSheet'
import axios from 'axios';
import AlertModal from '../../../../alert-modal';

let categoryArray = [];
class ProducCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,
            categoryValue: '',
            error: '',
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
        const url = MuhalikConfig.PATH + '/api/products-categories/get-all';
        try {
            const response = await axios.get(url);
            let copyArray = [];
            copyArray = response.data.data;
            copyArray.forEach((data, index) => {
                data.label = true;
            })
            this.setState({ categoryList: copyArray });
            this.setState({ categoryRequestList: this.state.categoryList });
            categoryArray = copyArray;
        } catch (error) {
            console.log('feror:', error);
        }
    }

    async addCategory() {
        // const url = MuhalikConfig.PATH + '/api/products/add';
        // await axios.post(url, {
        // this.state.categoryValue
        // }, {
        //     headers: { 'authorization': await getUncodededTokenFromStorage() }
        // }).then(function (response) {
        this.setState({ isLoading: true })
        this.setState({ showModalMessage: 'Product Category Added Successfully' })
        this.setState({ showModal: true })
        return true;
        // }).catch(function (error) {
        //     currentComponent.setState({ isLoading: false });
        //     alert('Error: ', error.response.data.message);
        //     return false;
        // });
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

    handleSubmit() {
        if (categoryValue == '') {
            this.setState({ error: 'Enter Value First' })
        } else {
            this.setState({ isLoading: true })
            this.setState({ error: '' })
            this.addCategory(this);
        }
    }



    // Category Request 
    // => Field Value 
    handleCategoryRequestChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryRequestList);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ categoryRequestList: copyArray })
    }
    //  => Edit
    async handleEditCategoryRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryRequestList);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ categoryRequestList: copyArray })
    }
    //  => Cancle
    handleCancelCategoryRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryRequestList);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].label = true;
        copyArray[index].error = '';
        this.setState({ categoryRequestList: copyArray })
    }
    // Update
    handleUpdateCategoryRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryRequestList);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ categoryRequestList: copyArray });
        } else {
            if (copyArray[index].error == '') {
                copyArray[index].label = true;
                this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Updated Successfully', showModal: true });
            }
        }
    }
    //  => Add
    handleAddCategoryRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryRequestList);
        copyArray.splice(index, 1);
        this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Added Successfully', showModal: true })
    }
    //  => Delete
    handleDeleteCategoryRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.categoryRequestList);
        copyArray.splice(index, 1);
        this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Deleted', showModal: true })
    }






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
                <Row style={styles.title_row} noGutters>
                    <FontAwesomeIcon icon={faListAlt} style={styles.title_fontawesome} />
                    <div className="mr-auto" style={styles.title}> Product Categories </div>
                </Row>


                {/* Add New Category */}
                <Row noGutters>
                    <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                        <Card style={styles.card}>
                            <Card.Header>
                                <Form.Label>Add New Category </Form.Label>
                                <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.accordin_fontawesome} />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={styles.card_body}>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                size="sm"
                                                placeholder="Enter Category Value"
                                                name="sku"
                                                value={this.state.categoryValue}
                                                onChange={(e) => this.setState({ categoryValue: e.target.value })}
                                                isInvalid={this.state.error}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {this.state.error}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button type="submit" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                            {this.state.isLoading ? 'Uploading' : 'Add Category'}
                                            {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                        </Button>
                                    </Form.Group>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>



                {/* Add Category Requests */}
                <Row noGutters>
                    <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                        <Card style={styles.card}>
                            <Card.Header>
                                <Form.Label>Add Category Requests</Form.Label>
                                <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.accordin_fontawesome} />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={styles.card_body}>
                                    {this.state.categoryRequestList.map((data, index) =>
                                        <Form.Row>
                                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Category Value"
                                                    name="sku"
                                                    value={data.value}
                                                    disabled={true}
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Category Value"
                                                    name="sku"
                                                    value={data.value}
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
                                                        value={data.value}
                                                        onChange={(e) => this.handleCategoryRequestChange(e, index)}
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
                                                    onClick={() => data.label ? this.handleEditCategoryRequestClick(index) : this.handleUpdateCategoryRequestClick(index)} >
                                                    <div>{data.label ? 'Edit' : 'Update'}</div>
                                                </Button>
                                            </Form.Group>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                                <Button type="submit" variant="outline-primary" size="sm" block style={styles.submit_btn}
                                                    onClick={() => { data.label ? this.handleAddCategoryRequestClick(index) : this.handleCancelCategoryRequestClick(index) }}>
                                                    <div>{data.label ? 'Add' : 'Cancel'}</div>
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
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>





                {/* All Categories */}
                <Row noGutters>
                    <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                        <Card style={styles.card}>
                            <Card.Header>
                                <Form.Label>All Categories</Form.Label>
                                <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.accordin_fontawesome} />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={styles.card_body}>
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
                                    {this.state.categoryList.map((data, index) =>
                                        <Form.Row>
                                            <Form.Group as={Col} lg={8} md={8} sm={12} xs={12}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        size="sm"
                                                        placeholder="Enter Category Value"
                                                        name="sku"
                                                        value={data.value}
                                                        onChange={(e) => this.handleCategoryChange(e, index)}
                                                        disabled={data.label}
                                                        isInvalid={data.error}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {data.error}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={1} md={1} sm="auto" xs="auto">
                                                <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
                                                    onClick={data.label ? () => this.handleEditCategoryClick(index) : () => this.handleUpdateCategoryClick(index)} >
                                                    <div>{data.label ? 'Edit' : 'Update'}</div>
                                                </Button>
                                            </Form.Group>
                                            <div className="mr-auto"></div>
                                            <Form.Group as={Col} lg={2} md={2} sm="auto" xs="auto">
                                                <Button type="submit" variant={data.label ? "outline-danger" : "outline-primary"} size="sm" block style={styles.submit_btn}
                                                    onClick={data.label ? () => this.handleDeleteCategoryClick(index) : () => this.handleCancelCategoryClick(index)}>
                                                    <div>{data.label ? 'Delete' : 'Cancel'}</div>
                                                </Button>
                                            </Form.Group>

                                        </Form.Row>
                                    )}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>
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
