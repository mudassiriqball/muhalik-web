import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import React, { Component } from 'react';
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../.././../styleSheet'
import axios from 'axios';
import AlertModal from '../../../../alert-modal';

let tagArray = [];
class ProducTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,
            tagValue: '',
            error: '',
            tagList: [],
            tagRequestList: [],

            editRequestedTag: '',
            showModalMessage: '',
            showModal: false,

            filterStr: '',
        }
    }

    // Getting Product Tags from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products-categories/get-all';
        try {
            const response = await axios.get(url);
            let copyArray = [];
            copyArray = response.data.data;
            copyArray.forEach((data, index) => {
                data.label = true;
            })
            this.setState({ tagList: copyArray });
            this.setState({ tagRequestList: this.state.tagList });
            tagArray = copyArray;
        } catch (error) {
            console.log('feror:', error);
        }
    }

    async addTag() {
        // const url = MuhalikConfig.PATH + '/api/products/add';
        // await axios.post(url, {
        // this.state.tagValue
        // }, {
        //     headers: { 'authorization': await getUncodededTokenFromStorage() }
        // }).then(function (response) {
        this.setState({ isLoading: true })
        this.setState({ showModalMessage: 'Product Tag Added Successfully' })
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
            this.setState({ tagList: tagArray });
        } else {
            let array = [];
            this.state.tagList.filter(function (data) {
                // var value = data.value.toLowerCase;
                if (data.value.includes(e.target.value)) {
                    array.push(data);
                }
            })
            this.setState({ tagList: array });
        }
    }

    handleSubmit() {
        if (tagValue == '') {
            this.setState({ error: 'Enter Value First' })
        } else {
            this.setState({ isLoading: true })
            this.setState({ error: '' })
            this.addTag(this);
        }
    }



    // Tag Request 
    // => Field Value 
    handleTagRequestChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagRequestList);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ tagRequestList: copyArray })
    }
    //  => Edit
    async handleEditTagRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagRequestList);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ tagRequestList: copyArray })
    }
    //  => Cancle
    handleCancelTagRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagRequestList);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].label = true;
        copyArray[index].error = '';
        this.setState({ tagRequestList: copyArray })
    }
    // Update
    handleUpdateTagRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagRequestList);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ tagRequestList: copyArray });
        } else {
            if (copyArray[index].error == '') {
                copyArray[index].label = true;
                this.setState({ tagRequestList: copyArray, showModalMessage: 'Product Tag Updated Successfully', showModal: true });
            }
        }
    }
    //  => Add
    handleAddTagRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagRequestList);
        copyArray.splice(index, 1);
        this.setState({ tagRequestList: copyArray, showModalMessage: 'Product Tag Added Successfully', showModal: true })
    }
    //  => Delete
    handleDeleteTagRequestClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagRequestList);
        copyArray.splice(index, 1);
        this.setState({ tagRequestList: copyArray, showModalMessage: 'Product Tag Deleted', showModal: true })
    }






    // All tags
    //  => Chane
    handleTagChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagList);
        copyArray[index].value = e.target.value;

        if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
            copyArray[index].error = ''
        } else {
            copyArray[index].error = 'Value must be 3-20 characters'
        }
        this.setState({ tagList: copyArray })
    }

    //  => Edit
    async handleEditTagClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagList);
        var obj = {};
        obj['value'] = copyArray[index].value;
        obj['label'] = false;
        obj['prevVal'] = copyArray[index].value;
        obj['error'] = '';
        copyArray[index] = obj
        await this.setState({ tagList: copyArray })
    }
    //  => Cancle
    handleCancelTagClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagList);
        copyArray[index].value = copyArray[index].prevVal;
        copyArray[index].error = '';
        copyArray[index].label = true;
        this.setState({ tagList: copyArray })
    }
    //  => Update
    handleUpdateTagClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagList);
        if (copyArray[index].value == copyArray[index].prevVal) {
            copyArray[index].error = 'Enter Different Value';
            this.setState({ tagRequestList: copyArray });
        } else {
            if (copyArray[index].error == '') {
                copyArray[index].label = true;
                tagArray.forEach((element, i) => {
                    if (copyArray[index].prevVal == element.value) {
                        element.value = copyArray[index].value;
                    }
                });
                this.setState({ tagList: copyArray, showModalMessage: 'Product Tag Updated Successfully', showModal: true });
            }
        }
    }
    //  => Delete
    handleDeleteTagClick = (index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.tagList);
        tagArray.forEach((element, i) => {
            if (copyArray[index].value == element.value) {
                tagArray.splice(index, 1);
            }
        });
        copyArray.splice(index, 1);
        this.setState({ tagList: copyArray, showModalMessage: 'Product Tag Deleted', showModal: true })
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
                    <div className="mr-auto" style={styles.title}> Product Tags </div>
                </Row>


                {/* Add New Tag */}
                <Row noGutters>
                    <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                        <Card style={styles.card}>
                            <Card.Header>
                                <Form.Label>Add New Tag </Form.Label>
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
                                                placeholder="Enter Tag Value"
                                                name="sku"
                                                value={this.state.tagValue}
                                                onChange={(e) => this.setState({ tagValue: e.target.value })}
                                                isInvalid={this.state.error}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {this.state.error}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button type="submit" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                            {this.state.isLoading ? 'Uploading' : 'Add Tag'}
                                            {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                        </Button>
                                    </Form.Group>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>



                {/* Add Tag Requests */}
                <Row noGutters>
                    <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                        <Card style={styles.card}>
                            <Card.Header>
                                <Form.Label>Add Tag Requests</Form.Label>
                                <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.accordin_fontawesome} />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={styles.card_body}>
                                    {this.state.tagRequestList.map((data, index) =>
                                        <Form.Row>
                                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Tag Value"
                                                    name="sku"
                                                    value={data.value}
                                                    disabled={true}
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Tag Value"
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
                                                        placeholder="Enter Tag Value"
                                                        name="sku"
                                                        value={data.value}
                                                        onChange={(e) => this.handleTagRequestChange(e, index)}
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
                                                    onClick={() => data.label ? this.handleEditTagRequestClick(index) : this.handleUpdateTagRequestClick(index)} >
                                                    <div>{data.label ? 'Edit' : 'Update'}</div>
                                                </Button>
                                            </Form.Group>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                                <Button type="submit" variant="outline-primary" size="sm" block style={styles.submit_btn}
                                                    onClick={() => { data.label ? this.handleAddTagRequestClick(index) : this.handleCancelTagRequestClick(index) }}>
                                                    <div>{data.label ? 'Add' : 'Cancel'}</div>
                                                </Button>
                                            </Form.Group>
                                            <div className="mr-auto"></div>
                                            <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                                <Button type="submit" variant="outline-danger" size="sm" block style={styles.submit_btn}
                                                    onClick={() => this.handleDeleteTagRequestClick(index)}>
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





                {/* All Tags */}
                <Row noGutters>
                    <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                        <Card style={styles.card}>
                            <Card.Header>
                                <Form.Label>All Tags</Form.Label>
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
                                                    placeholder="Enter Tag Value"
                                                    name="sku"
                                                    value={this.state.filterStr}
                                                    onChange={(e) => this.handleFilterStrChange(e)}
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <hr />
                                    {this.state.tagList.map((data, index) =>
                                        <Form.Row>
                                            <Form.Group as={Col} lg={8} md={8} sm={12} xs={12}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        size="sm"
                                                        placeholder="Enter Tag Value"
                                                        name="sku"
                                                        value={data.value}
                                                        onChange={(e) => this.handleTagChange(e, index)}
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
                                                    onClick={data.label ? () => this.handleEditTagClick(index) : () => this.handleUpdateTagClick(index)} >
                                                    <div>{data.label ? 'Edit' : 'Update'}</div>
                                                </Button>
                                            </Form.Group>
                                            <div className="mr-auto"></div>
                                            <Form.Group as={Col} lg={2} md={2} sm="auto" xs="auto">
                                                <Button type="submit" variant={data.label ? "outline-danger" : "outline-primary"} size="sm" block style={styles.submit_btn}
                                                    onClick={data.label ? () => this.handleDeleteTagClick(index) : () => this.handleCancelTagClick(index)}>
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
export default ProducTags
