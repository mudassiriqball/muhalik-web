import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import { Row, Col, ListGroup } from 'react-bootstrap'
import MuhalikConfig from '../../sdk/muhalik.config'
import GlobalStyleSheet from '../../styleSheet'
import StickyBottomNavbar from '../components/customer/stick-bottom-navbar'
import { getDecodedTokenFromStorage, removeTokenFromStorage } from '../../sdk/core/authentication-service'

import Layout from '../components/customer/layout';

import ManageAccount from '../components/profile/manage-account'
import MyProfile from '../components/profile/my-profile'
import Address from '../components/profile/address'
import ChangeProfilePicture from '../components/profile/change-profile-picture'

import ManageOrders from '../components/profile/manage-orders'
import PendingOrders from '../components/profile/pending-orders'
import DeliveredOrders from '../components/profile/delivered-orders'
import CancelledOrders from '../components/profile/cancelled-orders'


export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []

    const url_1 = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url_1).then((response) => {
        categories_list = response.data.category.docs,
            sub_categories_list = response.data.sub_category.docs
    }).catch((error) => {
    })

    return {
        props: {
            categories_list,
            sub_categories_list
        },
    }
}

export default function Profile(props) {
    const [token, setToken] = useState({ role: '', full_name: '', status: '' })
    const [cart_count, setCart_count] = useState(0)

    const [user, setUser] = useState('')
    const [view, setView] = useState('manage_account')

    const [loading, setLoading] = useState(false)
    const [dashboard_href, setdashboard_href] = useState('/')

    useEffect(() => {
        handleUrlChange()
        window.addEventListener('popstate', (event) => handleUrlChange(event), false);
        getData()
        return () => {
            window.removeEventListener('popstate', (event) => handleUrlChange(event), false);
        }
    }, [])

    function handleUrlChange() {
        if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?manage-account`) {
            setView('manage_account')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?my-profile`) {
            setView('my_profile')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?change-profile-picture`) {
            setView('change_picture')
            console.log('change_picture:', view)
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?shop-address` || window.location.href == `${MuhalikConfig.PATH} + /user/profile?my-address`) {
            setView('address')
        }

        else if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?orders` && user.role == 'customer') {
            setView('manage_orders')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?pending-orders` && user.role == 'customer') {
            setView('pending_orders')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?delivered-orders` && user.role == 'customer') {
            setView('delivered_orders')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/profile?cancelled-orders` && user.role == 'customer') {
            setView('cancelled_orders')
        } else {
            history.pushState(null, '', '/user/profile?manage-account')
            setView('manage_account')
        }
    }


    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
            const count_url = MuhalikConfig.PATH + `/api/users/cart/${_token._id}`;
            await axios.get(count_url).then((res) => {
                setCart_count(res.data.data.length)
            }).catch((error) => {
            })

            const user_url = MuhalikConfig.PATH + `/api/users/user/${_token._id}`;
            await axios.get(user_url).then((res) => {
                console.log('user:', res.data.data[0])
                setUser(res.data.data[0])
            }).catch((error) => {
            })
        }
    }

    function logout() {
        setLoading(true)
        removeTokenFromStorage(false)
        setLoading(false)
    }

    useEffect(() => {
        if (token.role == 'vendor') {
            setdashboard_href('/vendor')
        } else if (token.role == 'admin') {
            setdashboard_href('/admin')
        }
        return () => {
            setdashboard_href('/')
        }
    }, [token])

    return (
        <div className='profile'>
            <Layout
                role={token.role || ''}
                name={token.full_name || ''}
                logout={logout}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
            >
                <div className='_div'>
                    <Row>
                        <Col lg={3} md={3}>
                            <ListGroup variant="flush" >
                                <ListGroup.Item style={{ color: view == 'manage_account' || view == 'my_profile' || view == 'change_picture' || view == 'address' ? 'blue' : null }}
                                    onClick={() => { history.pushState(null, '', '/user/profile?manage-account'), setView('manage_account') }}
                                >
                                    {'Manage Account'}
                                </ListGroup.Item>
                                <ListGroup.Item style={{ color: view == 'my_profile' && 'blue' }}
                                    onClick={() => { history.pushState(null, '', '/user/profile?my-profile'), setView('my_profile') }}
                                >
                                    {'My Profile'}
                                </ListGroup.Item>
                                <ListGroup.Item style={{ color: view == 'address' && 'blue' }}
                                    onClick={() => { history.pushState(null, '', `/user/profile?${user.role == 'vendor' ? 'shop-address' : 'my-address'}`), setView('address') }}
                                >
                                    {user.role == 'vendor' ? 'Shop Address' : 'My Address'}
                                </ListGroup.Item>
                                <ListGroup.Item style={{ color: view == 'change_picture' && 'blue' }}
                                    onClick={() => { history.pushState(null, '', '/user/profile?change-profile-picture'), setView('change_picture') }}
                                >
                                    {'Change Picture'}
                                </ListGroup.Item>
                                <ListGroup.Item onClick={() => Router.push('/reset-password')}>Change Password</ListGroup.Item>
                            </ListGroup>
                            {user.role == 'customer' &&
                                <ListGroup variant="flush" >
                                    <ListGroup.Item style={{ color: view == 'manage_orders' || view == 'pending_orders' || view == 'delivered_orders' || view == 'cancelled_orders' ? 'blue' : null }}
                                        onClick={() => { history.pushState(null, '', '/user/profile?manage-orders'), setView('manage_orders') }}
                                    >
                                        {'Manage Orders'}
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ color: view == 'pending_orders' && 'blue' }}
                                        onClick={() => { history.pushState(null, '', '/user/profile?pending-orders'), setView('pending_orders') }}
                                    >
                                        {'Pending'}
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ color: view == 'delivered_orders' && 'blue' }}
                                        onClick={() => { history.pushState(null, '', '/user/profile?delivered-orders'), setView('delivered_orders') }}
                                    >
                                        {'Delivered'}
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ color: view == 'cancelled_orders' && 'blue' }}
                                        onClick={() => { history.pushState(null, '', '/user/profile?cancelled-orders'), setView('cancelled_orders') }}
                                    >
                                        {'Cancelled'}
                                    </ListGroup.Item>
                                </ListGroup>
                            }
                        </Col>
                        <Col>
                            {view == 'manage_account' && <ManageAccount user={user} setView={(value) => setView(value)} />}
                            {view == 'my_profile' && <MyProfile user={user} />}
                            {view == 'address' && <Address user={user} />}
                            {view == 'change_picture' && <ChangeProfilePicture user={user} />}

                            {view == 'manage_orders' && <ManageOrders user={user} setView={(value) => setView(value)} />}
                            {view == 'pending_orders' && <PendingOrders user={user} />}
                            {view == 'delivered_orders' && <DeliveredOrders user={user} />}
                            {view == 'cancelled_orders' && <CancelledOrders user={user} />}

                        </Col>
                    </Row>

                </div>
            </Layout>


            <style type="text/css">{`
                .profile {
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }

                .profile ._div {
                    padding: 1% 10%;
                }
                .profile .list-group-item:first-child {
                    background: none;
                    color: gray;
                    font-size: 16px;
                    cursor: default;
                }
                .profile .list-group-item:first-child:hover{
                    background: none;
                    color: blue;
                    cursor: pointer;
                    font-size: 16px;
                }
                .profile .list-group-item {
                    background: none;
                    color: gray;
                    font-size: 13px;
                    cursor: pointer;
                }
                .profile .list-group-item:hover {
                    background: white;
                    color: blue;
                }

                .profile .row {
                    padding: 0%;
                    margin: 0%;
                }
                .profile .card_col {
                    padding: 5px;
                }
                .profile .heading {
                    font-size: 18px;
                    margin: 10px 5px;
                }
                .profile .card {
                    border: none;
                }
                .profile .card-header {
                    display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    background: white;
                    border: none;
                    color: gray;
                    padding-bottom: 0%;
                }
                .profile a {
                    font-size: 11px;
                }
                .profile .label {
                    font-size: 13px;
                    width: 100%;
                    color: gray;
                }
                .profile .address_label {
                    font-size: 11px;
                    width: 100%;
                    color: gray;
                }
                @media (max-width: 1299px){
                    .profile ._div {
                        padding: 1% 7%;
                    }
                }
                @media (max-width: 1199px){
                    .profile ._div {
                        padding: 1% 4%;
                    }
                }
                @media (max-width: 991px){
                    .profile ._div {
                        padding: 1% 0%;
                    }
                }
                @media (max-width: 767px){
                    .profile {
                        display: none;
                    }
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
                }
            `}</style>
        </div >
    )
}








