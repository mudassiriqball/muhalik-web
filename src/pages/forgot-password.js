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

    verification_code: yup.string(),

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

});

class ForgotPassword extends Component {
    state = {
        hide: true,
        isLoading: false,
        sendCodeLoading: false,
        showToast: false,
        serverErrorMsg: '',

        isCodeSended: false,
        isCodeVerified: false,

        _id: '',
        mobileError: '',
        verificationCodeError: '',
        feedback: '',
        intervalTime: 60,
    };

    componentDidMount() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
            {
                size: "invisible"
            });
    }






    async handleSenVerificationCode(mobile) {
        const currentComponent = this

        if (phoneRegExp.test(mobile)) {
            this.setState({ sendCodeLoading: true, mobileError: '' })
            const url = MuhalikConfig.PATH + `/api/users/check-mobile/${mobile}`;

            await axios.get(url).then(function (response) {
                let interval = null
                currentComponent.setState({
                    intervalTime: 60,
                    isResendCode: false,
                    feedback: '',
                    _id: response.data.data._id
                });

                var appVerifier = window.recaptchaVerifier;
                firebase.auth().signInWithPhoneNumber(mobile, appVerifier)
                    .then(function (confirmationResult) {
                        window.confirmationResult = confirmationResult;
                        currentComponent.setState({
                            isCodeSended: true,
                            mobileError: '',
                            feedback: 'Code Sended, Check your number',
                            sendCodeLoading: false,
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
                            sendCodeLoading: false,
                            feedback: '',
                            isCodeSended: false,
                            isCodeVerified: false,
                        })
                    });
            }).catch(function (error) {
                try {
                    currentComponent.setState({
                        mobileError: error.response.data.message,
                        sendCodeLoading: false,
                    })
                } catch (err) {

                }
            })
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
                verificationCodeError: 'Invalid Code, Try again',
                feedback: '',
            })
        });
    }

    showPassword = ev => {
        this.setState({ hide: !this.state.hide })
    }

    async resetPassword(data, currentComponent) {
        const url = MuhalikConfig.PATH + `/api/users/reset-password/${this.state._id}`;
        if (this.state.isCodeVerified && this.state.isCodeSended) {
            await axios.put(url, data).then(function (response) {
                currentComponent.setState({
                    isLoading: false,
                    showToast: true,
                    isCodeSended: false,
                    isCodeVerified: false,
                    isResendCode: false,
                });
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
                    mobile: '', verification_code: '', password: '', confirm_password: '',
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    this.setState({ isLoading: true });
                    setSubmitting(true);
                    setTimeout(() => {
                        if (this.resetPassword(values, this)) {
                            resetForm();
                            Router.push('/login');
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
                            <div className='forgot-password'>
                                <AlertModal
                                    onHide={(e) => this.setState({ showToast: false })}
                                    show={this.state.showToast}
                                    header={'Success'}
                                    message={'Password Changed Successfully'}
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
                                                        <div className="text-center welcome_note" >Change Password</div>
                                                    </div>
                                                </Col>
                                            </Form.Row>
                                            <hr className='pt-0 mt-0' />

                                            <Form.Row>
                                                <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Mobile Number <span>*</span>
                                                        {this.state.isCodeVerified ?
                                                            null
                                                            :
                                                            this.state.isCodeSended && !this.state.isResendCode ?
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
                                                            onChange={(e) => { handleChange(e), this.setState({ mobileError: '' }) }}
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
                                                                disabled={this.state.isCodeVerified ? true : this.state.isCodeSended ? this.state.isResendCode ? false : true : false}
                                                                className='append_button' variant='success' >
                                                                {this.state.isCodeSended ? 'Resend' : 'Send Code'}
                                                                {this.state.sendCodeLoading ? <Spinner animation="grow" size="sm" /> : null}
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


                                                <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
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

                                            {this.state.isCodeVerified ?
                                                <>
                                                    <Form.Row>
                                                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                            <Form.Label style={styles.label}>New Password <span>*</span></Form.Label>
                                                            <InputGroup>
                                                                <Form.Control
                                                                    type={hide ? 'password' : 'text'}

                                                                    placeholder="Enter New Password"
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
                                                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
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
                                                        <Form.Group as={Col} controlId="loginGrop">
                                                            <Button type="submit"
                                                                onSubmit={handleSubmit}
                                                                variant='success'
                                                                disabled={this.state.isLoading || !this.state.isCodeVerified} block>
                                                                {this.state.isLoading ? ' Continue ' : ' Continue '}
                                                                {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                            </Button>
                                                        </Form.Group>
                                                    </Form.Row>
                                                </>
                                                :
                                                null
                                            }

                                        </Form>
                                    </Col>
                                </Row>
                                {/* </Container > */}
                                <style type="text/css">{`
                                    .forgot-password .row{
                                        align-items: center;
                                        justify-content: center;
                                        margin: 0%;
                                        padding: 0%;
                                    }
                                    .forgot-password .form_col{
                                        width: 400px;
                                        background: white;
                                        padding: 2%;
                                        margin: 5%;
                                    }
                                    .forgot-password .mahaalk_col{
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: center;
                                        color: ${GlobalStyleSheet.primry_color} 
                                    }
                                    .forgot-password .welcome_note{
                                        font-size: 15px;
                                    }
                                    .forgot-password .append_button{
                                        font-size: 13px;
                                    }
                                    @media (max-width: 574px) {
                                        .forgot-password .append_button {
                                            font-size: 10px;
                                        }
                                        .forgot-password .welcome_note {
                                            font-size: 15px;
                                        }
                                        .forgot-password .form_col{
                                            width: 94%;
                                            margin: 3%;
                                            padding: 3%;
                                        }
                                    }

                                `}</style>
                                <style jsx>
                                    {`
                                        .forgot-password {
                                            min-height: 100vh;
                                            background: ${GlobalStyleSheet.body_color};
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            right: 0;
                                        }
                                        .forgot-password span {
                                            color: red;
                                        }
                                        
                                        .forgot-password .feedback{
                                            display: flex;
                                            width: 100%;
                                            font-size: 12.8px;
                                            color: ${GlobalStyleSheet.primry_color};
                                        }
                                        .forgot-password .feedback a{
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

export default ForgotPassword;