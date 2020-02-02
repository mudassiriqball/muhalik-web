
import { Navbar, Container, Form, Col, Row, InputGroup, Button, Image } from 'react-bootstrap';
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import GlobalStyleSheet from '../styleSheet';
import Link from 'next/link';

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const schema = yup.object({
    mobile: yup.string().required("Mobile number is required")
        .matches(phoneRegExp, "Phone number is not valid"),

    fullName: yup.string().required("Full Name is required")
        .min(5, "Full Name must have at least 5 characters")
        .max(20, "Full Name can't be longer than 20 characters"),

    verificationCode: yup.string().required("Verification Code is required"),

    email: yup.string().email("Must be a valid email address")
        .max(100, "Email must be less than 100 characters"),

    password: yup.string().required("Password is required")
        .min(8, "Password must have at least 8 characters")
        .max(20, "Password can't be longer than 20 characters"),

    confirmPassword: yup.string().required("Conform Password is required")
        .min(8, "Conform Password must have at least 8 characters")
        .max(20, "Conform Password can't be longer than 20 characters"),

    shopName: yup.string().required("Shop Name is required")
        .min(3, "Shop Name must have at least 3 characters")
        .max(20, "Shop Name can't be longer than 20 characters"),

    category: yup.string().required("Category is required"),

    shopAddress: yup.string().required("Shop Address is required")
        .min(5, "Shop Address must have at least 5 characters")
        .max(30, "Shop Address can't be longer than 30 characters"),

    countary: yup.string().required("Countary is required"),

    city: yup.string().required("City is required"),
});

class Signup extends Component {

