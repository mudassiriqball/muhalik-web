import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import firebase from '../sdk/custom/firebase'
import { Navbar, Container, Form, Col, Row, InputGroup, Button, Image, Spinner } from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import AlertModal from './components/alert-modal';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config';
import Toolbar from './components/toolbar';
import { checkAuth } from '../sdk/core/authentication-service'

// RegEx for phone number validation
const phoneRegExp = /^\+(?:[0-9]?){6,14}[0-9]$/;

// /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const schema = yup.object({
    mobile: yup.string().required("Enter Mobile Number"),

    full_name: yup.string().required("Enter Full Name")
        .min(5, "Must have at least 5 characters")
        .max(25, "Can't be longer than 25 characters"),

    verification_code: yup.string(),

    email: yup.string().email("Must be a valid email address")
        .max(100, "Can't be longer than 100 characters"),

    password: yup.string().required("Enter Password")
        .min(8, "Password must have at least 8 characters")
        .max(20, "Can't be longer than 20 characters"),

    confirm_password: yup.string().required("Enter Confirm Password").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
            [yup.ref("password")],
            "Passwords must match"
        )
    }),

    countary: yup.string().required("Select Countary"),
    city: yup.string().required("Enter City Name")
        .min(3, "Must have at least 3 characters")
        .max(30, "Can't be longer than 30 characters"),

    gender: yup.string().required("Enter Gender"),

    address: yup.string().required("Enter Address")
        .min(3, "Must have at least 3 characters")
        .max(100, "Can't be longer than 100 characters"),

    role: yup.string(),
});

class Signup extends Component {
    state = {
        hide: true,
        isLoading: false,
        showToast: false,
        serverErrorMsg: '',

        isCodeSended: false,
        isCodeVerified: false,

        mobileError: '',
        verificationCodeError: '',
        feedback: '',
        intervalTime: 60,
    };

