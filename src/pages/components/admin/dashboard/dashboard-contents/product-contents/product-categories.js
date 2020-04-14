import { Form, Row, Col, Card, InputGroup, Button, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import React, { Component } from 'react';
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
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



    render() {
        // const [isLoading, setIsLoading] = React.useState(false);
        // const [showToast, setShowToast] = React.useState(false);
        // const [categoryValue, setCategoryValue] = React.useState('');
        // const [error, setError] = React.useState('');

        return (
            <>
                <Row style={styles.title_row} noGutters>
                    <FontAwesomeIcon icon={faListAlt} style={styles.title_fontawesome} />
                    <div className="mr-auto" style={styles.title}> Product Categories </div>
                </Row>
                <Row noGutters>
                    <Card style={styles.card}>
                        <Card.Header>
                            <div>Add Category Requests</div>
                        </Card.Header>
                        <Card.Body style={styles.card_body}>
                            {this.state.categoryList.map((data) =>
                                <Form.Row>
                                    <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
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
                                    <Form.Group as={Col} lg={2} md={2} sm={2} xs={4}>
                                        <Button type="submit" variant="outline-primary" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                            Edit
                                </Button>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={2} md={2} sm={2} xs={4}>
                                        <Button type="submit" variant="outline-danger" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                            Discard
                                </Button>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={2} md={2} sm={2} xs={4}>
                                        <Button type="submit" variant="outline-success" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                            Add
                                </Button>
                                    </Form.Group>
                                </Form.Row>
                            )}
                        </Card.Body>
                    </Card>
                </Row>
                {/* Add Categories */}
                <Row noGutters>
                    <Card style={styles.card}>
                        <Card.Header>
                            <div>Add Category</div>
                        </Card.Header>
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
                    </Card>
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
        width: '100%',
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
}
export default ProducCategories
