import React, { Component, useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link'
import useDimensions from "react-use-dimensions";
React.useLayoutEffect = React.useEffect;
import { Card, Row, Col, Form, Image, Nav, Button } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Carousel from "react-multi-carousel"
import MuhalikConfig from '../../../sdk/muhalik.config'
import axios from 'axios'
import useInfiniteScroll from '../../../use-infinite-scroll'
import useAllProductsInfiniteScroll from '../../../use-all-products-infinite-scroll.js'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import Router from 'next/router'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        slidesToSlide: 4,
        items: 4
    },
    tablet: {
        breakpoint: { max: 1124, min: 992 },
        slidesToSlide: 3,
        items: 3
    },
    ttablet: {
        breakpoint: { max: 992, min: 464 },
        slidesToSlide: 4,
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        slidesToSlide: 3,
        items: 3
    }
};

const Home = (props) => {
    const [ref, { x, y, width }] = useDimensions();


    return (
        <div className='home'>
            <Row noGutters style={{ marginBottom: '70px' }}>
                <Col lg={6} md={12} sm={12} xs={12} style={{ height: '100%' }}>
                    <Card className='_card'>
                        <Card.Header className='card_header'>
                            <div className='mr-auto' >New Arrivals</div>
                            <Link href='/products/[component]' as={`/products/new-arrival`}><a>Show More</a></Link>
                        </Card.Header>
                        <Card.Body className='card_body'>
                            <Carousel
                                swipeable={props.deviceType == "mobile" || props.deviceType == "ttablet" ? true : false}
                                draggable={props.deviceType == "mobile" || props.deviceType == "ttablet" ? true : false}
                                responsive={responsive}
                                keyBoardControl={true}
                                ssr={false}
                                customTransition="transform 1000ms ease-in-out"
                                transitionDuration={800}
                                infinite={true}
                                removeArrowOnDeviceType={["mobile"]}
                            >
                                {props.new_products_list && props.new_products_list.map((element, index) =>
                                    <Card key={element._id} className="product_card">
                                        {element.product_type == "simple-product" ?
                                            <div className='card_div' onClick={() => Router.push('/[name]/[id]/[product]', `/products/new-arrival/${element._id}`)}>
                                                {element.product_image_link.map((e, i) =>
                                                    i == 0 ?
                                                        <Image className='img' ref={ref}
                                                            style={{ maxHeight: width + 20 || '100px', minHeight: width + 20 || '100px' }}
                                                            src={e.url} />
                                                        :
                                                        null
                                                )}
                                                <label className='my_label'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto my_label'><span style={{ color: 'green', fontSize: '13px', padding: '0%' }} >Rs.</span>{element.product_price}</label>
                                                    <div className="text_animation pr-1">NEW</div>
                                                </div>
                                            </div>
                                            :
                                            <div className='card_div' onClick={() => Router.push('/[name]/[id]/[product]', `/products/new-arrival/${element._id}`)}>
                                                <Image className='img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto my_label'><span style={{ color: 'green', fontSize: '13px', padding: '0%' }} >Rs.</span>{element.product_variations[0].price || '-'}</label>
                                                    <div className="text_animation pr-1">NEW</div>
                                                </div>
                                            </div>

                                        }
                                    </Card>
                                )}
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12} style={{ height: '100%' }}>
                    <Card className='_card'>
                        <Card.Header className='card_header'>
                            <div className='mr-auto' >Top Ranking</div>
                            <Link href=''><a>Show More</a></Link>
                        </Card.Header>
                        <Card.Body className='card_body'>
                            <Carousel
                                swipeable={props.deviceType == "mobile" || props.deviceType == "ttablet" ? true : false}
                                draggable={props.deviceType == "mobile" || props.deviceType == "ttablet" ? true : false}
                                responsive={responsive}
                                ssr={false}
                                keyBoardControl={true}
                                customTransition="transform 1000ms ease-in-out"
                                transitionDuration={800}
                                infinite={true}
                                removeArrowOnDeviceType={["mobile"]}
                            >
                                {props.top_ranking_products_list && props.top_ranking_products_list.map((element, index) =>
                                    <Card key={element._id} className="product_card">
                                        {element.product_type == "simple-product" ?
                                            <div className='card_div' onClick={() => Router.push('/[name]/[id]/[product]', `/products/top-ranking/${element._id}`)}>
                                                {index == 0 &&
                                                    <Image className='img' ref={ref}
                                                        style={{ maxHeight: width + 20 || '100px', minHeight: width + 20 || '100px' }}
                                                        src={element.product_image_link.url} />
                                                }
                                                {element.product_image_link.map((e, i) =>
                                                    i == 0 ?
                                                        <Image className='img' ref={ref}
                                                            style={{ maxHeight: width + 20 || '100px', minHeight: width + 20 || '100px' }}
                                                            src={e.url} />
                                                        :
                                                        null
                                                )}
                                                <label className='my_label'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto my_label'><span style={{ color: 'green', fontSize: '13px', padding: '0%' }} >Rs.</span>{element.product_price}</label>
                                                    <div className="text_animation pr-1">TOP</div>
                                                </div>
                                            </div>
                                            :
                                            <div className='card_div' onClick={() => Router.push('/[name]/[id]/[product]', `/products/top-ranking/${element._id}`)}>
                                                <Image className='img' style={{ maxHeight: width + 20 || '100px', minHeight: width + 20 || '100px' }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto my_label'><span style={{ color: 'green', fontSize: '13px', padding: '0%' }} >Rs.</span>{element.product_variations[0].price || '-'}</label>
                                                    <div className="text_animation pr-1">TOP</div>
                                                </div>
                                            </div>

                                        }
                                    </Card>
                                )}
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {props.categories_list && props.categories_list.map((element, index) =>
                element.value == 'Baby & Toys' || element.value == 'Women Fashion' || element.value == 'Electronics' ?
                    <CategoryCard
                        key={element._id}
                        element={element}
                    />
                    :
                    null
            )}
            <OnlyProducts />

            <style type="text/css">
                {`
                    .home{
                        padding: 0.5% 4%;
                        margin-top: 10px;
                        z-index: 10;
                    }
                    .home .product_card{
                        border: none;
                        border-radius: 5px;
                    }
                    .home .product_card .card_div{
                        display: flex;
                        flex-direction: column;
                        border-radiud: 3px;
                        font-size: 13px;
                        margin: 5px;
                        padding: 5px 5px 0px 5px;
                        cursor: pointer;
                        background: ${GlobalStyleSheet.body_color};
                    }
                    .home .product_card .card_div:hover{
                        box-shadow: 0px 0px 10px 0.5px lightgray;
                        transition-timing-function: ease-in;
                        transition: 0.5s;
                        margin: 4px;
                    }
                    .home .product_card .img{
                        margin-bottom: 5px;
                        min-width: 100%;
                        max-width: 100%;
                        background: white;
                    }

                    .home ._card{
                        margin: 1%;
                        border: none;
                        border-radius: 4px;
                    }
                    .home .card_header{
                        display: flex;
                        align-items: center;
                        border: none;
                        background: none;
                        padding-bottom: 0%;
                        font-size: 14px;
                        color: gray
                    }
                    .home .card_header a{
                        font-size: 13px;
                    }
                    .home .card_header:hover{
                        color: green;
                        cursor: pointer;
                    }
                    .home .card_body{
                        padding: 1%;
                    }

                    .home .text_animation{
                        animation: newmove 5s infinite;
                        color: red;
                        font-size: 10px;
                        margin: 0%;
                    }
                    @keyframes newmove {
                        50% {text-shadow: 0px -8px 3px red;}
                    }

                    .my_label{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap; 
                        display: block;
                        padding: 0%;
                        margin: 0% 1%;
                        font-size: 13px;
                        cursor: pointer;
                    } 

                    .home .only_products_row{
                        background: yellow;
                    }
                    @media (max-width: 1199px) {
                        .home{
                            padding: 2%;
                        }
                    }
                    @media (max-width: 767px) {
                        .home{
                            padding: 1%;
                        }
                    }
                `}
            </style>
        </div >
    );
}


