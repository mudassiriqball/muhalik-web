import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import firebase from '../sdk/custom/firebase'
import { Navbar, Container, Form, Col, Row, InputGroup, Image, Spinner } from 'react-bootstrap';

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
import MyButton from './components/buttons/my-btn'

import translate from '../i18n/translate'
import TranslateFormControl from '../i18n/translate-form-control'
import TranslateOption from '../i18n/translate-option'
import PhoneRegExp from '../sdk/consts/phone-reg-exp'

const schema = yup.object({
    mobile: yup.string().required(translate('enter_mobile_nmbr')),
    full_name: yup.string().required(translate('enter_full_name'))
        .min(5, translate('min_full_name'))
        .max(25, translate('max_full_name')),
    verification_code: yup.string(),
    email: yup.string().email(translate('enter_valid_email'))
        .max(100, translate('email_max')),
    password: yup.string().required(translate('enter_password'))
        .min(8, translate('password_min'))
        .max(20, translate('password_max')),
    confirm_password: yup.string().required(translate('enter_confirm_password')).when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
            [yup.ref("password")],
            translate('password_match')
        )
    }),
    countary: yup.string().required(translate('select_country')),
    city: yup.string().required(translate('enter_city'))
        .min(3, translate('city_mix'))
        .max(30, translate('city_max')),
    gender: yup.string().required(translate('enter_gender')),
    address: yup.string().required(translate('enter_address'))
        .min(3, translate('adress_min'))
        .max(100, translate('address_max')),
    role: yup.string(),
});

