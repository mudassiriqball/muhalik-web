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
    sub_category: yup.string()
});

class HomeScreenCategories extends Component {
    state = {
        token: this.props.token,
        isLoading: false,
        showToast: false,

        home_categories_list: this.props.home_categories_list,
        categories_list: this.props.categories_list,

        category: '',
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            token: nextProps.token,
            home_categories_list: nextProps.home_categories_list,
            categories_list: nextProps.categories_list,
        });
    }

    async addHomeCategory(values, currentComponent) {
        const url = MuhalikConfig.PATH + '/api/categories/home-category';
        console.log('lll:', this.state.category)
        await axios.post(url, {
            category_id: this.state.category._id,
            value: this.state.category.value,
            url: this.state.category.urrl
        }, {
            headers: {
                'authorization': currentComponent.state.token,
            }
        }).then(function (response) {
            currentComponent.homeCategoriesReloadHandler
            currentComponent.setState({
                isLoading: false,
                showToast: true,
                category: '',
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
        this.setState({ category: e })
    }

    async handleDelete(element, index) {
        let copyArray = Object.assign([], this.state.home_categories_list)
        let obj = copyArray[index]
        obj['isLoading'] = true
        copyArray[index] = obj
        this.setState({ home_categories_list: copyArray })
    }

    render() {
        return (
            <Formik
                validationSchema={schema}
                initialValues={{ sub_category: '' }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (this.state.category == '') {
                        this.setState({ categoryError: 'Select/Enter Value' })
                    } else {
                        this.setState({ isLoading: true });
                        setSubmitting(true);
                        setTimeout(() => {
                            if (this.addHomeCategory(values, this)) {
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
                            <div className='add_home_category'>
                                <AlertModal
                                    onHide={(e) => this.setState({ showToast: false })}
                                    show={this.state.showToast}
                                    header={'Success'}
                                    message={'Home Category Added Successfully'}
                                    iconname={faThumbsUp}
                                    color={"#00b300"}
                                />
                                <TitleRow icon={faListAlt} title={' Admin Dashboard / Home Screen Categories'} />
                                <CardAccordion title={'Add New'}>
                                    <Form.Row className='d-flex align-items-center justify-content-center'>
                                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Label style={styles.label}> Select Category <span> * </span></Form.Label>
                                            <CreatableSelect
                                                id={'1'}
                                                instanceId={'1'}
                                                inputId={'1'}
                                                isClearable={false}
                                                value={this.state.category}
                                                onChange={this.handleCategoryChange}
                                                options={this.state.categories_list}
                                            />
                                            <Form.Row style={{ color: `${GlobalStyleSheet.error_color}`, fontSize: '13px', marginLeft: '2px' }}>
                                                {this.state.categoryError}
                                            </Form.Row>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className='d-flex align-items-center justify-content-center'>
                                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                            <Button onClick={handleSubmit} size='sm' disabled={this.state.isLoading || this.state.category == ''} block className='mt-5'>
                                                {this.state.isLoading ? 'Uploading' : 'Add Category'}
                                                {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </CardAccordion>
                                <CardAccordion title={'Add New'}>
                                    {this.state.home_categories_list && this.state.home_categories_list.map((element, index) =>
                                        <Form.Row key={index}>
                                            <Form.Group as={Col} lg={5} md={5} sm={5} xs={12}>
                                                <Form.Control
                                                    value={element.category_id}
                                                    disabled={true}
                                                    size='sm'
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} lg={5} md={5} sm={5} xs={12}>
                                                <Form.Control
                                                    value={element.value}
                                                    disabled={true}
                                                    size='sm'
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={2} xs={12}>
                                                <Button onClick={() => handleDelete(element, index)} size='sm' disabled={element.isLoading} block className='mt-5'>
                                                    {element.isLoading ? 'Deleting' : 'Delete'}
                                                    {element.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                </Button>
                                            </Form.Group>
                                        </Form.Row>
                                    )}
                                </CardAccordion>
                                <style type="text/css">{`
                                    .add_home_category .card-body{
                                        height: 50vh;
                                    }
                                `}</style>
                                <style jsx>{`
                                    .add_home_category p{
                                        font-size: 13px;
                                        text-align: center;
                                        align-self: center;
                                        width: 100%;
                                        margin-top: 5px;
                                    }
                                    .add_home_category span{
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

export default HomeScreenCategories;

const styles = {
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
}
