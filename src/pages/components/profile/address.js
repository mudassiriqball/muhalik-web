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
    const [isEditProfile, setisEditProfile] = useState('')
    const [countary, setCountary] = useState(props.user.countary)
    const [city, setCity] = useState(props.user.city)
    const [shop_name, setShop_name] = useState(props.user.shop_address)
    const [address, setAddress] = useState(props.user.address)
    const [shop_address, setShop_address] = useState(props.user.shop_address)

    const [error, setError] = useState()

    useEffect(() => {
        getToken()
        return () => {
            setToken('')
        }
    }, [])
    async function getToken() {
        const _token = getTokenFromStorage()
        if (_token != null) {
            setToken(_token)
        }
    }

    function handleUpdateProfile() {
        setIsLoading(true)
        const formData = new FormData()

        const url = MuhalikConfig.PATH + `/api/users/avatar/${props._id}`
        axios.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': token,
            }
        }).then((response) => {
            setIsLoading(false)
            alert('added')
        }).catch((error) => {
            setIsLoading(false)
            console.log('error:', error)
            alert('not afaghssj')
        });
    }

    function handleCancelEdit() {
        setisEditProfile(!isEditProfile)
        setCountary(props.user.countary)
        setAddress(props.user.address)
        setCity(props.user.city)
        setShop_name(props.user.shop_name)
    }

    return (
        <div className='my_profile'>
            <label className='heading'>My Profile</label>
            <div className='my_profile_div'>
                <Card>
                    <Card.Body>
                        <Row className='p-0 m-0'>
                            <Form.Group as={Col} className='my_profile_col'>
                                <Form.Label className='form_label'>Countary</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        value={countary}
                                        onChange={(e) => setCountary(e.target.value)}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} className='my_profile_col'>
                                <Form.Label className='form_label'>City</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        value={city}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Row className='p-0 m-0'>
                            {props.user.role == 'vendor' && <Form.Group as={Col} className='my_profile_col'>
                                <Form.Label className='form_label'>Shop Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        type='address'
                                        value={shop_name}
                                        onChange={(e) => setAddress(e.target.value)}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                            }
                            <Form.Group as={Col} className='my_profile_col'>
                                <Form.Label className='form_label'>{props.user.role == 'vendor' && 'Shop '}Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        type='address'
                                        value={props.user.role == 'vendor' ? shop_address : address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Form.Group as={Row} className='my_profile_col mt-5'>
                            <Col>
                                <MyButton onClick={handleCancelEdit} block={true}>
                                    {isEditProfile ? 'Cancel' : 'Edit Profile'}
                                </MyButton>
                            </Col>
                            <Col>
                                {isEditProfile && <MyButton onClick={handleUpdateProfile} block={true}  >
                                    {isLoading ? 'Updating' : 'Update'}
                                    {isLoading ? <Spinner size='md' animation='grow' /> : null}
                                </MyButton>
                                }
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </div>
            <style type="text/css">{`
                .my_profile .my_profile_div {
                    padding: 5px;
                }
                .my_profile .heading {
                    font-size: 18px;
                    margin: 10px 5px;
                    width: 100%;
                }
                .my_profile_col {
                    padding-left: 0.5%;
                    padding-right: 0.5%;
                }
                .my_profile .form_label {
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
            `}</style>
        </div>
    )
}
