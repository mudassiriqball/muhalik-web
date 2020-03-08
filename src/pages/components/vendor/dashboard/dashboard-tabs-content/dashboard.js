
import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStoreAlt, faUserPlus, faCheckDouble, faDollarSign, faEdit, faClock, faBan  } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp,} from '@fortawesome/free-regular-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            noOfTtotalProducts: '',
            noOfInStockProducts: '',
            noOfSoldProducts: '',
            noOfReturnedProducts: '',

            totalEarnings: '',
            thisYearEarnings: '',
            thsMonthEarnings: '',
            thisWeekEarnings: '',

            noOfTotalOrders: '',
            noOfDeliveredOrders: '',
            noOfPendingOrders: '',
            noOfCancelledOrders: '',

        }
    }
    render() {
        return (
            <div style={{height:`calc(100vh - 65px)`, overflowY: 'scroll'}}>
                <Row style={styles.row}>
                    <Card style={styles.card_headerr}>
                        <Card.Header style={styles.card_headerr}>
                            Products
                    </Card.Header>
                    </Card>
                </Row>
                <Row style={styles.row}>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>Products</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>In-Stock</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faStoreAlt} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> Sold </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faCheckDouble} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> Reterned </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>














                <Row style={styles.roww}>
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={styles.card_headerr}>
                            Earning
                    </Card.Header>
                    </Card>
                </Row>
                <Row style={styles.row}>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
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
                                                <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>This Year</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> This Month </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>This Week</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>












                <Row style={styles.roww}>
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={styles.card_headerr}>
                            Orders
                    </Card.Header>
                    </Card>
                </Row>
                <Row style={styles.row}>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
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
                                                <FontAwesomeIcon icon={faEdit} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> Delivered</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faCheckDouble} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}> Pending </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faClock} style={styles.fontawesome} />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <div className="hover">
                            <Card style={styles.card} >
                                <Card.Header style={styles.card_header}>Cancelled</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                1234
                                        </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text style={styles.card_text}>
                                                <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
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
                            margin: 0px 2%;
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
    roww: {
        margin: '7% 2% 2% 2%',
        padding: '0px'
    },
    col: {
        padding: '0px',
        margin: '0px'
    },
    card: {
        background: 'white',
        borderRadius: '0px',
        padding: '0px',
        margin:'0%'
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
        fontSize: '20px',
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