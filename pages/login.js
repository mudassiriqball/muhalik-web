import React, { Component } from 'react';
import { Navbar, Form, InputGroup, Button, Row, Col, Container, Image } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faLock, faEye, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import GlobalStyleSheet from '../styleSheet';

class Login extends Component {
    state = {}
    render() {
        return (
            <div style={styles.body}>
                <Navbar variant="dark" style={{ background: `${GlobalStyleSheet.primry_color}` }}>
                    <Navbar.Brand href="/" className="mr-auto" > Muhalik    </Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                        <Col lg={3} md={3} sm={1} xs={0}></Col>
                        <Col style={styles.container}>
                            <p>
                                <Image src="/static/muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '25%', maxWidth: '150px' }} />
                            </p>
                            <h6 className="text-center" style={{ width: '100%', paddingBottom: '10px' }}>Welcome To Muhalik</h6>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={styles.label}>Mobile Number</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <Button id="eyeBtn" style={styles.fontawesome_btn}>
                                                <FontAwesomeIcon icon={faMobileAlt} style={styles.fontawesome} />
                                            </Button>
                                        </InputGroup.Prepend>
                                        <Form.Control type="text" placeholder="+966590911891" />
                                    </InputGroup>

                                    {/* <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={styles.label}> Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <Button id="eyeBtn" style={styles.fontawesome_btn}>
                                                <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
                                            </Button>
                                        </InputGroup.Prepend>
                                        <Form.Control type="password" placeholder="Enter Password" />
                                        <InputGroup.Prepend>
                                            <Button id="eyeBtn" style={styles.fontawesome_eye_btn}>
                                                <FontAwesomeIcon icon={faEye} style={styles.fontawesome_eye} />
                                            </Button>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Label className="text-right" style={styles.label}>
                                    <label style={{ flex: '1' }}></label>
                                    <Link href="#"> Forgot Password </Link>
                                </Form.Label>

                                <Button variant="light" block type="submit" style={styles.submit_btn}> Login </Button>
                                {/* <Button variant="light" block type="submit" style={styles.submit_btn}> Sighnup </Button> */}
                                <Form.Label className="text-center" style={styles.label}>
                                    Don't have an account..??
                                    <span>
                                        <Link href="#"> Signup </Link>
                                    </span>
                                </Form.Label>
                            </Form>
                        </Col>
                        <Col lg={3} md={3} sm={1} xs={0}></Col>
                    </Row>
                </Container>
                <style jsx>
                    {`
                        p {
                            text-align: center; 
                            margin: 0px;
                        }
                    `}
                </style>
            </div>
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
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        color: `${GlobalStyleSheet.primary_text_color}`,
        // background: 'white',
        border: 'none',
        marginTop: '5%',
        marginBottom: '2%',
    },
    container: {
        // background: `${GlobalStyleSheet.primry_color}`,
        background: 'white',
        // border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
        padding: '20px 30px',
        margin: '5% 5%',
    },
    label: {
        width: '100%',
        fontSize: '14px',
    },
    fontawesome_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
    fontawesome_eye_btn: {
        background: 'none',
        border: '0.5px solid #DDE1E3',
    },
    fontawesome_eye: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default Login;