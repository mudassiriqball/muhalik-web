import React, { Component } from 'react';
import axios from 'axios'
import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner, Dropdown, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt, faSlidersH, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../../../styleSheet'
import AlertModal from '../../../../alert-modal';
import TitleRow from '../../../../title-row';
import CardAccordion from '../../../../card_accordion';


class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            isLoading: false,
            showToast: false,

            categoryValue: '',
            subCategoryValue: '',
            img: '',

            categoryError: '',
            subCategoryError: '',
            imgError: '',
        }
    }
    async addCategory(currentComponent) {
        let formData = new FormData()
        formData.append('category', this.state.categoryValue)
        formData.append('sub_category', this.state.subCategoryValue)
        formData.append('myImage', this.state.img)

        const url = MuhalikConfig.PATH + '/api/categories/category';
        await axios.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': this.props.token,
            }
        }).then(function (response) {
            currentComponent.setState({ isLoading: false, showToast })
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
        if (this.state.categoryValue == '' || this.state.subCategoryValue == '' || this.state.img == '') {
            if (this.state.categoryValue == '') {
                this.setState({ categoryError: 'Enter Value First' });
            }
            if (this.state.subCategoryValue == '') {
                this.setState({ subCategoryError: 'Enter Value First' });
            }
            if (this.state.img == '') {
                this.setState({ imgError: 'Select First' });
            }
        } else {
            this.setState({ isLoading: true })
            this.addCategory(this)
        }
    }

    render() {
        return (
            <div>
                <AlertModal
                    onHide={(e) => this.setState({ showToast: false })}
                    show={this.state.showToast}
                    header={'Success'}
                    message={'Category Added Successfully'}
                    iconname={faThumbsUp}
                    color={"#00b300"}
                />
                <TitleRow icon={faListAlt} title={' Admin Dashboard / Add Category'} />
                <CardAccordion title={'Add New Category'}>
                    <Form.Row>
                        <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
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
                        <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
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
                        <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                            <Form.Label style={styles.label}>Image</Form.Label>
                            <InputGroup>
                                <Form.File
                                    className="position-relative"
                                    required
                                    name="file"
                                    onChange={(e) => this.setState({ img: e.target.files[0] })}
                                    isInvalid={!!this.state.imgError}
                                    id="validationFormik07"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.imgError}
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
            </div >
        )
    }
}

export default AddCategory;

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