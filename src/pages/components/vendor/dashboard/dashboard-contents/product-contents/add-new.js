
import React, { Component } from 'react';
import { Accordion, Form, Col, Row, Card, InputGroup, Button, Toast, Alert, Nav, Tabs, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faKey, faSlidersH, faStoreAlt, faTruck, faTools, faDollarSign, faExclamationTriangle, faListAlt
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
        .max(200, 'Enter Between 0-200'),
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
    shipping_charges: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),
    handling_fee: yup.number()
        .integer("Enter Only Numbers")
        .min(0, "Must grater than 0 digit")
        .max(100, "Can't be longer than 100"),

    // => Advanve
    purchase_note: yup.string(),

    // Custom Fields
    custom_fields: yup.string(),

    product_category: yup.string(),

    dangerous_goods: yup.string(),

    product_tags: yup.string(),


});


class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showToast: false,
            showVariationsErrorAlert: false,
            showSimpleProductPriceImgLinkErrorrAlert: false,
            isVariableProduct: false,

            product_categories_options: product_categories,
            productCategories: '',
            categoryError: 'no_error',
            categoryErrorDiv: 'BorderDiv',

            productTags: [],

            warrantyType: 'Year',
            inputValue: '',
            simple_product_image_link: [],
            simple_product_image_link: [],


            image_linkError: 'no_error',
            image_linkErrorDiv: 'BorderDiv',

            // Product Attributes
            productAttributesArray: [],
            productAttributeName: '',
            productAttributeValue: '',
            productAttributeError: '',
            productAttributeNameSelected: '',

            variationsArray: [],
            isVariationsSaved: false,
            samePriceInput: '',
            samePriceError: '',
            sameStockInput: '',
            sameStockError: '',
            sameImgLinkInput: '',
            sameImgLinkError: '',

            // Custom Fields
            customFieldsArray: [],
            customFieldName: '',
            customFieldValue: '',
            customFieldError: '',
            customFieldNameSelected: '',

            // Dangerous Goods
            dangerousGoodsArray: [],
        };
        this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
        this.handleAddCustomFieldBtnClick = this.handleAddCustomFieldBtnClick.bind(this);
        // this.uploadProduct = this.uploadProduct.bind(this);
    }

    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products-categories/get-all';
        try {
            const response = await axios.get(url);
            this.setState({ product_categories_options: response.data.data });
        } catch (error) {
            console.log(error);
        }
    }

    //  Submit data to api
    async uploadProduct(data, currentComponent) {
        console.log('data: ', data)
        const url = MuhalikConfig.PATH + '/api/products/add';
        await axios.post(url, {
            data
        }, {
            headers: { 'authorization': await getUncodededTokenFromStorage() }
        }).then(function (response) {
            currentComponent.setState({ isLoading: false });
            currentComponent.setState({ showToast: true });
            return true;
        }).catch(function (error) {
            currentComponent.setState({ isLoading: false });
            alert('Error: ', error.response.data.message);
            return false;
        });
    }



    handleProductTypeChange(e) {
        if (e.target.value == 'variable-prouct') {
            this.setState({ isVariableProduct: true });
        }
        else {
            this.setState({ isVariableProduct: false });
        }
    }

    // Product Data
    // => Simple Product Image Link
    handleSimpleProductImageLinkChange = (arr, actionMeta) => {
        this.setState({ simple_product_image_link: arr, image_linkError: 'no_error', image_linkErrorDiv: 'BorderDiv' });
    };
    handleSimpleProductImageLinkInputChange = (arr) => {
        this.setState({ inputValue: arr });
    };
    handleSimpleProductImage_linkKeyDown = (event) => {
        const inputValue = this.state.inputValue;
        const simple_product_image_link = this.state.simple_product_image_link;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                this.setState({
                    inputValue: '',
                    simple_product_image_link: [...simple_product_image_link, createOption(inputValue)],
                });
                event.preventDefault();
        }
    };
    // => End Of Simple Product Image Link

    // => Product Attributes (Variable Product)
    handleProductAttributeNameChange(e) {
        this.setState({ productAttributeName: e.value })
        this.setState({ productAttributeNameSelected: e })
    }
    handleProductAttributeValueChange = (e) => {
        this.setState({ productAttributeValue: e.target.value })
    }
    handleAddProductAttributeClick = () => {
        if (this.state.productAttributeName != '' && this.state.productAttributeValue != '') {
            this.setState({ productAttributeError: '' })
            const copyArray = Object.assign([], this.state.productAttributesArray);
            copyArray.push({
                productAttributeName: this.state.productAttributeName,
                productAttributeValue: this.state.productAttributeValue,
            })
            this.setState({ productAttributeName: '' })
            this.setState({ productAttributeValue: '' })
            this.setState({ productAttributeNameSelected: '' })
            this.setState({ productAttributesArray: copyArray })
        } else {
            this.setState({ productAttributeError: 'Enter Field Name and Value' });
        }
    }
    handleCreateVariationsClick = () => {
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
            data.push({ items: item, price: '', stock: '1', image_link: '', price_error: '', image_link_error: '', customField: [] })
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
    handleUpdateProductAttributeClick = (index, name, value) => {
        const copyArray = Object.assign([], this.state.productAttributesArray);
        copyArray[index] = { productAttributeName: name, productAttributeValue: value };
        this.setState({ productAttributesArray: copyArray });
    }
    handleDeleteProductAttributeClick = (index) => {
        const copyArray = Object.assign([], this.state.productAttributesArray);
        copyArray.splice(index, 1);
        this.setState({ productAttributesArray: copyArray });
    }
    // => End Of Product Attributes

    // => Product Variations (Variable Product)
    //  // =>Same Price For All Variations
    handleVariationsSamePriceChanged = (e) => {
        this.setState({ samePriceInput: e.target.value })
    }
    handleVariationsSamePriceClick = (e) => {
        if (this.state.samePriceInput != '') {
            const copyArray = Object.assign([], this.state.variationsArray);
            copyArray.forEach(element => {
                element.price = this.state.samePriceInput;

            });
            this.setState({ variationsArray: copyArray })
        } else {
            this.setState({ samePriceError: 'Enter Value' })
        }
    }
    // // => Same Stock For All Variations
    handleVariationsSameStockChanged = (e) => {
        this.setState({ sameStockInput: e.target.value })
    }
    handleVariationsSameStockClick = () => {
        if (this.state.sameStockInput != '') {
            const copyArray = Object.assign([], this.state.variationsArray);
            copyArray.forEach(element => {
                element.stock = this.state.sameStockInput;
            });
            this.setState({ variationsArray: copyArray })
        } else {
            this.setState({ sameStockError: 'Enter Value' })
        }
    }
    // // => Same Image link For All Variations
    handleVariationsSameImgLinkChanged = (e) => {
        this.setState({ sameImgLinkInput: e.target.value })
    }
    handleVariationsSameImgLinkClick = () => {
        if (this.state.sameImgLinkInput != '') {
            const copyArray = Object.assign([], this.state.variationsArray);
            copyArray.forEach(element => {
                element.image_link = this.state.sameImgLinkInput;
            });
            this.setState({ variationsArray: copyArray })
        } else {
            this.setState({ sameImgLinkError: 'Enter Value' })
        }
    }

    handleVariationPriceChange = (e, index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        let object = copyArray[index];
        if (e.target.value >= 0) {
            object.price = e.target.value;
            copyArray[index] = object;
            this.setState({ variationsArray: copyArray });
        }
    }
    handleVariationProductInStockChang = (e, index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        let object = copyArray[index];
        if (e.target.value >= 0) {
            object.stock = e.target.value;
            copyArray[index] = object;
            this.setState({ variationsArray: copyArray });
        }
    }
    handleVariationImageLinkChange = (e, index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        let object = copyArray[index];
        object.image_link = e.target.value;
        copyArray[index] = object;
        this.setState({ variationsArray: copyArray });
    }
    handleDeleteProductVariationClick = (index) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        copyArray.splice(index, 1);
        this.setState({ variationsArray: copyArray });
    }
    handleDeleteVariationCustomFieldClick = (index, i) => {
        const copyArray = Object.assign([], this.state.variationsArray);
        copyArray[index].customField.splice(i, 1);
        this.setState({ variationsArray: copyArray });
    }
    handleSaveVariationsClick = () => {
        const copyArray = Object.assign([], this.state.variationsArray);
        let flag = true;
        copyArray.forEach(element => {
            if (element.price == '' || element.image_link == '') {
                flag = false;
                if (element.price == '') {
                    element.price_error = 'Enter price'
                }
                if (element.image_link == '') {
                    element.image_link_error = 'Enter Image Link'
                }
            } else {
                element.price_error = ''
                element.image_link_error = ''
            }
        });
        if (flag == true) {
            this.setState({ isVariationsSaved: true })
        }
        this.setState({ variationsArray: copyArray });
    }
    handleVariationsErrorCheck = (data) => {
        if (data.price_error != '' || data.image_link_error != '') {
            return '1px solid red'
        }
        else {
            return 'none'
        }
    }
    // => End Of Product Variations
    // End of Product Data



    // Custom Fields
    handleCustomFieldNameChange(e) {
        this.setState({ customFieldName: e.value })
        this.setState({ customFieldNameSelected: e })
    }
    handleCustomFieldValueChange = (e) => {
        this.setState({ customFieldValue: e.target.value })
    }
    handleAddCustomFieldBtnClick = () => {
        if (this.state.customFieldName != '' && this.state.customFieldValue != '') {
            const copyArray = Object.assign([], this.state.variationsArray);

            if (this.state.isVariableProduct == true) {
                copyArray.forEach(element => {
                    element.customField.push({
                        name: this.state.customFieldName,
                        value: this.state.customFieldValue
                    });
                    console.log("element.customField: ", element.customField);
                });
                this.setState({ variationsArray: copyArray })
            } else {
                this.state.customFieldsArray.push({
                    name: this.state.customFieldName,
                    value: this.state.customFieldValue,
                })
            }

            this.setState({ customFieldError: '' })
            this.setState({ customFieldName: '' })
            this.setState({ customFieldValue: '' })
            this.setState({ customFieldNameSelected: '' })
        } else {
            this.setState({ customFieldError: 'Enter Field Name and Value' });
        }
    }
    updateCustomFieldsClick = (index, name, value) => {
        const copyArray = Object.assign([], this.state.customFieldsArray);
        copyArray[index] = { customFieldName: name, customFieldValue: value };
        this.setState({ customFieldsArray: copyArray });
    }
    deleteCustomFieldsClick = (index) => {
        const copyArray = Object.assign([], this.state.customFieldsArray);
        copyArray.splice(index, 1);
        this.setState({ customFieldsArray: copyArray });
    }




    // Product Category
    handleProductCategoryChange = (arr) => {
        this.setState({ productCategories: arr, categoryError: 'no_error', categoryErrorDiv: 'BorderDiv' });
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

    render() {
        var showCustomFields = false;
        if (this.state.variationsArray.length == 0 && this.state.isVariableProduct == true) {
            showCustomFields = true;
        }
        else {
            showCustomFields = false;
        }

        return (
            <Formik
                validationSchema={schema}
                initialValues={{
                    product_type: 'simple-product',
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (this.state.productCategories == '' || (this.state.simple_product_image_link == '' && values.product_type == 'simple-product')) {
                        // if (this.state.customFieldNameArray == '') {
                        //     this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
                        // }
                        if (this.state.productCategories == '') {
                            this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
                        }
                        if (this.state.simple_product_image_link == '' && values.product_type == 'simple-product') {
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
                            // this.state.productCategories.forEach(element => {
                            //     array.push(element.value)
                            // })
                            values.product_category = this.state.productCategories;
                            // array = [];
                            // this.state.productTags.forEach(element => {
                            //     array.push(element.value)
                            // })
                            values.product_tags = this.state.productTags;

                            values.dangerous_goods = this.state.dangerousGoodsArray;

                            if (values.product_type == 'simple-product') {
                                // array = [];
                                // this.state.simple_product_image_link.forEach(element => {
                                //     array.push(element.value)
                                // })
                                values.product_image_link = this.state.simple_product_image_link;
                                if (this.state.customFieldsArray != []) {
                                    // array = []
                                    // this.state.customFieldsArray.forEach(custom => {
                                    //     var obj = {};
                                    //     obj[custom.customFieldName] = custom.customFieldValue;
                                    //     array.push(obj)
                                    // });
                                    values.custom_fields = this.state.customFieldsArray;
                                }
                            } else {
                                array = [];
                                this.state.variationsArray.forEach((element, index) => {
                                    let item = []
                                    element.items.forEach(e => {
                                        item.push({ name: e.name, value: e.value })
                                    });
                                    element.customField.forEach(e => {
                                        item.push({ name: e.name, value: e.value })
                                    });
                                    item.push({ name: 'price', value: element.price })
                                    item.push({ name: 'stock', value: element.stock })
                                    item.push({ name: 'image_link', value: element.image_link })
                                    array.push({ item: item })
                                })

                                values.product_variations = array;
                            }

                            resetForm();

                            if (this.uploadProduct(values, this)) {
                                this.setState({
                                    productCategories: '',
                                    categoryError: 'no_error',
                                    categoryErrorDiv: 'BorderDiv',
                                    productTags: [],
                                    warrantyType: 'Year',
                                    inputValue: '',
                                    simple_product_image_link: [],
                                    image_linkError: 'no_error',
                                    image_linkErrorDiv: 'BorderDiv',
                                    isVariableProduct: false,
                                    productAttributesArray: [],
                                    productAttributeName: '',
                                    productAttributeValue: '',
                                    productAttributeError: '',
                                    variationsArray: [],
                                    isVariationsSaved: false,
                                    customFieldsArray: [],
                                    customFieldName: '',
                                    customFieldValue: '',
                                    customFieldError: '',
                                });

                            }
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
                                    <div className="mr-auto" style={styles.title}> Add New Product</div>
                                </Row>
                                <Form noValidate onSubmit={handleSubmit}>

                                    {this.state.showToast ? <ShowToast onCloseHandler={(e) => this.setState({ showToast: false })} show={this.state.showToast}
                                        header={'Success'} message={'Product Uploaded Successfully'} iconName={faThumbsUp} color={"green"} />
                                        : null
                                    }
                                    {this.state.showVariationsErrorAlert ?
                                        <ShowToast onCloseHandler={(e) => this.setState({ showVariationsErrorAlert: false })} show={this.state.showVariationsErrorAlert}
                                            header={'Error'} message={'Please Add/Save Variations First'} iconName={faExclamationTriangle} color={"red"} />
                                        : null
                                    }
                                    {this.state.showSimpleProductPriceImgLinkErrorrAlert ?
                                        <ShowToast onCloseHandler={(e) => this.setState({ showSimpleProductPriceImgLinkErrorrAlert: false })} show={this.state.showSimpleProductPriceImgLinkErrorrAlert}
                                            header={'Error'} message={'Enter Price/Image Link in General Tab First'} iconName={faExclamationTriangle} color={"red"} />
                                        : null
                                    }


                                    <Row noGutters style={{ paddingTop: '2%' }}>
                                        <Col lg={9} md={9} sm={12} xs={12}>
                                            {/* Product Name */}
                                            <Form.Group as={Row} style={styles.row}>
                                                <Form.Label style={styles.label}>Product Name<span>*</span></Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Product Name"
                                                        name="product_name"
                                                        value={values.product_name || ''}
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
                                            <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                                                <Form.Group as={Row} style={styles.row}>
                                                    <Card style={styles.card}>
                                                        <Card.Header style={styles.card_header}>
                                                            <Form.Label >Product Discruption</Form.Label>
                                                            <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                                                <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
                                                            </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body>
                                                                <Form.Group>
                                                                    <Form.Control
                                                                        as="textarea"
                                                                        placeholder="Enter Product Description"
                                                                        name="product_description"
                                                                        value={values.product_description || ''}
                                                                        rows="7"
                                                                        onChange={handleChange}
                                                                        isInvalid={touched.product_description && errors.product_description}
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                        {errors.product_description}
                                                                    </Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Form.Group>
                                            </Accordion>
                                            {/* Product Data Row */}
                                            <Row style={styles.row}>
                                                <ProductData
                                                    productTypeHandler={this.handleProductTypeChange}
                                                    isVariableProduct={this.state.isVariableProduct}

                                                    product_type_values={values.product_type || ''}

                                                    product_price_values={values.product_price || ''}
                                                    product_price_touched={touched.product_price}
                                                    product_price_errors={errors.product_price}

                                                    product_in_stock_values={values.product_in_stock || ''}
                                                    product_in_stock_touched={touched.product_in_stock}
                                                    product_in_stock_errors={errors.product_in_stock}

                                                    product_brand_name_values={values.product_brand_name || ''}
                                                    product_brand_name_touched={touched.product_brand_name}
                                                    product_brand_name_errors={errors.product_brand_name}

                                                    imageLink={this.state.simple_product_image_link}
                                                    simpleProductImageLinkHandler={this.handleSimpleProductImageLinkChange.bind(this)}
                                                    inputValue={this.state.inputValue}
                                                    simpleProductImageLinkInputChangeHandler={this.handleSimpleProductImageLinkInputChange.bind(this)}
                                                    simpleProductImageLinkhandleKeyDownHandler={this.handleSimpleProductImage_linkKeyDown.bind(this)}
                                                    simpleProductError={this.state.showSimpleProductPriceImgLinkErrorrAlert}

                                                    product_warranty_values={values.product_warranty || ''}
                                                    product_warranty_touched={touched.product_warranty}
                                                    product_warranty_errors={errors.product_warranty}

                                                    warranty_type_values={values.warranty_type || ''}
                                                    warranty_type_touched={touched.warranty_type}
                                                    warranty_type_errors={errors.warranty_type}

                                                    product_discount_values={values.product_discount || ''}
                                                    product_discount_touched={touched.product_discount}
                                                    product_discount_errors={errors.product_discount}

                                                    sku_values={values.sku || ''}
                                                    sku_touched={touched.sku}
                                                    sku_errors={errors.sku}

                                                    product_weight_values={values.product_weight || ''}
                                                    product_weight_touched={touched.product_weight}
                                                    product_weight_errors={errors.product_weight}

                                                    dimension_length_values={values.dimension_length || ''}
                                                    dimension_length_touched={touched.dimension_length}
                                                    dimension_length_errors={errors.dimension_length}

                                                    dimension_width_values={values.dimension_width || ''}
                                                    dimension_width_touched={touched.dimension_width}
                                                    dimension_width_errors={errors.dimension_width}

                                                    dimension_height_values={values.dimension_height || ''}
                                                    dimension_height_touched={touched.dimension_height}
                                                    dimension_height_errors={errors.dimension_height}

                                                    shipping_charges_values={values.shipping_charges || ''}
                                                    shipping_charges_touched={touched.shipping_charges}
                                                    shipping_charges_errors={errors.shipping_charges}

                                                    handling_fee_values={values.handling_fee || ''}
                                                    handling_fee_touched={touched.handling_fee}
                                                    handling_fee_errors={errors.handling_fee}

                                                    purchase_note_values={values.purchase_note || ''}
                                                    purchase_note_touched={touched.purchase_note}
                                                    purchase_note_errors={errors.purchase_note}

                                                    onChange={handleChange}
                                                    touched={touched}
                                                    errors={errors}

                                                    productColorChangeHandler={this.handleProductColorChange}
                                                    // size={this.state.size}
                                                    productSizeChangeHandler={this.handleProductSizeChange}

                                                    attributesArray={this.state.productAttributesArray}
                                                    name={this.state.productAttributeName}
                                                    value={this.state.productAttributeValue}
                                                    productAttributeNameSelected={this.state.productAttributeNameSelected}
                                                    attributeNameHandler={this.handleProductAttributeNameChange.bind(this)}
                                                    attributeValueHandler={this.handleProductAttributeValueChange.bind(this)}
                                                    addAttributeHandler={this.handleAddProductAttributeClick.bind(this)}
                                                    update={this.handleUpdateProductAttributeClick.bind(this)}
                                                    deleteAttributeHandler={this.handleDeleteProductAttributeClick.bind(this)}
                                                    deleteVariationHandler={this.handleDeleteProductVariationClick.bind(this)}
                                                    deleteVariationCustomFieldHandler={this.handleDeleteVariationCustomFieldClick.bind(this)}
                                                    saveVariationsHandler={this.handleSaveVariationsClick.bind(this)}
                                                    variationsErrorHandler={this.handleVariationsErrorCheck.bind(this)}
                                                    error={this.state.productAttributeError}

                                                    createVariationsHandler={this.handleCreateVariationsClick}
                                                    variationsArray={this.state.variationsArray}
                                                    variationPriceHandler={this.handleVariationPriceChange.bind(this)}
                                                    variationStockHandler={this.handleVariationProductInStockChang.bind(this)}
                                                    variationImageLinkHandler={this.handleVariationImageLinkChange.bind(this)}

                                                    samePriceInput={this.state.samePriceInput}
                                                    samePriceError={this.state.samePriceError}
                                                    variationsSamePriceChanged={this.handleVariationsSamePriceChanged.bind(this)}
                                                    variationsSamePriceHandler={this.handleVariationsSamePriceClick.bind(this)}



                                                    sameStockInput={this.state.sameStockInput}
                                                    sameStockError={this.state.sameStockError}
                                                    variationsSameStockChanged={this.handleVariationsSameStockChanged.bind(this)}
                                                    variationsSameStockHandler={this.handleVariationsSameStockClick.bind(this)}

                                                    sameImgLinkInput={this.state.sameImgLinkInput}
                                                    sameImgLinkError={this.state.sameImgLinkError}
                                                    variationsSameImgLinkChanged={this.handleVariationsSameImgLinkChanged.bind(this)}
                                                    variationsSameImgLinkHandler={this.handleVariationsSameImgLinkClick.bind(this)}
                                                />
                                            </Row>
                                            {/* End of Product Data Row */}
                                            {/* Custom Fields Row */}
                                            <Form.Group as={Row} style={styles.row} >
                                                <CustomFields
                                                    customFieldsArray={this.state.customFieldsArray}
                                                    isVariableProduct={this.state.isVariableProduct}
                                                    name={this.state.customFieldName}
                                                    value={this.state.customFieldValue}
                                                    customFieldNameSelected={this.state.customFieldNameSelected}
                                                    fieldNameHandler={this.handleCustomFieldNameChange.bind(this)}
                                                    fieldValueHandler={this.handleCustomFieldValueChange.bind(this)}
                                                    addFieldHandler={this.handleAddCustomFieldBtnClick.bind(this)}
                                                    update={this.updateCustomFieldsClick.bind(this)}
                                                    delete={this.deleteCustomFieldsClick.bind(this)}
                                                    error={this.state.customFieldError}
                                                    showCustomFields={showCustomFields}
                                                />
                                            </Form.Group>
                                            {/* End of Custom Fields Row */}
                                        </Col>

                                        <Col lg={3} md={3} sm={12} xs={12}>
                                            {/* Product Category */}
                                            <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                                                <Form.Group as={Row} style={styles.row}>
                                                    <Card style={styles.card}>
                                                        <Card.Header style={styles.card_header}>
                                                            <Form.Label >Product Categories</Form.Label>
                                                            <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                                                <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
                                                            </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
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
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Form.Group>
                                            </Accordion>
                                            {/* End of Product ategory */}

                                            {/* Dangerous Goods */}
                                            <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                                                <Form.Group as={Row} style={styles.row}>
                                                    <Card style={styles.card}>
                                                        <Card.Header style={styles.card_header}>
                                                            <Form.Label >Dangerous Goods</Form.Label>
                                                            <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                                                <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
                                                            </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body>
                                                                <Form.Check
                                                                    name="not_specified"
                                                                    label="Not Specified"
                                                                    style={styles.label}
                                                                    onChange={(e) => this.handleDangerousGoodsChange(e, 'Not Specified')}
                                                                />
                                                                <br></br>
                                                                <Form.Check
                                                                    name="ceramic"
                                                                    label="Ceramic"
                                                                    style={styles.label}
                                                                    onChange={(e) => this.handleDangerousGoodsChange(e, 'Ceramic')}
                                                                />
                                                                <br></br>
                                                                <Form.Check
                                                                    name="glass"
                                                                    label="Glass"
                                                                    style={styles.label}
                                                                    onChange={(e) => this.handleDangerousGoodsChange(e, 'Glass')}
                                                                />
                                                                <br></br>
                                                                <Form.Check
                                                                    name="metal"
                                                                    label="Metal"
                                                                    style={styles.label}
                                                                    onChange={(e) => this.handleDangerousGoodsChange(e, 'Metal')}
                                                                />
                                                                <br></br>
                                                                <Form.Check
                                                                    name="plastic"
                                                                    label="Plastic"
                                                                    style={styles.label}
                                                                    onChange={(e) => this.handleDangerousGoodsChange(e, 'Plastic')}
                                                                />
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Form.Group>
                                            </Accordion>
                                            {/* End ofDangerous Goods */}

                                            {/* Product Tags */}
                                            <Accordion style={{ width: '100%' }} defaultActiveKey="0">
                                                <Form.Group as={Row} style={styles.row}>
                                                    <Card style={styles.card}>
                                                        <Card.Header style={styles.card_header}>
                                                            <Form.Label >Product Tags</Form.Label>
                                                            <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                                                                <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
                                                            </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body style={{ height: '250px' }}>
                                                                <CreatableSelect
                                                                    isMulti
                                                                    onChange={this.handleProductTagChange}
                                                                    options={product_color_options}
                                                                    value={this.state.productTags}
                                                                    placeholder="Select/Enter Tags"
                                                                />
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Form.Group>
                                            </Accordion>
                                            {/* End of Product Tags */}

                                        </Col>
                                    </Row>


                                    {/* Form Submit Btn Row */}
                                    <Form.Row style={styles.row}>
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


    row: {
        margin: '2%',
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
        // background: `${GlobalStyleSheet.admin_primry_color}`,
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