
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
    faDownload, faLanguage, faPowerOff, faDollarSign,
    faTachometerAlt, faLock, faHome, faChevronRight, faBan, faTimes
} from '@fortawesome/free-solid-svg-icons'
import { faUserCircle, faImage, faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons'


import Toolbar from '../components/toolbar'
import translate from '../../i18n/translate'


function Account() {
    const [token, setToken] = useState({ role: '', full_name: '', status: '' })
    const [undecoded_token, setUndecodedToken] = useState('')

    const [user, setUser] = useState('')
    const [cart_count, setCart_count] = useState(0)

    const [loading, setLoading] = useState(false)
    const [dashboard_href, setdashboard_href] = useState('/')

    useEffect(() => {
        getData()
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
        const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${id}`;
        await axios.get(user_url).then((res) => {
            setUser(res.data.data[0])
        }).catch((error) => {
        })
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
            <Toolbar title={'Account'} />
            <ListGroup style={{ marginBottom: '50px' }}>
                <div className='w-100 p-1'></div>

                {token == '' ?
                    <ListGroup.Item className='d-flex flex-column'>
                        <div className='d-inline-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faUserCircle} style={styles.account_fontawesome} />
                            <Link href='/login'><a>{translate('login')}</a></Link>
                        </div>
                        <div className='d-inline-flex align-items-center'>
                            <div className='mr-auto label'> {translate('dont_have_account')} </div>
                            <Link href='/signup'><a> {translate('signup')} </a></Link>
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
                                <Nav.Link className='p-0' onClick={() => Router.push('/user/account/personel-info')}> {translate('view')} </Nav.Link>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item action className='list_item' onClick={() => Router.push('/user/account/my-address')}>
                            <FontAwesomeIcon icon={faHome} style={styles.fontawesome} />
                            <div className='label'>{user.role == 'vendor' ? translate('shop_address') : translate('address')}</div>
                            <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                        </ListGroup.Item>
                        <ListGroup.Item action className='list_item' onClick={() => Router.push('/user/account/change-picture')}>
                            <FontAwesomeIcon icon={faImage} style={styles.fontawesome} />
                            <div className='label'> {translate('change_picture')}</div>
                            <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                        </ListGroup.Item>
                        <ListGroup.Item className='list_item' action onClick={() => Router.push('/reset-password')}>
                            <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
                            <div className='label'> {translate('change_password')}</div>
                            <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                        </ListGroup.Item>

                        <div className='w-100 p-1'></div>
                        {token.role == 'customer' ?
                            <>
                                <ListGroup.Item disabled>{translate('my_orders')}</ListGroup.Item>
                                <ListGroup.Item action className='list_item' onClick={() => Router.push('/user/account/[orders]', `/user/account/pending`)} >
                                    <FontAwesomeIcon icon={faClock} style={styles.fontawesome} />
                                    <div className='label'>{translate('pending')}</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                </ListGroup.Item>
                                <ListGroup.Item action className='list_item' onClick={() => Router.push('/user/account/[orders]', `/user/account/delivered`)} >
                                    <FontAwesomeIcon icon={faThumbsUp} style={styles.fontawesome} />
                                    <div className='label'>{translate('delivered')}</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                </ListGroup.Item>
                                <ListGroup.Item action className='list_item' onClick={() => Router.push('/user/account/[orders]', `/user/account/cancelled`)}>
                                    <FontAwesomeIcon icon={faTimes} style={styles.fontawesome} />
                                    <div className='label'>{translate('cancelled')}</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                </ListGroup.Item>
                                <ListGroup.Item action className='list_item' onClick={() => Router.push('/user/account/[orders]', `/user/account/returned`)}>
                                    <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
                                    <div className='label'>{translate('returned')}</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                                </ListGroup.Item>
                            </>
                            :
                            null
                        }
                    </>
                }

                <div className='w-100 p-1'></div>

                {token.role == '' || token.role == 'customer' ?
                    <ListGroup.Item className='list_item' action onClick={() => Router.push('/vendor-signup')}>
                        <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
                        <div className='label'>{translate('sell_on_mahaalk')}</div>
                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                    </ListGroup.Item>
                    :
                    <ListGroup.Item className='list_item' action onClick={() => Router.push(dashboard_href)}>
                        <FontAwesomeIcon icon={faTachometerAlt} style={styles.fontawesome} />
                        <div className='label'>{translate('go_to_dashbord')}</div>
                        <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                    </ListGroup.Item>
                }
                <ListGroup.Item className='list_item' action onClick={() => Router.push('/vendor-signup')}>
                    <FontAwesomeIcon icon={faLanguage} style={styles.fontawesome} />
                    <div className='label'> {translate('language_currency')}</div>
                    <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                </ListGroup.Item>

                {token.role == 'customer' && <ListGroup.Item className='list_item' action>
                    <FontAwesomeIcon icon={faDownload} style={styles.fontawesome} />
                    <div className='label'>{translate('get_app')}</div>
                    <FontAwesomeIcon icon={faChevronRight} style={styles.chervon_right_fontawesome} />
                </ListGroup.Item>
                }

                <div className='w-100 p-1'></div>

                {token.full_name != '' && <ListGroup.Item action onClick={logout} className='list_item'>
                    <FontAwesomeIcon icon={faPowerOff} style={styles.fontawesome} />
                    <div className='label'>
                        {translate('logout')}
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
                .account {
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    padding: 0px;
                    margin: 0px;
                }
                .account a {
                    font-size: 13px;
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