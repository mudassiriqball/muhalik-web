import React, { Component } from 'react';
import { Navbar, Form, Button, Col, Container } from 'react-bootstrap';

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
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar variant="dark" style={{ background: `${GlobalStyleSheet.primry_color}` }}>
                    <Navbar.Brand href="/" className="mr-auto" > Muhalik    </Navbar.Brand>
                    <Navbar.Brand href="#" className="mr-auto" > Signup    </Navbar.Brand>
                </Navbar>
                <div style={{height: '100px'}}></div>
                <Container style={styles.container}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control required placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control required as="select">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} required controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" required label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" block type="submit" style={styles.submit_btn}> Submit </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Signup;