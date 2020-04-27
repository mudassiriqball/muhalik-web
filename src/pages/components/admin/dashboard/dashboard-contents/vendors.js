import React from 'react'
import fetch from 'isomorphic-unfetch'

import { Row, Col, Card, Nav, Table, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'
import TitleRow from '../../../title-row';
import CardAccordion from '../../../card_accordion'
class Vendor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div >
                <TitleRow icon={faUsers} title={' Admin Dashboard / Vendors'} />

                <Row style={styles.row}>
                    <Col lg={3} md={3} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={{ background: 'lightgreen' }} >
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
                            <Card style={{ background: 'lightblue' }} >
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
                            <Card style={{ background: 'orange' }} >
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
                    <Col lg={3} md={3} sm={12} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={{ background: 'pink' }}>
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
                <VendorTable header={'All Vendors'} rank={true} />
                <VendorTable header={'New Vendors'} rank={false} />
                <VendorTable header={'Top Vendors'} rank={true} />
                <VendorTable header={'Admin Vendors'} rank={true} />
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

function VendorTable(props) {
    return (
        <>
            <CardAccordion title={props.header}>
                <Table responsive bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                <Form.Check type="checkbox" />
                            </th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Shop Name</th>
                            <th>Shop Location</th>
                            {props.rank ?
                                <th>Rank</th>
                                : null
                            }
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td align="center" >
                            <Form.Check type="checkbox" />
                        </td>
                        <td className="td">
                            ID
                                        <div className="mr-auto"></div>
                            <Nav.Link style={styles.nav_link} > View </Nav.Link>
                            <Nav.Link style={styles.nav_link}>Edit</Nav.Link>
                            <Nav.Link style={styles.nav_link}>Delete</Nav.Link>
                        </td>
                        <td align="center" >Name</td>
                        <td align="center" >Shop Name</td>
                        <td align="center" >Shop Location</td>
                        {props.rank ?
                            <td align="center" >Rank</td>
                            : null
                        }
                        <td align="center" >{Date.now()}</td>
                    </tbody>
                </Table>
            </CardAccordion>
            <style jsx>
                {`
                    th {
                        text-align: center;
                        font-size: 14px;
                    }
                    .td {
                        display: flex;
                        flex-direction: row;
                        // align-items: center;
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                    }
                    td {
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                    }
                `}
            </style>
        </>
    )
}

const styles = {
    row: {
        margin: '2%',
        padding: '0px'
    },
    nav_link: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '10px',
        paddingRight: '5px',
    },
    col: {
        padding: '0px',
        margin: '0px'
    },
    card: {
        width: '100%',
        marginBottom: '2%',
        border: '1px solid lightgray'
    },
    card_header: {
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        border: 'none',
    },
    table_card_header: {
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
        border: 'none',
    },
    card_text: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        fontSize: '20px',
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
    fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
        float: 'right'
    },
    accordin_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '10%',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default Vendor;