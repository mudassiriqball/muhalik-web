import React from 'react'
import { Card, Row, Col, Nav, Image } from 'react-bootstrap'

export default function ManageAccount(props) {
    return (
        <>
            <label className='heading'>Manage Account</label>
            <Row>
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Header>
                            <div className='mr-auto'>Personel Info</div>
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?my-profile'), props.setView('my_profile') }}>EDIT</Nav.Link>
                        </Card.Header>
                        <Card.Body>
                            <label className='label'>{props.user.full_name}</label>
                            <label className='label'>{props.user.mobile}</label>
                            <label className='label'>{props.user.email}</label>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Header>
                            <div className='mr-auto'>Profile Picture</div>
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?change-profile-picture'), props.setView('change_picture') }}>EDIT</Nav.Link>
                        </Card.Header>
                        <Card.Body className='w-100 d-flex align-items-center justify-content-center'>
                            <Image src={props.user.url} roundedCircle thumbnail fluid
                                style={{ minWidth: '80px', maxWidth: '80px', minHeight: '80px', maxHeight: '80px' }} />
                        </Card.Body>
                    </Card>
                </Col>
                {/* {props.user.role != 'admin' && */}
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Header>
                            {props.user.role == 'customer' ?
                                <div className='mr-auto'>Shipping Address</div>
                                :
                                <div className='mr-auto'>Shop Address</div>
                            }
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?address'), props.setView('address') }}>EDIT</Nav.Link>
                        </Card.Header>
                        <Card.Body>
                            <label className='label'>{props.user.full_name}</label>
                            {props.user.role == 'customer' ?
                                <label className='label'>{props.user.address}</label>
                                :
                                <label className='address_label'>{props.user.shop_address}</label>
                            }
                            <label className='label'>{props.user.countary}-{props.user.city}</label>
                        </Card.Body>
                    </Card>
                </Col>
                {/* } */}
            </Row>
        </>
    )
}