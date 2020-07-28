import React from 'react'
import { Card, Row, Col, Nav, Image } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'

import translate from '../../../i18n/translate'

export default function ManageAccount(props) {
    return (
        <div className='manage_account'>
            <div className='heading'>{translate('manage_account')}</div>
            <Row>
                <Col className='card_col'>
                    <Card >
                        <Card.Header >
                            <div className='mr-auto'>{translate('personel_info')}</div>
                            <Nav.Link onClick={() => { props.setView('my_profile') }}>{translate('EDIT')}</Nav.Link>
                        </Card.Header>
                        <Card.Body>
                            <label className='label'>{props.full_name}</label>
                            <label className='label'>{props.mobile}</label>
                            <label className='label'>{props.email}</label>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card >
                        <Card.Header>
                            <div className='mr-auto'>{translate('profile_picture')}</div>
                            <Nav.Link onClick={() => { props.setView('change_picture') }}>{translate('EDIT')}</Nav.Link>
                        </Card.Header>
                        <Card.Body className='w-100 d-flex align-items-center justify-content-center'>
                            <Image src={props.avatar} roundedCircle thumbnail fluid
                                style={{ minWidth: '120px', maxWidth: '120px', minHeight: '120px', maxHeight: '120px' }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='card_col'>
                    <Card >
                        <Card.Header >
                            {props.role == 'customer' ?
                                <div className='mr-auto'>{translate('shipping_address')}</div>
                                :
                                <div className='mr-auto'>{translate('shop_address')}</div>
                            }
                            <Nav.Link onClick={() => { props.setView('address') }}>{translate('EDIT')}</Nav.Link>
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
                .manage_account .card_col {
                    padding: 5px;
                }
                .manage_account .heading {
                    font-size: 18px;
                    margin: 10px 5px;
                }
                .manage_account .card {
                    border: none;
                    background: rgb(165,64,162);
                    background: linear-gradient(135deg, ${GlobalStyleSheet.primry_color} 0%, ${GlobalStyleSheet.primry_light_color} 100%);
                    min-height: 200px;
                }
                .manage_account .card-header {
                    display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                    border: none;
                    padding-bottom: 0%;
                    background: none;
                }
                .manage_account .label {
                    font-size: 13px;
                    width: 100%;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                }
                .manage_account .address_label {
                    font-size: 11px;
                    width: 100%;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                }
                .manage_account .count_label {
                    color: ${GlobalStyleSheet.primary_text_light_color};
                    font-size: 20px;
                }
            `}</style>
        </div>
    )
}