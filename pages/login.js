import React, { Component } from 'react';
import { Navbar, Form, Button, Row, Col, Container } from 'react-bootstrap';

import GlobalStyleSheet from '../styleSheet';
const styles = {
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        marginTop: '50px',
    },
    container: {
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        padding: '50px'
    }
}
class Login extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar variant="dark" style={{ background: `${GlobalStyleSheet.primry_color}` }}>
                    <Navbar.Brand href="/" className="mr-auto" > Muhalik    </Navbar.Brand>
                    <Navbar.Brand href="#" className="mr-auto" > Login    </Navbar.Brand>
                </Navbar>
                <div style={{ height: '100px' }}></div>
                <Container style={styles.container}>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2"> Email </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" required placeholder="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2"> Password </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" required placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Button variant="primary" block type="submit" style={styles.submit_btn}> Login </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Login;