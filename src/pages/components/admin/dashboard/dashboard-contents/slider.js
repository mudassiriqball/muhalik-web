import React, { Component } from 'react';
import axios from 'axios'
import { Form, Row, Accordion, Image, Col, Card, InputGroup, Button, Spinner, Dropdown, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faListAlt, faSlidersH, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import MuhalikConfig from '../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../../styleSheet'
import AlertModal from '../../../alert-modal';
import TitleRow from '../../../title-row';
import CardAccordion from '../../../card-accordion';

import { Formik } from 'formik';
import * as yup from 'yup';
import CreatableSelect from 'react-select/creatable';

const schema = yup.object({
    sub_category: yup.string()
});

let slidersArray = [];
class Slider extends Component {
    state = {
        token: this.props.token,
        isLoading: false,
        showToast: false,
        toastMsg: '',
        sliders_list: this.props.sliders_list,
        sub_categories: [],
        category: '',
        sub_category: '',
        sub_categoryDisabled: true,
        categoryError: '',
        subCategoryError: '',
        img: '',
        imgError: '',
    };

    slidersArray = this.props.sliders_list

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            token: nextProps.token,
            sliders_list: nextProps.sliders_list,
        });
        slidersArray = nextProps.sliders_list
    }

    async addCategory(values, currentComponent) {
        let formData = new FormData()

        formData.append('category', this.state.category.value)
        formData.append('sub_category', this.state.sub_category.value)
        formData.append('myImage', this.state.img)

        const url = MuhalikConfig.PATH + '/api/sliders/add-slider';
        await axios.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': currentComponent.props.token,
            }
        }).then(function (response) {
            currentComponent.setState({
                isLoading: false,
                showToast: true,
                toastMsg: 'Category Added Successfully',
                sub_categories: [],
                category: '',
                sub_category: '',
                sub_categoryDisabled: true,
                img: '',
            })
            currentComponent.props.sliderReloadHandler()
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
        let search
        if (e != null) {
            this.setState({ category: e, categoryError: '' })
            search = this.props.sub_categories_list.filter(element => element.category_id == e._id)
            if (search.length != 0) {
                this.setState({ sub_categories: search, sub_categoryDisabled: false })
            }
        } else {
            this.setState({ sub_categories: '', sub_categoryDisabled: true, category: '', categoryError: '' })
        }
    }
    handleSubCategoryChange = (e) => {
        if (e != null) {
            this.setState({ sub_category: e, subCategoryError: '' })
        } else {
            this.setState({ sub_category: '', subCategoryError: '' })
        }
    }

    handleFilterStrChange(e) {
        this.setState({ filterStr: e.target.value });
        let array = [];
        if (e.target.value != '') {
            if (this.state.searchType == 'Category') {
                slidersArray.filter(function (data) {
                    const value = data.value.toLowerCase()
                    if (value.includes(e.target.value.toLowerCase())) {
                        array.push(data);
                    }
                })
            } else {
                let currentComponent = this
                this.state.sliders_list.filter(function (element) {
                    const value = element.value.toLowerCase()
                    if (value.includes(e.target.value.toLowerCase())) {
                        slidersArray.filter(function (e) {
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
            this.setState({ sliders_list: array })
        } else {
            this.setState({ sliders_list: slidersArray })
        }
    }
    //  => Img Chane
    handleImgChange = (e, index) => {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sliders_list);
        copyArray[index].newImg = e.target.files[0];
        copyArray[index].url = URL.createObjectURL(e.target.files[0])
        copyArray[index].imgError = '';
        this.setState({ sliders_list: copyArray })
    }

    //  => Edit
    async handleEditClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sliders_list);
        var obj = {};
        obj['_id'] = copyArray[index]._id;
        obj['isEdit'] = true;
        obj['category'] = copyArray[index].category;
        obj['sub_category'] = copyArray[index].sub_category;

        obj['url'] = copyArray[index].url;
        obj['newImg'] = '';
        obj['prevUrl'] = copyArray[index].url;

        obj['isLoading'] = false;
        obj['imgError'] = '';

        copyArray[index] = obj
        await this.setState({ sliders_list: copyArray })
    }
    //  => Cancle
    handleCancelClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sliders_list);
        copyArray[index].url = copyArray[index].prevUrl;
        copyArray[index].imgError = '';
        copyArray[index].isEdit = false;
        this.setState({ sliders_list: copyArray })
    }

    //  => Update
    async handleUpdateClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sliders_list);
        if (copyArray[index].url == copyArray[index].prevUrl) {
            copyArray[index].imgError = 'Select Img'

        } else {
            copyArray[index].isLoading = true;
            this.setState({
                sliders_list: copyArray,
            });
            const currentComponent = this
            let formData = new FormData()
            formData.append('myImage', copyArray[index].newImg)

            const url = MuhalikConfig.PATH + `/api/sliders/slider/${copyArray[index]._id}`
            await axios.put(url, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                    'authorization': this.state.token,
                }
            }).then(function (response) {
                currentComponent.setState({
                    showToast: true,
                    toastMsg: 'Category Updated Successfully'
                })
                currentComponent.props.sliderReloadHandler()
            }).catch(function (error) {
                copyArray[index].isLoading = false;
                currentComponent.setState({
                    sliders_list: copyArray,
                });
                try {
                    alert('Error: ', error.response.data.message);
                } catch (err) {
                    alert('Category Update Failed');
                }
                console.log('Request Failed:', error)

            });
        }
    }

    // Delete
    async handleDeleteClick(index) {
        let copyArray = [];
        copyArray = Object.assign([], this.state.sliders_list);
        copyArray[index].isLoading = true;
        this.setState({
            sliders_list: copyArray,
        });
        const currentComponent = this

        const url = MuhalikConfig.PATH + `/api/sliders/slider/${copyArray[index]._id}`
        await axios.delete(url, {
            headers: {
                'authorization': this.state.token,
            }
        }).then(function (response) {
            currentComponent.setState({
                showToast: true,
                toastMsg: 'Category Deleted Successfully'
            })
            currentComponent.props.sliderReloadHandler()
        }).catch(function (error) {
            copyArray[index].isLoading = false;
            currentComponent.setState({
                sliders_list: copyArray,
            });
            try {
                alert('Error: ', error.response.data.message);
            } catch (err) {
                alert('Category Update Failed');
            }
            console.log('Request Failed:', error)
        });
    }

    render() {
        return (
            <Formik
                validationSchema={schema}
                initialValues={{ sub_category: '' }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (this.state.category == '' || this.state.sub_category == '' || this.state.img == '') {
                        if (this.state.category == '') {
                            this.setState({ categoryError: 'Select Category' })
                        }
                        if (this.state.sub_category == '') {
                            this.setState({ subCategoryError: 'Select Sub Category' })
                        }
                        if (this.state.img == '') {
                            this.setState({ imgError: 'Select Image' })
                        }
                    }
                    else {
                        this.setState({ isLoading: true });
                        setSubmitting(true);
                        setTimeout(() => {
                            if (this.addCategory(values, this)) {
                                resetForm()
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
                            <div className='slider'>
                                <AlertModal
                                    onHide={(e) => this.setState({ showToast: false })}
                                    show={this.state.showToast}
                                    header={'Success'}
                                    message={this.state.toastMsg}
                                    iconname={faThumbsUp}
                                    color={"#00b300"}
                                />
                                <TitleRow icon={faListAlt} title={' Admin Dashboard / Slider'} />
                                <CardAccordion title={'Add Slider'}>
                                    <Form.Row className='mb-5'>
                                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Label style={styles.label}> Category <span> * </span></Form.Label>
                                            <CreatableSelect
                                                id={'1'}
                                                instanceId={'1'}
                                                inputId={'1'}
                                                isClearable={false}
                                                value={this.state.category}
                                                onChange={this.handleCategoryChange}
                                                options={this.props.categories_list}
                                            />
                                            <Form.Row style={{ color: '#DC3545', fontSize: '13px', marginLeft: '2px' }}>
                                                {this.state.categoryError}
                                            </Form.Row>
                                        </Form.Group>
                                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Label style={styles.label}>Sub Category <span> * </span></Form.Label>
                                            <CreatableSelect
                                                id={'1'}
                                                instanceId={'1'}
                                                inputId={'1'}
                                                value={this.state.sub_category}
                                                isClearable={false}
                                                onChange={this.handleSubCategoryChange}
                                                options={this.state.sub_categories}
                                                isDisabled={this.state.sub_categoryDisabled}
                                            />
                                            <Form.Row style={{ color: '#DC3545', fontSize: '13px', marginLeft: '2px' }}>
                                                {this.state.subCategoryError}
                                            </Form.Row>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                            <Form.Label style={styles.label}>Image <span> * </span></Form.Label>
                                            <InputGroup>
                                                <Form.File
                                                    className="position-relative"
                                                    style={{ color: 'gray' }}
                                                    required
                                                    name="file"
                                                    onChange={(e) => this.setState({ img: e.target.files[0], imgError: '' })}
                                                    isInvalid={this.state.imgError}
                                                />
                                                <Form.Row style={{ fontSize: '13px', color: '#DC3545', marginLeft: '2px', width: '100%' }}>
                                                    {this.state.imgError}
                                                </Form.Row>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Button type="submit"
                                                size='sm'
                                                onClick={handleSubmit}
                                                disabled={this.state.isLoading} block className='mt-5 mb-5'>
                                                {this.state.isLoading ? 'Uploading' : 'Add Slider'}
                                                {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </CardAccordion>

                                <CardAccordion title={'All Slider Images'}>

                                    {/* <Form.Row style={{ margin: '0% 5%' }}>
                                                <Form.Group as={Col}>
                                                    <InputGroup>
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
                                            <hr /> */}
                                    {this.state.sliders_list && this.state.sliders_list.map((element, index) =>
                                        <div key={index}>
                                            <Form.Row>
                                                <Col lg={3} md={3} sm={4} xs={12}>
                                                    <Form.Group as={Form.Row}>
                                                        <Form.Label style={styles.label}>Category Id:</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            size="sm"
                                                            name="sku"
                                                            value={element.category}
                                                            disabled={true}
                                                            onChange={(e) => this.handleCategoryChange(e, index)}
                                                            isInvalid={element.error}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {element.error}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Form.Row}>
                                                        <Form.Label style={styles.label}>Sub Category Id:</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            size="sm"
                                                            name="sku"
                                                            value={element.sub_category}
                                                            disabled={true}
                                                            onChange={(e) => this.handleCategoryChange(e, index)}
                                                            isInvalid={element.error}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {element.error}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    {element.isEdit ?
                                                        <Form.Group as={Form.Row}>
                                                            <InputGroup>
                                                                <Form.File
                                                                    className="position-relative"
                                                                    required
                                                                    style={{ fontSize: '13px' }}
                                                                    name="file"
                                                                    onChange={(e) => this.handleImgChange(e, index)}
                                                                    id="validationFormik07"
                                                                />
                                                            </InputGroup>
                                                            <Form.Row style={{ fontSize: '13px', color: '#DC3545', margin: '0%', padding: '0%' }}>
                                                                {element.imgError}
                                                            </Form.Row>
                                                        </Form.Group>
                                                        :
                                                        null
                                                    }
                                                    <Row>
                                                        <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                                            <Button type="submit" className='d-inline-flex' variant={!element.isEdit ? "outline-primary" : "outline-success"} size="sm"
                                                                onClick={!element.isEdit ? () => this.handleEditClick(index) : () => this.handleUpdateClick(index)}
                                                                disabled={!element.isEdit ? false : element.error}
                                                            >
                                                                {!element.isEdit ? ' Edit ' : ' Update '}
                                                                {!element.isEdit ? null : element.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                            </Button>
                                                        </Form.Group>

                                                        <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
                                                            <Button type="submit" variant={!element.isEdit ? "outline-danger" : "outline-primary"}
                                                                size="sm" block style={styles.submit_btn}
                                                                onClick={!element.isEdit ? () => this.handleDeleteClick(index) : () => this.handleCancelClick(index)}
                                                            >
                                                                {!element.isEdit ? ' Delete ' : ' Cancel '}
                                                                {element.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                            </Button>
                                                        </Form.Group>
                                                    </Row>
                                                </Col>
                                                <Col>
                                                    <Image src={element.url} fluid style={{ width: '100%', borderRadius: '5px', border: '0.5px solid lightgray' }} />
                                                </Col>
                                            </Form.Row>
                                            <div className='w-100 mt-5 mb-2' style={{ background: 'lightgray', minHeight: '5px' }}></div>
                                        </div>
                                    )}
                                </CardAccordion>
                                <style type="text/css">{`
                                    .slider .card_div{
                                        margin: 2%;
                                    } 
                                    .slider .card_header{
                                        background: ${GlobalStyleSheet.card_header_background};
                                        font-size: ${GlobalStyleSheet.card_header_fontsize};
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

export default Slider;

const styles = {
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
}