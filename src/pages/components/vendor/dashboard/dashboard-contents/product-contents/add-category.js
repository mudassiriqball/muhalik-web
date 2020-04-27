import React, { Component } from 'react';
import { Row, Form, Col, Card, Button, Spinner, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import ShowToast from '../../../../toast';
import GlobalStyleSheet from '../../../../../../styleSheet'
import TitleRow from '../../../../title-row'
class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,
            categoryValue: '',
            error: '',
        }
    }
    //  Submit data to api
    async addCategory(currentComponent) {
        // const url = MuhalikConfig.PATH + '/api/products/add';
        // await axios.post(url, {
        // this.state.categoryValue
        // }, {
        //     headers: { 'authorization': await getUncodededTokenFromStorage() }
        // }).then(function (response) {
        currentComponent.setState({ isLoading: false });
        currentComponent.setState({ showToast: true });
        return true;
        // }).catch(function (error) {
        //     currentComponent.setState({ isLoading: false });
        //     alert('Error: ', error.response.data.message);
        //     return false;
        // });
    }
    handleCategoryValueChange = (e) => {
        this.setState({ categoryValue: e.target.value })
    }

    handleSubmit = () => {
        if (this.state.categoryValue == '') {
            this.setState({ error: 'Enter Value First' })
        } else {
            this.setState({ isLoading: true });
            this.setState({ error: '' })
            this.addCategory(this);
        }
    }
    render() {
        return (
            <>
                {this.state.showToast ? <ShowToast onCloseHandler={(e) => this.setState({ showToast: false })} show={this.state.showToast}
                    header={'Success'} message={'Category Added Successfully'} iconName={faThumbsUp} color={"green"} />
                    : null
                }
                <TitleRow icon={faPlus} title={'Vendor Dashboard / Add New Category'} />

                <Row noGutters>
                    <Card style={styles.card}>
                        <Card.Header style={styles.card_header}>
                            Product Category
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
                                        onChange={this.handleCategoryValueChange}
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
                                    {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : <div></div>}
                                </Button>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Row>
            </>
        );
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
        margin: '5%'
    },
    card_header: {
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
    },
    card_body: {
        padding: '5%'
    },
    error: {
        width: '100%',
        textAlign: 'center',
        color: '#DC3545',
        fontSize: '14px',
    },

}

export default AddCategory;