    state = {

    };
    render() {
        return (
            <Formik
                validationSchema={schema}
                // onSubmit={console.log}
                initialValues={{
                    mobile: '', fullName: '', verificationCode: '', email: '', password: '', confirmPassword: '',
                    shopName: '', category: '', shopAddress: '', countary: '', city: ''
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // When button submits form and form is in the process of submitting, submit button is disabled
                    setSubmitting(true);
                    // Resets form after submission is complete
                    resetForm();
                    // Sets setSubmitting to false after form is reset
                    setSubmitting(false);

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
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
                            <div style={styles.body}>
                                <Navbar variant="dark" style={{ background: `${GlobalStyleSheet.primry_color}` }}>
                                    <Navbar.Brand href="/" className="mr-auto" > Muhalik </Navbar.Brand>
                                </Navbar>

                                <Container>
                                    <Row>
                                        <Col lg={1} md={1} sm={0} xs={0}></Col>
                                        <Col style={styles.container}>
                                            <p>
                                                <Image src="/static/muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '25%', maxWidth: '150px' }} />
                                            </p>
                                            <h6 className="text-center" style={{ width: '100%', paddingBottom: '10px' }}>Create Your Acount</h6>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                {console.log("fucking values fffffffffffffffff: ", values)}
                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="validationMobile">
                                                        <Form.Label style={styles.label}>Mobile Number <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="+966590911891"
                                                                aria-describedby="mobile"
                                                                name="mobile"
                                                                value={values.mobile}
                                                                onChange={handleChange}
                                                                isInvalid={touched.mobile && errors.mobile}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="sndCodeBtn" style={styles.buttons}>Send Code</Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.mobile}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationFullName">
                                                        <Form.Label style={styles.label}>Full Name<span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Full Name"
                                                                aria-describedby="fullName"
                                                                name="fullName"
                                                                value={values.fullName}
                                                                onChange={handleChange}
                                                                isInvalid={touched.fullName && errors.fullName}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.fullName}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="validationVerificationCode">
                                                        <Form.Label style={styles.label}>Verification Code
                                                        <span> * </span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Verification Code"
                                                            name="verificationCode"
                                                            value={values.verificationCode}
                                                            onChange={handleChange}
                                                            isInvalid={touched.verificationCode && errors.verificationCode}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.verificationCode}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationEmail">
                                                        <Form.Label style={styles.label}>Email Address</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="mr.x@gmail.com"
                                                            name="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            isInvalid={touched.email && errors.email}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} md={6} controlId="validationPassword">
                                                        <Form.Label style={styles.label}>Password <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Enter Password"
                                                                aria-describedby="inputGroup"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                isInvalid={touched.password && errors.password}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="passwordEyeBtn" style={styles.buttons}>
                                                                    <FontAwesomeIcon icon={faEye} style={styles.fontawesome} />
                                                                </Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.password}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md={6} controlId="validationConfirmPassword">
                                                        <Form.Label style={styles.label}>Confirm Password <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Re-enter Password"
                                                                aria-describedby="confirmPassword"
                                                                name="confirmPassword"
                                                                value={values.confirmPassword}
                                                                onChange={handleChange}
                                                                isInvalid={touched.confirmPassword && errors.confirmPassword}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="confirmPasswordEyeBtn" style={styles.buttons}>
                                                                    <FontAwesomeIcon icon={faEye} style={styles.fontawesome} />
                                                                </Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.confirmPassword}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>

                                                {/* 4th Row */}
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={3} md={3}>
                                                        <Form.Label style={styles.label}>Shop Name<span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Shop Name"
                                                                aria-describedby="shopName"
                                                                name="shopName"
                                                                value={values.shopName}
                                                                onChange={handleChange}
                                                                isInvalid={touched.shopName && errors.shopName}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.shopName}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={3} md={3} controlId="category">
                                                        <Form.Label style={styles.label}>Category
                                                            <span> * </span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            aria-describedby="countary"
                                                            name="countary"
                                                            value={values.countary}
                                                            onChange={handleChange}
                                                            isInvalid={touched.countary && errors.countary}
                                                        >
                                                            <option>Select</option>
                                                            <option> KSA </option>
                                                            <option> Pak </option>
                                                        </Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.countary}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={6} md={6}>
                                                        <Form.Label style={styles.label}>Shop Address
                                                        <span> * </span>
                                                        </Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Shop Address"
                                                                aria-describedby="shopAddress"
                                                                name="shopAddress"
                                                                value={values.shopAddress}
                                                                onChange={handleChange}
                                                                isInvalid={touched.shopAddress && errors.shopAddress}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.shopAddress}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>


                                                </Form.Row>
                                                {/* End of 4th Row */}


                                                {/* 5th Row */}
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={2} md={3} controlId="countary">
                                                        <Form.Label style={styles.label}>Countary
                                                        <span> * </span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            aria-describedby="countary"
                                                            name="countary"
                                                            value={values.countary}
                                                            onChange={handleChange}
                                                            isInvalid={touched.countary && errors.countary}

                                                        >
                                                            <option>Select</option>
                                                            <option> KSA </option>
                                                            <option> Pak </option>
                                                        </Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.countary}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={2} md={3} controlId="city">
                                                        <Form.Label style={styles.label}>City
                                                        <span> * </span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            aria-describedby="city"
                                                            name="city"
                                                            value={values.city}
                                                            onChange={handleChange}
                                                            isInvalid={touched.city && errors.city}
                                                        >
                                                            <option>Select</option>
                                                            <option> Male </option>
                                                            <option> Female </option>
                                                            <option> Other </option>
                                                        </Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.countary}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Col style={{}}>
                                                        <div style={{ height: '30%' }}></div>
                                                        <Form.Label className="text-center" style={styles.label}>
                                                            By creating an account, you agree to Muhalik's
                                                                    <span>
                                                                <Link href="#"> Terms & Conditions </Link>
                                                            </span>
                                                        </Form.Label>
                                                    </Col>
                                                    <Form.Group as={Col} lg={4} controlId="loginGrop">
                                                        <Form.Label className="text-center" style={styles.label}>
                                                            Already have an account...
                                                                <span>
                                                                <Link href="#"> Login </Link>
                                                            </span>
                                                        </Form.Label>
                                                        <Button type="submit" onSubmit={handleSubmit} block style={styles.submit_btn}>Signup</Button>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* End 4th Row */}
                                            </Form>
                                        </Col>
                                        <Col lg={1} md={1} sm={0} xs={0}></Col>
                                    </Row>
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
    body: {
        background: `${GlobalStyleSheet.body_color}`,
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',

    },
    buttons: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        fontSize: '10px',
    },
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
    },
    container: {
        background: 'white',
        // border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
        padding: '20px 30px',
        margin: '5% 5%',
    },
    label: {
        width: '100%',
        fontSize: '14px',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default Signup;