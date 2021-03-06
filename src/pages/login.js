import React, { Component } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Navbar, Container, Form, Col, Row, InputGroup, Button, Image, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons';

import MuhalikConfig from '../sdk/muhalik.config';
import Toolbar from './components/toolbar';
import GlobalStyleSheet from '../styleSheet';
import { saveTokenToStorage } from '../sdk/core/authentication-service';
import { checkAuth } from '../sdk/core/authentication-service'
import translate from '../i18n/translate'
import TranslateFormControl from '../i18n/translate-form-control'
import PhoneRegExp from '../sdk/consts/phone-reg-exp'

const schema = yup.object({
    mobile: yup.string().required(translate('enter_mobile_nmbr')),
    password: yup.string().required(translate('enter_password'))
        .min(8, translate('password_min'))
        .max(20, translate('password_max')),
});

import * as decode from 'jwt-decode'
import Router from 'next/router'
import MyButton from './components/buttons/my-btn';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: true,
            isLoading: '',
            serverErrorMsg: '',
            mobileError: '',
            countryCode: '+966'
        }
    }
    async componentDidMount() {
        this.authUser()
    }
    async authUser() {
        await checkAuth('/login')
    }
    showPassword = ev => {
        this.setState({ hide: !this.state.hide })
    }

    async login(values, currentComponent) {
        const phoneNumber = currentComponent.state.countryCode + values.mobile
        if (currentComponent.state.countryCode == '+966' && PhoneRegExp.ksaPhoneRegExp.test(phoneNumber) ||
            currentComponent.state.countryCode == '+92' && PhoneRegExp.pakPhoneRegExp.test(phoneNumber)) {
            currentComponent.setState({ mobileError: '' })
            currentComponent.setState({ isLoading: true })
            let data = {}
            data = {
                mobile: phoneNumber,
                password: values.password
            }
            const url = MuhalikConfig.PATH + '/api/users/login';
            await axios.post(url, data).then((res) => {
                if (res.status == '200') {
                    saveTokenToStorage(res.data.token);
                    const decodedToken = decode(res.data.token);

                    if (decodedToken.data.role == 'customer') {
                        Router.replace('/')
                    } else if (decodedToken.data.role == 'vendor') {
                        Router.replace('/vendor')
                    } else if (decodedToken.data.role == 'admin') {
                        Router.replace('/admin')
                    } else {
                        Router.replace('/')
                    }
                }
            }).catch((error) => {
                currentComponent.setState({ isLoading: false })
                try {
                    currentComponent.setState({ serverErrorMsg: error.response.data.message })
                } catch (err) {
                    alert('Error')
                    console.log('Login Error:', error)
                }
            });
        } else {
            currentComponent.setState({ mobileError: translate('enter_valid_mobile') })
        }
    }

    handleSearchEnterPress(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            props.handleSearch(searchType, searchValue, start_date, end_date)
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
                    mobile: '', password: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    this.setState({ serverErrorMsg: '' })
                    setSubmitting(true);
                    setTimeout(() => {
                        this.login(values, this);

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
                            <div className='login'>
                                <Toolbar title={'Login'} />
                                <Row className='row'>
                                    <Col lg="auto" md="auto" sm="auto" xs="auto" className='form_col'>
                                        <p>
                                            <Image src="/muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '25%', maxWidth: '150px' }} />
                                        </p>
                                        <h6 className="text-center" style={{ width: '100%', paddingBottom: '10px' }}>{translate('login_to_mahaalk')}</h6>
                                        <hr />
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="validationMobile">
                                                    <Form.Label style={styles.label}>{translate('mobile_number')}
                                                        <span> * </span>
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
                                                            onChange={handleChange}
                                                            isInvalid={this.state.mobileError}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {this.state.mobileError}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>

                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="validationPassword">
                                                    <Form.Label style={styles.label}>{translate('password')} <span>*</span></Form.Label>
                                                    <InputGroup>
                                                        <InputGroup.Prepend>
                                                            <MyButton block={false}>
                                                                <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
                                                            </MyButton>
                                                        </InputGroup.Prepend>
                                                        <TranslateFormControl
                                                            id='enter_password'
                                                            type={hide ? 'password' : 'text'}
                                                            value={values.password}
                                                            isInvalid={touched.password && errors.password}
                                                            name="password"
                                                            onChange={handleChange}
                                                            onKeyPress={(e) => {
                                                                if (e.keyCode == 13 || e.which == 13) {
                                                                    handleSubmit()
                                                                }
                                                            }}
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
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label className="text-right" style={styles.label}>
                                                    <Link href="/reset-password"><a>{translate('forgot_password')}</a></Link>
                                                </Form.Label>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label className="text-center" style={styles.label}>
                                                    {translate('dont_have_account')}
                                                    <span>
                                                        <Link href="signup"><a>{translate('signup')}</a></Link>
                                                    </span>
                                                </Form.Label>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label className="text-center" style={styles.errorMsg}>
                                                    {this.state.serverErrorMsg}
                                                </Form.Label>
                                            </Form.Row>
                                            <Form.Row className='p-0 m-0'>
                                                <MyButton onClick={handleSubmit} disabled={this.state.isLoading} block={true}>
                                                    {this.state.isLoading ? translate('logging') : translate('login')}
                                                    {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : <div></div>}
                                                </MyButton>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Label className="text-center" style={styles.term_condition_label}>
                                                    {translate('by_logging_in')}
                                                    <span>
                                                        <Link href="./help/terms-and-conditions"><a> {translate('terms_conditions')} </a></Link>
                                                    </span>
                                                    {translate('and')}
                                                    <span>
                                                        <Link href="./help/privacy-statement"><a>{translate('privacy_statement')} </a></Link>
                                                    </span>
                                                </Form.Label>
                                            </Form.Row>
                                        </Form>
                                    </Col>
                                </Row>
                                <style type="text/css">{`
                                     .login .row{
                                        align-items: center;
                                        justify-content: center;
                                        margin: 0%;
                                        padding: 0%;
                                    }
                                    .login .form_col{
                                        width: 400px;
                                        background: white;
                                        margin: 5%;
                                        padding: 2%;
                                    }
                                    @media (max-width: 575px) {
                                        .login .form_col{
                                            width: 97%;
                                            margin: 1.5%;
                                            padding: 1.5%;
                                        }
                                    }

                                `}</style>
                                <style jsx>
                                    {`
                                        .login {
                                            min-height: 100vh;
                                            background: ${GlobalStyleSheet.body_color};
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            right: 0;
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
    side_column: {
        margin: '0 3%',
    },
    label: {
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    errorMsg: {
        color: 'red',
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    term_condition_label: {
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
        padding: '10px',
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