function CategoryCard(props) {
    const [ref, { x, y, width }] = useDimensions();

    const [fieldName, setFieldName] = useState("category")
    const [query, setQuery] = useState(null)
    const [pageNumber, setPageNumber] = useState("1")
    const [limit, setLimit] = useState("5")
    const { loading, error, products } = useInfiniteScroll(fieldName, query, pageNumber, limit)
    const observer = useRef()
    const lastProducrRef = useCallback((node) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setQuery(props.element._id)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])
    return (
        <div className='CategoryCard' ref={lastProducrRef}>
            <Card as={Row} className='category_card'>
                <Card.Header className='d-inline-flex align-items-center'>
                    <Link href='' href='/[name]/[id]' as={`/category/${props.element._id}`}>
                        <a style={{ fontSize: '13px', width: '100%' }} className='d-inline-flex align-items-center'>
                            <label className='mr-auto category_heading' >{props.element.value}</label>
                            {' Show More'}
                        </a>
                    </Link>
                </Card.Header>
                <Card.Body className='category_card_body'>
                    <Row ref={ref} noGutters>
                        <Image src={props.element.url} className='category_img_lg_md'
                            style={{ maxHeight: width / 4.5 || '250px', minHeight: width / 4.5 || '250px' }}
                        />
                        <Image src={props.element.url} className='category_img_sm_xs'
                            style={{ maxHeight: width / 3 || '250px', minHeight: width / 3 || '250px' }}
                        />
                    </Row>
                    <Row noGutters className='box_shadow'>
                        {products && products.map((element, i) =>
                            isMobile ?
                                i < 6 ?
                                    <CategoryProducts key={element._id} element={element} loading={loading} />
                                    :
                                    null
                                :
                                <CategoryProducts key={element._id} element={element} loading={loading} />
                        )}
                    </Row>
                    {loading &&
                        <Row noGutters className='box_shadow'>
                            <Loading />
                        </Row>
                    }
                </Card.Body>
            </Card>

            <style type="text/css">{`
                .CategoryCard .category_card{
                    margin: 0% 0.5%;
                    border: none;
                    border-radius: 5px;
                    background: #adebbb;
                }
                .CategoryCard .category_heading{
                    font-size: 20px;
                    padding: 0%;
                    margin: 0%;
                }
                .CategoryCard .category_card_body{
                    padding: 1% 1% 2% 1%;
                    margin: 0%;
                }
                
                .CategoryCard .category_img_lg_md{
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    max-width: 100%;
                    min-width: 100%;
                }
                .CategoryCard .category_img_sm_xs{
                    display: none;
                }

                .CategoryCard .box_shadow{
                    padding: 1% 0%;
                    background: white;
                    background: #adebbb;
                }
                .CategoryCard .box_shadow:hover{
                    box-shadow: 0px 0px 10px 0px blue;
                }

                @media (max-width: 767px) {
                    .CategoryCard .category_heading{
                        font-size: 16px;
                    }
                    .CategoryCard .category_img_lg_md{
                        display: none;
                    }
                    .CategoryCard .category_img_sm_xs{
                        display: block;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                        max-width: 100%;
                        min-width: 100%;
                    }
                }
            `}</style>
        </div >
    )
}

