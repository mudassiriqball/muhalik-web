import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Row, Col, Breadcrumb, Card, Image } from 'react-bootstrap'
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
import BreadcrumbRow from '../components/breadcrumb-row'
React.useLayoutEffect = React.useEffect

export async function getServerSideProps(context) {
    let slider_list = []
    let categories_list = []
    let sub_categories_list = []

    const url = MuhalikConfig.PATH + '/api/sliders/';
    await axios.get(url).then((res) => {
        slider_list = res.data.data
    }).catch((error) => {
    })

    const url_1 = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url_1).then((response) => {
        categories_list = response.data.category.docs,
            sub_categories_list = response.data.sub_category.docs
    }).catch((error) => {
    })

    return {
        props: {
            slider_list,
            categories_list,
            sub_categories_list
        },
    }
}

export default function Category(props) {
    const router = useRouter()
    const { category, sub_category } = router.query
    const [ref, { x, y, width }] = useDimensions();
    const [active_category_id, setCurrent_category_id] = useState(category)
    const [fieldName, setFieldName] = useState("sub-category")
    const [query, setQuery] = useState(sub_category)
    const [pageNumber, setPageNumber] = useState(1)
    const [token, setToken] = useState({ role: '', full_name: '' })
    const [cart_count, setCart_count] = useState(0)

    let loadingCard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

    const { loading, error, products, hasMore } = useQueryInfiniteScroll(fieldName, query, pageNumber, isMobile ? 12 : 24)

    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
            const url = MuhalikConfig.PATH + `/api/users/cart/${_token._id}`;
            await axios.get(url).then((res) => {
                setCart_count(res.data.data.length)
            }).catch((error) => {
            })
        }
    }

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
        setFieldName("sub-category")
        props.categories_list.forEach(element => {
            if (element.value == category) {
                setCurrent_category_id(element._id)
            }
        })
        setQuery(sub_category)
        setPageNumber(1)
    }, [sub_category]);



    function logout() {
        if (removeTokenFromStorage()) {
            this.setState({ token: '' })
            Router.reload('/index');
            Router.replace('/index');
        } else {
            alert('Logout Failed')
        }
    }

    function handleProductClick(element) {
        Router.push('/[category]/[sub_category]/[product]', `/${category}/${element.sub_category.value}/${element._id}`)
    }
    return (
        <div className='id'>
            <Layout
                role={token.role || ''}
                name={token.full_name || ''}
                logout={logout}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                active_category={category}
                active_sub_category={sub_category}
            >
                <SliderCarousel
                    active_category={category}
                    categories_list={props.categories_list}
                    slider_list={props.slider_list}
                />
                <Row noGutters className='main_row'>
                    <Row noGutters className='w-100'>
                        <BreadcrumbRow active={sub_category}>
                            <Breadcrumb.Item >
                                <Link href='/[category]' as={`/${category}`} >
                                    {category}
                                </Link>
                            </Breadcrumb.Item>
                        </BreadcrumbRow>
                    </Row>
                    <Row noGutters className='w-100'>
                        <Col className='display_md_lg'>
                            <div className='m-3 align-self-center'>Related Categories</div>
                            {props.sub_categories_list && props.sub_categories_list.map(element =>
                                element.category_id == active_category_id ?
                                    <Link href='/[category]/[sub_category]' as={`/${category}/${element.value}`} key={element._id} >
                                        {sub_category == element.value ?
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
                                        return <Card onClick={() => handleProductClick(element)} ref={lastProducrRef} key={element._id} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
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
                                                <div className='only_products_div' onClick={() => handleProductClick(element)}>
                                                    <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_image_link[0].url} />
                                                    <label className='my_label'>{element.product_name}</label>
                                                    <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                                                </div>
                                                :
                                                <div className='only_products_div' onClick={() => handleProductClick(element)}>
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