class Signup extends Component {
    state = {
        hide: true,
        isLoading: false,
        sendCodeLoading: false,
        showToast: false,
        serverErrorMsg: '',
        countryCode: '+966',
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

    async handleSenVerificationCode(mobileNumber) {
        const currentComponent = this
        const phoneNumber = this.state.countryCode + mobileNumber
        if (this.state.countryCode == '+966' && PhoneRegExp.ksaPhoneRegExp.test(phoneNumber) || this.state.countryCode == '+92' && PhoneRegExp.pakPhoneRegExp.test(phoneNumber)) {
            this.setState({ sendCodeLoading: true, mobileError: '' })
            const url = MuhalikConfig.PATH + `/api/users/check-mobile/${phoneNumber}`;
            await axios.get(url).then((response) => {
                currentComponent.setState({
                    mobileError: translate('number_already_exists'),
                    feedback: '',
                    isCodeSended: false,
                    isCodeVerified: false,
                    sendCodeLoading: false,
                })
            }).catch((error) => {
                currentComponent.setState({
                    sendCodeLoading: false,
                    intervalTime: 60,
                    isResendCode: false,
                    feedback: '',
                });

                var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
                firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then(function (confirmationResult) {
                        window.confirmationResult = confirmationResult;
                        console.log()
                        currentComponent.setState({
                            isCodeSended: true,
                            mobileError: '',
                            feedback: translate('code_sended'),
                            sendCodeLoading: false,
                        })
                        let interval = null
                        interval = setInterval(() => {
                            currentComponent.setState({ intervalTime: currentComponent.state.intervalTime - 1 });
                            if (currentComponent.state.intervalTime == 0) {
                                currentComponent.setState({ isResendCode: true });
                                clearInterval(interval)
                            }
                        }, 1000)
                    }).catch(function (error) {
                        currentComponent.setState({
                            mobileError: '',
                            verificationCodeError: '',
                            feedback: translate('number_verified'),
                            isCodeSended: true,
                            isCodeVerified: true,
                            sendCodeLoading: false,
                            isResendCode: false
                        })
                        console.log('eror:', error)
                    });
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

    async userRegister(values, currentComponent) {
        let data = values
        data.mobile = this.state.countryCode + values.mobile
        const url = MuhalikConfig.PATH + '/api/users/register';
        if (this.state.isCodeVerified && this.state.isCodeSended) {
            await axios.post(url, data).then(function (response) {
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
                currentComponent.setState({ isLoading: false, serverErrorMsg: error.response.data.message })
                return false;
            })
        } else {
            alert('Verify your number first')
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
                    countary: 'KSA', city: '', role: 'customer', address: '',
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
                                    header={translate('succss')}
                                    message={translate('account_created')}
                                    iconname={faThumbsUp}
                                    color={'green'}
                                />
                                <Toolbar title={'Signup'} />
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
                                                <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>{translate('mobile_number')} <span>*</span>
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
                                                            style={{ marginRight: '4px' }}
                                                            type="text"
                                                            placeholder="590911891"
                                                            aria-describedby="mobile"
                                                            name="mobile"
                                                            value={values.mobile}
                                                            onChange={(e) => { handleChange(e), this.setState({ mobileError: '' }) }}
                                                            isInvalid={this.state.mobileError}
                                                            disabled={this.state.isCodeSended}
                                                        />
                                                        <MyButton
                                                            onClick={() => {
                                                                this.state.isCodeSended ?
                                                                    this.handleSenVerificationCode(values.mobile)
                                                                    :
                                                                    this.handleSenVerificationCode(values.mobile)
                                                            }}
                                                            disabled={this.state.isCodeVerified ? true : this.state.isCodeSended ? this.state.isResendCode ? false : true : false}
                                                            className='append_button' variant='success' >
                                                            <div className='append_button'>{this.state.isCodeSended ? translate('resend') : translate('send_code')}</div>
                                                            {this.state.sendCodeLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                        </MyButton>
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

                                                <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>{translate('verification_code')} <span> * </span></Form.Label>
                                                    <InputGroup>
                                                        <TranslateFormControl
                                                            id='verification_code'
                                                            style={{ marginRight: '4px' }}
                                                            type="text"
                                                            name="verification_code"
                                                            value={values.verification_code}
                                                            onChange={handleChange}
                                                            isInvalid={this.state.verificationCodeError}
                                                            disabled={!this.state.isCodeSended || this.state.isCodeVerified}
                                                        />
                                                        {this.state.isCodeSended ?
                                                            <MyButton
                                                                onClick={() => this.handleVerifyVarificationCode(values.verification_code)}
                                                                disabled={this.state.isCodeVerified}
                                                            >
                                                                <div className='append_button'>{this.state.isCodeVerified ? translate('verified') : translate('verify')}</div>
                                                            </MyButton>
                                                            : null
                                                        }
                                                        <Form.Control.Feedback type="invalid">
                                                            {this.state.verificationCodeError}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                {!this.state.isCodeSended &&
                                                    <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                                        <div id="recaptcha-container"></div>
                                                    </Form.Group>
                                                }
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>{translate('full_name')}<span>*</span></Form.Label>
                                                    <InputGroup>
                                                        <TranslateFormControl
                                                            id='enter_full_name'
                                                            type="text"
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
                                                    <Form.Label style={styles.label}>{translate('gender')}<span> * </span> </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        aria-describedby="gender"
                                                        name="gender"
                                                        value={values.gender}
                                                        onChange={handleChange}
                                                        isInvalid={touched.gender && errors.gender}
                                                    >
                                                        <TranslateOption id='select' />
                                                        <TranslateOption id='male' />
                                                        <TranslateOption id='female' />
                                                        <TranslateOption id='other' />
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.gender}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}> {translate('country')} <span> * </span> </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        aria-describedby={translate('country')}
                                                        name="countary"
                                                        value={values.countary}
                                                        onChange={handleChange}
                                                        isInvalid={touched.countary && errors.countary}
                                                    >
                                                        <TranslateOption id='select' />
                                                        <TranslateOption id='ksa' />
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.countary}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>{translate('city')} <span> * </span> </Form.Label>
                                                    <InputGroup>
                                                        <TranslateFormControl
                                                            id='enter_city'
                                                            type="text"
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
                                                    <Form.Label style={styles.label}> {translate('address')} <span> * </span> </Form.Label>
                                                    <InputGroup>
                                                        <TranslateFormControl
                                                            id='enter_address'
                                                            type="text"
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
                                                    <Form.Label style={styles.label}>{translate('email')}</Form.Label>
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
                                                    <Form.Label style={styles.label}>{translate('password')} <span>*</span></Form.Label>
                                                    <InputGroup>
                                                        <TranslateFormControl
                                                            id='enter_password'
                                                            type={hide ? 'password' : 'text'}
                                                            name="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            isInvalid={touched.password && errors.password}
                                                        />
                                                        <InputGroup.Append>
                                                            <MyButton variant='success' onClick={this.showPassword} className='append_button'>
                                                                {eyeBtn}
                                                            </MyButton>
                                                        </InputGroup.Append>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.password}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                                    <Form.Label style={styles.label}>{translate('confirm_password')} <span>*</span></Form.Label>
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
                                                <Form.Label className="text-center" style={styles.label}>
                                                    {translate('by_creating_account')}
                                                    <span>
                                                        <Link href="./help/terms-and-conditions"><a>{translate('terms_conditions')} </a></Link>
                                                    </span>
                                                    {translate('and')}
                                                    <span>
                                                        <Link href="./help/privacy-statement"><a>{translate('privacy_statement')}</a></Link>
                                                    </span>
                                                </Form.Label>
                                                <Form.Label className="text-center" style={styles.label}>
                                                    {translate('already_have_account')}
                                                    <span>
                                                        <Link href="login"><a>{translate('login')}</a></Link>
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
                                                    <MyButton type="submit"
                                                        onClick={handleSubmit}
                                                        variant='success'
                                                        disabled={this.state.isLoading || !this.state.isCodeVerified} block>
                                                        {this.state.isLoading ? translate('signing') : translate('signup')}
                                                        {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
                                                    </MyButton>
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
                                            font-size: 12px;
                                        }
                                        .signup .welcome_note {
                                            font-size: 15px;
                                        }
                                        .signup .form_col{
                                            width: 96%;
                                            margin: 2%;
                                            padding: 2%;
                                        }
                                    }
                                     @media (max-width: 767px) {
                                        .signup .append_button {
                                            font-size: 11px;
                                        }
                                        .signup .form_col{
                                            width: 97%;
                                            margin: 1.5%;
                                            padding: 1.5%;
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
                                            color: green;
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