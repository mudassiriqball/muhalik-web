import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import axios from 'axios'
import { Row, Col, ListGroup } from 'react-bootstrap'

import { faUserCircle, faImage, faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons'


import MuhalikConfig from '../../sdk/muhalik.config'
import GlobalStyleSheet from '../../styleSheet'
import { getDecodedTokenFromStorage, removeTokenFromStorage, getTokenFromStorage, checkTokenExpAuth } from '../../sdk/core/authentication-service'

import Layout from '../components/customer/layout';
import AlertModal from '../components/alert-modal'

import ManageAccount from '../components/profile/manage-account'
import MyProfile from '../components/profile/my-profile'
import Address from '../components/profile/address'
import ChangeProfilePicture from '../components/profile/change-profile-picture'

import ManageOrders from '../components/profile/manage-orders'
import Orders from '../components/profile/orders'

import translate from '../../i18n/translate'

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
    const [token, setToken] = useState(null)
    const [user, setUser] = useState({
        _id: null, role: '', mobile: '', full_name: '', gender: '', countary: '', city: '', address: '',
        email: '', shop_name: '', shop_category: '', shop_address: '', avatar: '', status: ''
    })

    const [cart_count, setCart_count] = useState(0)
    const [view, setView] = useState('manage_account')

    const [showAlertModal, setShowAlertModal] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')

    const [loading, setLoading] = useState(false)
    const [dashboard_href, setdashboard_href] = useState('/')

    const [pending_orders_count, setPending_orders_count] = useState(0)
    const [delivered_orders_count, setDelivered_orders_count] = useState(0)
    const [cancelled_orders_count, setCancelled_orders_count] = useState(0)
    const [returned_orders_count, setReturned_orders_count] = useState(0)

    const [isOrderDisabled, setIsOrderDisabled] = useState(false)

    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        async function getData() {
            const _decoded_token = await checkTokenExpAuth()
            if (_decoded_token != null) {
                setUser(_decoded_token)
                const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${_decoded_token._id}`;
                await axios.get(user_url, { cancelToken: source.token }).then((res) => {
                    if (unmounted) {
                        setUser(res.data.data[0])
                        setCart_count(res.data.data[0].cart.length)
                    }
                }).catch((err) => {
                    if (axios.isCancel(err)) return
                })

                const order_count_url = MuhalikConfig.PATH + `/api/orders/abc/abc/customer-orders-count/${_decoded_token._id}`;
                await axios.get(order_count_url).then((res) => {
                    if (unmounted) {
                        setPending_orders_count(res.data.pending_orders_count)
                        setDelivered_orders_count(res.data.delivered_orders_count)
                        setCancelled_orders_count(res.data.cancelled_orders_count)
                        setReturned_orders_count(res.data.returned_orders_count)
                    }
                }).catch((error) => {
                })

                const _token = await getTokenFromStorage()
                setToken(_token)
            } else {
                Router.replace('/')
            }
        }
        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, []);


    async function getUser(id) {
        const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${id}`;
        await axios.get(user_url).then((res) => {
            setUser(res.data.data[0])
            setCart_count(res.data.data[0].cart.length)
        }).catch((err) => {
        })
    }

    useEffect(() => {
        if (view == 'pending_orders' || view == 'cancelled_orders' || view == 'delivered_orders' || view == 'returned_orders') {
            setIsOrderDisabled(true)
            setTimeout(() => {
                setIsOrderDisabled(false)
            }, 3000);
        }
    }, [view])

    useEffect(() => {
        if (user.role == 'vendor') {
            setdashboard_href('/vendor')
        } else if (user.role == 'admin') {
            setdashboard_href('/admin')
        }
        return () => {
        }
    }, [user])

    function handleShowAlert(msg) {
        setAlertMsg(msg)
        setShowAlertModal(true)
    }

    return (
        <div className='profile'>
            <AlertModal
                onHide={(e) => setShowAlertModal(false)}
                show={showAlertModal}
                header={'Success'}
                message={alertMsg}
                iconname={faThumbsUp}
                color={'green'}
            />
            <Layout
                user={user}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                {...props}
            >
                <div className='_div'>
                    <Row>
                        <Col lg={3} md={3}>
                            <ListGroup variant="flush" >
                                <ListGroup.Item style={{ color: view == 'manage_account' || view == 'my_profile' || view == 'change_picture' || view == 'address' ? 'blue' : null }}
                                    onClick={() => { setView('manage_account') }}
                                >
                                    {'Manage Account'}
                                </ListGroup.Item>
                                <ListGroup.Item style={{ color: view == 'my_profile' && 'blue' }}
                                    onClick={() => { setView('my_profile') }}
                                >
                                    {translate('my_profile')}
                                </ListGroup.Item>
                                <ListGroup.Item style={{ color: view == 'address' && 'blue' }}
                                    onClick={() => { setView('address') }}
                                >
                                    {user.role == 'vendor' ? translate('shop_address') : translate('address')}
                                </ListGroup.Item>
                                <ListGroup.Item style={{ color: view == 'change_picture' && 'blue' }}
                                    onClick={() => { setView('change_picture') }}
                                >
                                    {translate('change_picture')}
                                </ListGroup.Item>
                                <ListGroup.Item onClick={() => Router.push('/reset-password')}>{translate('change_password')}</ListGroup.Item>
                            </ListGroup>
                            {user.role == 'customer' &&
                                <ListGroup variant="flush" >
                                    <ListGroup.Item style={{ color: view == 'manage_orders' || view == 'pending_orders' || view == 'delivered_orders' || view == 'cancelled_orders' || view == 'returned_orders' ? 'blue' : null }}
                                        onClick={() => { setView('manage_orders') }}
                                    >
                                        {translate('my_orders')}
                                    </ListGroup.Item>
                                    <ListGroup.Item disabled={isOrderDisabled} style={{ color: view == 'pending_orders' && 'blue' }}
                                        onClick={() => { setView('pending_orders') }}
                                    >
                                        {translate('pending')}
                                    </ListGroup.Item>
                                    <ListGroup.Item disabled={isOrderDisabled} style={{ color: view == 'delivered_orders' && 'blue' }}
                                        onClick={() => { setView('delivered_orders') }}
                                    >
                                        {translate('delivered')}
                                    </ListGroup.Item>
                                    <ListGroup.Item disabled={isOrderDisabled} style={{ color: view == 'cancelled_orders' && 'blue' }}
                                        onClick={() => { setView('cancelled_orders') }}
                                    >
                                        {translate('cancelled')}
                                    </ListGroup.Item>
                                    <ListGroup.Item disabled={isOrderDisabled} style={{ color: view == 'returned_orders' && 'blue' }}
                                        onClick={() => { setView('returned_orders') }}
                                    >
                                        {translate('returned')}
                                    </ListGroup.Item>
                                </ListGroup>
                            }
                        </Col>
                        <Col>
                            {view == 'manage_account' && <ManageAccount
                                _id={user._id}
                                role={user.role}
                                full_name={user.full_name}
                                shop_name={user.shop_name}
                                address={user.address}
                                shop_address={user.shop_address}
                                countary={user.countary}
                                city={user.city}
                                avatar={user.avatar}
                                mobile={user.mobile}
                                email={user.email}
                                setView={(value) => setView(value)}
                            />}
                            {view == 'my_profile' && <MyProfile
                                token={token}
                                _id={user._id}
                                role={user.role}
                                full_name={user.full_name}
                                gender={user.gender}
                                mobile={user.mobile}
                                email={user.email}
                                showAlert={(msg) => handleShowAlert(msg)}
                                reloadUser={() => getUser(user._id)}
                            />}
                            {view == 'address' && <Address
                                token={token}
                                _id={user._id}
                                role={user.role}
                                shop_name={user.shop_name}
                                address={user.address}
                                shop_address={user.shop_address}
                                countary={user.countary}
                                city={user.city}
                                showAlert={(msg) => handleShowAlert(msg)}
                                reloadUser={() => getUser(user._id)}
                            />}
                            {view == 'change_picture' && <ChangeProfilePicture
                                token={token}
                                _id={user._id}
                                avatar={user.avatar}
                                showAlert={(msg) => handleShowAlert(msg)}
                                reloadUser={() => getUser(user._id)}
                            />}

                            {view == 'manage_orders' && <ManageOrders
                                _id={user._id}
                                role={user.role}
                                pending_orders_count={pending_orders_count}
                                delivered_orders_count={delivered_orders_count}
                                cancelled_orders_count={cancelled_orders_count}
                                returned_orders_count={returned_orders_count}
                                setView={(value) => setView(value)}
                            />}
                            {view == 'pending_orders' && <Orders
                                token={token}
                                _id={user._id}
                                status={'pending'}
                                setView={(value) => setView(value)}
                            />}
                            {view == 'delivered_orders' && <Orders
                                token={token}
                                _id={user._id}
                                status={'delivered'}
                                setView={(value) => setView(value)}
                            />}
                            {view == 'cancelled_orders' && <Orders
                                token={token}
                                _id={user._id}
                                status={'cancelled'}
                                setView={(value) => setView(value)}
                            />}
                            {view == 'returned_orders' && <Orders
                                token={token}
                                _id={user._id}
                                status={'returned'}
                                setView={(value) => setView(value)}
                            />}
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
                    margin: 1% 7% 20% 7%;
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
                    background: ${GlobalStyleSheet.primary_text_light_color};
                    color: blue;
                }

                .profile .row {
                    padding: 0%;
                    margin: 0%;
                }
               
                .profile a {
                    font-size: 11px;
                }
              
                @media (max-width: 1199px){
                    .profile ._div {
                        margin: 1% 3% 20% 3%;
                    }
                }
                @media (max-width: 991px){
                    .profile ._div {
                        margin: 1% 0% 20% 0%;
                        padding: 0%;
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








