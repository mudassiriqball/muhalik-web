import React, { Component } from 'react';
import { Form, Col, Row, Card, InputGroup, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import GlobalStyleSheet from '../../../../../styleSheet';
import MuhalikConfig from '../../../../../sdk/muhalik.config';

// Option List for select Product Size
const product_size_options = [
    { value: 'X-S', label: 'X-Small' },
    { value: 'S', label: 'Small' },
    { value: 'M', label: 'Medium' },
    { value: 'L', label: 'Large' },
    { value: 'X-L', label: 'X-Large' },
    { value: 'XX-L', label: 'XX-Large' },
]
// Option List for select Product Color
const product_color_options = [
    // A
    { value: 'Apricot', label: 'Apricot' },
    // B
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Bronze', label: 'Bronze' },
    { value: 'Baby-Blue', label: 'Baby-Blue' },
    { value: 'Blue-Green', label: 'Blue-Green' },
    { value: 'Blue-Violet', label: 'Blue-Violet' },
    // C
    { value: 'Chocolate', label: 'Chocolate' },
    { value: 'Coffee', label: 'Coffee' },
    { value: 'Cyan', label: 'Cyan' },
    // D
    { value: 'Desert-Sand', label: 'Desert-Sand' },
    // G
    { value: 'Gray', label: 'Gray' },
    { value: 'Green', label: 'Green' },
    // I
    { value: 'Indigo', label: 'Indigo' },
    // L
    { value: 'Lime', label: 'Lime' },
    // M
    { value: 'Magenta', label: 'Magenta' },
    { value: 'Maroon', label: 'Maroon' },
    // N
    { value: 'Navy-Blue', label: 'Navy-Blue' },
    // O
    { value: 'Orange', label: 'Orange' },
    { value: 'Olive', label: 'Olive' },
    // P
    { value: 'Pink', label: 'Pink' },
    { value: 'Peach', label: 'Peach' },
    { value: 'Purple', label: 'Purple' },
    // R
    { value: 'Red', label: 'Chocolate' },
    { value: 'Rose', label: 'Rose' },
    { value: 'Red-Violet', label: 'Red-Violet' },
    // S
    { value: 'Silver', label: 'Silver' },
    { value: 'Sky-Blue', label: 'Sky-Blue' },
    // T
    { value: 'Teal', label: 'Teal' },
    // V
    { value: 'Violet', label: 'Violet' },
    // W
    { value: 'White', label: 'White' },
    // Y
    { value: 'Yellow', label: 'Yellow' },
]
// Option List for select Product Category (when offline)
const product_category_options = [
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
    label,
    value: label,
});

