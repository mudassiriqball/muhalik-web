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

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const schema = yup.object({
    mobile: yup.string().required("Enter Mobile Number")
        .matches(phoneRegExp, "Phone number is not valid"),
    password: yup.string().required("Enter Password")
        .min(8, "Must have at least 8 characters")
        .max(20, "Can't be longer than 20 characters"),
});

import * as decode from 'jwt-decode'
import Router from 'next/router'
import MyButton from './components/buttons/my-btn';
import MySubmitButton from './components/buttons/my-submit-btn';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: true,
            isLoading: '',
            serverErrorMsg: ''
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

    async login(data, currentComponent) {
        const url = MuhalikConfig.PATH + '/api/users/login';
        await axios.post(url, data).then(function (response) {
            if (response.status == '200') {
                saveTokenToStorage(response.data.token);
                const decodedToken = decode(response.data.token);

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
        }).catch(function (error) {
            currentComponent.setState({ isLoading: false })
            currentComponent.setState({ serverErrorMsg: error.response.data.message })
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
                    mobile: '', password: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    this.setState({ serverErrorMsg: '' })
                    setSubmitting(true);
                    this.setState({ isLoading: true })
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
                                                            <MyButton>
                                                                <FontAwesomeIcon icon={faMobileAlt} style={styles.fontawesome} />
                                                            </MyButton>
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