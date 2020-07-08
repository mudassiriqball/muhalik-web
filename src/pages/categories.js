import { Row, Col, Navbar, Nav, Card } from 'react-bootstrap'
import axios from 'axios'
import Router from 'next/router'
import MuhalikConfig from '../sdk/muhalik.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft, faCommentsDollar
} from '@fortawesome/free-solid-svg-icons'
import GlobalStyleSheet from '../styleSheet'
import CardAccordion from './components/card-accordion'
import Footer from './components/customer/footer'
import StickyBottomNavbar from './components/customer/stick-bottom-navbar'


function Categories({ categories_list, sub_categories_list }) {
    return (
        <div className='categories'>
            <Navbar bg="success" expand="lg" className='navbar'>
                <Nav.Link onClick={() => Router.back()} className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} style={styles.fontawesome} />
                </Nav.Link>
                <div className='mr-auto'></div>
                <Navbar.Brand style={{ color: 'white' }}>All Categories</Navbar.Brand>
                <div className='mr-auto'></div>
                <Nav.Link href="index" className='d-flex align-items-center'>
                    <div className='home-link'>Home</div>
                </Nav.Link>
            </Navbar>
            <Row className='_row'>
                {categories_list && categories_list.map((element, index) =>
                    <Col className='col' lg={4} md={4} sm={12} xs={12}>
                        <div><label className='category'>{element.value}</label></div>
                        <hr className='hr' />
                        {sub_categories_list && sub_categories_list.map((e, i) =>
                            element._id == e.category_id ?
                                <div><label className='sub-category'>{e.value}</label></div>
                                :
                                null
                        )}

                    </Col>
                )}
            </Row>
            <div className='footer'>
                <Footer />
            </div>
            <div className='sticy-bottom-navbar'>
                <StickyBottomNavbar />
            </div>
            <style type="text/css">{`
                .categories ._row{
                    margin: 2% 3.7%;
                    padding: 0%;
                    background: white;
                }
                .categories .col{
                    padding: 2%;
                    display: flex;
                    flex-direction: column;
                }
                .categories .hr{
                    margin: 0% 0% 1% 0%;
                    padding: 1% 0% 0% 0%;
                }

                .categories .home-link{
                    font-size: 14px;
                    color: white;
                }
                .categories .home-link:hover{
                    color: lightgray;
                }

                .categories .category{
                    color: blue;
                }
                .categories .category:hover{
                    cursor: pointer;
                    color: ${GlobalStyleSheet.primry_color};
                    text-decoration: underline;
                }

                .categories .sub-category{
                    font-size: 13px;
                    padding: 1% 0%;
                    color: #808080;
                }
               .categories  .sub-category:hover{
                    cursor: pointer;
                    color: ${GlobalStyleSheet.primry_color};
                    text-decoration: underline;
                }

                .categories{
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .categories .navbar{
                    margin: 0px;
                    padding: 0px;
                    align-items: center;
                    display: flex;
                }

                .categories .sticy-bottom-navbar{
                    display: none
                }
                .categories .footer{
                    display: block;
                }
                @media (main-width: 767px){
                    .categories ._row{
                        margin: 0%;
                        padding: 5%;
                    }
                    .categories .sticy-bottom-navbar{
                        display: block;
                    }
                    .categories .footer{
                        display: none;
                    }
                }
                @media (max-width: 767px){
                    .categories ._row{
                        margin: 2% 2% 16% 2%;
                    }
                    .categories .sticy-bottom-navbar{
                        display: block;
                    }
                    .categories .footer{
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps() {
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
    fontawesome: {
        color: 'white',
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
    },
}
export default Categories