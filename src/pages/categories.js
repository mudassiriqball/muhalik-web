import { Row, Col, Navbar, Nav, Card } from 'react-bootstrap'
import axios from 'axios'
import Router from 'next/router'
import MuhalikConfig from '../sdk/muhalik.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft, faCommentsDollar
} from '@fortawesome/free-solid-svg-icons'
import GlobalStyleSheet from '../styleSheet'
import Footer from './components/customer/footer'
import StickyBottomNavbar from './components/customer/stick-bottom-navbar'
import Toolbar from './components/toolbar'

import translate from '../i18n/translate'


export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []

    const url = MuhalikConfig.PATH + '/api/categories/categories';
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

function Categories({ categories_list, sub_categories_list }) {
    return (
        <div className='categories'>
            <Toolbar title={'Categories'} />
            <Row className='_row'>
                {categories_list && categories_list.map((element, index) =>
                    <Col key={index} className='col' lg={4} md={4} sm={12} xs={12}>
                        <div>
                            <label className='category' onClick={() => Router.push('/[category]', `/${element.value}`)}>{element.value}</label>
                        </div>
                        <hr className='hr' />
                        {sub_categories_list && sub_categories_list.map((e, i) =>
                            element._id == e.category_id ?
                                <div key={i}>
                                    <label className='sub-category' onClick={() => Router.push('/[category]/[sub_category]', `/${element.value}/${e.value}`)}>{e.value}</label>
                                </div>
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
                .categories{
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
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
                
                .categories .footer{
                    display: block;
                }
                .categories .sticy-bottom-navbar{
                    display: none;
                }

                @media (max-width: 767px){
                    .categories .sticy-bottom-navbar{
                        display: block;
                    }
                    .categories .footer{
                        display: none;
                    }
                    .categories ._row{
                        margin: 2% 2% 50px 2%;
                    }
                }
                @media (max-width: 575px){
                    .categories ._row{
                        margin: 1.5% 1.5% 50px 1.5%;
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

export default Categories