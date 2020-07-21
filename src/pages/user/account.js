
import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import { Row, Col, ListGroup, Nav, Spinner, Image } from 'react-bootstrap'
import MuhalikConfig from '../../sdk/muhalik.config'
import GlobalStyleSheet from '../../styleSheet'
import StickyBottomNavbar from '../components/customer/stick-bottom-navbar'
import { getDecodedTokenFromStorage, removeTokenFromStorage, getTokenFromStorage } from '../../sdk/core/authentication-service'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft, faUser, faUserPlus, faDownload, faSuitcase,
    faLanguage, faShoppingCart, faPowerOff, faHandHoldingUsd, faDollarSign, faTachometerAlt, faLock, faHome, faChevronRight, faBan
} from '@fortawesome/free-solid-svg-icons'
import {
    faUserCircle, faHeart, faImage, faThumbsUp, faClock
} from '@fortawesome/free-regular-svg-icons'


import AlertModal from '../components/alert-modal'
import Toolbar from '../components/toolbar'

import ManageAccount from '../components/profile/manage-account'
import MyProfile from '../components/profile/my-profile'
import Address from '../components/profile/address'
import ChangeProfilePicture from '../components/profile/change-profile-picture'

import ManageOrders from '../components/profile/manage-orders'
import PendingOrders from '../components/profile/pending-orders'
import DeliveredOrders from '../components/profile/delivered-orders'
import CancelledOrders from '../components/profile/cancelled-orders'


