import React from 'react'
import { Card, Row, Col, Nav, Image } from 'react-bootstrap'

import translate from '../../../i18n/translate'

export default function ManageAccount(props) {
    return (
        <>
            <div className='heading'>{translate('manage_account')}</div>
            <Row>
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }} >
                        <Card.Header>
                            <div className='mr-auto'>{translate('personel_info')}</div>
                            <Nav.Link onClick={() => { history.replaceState(null, '', '/user/profile?my-profile'), props.setView('my_profile') }}>EDIT</Nav.Link>
                        </Card.Header>
                        <Card.Body className='my_card'>
                            <label className='label'>{props.full_name}</label>
                            <label className='label'>{props.mobile}</label>
                            <label className='label'>{props.email}</label>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Header>
                            <div className='mr-auto'>{translate('profile_picture')}</div>
                            <Nav.Link onClick={() => { history.replaceState(null, '', '/user/profile?change-profile-picture'), props.setView('change_picture') }}>EDIT</Nav.Link>
                        </Card.Header>
                        <Card.Body className='w-100 d-flex align-items-center justify-content-center'>
                            <Image src={props.avatar} roundedCircle thumbnail fluid
                                style={{ minWidth: '120px', maxWidth: '120px', minHeight: '120px', maxHeight: '120px' }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Header>
                            {props.role == 'customer' ?
                                <div className='mr-auto'>{translate('shipping_address')}</div>
                                :
                                <div className='mr-auto'>{translate('shop_address')}</div>
                            }
                            <Nav.Link onClick={() => { history.replaceState(null, '', '/user/profile?address'), props.setView('address') }}>EDIT</Nav.Link>
                        </Card.Header>
                        <Card.Body>
                            <label className='label'>{props.full_name}</label>
                            {props.role == 'customer' ?
                                <label className='label'>{props.address}</label>
                                :
                                <label className='address_label'>{props.shop_address}</label>
                            }
                            <label className='label'>{props.countary}-{props.city}</label>
                        </Card.Body>
                    </Card>
                </Col>
                {/* } */}
            </Row>
            <style type="text/css">{`
                .my_card {
                   background: rgb(165,64,162);
background: linear-gradient(135deg, rgba(165,64,162,1) 0%, rgba(89,35,87,1) 100%);
                }
            `}</style>
        </>
    )
}