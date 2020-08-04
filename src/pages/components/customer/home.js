import React, { Component, useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link'
import useDimensions from "react-use-dimensions";
React.useLayoutEffect = React.useEffect;
import { Card, Row, Col, Form, Image, Nav, Spinner, Button } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Carousel from "react-multi-carousel"
import MuhalikConfig from '../../../sdk/muhalik.config'
import axios from 'axios'
import useQueryInfiniteScroll from '../../../use-query-infinite-scroll'
import usePageLimitInfiniteScroll from '../../../use-page-limit-infinite-scroll.js'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import Router from 'next/router'
import MovingLogo from '../moving-logo';
React.useLayoutEffect = React.useEffect

import translate from '../../../i18n/translate'
import DiscountPrice from '../discount-price';

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

    const [categories, setCategories] = useState([])
    useEffect(() => {
        setCategories([])
        let copyArray = []
        copyArray = Object.assign([], props.categories_list)

        let item_1 = copyArray[Math.floor(Math.random() * copyArray.length)]
        copyArray.forEach((element, index) => {
            if (element._id == item_1._id) {
                setCategories(prevPro => {
                    return [...new Set([...prevPro, item_1])]
                })
                copyArray.splice(index, 1)
                return
            }
        })

        let item_2 = copyArray[Math.floor(Math.random() * copyArray.length)]
        copyArray.forEach((element, index) => {
            if (element._id == item_2._id) {
                setCategories(prevPro => {
                    return [...new Set([...prevPro, item_2])]
                })
                copyArray.splice(index, 1)
                return
            }
        })

        let item_3 = copyArray[Math.floor(Math.random() * copyArray.length)]
        copyArray.forEach((element, index) => {
            setCategories(prevPro => {
                return [...new Set([...prevPro, item_3])]
            })
            if (element._id == item_3._id) {
                copyArray.splice(index, 1)
                return
            }
        })

        let item_4 = copyArray[Math.floor(Math.random() * copyArray.length)]
        setCategories(prevPro => {
            return [...new Set([...prevPro, item_3])]
        })
    }, [props.categories_list])
    return (
        <div className='home'>
            <Row noGutters>
                <Col lg={6} md={12} sm={12} xs={12} style={{ height: '100%' }}>
                    <Card className='first_card'>
                        <Card.Header className='card_header'>
                            <Link href='/products/[component]' as={`/products/new-arrival`}>
                                <a style={{ fontSize: '15px', width: '100%', color: `${GlobalStyleSheet.primry_color}` }} className='d-inline-flex align-items-center'>
                                    <label className='mr-auto' >{translate('new_arrivals')}</label>
                                    <span style={{ color: 'blue', fontSize: '13px' }}>{translate('show_more')}</span>
                                </a>
                            </Link>
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
                                    <Card key={index} className="product_card">
                                        {element.product_type == "simple-product" ?
                                            <div className='card_div'
                                                onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                                <Image className='img' ref={ref}
                                                    style={{ maxHeight: width + 20 || '100px', minHeight: width + 20 || '100px' }}
                                                    src={element.product_image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <DiscountPrice price={element.product_price} discount={element.product_discount} />
                                            </div>
                                            :
                                            <div className='card_div'
                                                onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                                <Image className='img' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <DiscountPrice price={element.product_variations[0].price} discount={element.product_variations[0].discount} />
                                            </div>
                                        }
                                    </Card>
                                )}
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12} style={{ height: '100%' }}>
                    <Card className='second_card'>
                        <Card.Header className='card_header'>
                            <div className='mr-auto' ></div>
                            <Link href='products/[component]' as={`/products/top-ranking`}>
                                <a style={{ fontSize: '15px', width: '100%', color: `${GlobalStyleSheet.primry_color}` }} className='d-inline-flex align-items-center'>
                                    <label className='mr-auto' >{translate('top_ranking')}</label>
                                    <span style={{ color: 'blue', fontSize: '13px' }}>{translate('show_more')}</span>
                                </a>
                            </Link>
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
                                    <Card key={index} className="product_card">
                                        {element.product_type == "simple-product" ?
                                            <div className='card_div'
                                                onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                                <Image className='img' ref={ref}
                                                    style={{ maxHeight: width + 20 || '100px', minHeight: width + 20 || '100px' }}
                                                    src={element.product_image_link[0].url} />

                                                <label className='my_label'>{element.product_name}</label>
                                                <DiscountPrice price={element.product_price} discount={element.product_discount} />
                                            </div>
                                            :
                                            <div className='card_div'
                                                onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                                <Image className='img' style={{ maxHeight: width + 20 || '100px', minHeight: width + 20 || '100px' }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='my_label'>{element.product_name}</label>
                                                <DiscountPrice price={element.product_variations[0].price} discount={element.product_variations[0].discount} />
                                            </div>

                                        }
                                    </Card>
                                )}
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {props.home_categories_list && props.home_categories_list.map((element, index) =>
                <CategoryCard
                    key={index}
                    element={element}
                />
            )}
            <OnlyProducts />

            <style type="text/css">
                {`
                    .home{
                        z-index: 10;
                    }
                    .first_card {
                        margin: 0% 1% 1% 0%;
                    }
                    .second_card {
                        margin: 0% 0% 1% 1%;
                    }
                    .home .product_card{
                        border: none;
                        border-radius: 5px;
                    }
                    .home .product_card .card_div{
                        display: flex;
                        flex-direction: column;
                        border-radius: 3px;
                        font-size: 13px;
                        margin: 5px;
                        padding: 5px 5px 0px 5px;
                        cursor: pointer;
                        background: $white;
                        border: 1px solid lightgray;
                    }
                    .home .product_card .card_div:hover{
                        box-shadow: 0px 0px 10px 0.5px  ${GlobalStyleSheet.primry_color};
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

                    .home ._card first-child{
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

                    .price_label {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap; 
                        display: block;
                        padding: 0%;
                        margin: 1.5% 1%;
                        color: Orange;
                        font-size: 15px;
                        cursor: pointer;
                    }

                    .home .only_products_row{
                        background: yellow;
                    }
                    @media (max-width: 767px){
                        .first_card {
                            margin: 0% 0% 2% 0%;
                        }
                        .second_card {
                            margin: 0% 0% 2% 0%;
                        }
                    }
                    @media (max-width: 767px){
                        .my_label{
                            font-size: 11px;
                        } 
                        .price_label{
                            font-size: 13px;
                        } 
                    }
                `}
            </style>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
                }
              `}</style>
        </div >
    );
}


function CategoryCard(props) {
    const [ref, { x, y, width }] = useDimensions();

    const [query, setQuery] = useState(props.element.value)
    const { loading, error, products, pages, total, hasMore } = useQueryInfiniteScroll("category", query, 1, isMobile ? '6' : '14')
    const observer = useRef()
    const lastProducrRef = useCallback((node) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setQuery(props.element.value)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])
    return (
        <div className='CategoryCard' ref={lastProducrRef}>
            <Card as={Row} className='category_card'>
                <Card.Header className='d-inline-flex align-items-center'>
                    <Link href='/products/category/[category]' as={`/products/category/${props.element.value}`}>
                        <a style={{ fontSize: '13px', width: '100%', color: `${GlobalStyleSheet.primary_text_color}` }} className='d-inline-flex align-items-center'>
                            <label className='mr-auto category_heading' >{props.element.value}</label>
                            {translate('show_more')}
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
                    {total > 0 ?
                        <>
                            <Row noGutters className='box_shadow'>
                                {products && products.map((element, index) =>
                                    <CategoryProducts key={index} element={element} loading={loading} />
                                )}
                            </Row>
                            {loading &&
                                <Row noGutters className='box_shadow'>
                                    <LoadingCategoryCard />
                                </Row>
                            }
                        </>
                        :
                        <Row className='h-100 p-5 w-100'>
                            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                                <h5 className='text-center w-100'>{translate('no_data_found')}</h5>
                            </div>
                        </Row>
                    }
                </Card.Body>
            </Card>

            <style type="text/css">{`
                .CategoryCard{
                    margin: 2% 0%;
                }
                .CategoryCard .category_card{
                    margin: 0.5% 0%;
                    border: none;
                    border-radius: 5px;
                    background-image: linear-gradient(180deg, ${GlobalStyleSheet.primry_color} 0%, ${GlobalStyleSheet.body_color} 100%);
                    // background: #eac8e8;
                    // background: #adebbb;
                }
                .CategoryCard .category_heading{
                    font-size: 20px;
                    padding: 0%;
                    margin: 0%;
                }
                .CategoryCard .category_card_body{
                    padding: 1% 1% 1% 1%;
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
                    padding: 1% 0% 0% 0%;
                    background: none;
                    // background: #adebbb;
                }
                .CategoryCard .box_shadow:hover{
                    // box-shadow: 0px 0px 10px 0px blue;
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
                <div className='category_card_div'
                    onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${props.element.category.value}/${props.element.sub_category.value}/${props.element._id}`)}
                >
                    <Image ref={ref} className='category_product_img'
                        style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }}
                        src={props.element.product_image_link[0].url} />

                    <label className='my_label'>{props.element.product_name}</label>
                    <DiscountPrice price={props.element.product_price} discount={props.element.product_discount} />
                </div>
                :
                <div className='category_card_div'
                    onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]',
                        `/products/category/${props.element.category.value}/${props.element.sub_category.value}/${props.element._id}`)}
                >
                    <Image ref={ref} className='category_product_img'
                        style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }}
                        src={props.element.product_variations[0].image_link[0].url} />
                    <label className='my_label'>{props.element.product_name}</label>
                    <DiscountPrice price={props.element.product_variations[0].price} discount={props.element.product_variations[0].discount} />
                </div>
            }
            <style type="text/css">{`
                .category_product_card{
                    border: none;
                    border-radius: 5px;
                    background: none;
                    // background: #adebbb;
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

function LoadingCategoryCard(props) {
    const [ref, { x, y, width }] = useDimensions();
    let loadingCard = ['0', '1', '2', '3', '4', '5', '6']

    return (
        <>
            {loadingCard.map((element, index) =>
                isMobile ?
                    index < 6 ?
                        <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='category_product_card'>
                            <div className='loading_card_div'>
                                <div ref={ref} className=' loadin_img_div' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} >
                                    <MovingLogo />
                                </div>
                                <label className='my_label'>{'-'}</label>
                                <label className='price_label'>{translate('rs')}{'-'}</label>
                            </div>
                        </Card>
                        :
                        null
                    :
                    <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='category_product_card'>
                        <div className='loading_card_div'>
                            <div ref={ref} className=' loadin_img_div' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} >
                                <MovingLogo />
                            </div>
                            <label className='my_label'>{'-'}</label>
                            <label className='price_label'>{translate('rs')}{'-'}</label>
                        </div>
                    </Card>
            )}
            <style type="text/css">{`
                .category_product_card{
                    border: none;
                    border-radius: 5px;
                    background: none;
                    // background: #adebbb;
                }
                .category_product_card .loading_card_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 5px;
                    margin: 2%;
                    padding: 1%;
                    cursor: pointer;
                    background: white;
                    border: 4px solid #4d4dff;
                }
                .category_product_card .loading_card_div:hover{
                    box-shadow: 0px 0px 8px 0px blue;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    margin: 0% 0.5% 4% 0.5%;
                }
                .category_product_card .loadin_img_div{
                    margin-bottom: 5px;
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                    display: flex;
                    border: 0.5px solid lightgray;
                    align-items: center;
                    justify-content: center;
                }

                @media (max-width: 767px){
                    .category_product_card .loading_card_div{
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
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']

    const { _loading, _error, _products, _hasMore } = usePageLimitInfiniteScroll(true, pageNumber, isMobile ? '12' : '21')

    const observer = useRef()
    const lastProducrRef = useCallback((node) => {
        if (_loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && _hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [_loading, _hasMore])

    useEffect(() => {
        setPageNumber(1)
    }, []);
    return (
        <div className='only_products'>
            <label className='header'>{translate('you_may_like')}</label>
            <Row noGutters>
                {_products && _products.map((element, index) =>
                    _products.length == (index + 1) ?
                        <Card ref={lastProducrRef} key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                            {element.product_type == "simple-product" ?
                                <div className='only_products_div' onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                    <Image ref={ref} className='only_product_img'
                                        style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }}
                                        src={element.product_image_link[0].url}
                                    />
                                    <label className='my_label'>{element.product_name}</label>
                                    <DiscountPrice price={element.product_price} discount={element.product_discount} />
                                </div>
                                :
                                <div className='only_products_div' onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                    <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} src={element.product_variations[0].image_link[0].url} />
                                    <label className='my_label'>{element.product_name}</label>
                                    <DiscountPrice price={element.product_variations[0].price} discount={element.product_variations[0].discount} />
                                </div>
                            }
                        </Card>
                        :
                        <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                            {element.product_type == "simple-product" ?
                                <div className='only_products_div' onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                    <Image ref={ref} className='only_product_img'
                                        style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }}
                                        src={element.product_image_link[0].url}
                                    />
                                    <label className='my_label'>{element.product_name}</label>
                                    <DiscountPrice price={element.product_price} discount={element.product_discount} />
                                </div>
                                :
                                <div className='only_products_div' onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                    <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} src={element.product_variations[0].image_link[0].url} />
                                    <label className='my_label'>{element.product_name}</label>
                                    <DiscountPrice price={element.product_variations[0].price} discount={element.product_variations[0].discount} />
                                </div>
                            }
                        </Card>
                )}

                {_loading && <Row noGutters className='w-100'>
                    {loadingCard.map((element, index) =>
                        isMobile ?
                            index < 12 ?
                                <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                    <div className='only_products_div'>
                                        <div ref={ref} className=' loadin_img_div' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} >
                                            <MovingLogo />
                                        </div>
                                        <label className='my_label'>{'-'}</label>
                                        <label className='price_label'>{translate('rs')}{'-'}</label>
                                    </div>
                                </Card>
                                :
                                null
                            :
                            <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                <div className='only_products_div'>
                                    <div ref={ref} className=' loadin_img_div' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} >
                                        <MovingLogo />
                                    </div>
                                    <label className='my_label'>{'-'}</label>
                                    <label className='price_label'>{translate('rs')}{'-'}</label>
                                </div>
                            </Card>
                    )}
                </Row>
                }
            </Row>
            <style type="text/css">{`
                .only_products{
                    margin: 1% 0% 0% 0%;
                }
                .only_products .header{
                    font-size: 20px;
                    margin: 1% 0% 0% 0.5%;
                    color: gray;
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
                    padding: 2%;
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
                .only_products .loadin_img_div{
                    margin-bottom: 5px;
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                    display: flex;
                    border: 0.5px solid lightgray;
                    align-items: center;
                    justify-content: center;
                }
                @media (max-width: 767px) {
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