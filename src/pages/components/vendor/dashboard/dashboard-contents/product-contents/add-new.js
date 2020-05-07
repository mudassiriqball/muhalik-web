
import React, { Component } from 'react';
import { Accordion, Form, Col, Row, Card, InputGroup, Button, Toast, Alert, Nav, Tabs, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faArrowLeft, faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

import AlertModal from '../../../../alert-modal';

import GlobalStyleSheet from '../../../../../../styleSheet';
import TitleRow from '../../../../title-row';
import CardAccordion from '../../../../card_accordion';

import MuhalikConfig from '../../../../../../sdk/muhalik.config';
import { getUncodededTokenFromStorage } from '../../../../../../sdk/core/authentication-service';
import CustomFields from './add-new-contents/custom-fields';
import ProductData from './add-new-contents/product-data';
import product_size_options from '../../../../../../sdk/consts/product-size-options'
import product_color_options from '../../../../../../sdk/consts/product-color-options'
// Option List for select Product Category (when offline)
let product_categories_options = [
    { value: 'Shoe', label: 'Shoe' },
    { value: 'Cloth', label: 'Cloth' },
    { value: 'Shirt', label: 'Shirt' },
    { value: 'Pant', label: 'Pant' }
]
const product_sub_categories_options = [
    { value: 'Sub Shoe', label: 'Sub Shoe' },
    { value: 'Sub Cloth', label: 'Sub Cloth' },
    { value: 'Sub Shirt', label: 'Sub Shirt' },
]

// For React-Select
const components = {
    DropdownIndicator: null,
};
// Model For React-Select
const createOption = (label) => ({
    value: label,
    label,
});



// Yup Schema for validation fields
const schema = yup.object({
    product_name: yup.string().required("Enter Product Name")
        .min(2, "Must have at least 2 characters")
        .max(40, "Can't be longer than 40 characters"),

    product_description: yup.string()
        .min(5, "Must have at least 5 characters")
        .max(200, "Can't be longer than 200 characters"),
    // Product Data
    product_type: yup.string(),
    // => Inventory
    sku: yup.string()
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),
    // => General(Simple-Product)
    product_price: yup.number()
        .integer("Enter Only Numbers")
        .positive('Enter Between 1-1000000')
        .max(1000000, 'Enter Between 1-1000000'),
    product_in_stock: yup.number()
        .integer("Enter Only Numbers")
        .min(1, "Must grater than 1 digit")
        .max(1000000, "Can't be longer than 1000000"),
    product_brand_name: yup.string()
        .min(2, "Must have at least 2 characters")
        .max(40, "Can't be longer than 40 characters"),
    product_image_link: yup.string(),
    product_warranty: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-200')
        .max(10000, 'Enter Between 0-10000'),
    warranty_type: yup.string(),
    product_discount: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),
    // => Attributes (Variable Product)
    purchase_note: yup.string(),
    // => Variations (Variable Product)
    product_variations: yup.string(),
    // => Shipping
    product_weight: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(10000, "Can't be longer than 10000"),
    dimension_length: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(10000, "Can't be longer than 10000"),
    dimension_width: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(10000, "Can't be longer than 10000"),
    dimension_height: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(10000, "Can't be longer than 10000"),
    shipping_charges: yup.number("Enter Only Numbers")
        .min(0, 'Enter Between 0-100')
        .max(10000, 'Enter Between 0-10000'),
    handling_fee: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(10000, "Can't be longer than 1000"),
    // => Advanve
    purchase_note: yup.string(),
    // Custom Fields
    custom_fields: yup.string(),

    product_category: yup.string(),
    product_sub_category: yup.string(),

    dangerous_goods: yup.string(),
    product_tags: yup.string(),
});