    componentDidMount() {
        this.authUser()
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
            {
                size: "invisible"
            });
    }

    async authUser() {
        await checkAuth('/signup')
    }

    handleSenVerificationCode = (mobileNumber) => {
        const currentComponent = this
        this.setState({
            intervalTime: 60,
            isResendCode: false,
            feedback: ''
        });
        let interval = null
        this.setState({ mobileError: '' })
        if (phoneRegExp.test(mobileNumber)) {
            var appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(mobileNumber, appVerifier)
                .then(function (confirmationResult) {
                    window.confirmationResult = confirmationResult;
                    currentComponent.setState({
                        isCodeSended: true,
                        mobileError: '',
                        feedback: 'Code Sended, Check your number',
                    })
                    let delay = 1000
                    interval = setInterval(() => {
                        currentComponent.setState({ intervalTime: currentComponent.state.intervalTime - 1 });
                        if (currentComponent.state.intervalTime == 0) {
                            currentComponent.setState({ isResendCode: true });
                            clearInterval(interval)
                        }
                    }, delay)
                }).catch(function (error) {
                    currentComponent.setState({
                        mobileError: 'Error: Code not sended',
                        feedback: '',
                        isCodeSended: false,
                        isCodeVerified: false,
                    })
                });
        } else {
            this.setState({
                isCodeSended: false,
                mobileError: 'Enter valid number with countary code',
                feedback: '',
                isCodeVerified: false,
            })
        }
    }

    handleVerifyVarificationCode = (code) => {
        const currentComponent = this
        this.setState({ verificationCodeError: '' })
        confirmationResult.confirm(code).then(function (result) {
            currentComponent.setState({
                isCodeVerified: true,
                feedback: 'Number Verified',
                verificationCodeError: '',
                isResendCode: false,
            })
        }).catch(function (error) {
            currentComponent.setState({
                isCodeVerified: false,
                verificationCodeError: 'Invalid Code, Try again',
                feedback: '',
                isResendCode: true,
            })
        });
    }

    showPassword = ev => {
        this.setState({ hide: !this.state.hide })
    }

    userRegister(data, currentComponent) {
        const url = MuhalikConfig.PATH + '/api/users/register';
        if (this.state.isCodeVerified && this.state.isCodeSended) {
            axios.post(url, data).then(function (response) {
                console.log('response:', response)
                currentComponent.setState({
                    isLoading: false,
                    showToast: true,
                    isCodeSended: false,
                    isCodeVerified: false,
                    isResendCode: false,
                });
                Router.push('/login');
                return true;
            }).catch(function (error) {
                currentComponent.setState({ isLoading: false });
                currentComponent.setState({ serverErrorMsg: error.response.data.message })
                return false;
            })
        } else {
            alert('Please first varify your mobile number!')
        }
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
                    mobile: '', full_name: '', verification_code: '', email: '', password: '', confirm_password: '',
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
                            <div className='signup'>
                                <AlertModal
                                    onHide={(e) => this.setState({ showToast: false })}
                                    show={this.state.showToast}
                                    header={'Success'}
                                    message={this.state.toastMessage}
                                    iconname={faThumbsUp}
                                    color={'green'}
                                />

                                <Toolbar />

                                {/* <Container className='container'> */}
                                <Row className="row">
                                    <Col lg="auto" md="auto" sm="auto" xs="auto" className='form_col'>
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Form.Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className='mahaalk_col'>
                                                    <Image src="muhalik.jpg" roundedCircle fluid style={styles.image} />
                                                    <div className='d-flex flex-column ml-3'>
                                                        <div className="text-center welcome_note" >Welcome To Mahaalk </div>
                                                        <div className="text-center welcome_note" >Create Your Acount </div>
                                                    </div>
                                                </Col>
                                            </Form.Row>
                                            <hr className='pt-0 mt-0' />

                                            <Form.Row>
                                                <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>Mobile Number <span>*</span>
                                                        {this.state.isCodeSended && !this.state.isResendCode ?
                                                            <span style={{ color: 'gray', float: 'right', marginRight: '4%' }}> 00 : {this.state.intervalTime}</span>
                                                            :
                                                            null
                                                        }
                                                    </Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="+966590911891"
                                                            aria-describedby="mobile"
                                                            name="mobile"
                                                            value={values.mobile}
                                                            onChange={handleChange}
                                                            isInvalid={this.state.mobileError}
                                                            disabled={this.state.isCodeSended}
                                                        />
                                                        <InputGroup.Append>
                                                            <Button id="recaptcha-container"
                                                                onClick={() => {
                                                                    this.state.isCodeSended ?
                                                                        this.handleSenVerificationCode(values.mobile)
                                                                        :
                                                                        this.handleSenVerificationCode(values.mobile)
                                                                }}
                                                                disabled={this.state.isCodeSended ? this.state.isResendCode ? false : true : false}
                                                                className='append_button' variant='success' >
                                                                {this.state.isCodeSended ? 'Resend' : 'Send Code'}
                                                            </Button>
                                                        </InputGroup.Append>
                                                        <Form.Control.Feedback type="invalid">
                                                            {this.state.mobileError}
                                                        </Form.Control.Feedback>
                                                        <div className='feedback'>
                                                            <div className='mr-auto'>{this.state.feedback}</div>
                                                            {this.state.isCodeSended ?
                                                                <a onClick={() =>
                                                                    this.setState({
                                                                        isCodeSended: false,
                                                                        isCodeVerified: false,
                                                                        feedback: '',
                                                                        mobileError: '',
                                                                        verificationCodeError: '',
                                                                    })
                                                                }>Change Number</a>
                                                                :
                                                                null
                                                            }
                                                        </div>

                                                    </InputGroup>
                                                </Form.Group>


                                                <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>Verification Code <span> * </span></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Verification Code"
                                                            name="verification_code"
                                                            value={values.verification_code}
                                                            onChange={handleChange}
                                                            isInvalid={this.state.verificationCodeError}
                                                            disabled={!this.state.isCodeSended || this.state.isCodeVerified}
                                                        />
                                                        {this.state.isCodeSended ?
                                                            <InputGroup.Append>
                                                                <Button className='append_button'
                                                                    onClick={() => this.handleVerifyVarificationCode(values.verification_code)}
                                                                    disabled={this.state.isCodeVerified}
                                                                    variant='success'>{this.state.isCodeVerified ? 'Verified' : 'Verify'}</Button>
                                                            </InputGroup.Append>
                                                            : null
                                                        }
                                                        <Form.Control.Feedback type="invalid">
                                                            {this.state.verificationCodeError}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>





                                            {/* <hr className='mt-0 pt-0' /> */}


                                            <Form.Row>
                                                <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>Full Name<span>*</span></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Full Name"
                                                            name="full_name"
                                                            value={values.full_name}
                                                            onChange={handleChange}
                                                            isInvalid={touched.full_name && errors.full_name}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.full_name}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>Gender
                                                        <span> * </span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="select"

                                                        aria-describedby="gender"
                                                        name="gender"
                                                        value={values.gender}
                                                        onChange={handleChange}
                                                        isInvalid={touched.gender && errors.gender}
                                                    >
                                                        <option>Select</option>
                                                        <option> Male </option>
                                                        <option> Female </option>
                                                        <option> Other </option>
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.gender}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={12}>
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

                                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={12}>
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
                                                <Form.Group as={Col} lg={9} md={9} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Address
                                                        <span> * </span>
                                                    </Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="text"

                                                            placeholder="Enter Address"
                                                            name="address"
                                                            value={values.address}
                                                            onChange={handleChange}
                                                            isInvalid={touched.address && errors.address}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.address}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12} controlId="validationEmail">
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
                                                <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
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
                                                        <InputGroup.Append>
                                                            <Button variant='success' onClick={this.showPassword} className='append_button'>
                                                                {eyeBtn}
                                                            </Button>
                                                        </InputGroup.Append>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.password}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>Confirm Password <span>*</span></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type={hide ? 'password' : 'text'}

                                                            placeholder="Re-enter Password"
                                                            aria-describedby="confirm_password"
                                                            name="confirm_password"
                                                            value={values.confirm_password}
                                                            onChange={handleChange}
                                                            isInvalid={touched.confirm_password && errors.confirm_password}
                                                        />
                                                        <InputGroup.Append>
                                                            <Button variant='success' onClick={this.showPassword} className='append_button'>
                                                                {eyeBtn}
                                                            </Button>
                                                        </InputGroup.Append>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.confirm_password}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label className="text-center" style={styles.label}>
                                                    By creating acount, you agree to Mahaalk's
                                                        <span>
                                                        <Link href="./help/terms-and-conditions"><a> Terms & Conditions </a></Link>
                                                    </span>
                                                                and
                                                            <span>
                                                        <Link href="./help/privacy-statement"><a> Privacy Statement </a></Link>
                                                    </span>
                                                </Form.Label>
                                                <Form.Label className="text-center" style={styles.label}>
                                                    Already have an account...
                                                            <span>
                                                        <Link href="login"><a>Login</a></Link>
                                                    </span>
                                                </Form.Label>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label className="text-center" style={styles.errorMsg}>
                                                    {this.state.serverErrorMsg}
                                                </Form.Label>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="loginGrop">
                                                    <Button type="submit"
                                                        onSubmit={handleSubmit}
                                                        variant='success'
                                                        disabled={this.state.isLoading || !this.state.isCodeVerified} block>
                                                        {this.state.isLoading ? 'Registering' : 'Register'}
                                                        {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                    </Button>
                                                </Form.Group>
                                            </Form.Row>
                                            {/* End 4th Row */}
                                        </Form>
                                    </Col>
                                </Row>
                                {/* </Container > */}
                                <style type="text/css">{`
                                    .signup .row{
                                        align-items: center;
                                        justify-content: center;
                                        margin: 0%;
                                        padding: 0%;
                                    }
                                    .signup .form_col{
                                        width: 850px;
                                        background: white;
                                        padding: 2%;
                                        margin: 5%;
                                    }
                                    .signup .mahaalk_col{
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: center;
                                        color: ${GlobalStyleSheet.primry_color} 
                                    }
                                    .signup .welcome_note{
                                        font-size: 15px;
                                    }
                                    .signup .append_button{
                                        font-size: 13px;
                                    }
                                    @media (max-width: 991px) {
                                        .signup .form_col{
                                            width: 90%;
                                        }
                                    }
                                    @media (max-width: 767px) {
                                        .signup .append_button {
                                            font-size: 10px;
                                        }
                                        .signup .welcome_note {
                                            font-size: 15px;
                                        }
                                        .signup .form_col{
                                            width: 94%;
                                            margin: 3%;
                                            padding: 3%;
                                        }
                                    }

                                `}</style>
                                <style jsx>
                                    {`
                                        .signup {
                                            min-height: 100vh;
                                            background: ${GlobalStyleSheet.body_color};
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            right: 0;
                                        }
                                        .signup span {
                                            color: red;
                                        }
                                        .signup p {
                                            text-align: center; 
                                            margin: 0px;
                                        }
                                        .signup .feedback{
                                            display: flex;
                                            width: 100%;
                                            font-size: 12.8px;
                                            color: ${GlobalStyleSheet.primry_color};
                                        }
                                        .signup .feedback a{
                                            font-size: 12.8px;
                                            color: blue;
                                            cursor: pointer;
                                        }
                                    `}
                                </style>
                                <style jsx global>{`
                                    html,
                                    body {
                                        padding: 0;
                                        margin: 0;
                                        font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
                                    }
                                `}</style>
                            </div >
                        )
                }
            </Formik>
        );
    }
}

const styles = {
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        marginTop: '5px'
    },
    image: {
        width: '100px',
        height: '100px',
        marginBottom: '2%',
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
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default Signup;