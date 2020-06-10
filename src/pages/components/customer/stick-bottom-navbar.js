import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser, faHome, faTh, faStoreAlt
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const StickyBottomNavbar = () => {
    const [isProducts, setIsProducts] = React.useState(true)

    return (
        <>
            <Navbar bg="white" variant="dark" fixed="bottom" className='p-0 m-0'>
                <Nav className="d-inline-flex align-items-center w-100">
                    <div className='mr-auto'></div>
                    <Nav.Link href="#home" className='text-center mr-auto p-0 m-0'>
                        <FontAwesomeIcon icon={faHome} style={styles.fontawesome} />
                        <div className='label'>Home</div>
                    </Nav.Link>
                    <div className='mr-auto'></div>
                    <Nav.Link href="categories" className='text-center mr-auto p-0 m-0'>
                        <FontAwesomeIcon icon={faTh} style={styles.Categories_fontawesome} />
                        <div className='label'>Categories</div>
                    </Nav.Link>
                    <div className='mr-auto'></div>
                    {isProducts ?
                        <Nav.Link href="#home" onClick={() => setIsProducts(false)} className='text-center mr-auto p-0 m-0'>
                            <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                            <div className='label'>Products</div>
                        </Nav.Link>
                        :
                        <Nav.Link href="#home" onClick={() => setIsProducts(true)} className='text-center mr-auto p-0 m-0'>
                            <FontAwesomeIcon icon={faStoreAlt} style={styles.fontawesome} />
                            <div className='label'>Shops</div>
                        </Nav.Link>
                    }
                    <div className='mr-auto'></div>
                    <Nav.Link href="#home" className='text-center mr-auto p-0 m-0'>
                        <FontAwesomeIcon icon={faUser} style={styles.fontawesome} />
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
    fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
    },
    Categories_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
}
export default StickyBottomNavbar