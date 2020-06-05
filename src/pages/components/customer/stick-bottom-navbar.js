import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faUserPlus, faLanguage, faPowerOff, faUser,
    faCartPlus, faHandsHelping, faPen, faSignOutAlt, faGlobe,
    faLuggageCart, faFileInvoiceDollar, faListAlt, faEdit,
    faStoreAlt, faChevronDown, faChevronRight, faListUl, faHome
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const StickyBottomNavbar = () => {
    return (
        <>
            <Navbar bg="white" variant="dark" fixed="bottom" className='p-0 m-0'>
                <Nav className="d-inline-flex align-items-center w-100">
                    <div className='mr-auto'></div>
                    <Nav.Link href="#home" className='text-center mr-auto p-0 m-0'>
                        <FontAwesomeIcon icon={faHome} style={styles.nav_fontawesome} />
                        <div className='label'>Home</div>
                    </Nav.Link>
                    <div className='mr-auto'></div>

                    <Nav.Link href="#home" className='text-center mr-auto p-0 m-0'>
                        <FontAwesomeIcon icon={faHome} style={styles.nav_fontawesome} />
                        <div className='label'>Home</div>
                    </Nav.Link>
                    <div className='mr-auto'></div>

                    <Nav.Link href="#home" className='text-center mr-auto p-0 m-0'>
                        <FontAwesomeIcon icon={faUser} style={styles.nav_fontawesome} />
                        <div className='label'>Account</div>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <style jsx>{`
                .label {
                    font-size: 13px;
                    color: ${GlobalStyleSheet.admin_primry_color};
                    p-0;
                    m-0
                }
                .label:hover{
                    color: ${GlobalStyleSheet.primry_color},
                }
            `}</style>
        </>
    )
}

const styles = {
    nav_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
        margin: '0px',
        padding: '0%'
    }
}
export default StickyBottomNavbar