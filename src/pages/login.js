import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { Navbar, Container, Form, Col, Row, InputGroup, Button, Image, Spinner } from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'yup';
import MuhalikConfig from '../sdk/muhalik.config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons';

import GlobalStyleSheet from '../styleSheet';
import { saveTokenToStorage } from '../sdk/core/authentication-service';

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const schema = yup.object({
    mobile: yup.string().required("Enter Mobile Number")
        .matches(phoneRegExp, "Phone number is not valid"),

    password: yup.string().required("Enter Password")
        .min(8, "Password must have at least 8 characters")
        .max(20, "Password can't be longer than 20 characters"),
});

import * as decode from 'jwt-decode'
import Router from 'next/router'
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: true,
            isLoading: false,
        }
    }

    showPassword = ev => {
        this.setState({ hide: !this.state.hide })
    }

    async login(data) {
        const url = MuhalikConfig.PATH + '/api/users/login';
        await axios.post(url, {
            data
        }).then(function (response) {
            console.log('respoonnnnnn:', response)
            if(response.status == '200'){
                saveTokenToStorage(response.data.token);
                const decodedToken = decode(response.data.token);
                if (decodedToken.data.role == 'customer') {
                    Router.push('/index')
                } else if (decodedToken.data.role == 'vendor') {
                    Router.push('/vendor')
                } else if (decodedToken.data.role == 'admin') {
                    Router.push('/admin')
                } else {
                    Router.push('/index')
                }
            }
            alert(response.data.message)
        }).catch(function (error) {
            console.log(error)
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
                // onSubmit={console.log}
                initialValues={{
                    mobile: '', password: ''
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // When button submits form and form is in the process of submitting, submit button is disabled
                    setSubmitting(true);
                    this.setState({ isLoading: true })
                    // Resets form after submission is complete
                    // Sets setSubmitting to false after form is reset
                    setTimeout(() => {
                        this.login(values);
                        resetForm();
                        setSubmitting(false);
                        // this.setState({ isLoading: false })
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
                                        <Col lg={3} md={2} sm={1} xs={0} style={styles.side_column}></Col>
                                        <Col style={styles.center_column}>
                                            <p>
                                                <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '25%', maxWidth: '150px' }} />
                                            </p>
                                            <h6 className="text-center" style={{ width: '100%', paddingBottom: '10px' }}>Login To Muhalik</h6>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="validationMobile">
                                                        <Form.Label style={styles.label}>Enter Your Mobile Number
                                                            <span> * </span>
                                                        </Form.Label>

                                                        <InputGroup>
                                                            <InputGroup.Prepend>
                                                                <Button id="mobileIcon" style={styles.fontawesome_btn}>
                                                                    <FontAwesomeIcon icon={faMobileAlt} style={styles.fontawesome} />
                                                                </Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="+966590911891"
                                                                aria-describedby="mobile"
                                                                name="mobile"
                                                                value={values.mobile}
                                                                onChange={handleChange}
                                                                isInvalid={touched.mobile && errors.mobile}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.mobile}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="validationPassword">
                                                        <Form.Label style={styles.label}>Password <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <InputGroup.Prepend>
                                                                <Button id="lockIcon" style={styles.fontawesome_btn}>
                                                                    <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
                                                                </Button>
                                                            </InputGroup.Prepend>
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
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Label className="text-right" style={styles.label}>
                                                        <Link href="forgot-password"><a>Forgot Password</a></Link>
                                                    </Form.Label>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Label className="text-center" style={styles.label}>
                                                        Don't have an account..??
                                                        <span>
                                                            <Link href="signup"><a>Signup</a></Link>
                                                        </span>
                                                    </Form.Label>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Button type="submit" onSubmit={handleSubmit} disabled={this.state.isLoading} block style={styles.submit_btn}>
                                                        {this.state.isLoading ? 'Logging' : 'Login'}
                                                        {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : <div></div>}
                                                    </Button>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Label className="text-center" style={styles.term_condition_label}>
                                                        By logingin, you agree to Muhalik's
                                                        <span>
                                                            <Link href="./help/terms-and-conditions"><a>Terms & Conditions</a></Link>
                                                        </span>
                                                        and
                                                            <span>
                                                            <Link href="./help/privacy-statement"><a>Privacy Statement</a></Link>
                                                        </span>
                                                    </Form.Label>
                                                </Form.Row>
                                            </Form>
                                        </Col>
                                        <Col lg={3} md={2} sm={1} xs={0} style={styles.side_column}></Col>
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
        padding: 'auto'
    },
    center_column: {
        background: 'white',
        // border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
        padding: '20px 30px',
        margin: '3% 3%',
    },
    side_column: {
        margin: '0 3%',
    },
    label: {
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    term_condition_label: {
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
        padding: '10px',
    },
    fontawesome_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default Login;