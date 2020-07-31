import React from 'react'

import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap'
// american-sign-language-interpreting
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import CountColoredCard from '../../../count-colored-card'

import GlobalStyleSheet from '../../../../../styleSheet'
import TitleRow from '../../../title-row';

class AdminDashboard extends React.Component {
    render() {
        return (
            <div >
                <TitleRow icon={faTachometerAlt} title={' Admin Dashboard'} />

                <Row style={styles.row}>
                    <Col lg={3} md={3} sm={12} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.cancelled_orders_count}
                            header={'Vendors'}
                            background={'lightblue'}
                            iconname={''}
                        />
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.cancelled_orders_count}
                            header={'Customers'}
                            background={'lightgreen'}
                            iconname={''}
                        />
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.cancelled_orders_count}
                            header={'Products'}
                            background={'lightblue'}
                            iconname={''}
                        />
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} className='p-0 m-0'>
                        <CountColoredCard
                            count={this.props.cancelled_orders_count}
                            header={'Orders'}
                            background={'lightblue'}
                            iconname={''}
                        />
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

export default AdminDashboard;