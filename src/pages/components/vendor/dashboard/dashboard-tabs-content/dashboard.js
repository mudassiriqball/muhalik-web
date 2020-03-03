import React from 'react'
import fetch from 'isomorphic-unfetch'

import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap'
// american-sign-language-interpreting
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'

class Dashboard extends React.Component {
    render() {
        return (
            <div >
                <Row style={styles.row}>
                    <Card style={styles.card_headerr}>
                        <Card.Header style={styles.card_headerr}>
                            Products
                    </Card.Header>
                    </Card>
                </Row>
                <Row style={styles.row}>
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>All Products</Card.Header>
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
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>Product Sold</Card.Header>
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
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> In Stock </Card.Header>
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
                </Row>




                <Row style={styles.row}>
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={styles.card_headerr}>
                            Earning
                    </Card.Header>
                    </Card>
                </Row>
                <Row style={styles.row}>
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>Total</Card.Header>
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
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>This Month</Card.Header>
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
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> Loss </Card.Header>
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
            </div >
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
        borderBottom: `0.5px solid ${GlobalStyleSheet.body_color}`
    },
    card_headerr: {
        // background: `${GlobalStyleSheet.admin_primry_color}`,
        // color: `${GlobalStyleSheet.body_color}`,
        borderBottom: '1px solid gray',
        width: '100%'
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

export default Dashboard;