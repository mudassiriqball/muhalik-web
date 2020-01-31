
import { Navbar, Container, Form, Col, Row, InputGroup, Button, Image } from 'react-bootstrap';
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import GlobalStyleSheet from '../styleSheet';
import Link from 'next/link';


const schema = yup.object({
    mobile: yup.string().required(),
    name: yup.string().required(),
    verificationCode: yup.string().required(),
    email: yup.string(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    gender: yup.string().required(),
});

class Signup extends Component {

    state = {

    };
    render() {
        return (
            <Formik validationSchema={schema} onSubmit={console.log} initialValues={{}} >
                {
                    ({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
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
                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="validationMobile">
                                                        <Form.Label style={styles.label}>Mobile Number <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="+966590911891"
                                                                aria-describedby="inputGrouphh"
                                                                name="mobile"
                                                                value={values.mobile}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.mobile}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="inputGroupPrepend" style={styles.buttons}>Send Code</Button>
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
                                                                aria-describedby="inputGroupPrepend"
                                                                name="Full name"
                                                                value={values.name}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.name}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.name}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="validationVerificationCode">
                                                        <Form.Label style={styles.label}>Verification Code <span>*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Verification Code"
                                                            name="verificationCode"
                                                            value={values.verificationCode}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.verificationCode}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.verificationCode}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationEmail">
                                                        <Form.Label style={styles.label}>Email Address</Form.Label>
                                                        <Form.Control
                                                            type="Email"
                                                            placeholder="mr.x@gmail.com"
                                                            name="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.email}
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
                                                                isInvalid={!!errors.password}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="eyeBtn" style={styles.buttons}>
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
                                                                aria-describedby="inputGroupPrepend"
                                                                name="confirmPassword"
                                                                value={values.confirmPassword}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.confirmPassword}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="inputGroupPrepend" style={styles.buttons}>
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
                                                    <Form.Group as={Col} lg={3} controlId="formGridState">
                                                        <Form.Label style={styles.label}>Gender</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>Select</option>
                                                            <option> Male </option>
                                                            <option> Female </option>
                                                            <option> Other </option>
                                                        </Form.Control>
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
                                                    <Form.Group as={Col} lg={4} controlId="formGridState">
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