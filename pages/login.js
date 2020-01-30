import React, { Component } from 'react';
import { Navbar, Form, Button, Row, Col, Container } from 'react-bootstrap';

import GlobalStyleSheet from '../styleSheet';
const styles = {
    body: {
        background: `${GlobalStyleSheet.body_color}`,
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',

    },
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        color: `${GlobalStyleSheet.primary_text_color}`,
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
    // label: {
    //     color: `${GlobalStyleSheet.primary_text_color}`,
    //     marginRight: '10px',
    // },
}
class Login extends Component {
    state = {}
    render() {
        return (
            <div style={styles.body}>
                <Navbar variant="dark" style={{ background: `${GlobalStyleSheet.primry_color}` }}>
                    <Navbar.Brand href="/" className="mr-auto" > Muhalik    </Navbar.Brand>
                </Navbar>
                <Container style={{ padding: '0px 50px' }}>
                    <Row>
                        <Col lg={4} md={3} sm={3}></Col>
                        <Col lg={4} md={6} sm={6} style={styles.container}>
                            <Navbar.Brand href="#" style={styles.label}> Login    </Navbar.Brand>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    {/* <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label >Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="light" size="sm" block type="submit" style={styles.submit_btn}> Login </Button>
                                <Button variant="light" size="sm" block type="submit" style={styles.submit_btn}> Sighnup </Button>
                            </Form>
                        </Col>
                        <Col lg={4} md={3} sm={3}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;