import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Form, Col, Row, InputGroup, Button, Spinner } from 'react-bootstrap'
import { getTokenFromStorage } from '../../../sdk/core/authentication-service'
import GlobalStyleSheet from '../../../styleSheet'
import MyButton from '../buttons/my-btn'
import MuhalikConfig from '../../../sdk/muhalik.config'

import translate from '../../../i18n/translate'
import TranslateOption from '../../../i18n/translate-option'


export default function MyProfile(props) {
    const [token, setToken] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [isEditProfile, setisEditProfile] = useState(false)

    const [full_name, setFull_name] = useState(props.full_name)
    const [mobile, setMobile] = useState(props.mobile)
    const [gender, setGender] = useState(props.gender)
    const [email, setEmail] = useState(props.email)

    useEffect(() => {
        setFull_name(props.full_name)
        setMobile(props.mobile)
        setGender(props.gender)
        setEmail(props.email)
        return () => {
        }
    }, [props])

    function handleUpdateProfile() {
        setIsLoading(true)
        let data = {}
        data = {
            full_name: full_name,
            email: email,
            gender: gender,
        }
        const url = MuhalikConfig.PATH + `/api/users/user-profile/${props._id}`
        axios.put(url, data, {
            headers: {
                'authorization': props.token,
            }
        }).then((response) => {
            setisEditProfile(false)
            setIsLoading(false)
            props.showAlert('Personal Info Updated Successfully')
            props.reloadUser()
        }).catch((error) => {
            setIsLoading(false)
            console.log('Update Personal Info Failed:', error)
            alert('Update Personal Info Failed')
        });
    }

    function handleCancelEdit() {
        setisEditProfile(!isEditProfile)
        setFull_name(props.full_name)
        setEmail(props.email)
        setGender(props.gender)
    }

    return (
        <div className='my_profile'>
            {!props.isMobile && <label className='heading'>{translate('my_profile')}</label>}
            <Card className='my_card'>
                <Card.Body>
                    <Row className='p-0 m-0'>
                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12} className='my_profile_col'>
                            <Form.Label className='form_label'>{translate('mobile')}</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className='form_control'
                                    value={mobile || ''}
                                    disabled={true}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='my_profile_col'>
                            <Form.Label className='form_label'>{translate('full_name')}</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className='form_control'
                                    value={full_name || ''}
                                    onChange={(e) => setFull_name(e.target.value)}
                                    disabled={!isEditProfile}
                                />
                            </InputGroup>
                        </Form.Group>
                        {props.role == 'customer' && <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='my_profile_col'>
                            <Form.Label className='form_label'>{translate('gender')}</Form.Label>
                            <Form.Control
                                className='form_control'
                                as="select"
                                name="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                disabled={!isEditProfile}
                            >
                                <TranslateOption id='select' />
                                <TranslateOption id='male' />
                                <TranslateOption id='female' />
                                <TranslateOption id='other' />
                            </Form.Control>
                        </Form.Group>
                        }
                    </Row>
                    <Row className='p-0 m-0'>
                        <Form.Group as={Col} className='my_profile_col'>
                            <Form.Label className='form_label'>{translate('email')}</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className='form_control'
                                    placeholder='mr.x@gmail.com'
                                    type='email'
                                    value={email || ''}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={!isEditProfile}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Row} className='ml-0 mr-0 mb-0 mt-5 p-0'>
                        <Col lg="auto" md="auto" sm="auto" xs="auto" className='my_profile_col'>
                            <Button variant='light' size='sm' onClick={handleCancelEdit} >
                                {isEditProfile ? 'Cancel' : 'Edit Profile'}
                            </Button>
                        </Col>
                        <Col></Col>
                        <Col lg="auto" md="auto" sm="auto" xs="auto" className='my_profile_col'>
                            {isEditProfile && <Button variant='light' size='sm' onClick={handleUpdateProfile}
                                disabled={full_name == props.full_name && gender == props.gender & email == props.email}>
                                {isLoading ? 'Updating' : 'Update'}
                                {isLoading ? <Spinner size='sm' animation='grow' /> : null}
                            </Button>
                            }
                        </Col>
                    </Form.Group>
                </Card.Body>
            </Card>
            <style type="text/css">{`
                 .my_profile .card {
                    border: none;
                    background: rgb(165,64,162);
                    background: linear-gradient(135deg, ${GlobalStyleSheet.primry_color} 0%, ${GlobalStyleSheet.primry_light_color} 100%);
                    min-height: 200px;
                }
                .my_profile .card-header {
                    display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                    border: none;
                    padding-bottom: 0%;
                    background: none;
                }
                .my_profile .heading {
                    font-size: 18px;
                    padding-top: 10px;
                    width: 100%;
                }
                .my_profile .form_label {
                    font-size: 13px;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                }
                .my_profile .form_control:disabled {
                    background: none;
                    color: white;
                }
                @media (max-width: 1199px){
                    .my_profile .my_profile_col {
                        padding-left: 0.5%;
                        padding-right: 0.5%;
                    }
                }
                @media (max-width: 767px){
                    .my_profile {
                        padding: 1.5%;
                    }
                    .my_profile .my_profile_col {
                        padding: 0%;
                    }
                    .my_profile .card-body {
                        padding: ${isEditProfile ? '3%' : 'auto'};
                    }
                }
            `}</style>
        </div>
    )
}
