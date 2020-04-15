import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import React, { Component } from 'react';
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../.././../styleSheet'
import axios from 'axios';

class ProducCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,
            categoryValue: '',
            error: '',
            categoryList: [],
        }
    }

    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products-categories/get-all';
        try {
            const response = await axios.get(url);
            this.setState({ categoryList: response.data.data });
            console.log('list:', response)
        } catch (error) {
            console.log(error);
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
        this.setState({ showToast: true })
        return true;
        // }).catch(function (error) {
        //     currentComponent.setState({ isLoading: false });
        //     alert('Error: ', error.response.data.message);
        //     return false;
        // });
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

    handleEditCategoryRequest() {

    }
    handleAddCategoryRequest(index) {
        const copyArray = Object.assign([], this.state.categoryList);
        copyArray.splice(index, 1);
        this.setState({ categoryList: copyArray })
    }
    handleDeleteCategoryRequest(index) {
        const copyArray = Object.assign([], this.state.categoryList);
        copyArray.splice(index, 1);
        this.setState({ categoryList: copyArray })
    }

    render() {
        return (
            <>
                <Row style={styles.title_row} noGutters>
                    <FontAwesomeIcon icon={faListAlt} style={styles.title_fontawesome} />
                    <div className="mr-auto" style={styles.title}> Product Categories </div>
                </Row>
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
                                    {this.state.categoryList.map((data, index) =>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        size="sm"
                                                        placeholder="Enter Category Value"
                                                        name="sku"
                                                        value={data.label}
                                                        onChange={(e) => { this.setState({ categoryValue: e.target.value }) }}
                                                        isInvalid={this.state.error}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {this.state.error}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs={3}>
                                                <Button type="submit" variant="outline-success" size="sm" onClick={() => this.handleEditCategoryRequest(index)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                                    <div>Edit</div>
                                                </Button>
                                            </Form.Group>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs={3}>
                                                <Button type="submit" variant="outline-primary" size="sm" onClick={() => this.handleAddCategoryRequest(index)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                                    <div>Add</div>
                                                </Button>
                                            </Form.Group>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs={3}>
                                            </Form.Group>
                                            {/* <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs={0}>
                                            </Form.Group>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs={0}>
                                            </Form.Group> */}
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs={3}>
                                                <Button type="submit" variant="outline-danger" size="sm" onClick={() => this.handleDeleteCategoryRequest(index)} disabled={this.state.isLoading} block style={styles.submit_btn}>
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

                {/* Add Categories */}
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
                                        {/* <p style={styles.label}>Fields with <span> * </span> are mandatory.</p>
                                <p style={styles.label}>For adding new size, color, link: Enter text and hit Enter or Tab key</p> */}
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
