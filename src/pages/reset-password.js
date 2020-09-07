import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import firebase from '../sdk/custom/firebase'
import { Form, Col, Row, InputGroup, Button, Image, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import AlertModal from './components/alert-modal';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config';
import Toolbar from './components/toolbar';
import { checkAuth, removeTokenFromStorage } from '../sdk/core/authentication-service'
import MyButton from './components/buttons/my-btn';
import PhoneRegExp from '../sdk/consts/phone-reg-exp'
import translate from '../i18n/translate';
import TranslateFormControl from '../i18n/translate-form-control';


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
        countryCode: '+966',
        isCodeSended: false,
        isCodeVerified: false,

        _id: '',
        mobileError: '',
        verificationCodeError: '',
        feedback: '',
        intervalTime: 60,
    };

    async componentDidMount() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
            {
                size: "invisible"
            });
    }

    async handleSenVerificationCode(mobileNumber) {
        const currentComponent = this
        const phoneNumber = this.state.countryCode + mobileNumber
        if (this.state.countryCode == '+966' && PhoneRegExp.ksaPhoneRegExp.test(phoneNumber) || this.state.countryCode == '+92' && PhoneRegExp.pakPhoneRegExp.test(phoneNumber)) {
            this.setState({ sendCodeLoading: true, mobileError: '' })
            const url = MuhalikConfig.PATH + `/api/users/check-mobile/${phoneNumber}`;
            await axios.get(url).then(function (response) {
                let interval = null
                currentComponent.setState({
                    intervalTime: 60,
                    isResendCode: false,
                    feedback: '',
                    _id: response.data.data._id,
                    sendCodeLoading: false,
                });

                var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
                firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then(function (confirmationResult) {
                        window.confirmationResult = confirmationResult;
                        currentComponent.setState({
                            isCodeSended: true,
                            mobileError: '',
                            feedback: translate('code_sended'),
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
                            mobileError: translate('code_not_sended'),
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
                mobileError: translate('enter_valid_mobile'),
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
                feedback: translate('number_verified'),
                verificationCodeError: '',
                isResendCode: false,
            })
        }).catch(function (error) {
            currentComponent.setState({
                verificationCodeError: translate('invalid_code'),
                feedback: '',
            })
        });
    }

    showPassword = ev => {
        this.setState({ hide: !this.state.hide })
    }

    async resetPassword(values, currentComponent) {
        let data = {}
        data = {
            mobile: values.mobile,
            password: values.password
        }
        const url = MuhalikConfig.PATH + `/api/users/reset-password/${this.state._id}`;
        if (this.state.isCodeVerified && this.state.isCodeSended) {
            await axios.put(url, data).then(function (response) {
                removeTokenFromStorage()
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
                                    header={translate('success')}
                                    message={translate('reset_pswrd_success')}
                                    iconname={faThumbsUp}
                                    color={'green'}
                                />
                                <Toolbar />
                                <Row className="row">
                                    <Col lg="auto" md="auto" sm="auto" xs="auto" className='form_col'>
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Form.Row>
                                                <Col lg={12} md={12} sm={12} xs={12} className='mahaalk_col'>
                                                    <Image src="muhalik.jpg" roundedCircle fluid style={styles.image} />
                                                    <div className='d-flex flex-column ml-3'>
                                                        <div className="text-center welcome_note" >{translate('welcome_to_mahaalk')} </div>
                                                        <div className="text-center welcome_note" >{translate('creat_account')} </div>
                                                    </div>
                                                </Col>
                                            </Form.Row>
                                            <hr className='pt-0 mt-0' />

                                            <Form.Row>
                                                <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>{translate('mobile_number')}<span>*</span>
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
                                                        <InputGroup.Prepend>
                                                            <Form.Control
                                                                as="select"
                                                                value={this.state.countryCode}
                                                                onChange={(e) => this.setState({ countryCode: e.target.value, mobileError: '' })}
                                                                style={{ background: GlobalStyleSheet.primry_color, color: 'white' }}
                                                            >
                                                                <option style={{ background: 'white', color: 'gray' }}>{'+966'}</option>
                                                                <option style={{ background: 'white', color: 'gray' }}>{'+92'}</option>
                                                            </Form.Control>
                                                        </InputGroup.Prepend>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="590911891"
                                                            aria-describedby="mobile"
                                                            name="mobile"
                                                            value={values.mobile}
                                                            onChange={(e) => { handleChange(e), this.setState({ mobileError: '' }) }}
                                                            isInvalid={this.state.mobileError}
                                                            disabled={this.state.isCodeSended}
                                                        />
                                                        <InputGroup.Append>
                                                            <MyButton
                                                                onClick={() => { this.handleSenVerificationCode(values.mobile) }}
                                                                disabled={this.state.isCodeVerified ? true : this.state.isCodeSended ? this.state.isResendCode ? false : true : false}
                                                            >
                                                                {this.state.isCodeSended ? translate('resend') : translate('send_code')}
                                                                {this.state.sendCodeLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                            </MyButton>
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
                                                                }>{translate('change_nmbr')}</a>
                                                                :
                                                                null
                                                            }
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                                {!this.state.isCodeSended &&
                                                    <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                        <div id="recaptcha-container"></div>
                                                    </Form.Group>
                                                }
                                                <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>{translate('verification_code')}<span> * </span></Form.Label>
                                                    <InputGroup>
                                                        <TranslateFormControl
                                                            id='verification_code'
                                                            type="text"
                                                            name="verification_code"
                                                            value={values.verification_code}
                                                            onChange={handleChange}
                                                            isInvalid={this.state.verificationCodeError}
                                                            disabled={!this.state.isCodeSended || this.state.isCodeVerified}
                                                        />
                                                        {this.state.isCodeSended ?
                                                            <InputGroup.Append>
                                                                <MyButton disabled={this.state.isCodeVerified}
                                                                    onClick={() => this.handleVerifyVarificationCode(values.verification_code)}
                                                                >
                                                                    {this.state.isCodeVerified ? translate('verified') : translate('verify')}
                                                                </MyButton>
                                                            </InputGroup.Append>
                                                            : null
                                                        }
                                                        <Form.Control.Feedback type="invalid">
                                                            {this.state.verificationCodeError}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>

                                            {this.state.isCodeVerified ?
                                                <>
                                                    <Form.Row>
                                                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                            <Form.Label style={styles.label}>{translate('new_password')} <span>*</span></Form.Label>
                                                            <InputGroup>
                                                                <TranslateFormControl
                                                                    id='enter_new_password'
                                                                    type={hide ? 'password' : 'text'}
                                                                    name="password"
                                                                    value={values.password}
                                                                    onChange={handleChange}
                                                                    isInvalid={touched.password && errors.password}
                                                                />
                                                                <InputGroup.Append>
                                                                    <MyButton onClick={this.showPassword}>
                                                                        {eyeBtn}
                                                                    </MyButton>
                                                                </InputGroup.Append>
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.password}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                            <Form.Label style={styles.label}>{translate('confirm_password')}<span>*</span></Form.Label>
                                                            <InputGroup>
                                                                <TranslateFormControl
                                                                    id='reenter_password'
                                                                    type={hide ? 'password' : 'text'}
                                                                    name="confirm_password"
                                                                    value={values.confirm_password}
                                                                    onChange={handleChange}
                                                                    isInvalid={touched.confirm_password && errors.confirm_password}
                                                                />
                                                                <InputGroup.Append>
                                                                    <MyButton onClick={this.showPassword}>
                                                                        {eyeBtn}
                                                                    </MyButton>
                                                                </InputGroup.Append>
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.confirm_password}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} controlId="loginGrop">
                                                            <MyButton
                                                                onClick={handleSubmit}
                                                                disabled={this.state.isLoading || !this.state.isCodeVerified} block>
                                                                {translate('continue')}
                                                                {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                            </MyButton>
                                                        </Form.Group>
                                                    </Form.Row>
                                                </>
                                                :
                                                null
                                            }

                                        </Form>
                                    </Col>
                                </Row>
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