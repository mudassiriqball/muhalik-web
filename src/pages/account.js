import { Row, Col, Navbar, Nav, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
import MuhalikConfig from '../sdk/muhalik.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft, faUser, faUserPlus, faDownload, faSuitcase, faLanguage, faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import {
    faUserCircle, faHeart
} from '@fortawesome/free-regular-svg-icons'

import GlobalStyleSheet from '../styleSheet'
import CardAccordion from './components/card_accordion'
import Footer from './components/customer/footer'
import StickyBottomNavbar from './components/customer/stick-bottom-navbar'


function Account({ categories_list, sub_categories_list }) {

    return (
        <div className='account'>
            <Navbar bg="success" expand="lg" className='navbar'>
                <Nav.Link onClick={() => Router.back()} className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} style={styles.nav_fontawesome} />
                </Nav.Link>
                <div className='mr-auto'></div>
                <Navbar.Brand style={{ color: 'white' }}> Account </Navbar.Brand>
                <div className='mr-auto'></div>
                <Nav.Link href="index" className='d-flex align-items-center'>
                    <div className='home-link'>Home</div>
                </Nav.Link>
            </Navbar>


            <ListGroup variant="flush">
                <div className='w-100 p-1'></div>
                <ListGroup.Item className='d-flex flex-column'>
                    <div className='d-inline-flex align-items-center mb-2'>
                        <FontAwesomeIcon icon={faUserCircle} style={styles.account_fontawesome} />
                        <Link href='login' className='label'><a>Login</a></Link>
                    </div>
                    <div className='d-inline-flex align-items-center'>
                        <div className='mr-auto label'>Don't have account? </div>
                        <Link href='signup' className='label align-items-center'><a> Register </a></Link>
                    </div>
                </ListGroup.Item>
                <div className='w-100 p-1'></div>
                <ListGroup.Item className='d-inline-flex align-items-center'>
                    <FontAwesomeIcon icon={faSuitcase} style={styles.fontawesome} />
                    <div className='label'>My Orders</div>
                </ListGroup.Item>
                <ListGroup.Item className='d-inline-flex align-items-center'>
                    <FontAwesomeIcon icon={faShoppingCart} style={styles.fontawesome} />
                    <div className='label'>Cart</div>
                </ListGroup.Item>
                <ListGroup.Item className='d-inline-flex align-items-center'>
                    <FontAwesomeIcon icon={faHeart} style={styles.fontawesome} />
                    <div className='label'>Wish List</div>
                </ListGroup.Item>
                <div className='w-100 p-1'></div>
                <ListGroup.Item className='d-inline-flex align-items-center'>
                    <FontAwesomeIcon icon={faLanguage} style={styles.fontawesome} />
                    <div className='label'>Language & Currency</div>
                </ListGroup.Item>
                <ListGroup.Item className='d-inline-flex align-items-center'>
                    <FontAwesomeIcon icon={faDownload} style={styles.fontawesome} />
                    <div className='label'>Get Mahaalk's App</div>
                </ListGroup.Item>
            </ListGroup>


            <div className='sticy-bottom-navbar'>
                <StickyBottomNavbar />
            </div>

            <style type="text/css">{`
                .account{
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
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
                }
                .account .sticy-bottom-navbar{
                    display: none
                }
                @media (max-width: 767px){
                    .account. sticy-bottom-navbar{
                        display: block;
                    }
                }
            `}</style>
        </div>
    )
}

export async function getStaticProps() {
    const url = MuhalikConfig.PATH + '/api/categories/categories';
    let categories_list = []
    let sub_categories_list = []
    await axios.get(url).then((response) => {
        categories_list = response.data.category.docs,
            sub_categories_list = response.data.sub_category.docs
    }).catch((error) => {
        console.log('Caterories Fetchig Error: ', error)
    })
    return {
        props: {
            categories_list,
            sub_categories_list
        },
    }
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
}
export default Account