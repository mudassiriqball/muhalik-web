import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser, faHome, faTh, faStoreAlt
} from '@fortawesome/free-solid-svg-icons'
import {
    faUserCircle
} from '@fortawesome/free-regular-svg-icons'

import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const StickyBottomNavbar = () => {
    const [isProducts, setIsProducts] = React.useState(true)
    const [curentHref, setCurentHref] = React.useState('')
    React.useEffect(() => {
        if (window.location.href == 'http://localhost:5000/' || window.location.href == 'http://localhost:5000/index') {
            setCurentHref('index')
        } else if (window.location.href == 'http://localhost:5000/categories') {
            setCurentHref('categories')
        } else if (window.location.href == 'http://localhost:5000/account') {
            setCurentHref('account')
        }
    });
    return (
        <div className='stick_bottom_navbar'>
            <Navbar bg="white" fixed="bottom" className='p-0 m-0'>
                <Nav className="d-inline-flex align-items-center w-100">
                    <div className='mr-auto'></div>
                    <Nav.Link href="index" className='nav_link'
                        style={{
                            color: curentHref == 'index' ? `${GlobalStyleSheet.primry_color}` : 'gray'
                        }}
                    >
                        <FontAwesomeIcon icon={faHome} style={styles.fontawesome} />
                        Home
                    </Nav.Link>
                    <div className='mr-auto'></div>
                    <Nav.Link href="categories" className='nav_link'
                        style={{
                            color: curentHref == 'categories' ? `${GlobalStyleSheet.primry_color}` : 'gray'
                        }}
                    >
                        <FontAwesomeIcon icon={faTh} style={styles.Categories_fontawesome} />
                        Categories
                    </Nav.Link>
                    <div className='mr-auto'></div>
                    {isProducts ?
                        <Nav.Link href="#home" onClick={() => setIsProducts(false)} className='nav_link' style={{ color: 'gray' }}>
                            <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                            Products
                        </Nav.Link>
                        :
                        <Nav.Link href="#home" onClick={() => setIsProducts(true)} className='nav_link' style={{ color: 'gray' }}>
                            <FontAwesomeIcon icon={faStoreAlt} style={styles.fontawesome} />
                            Shops
                        </Nav.Link>
                    }
                    <div className='mr-auto'></div>
                    <Nav.Link href="account" className='nav_link'
                        style={{
                            color: curentHref == 'account' ? `${GlobalStyleSheet.primry_color}` : 'gray'
                        }}
                    >
                        <FontAwesomeIcon icon={faUserCircle} style={styles.fontawesome} />
                        Account
                    </Nav.Link>
                </Nav>
            </Navbar>
            <style type="text/css">{`
                .stick_bottom_navbar .nav_link{
                    margin-right: auto;
                    font-size: 12px;
                    padding: 1%;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    )
}

const styles = {
    fontawesome: {
        width: '23px',
        height: '23px',
        maxHeight: '23px',
        maxWidth: '23px',
    },
    Categories_fontawesome: {
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
    },
}
export default StickyBottomNavbar