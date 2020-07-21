import { Row, Col, Navbar, Nav, Image, ListGroup, Spinner } from 'react-bootstrap'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
import MuhalikConfig from '../../sdk/muhalik.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft, faUser, faUserPlus, faDownload, faSuitcase, faLanguage, faShoppingCart, faPowerOff, faHandHoldingUsd, faDollarSign, faTachometerAlt, faLock, faHome, faChevronRight, faBan
} from '@fortawesome/free-solid-svg-icons'
import {
    faUserCircle, faHeart, faImage, faThumbsUp, faClock
} from '@fortawesome/free-regular-svg-icons'

import GlobalStyleSheet from '../../styleSheet'
import StickyBottomNavbar from '../components/customer/stick-bottom-navbar'
import Toolbar from '../components/toolbar'
import { getDecodedTokenFromStorage, removeTokenFromStorage } from '../../sdk/core/authentication-service'

import React, { useState, useEffect } from 'react';

function Account() {
    const [token, setToken] = useState({ role: '', full_name: '', status: '' })
    const [user, setUser] = useState('')

    const [cart_count, setCart_count] = useState(0)
    const [loading, setLoading] = useState(false)
    const [dashboard_href, setdashboard_href] = useState('/')

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            const user_url = MuhalikConfig.PATH + `/api/users/user/${_token._id}`;
            await axios.get(user_url).then((res) => {
                setToken(res.data.data[0])
            }).catch((error) => {
            })

            const url = MuhalikConfig.PATH + `/api/users/cart/${_token._id}`;
            await axios.get(url).then((res) => {
                setCart_count(res.data.data.length)
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
        <div className='account'>
            <Toolbar title={'Account'} />
            <ListGroup >
                <div className='w-100 p-1'></div>

                {user == '' ?
                    <ListGroup.Item className='d-flex flex-column'>
                        <div className='list_item mb-2'>
                            <FontAwesomeIcon icon={faUserCircle} style={styles.account_fontawesome} />
                            <Link href='login' className='label'><a>Login</a></Link>
                        </div>
                        <div className='list_item'>
                            <div className='mr-auto label'>Don't have account? </div>
                            <Link href='signup' className='label align-items-center'><a> Register </a></Link>
                        </div>
                    </ListGroup.Item>
                    :
                    <>
                        <ListGroup.Item className='d-flex flex-column'>
                            <div className='list_item mb-2'>
                                <Image src={user.url} roundedCircle thumbnail fluid
                                    style={{ minWidth: '100px', maxWidth: '100px', minHeight: '100px', maxHeight: '100px' }} />
                                <div style={{ fontSize: '14px', margin: 'auto' }}>
                                    <div >{user.full_name}</div>
                                    <div >{user.mobile}</div>
                                </div>
                            </div>
                            <div className='list_item'>
                                <div className='mr-auto'></div>
                                <Link href='signup'><a> View </a></Link>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex flex-column'>
                            <div className='list_item mb-2'>
                                <FontAwesomeIcon icon={faHome} style={styles.fontawesome} />
                                <div className='label'>My Address</div>
                                <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex flex-column'>
                            <div className='list_item mb-2'>
                                <FontAwesomeIcon icon={faImage} style={styles.fontawesome} />
                                <div className='label'>Change Picture</div>
                                <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex flex-column'>
                            <div className='list_item mb-2'>
                                <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
                                <div className='label'>Change Password</div>
                                <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                            </div>
                        </ListGroup.Item>
                        {user.role == 'customer' ?
                            <>
                                <ListGroup.Item className='d-flex flex-column'>
                                    <div className='list_item mb-2'>
                                        <FontAwesomeIcon icon={faClock} style={styles.fontawesome} />
                                        <div className='label'>Pendings</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex flex-column'>
                                    <div className='list_item mb-2'>
                                        <FontAwesomeIcon icon={faThumbsUp} style={styles.fontawesome} />
                                        <div className='label'>Delivered</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex flex-column'>
                                    <div className='list_item mb-2'>
                                        <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
                                        <div className='label'>Cancelled</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                    </div>
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