// Yup Schema for validation fields
const schema = yup.object({
    product_name: yup.string().required("Enter Product Name")
        .min(5, "Must have at least 5 characters")
        .max(50, "Can't be longer than 20 characters"),

    product_brand_name: yup.string()
        .min(5, "Must have at least 5 characters")
        .max(20, "Can't be longer than 20 characters"),

    product_price: yup.number().required('Enter Product Price')
        .integer("Enter Only Numbers")
        .positive('Enter Between 1-1000000')
        .max(1000000, 'Enter Between 1-1000000'),

    product_size: yup.string(),

    product_color: yup.string(),

    product_category: yup.string(),

    product_in_stock: yup.string().required("Enter Products in Stock")
        .max(20, "Can't be longer than 20 characters"),

    product_warranty: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-200')
        .max(200, 'Enter Between 0-200'),

    warranty_type: yup.string(),

    product_discount: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),

    product_description: yup.string()
        .min(5, "Must have at least 5 characters")
        .max(50, "Can't be longer than 20 characters"),

    product_shipping_cost: yup.number().integer("Enter Only Numbers")
        .min(0, 'Enter Between 0-100')
        .max(100, 'Enter Between 0-100'),

    product_image_link: yup.string(),
});

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: product_category_options,
            size: [],
            color: [],
            category: [],
            warrantyType: 'Year',
            inputValue: '',
            image_link: [],
            // Handling errors for React-Select
            sizeError: 'no_error',
            sizeErrorDiv: 'BorderDiv',
            colorError: 'no_error',
            colorErrorDiv: 'BorderDiv',
            categoryError: 'no_error',
            categoryErrorDiv: 'BorderDiv',
            image_linkError: 'no_error',
            image_linkErrorDiv: 'BorderDiv',
        };
    }

    // Product Size
    handleProductSizeChange = (newValue, actionMeta) => {
        this.setState({ size: newValue, sizeError: 'no_error', sizeErrorDiv: 'BorderDiv' });
    };

    // Product Color
    handleProductColorChange = (newValue, actionMeta) => {
        this.setState({ color: newValue, colorError: 'no_error', colorErrorDiv: 'BorderDiv' });
    };

    // Product Category
    handleProductCategoryChange = (arr) => {
        this.setState({ category: arr, categoryError: 'no_error', categoryErrorDiv: 'BorderDiv', });
    }

    // Product Image Link
    handleImage_linkChange = (newValue, actionMeta) => {
        this.setState({ image_link: newValue, image_linkError: 'no_error', image_linkErrorDiv: 'BorderDiv' });
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

    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products-categories/get-all';
        try {
            const response = await axios.get(url);
            this.setState({ categoryList: response.data.data });
        } catch (error) {
            console.error(error);
        }
    }

    //  Submit data to api
    uploadData(data) {
        const url = MuhalikConfig.PATH + '/api/products/add';
        axios.post(url, {
            data
        }).then(function (response) {
            alert(response.data.message);
        }).catch(function (error) {
            alert(error);
        });
    }

    render() {
        const { inputValue, image_link } = this.state;
        return (
            <Formik
                validationSchema={schema}
                initialValues={{
                    product_name: '', product_brand_name: '', product_price: '',
                    product_size: '', product_color: '', product_category: '',
                    product_in_stock: 1, product_warranty: 0, warranty_type: 'Year', product_discount: 0,
                    product_description: '', product_shipping_cost: 40,
                    product_image_link: '',
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    if (this.state.size == '' || this.state.color == '' || this.state.category == '' || this.state.image_link == '') {
                        if (this.state.size == '') {
                            this.setState({ sizeError: "error", sizeErrorDiv: 'RedBorderDiv' });
                        }
                        if (this.state.color == '') {
                            this.setState({ colorError: "error", colorErrorDiv: 'RedBorderDiv' });
                        }
                        if (this.state.category == '') {
                            this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
                        }
                        if (this.state.image_link == '') {
                            this.setState({ image_linkError: "error", image_linkErrorDiv: 'RedBorderDiv' });
                        }
                        setSubmitting(false);
                    } else {
                        resetForm();
                        setSubmitting(false);
                        setTimeout(() => {
                            // this.uploadData(values);
                            values.product_size = this.state.size;
                            values.product_color = this.state.color;
                            values.product_category = this.state.category;
                            values.product_image_link = this.state.image_link;

                            console.log("Data Values:", JSON.stringify(values, null, 2))
                            alert(JSON.stringify(values, null, 2));
                            this.setState({ size: [], color: [], category: [], image_link: [], inputValue: '' });
                            resetForm();
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
                            <div>
                                {/* Row 1 (ProductName, BrandName, ProductPrice*/}
                                <Row style={styles.row}>
                                    <Card style={styles.card}>
                                        <Card.Header style={{ background: 'skyblue' }}>
                                            Upload Products
                                        </Card.Header>
                                        <Card.Body>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
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
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Brand Name</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Brand Name"
                                                                name="product_brand_name"
                                                                value={values.product_brand_name}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_brand_name && errors.product_brand_name}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_brand_name}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Price<span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="number"
                                                                placeholder="Enter Product Price"
                                                                name="product_price"
                                                                value={values.product_price}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_price && errors.product_price}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_price}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* End of Row-1 */}
                                                {/* Row-2 (ProductSize, ProductColor, ProductCategory) */}
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Size
                                                        <span> * </span></Form.Label>
                                                        <div className={this.state.sizeErrorDiv}>
                                                            <CreatableSelect
                                                                isMulti
                                                                onChange={this.handleProductSizeChange}
                                                                options={product_size_options}
                                                                value={this.state.size}
                                                                placeholder="Select/Enter Size"
                                                            />
                                                        </div>
                                                        <text className={this.state.sizeError}>Select/Enter Size </text>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Color<span> * </span></Form.Label>
                                                        <div className={this.state.colorErrorDiv}>
                                                            <CreatableSelect
                                                                isMulti
                                                                onChange={this.handleProductColorChange}
                                                                options={product_color_options}
                                                                value={this.state.color}
                                                                placeholder="Select/Enter Color"
                                                            />
                                                        </div>
                                                        <text className={this.state.colorError}>Select/Enter Color </text>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Category
                                                        <span> * </span></Form.Label>
                                                        <div className={this.state.categoryErrorDiv}>
                                                            <Select
                                                                closeMenuOnSelect={false}
                                                                isMulti
                                                                onChange={this.handleProductCategoryChange}
                                                                value={this.state.category}
                                                                placeholder="Select Category"
                                                                options={this.state.categoryList}
                                                            />
                                                        </div>
                                                        <text className={this.state.categoryError}>Select Category </text>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* End of Row-2 */}
                                                {/* Row-3  (ProductInStock, ProductWarranty, ProductDiscount)*/}
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product in Stock</Form.Label>
                                                        <Form.Control type="number"
                                                            name="product_in_stock"
                                                            value={values.product_in_stock}
                                                            onChange={handleChange}
                                                            isInvalid={touched.product_in_stock && errors.product_in_stock}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.product_in_stock}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Warranty </Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="number"
                                                                placeholder="Enter Product Warranty"
                                                                name="product_warranty"
                                                                value={values.product_warranty}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_warranty && errors.product_warranty}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Form.Control
                                                                    as="select"
                                                                    name="warranty_type"
                                                                    value={values.warranty_type}
                                                                    onChange={handleChange}
                                                                    isInvalid={touched.warranty_type && errors.warranty_type}
                                                                >
                                                                    <option>Year</option>
                                                                    <option> Month </option>
                                                                    <option> Life Time </option>
                                                                </Form.Control>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_warranty}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Discount</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="number"
                                                                placeholder="Enter Discount on on Product(%)"
                                                                name="product_discount"
                                                                value={values.product_discount}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_discount && errors.product_discount}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button variant='primary'>%</Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_discount}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* End of Row-3 */}
                                                {/* Row-4 (Shipping Price, Product Description) */}
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={8} md={8} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Description </Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Product Description"
                                                                name="product_description"
                                                                value={values.product_description}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_description && errors.product_description}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_description}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>Product Shipping Price</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Shipping Price"
                                                                name="product_shipping_cost"
                                                                value={values.product_shipping_cost}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_shipping_cost && errors.product_shipping_cost}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button variant='primary'>Riyal</Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_shipping_cost}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* End of Row-4 */}
                                                {/* Row-5: (Product's Images Links) */}
                                                <Form.Row>
                                                    <Form.Group as={Col}>
                                                        <Form.Label style={styles.label}>Product Images Link(s)<span>*</span></Form.Label>
                                                        <div className={this.state.image_linkErrorDiv}>
                                                            <CreatableSelect
                                                                components={components}
                                                                inputValue={inputValue}
                                                                isClearable
                                                                isMulti
                                                                menuIsOpen={false}
                                                                onChange={this.handleImage_linkChange}
                                                                onInputChange={this.handleImageLinkInputChange}
                                                                onKeyDown={this.handleImage_linkKeyDown}
                                                                placeholder="Enter Image Link"
                                                                value={image_link}
                                                            />
                                                        </div>
                                                        <text className={this.state.image_linkError}>Enter Image Link </text>
                                                    </Form.Group>                                                    
                                                </Form.Row>
                                                {/* End of Row-4 */}
                                                <Form.Row>
                                                    <Form.Group as={Col}>   
                                                        <p style={styles.label}>Fields with <span> * </span> are mandatory.</p>
                                                        <p style={styles.label}>For adding new size, color, link: Enter text and hit Enter or Tab key</p>
                                                        <Button type="submit"  onSubmit={handleSubmit} block style={styles.submit_btn}>Signup</Button>
                                                    </Form.Group>
                                                </Form.Row>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Row>
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
                                        }
                                        .BorderDiv{
                                            border: none;
                                        }
                                        span {
                                            color: red;
                                        }
                                        p {
                                            text-align: center; 
                                            margin: 0px;
                                        }
                                    `}
                                </style>
                            </div>
                        )}
            </Formik>
        );
    }
}

const styles = {
    row: {
        margin: '2%',
        padding: '0%'
    },
    card: {
        width: '100%',
        // padding: '2%'
    },
    buttons: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        fontSize: '10px',
    },
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        marginTop: '3%',
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
}

export default Products;