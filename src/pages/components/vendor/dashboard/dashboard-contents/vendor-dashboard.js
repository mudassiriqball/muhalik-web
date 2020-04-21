
import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStoreAlt, faUserPlus, faCheckDouble, faDollarSign, faTachometerAlt,
    faEdit, faClock, faBan
} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import CountUp from 'react-countup';
import GlobalStyleSheet from '../../../../../styleSheet'

class VendorDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfTotalProducts: 1000,
            noOfInStockProducts: 2000,
            noOfSoldProducts: 3000,
            noOfReturnedProducts: 4000,

            totalEarnings: 5470,
            thisYearEarnings: 2309,
            thisMonthEarnings: 1207,

            noOfTotalOrders: 1190,
            noOfDeliveredOrders: 980,
            noOfPendingOrders: 120,
            noOfCancelledOrders: 100,

        }
    }
    render() {
        return (
            <div>
                <Row style={styles.title_row} noGutters>
                    <FontAwesomeIcon icon={faTachometerAlt} style={styles.title_fontawesome} />
                    <div className="mr-auto" style={styles.title}> Dashboard </div>
                </Row>
                <Row noGutters style={{ padding: '0% 1%' }}>
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.product_card_col}>
                        <Card>
                            <Card.Header style={styles.card_header}>
                                Products
                            </Card.Header>
                            <Card.Body style={styles.card_body}>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">Total Products</span>
                                    </p>
                                    <div className="number_count_div" style={styles.total_product_row}>
                                        <FontAwesomeIcon icon={faProductHunt} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfTotalProducts} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">In-Stock Products</span>
                                    </p>
                                    <div className="number_count_div" style={styles.stock_product_row}>
                                        <FontAwesomeIcon icon={faStoreAlt} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfInStockProducts} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">Sold Products</span>
                                    </p>
                                    <div className="number_count_div" style={styles.sold_product_row}>
                                        <FontAwesomeIcon icon={faCheckDouble} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfSoldProducts} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">Returned Products</span>
                                    </p>
                                    <div className="number_count_div" style={styles.returned_product_row}>
                                        <FontAwesomeIcon icon={faThumbsDown} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfReturnedProducts} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Col-2 */}
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.order_card_col}>
                        <Card>
                            <Card.Header style={styles.card_header}>
                                Orders
                            </Card.Header>
                            <Card.Body style={styles.card_body}>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">Total Orders</span>
                                    </p>
                                    <div className="number_count_div" style={styles.total_order_row}>
                                        <FontAwesomeIcon icon={faEdit} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfTotalOrders} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">Deleivered Orders</span>
                                    </p>
                                    <div className="number_count_div" style={styles.delivered_order_row}>
                                        <FontAwesomeIcon icon={faThumbsUp} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfDeliveredOrders} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">Pending Orders</span>
                                    </p>
                                    <div className="number_count_div" style={styles.prnding_order_row}>
                                        <FontAwesomeIcon icon={faClock} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfPendingOrders} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <div style={styles.card_text_div}>
                                    <p>
                                        <span className="label_span">Cancelled Orders</span>
                                    </p>
                                    <div className="number_count_div" style={styles.cancelled_order_row}>
                                        <FontAwesomeIcon icon={faBan} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfCancelledOrders} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Col-3 */}
                    <Col lg={4} md={4} sm={12} xs={12} style={styles.earning_card_col}>
                        <Row noGutters style={styles.earning_card_row}>
                            <Card style={styles.total_earning_card}>
                                <Card.Header style={styles.earning_card_header}>
                                    Total Earnings
                                </Card.Header>
                                <Card.Body>
                                    <div className="number_count_div" style={styles.total_errning_row}>
                                        <FontAwesomeIcon icon={faDollarSign} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfPendingOrders} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row noGutters style={styles.earning_card_row}>
                            <Card style={styles.year_earning_card}>
                                <Card.Header style={styles.earning_card_header}>
                                    This Year Earnings
                                </Card.Header>
                                <Card.Body>
                                    <div className="number_count_div" style={styles.year_errning_row}>
                                        <FontAwesomeIcon icon={faDollarSign} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfPendingOrders} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row noGutters style={styles.earning_card_row}>
                            <Card style={styles.month_earning_card}>
                                <Card.Header style={styles.earning_card_header}>
                                    This Month Earnings
                                </Card.Header>
                                <Card.Body>
                                    <div className="number_count_div" style={styles.month_errning_row}>
                                        <FontAwesomeIcon icon={faDollarSign} className="mr-auto" style={styles.product_fontawesome} />
                                        <CountUp start={0} end={this.state.noOfPendingOrders} delay={0} duration={10}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="number_count" ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>

                <style jsx>
                    {`
                        p {
                            width: 100%; 
                            border-bottom: 1.2px dashed lightgray; 
                            line-height: 0.1em;
                         } 
                         .label_span {
                            background:#fff;
                            padding-right: 3%
                         }
                         .number_count {
                            color: white;
                            font-size: 25px
                         }
                         .number_count_div {
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            padding: 5%;
                            background: red;
                            border-radius: 5px
                         }
                         .number_count_div:hover {
                             margin: -5px 0px 5px 0px;
                             box-shadow: 0 4px 8px 0 black, 0 6px 20px 0 yellow;
                         }
                    `}
                </style>
            </div >
        )
    }
}

const styles = {
    title_row: {
        borderBottom: '1px solid lightgray',
        padding: '1.5% 4%'
    },
    title_fontawesome: {
        color: 'gray',
        marginRight: '3%',
        width: '26px',
        height: '26px',
        maxHeight: '26px',
        maxWidth: '26px',
    },
    title: {
        color: 'gray'
    },

    row: {
        margin: '2%',
        padding: '0px'
    },

    card_header: {
        // background: 'white',
        // padding: '1.5% 5%',
        color: '#6A7074',
        // borderBottom: `0.5px solid ${GlobalStyleSheet.body_color}`
        fontSize: '15px'
    },
    card_text_div: {
        color: '#6A7074',
        fontSize: '14px',
        padding: '5%',
    },

    // Products
    product_card_col: {
        padding: '3% 1%'
    },
    total_product_row: {
        background: 'blue',
    },
    stock_product_row: {
        background: 'purple',
    },
    sold_product_row: {
        background: 'green',
    },
    returned_product_row: {
        background: 'gray',
    },

    // Orders
    order_card_col: {
        padding: '3% 1%'
    },
    total_order_row: {
        background: 'blue',
    },
    delivered_order_row: {
        background: 'green',
    },
    prnding_order_row: {
        background: '#ffbf00',
    },
    cancelled_order_row: {
        background: 'red',
    },

    // Earnings
    earning_card_col: {
        padding: '3% 1%'
    },
    earning_card_row: {
        marginBottom: '4%'
    },
    earning_card_header: {
        color: 'white',
        fontSize: '15px',
    },
    total_earning_card: {
        width: '100%',
        background: '#0099e6',
    },
    year_earning_card: {
        width: '100%',
        background: '#ac00e6',
        color: 'blue'
    },
    month_earning_card: {
        width: '100%',
        background: '#ac7339',
    },
    // 
    total_errning_row: {
        // margin: '3% 0%',
        background: '#0088cc',
    },
    year_errning_row: {
        // margin: '3% 0%',
        background: '#9900cc',
    },
    month_errning_row: {
        // margin: '3% 0%',
        background: '#996633',
    },

    product_fontawesome: {
        color: 'white',
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
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

export default VendorDashboard;
