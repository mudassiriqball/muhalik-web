import React from 'react'
import fetch from 'isomorphic-unfetch'

import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap'
// american-sign-language-interpreting
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'

class Vendor extends React.Component {
    static async getInitialProps(ctx) {
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        return { stars: 10 }
    }

    render() {
        return (
            <div >
                <Row style={styles.row}>
                    <Col lg={3} md={3} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>Vendors</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>New Vendors</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faUserPlus} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> Top Vendors </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faThumbsUp} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}  style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card}>
                                <Card.Header style={styles.card_header}> Admin Vendors </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                5678
                                            </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <style jsx>
                    {`
                        .hover {
                            margin: 5px 15px
                        }
                        .hover:hover {
                            margin: 0px 10px;
                            cursor: pointer
                        }
                    `}
                </style>
            </div>
        )
    }
}

const styles = {
    row: {
        margin: '2%',
         padding: '0px'
    },
    col: {
        padding: '0px',
        margin: '0px'
    },
    card: {
        background: 'white',
        borderRadius: '0px',
        padding: '0px'
    },
    card_header: {
        background: 'white',
        color: 'gray',
        border: 'none'
    },
    card_text: {
        color: '#6A7074',
        fontSize: '30px',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '50px',
        height: '50px',
        maxHeight: '50px',
        maxWidth: '50px',
        float: 'right'
    },
}

export default Vendor;