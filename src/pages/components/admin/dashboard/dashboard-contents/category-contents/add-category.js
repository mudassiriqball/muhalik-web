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
import CardAccordion from '../../../../card-accordion';

import { Formik } from 'formik';
import * as yup from 'yup';
import CreatableSelect from 'react-select/creatable';

const schema = yup.object({
    sub_category: yup.string().required("Enter Category")
        .min(5, "Must have at least 5 characters")
        .max(25, "Can't be longer than 25 characters"),
});


class AddCategory extends Component {
    state = {
        token: '',
        isLoading: false,
        showToast: false,

        category: '',
        isCategoryNew: false,
        categoryError: '',
        img: '',
        imgError: '',
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            token: nextProps.token
        });
    }

    async addCategory(values, currentComponent) {
        let formData = new FormData()
        console.log('jjjjj:', this.state.category)
        formData.append('category', this.state.category)
        formData.append('sub_category', values.sub_category)
        formData.append('myImage', this.state.img)

        const url = MuhalikConfig.PATH + '/api/categories/category';
        await axios.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': currentComponent.state.token,
            }
        }).then(function (response) {
            currentComponent.categoriesReloadHandler
            currentComponent.setState({
                isLoading: false,
                showToast: true,
                isCategoryNew: false,
                category: '',
                imgError: '',
            })
            return true
        }).catch(function (error) {
            currentComponent.setState({ isLoading: false });
            try {
                alert('Error: ', error.response.data.message);
            } catch (err) {
                console.log('Request Failed:', error)
            }
            return false
        });
    }
    handleCategoryChange = (e) => {
        let search = null
        if (e != null) {
            search = this.props.categories_list.filter(element => element._id == e._id)
            if (search.length == 0) {
                this.setState({ isCategoryNew: true })
            } else {
                this.setState({ category: e.value, isCategoryNew: false })
            }
        } else {
            this.setState({ isCategoryNew: false })
        }
    }

    render() {
        return (
            <Formik
                validationSchema={schema}
                initialValues={{ sub_category: '' }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (this.state.category == '') {
                        this.setState({ categoryError: 'Select/Enter Value' })
                    } else if (this.state.category.length < 5 || this.state.category.length > 24) {
                        this.setState({ categoryError: 'Must be 5-25 caracters' })
                    } else if (this.state.isCategoryNew == true && this.state.img == '') {
                        this.setState({ imgError: 'Select Image' })
                    }
                    else {
                        this.setState({ isLoading: true });
                        setSubmitting(true);
                        setTimeout(() => {
                            if (this.addCategory(values, this)) {
                                resetForm()
                                this.props.categoriesReloadHandler()
                            }
                            setSubmitting(false);
                        }, 500);
                    }
                }}
            >
                {
                    ({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        isValid,
                        errors,
                        handleBlur,
                        isSubmitting
                    }) => (
                            <div className='add_category'>
                                <AlertModal
                                    onHide={(e) => this.setState({ showToast: false })}
                                    show={this.state.showToast}
                                    header={'Success'}
                                    message={'Category Added Successfully'}
                                    iconname={faThumbsUp}
                                    color={"#00b300"}
                                />
                                <TitleRow icon={faListAlt} title={' Admin Dashboard / Add Category'} />
                                <Card>
                                    <Card.Header>
                                        Add New
                                    </Card.Header>
                                    <Card.Body>
                                        <Form.Row>
                                            <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                <Form.Label style={styles.label}> Category <span> * </span></Form.Label>
                                                <CreatableSelect
                                                    isClearable
                                                    onChange={this.handleCategoryChange}
                                                    options={this.props.categories_list}
                                                />
                                                <Form.Row style={{ color: '#DC3545', fontSize: '13px', marginLeft: '2px' }}>
                                                    {this.state.categoryError}
                                                </Form.Row>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                <Form.Label style={styles.label}> Sub Category <span> * </span></Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Category Value"
                                                        name="sub_category"
                                                        value={values.sub_category}
                                                        onChange={handleChange}
                                                        isInvalid={touched.sub_category && errors.sub_category}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.sub_category}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                        {this.state.isCategoryNew ?
                                            <Form.Row>
                                                <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Image <span> * </span></Form.Label>
                                                    <InputGroup>
                                                        <Form.File
                                                            className="position-relative"
                                                            style={{ color: 'gray' }}
                                                            required
                                                            name="file"
                                                            onChange={(e) => this.setState({ img: e.target.files[0] })}
                                                            isInvalid={this.state.imgError}
                                                        />
                                                        <Form.Row style={{ fontSize: '13px', color: '#DC3545', marginLeft: '2px', width: '100%' }}>
                                                            {this.state.imgError}
                                                        </Form.Row>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>
                                            :
                                            null
                                        }
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Button type="submit"
                                                    onClick={handleSubmit}
                                                    disabled={this.state.isLoading} block className='mt-5'>
                                                    {this.state.isLoading ? 'Uploading' : 'Add Category'}
                                                    {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                </Button>
                                            </Form.Group>
                                        </Form.Row>
                                    </Card.Body>
                                </Card>
                                <style type="text/css">{`
                                    .add_category .card{
                                        margin: 2%;
                                    }
                                    .add_category .card_header{
                                        background: ${GlobalStyleSheet.card_header_background};
                                        font-size: ${GlobalStyleSheet.card_header_fontsize};
                                    }
                                    .add_category .card-body{
                                        height: 70vh;
                                    }
                                `}</style>
                                <style jsx>{`
                                   
                                    .add_category p{
                                        font-size: 13px;
                                        text-align: center;
                                        align-self: center;
                                        width: 100%;
                                        margin-top: 5px;
                                    }
                                    .add_category span{
                                        color: red;
                                    }
                                `}</style>
                            </div >
                        )
                }
            </Formik>
        );
    }
}

export default AddCategory;

const styles = {
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
}