function CategoryProducts(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <Card as={Col} lg={2} md={3} sm={3} xs={4} className="category_product_card">
            {props.element.product_type == "simple-product" ?
                <div className='category_card_div' onClick={() => Router.push('/[name]/[id]/[product]', `/sub_category/${props.element.sub_category.value}/${props.element._id}`)}>
                    {props.element.product_image_link.map((e, i) =>
                        i == 0 ?
                            <Image ref={ref} className='category_product_img'
                                style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }}
                                src={e.url} />
                            :
                            null
                    )}
                    <label className='my_label'>{props.element.product_name}</label>
                    <label className='mr-auto my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{props.element.product_price}</label>
                </div>
                :
                <div className='category_card_div' onClick={() => Router.push('/[name]/[id]/[product]', `/sub_category/${props.element.sub_category.value}/${props.element._id}`)}>
                    <Image ref={ref} className='category_product_img'
                        style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }}
                        src={props.element.product_variations[0].image_link[0].url} />
                    <label className='my_label'>{props.element.product_name}</label>
                    <label className='mr-auto my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{props.element.product_variations[0].price}</label>
                </div>
            }
            <style type="text/css">{`
                .category_product_card{
                    border: none;
                    border-radius: 5px;
                    background: #adebbb;
                }
                .category_product_card .category_card_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 5px;
                    margin: 2%;
                    padding: 1%;
                    cursor: pointer;
                    background: white;
                    border: 4px solid #4d4dff;
                }
                .category_product_card .category_card_div:hover{
                    box-shadow: 0px 0px 8px 0px blue;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    margin: 0% 0.5% 4% 0.5%;
                }
                .category_product_card .category_product_img{
                    margin-bottom: 5px;
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                }

                @media (max-width: 767px){
                    .category_product_card .category_card_div{
                        border: 2px solid #4d4dff;
                    }
                }
                 @media (min-width: 1200px) {
                    .category_product_card{
                        max-width: 14.285714285714285714285714285714%;
                    }
                }
            `}</style>
        </Card>
    )
}

