import React from 'react'
import { Card, Row, Col, Nav, Image } from 'react-bootstrap'

export default function ManageAccount(props) {
    return (
        <>
            <div className='heading'>Manage Account</div>
            <Row>
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Header>
                            <div className='mr-auto'>Personel Info</div>
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?my-profile'), props.setView('my_profile') }}>EDIT</Nav.Link>
                        </Card.Header>
                        <Card.Body>
                            <label className='label'>{props.full_name}</label>
                            <label className='label'>{props.mobile}</label>
                            <label className='label'>{props.email}</label>
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
                            <Image src={props.avatar} roundedCircle thumbnail fluid
                                style={{ minWidth: '120px', maxWidth: '120px', minHeight: '120px', maxHeight: '120px' }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card style={{ minHeight: '200px' }}>
                        <Card.Header>
                            {props.role == 'customer' ?
                                <div className='mr-auto'>Shipping Address</div>
                                :
                                <div className='mr-auto'>Shop Address</div>
                            }
                            <Nav.Link onClick={() => { history.pushState(null, '', '/user/profile?address'), props.setView('address') }}>EDIT</Nav.Link>
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
        </>
    )
}