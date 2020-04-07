
import React, { Component } from 'react';
import { Form, Col, Row, Card, InputGroup, Button, Toast, Tab, Nav, Tabs, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faKey, faSlidersH, faStoreAlt, faTruck, faTools, faDollarSign, faListAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactSelectMaterialUi from "react-select-material-ui";
import ShowToast from '../../../../toast';
import GlobalStyleSheet from '../../../../../../styleSheet';
import MuhalikConfig from '../../../../../../sdk/muhalik.config';
import { getUncodededTokenFromStorage } from '../../../../../../sdk/core/authentication-service';
import CustomFields from './add-new-contents/custom-fields';
import ProductData from './add-new-contents/product-data';
import product_size_options from '../../../../../../sdk/consts/product-size-options'
import product_color_options from '../../../../../../sdk/consts/product-color-options'

const product_attributes_list = [
    { value: 'Size', label: 'Size' },
    { value: 'Color', label: 'Color' },
    { value: 'Price', label: 'Price' },
]

// Option List for select Product Category (when offline)
const product_categories = [
    { value: 'Shoe', label: 'Shoe' },
    { value: 'Cloth', label: 'Cloth' },
    { value: 'Shirt', label: 'Shirt' },
    { value: 'Pant', label: 'Pant' }
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

    product_category: yup.string(),

    product_type: yup.string(),
    product_weight: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(100, "Can't be longer than 100"),

    dimension_length: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(100, "Can't be longer than 100"),

    dimension_width: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(100, "Can't be longer than 100"),

    dimension_height: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(100, "Can't be longer than 100"),

    handling_fee: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(100, "Can't be longer than 100"),

    product_description: yup.string()
        .min(5, "Must have at least 5 characters")
        .max(200, "Can't be longer than 200 characters"),

    not_specified: yup.string(),
    Plastic: yup.string(),
    Ceramic: yup.string(),
    Metal: yup.string(),
    Glass: yup.string(),
    Plastic: yup.string(),

    product_brand_name: yup.string()
        .min(2, "Must have at least 2 characters")
        .max(40, "Can't be longer than 40 characters"),

    product_price: yup.number()
        .integer("Enter Only Numbers")
        .positive('Enter Between 1-1000000')
        .max(1000000, 'Enter Between 1-1000000'),

    product_size: yup.string(),

    product_colors: yup.string(),

    product_tags: yup.string(),

    purchase_note: yup.string(),

    product_in_stock: yup.number()
        .integer("Enter Only Numbers")
        .min(1, "Must grater than 1 digit")
        .max(1000000, "Can't be longer than 1000000"),

    product_warranty: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-200')
        .max(200, 'Enter Between 0-200'),

    warranty_type: yup.string(),

    product_discount: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),

    sku: yup.string()
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),


    shipping_charges: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),

    product_image_link: yup.string(),

    product_attributes: yup.string(),
    product_variations: yup.string(),

    custom_fields: yup.string(),
});


