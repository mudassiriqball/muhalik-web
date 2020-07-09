import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap'
import { useRouter } from 'next/router'
import SliderCarousel from '../components/customer/slider-carousel'
import Layout from '../components/customer/layout';
import useQueryInfiniteScroll from '../../use-query-infinite-scroll'
import useDimensions from "react-use-dimensions";
import Router from 'next/router'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import {
    removeTokenFromStorage,
    getDecodedTokenFromStorage
} from '../../sdk/core/authentication-service';
import axios from 'axios'
import MuhalikConfig from '../../sdk/muhalik.config'
import GlobalStyleSheet from '../../styleSheet'
import Link from 'next/link'


export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []

    const url = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url).then((response) => {
        categories_list = response.data.category.docs,
            sub_categories_list = response.data.sub_category.docs
    }).catch((error) => {
    })

    return {
        props: {
            categories_list,
            sub_categories_list
        },
    }
}

function Products(props) {
    const router = useRouter()
    const { id } = router.query
    const { name } = router.query
    const [ref, { x, y, width }] = useDimensions();
    const [_id, set_id] = useState(id)
    const [fieldName, setFieldName] = useState(name)
    const [query, setQuery] = useState(id)
    const [pageNumber, setPageNumber] = useState(1)
    const [token, setToken] = useState({ role: '', full_name: '' })

    let loadingCard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

    const { loading, error, products, hasMore } = useQueryInfiniteScroll(fieldName, query, pageNumber, isMobile ? 12 : 24)

    const observer = useRef()
    const lastProducrRef = useCallback((node) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        setFieldName(name)
        set_id(id)
        setQuery(id)
        setPageNumber(1)
        getData()
    }, [id, name]);

    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
        }
        if (name == 'sub_category') {
            props.sub_categories_list.forEach(element => {
                if (element._id == id) {
                    set_id(element.category_id)
                }
            })
        }

    }


    function logout() {
        if (removeTokenFromStorage()) {
            this.setState({ token: '' })
            Router.reload('/index');
            Router.replace('/index');
        } else {
            alert('Logout Failed')
        }
    }

    function handleProductClick(_id) {
        Router.push('/[name]/[id]/[product]', `/${name}/${id}/${_id}`)
    }
    return (
        <div className='id'>
            <Layout
                role={token.role || ''}
                name={token.full_name || ''}
                logout={logout}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                id={id}
            >
                <SliderCarousel id={id} categories_list={props.categories_list} />
                <Row noGutters className='main_row'>
                    <Col className='display_md_lg'>
                        <div className='m-3 align-self-center'>Related Categories</div>
                        {props.sub_categories_list && props.sub_categories_list.map(element =>
                            element.category_id == _id ?
                                <Link href='/[name]/[id]' as={`/sub_category/${element._id}`} key={element._id} >
                                    {id == element._id ?
                                        <a style={{ color: 'blue' }}>
                                            {element.value}
                                        </a>
                                        :
                                        <a >
                                            {element.value}
                                        </a>
                                    }
                                </Link>
                                :
                                null
                        )}
                    </Col>
                    <Col className='products_col'>
                        <Row noGutters className='id_row'>
                            {products && products.map((element, index) => {
                                if (products.length === index + 1) {
                                    return <Card onClick={() => handleProductClick(element._id)} ref={lastProducrRef} key={element._id} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                        {element.product_type == "simple-product" ?
                                            <div className='only_products_div'>
                                                <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                                            </div>
                                            :
                                            <div className='only_products_div'>
                                                <Image className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price}</label>
                                            </div>
                                        }
                                    </Card>
                                } else {
                                    return <Card key={element._id} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                        {element.product_type == "simple-product" ?
                                            <div className='only_products_div' onClick={() => handleProductClick(element._id)}>
                                                <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                                            </div>
                                            :
                                            <div className='only_products_div' onClick={() => handleProductClick(element._id)}>
                                                <Image className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price}</label>
                                            </div>
                                        }
                                    </Card>
                                }
                            })}
                        </Row>

                        {loading &&
                            <Row noGutters className='id_row'>
                                {loadingCard.map((element, index) =>
                                    isMobile ? index < 12 ?
                                        <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                            <div className='only_products_div'>
                                                <div className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src='' />
                                                <label className='my_label'>{'-'}</label>
                                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{'-'}</label>
                                            </div>
                                        </Card>
                                        :
                                        null
                                        :
                                        <Card as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                            <div className='only_products_div'>
                                                <div className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src='' />
                                                <label className='my_label'>{'-'}</label>
                                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{'-'}</label>
                                            </div>
                                        </Card>
                                )}
                            </Row>
                        }
                        <div>{error && 'Error...'}</div>
                    </Col>
                </Row>
            </Layout >
            <style type="text/css">{`
                .id{
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .id .main_row{
                    padding: 2% 3.7%;
                }
                .id .products_col{
                    background: white;
                }
                .id .display_md_lg{
                    max-width: 210px;
                    border-right: 0.5px solid lightgray;
                    background: white;
                }
                .id .display_md_lg a{
                    color: gray;
                    display: block;
                    margin: 1% 5%;
                    padding: 1% 3%;
                    font-size: 15px;
                    text-decoration: none;
                }
                .id .display_md_lg a:hover{
                    color: blue;
                    box-shadow: -1px 0px 10px 1px rgba(0,0,0,0.12);
                }
                
                .id .id_row{
                    padding: 2%;
                }
                .id .only_products_card{
                    padding: 0.5% 0%;
                    background: none;
                    border: none;
                }
                .id .my_label{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap; 
                    display: block;
                    padding: 0%;
                    margin: 0% 1%;
                    font-size: 13px;
                    cursor: pointer;
                } 
                .id .only_products_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 3px;
                    margin: 3%;
                    padding: 1%;
                    cursor: pointer;
                    background: white;
                    border: 0.01px solid lightgray;
                }
                .id .only_products_div:hover{
                    box-shadow: 0px 0px 10px 0.5px gray;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    margin: 0% 0% 4.4% 0%;
                }     
                .id .only_product_img{
                    margin-bottom: 5px;
                }    
                @media (max-width: 1199px) {
                    .id .only_products_card{
                        max-width: 20%;
                    }
                    .id .display_md_lg{
                        max-width: 150px;
                    }
                    .id .main_row{
                        padding: 2% 2.7%;
                    }
                }
                @media (max-width: 991px) {
                    .id .main_row{
                        padding: 2%;
                    }
                    .id .display_md_lg{
                        display: none;
                    }
                }
                @media (max-width: 767px) {
                    .id .only_products_card{
                        max-width: 25%;
                    }
                    .id .main_row{
                        padding: 2% 2% 16% 2%;
                    }
                }
                @media (max-width: 575px) {
                    .id .only_products_card{
                        max-width: 33.3333333333%;
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
        </div >
    )
}

export default Products