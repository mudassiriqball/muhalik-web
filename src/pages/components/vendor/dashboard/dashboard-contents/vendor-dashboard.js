
import { Row, Col, Card, InputGroup, Button, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStoreAlt, faUserPlus, faCheckDouble, faDollarSign, faTachometerAlt,
    faEdit, faClock, faBan, faHistory, faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import CountUp from 'react-countup';
import GlobalStyleSheet from '../../../../../styleSheet'
import TitleRow from '../../../title-row'
import CountColoredCard from '../../../count-colored-card'

class VendorDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfTotalProducts: this.props.total_products_count,
            noOfInStockProducts: this.props.in_stock_products_count,
            noOfSoldProducts: 3000,
            noOfReturnedProducts: 4000,

            totalEarnings: 5470,
            thisYearEarnings: 2309,
            thisMonthEarnings: 1207,

            noOfPendingOrders: this.props.pending_orders_count,
            noOfDeliveredOrders: this.props.delivered_orders_count,
            noOfCancelledOrders: this.props.cancelled_orders_count,
            noOfReturnedOrders: this.props.returned_orders_count,
            noOfTotalOrders: this.props.pending_orders_count + this.props.delivered_orders_count + this.props.cancelled_orders_count + this.props.returned_orders_count,

        }
    }
    render() {
        return (
            <div className='vendor_dashbord'>
                <TitleRow icon={faTachometerAlt} title={'Vendor Dashboard'} />
                {this.props.user_status == 'disapproved' ?
                    <Alert variant='danger' style={{ fontSize: '14px' }}>
                        {'Your account is not approved yet'}
                    </Alert>
                    :
                    null
                }
                {this.props.user_status == 'restricted' ?
                    <Alert variant='danger' style={{ fontSize: '14px' }}>
                        {' Your account is blocked, Contact to Admin'}
                    </Alert>
                    :
                    null
                }
                <Row className='color_card_row' noGutters>
                    <Col lg={6} md={6} sm={6} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.pending_orders_count + this.props.delivered_orders_count + this.props.cancelled_orders_count + this.props.returned_orders_count}
                            header={'Total Orders'}
                            background={'lightblue'}
                            iconname={faHistory}
                        />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.pending_orders_count}
                            header={'Pending'}
                            background={'yellow'}
                            iconname={faHistory}
                        />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.delivered_orders_count}
                            header={'Delivered'}
                            background={'lightgreen'}
                            iconname={faCheckDouble}
                        />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.cancelled_orders_count}
                            header={'Cancelled'}
                            background={'#ff6666'}
                            iconname={faTimes}
                        />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.returned_orders_count}
                            header={'Returned'}
                            background={'orange'}
                            iconname={faBan}
                        />
                    </Col>
                </Row>
                <style type="text/css">{`
                    .vendor_dashbord .color_card_row {
                        margin: 1%;
                    }
                `}</style>
            </div >
        )
    }
}


export default VendorDashboard;
