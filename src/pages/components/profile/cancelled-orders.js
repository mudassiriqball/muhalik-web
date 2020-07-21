import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Form, Col, Row, Image, InputGroup, Spinner } from 'react-bootstrap'
import { getTokenFromStorage } from '../../../sdk/core/authentication-service'
import GlobalStyleSheet from '../../../styleSheet'
import MyButton from '../buttons/my-btn'
import MuhalikConfig from '../../../sdk/muhalik.config'

export default function CancelledOrders(props) {
    const [token, setToken] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isEditProfile, setisEditProfile] = useState('')
    const [full_name, setFull_name] = useState(props.user.full_name)
    const [mobile, setMobile] = useState(props.user.mobile)
    const [gender, setGender] = useState(props.user.gender)
    const [email, setEmail] = useState(props.user.email)

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
        setFull_name(props.user.full_name)
        setEmail(props.user.email)
        setGender(props.user.gender)
    }

    return (
        <div className='my_profile'>
            <label className='heading'>Cancelled Orders</label>
            <div className='my_profile_div'>
                <Card>
                    <Card.Body>
                        <Row className='p-0 m-0'>
                            <Form.Group as={Col} className='my_profile_col'>
                                <Form.Label className='form_label'>Mobile</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className='form_control'
                                        value={mobile || ''}
                                        disabled={true}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} className='my_profile_col'>
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
                            {props.user.role == 'customer' && <Form.Group as={Col} className='my_profile_col'>
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
                .my_profile .form_control:disabled {
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