function Loading(props) {
    const [ref, { x, y, width }] = useDimensions();
    let loadingCard = ['0', '1', '2', '3', '4', '5', '6']

    return (
        <>
            {loadingCard.map((element, index) =>
                <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='category_product_card'>
                    <div className='category_card_div'>
                        <div className='category_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src='' />
                        <label className='my_label'>{'-'}</label>
                        <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{'-'}</label>
                    </div>
                </Card>
            )}
            <style type="text/css">{`
                .category_product_card{
                    border: none;
                    border-radius: 5px;
                    background: #adebbb;
                }
                .category_product_card .category_card_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 5px;
                    margin: 2%;
                    padding: 1%;
                    cursor: pointer;
                    background: white;
                    border: 4px solid #4d4dff;
                }
                .category_product_card .category_card_div:hover{
                    box-shadow: 0px 0px 8px 0px blue;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    margin: 0% 0.5% 4% 0.5%;
                }
                .category_product_card .category_product_img{
                    margin-bottom: 5px;
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                }

                @media (max-width: 767px){
                    .category_product_card .category_card_div{
                        border: 2px solid #4d4dff;
                    }
                }
                 @media (min-width: 1200px) {
                    .category_product_card{
                        max-width: 14.285714285714285714285714285714%;
                    }
                }
            `}</style>
        </>
    )
}


function OnlyProducts(props) {
    const [ref, { x, y, width }] = useDimensions();

    const [_id, set_id] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    let loadingCard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

    const { loading, error, products, hasMore } = useAllProductsInfiniteScroll(pageNumber, isMobile ? 12 : 24)

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
        setPageNumber(1)
    }, []);
    return (
        <div className='only_products'>
            <label className='header'>You May Like</label>
            <Row noGutters>
                {products && products.map((element, index) =>
                    <Card key={element._id} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                        {element.product_type == "simple-product" ?
                            <div className='only_products_div' onClick={() => Router.push('/[name]/[id]/[product]', `/sub_category/${element.sub_category.value}/${element._id}`)}>
                                {element.product_image_link.map((e, i) =>
                                    i == 0 ?
                                        <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={e.url} />
                                        :
                                        null
                                )}
                                <label className='my_label'>{element.product_name}</label>
                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                            </div>
                            :
                            <div className='only_products_div' onClick={() => Router.push('/[name]/[id]/[product]', `/sub_category/${element.sub_category.value}/${element._id}`)}>
                                <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                <label className='my_label'>{element.product_name}</label>
                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price}</label>
                            </div>
                        }
                    </Card>
                )}
            </Row>
            <style type="text/css">{`
                .only_products .header{
                    font-size: 20px;
                    margin-left: 0.5%;
                    color: gray;
                }
                .only_products{
                    margin: 2% 0%;
                    padding: 0%;
                }
                .only_products .only_products_card{
                    padding: 0.8% 0%;
                    background: none;
                    border: none;
                }

                .only_products .only_products_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 3px;
                    margin: 3%;
                    padding: 1%;
                    cursor: pointer;
                    background: white;
                    border: 0.5px solid lightgray;
                }
                .only_products .only_products_div:hover{
                    box-shadow: 0px 0px 10px 0.5px gray;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    margin: 0% 0% 4.4% 0%;
                }     
                .only_products .only_product_img{
                    margin-bottom: 5px;
                }    
                @media (max-width: 767px) {
                    .only_products .only_products_div{
                        // border: 1.5px solid ${GlobalStyleSheet.primry_color};
                    }
                    .only_products .header{
                        font-size: 16px;
                    }
                }     
                @media (min-width: 1200px) {
                    .only_products_card{
                        max-width: 14.285714285714285714285714285714%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Home;