import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Form, Col, Row, Image, InputGroup, Button, Spinner } from 'react-bootstrap'
import { getTokenFromStorage } from '../../../sdk/core/authentication-service'
import GlobalStyleSheet from '../../../styleSheet'
import MyButton from '../buttons/my-btn'
import MuhalikConfig from '../../../sdk/muhalik.config'

import translate from '../../../i18n/translate'

export default function Address(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [isEditProfile, setisEditProfile] = useState(false)

    const [countary, setCountary] = useState(props.countary)
    const [city, setCity] = useState(props.city)
    const [shop_name, setShop_name] = useState(props.shop_name)
    const [address, setAddress] = useState(props.address)
    const [shop_address, setShop_address] = useState(props.shop_address)

    useEffect(() => {
        setCountary(props.countary)
        setCity(props.city)
        setShop_name(props.shop_name)
        setAddress(props.address)
        setShop_address(props.shop_address)
        return () => {

        }
    }, [props])

    function handleUpdateProfile() {
        setIsLoading(true)
        let data = {}
        data = {
            city: city,
            shop_name: shop_name,
            address: address,
            shop_address: shop_address,
        }
        const url = MuhalikConfig.PATH + `/api/users/user-profile/${props._id}`
        axios.put(url, data, {
            headers: {
                'authorization': props.token,
            }
        }).then((response) => {
            setisEditProfile(false)
            setIsLoading(false)
            props.showAlert('Address Updated Successfully')
            props.reloadUser()
        }).catch((error) => {
            setIsLoading(false)
            console.log('Address Update Failed:', error)
            alert('Address Update Failed')
        });
    }

    function handleCancelEdit() {
        setisEditProfile(!isEditProfile)
        setCountary(props.countary)
        setAddress(props.address)
        setCity(props.city)
        setShop_name(props.shop_name)
    }

    return (
        <div className='address'>
            {!props.isMobile && <label className='heading'>{props.role == 'vendor' ? translate('shop_address') : translate('my_address')}</label>}
            <Card>
                <Card.Body className='card_body'>
                    <Row className='p-0 m-0'>
                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='address_col'>
                            <Form.Label className='form_label'>{translate('country')}</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className='form_control'
                                    value={countary}
                                    onChange={(e) => setCountary(e.target.value)}
                                    disabled={true}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='address_col'>
                            <Form.Label className='form_label'>{translate('city')}</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className='form_control'
                                    type='text'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    disabled={!isEditProfile}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className='p-0 m-0'>
                        {props.role == 'vendor' && <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='address_col'>
                            <Form.Label className='form_label'>{translate('shop_name')}</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className='form_control'
                                    type='text'
                                    value={shop_name}
                                    onChange={(e) => setShop_name(e.target.value)}
                                    disabled={!isEditProfile}
                                />
                            </InputGroup>
                        </Form.Group>
                        }
                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12} className='address_col'>
                            <Form.Label className='form_label'>{props.role == 'vendor' && 'Shop '}{translate('address')}</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className='form_control'
                                    type='text'
                                    value={props.role == 'vendor' ? shop_address : address}
                                    onChange={(e) => { props.role == 'vendor' ? setShop_address(e.target.value) : setAddress(e.target.value) }}
                                    disabled={!isEditProfile}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Row} className='ml-0 mr-0 mb-0 mt-5 p-0'>
                        <Col lg="auto" md="auto" sm="auto" xs="auto" className='address_col'>
                            <Button variant='light' size='sm' onClick={handleCancelEdit} block={true}>
                                {isEditProfile ? 'Cancel' : 'Edit Profile'}
                            </Button>
                        </Col>
                        <Col></Col>
                        <Col lg="auto" md="auto" sm="auto" xs="auto" className='address_col'>
                            {isEditProfile && <Button variant='light' size='sm' onClick={handleUpdateProfile} block={true}
                                disabled={city == props.city && address == props.address & shop_name == props.shop_name && shop_address == props.shop_address}>
                                {isLoading ? 'Updating' : 'Update'}
                                {isLoading ? <Spinner size='sm' animation='grow' /> : null}
                            </Button>
                            }
                        </Col>
                    </Form.Group>
                </Card.Body>
            </Card>
            <style type="text/css">{`
                .address .card {
                    border: none;
                    background: rgb(165,64,162);
                    background: linear-gradient(135deg, ${GlobalStyleSheet.primry_color} 0%, ${GlobalStyleSheet.primry_light_color} 100%);
                    min-height: 200px;
                }
                .address .card-header {
                    display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                    border: none;
                    padding-bottom: 0%;
                    background: none;
                }
                .address .heading {
                    font-size: 18px;
                    padding-top: 10px;
                    width: 100%;
                }
                .address .form_label {
                    font-size: 13px;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                }
                .address .form_control:disabled {
                   background: none;
                    color: white;
                }
                @media (max-width: 1199px){
                    .address .address_col  {
                        padding-left: 0.5%;
                        padding-right: 0.5%;
                    }
                }
                @media (max-width: 767px){
                    .address {
                        padding: 1.5%;
                    }
                    .address .address_col {
                        padding: 0%;
                    }
                    .address .card_body {
                        padding: ${isEditProfile ? '3%' : 'auto'};
                    }
                }
            `}</style>
        </div >
    )
}
