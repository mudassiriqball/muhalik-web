import { Row, Col, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons'

const Categories = (props) => {

    return (
        <div>
            <Navbar bg="success" expand="lg" clasName='navbar'>
                <Nav.Link href="#link" className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} style={styles.fontawesome} />
                </Nav.Link>
                <div className='mr-auto'></div>
                <Navbar.Brand style={{ color: 'white' }}>All Categories</Navbar.Brand>
                <div className='mr-auto'></div>
                <div className='mr-auto'></div>
            </Navbar>
            <style type="text/css">{`
                .navbar{
                    margin: 0px;
                    padding: 0px;
                    align-items: center;
                    display: flex;
                }
            `}</style>
        </div>
    )
}

const styles = {
    fontawesome: {
        color: 'white',
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
    },
}
export default Categories