class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,

            product_categories_options: product_categories,
            productCategories: '',
            categoryError: 'no_error',
            categoryErrorDiv: 'BorderDiv',

            size: [],
            color: [],
            productTags: [],

            productAttribute: [],
            productAttributesArray: [],

            warrantyType: 'Year',
            inputValue: '',
            image_link: [],


            image_linkError: 'no_error',
            image_linkErrorDiv: 'BorderDiv',
            isVariableProduct: false,

            // Product Attributes
            productAttributesArray: [],
            productAttributeName: '',
            productAttributeValue: '',
            productAttributeError: '',

            variationsArray: [],

            // Custom Fields
            customFieldsArray: [],
            customFieldName: '',
            customFieldValue: '',
            customFieldError: '',
        };
        this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
        this.addCustomFieldBtnClicked = this.addCustomFieldBtnClicked.bind(this);
        // this.uploadProduct = this.uploadProduct.bind(this);
    }

    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products-categories/get-all';
        try {
            const response = await axios.get(url);
            this.setState({ product_categories_options: response.data.data });
        } catch (error) {
            console.error(error);
        }
    }
    //  Submit data to api
    async uploadProduct(data, currentComponent) {
        console.log('data: ', data)
        // const url = MuhalikConfig.PATH + '/api/products/add';
        // await axios.post(url, {
        //     data
        // }, {
        //     headers: { 'authorization': await getUncodededTokenFromStorage() }
        // }).then(function (response) {
        currentComponent.setState({ isLoading: false });
        currentComponent.setState({ showToast: true });
        //     return true;
        // }).catch(function (error) {
        //     currentComponent.setState({ isLoading: false });
        //     alert('Error: ', error.response.data.message);
        //     return false;
        // });
    }

    // Product Size
    handleProductSizeChange = (arr, actionMeta) => {
        this.setState({ size: arr });
    };

    // Product Color
    handleProductColorChange = (arr, actionMeta) => {
        this.setState({ color: arr });
        // this.setState({ color: newValue, colorError: 'no_error', colorErrorDiv: 'BorderDiv' });
    };

    handleProductTagChange = (arr) => {
        this.setState({ productTags: arr });
    };



    // Product Category
    handleProductCategoryChange = (arr) => {
        this.setState({ productCategories: arr, categoryError: 'no_error', categoryErrorDiv: 'BorderDiv' });
    }

    // Product Image Link
    handleImage_linkChange = (arr, actionMeta) => {
        this.setState({ image_link: arr, image_linkError: 'no_error', image_linkErrorDiv: 'BorderDiv' });
    };
    handleImageLinkInputChange = (aa) => {
        this.setState({ inputValue: aa });
    };
    handleImage_linkKeyDown = (event) => {
        const inputValue = this.state.inputValue;
        const image_link = this.state.image_link;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                this.setState({
                    inputValue: '',
                    image_link: [...image_link, createOption(inputValue)],
                });
                event.preventDefault();
        }
    };



    handleProductTypeChange(e) {
        if (e.target.value == 'variable-prouct') {
            this.setState({ isVariableProduct: true });
        }
        else {
            this.setState({ isVariableProduct: false });
        }
    }

    // Product Attributes
    handleProductAttributeNameChange = (e) => {
        this.setState({ productAttributeName: e.target.value })
    }
    handleProductAttributeValueChange = (e) => {
        this.setState({ productAttributeValue: e.target.value })
    }
    handleAddProductAttributeClicked = () => {
        if (this.state.productAttributeName != '' && this.state.productAttributeValue != '') {
            this.setState({ productAttributeError: '' })
            const copyArray = Object.assign([], this.state.productAttributesArray);
            copyArray.push({
                productAttributeName: this.state.productAttributeName,
                productAttributeValue: this.state.productAttributeValue,
            })
            this.setState({ productAttributeName: '' })
            this.setState({ productAttributeValue: '' })
            this.setState({ productAttributesArray: copyArray })
        } else {
            this.setState({ productAttributeError: 'Enter Field Name and Value' });
        }
    }
    handleSaveProductAttributesClicked = () => {
        var allArrays = [];
        this.state.productAttributesArray.forEach(element => {
            var trim = element.productAttributeValue.split(' ').join('');
            var splitArray = trim.split('|');
            allArrays.push(splitArray)
        });

        const array = this.allPossibleCases(allArrays)
        var data = [];
        array.forEach(element => {
            const split = element.split('-');
            let item = [];

            split.forEach((e, i) => {
                item.push({ name: this.state.productAttributesArray[i].productAttributeName, value: e })
            });
            data.push({ items: item, price: '0', stock: '1', image_link: '' })
        });
        // console.log("split Array: ", data)
        this.setState({ variationsArray: data })
    }
    allPossibleCases(arr) {
        if (arr.length == 1) {
            return arr[0];
        } else {
            var result = [];
            var allCasesOfRest = this.allPossibleCases(arr.slice(1));  // recur with the rest of array
            for (var i = 0; i < allCasesOfRest.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    result.push(arr[0][j] + "-" + allCasesOfRest[i]);
                }
            }
            return result;
        }
    }

    handleUpdateProductAttributeClicked = (index, name, value) => {
        const copyArray = Object.assign([], this.state.productAttributesArray);
        copyArray[index] = { productAttributeName: name, productAttributeValue: value };
        this.setState({ productAttributesArray: copyArray });
    }
    handleDeleteProductAttributeClicked = (index) => {
        const copyArray = Object.assign([], this.state.productAttributesArray);
        copyArray.splice(index, 1);
        this.setState({ productAttributesArray: copyArray });
    }
    handleDeleteProductVariationClicked = (index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        copyArray.splice(index, 1);
        this.setState({ variationsArray: copyArray });
    }
    handlePriceCheckboxChanged = (e) => {
        if (e.target.checked) {
            const copyArray = Object.assign([], this.state.variationsArray);

            copyArray.forEach(element => {
                element.price = copyArray[0].items.price
            });
        }
    }
    handleProductPriceChanged = (e, index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        let object = copyArray[index];
        object.price = e.target.value;
        copyArray[index] = object;
        this.setState({ variationsArray: copyArray });
    }
    handleProductInStockChanged = (e, index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        let object = copyArray[index];
        object.stock = e.target.value;
        copyArray[index] = object;
        this.setState({ variationsArray: copyArray });
    }
    handleProductImageLinkChanged = (e, index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        let object = copyArray[index];
        object.image_link = e.target.value;
        copyArray[index] = object;
        this.setState({ variationsArray: copyArray });
    }



    // Custom Fields
    customFieldNameChangeHandler = (e) => {
        this.setState({ customFieldName: e.target.value })
    }
    customFieldValueChangeHandler = (e) => {
        this.setState({ customFieldValue: e.target.value })
    }
    addCustomFieldBtnClicked = () => {
        if (this.state.customFieldName != '' && this.state.customFieldValue != '') {
            this.setState({ customFieldError: '' })
            const copyArray = Object.assign([], this.state.customFieldsArray);
            copyArray.push({
                customFieldName: this.state.customFieldName,
                customFieldValue: this.state.customFieldValue,
            })
            this.setState({ customFieldName: '' })
            this.setState({ customFieldValue: '' })
            this.setState({ customFieldsArray: copyArray })
        } else {
            this.setState({ customFieldError: 'Enter Field Name and Value' });
        }
    }
    updateCustomFieldsEvent = (index, name, value) => {
        const copyArray = Object.assign([], this.state.customFieldsArray);
        copyArray[index] = { customFieldName: name, customFieldValue: value };
        this.setState({ customFieldsArray: copyArray });
    }
    deleteCustomFieldsEvent = (index) => {
        const copyArray = Object.assign([], this.state.customFieldsArray);
        copyArray.splice(index, 1);
        this.setState({ customFieldsArray: copyArray });
    }

    render() {
        return (
            <Formik
                validationSchema={schema}
                initialValues={{
                    product_name: '',
                    product_category: '',
                    product_type: '',
                    product_weight: 0,
                    dimension_length: '',
                    dimension_width: '',
                    dimension_height: '',
                    handling_fee: '',
                    product_description: '',
                    not_specified: '',
                    Plastic: '',
                    Ceramic: '',
                    Metal: '',
                    Glass: '',
                    Plastic: '',
                    product_brand_name: '',
                    product_price: '',
                    product_size: '',
                    product_colors: '',
                    product_tags: '',
                    purchase_note: '',
                    product_in_stock: 1,
                    product_warranty: 0,
                    warranty_type: '',
                    product_discount: 0,
                    sku: '',
                    shipping_charges: 40,
                    product_image_link: '',
                    product_attributes: '',
                    product_variations: '',
                    custom_fields: '',

                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (this.state.productCategories == '') {
                        // if (this.state.customFieldNameArray == '') {
                        //     this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
                        // }
                        if (this.state.productCategories == '') {
                            this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
                        }
                        // if (this.state.image_link == '') {
                        //     this.setState({ image_linkError: "error", image_linkErrorDiv: 'RedBorderDiv' });
                        // }
                        setSubmitting(false);
                    } else {
                        resetForm();
                        setSubmitting(true);
                        this.setState({ isLoading: true });
                        setTimeout(() => {
                            values.product_category = this.state.productCategories;

                            values.product_size = this.state.size;
                            values.product_colors = this.state.color;
                            values.product_tags = this.state.productTags;

                            values.product_image_link = this.state.image_link;

                            values.product_variations = this.state.variationsArray;
                            values.custom_fields = this.state.customFieldsArray;

                            this.uploadProduct(values, this);
                            // if (this.uploadData(values)) {
                            //     this.setState({ size: [], color: [], customFieldNameArray: [], image_link: [], inputValue: '' });
                            //     resetForm();
                            // }
                            setSubmitting(false);
                        }, 500);
                    }
                }}
            >
                {
                    ({
                        handleSubmit, handleChange, values, touched, isValid, errors, handleBlur, isSubmitting
                    }) => (
                            <div>
                                <Row style={styles.title_row} noGutters>
                                    <FontAwesomeIcon icon={faPlus} style={styles.title_fontawesome} />
                                    <div className="mr-auto" style={styles.title}> Add New </div>
                                </Row>
                                <Form noValidate onSubmit={handleSubmit}>
                                    {this.state.showToast ? <ShowToast onCloseHandler={(e) => this.setState({ showToast: false })} show={this.state.showToast}
                                        message={'Product Uploaded Successfully'} icon={faThumbsUp} /> : null}

                                    <Row noGutters style={{ paddingTop: '2%' }}>
                                        <Col lg={9} md={9} sm={12} xs={12}>
                                            {/* Product Name */}
                                            <Form.Group as={Row} style={styles.left_culmn_row}>
                                                <Form.Label style={styles.label}>Product Name<span>*</span></Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Product Name"
                                                        name="product_name"
                                                        value={values.product_name}
                                                        onChange={handleChange}
                                                        isInvalid={touched.product_name && errors.product_name}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.product_name}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                            {/* End of Product Name */}
                                            {/* Product Discription */}
                                            <Form.Group as={Row} style={styles.left_culmn_row}>
                                                <Card style={styles.card}>
                                                    <Card.Header style={styles.card_header}>
                                                        Product Discruption
                                                </Card.Header>
                                                    <Card.Body>
                                                        <Form.Group>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows="7"
                                                                placeholder="Enter description about season, style, material etc"
                                                                value={values.product_description}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                            {/* Product Data Row */}
                                            <Row style={styles.left_culmn_row}>
                                                <ProductData
                                                    productTypeHandler={this.handleProductTypeChange}
                                                    isVariableProduct={this.state.isVariableProduct}

                                                    values={values}
                                                    onChange={handleChange}
                                                    touched={touched}
                                                    errors={errors}

                                                    color={this.state.color}
                                                    productColorChangeHandler={this.handleProductColorChange}
                                                    size={this.state.size}
                                                    productSizeChangeHandler={this.handleProductSizeChange}

                                                    attributesArray={this.state.productAttributesArray}
                                                    name={this.state.productAttributeName}
                                                    value={this.state.productAttributeValue}
                                                    attributeNameHandler={this.handleProductAttributeNameChange.bind(this)}
                                                    attributeValueHandler={this.handleProductAttributeValueChange.bind(this)}
                                                    addAttributeHandler={this.handleAddProductAttributeClicked.bind(this)}
                                                    update={this.handleUpdateProductAttributeClicked.bind(this)}
                                                    deleteAttributeHandler={this.handleDeleteProductAttributeClicked.bind(this)}
                                                    deleteVariationHandler={this.handleDeleteProductVariationClicked.bind(this)}
                                                    error={this.state.productAttributeError}

                                                    saveAttributesHandler={this.handleSaveProductAttributesClicked}
                                                    variationsArray={this.state.variationsArray}
                                                    productPriceHandler={this.handleProductPriceChanged.bind(this)}
                                                    productStockHandler={this.handleProductInStockChanged.bind(this)}
                                                    productImageLinkHandler={this.handleProductImageLinkChanged.bind(this)}
                                                    priceCheckboxHandler={this.handlePriceCheckboxChanged.bind(this)}

                                                />
                                            </Row>
                                            {/* End of Product Data Row */}
                                            {/* Custom Fields Row */}
                                            <Form.Group as={Row} style={styles.left_culmn_row}>
                                                <CustomFields
                                                    customArray={this.state.customFieldsArray}
                                                    name={this.state.customFieldName}
                                                    value={this.state.customFieldValue}
                                                    fieldNameHandler={this.customFieldNameChangeHandler.bind(this)}
                                                    fieldValueHandler={this.customFieldValueChangeHandler.bind(this)}
                                                    addFieldHandler={this.addCustomFieldBtnClicked.bind(this)}
                                                    update={this.updateCustomFieldsEvent.bind(this)}
                                                    delete={this.deleteCustomFieldsEvent.bind(this)}
                                                    error={this.state.customFieldError}
                                                />
                                            </Form.Group>
                                            {/* End of Custom Fields Row */}
                                        </Col>

                                        <Col lg={3} md={3} sm={12} xs={12}>
                                            {/* Product Category */}
                                            <Form.Group as={Row} style={styles.right_culmn_row}>
                                                <Card style={styles.card}>
                                                    <Card.Header style={styles.card_header}>
                                                        Product Categories
                                                    </Card.Header>
                                                    <Card.Body style={{ height: '250px' }}>
                                                        <div className={this.state.categoryErrorDiv}>
                                                            <CreatableSelect
                                                                isMulti
                                                                onChange={this.handleProductCategoryChange}
                                                                options={this.state.product_categories_options}
                                                                value={this.state.productCategories}
                                                                placeholder="Select/Enter Category"
                                                            />
                                                        </div>
                                                        <label className={this.state.categoryError}>
                                                            Selet Category
                                                        </label>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                            {/* End of Product ategory */}

                                            {/* Dangerous Goods */}
                                            <Form.Group as={Row} style={styles.right_culmn_row}>
                                                <Card style={styles.card}>
                                                    <Card.Header style={styles.card_header}>
                                                        Dangerous Goods
                                                </Card.Header>
                                                    <Card.Body>
                                                        <Form.Check
                                                            name="not_specified"
                                                            label="Not Specified"
                                                            style={styles.label}
                                                            onChange={handleChange}
                                                            isInvalid={touched.not_specified && errors.not_specified}
                                                            feedback={errors.not_specified}
                                                            id="not_specified"
                                                        />
                                                        <br></br>
                                                        <Form.Check
                                                            name="Ceramic"
                                                            label="Ceramic"
                                                            style={styles.label}
                                                            onChange={handleChange}
                                                            isInvalid={touched.Ceramic && errors.Ceramic}
                                                            feedback={errors.Ceramic}
                                                            id="Ceramic"
                                                        />
                                                        <br></br>
                                                        <Form.Check
                                                            name="Glass"
                                                            label="Glass"
                                                            style={styles.label}
                                                            onChange={handleChange}
                                                            isInvalid={touched.Glass && errors.Glass}
                                                            feedback={errors.Glass}
                                                            id="Glass"
                                                        />
                                                        <br></br>
                                                        <Form.Check
                                                            name="Metal"
                                                            label="Metal"
                                                            style={styles.label}
                                                            onChange={handleChange}
                                                            isInvalid={touched.Metal && errors.Metal}
                                                            feedback={errors.Metal}
                                                            id="Metal"
                                                        />
                                                        <br></br>
                                                        <Form.Check
                                                            name="Plastic"
                                                            label="Plastic"
                                                            style={styles.label}
                                                            onChange={handleChange}
                                                            isInvalid={touched.Plastic && errors.Plastic}
                                                            feedback={errors.Plastic}
                                                            id="Plastic"
                                                        />
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                            {/* End ofDangerous Goods */}

                                            {/* Product Tags */}
                                            <Form.Group as={Row} style={styles.right_culmn_row}>
                                                <Card style={styles.card}>
                                                    <Card.Header style={styles.card_header}>
                                                        Product Tags
                                                </Card.Header>
                                                    <Card.Body style={{ height: '250px' }}>
                                                        <CreatableSelect
                                                            isMulti
                                                            onChange={this.handleProductTagChange}
                                                            options={product_color_options}
                                                            value={this.state.productTags}
                                                            placeholder="Select/Enter Tags"
                                                        />
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                            {/* End of Product Tags */}

                                        </Col>
                                    </Row>


                                    {/* Form Submit Btn Row */}
                                    <Form.Row style={styles.left_culmn_row}>
                                        <Form.Group as={Col}>
                                            <p style={styles.label}>Fields with <span> * </span> are mandatory.</p>
                                            <p style={styles.label}>For adding new size, color, link: Enter text and hit Enter or Tab key</p>
                                            <Button type="submit" onSubmit={handleSubmit} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                                {this.state.isLoading ? 'Uploading' : 'Upload'}
                                                {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : <div></div>}
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                    {/* End of Form Submit Btn Row */}
                                </Form>
                                <style jsx>
                                    {`
                                        .no_error {
                                            display: none;
                                        }
                                        .error{
                                            margin-top: 4px;  
                                            color: #DC3545;
                                            font-size: 14px;
                                            display: block;
                                        }
                                        .RedBorderDiv{
                                            border: 0.5px solid #DC3545;
                                            padding: 0.5px 0px 0.2px 0.5px;
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
            </Formik>
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

    nav_link: {
        color: 'white',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        height: '45px',
    },


    left_culmn_row: {
        margin: '0% 0% 3% 1.5%',
        padding: '0%'
    },
    right_culmn_row: {
        margin: '0% 2% 2% 5%',
        padding: '0%'
    },
    card: {
        width: '100%',
    },
    card_header: {
        alignItems: 'center',
        // color: '#6A7074',
        fontSize: '14px',
        background: 'lightgray'
    },
    buttons: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        fontSize: '10px',
    },
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        marginTop: '1%',
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
}
export default AddNew;