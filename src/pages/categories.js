import { Row, Col, Navbar, Nav } from 'react-bootstrap'
import axios from 'axios'
import MuhalikConfig from '../sdk/muhalik.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft, faCommentsDollar
} from '@fortawesome/free-solid-svg-icons'

function Categories({ categories_list }) {
    console.log('cataffa:', categories_list)
    return (
        <div>
            {categories_list && categories_list.map((e, i) =>
                <div>{e.value}</div>
            )}
            <Navbar bg="success" expand="lg" className='navbar'>
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

export async function getStaticProps() {
    const url = MuhalikConfig.PATH + '/api/categories/categories';
    let categories_list = []
    await axios.get(url).then((response) => {
        categories_list = response.data.category.docs
    }).catch((error) => {
        console.log('Caterories Fetchig Error: ', error)
    })
    return {
        props: {
            categories_list,
        },
    }
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