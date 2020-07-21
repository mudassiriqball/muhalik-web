import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser, faHome, faTh, faStoreAlt, faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import {
    faUserCircle
} from '@fortawesome/free-regular-svg-icons'

import { faProductHunt, faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';
import MuhalikConfig from '../../../sdk/muhalik.config'

const StickyBottomNavbar = () => {
    const [isSticky, setSticky] = React.useState(true);
    const [curentHref, setCurentHref] = React.useState('')
    let curr = 0

    React.useEffect(() => {
        curr = window.scrollY
        window.addEventListener('scroll', e => handleScroll(e));

        return () => {
            window.removeEventListener('scroll', e => handleScroll(e));
        };
    }, []);
    const handleScroll = (e) => {
        const window = e.currentTarget;
        if (curr > window.scrollY) {
            setSticky(true)
        } else if (curr < window.scrollY) {
            setSticky(false)
        }
        curr = window.scrollY
    };

    React.useEffect(() => {
        if (window.location.href == `${MuhalikConfig.PATH} + /` || window.location.href == `${MuhalikConfig.PATH} + /index`) {
            setCurentHref('index')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /categories`) {
            setCurentHref('categories')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /cart`) {
            setCurentHref('cart')
        } else if (window.location.href == `${MuhalikConfig.PATH} + /account`) {
            setCurentHref('account')
        }
    });
    return (
        <div className='stick_bottom_navbar'>
            <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`}>
                <Navbar bg="white" className='sticky-inner'>
                    <Nav className="d-inline-flex align-items-center w-100">
                        <div className='mr-auto'></div>
                        <Nav.Link href="index" className='nav_link'
                            style={{
                                color: curentHref == 'index' ? `${GlobalStyleSheet.primry_color}` : '#a6a6a6'
                            }}
                        >
                            <FontAwesomeIcon icon={faHome} style={styles.fontawesome} />
                        Home
                    </Nav.Link>
                        <div className='mr-auto'></div>
                        <Nav.Link href="categories" className='nav_link'
                            style={{
                                color: curentHref == 'categories' ? `${GlobalStyleSheet.primry_color}` : '#a6a6a6'
                            }}
                        >
                            <FontAwesomeIcon icon={faBuromobelexperte} style={styles.Categories_fontawesome} />
                        Categories
                    </Nav.Link>
                        <div className='mr-auto'></div>
                        <Nav.Link href="/cart" className='nav_link'
                            style={{
                                color: curentHref == 'cart' ? `${GlobalStyleSheet.primry_color}` : '#a6a6a6'
                            }}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} style={styles.fontawesome} />
                            Cart
                        </Nav.Link>

                        <div className='mr-auto'></div>
                        <Nav.Link href="/user/account" className='nav_link'
                            style={{
                                color: curentHref == 'account' ? `${GlobalStyleSheet.primry_color}` : '#a6a6a6'
                            }}
                        >
                            <FontAwesomeIcon icon={faUserCircle} style={styles.fontawesome} />
                        Account
                    </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <style type="text/css">{`
                .stick_bottom_navbar .sticky-wrapper {
                    position: relative;
                    background: white;
                }
                .sticky-inner{
                    padding: 0%;
                }
               .stick_bottom_navbar .sticky .sticky-inner {
                    background: white;
                    position: fixed;
                    align-items: center;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000000;
                }

                .stick_bottom_navbar .nav_link{
                    padding: 1% 0% 0.2% 0%;
                    margin-right: auto;
                    font-size: 11px;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
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
    fontawesome: {
        width: '25px',
        height: '25px',
        maxHeight: '25px',
        maxWidth: '25px',
    },
    Categories_fontawesome: {
        width: '25px',
        height: '25px',
        maxHeight: '25px',
        maxWidth: '25px',
    },
}
export default StickyBottomNavbar