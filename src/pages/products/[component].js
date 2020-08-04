import React, { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap'
import { useRouter } from 'next/router'
import SliderCarousel from '../components/customer/slider-carousel'
import Layout from '../components/customer/layout';
import useQueryInfiniteScroll from '../../use-query-infinite-scroll'
import useDimensions from "react-use-dimensions";
import Router from 'next/router'

import { isMobile } from "react-device-detect";
import { checkTokenExpAuth } from '../../sdk/core/authentication-service';
import axios from 'axios'
import MuhalikConfig from '../../sdk/muhalik.config'
import GlobalStyleSheet from '../../styleSheet'
import Link from 'next/link'
import MovingLogo from '../components/moving-logo';
import BreadcrumbRow from '../components/breadcrumb-row';
import DiscountPrice from '../components/discount-price'
import translate from '../../i18n/translate';

React.useLayoutEffect = React.useEffect

export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []
    const url_1 = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url_1).then((response) => {
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

export default function ComponentPage(props) {
    const router = useRouter()
    const { component } = router.query
    const [ref, { x, y, width }] = useDimensions();
    const [fieldName, setFieldName] = useState('')
    const [query, setQuery] = useState(component)
    const [pageNumber, setPageNumber] = useState(1)
    const [cart_count, setCart_count] = useState(0)
    const [user, setUser] = useState({
        _id: null, role: '', mobile: '', full_name: '', gender: '', countary: '', city: '', address: '',
        email: '', shop_name: '', shop_category: '', shop_address: '', avatar: '', status: ''
    })

    let loadingCard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

    const { loading, error, products, pages, total, hasMore } = useQueryInfiniteScroll(fieldName, query, pageNumber, isMobile ? '12' : '28')

    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        async function getData() {
            const _decodedToken = await checkTokenExpAuth()
            if (_decodedToken != null) {
                await setUser(_decodedToken)
                const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${_decodedToken._id}`;
                await axios.get(user_url, { cancelToken: source.token }).then((res) => {
                    if (unmounted) {
                        setUser(res.data.data[0])
                        setCart_count(res.data.data[0].cart.length)
                    }
                }).catch((err) => {
                    if (axios.isCancel(err)) return
                })
            }
        }

        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, []);

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
        setFieldName('')
        setQuery(component)
        setPageNumber(1)
    }, [component]);


    function handleProductClick(element) {
        Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)
    }

    return (
        <div className='component_page'>
            <Layout
                user={user}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                {...props}
            >
                {/* <SliderCarousel
                    slider_list={props.slider_list}
                    categories_list={props.categories_list}
                /> */}
                <Row noGutters className='main_row'>
                    <Row noGutters className='w-100'>
                        <BreadcrumbRow active={component}>
                        </BreadcrumbRow>
                    </Row>
                    {total > 0 ?
                        <Row className='products_col'>
                            <Row noGutters className='id_row'>
                                {products && products.map((element, index) => {
                                    if (products.length === index + 1) {
                                        return <Card key={index} onClick={() => handleProductClick(element)} ref={lastProducrRef} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                            {element.product_type == "simple-product" ?
                                                <div className='only_products_div'>
                                                    <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_image_link[0].url} />
                                                    <label className='my_label'>{element.product_name}</label>
                                                    <DiscountPrice price={element.product_price} discount={element.product_discount} />
                                                </div>
                                                :
                                                <div className='only_products_div'>
                                                    <Image className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                                    <label className='my_label'>{element.product_name}</label>
                                                    <DiscountPrice price={element.product_variations[0].price} discount={element.product_variations[0].discount} />
                                                </div>
                                            }
                                        </Card>
                                    } else {
                                        return <Card key={index} onClick={() => handleProductClick(element)} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                            {element.product_type == "simple-product" ?
                                                <div className='only_products_div'>
                                                    <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_image_link[0].url} />
                                                    <label className='my_label'>{element.product_name}</label>
                                                    <DiscountPrice price={element.product_price} discount={element.product_discount} />
                                                </div>
                                                :
                                                <div className='only_products_div'>
                                                    <Image className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                                    <label className='my_label'>{element.product_name}</label>
                                                    <DiscountPrice price={element.product_variations[0].price} discount={element.product_variations[0].discount} />
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
                                                    <div ref={ref} className=' loadin_img_div' style={{ maxHeight: width + 20 || '150px', minHeight: width + 20 || '150px' }} >
                                                        <MovingLogo />
                                                    </div>
                                                    <label className='my_label'>{'-'}</label>
                                                    <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >{translate('rs')}</span>{'-'}</label>
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
                                                    <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >{translate('rs')}.</span>{'-'}</label>
                                                </div>
                                            </Card>
                                    )}
                                </Row>
                            }
                        </Row>
                        :
                        <Row className='h-100 p-5 w-100'>
                            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                                <h5 className='text-center w-100'>{translate('no_data_found')}</h5>
                            </div>
                        </Row>
                    }
                </Row>
            </Layout >
            <style type="text/css">{`
                .component_page .fontawesome {
                    min-width: 50px;
                    max-width: 50px;
                    min-height: 50px;
                    max-height: 50px;
                }
                .component_page .main_row{
                    width: 100%;
                    padding: 1% 4.44% 2% 4.44%;
                }
                .component_page .products_col{
                    width: 100%;
                    margin: 0%;
                    padding: 0%;
                    background: white;
                }
                .component_page {
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .component_page .id_row{
                    width: 100%;
                    padding: 2%;
                }
                .component_page .only_products_card{
                    padding: 0.5% 0%;
                    background: none;
                    border: none;
                }
                .component_page .loadin_img_div{
                    margin-bottom: 5px;
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                    display: flex;
                    border: 0.5px solid lightgray;
                    align-items: center;
                    justify-content: center;
                }
                .component_page .my_label{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap; 
                    display: block;
                    padding: 0%;
                    margin: 0% 1%;
                    font-size: 13px;
                    cursor: pointer;
                } 
                .component_page .only_products_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 3px;
                    margin: 3%;
                    padding: 1%;
                    cursor: pointer;
                    background: white;
                    border: 0.01px solid lightgray;
                }
                .component_page .only_products_div:hover{
                    box-shadow: 0px 0px 10px 0.5px gray;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    margin: 0% 0% 4.4% 0%;
                }     
                .component_page .only_product_img{
                    margin-bottom: 5px;
                }    
                @media (max-width: 767px) {
                    .component_page .main_row{
                        padding: 1.5%;
                    }
                }
                 @media (min-width: 1200px) {
                    .component_page .only_products_card{
                        max-width: 14.285714285714285714285714285714%;
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
