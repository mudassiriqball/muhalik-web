import { Navbar, Container, Form, Col, Row, InputGroup, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import GlobalStyleSheet from '../styleSheet';
import Link from 'next/link';

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
        // background: 'white',
        border: 'none',
        // marginTop: '50px',
    },
    container: {
        // background: `${GlobalStyleSheet.primry_color}`,
        background: 'white',
        border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
        marginTop: '50px',
        padding: '20px 30px'
    },
    label: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        marginRight: '10px',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}


const schema = yup.object({
    fullName: yup.string().required(),
    username: yup.string().required(),
    mobile: yup.string().required(),
    verificationCode: yup.string().required(),
    email: yup.string(),
    dob: yup.string().required(),
    gender: yup.string().required(),
    city: yup.string().required(),
});

class Signup extends Component {

    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
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
                                <Container style={{ padding: '0px 50px' }}>
                                    <Row>
                                        <Col lg={1} md={1} sm={1}></Col>
                                        <Col lg={10} md={10} sm={10} style={styles.container}>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                                                        <Form.Label>Mobile Number <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Username"
                                                                aria-describedby="inputGroupPrepend"
                                                                name="username"
                                                                value={values.username}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.username}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="inputGroupPrepend" style={styles.buttons}>Send Code</Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.username}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationFormik01">
                                                        <Form.Label>Full Name <span>*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="firstName"
                                                            value={values.firstName}
                                                            onChange={handleChange}
                                                            isValid={touched.firstName && !errors.firstName}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                                                        <Form.Label>Verification Code <span>*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="City"
                                                            name="city"
                                                            value={values.city}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.city}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.city}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="City"
                                                            name="city"
                                                            value={values.city}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.city}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.city}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="validationFormikUsername">
                                                        <Form.Label>Password <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Username"
                                                                aria-describedby="inputGroupPrepend"
                                                                name="username"
                                                                value={values.username}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.username}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="inputGroupPrepend" style={styles.buttons}>
                                                                    <FontAwesomeIcon icon={faEye} style={styles.fontawesome} />
                                                                </Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.username}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="validationFormikUsername">
                                                        <Form.Label>Conform Password <span>*</span></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Username"
                                                                aria-describedby="inputGroupPrepend"
                                                                name="username"
                                                                value={values.username}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.username}
                                                            />
                                                            <InputGroup.Prepend>
                                                                <Button id="inputGroupPrepend" style={styles.buttons}>
                                                                    <FontAwesomeIcon icon={faEye} style={styles.fontawesome} />
                                                                </Button>
                                                            </InputGroup.Prepend>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.username}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>

                                            </Form>
                                        </Col>
                                        <Col lg={1} md={1} sm={1}></Col>
                                    </Row>
                                </Container>
                                <style jsx>
                                    {`
                                    span {
                                        color: red;
                                    }
                                `}
                                </style>
                            </div>
                        )}
            </Formik>
        );
    }
}


export default Signup;