import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Form, Col, Row, Image, InputGroup, Spinner } from 'react-bootstrap'
import { getTokenFromStorage } from '../../../sdk/core/authentication-service'
import GlobalStyleSheet from '../../../styleSheet'
import MyButton from '../buttons/my-btn'
import MuhalikConfig from '../../../sdk/muhalik.config'

export default function Address(props) {
    const [token, setToken] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isEditProfile, setisEditProfile] = useState(false)

    const [countary, setCountary] = useState(props.countary)
    const [city, setCity] = useState(props.city)
    const [shop_name, setShop_name] = useState(props.shop_name)
    const [address, setAddress] = useState(props.address)
    const [shop_address, setShop_address] = useState(props.shop_address)

    const [error, setError] = useState()

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
            <label className='heading'>{props.role == 'vendor' ? 'Shop Address' : 'My Address'}</label>
            <div className='my_profile_div'>
                <Card>
                    <Card.Body className='card_body'>
                        <Row className='p-0 m-0'>
                            <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='address_col'>
                                <Form.Label className='form_label'>Country</Form.Label>
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
                                <Form.Label className='form_label'>City</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Row className='p-0 m-0'>
                            {props.role == 'vendor' && <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='address_col'>
                                <Form.Label className='form_label'>Shop Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        type='address'
                                        value={shop_name}
                                        onChange={(e) => setShop_name(e.target.value)}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                            }
                            <Form.Group as={Col} lg={12} md={12} sm={12} xs={12} className='address_col'>
                                <Form.Label className='form_label'>{props.role == 'vendor' && 'Shop '}Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        type='address'
                                        value={props.role == 'vendor' ? shop_address : address}
                                        onChange={(e) => { props.role == 'vendor' ? setShop_address(e.target.value) : setAddress(e.target.value) }}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Form.Group as={Row} className='address_col mt-5'>
                            <Col lg="auto" md="auto" sm="auto" xs="auto">
                                <MyButton size='sm' onClick={handleCancelEdit} block={true}>
                                    {isEditProfile ? 'Cancel' : 'Edit Profile'}
                                </MyButton>
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto">
                                {isEditProfile && <MyButton size='sm' onClick={handleUpdateProfile} block={true}  >
                                    {isLoading ? 'Updating' : 'Update'}
                                    {isLoading ? <Spinner size='sm' animation='grow' /> : null}
                                </MyButton>
                                }
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </div>
            <style type="text/css">{`
                .address .my_profile_div {
                    padding: 5px;
                }
                .address .heading {
                    font-size: 18px;
                    padding: 10px 5px;
                    width: 100%;
                }
                .address_col {
                    padding-left: 0.5%;
                    padding-right: 0.5%;
                }
                .address .form_label {
                    font-size: 13px;
                    color: gray;
                }
                .form_control:disabled {
                    background: none;
                    border: none;
                    padding-left: 0%;
                    padding-top: 0%;
                    font-size: 14px;
                    font-weight: bold;
                }
                @media (max-width: 767px){
                    .address_col {
                        padding: 0%;
                    }
                    .address .heading {
                        font-size: 16px;
                        padding: 10px 5px 0% 7px;
                        margin: 0%;
                        width: 100%;
                    }
                    .address .card_body {
                        padding: ${isEditProfile ? '2%' : 'auto'};
                    }
                }
            `}</style>
        </div >
    )
}