class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdateProduct: this.props.isUpdateProduct,
            _id: this.props._id,
            isLoading: false,
            showToast: false,
            toastMessage: '',
            showVariationsErrorAlert: false,
            showSimpleProductPriceImgLinkErrorrAlert: false,
            isVariableProduct: this.props.isVariableProduct,

            productCategories: this.props.productCategories,
            productSubCategories: this.props.productSubCategories,
            subCategoryDisabled: true,
            categoryErrorDiv: 'BorderDiv',
            subCategoryErrorDiv: 'BorderDiv',

            productTags: this.props.productTags,

            warrantyType: this.props.warrantyType,
            inputValue: '',
            simple_product_image_link: this.props.simple_product_image_link,

            image_linkError: 'no_error',
            image_linkErrorDiv: 'BorderDiv',

            variationsArray: this.props.variationsArray,
            isVariationsSaved: false,

            // Custom Fields
            customFieldsArray: [],

            files: [],
            imagePreviewArray: [],
            // Dangerous Goods
            dangerousGoodsArray: this.props.dangerousGoodsArray,
        };
        // this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
    }

    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/categories/categories';
        const url_1 = MuhalikConfig.PATH + '/api/categories/fields';
        const url_2 = MuhalikConfig.PATH + '/api/categories/tags';
        const token = await getUncodededTokenFromStorage()

        await axios.get(url, {
            headers: { 'authorization': token }
        }).then((response) => {
            // console.log('categories:', response.data)
        }).catch((error) => {
            // alert('categories Fetchig Error: ', error)
        })
        await axios.get(url_1, {
            headers: { 'authorization': token }
        }).then((response) => {
            // console.log('fields:', response.data)
        }).catch((error) => {
            // console.log('fuck:', error)
            // alert('fields Fetchig Error: ', error.response.data.message)
        })
        await axios.get(url_2, {
            headers: { 'authorization': token }
        }).then((response) => {
            // console.log('tags:', response.data)
        }).catch((error) => {
            // alert('tags Fetchig Error: ', error)
        })
    }

    async  uploadProduct(data, currentComponent) {
        console.log('da111222333ta: ', data)
        if (this.state.isUpdateProduct == false) {
            const url = MuhalikConfig.PATH + '/api/products/add'
            await axios.post(url, {
                data
            }, {
                headers: {
                    'authorization': await getUncodededTokenFromStorage(),
                }
            }).then(function (response) {
                currentComponent.setState({ isLoading: false });
                currentComponent.setState({ showToast: true, toastMessage: 'Product Uploaded Successfully' });
                return true;
            }).catch(function (error) {
                console.log('error rooro:', error)
                console.log('error rooro:', error.response)
                currentComponent.setState({ isLoading: false });
                alert('Product Upload failed');
                return false;
            });
        } else {
            const url = MuhalikConfig.PATH + `/api/products/${this.state._id}`
            await axios.put(url, {
                data
            }, {
                headers: { 'authorization': await getUncodededTokenFromStorage() }
            }).then(function (response) {
                currentComponent.setState({ isLoading: false });
                currentComponent.setState({ showToast: true, toastMessage: 'Product Updated Successfully' });
                return true;
            }).catch(function (error) {
                currentComponent.setState({ isLoading: false });
                alert('Product Update failed');
                return false;
            });
        }
    }

    //  Submit data to api
    // async uploadProduct(data, ) {
    //     if (await this.props.upload(data) == true) {
    //         currentComponent.setState({ isLoading: false });
    //         currentComponent.setState({ showToast: true });
    //         return true;
    //     } else {
    //         currentComponent.setState({ isLoading: false });
    //         alert('Product Upload failed');
    //         return false;
    //     }
    // }

    // handleProductTypeChange(e) {
    // if (e.target.value == 'variable-prouct') {
    //     this.setState({ isVariableProduct: true, customFieldsArray: [] });
    // }
    //     else {
    //         this.setState({ isVariableProduct: false, variationsArray: [] });
    //     }
    // }

    // Product Data
    // => Simple Product Image Link
    simpleProductImgLinkChange(value) {
        this.setState({ simple_product_image_link: value });
    }
    handleSimpleProductImage_linkKeyDown = (event, inputValue) => {
        const simple_product_image_link = this.state.simple_product_image_link;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                this.setState({
                    simple_product_image_link: [...simple_product_image_link, createOption(inputValue)],
                });
                event.preventDefault();
                return true;
        }
    };
    // => End Of Simple Product Image Link

    // Custom Fields
    handleSaveCustomFieldsBtnClick() {
        if (this.state.isVariableProduct == true) {
            const copyArray = Object.assign([], this.state.variationsArray)
            copyArray.forEach(element => {
                this.state.customFieldsArray.forEach(e => {
                    element.customField.push({
                        name: e.name,
                        value: e.value
                    });
                })
            });
            this.setState({ variationsArray: copyArray, customFieldsArray: [] })
        }
    }


    // Product Category
    handleProductCategoryChange = (value) => {
        this.setState({ productCategories: value, subCategoryDisabled: false, categoryErrorDiv: 'BorderDiv' });
    }
    handleProductSubCategoryChange = (value) => {

        this.setState({
            productSubCategories: value, subSubCategoryDisabled: false,
            subCategoryErrorDiv: 'BorderDiv'
        });
    }

    // Dangerous Goods
    handleDangerousGoodsChange = (e, name) => {
        const copyArray = Object.assign([], this.state.dangerousGoodsArray);
        if (e.target.checked) {
            copyArray.push({ value: name });
        } else {
            copyArray.forEach((element, index) => {
                if (element.value == name) {
                    copyArray.splice(index, 1)
                }
            });
        }
        this.setState({ dangerousGoodsArray: copyArray });
    }

    // Product Tags
    handleProductTagChange = (arr) => {
        this.setState({ productTags: arr });
    };


    async fileSelectedHandler(e) {
        await this.setState({ files: [...this.state.files, ...e.target.files] })

        let array = []
        this.state.files.forEach(element => {
            array.push(URL.createObjectURL(element))
        })

        this.setState({ imagePreviewArray: array })
    }
    deleteImage = (index) => {
        const copyArray = Object.assign([], this.state.files)
        const imgCopyArray = Object.assign([], this.state.imagePreviewArray)
        copyArray.splice(index, 1)
        imgCopyArray.splice(index, 1)
        this.setState({ files: copyArray, imagePreviewArray: imgCopyArray })
    }

    render() {
        var showCustomFields = false;
        if (this.state.variationsArray == [] && this.state.isVariableProduct == true) {
            showCustomFields = true;
        }
        else {
            showCustomFields = false;
        }

        return (
            <Formik
                validationSchema={schema}
                initialValues={
                    this.props.isUpdateProduct ?
                        {
                            product_name: this.props.product_name,
                            product_description: this.props.product_description,
                            product_type: this.props.product_type,
                            sku: this.props.sku,
                            product_price: this.props.product_price,
                            product_in_stock: this.props.product_in_stock,
                            product_brand_name: this.props.product_brand_name,
                            // product_image_link:this.props.product_image_link}
                            product_warranty: this.props.product_warranty,
                            warranty_type: this.props.warranty_type,
                            product_discount: this.props.product_discount,
                            purchase_note: this.props.purchase_note,
                            // product_variations:this.props.product_variations}
                            product_weight: this.props.product_weight,
                            dimension_length: this.props.dimension_length,
                            dimension_width: this.props.dimension_width,
                            dimension_height: this.props.dimension_height,
                            shipping_charges: this.props.shipping_charges,
                            handling_fee: this.props.handling_fee,
                        }
                        :
                        { product_type: 'simple-product' }
                }
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (this.state.productCategories == '' || this.state.productSubCategories == '' || (this.state.files == [] && values.product_type == 'simple-product')) {
                        if (this.state.productCategories == '') {
                            this.setState({ categoryErrorDiv: 'RedBorderDiv' });
                        }
                        if (this.state.productSubCategories == '') {
                            this.setState({ subCategoryErrorDiv: 'RedBorderDiv' });
                        }
                        if (this.state.files == [] && values.product_type == 'simple-product') {
                            this.setState({ showSimpleProductPriceImgLinkErrorrAlert: true, image_linkError: "error", image_linkErrorDiv: 'RedBorderDiv' });
                        }
                        setSubmitting(false);
                    } else if (this.state.isVariationsSaved == false && values.product_type == 'variable-prouct') {
                        this.setState({ showVariationsErrorAlert: true });
                    } else {
                        resetForm();
                        setSubmitting(true);
                        this.setState({ isLoading: true });
                        setTimeout(() => {
                            let array = [];
                            values.product_category = this.state.productCategories;
                            values.product_sub_category = this.state.productSubCategories;
                            values.product_tags = this.state.productTags;

                            values.dangerous_goods = this.state.dangerousGoodsArray;

                            if (!this.state.isVariableProduct) {
                                values.product_image_link = this.state.files;
                                values.custom_fields = this.state.customFieldsArray;
                            } else {
                                array = [];
                                this.state.variationsArray.forEach((element, index) => {
                                    let item = []
                                    element.item.forEach(e => {
                                        item.push({ name: e.name, value: e.value })
                                    });
                                    let item_1 = []
                                    element.custom_fields.forEach(e => {
                                        item_1.push({ name: e.name, value: e.value })
                                    });
                                    array.push({ item: item, custom_fields: item_1, price: element.price, stock: element.stock, image_link: element.image_link })
                                })
                                values.product_variations = array;
                            }
                            resetForm();
                            if (this.uploadProduct(values, this)) {
                                this.setState({
                                    showVariationsErrorAlert: false,
                                    showSimpleProductPriceImgLinkErrorrAlert: false,
                                    isVariableProduct: false,

                                    productCategories: '',
                                    productSubCategories: '',

                                    subCategoryDisabled: true,
                                    subSubCategoryDisabled: true,

                                    categoryErrorDiv: 'BorderDiv',
                                    subCategoryErrorDiv: 'BorderDiv',
                                    productTags: [],

                                    warrantyType: '',
                                    inputValue: '',
                                    files: [],

                                    image_linkError: 'no_error',
                                    image_linkErrorDiv: 'BorderDiv',

                                    variationsArray: [],
                                    isVariationsSaved: false,

                                    // Custom Fields
                                    customFieldsArray: [],

                                    // Dangerous Goods
                                    dangerousGoodsArray: [],
                                });
                            }
                            setSubmitting(false);
                        }, 500);
                    }
                }}>
                {({
                    handleSubmit, handleChange, values, touched, isValid, errors, handleBlur, isSubmitting
                }) => (
                        <div>
                            <TitleRow icon={faPlus} title={this.props.title} />
                            {this.props.isUpdateProduct ?
                                <Form.Row style={{ margin: ' 0% 2%', display: 'flex', alignItems: 'center' }} >
                                    <Nav.Link style={{ fontSize: '14px' }} className="mr-auto" onClick={this.props.back}>Back</Nav.Link>
                                    <div className="mr-auto" style={{ fontSize: '14px' }}> {this.props.product_name}</div>
                                    <Nav.Link style={{ fontSize: '14px' }} onClick={this.props.view}> View </Nav.Link>
                                    <Nav.Link style={{ fontSize: '14px' }} onClick={this.props.delete}> Delete </Nav.Link>
                                </Form.Row>
                                :
                                null
                            }
                            <Form noValidate onSubmit={handleSubmit}>
                                <AlertModal
                                    onHide={(e) => this.setState({ showToast: false })}
                                    show={this.state.showToast}
                                    header={'Success'}
                                    message={this.state.toastMessage}
                                    iconName={faThumbsUp}
                                    color={"#00b300"}
                                />
                                <AlertModal
                                    onHide={(e) => this.setState({ showVariationsErrorAlert: false })}
                                    show={this.state.showVariationsErrorAlert}
                                    header={'Error'}
                                    message={'Please Add/Save Variations First'}
                                    iconName={faExclamationTriangle}
                                    color={"#ff3333"}
                                />
                                <AlertModal
                                    onHide={(e) => this.setState({ showSimpleProductPriceImgLinkErrorrAlert: false })}
                                    show={this.state.showSimpleProductPriceImgLinkErrorrAlert}
                                    header={'Error'}
                                    message={'Enter Price/Image Link in General Tab First'}
                                    iconName={faExclamationTriangle}
                                    color={"#ff3333"}
                                />
                                <Row noGutters style={{ paddingTop: '1%' }}>
                                    <Col lg={9} md={9} sm={12} xs={12}>
                                        {/* Product Name */}
                                        <Form.Group as={Row} style={{ margin: '0.5% 2% 2% 2%', padding: '0%' }}>
                                            <Form.Label style={styles.label}>Product Name<span>*</span></Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Product Name"
                                                    name="product_name"
                                                    value={values.product_name || ''}
                                                    onChange={handleChange}
                                                    isInvalid={errors.product_name}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.product_name}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        {/* End of Product Name */}

                                        {/* Product Discription */}
                                        <CardAccordion title={'Product Discruption'}>
                                            <Form.Group>
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Enter Product Description"
                                                    name="product_description"
                                                    value={values.product_description || ''}
                                                    rows="7"
                                                    onChange={handleChange}
                                                    isInvalid={errors.product_description}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.product_description}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </CardAccordion>
                                        {/* Product Data Row */}
                                        <ProductData
                                            isUpdateProduct={this.props.isUpdateProduct}
                                            productTypeHandler={e => {
                                                if (e.target.value == 'variable-prouct') {
                                                    this.setState({
                                                        isVariableProduct: true
                                                    })
                                                } else {
                                                    this.setState({
                                                        isVariableProduct: false
                                                    })
                                                }
                                            }}
                                            isVariableProduct={this.state.isVariableProduct}

                                            product_type_values={values.product_type}

                                            product_price_values={values.product_price || ''}
                                            product_price_errors={errors.product_price}
                                            product_price_touched={touched.product_price}

                                            product_in_stock_values={values.product_in_stock || ''}
                                            product_in_stock_errors={errors.product_in_stock}

                                            product_brand_name_values={values.product_brand_name || ''}
                                            product_brand_name_errors={errors.product_brand_name}


                                            fileSelectedHandler={this.fileSelectedHandler.bind(this)}
                                            imagePreviewArray={this.state.imagePreviewArray}
                                            deleteImage={this.deleteImage}

                                            imageLink={this.state.simple_product_image_link}
                                            simpleProductImgLinkChange={this.simpleProductImgLinkChange.bind(this)}
                                            simpleProductImgLinkKeyDownHandler={this.handleSimpleProductImage_linkKeyDown.bind(this)}
                                            simpleProductError={this.state.showSimpleProductPriceImgLinkErrorrAlert}

                                            product_warranty_values={values.product_warranty || ''}
                                            product_warranty_errors={errors.product_warranty}

                                            warranty_type_values={values.warranty_type || ''}
                                            warranty_type_errors={errors.warranty_type}

                                            product_discount_values={values.product_discount || ''}
                                            product_discount_errors={errors.product_discount}

                                            sku_values={values.sku || ''}
                                            sku_errors={errors.sku}

                                            product_weight_values={values.product_weight || ''}
                                            product_weight_errors={errors.product_weight}

                                            dimension_length_values={values.dimension_length || ''}
                                            dimension_length_errors={errors.dimension_length}

                                            dimension_width_values={values.dimension_width || ''}
                                            dimension_width_errors={errors.dimension_width}

                                            dimension_height_values={values.dimension_height || ''}
                                            dimension_height_errors={errors.dimension_height}

                                            shipping_charges_values={values.shipping_charges || ''}
                                            shipping_charges_errors={errors.shipping_charges}

                                            handling_fee_values={values.handling_fee || ''}
                                            handling_fee_errors={errors.handling_fee}

                                            purchase_note_values={values.purchase_note || ''}
                                            purchase_note_errors={errors.purchase_note}

                                            onChange={handleChange}
                                            errors={errors}

                                            productColorChangeHandler={this.handleProductColorChange}
                                            productSizeChangeHandler={this.handleProductSizeChange}

                                            variationsArray={this.state.variationsArray}
                                            setVariationsArray={(arr) => this.setState({ variationsArray: arr })}
                                            setVariationsSaved={() => this.setState({ isVariationsSaved: true })}
                                        />
                                        {/* End of Product Data Row */}
                                        {/* Custom Fields Row */}
                                        <CardAccordion title={'Custom Fields'}>
                                            <CustomFields
                                                customFieldsArray={this.state.customFieldsArray}
                                                setFieldsArrayHandler={(arr) => this.setState({ customFieldsArray: arr })}
                                                isVariableProduct={this.state.isVariableProduct}
                                                showCustomFields={showCustomFields}
                                                saveCustomFieldsHandler={this.handleSaveCustomFieldsBtnClick.bind(this)}
                                            />
                                        </CardAccordion>
                                        {/* End of Custom Fields Row */}
                                    </Col>

                                    <Col lg={3} md={3} sm={12} xs={12}>
                                        {/* Product Category */}
                                        <CardAccordion title={'Product Categories'}>
                                            <Form.Group>
                                                <Form.Label style={styles.label}>Category</Form.Label>
                                                <div className={this.state.categoryErrorDiv}>
                                                    <Select
                                                        styles={GlobalStyleSheet.react_select_styles}
                                                        onChange={this.handleProductCategoryChange}
                                                        options={product_categories_options}
                                                        value={this.state.productCategories}
                                                        isSearchable={true}
                                                        isClearable={true}
                                                        placeholder="Select Category"
                                                    />
                                                </div>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label style={styles.label}>Sub Category</Form.Label>
                                                <div className={this.state.subCategoryErrorDiv}>
                                                    <Select
                                                        styles={GlobalStyleSheet.react_select_styles}
                                                        onChange={this.handleProductSubCategoryChange}
                                                        options={product_sub_categories_options}
                                                        value={this.state.productSubCategories}
                                                        isSearchable={true}
                                                        isClearable={true}
                                                        placeholder="Select Sub Category"
                                                        isDisabled={this.state.subCategoryDisabled}
                                                    />
                                                </div>
                                                <div style={{ minHeight: '150px' }}></div>
                                            </Form.Group>
                                        </CardAccordion>
                                        {/* End of Product ategory */}

                                        {/* Dangerous Goods */}
                                        <CardAccordion title={'Dangerous Goods'}>
                                            <Form.Check
                                                name="not_specified"
                                                label="Not Specified"
                                                style={styles.label}
                                                checked={this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
                                                    if (element.value == 'Not-Specified') {
                                                        return true
                                                    }
                                                })}
                                                onChange={(e) => this.handleDangerousGoodsChange(e, 'Not-Specified')}
                                            />
                                            <br></br>
                                            <Form.Check
                                                name="ceramic"
                                                label="Ceramic"
                                                style={styles.label}
                                                checked={this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
                                                    if (element.value == 'Ceramic') {
                                                        return true
                                                    }
                                                })}
                                                onChange={(e) => this.handleDangerousGoodsChange(e, 'Ceramic')}
                                            />
                                            <br></br>
                                            <Form.Check
                                                name="glass"
                                                label="Glass"
                                                style={styles.label}
                                                checked={this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
                                                    if (element.value == 'Glass') {
                                                        return true
                                                    }
                                                })}
                                                onChange={(e) => this.handleDangerousGoodsChange(e, 'Glass')}
                                            />
                                            <br></br>
                                            <Form.Check
                                                name="metal"
                                                label="Metal"
                                                style={styles.label}
                                                checked={this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
                                                    if (element.value == 'Metal') {
                                                        return true
                                                    }
                                                })}
                                                onChange={(e) => this.handleDangerousGoodsChange(e, 'Metal')}
                                            />
                                            <br></br>
                                            <Form.Check
                                                name="plastic"
                                                label="Plastic"
                                                style={styles.label}
                                                checked={this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
                                                    if (element.value == 'Plastic') {
                                                        return true
                                                    }
                                                })}
                                                onChange={(e) => this.handleDangerousGoodsChange(e, 'Plastic')}
                                            />
                                        </CardAccordion>
                                        {/* End ofDangerous Goods */}

                                        {/* Product Tags */}
                                        <CardAccordion title={'Product Tags'}>
                                            <CreatableSelect
                                                isMulti
                                                styles={GlobalStyleSheet.react_select_styles}
                                                onChange={this.handleProductTagChange}
                                                options={product_color_options}
                                                value={this.state.productTags}
                                                placeholder="Select/Enter Tags"
                                            />
                                            <div style={{ minHeight: '150px' }}></div>
                                        </CardAccordion>
                                        {/* End of Product Tags */}
                                    </Col>
                                </Row>

                                {/* Form Submit Btn Row */}
                                <Row style={styles.row}>
                                    <Button type="submit" onSubmit={handleSubmit} disabled={this.state.isLoading} block>
                                        {this.state.isLoading ? 'Uploading' : 'Upload'}
                                        {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : <div></div>}
                                    </Button>
                                </Row>
                                {/* End of Form Submit Btn Row */}
                            </Form>
                            <style jsx>
                                {`
                                        .RedBorderDiv{
                                            border: 0.5px solid #DC3545;
                                            padding: 1px;
                                            border-radius: 2px;
                                            width: 100%;
                                        }
                                        .BorderDiv{
                                            border: none;
                                            width: 100%;
                                        }
                                        span {
                                            color: red;
                                        }
                                        .nav_link {
                                            background: ${GlobalStyleSheet.admin_primry_color};
                                            border-top: 0.5px solid #434556;
                                            border-bottom: 0.5px solid #434556;
                                            margin: 1.5px 0px;
                                            border-radius: 4px
                                        }
                                        p {
                                            text-align: center; 
                                            margin: 0px;
                                        }
                                    `}
                            </style>
                        </div>
                    )
                }
            </Formik >
        );
    }
}

const styles = {
    nav_link: {
        color: 'white',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        height: '45px',
    },
    row: {
        margin: '2%',
        padding: '0%'
    },
    card: {
        width: '100%',
        border: '1px solid lightgray'
    },
    card_header: {
        alignItems: 'center',
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
    },
    buttons: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        fontSize: '10px',
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    term_condition_label: {
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
        paddingTop: '-10px',
        marginTop: '-10px',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
    product_fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        marginRight: '10%',
        width: '17px',
        height: '17px',
        maxHeight: '17px',
        maxWidth: '17px',
    },
    variations_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '10%',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}
export default AddNew;