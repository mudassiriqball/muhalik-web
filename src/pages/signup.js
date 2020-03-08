import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { Navbar, Container, Form, Col, Row, InputGroup, Button, Image, Spinner, DropdownDivider } from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import ShowToast from './components/toast';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config';
// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const schema = yup.object({
    mobile: yup.string().required("Enter Mobile Number")
        .matches(phoneRegExp, "Phone number is not valid"),

    fullName: yup.string().required("Enter Full Name")
        .min(5, "Must have at least 5 characters")
        .max(25, "Can't be longer than 25 characters"),

    verificationCode: yup.string().required("Enter Verification Code"),

    email: yup.string().email("Must be a valid email address")
        .max(100, "Can't be longer than 100 characters"),

    password: yup.string().required("Enter Password")
        .min(8, "Password must have at least 8 characters")
        .max(20, "Can't be longer than 20 characters"),

    confirmPassword: yup.string().required("Enter Confirm Password").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
            [yup.ref("password")],
            "Passwords must match"
        )
    }),

    countary: yup.string().required("Select Countary"),
    role: yup.string(),
    city: yup.string().required("Enter City Name")
        .min(3, "Must have at least 3 characters")
        .max(30, "Can't be longer than 30 characters"),
});

class Signup extends Component {
    state = {
        hide: true,
        isLoading: false,
        showToast: false,
        serverErrorMsg: ''
    };
    showPassword = ev => {
        this.setState({ hide: !this.state.hide })
    }

    userRegister(data, currentComponent) {
        const url = MuhalikConfig.PATH + '/api/users/register';
        axios.post(url, {
            data
        }).then(function (response) {
            if (response.status == '200') {
                currentComponent.setState({ isLoading: false });
                currentComponent.setState({ showToast: true });
                Router.push('/login');
                return true;
            }
        }).catch(function (error) {
            currentComponent.setState({ isLoading: false });
            if (error.response.status == '401') {
                currentComponent.setState({ serverErrorMsg: 'Tis User already exists.' })
            } else {
                alert('ERROR:' + error.response.data.message)
            }
            return false;
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
                    mobile: '', fullName: '', verificationCode: '', email: '', password: '', confirmPassword: '',
                    countary: 'KSA', city: '', role: 'customer'
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    this.setState({ isLoading: true });
                    setSubmitting(true);
                    setTimeout(() => {
                        if (this.userRegister(values, this)) {
                            resetForm();
                        }
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
                                {this.state.showToast ? <ShowToast onCloseHandler={(e) => this.setState({ showToast: false })} show={this.state.showToast}
                                    message={'Your Account Created Successfully'} iconName={faThumbsUp} /> : null}

                                <Navbar variant="dark" style={{ background: `${GlobalStyleSheet.primry_color}` }}>
                                    <Navbar.Brand href="/" className="mr-auto" > Muhalik </Navbar.Brand>
                                </Navbar>

                                <Container>
                                    <Row className="justify-content-md-center" noGutters>
                                        <Col lg="auto" md="auto" sm="auto" xs="auto" style={styles.form_col}>
                                            <Row className="justify-content-md-center">
                                                <Col lg="auto" md="auto" sm="auto" xs="auto" style={styles.register_as_shop_col}>
                                                    <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={styles.image} />
                                                    <h6 className="text-center" >Create Your Acount </h6>
                                                </Col>
                                            </Row>
                                            <Form noValidate onSubmit={handleSubmit}>
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
                                                    <Form.Group as={Col} md="6">
                                                        <Form.Label style={styles.label}>Full Name<span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Full Name"
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
                                                                type={hide ? 'password' : 'text'}
                                                                placeholder="Enter Password"
                                                                aria-describedby="inputGroup"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                isInvalid={touched.password && errors.password}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="passwordEyeBtn" onClick={this.showPassword} style={styles.buttons}>
                                                                    {eyeBtn}
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
                                                                type={hide ? 'password' : 'text'}
                                                                placeholder="Re-enter Password"
                                                                aria-describedby="confirmPassword"
                                                                name="confirmPassword"
                                                                value={values.confirmPassword}
                                                                onChange={handleChange}
                                                                isInvalid={touched.confirmPassword && errors.confirmPassword}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="confirmPasswordEyeBtn" onClick={this.showPassword} style={styles.buttons}>
                                                                    {eyeBtn}
                                                                </Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.confirmPassword}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* Row for show error message */}
                                                <Form.Row>
                                                    <Form.Label className="text-center" style={styles.errorMsg}>
                                                        {this.state.serverErrorMsg}
                                                    </Form.Label>
                                                </Form.Row>

                                                {/* 4th Row */}
                                                <Form.Row>
                                                    <Form.Group as={Col} lg={3} md={3}>
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
                                                    <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                        <Form.Label style={styles.label}>City
                                                        <span> * </span>
                                                        </Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter City Name"
                                                                name="city"
                                                                value={values.city}
                                                                onChange={handleChange}
                                                                isInvalid={touched.city && errors.city}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.city}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} lg={5} md={5} sm={12} xs={12} style={styles.term_condition_col}>
                                                        <Form.Label className="text-center" style={styles.term_condition_label}>
                                                            By creating acount, you agree to Muhalik's
                                                                <span>
                                                                <Link href="./help/terms-and-conditions"><a> Terms & Conditions </a></Link>
                                                            </span>
                                                                and
                                                                <span>
                                                                <Link href="./help/privacy-statement"><a> Privacy Statement </a></Link>
                                                            </span>
                                                        </Form.Label>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="loginGrop">
                                                        <Form.Label className="text-center" style={styles.label}>
                                                            Already have an account...
                                                            <span>
                                                                <Link href="login"><a>Login</a></Link>
                                                            </span>
                                                        </Form.Label>
                                                        <Button type="submit" onSubmit={handleSubmit} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                                            {this.state.isLoading ? 'Registering' : 'Register'}
                                                            {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                        </Button>
                                                    </Form.Group>
                                                </Form.Row>
                                                {/* End 4th Row */}
                                            </Form>
                                        </Col>
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
        minHeight: '100vh',
        // bottom: '-100',
    },
    buttons: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        fontSize: '10px',
    },
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        marginTop: '5px'
    },
    form_col: {
        background: 'white',
        padding: '20px 30px',
        margin: '5% 0%',
    },
    register_as_shop_col: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2%'
    },
    image: {
        width: '100px',
        marginRight: '10px'
    },
    errorMsg: {
        color: 'red',
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    label: {
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    term_condition_col:{
        display: 'flex',
        alignItems: 'center',
        margin: '0%'
    },
    term_condition_label: {
        width: '100%',
        margin: '0%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
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