function Account() {
    const [token, setToken] = useState({ role: '', full_name: '', status: '' })
    const [undecoded_token, setUndecodedToken] = useState('')

    const [user, setUser] = useState('')
    const [view, setView] = useState('')
    const [cart_count, setCart_count] = useState(0)

    const [showAlertModal, setShowAlertModal] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')

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
    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        const _undecoded_token = await getTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
            setUndecodedToken(_undecoded_token)
            await getUser(_token._id)

            const count_url = MuhalikConfig.PATH + `/api/users/cart/${_token._id}`;
            await axios.get(count_url).then((res) => {
                setCart_count(res.data.data.length)
            }).catch((error) => {
            })
        }
    }
    async function getUser(id) {
        const user_url = MuhalikConfig.PATH + `/api/users/user/${id}`;
        await axios.get(user_url).then((res) => {
            setUser(res.data.data[0])
        }).catch((error) => {
        })
    }
    function handleUrlChange() {
        if (window.location.href == `${MuhalikConfig.PATH} + /user/account`) {
            setView('')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/account?my-profile`) {
            setView('my_profile')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/account?change-profile-picture`) {
            setView('change_picture')
            console.log('change_picture:', view)
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/account?shop-address` || window.location.href == `${MuhalikConfig.PATH} + /user/account?my-address`) {
            setView('address')
        }

        else if (window.location.href == `${MuhalikConfig.PATH} + /user/account?orders` && user.role == 'customer') {
            setView('manage_orders')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/account?pending-orders` && user.role == 'customer') {
            setView('pending_orders')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/account?delivered-orders` && user.role == 'customer') {
            setView('delivered_orders')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /user/account?cancelled-orders` && user.role == 'customer') {
            setView('cancelled_orders')
        } else {
            history.pushState(null, '', '/user/account')
            setView('')
        }
    }

    function handleShowAlert(msg) {
        alert('ghuss yas')
        setAlertMsg(msg)
        setShowAlertModal(true)
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

    function logout() {
        setLoading(true)
        removeTokenFromStorage(false)
        setLoading(false)
    }

    return (
        <div className='account'>
            <AlertModal
                onHide={(e) => setShowAlertModal(false)}
                show={showAlertModal}
                header={'Success'}
                message={alertMsg}
                iconname={faThumbsUp}
                color={'green'}
            />
            <Toolbar title={'Account'} />
            {view == '' ?
                <ListGroup >
                    <div className='w-100 p-1'></div>

                    {user == '' ?
                        <ListGroup.Item className='d-inline-flex align-items-center'>
                            <div className='d-inline-flex align-items-center mb-2'>
                                <FontAwesomeIcon icon={faUserCircle} style={styles.account_fontawesome} />
                                <Link href='login' className='label'><a>Login</a></Link>
                            </div>
                            <div className='d-inline-flex align-items-center'>
                                <div className='mr-auto label'>Don't have account? </div>
                                <Link href='signup' className='label align-items-center'><a> Register </a></Link>
                            </div>
                        </ListGroup.Item>
                        :
                        <>
                            <ListGroup.Item className='d-flex flex-column'>
                                <div className='d-inline-flex align-items-center'>
                                    <Image src={user.avatar} roundedCircle thumbnail fluid
                                        style={{ minWidth: '100px', maxWidth: '100px', minHeight: '100px', maxHeight: '100px' }} />
                                    <div style={{ fontSize: '14px', margin: 'auto' }}>
                                        <div >{user.full_name}</div>
                                        <div >{user.mobile}</div>
                                    </div>
                                </div>
                                <div className='d-inline-flex align-items-center'>
                                    <div className='mr-auto'></div>
                                    <Nav.Link className='p-0'
                                        onClick={() => { history.pushState(null, '', '/user/account?my-profile'), setView('my_profile') }}
                                    > View </Nav.Link>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item action className='list_item'
                                onClick={() => { history.pushState(null, '', `/user/account?${user.role == 'vendor' ? 'shop-address' : 'my-address'}`), setView('address') }}
                            >
                                <FontAwesomeIcon icon={faHome} style={styles.fontawesome} />
                                <div className='label'>{user.role == 'vendor' ? 'Shop Address' : 'My Address'}</div>
                                <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                            </ListGroup.Item>
                            <ListGroup.Item action className='list_item'
                                onClick={() => { history.pushState(null, '', '/user/account?change-profile-picture'), setView('change_picture') }}
                            >
                                <FontAwesomeIcon icon={faImage} style={styles.fontawesome} />
                                <div className='label'>Change Picture</div>
                                <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                            </ListGroup.Item>
                            <ListGroup.Item className='list_item' action onClick={() => Router.push('/vendor-signup')}>
                                <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
                                <div className='label'>Change Password</div>
                                <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                            </ListGroup.Item>
                            {user.role == 'customer' ?
                                <>
                                    <ListGroup.Item action className='list_item'
                                        onClick={() => { history.pushState(null, '', '/user/account?pending-orders'), setView('pending_orders') }}
                                    >
                                        <FontAwesomeIcon icon={faClock} style={styles.fontawesome} />
                                        <div className='label'>Pendings</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                    </ListGroup.Item>
                                    <ListGroup.Item action className='list_item'
                                        onClick={() => { history.pushState(null, '', '/user/account?delivered-orders'), setView('delivered_orders') }}
                                    >
                                        <FontAwesomeIcon icon={faThumbsUp} style={styles.fontawesome} />
                                        <div className='label'>Delivered</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                    </ListGroup.Item>
                                    <ListGroup.Item action className='list_item'
                                        onClick={() => { history.pushState(null, '', '/user/account?cancelled-orders'), setView('cancelled_orders') }}
                                    >
                                        <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
                                        <div className='label'>Cancelled</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                    </ListGroup.Item>
                                </>
                                :
                                null
                            }
                        </>
                    }

                    <div className='w-100 p-1'></div>
                    {user.role == 'customer' && <>
                        <ListGroup.Item className='list_item' action onClick={() => Router.push('/vendor-signup')}>
                            <FontAwesomeIcon icon={faSuitcase} style={styles.fontawesome} />
                            <div className='label'>My Orders</div>
                            <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                        </ListGroup.Item>
                        <div className='w-100 p-1'></div>
                    </>
                    }

                    {token.role == '' || token.role == 'customer' ?
                        <ListGroup.Item className='list_item' action onClick={() => Router.push('/vendor-signup')}>
                            <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
                            <div className='label'>Sell on Mahaalk</div>
                            <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                        </ListGroup.Item>
                        :
                        <ListGroup.Item className='list_item' action onClick={() => Router.push(dashboard_href)}>
                            <FontAwesomeIcon icon={faTachometerAlt} style={styles.fontawesome} />
                            <div className='label'>Go to Dashboard</div>
                            <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                        </ListGroup.Item>
                    }
                    <ListGroup.Item className='list_item' action onClick={() => Router.push('/vendor-signup')}>
                        <FontAwesomeIcon icon={faLanguage} style={styles.fontawesome} />
                        <div className='label'>Language & Currency</div>
                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                    </ListGroup.Item>

                    {token.role == 'customer' && <ListGroup.Item className='list_item' action>
                        <FontAwesomeIcon icon={faDownload} style={styles.fontawesome} />
                        <div className='label'>Get Mahaalk's App</div>
                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                    </ListGroup.Item>
                    }

                    <div className='w-100 p-1'></div>

                    {token.full_name != '' && <ListGroup.Item action onClick={logout} className='list_item'>
                        <FontAwesomeIcon icon={faPowerOff} style={styles.fontawesome} />
                        <div className='label'>
                            Logout
                        {loading && <Spinner size='sm' variant='primary' animation='grow' />}
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                    </ListGroup.Item>
                    }
                </ListGroup>
                :
                <>
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
                        token={undecoded_token}
                        _id={user._id}
                        role={user.role}
                        full_name={user.full_name}
                        mobile={user.mobile}
                        email={user.email}
                        showAlert={(msg) => handleShowAlert(msg)}
                        reloadUser={() => getUser(token._id)}
                    />}
                    {view == 'address' && <Address
                        token={undecoded_token}
                        _id={user._id}
                        role={user.role}
                        shop_name={user.shop_name}
                        address={user.address}
                        shop_address={user.shop_address}
                        countary={user.countary}
                        city={user.city}
                        showAlert={(msg) => handleShowAlert(msg)}
                        reloadUser={() => getUser(token._id)}
                    />}
                    {view == 'change_picture' && <ChangeProfilePicture
                        token={undecoded_token}
                        _id={user._id}
                        avatar={user.avatar}
                        showAlert={(msg) => handleShowAlert(msg)}
                        reloadUser={() => getUser(token._id)}
                    />}

                    {view == 'manage_orders' && <ManageOrders
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
                        setView={(value) => setView(value)}
                    />}
                    {view == 'pending_orders' && <PendingOrders
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
                    {view == 'delivered_orders' && <DeliveredOrders
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
                    {view == 'cancelled_orders' && <CancelledOrders
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
                </>
            }


            <div className='sticy-bottom-navbar'>
                <StickyBottomNavbar />
            </div>

            <style type="text/css">{`
                .account a {
                    font-size: 13px;
                }
                .account {
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .account .list_item {
                    padding-top: 4.5%;
                    padding-bottom: 4.5%;
                    display: inline-flex;
                    align-items: center;
                }
                .account .home-link{
                    font-size: 14px;
                    color: white;
                    margin-right: 0%;
                }
                .account .label{
                    align-self: center;
                    font-size: 14px;
                    color: gray;
                    margin-right: auto;
                }
                .account .sticy-bottom-navbar{
                    display: none;
                }

                @media (max-width: 767px){
                    .account .sticy-bottom-navbar{
                        display: block;
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
        </div>
    )
}

const styles = {
    nav_fontawesome: {
        color: 'white',
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
    },
    account_fontawesome: {
        marginRight: '7%',
        color: `${GlobalStyleSheet.primry_color}`,
        width: '40px',
        height: '40px',
        maxHeight: '40px',
        maxWidth: '40px',
    },
    fontawesome: {
        marginRight: '7%',
        color: `${GlobalStyleSheet.primry_color}`,
        width: '19px',
        height: '19px',
        maxHeight: '19px',
        maxWidth: '19px',
    },
    chervon_right_fontawesome: {
        color: 'grey',
        minWidth: '12px',
        minHeight: '12px',
        maxHeight: '12px',
        maxWidth: '12px',
    }
}
export default Account