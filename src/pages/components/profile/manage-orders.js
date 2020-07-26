import { Card, Row, Col, Nav } from 'react-bootstrap'

import translate from '../../../i18n/translate'
import TranslateOption from '../../../i18n/translate-option'

export default function ManageOrders(props) {
    return (
        <>
            <label className='heading'>{translate('manage_orers')}</label>
            <Row>
                <Col className='card_col'>
                    <Card style={{ minHeight: '150px' }}>
                        <Card.Header>
                            <div className='mr-auto'>{translate('pending')}</div>
                            <Nav.Link onClick={() => { history.replaceState(null, '', '/user/profile?pending-orders'), props.setView('pending_orders') }}>VIEW</Nav.Link>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '150px' }}>
                        <Card.Header>
                            <div className='mr-auto'>{translate('delivered')}</div>
                            <Nav.Link onClick={() => { history.replaceState(null, '', '/user/profile?deleivered-orders'), props.setView('deleivered_orders') }}>VIEW</Nav.Link>
                        </Card.Header>
                        <Card.Body className='w-100 d-flex align-items-center justify-content-center'>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '150px' }}>
                        <Card.Header>
                            <div className='mr-auto'>{translate('cancelled')}</div>
                            <Nav.Link onClick={() => { history.replaceState(null, '', '/user/profile?cancelled-orders'), props.setView('cancelled_orders') }}>VIEW</Nav.Link>
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
