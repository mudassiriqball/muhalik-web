import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Form, Col, Row, InputGroup, Spinner } from 'react-bootstrap'
import { getTokenFromStorage } from '../../../sdk/core/authentication-service'
import GlobalStyleSheet from '../../../styleSheet'
import MyButton from '../buttons/my-btn'
import MuhalikConfig from '../../../sdk/muhalik.config'

export default function MyProfile(props) {
    const [token, setToken] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [isEditProfile, setisEditProfile] = useState(false)

    const [full_name, setFull_name] = useState(props.full_name)
    const [mobile, setMobile] = useState(props.mobile)
    const [gender, setGender] = useState(props.gender)
    const [email, setEmail] = useState(props.email)

    const [error, setError] = useState()

    function handleUpdateProfile() {
        setIsLoading(true)
        let data = {}
        data = {
            full_name: full_name,
            email: email,
            gender: gender,
        }
        const url = MuhalikConfig.PATH + `/api/users/edit/profile/${props._id}`
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
            <label className='heading'>My Profile</label>
            <div className='my_profile_div'>
                <Card>
                    <Card.Body className='card_body'>
                        <Row className='p-0 m-0'>
                            <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='my_profile_col'>
                                <Form.Label className='form_label'>Mobile</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        value={mobile || ''}
                                        disabled={true}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={6} md={6} sm={6} xs={12} className='my_profile_col'>
                                <Form.Label className='form_label'>Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        value={full_name || ''}
                                        onChange={(e) => setFull_name(e.target.value)}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                            {props.role == 'customer' && <Form.Group as={Col} className='my_profile_col'>
                                <Form.Label className='form_label'>Gender</Form.Label>
                                <Form.Control
                                    className='form_control'
                                    as="select"
                                    aria-describedby="gender"
                                    name="gender"
                                    value={gender || ''}
                                    onChange={(e) => setGender(e.target.value)}
                                    disabled={!isEditProfile}
                                >
                                    <option>Select</option>
                                    <option> Male </option>
                                    <option> Female </option>
                                    <option> Other </option>
                                </Form.Control>
                            </Form.Group>
                            }
                        </Row>
                        <Row className='p-0 m-0'>
                            <Form.Group as={Col} lg={12} md={12} className='my_profile_col'>
                                <Form.Label className='form_label'>Email</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        type='email'
                                        value={email || ''}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={!isEditProfile}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Form.Group as={Row} className='my_profile_col mt-5'>
                            <Col lg="auto" md="auto" sm="auto" xs="auto">
                                <MyButton size='sm' onClick={handleCancelEdit} >
                                    {isEditProfile ? 'Cancel' : 'Edit Profile'}
                                </MyButton>
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto">
                                {isEditProfile && <MyButton size='sm' onClick={handleUpdateProfile}  >
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
                .my_profile .my_profile_div {
                    padding: 5px;
                }
                .my_profile .heading {
                    font-size: 18px;
                    padding: 10px 5px;
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
                .my_profile .form_control:disabled {
                    background: none;
                    border: none;
                    padding-left: 0%;
                    padding-top: 0%;
                    font-size: 14px;
                    font-weight: bold;
                }
                @media (max-width: 767px){
                    .my_profile_col {
                        padding: 0%;
                    }
                    .my_profile .heading {
                        font-size: 16px;
                        padding: 10px 5px 0% 7px;
                        margin: 0%;
                        width: 100%;
                    }
                    .my_profile .card_body {
                        padding: ${isEditProfile ? '2%' : 'auto'};
                    }
                }
            `}</style>
        </div>
    )
}
