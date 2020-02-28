import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Navbar, Container, Form, Col, Row, Card, InputGroup, Button, Image } from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet';
import MuhalikConfig from '../../../../../sdk/muhalik.config';

const schema = yup.object({
    product_name: yup.string().required("Enter Product Name")
        .min(5, "Must have at least 5 characters")
        .max(50, "Can't be longer than 20 characters"),


    brand_name: yup.string()
        .min(5, "Must have at least 5 characters")
        .max(20, "Can't be longer than 20 characters"),

    product_size: yup.string().required("Enter Verification Code"),

    product_color: yup.string().required("Enter Product Color")
        .max(100, "Must be less than 100 characters"),

    product_price: yup.string().required("Enter Product Price")
        .max(20, "Can't be longer than 20 characters"),

    product_in_stock: yup.string().required("Enter Products in Stock")
        .max(20, "Can't be longer than 20 characters"),

    product_shipping_price: yup.string()
        .max(20, "Password can't be longer than 20 characters"),

    product_category: yup.string().required("Select Product Category"),

    product_warranty: yup.string(),

    product_discount: yup.string(),

    product_description: yup.string()
        .min(5, "Must have at least 5 characters")
        .max(50, "Can't be longer than 20 characters"),

        product_image: yup.string().required("Select Product Image(s)"),
});

class Products extends Component {
    state = {
        hide: true
    };
    showPassword = ev => {
        this.setState({ hide: !this.state.hide })
    }

    uploadData(data) {
        const url = MuhalikConfig.PATH + '/api/users/register';
        axios.post(url, {
            data
        }).then(function (response) {
            alert(response.data.message);
        }).catch(function (error) {
            alert(error);
        });
    }

    render() {
        const { hide } = this.state;
        let eyeBtn;
        if (this.state.hide) {
            eyeBtn = <FontAwesomeIcon icon={faEye} style={styles.fontawesome} />;
        } else {
            eyeBtn = <FontAwesomeIcon icon={faEyeSlash} style={styles.fontawesome} />;
        }



        return (
            <Formik
                validationSchema={schema}
                initialValues={{
                    product_name: '', brand_name: '', product_size: '', product_color: '', product_price: '', product_shipping_price: '',
                    product_category: '',
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // When button submits form and form is in the process of submitting, submit button is disabled
                    setSubmitting(true);
                    // Resets form after submission is complete
                    resetForm();
                    // Sets setSubmitting to false after form is reset
                    setSubmitting(false);

                    setTimeout(() => {
                        this.uploadData(values);
                        resetForm();
                        setSubmitting(false);
                    }, 500);
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
                                {/* <Row style={styles.row}> */}
                                <Container style={styles.container}>
                                    <Card style={styles.card}>
                                        <Card.Header style={{ background: 'skyblue' }}>
                                            Upload Products
                                        </Card.Header>
                                        {/* <h6 className="text-center" style={{ width: '100%', paddingBottom: '10px' }}>Create Your Acount</h6> */}
                                        <Card.Body>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="productName">
                                                        <Form.Label style={styles.label}>Product Name<span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Product Name"
                                                                aria-describedby="product_name"
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
                                                    <Form.Group as={Col} md="6" controlId="productBrand">
                                                        <Form.Label style={styles.label}>Brand Name</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Brand Name"
                                                                aria-describedby="brand_name"
                                                                name="brand_name"
                                                                value={values.brand_name}
                                                                onChange={handleChange}
                                                                isInvalid={touched.brand_name && errors.brand_name}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.brand_name}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col}controlId="productSize">
                                                        <Form.Label style={styles.label}>Product Size
                                                        <span> * </span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Product Size"
                                                            name="product_size"
                                                            value={values.product_size}
                                                            onChange={handleChange}
                                                            isInvalid={touched.product_size && errors.product_size}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.product_size}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col}  controlId="productColors">
                                                        <Form.Label style={styles.label}>Product Color</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Product Color"
                                                            name="product_color"
                                                            value={values.product_color}
                                                            onChange={handleChange}
                                                            isInvalid={touched.product_color && errors.product_color}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.product_color}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="productCategory">
                                                        <Form.Label style={styles.label}>Product Category
                                                        <span> * </span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            aria-describedby="productCategory"
                                                            name="product_category"
                                                            value={values.product_category}
                                                            onChange={handleChange}
                                                            isInvalid={touched.product_category && errors.product_category}
                                                        >
                                                            <option>Select</option>
                                                            <option> KSA </option>
                                                            <option> Pak </option>
                                                        </Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.product_category}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>


                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="productImage">
                                                        <Form.Label style={styles.label}>Product Images</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Select Images"
                                                            name="product_image"
                                                            value={values.product_image}
                                                            onChange={handleChange}
                                                            isInvalid={touched.product_image && errors.product_image}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.product_image}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="productInStock">
                                                        <Form.Label style={styles.label}>Product in Stock</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Products in Stock"
                                                            name="product_in_stock"
                                                            value={values.product_in_stock}
                                                            onChange={handleChange}
                                                            isInvalid={touched.product_in_stock && errors.product_in_stock}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.product_in_stock}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>




                                                <Form.Row>
                                                    <Form.Group as={Col} md={6} controlId="productPrice">
                                                        <Form.Label style={styles.label}>Product Price <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Product Price"
                                                                aria-describedby="productPrice"
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
                                                    <Form.Group as={Col} md={6} controlId="shippingPrice">
                                                        <Form.Label style={styles.label}>Product Shipping Price<span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Shipping Price"
                                                                aria-describedby="shippingPrice"
                                                                name="product_shipping_price"
                                                                value={values.product_shipping_price}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_shipping_price && errors.product_shipping_price}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_shipping_price}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} md={6} controlId="productWarranty">
                                                        <Form.Label style={styles.label}>Product Warranty </Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Product Warranty"
                                                                aria-describedby="productWarranty"
                                                                name="product_warranty"
                                                                value={values.product_warranty}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_warranty && errors.product_warranty}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_warranty}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md={6} controlId="productDiscount">
                                                        <Form.Label style={styles.label}>Product Discount</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Discount on on Product(%)"
                                                                aria-describedby="productDiscount"
                                                                name="product_discount"
                                                                value={values.product_discount}
                                                                onChange={handleChange}
                                                                isInvalid={touched.product_discount && errors.product_discount}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.product_discount}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} md={12} controlId="productDescription">
                                                        <Form.Label style={styles.label}>Product Description </Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter Product Description"
                                                                aria-describedby="productDescription"
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
                                                </Form.Row>


                                                {/* 4th Row */}
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={4} controlId="loginGrop">

                                                        <Button type="submit" onSubmit={handleSubmit} block style={styles.submit_btn}>Signup</Button>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* End 4th Row */}
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                    {/* </Row> */}
                                </Container>
                                <style jsx>
                                    {`
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
    container: {
        marginTop: '2%',
    },
    card: {
        width: '100%',
        padding: '2%'
    },
    buttons: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        fontSize: '10px',
    },
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
    },
    label: {
        width: '100%',
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