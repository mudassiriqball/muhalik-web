import { Card, Row, Col, Nav } from 'react-bootstrap'
export default function ManageOrders(props) {
    return (
        <>
            <label className='heading'>Manage Orders</label>
            <Row>
                <Col className='card_col'>
                    <Card style={{ minHeight: '150px' }}>
                        <Card.Header>
                            <div className='mr-auto'>Pending Orders</div>
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?pending-orders'), props.setView('pending_orders') }}>VIEW</Nav.Link>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '150px' }}>
                        <Card.Header>
                            <div className='mr-auto'>Delivered Orders</div>
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?delivered-orders'), props.setView('delivered_orders') }}>VIEW</Nav.Link>
                        </Card.Header>
                        <Card.Body className='w-100 d-flex align-items-center justify-content-center'>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '150px' }}>
                        <Card.Header>
                            <div className='mr-auto'>Cancelled Orders</div>
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?cancelled-orders'), props.setView('cancelled_orders') }}>VIEW</Nav.Link>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                {/* } */}
            </Row>
        </>
    )
}
