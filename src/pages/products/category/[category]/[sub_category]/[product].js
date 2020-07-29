import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { Row, Col, Card, Image, Button, Form, Breadcrumb, Table, Tab, Nav, Badge, Tabs, InputGroup, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Layout from '../../../../components/customer/layout';
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
    getDecodedTokenFromStorage,
    getTokenFromStorage
} from '../../../../../sdk/core/authentication-service';
import axios from 'axios'
import MuhalikConfig from '../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../../styleSheet'
import Link from 'next/link'
import useQueryInfiniteScroll from '../../../../../use-query-infinite-scroll'
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import BreadcrumbRow from '../../../../components/breadcrumb-row'
React.useLayoutEffect = React.useEffect

import AlertModal from '../../../../components/alert-modal'

import translate from '../../../../../i18n/translate'
import TranslateFormControl from '../../../../../i18n/translate-form-control'
import TranslateOption from '../../../../../i18n/translate-option'


export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []
    let single_product = []
    const { product } = context.query

    const url = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url).then((res) => {
        categories_list = res.data.category.docs,
            sub_categories_list = res.data.sub_category.docs
    }).catch((error) => {
    })

    const url_1 = MuhalikConfig.PATH + `/api/products/product-by-id/${product}`;
    await axios.get(url_1).then((res) => {
        single_product = res.data.data[0]
    }).catch((error) => {
    })


    return {
        props: {
            categories_list,
            sub_categories_list,
            single_product
        },
    }
}

function Product(props) {
    const router = useRouter()
    const [single_product, setSingle_product] = useState(props.single_product)
    const { category, sub_category, product } = router.query

    const [token, setToken] = useState({ role: '', full_name: '' })
    const [undecoded_token, setUndecoded_token] = useState('')

    const { loading, error, products, pages, total, hasMore } = useQueryInfiniteScroll('sub-category', props.single_product == '' ? null : props.single_product.sub_category.value, '1', isMobile ? '6' : '8')
    const [vendor, setVendor] = useState({})
    const [wish, setWish] = useState('gray')
    const [_loading, cartLoading] = useState(false)
    const [cart, setCart] = useState(0)
    const [cartError, setCartError] = useState('')
    const [cart_count, setCart_count] = useState(0)

    useLayoutEffect(() => {
        getData()
        if (props.single_product != '')
            getVendor()
    }, []);
    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
            getCartCount(_token._id)
        }
        const undecoded_token = await getTokenFromStorage()
        if (undecoded_token !== null) {
            setUndecoded_token(undecoded_token)
        }
    }

    async function getCartCount(user_id) {
        const url = MuhalikConfig.PATH + `/api/users/cart/${user_id}`;
        await axios.get(url).then((res) => {
            setCart_count(res.data.data.length)
        }).catch((error) => {
        })
    }

    async function getVendor() {
        const url = MuhalikConfig.PATH + `/api/users/user-by-id/${props.single_product.vendor_id}`;
        await axios.get(url).then((res) => {
            setVendor(res.data.data[0])
        }).catch((error) => {
        })
    }

    async function addToWishlist(product_id) {
        let data = {
            _id: product_id,
        }

        if (token.full_name == '') {
            Router.push('/login')
        } else if (wish == 'gray') {
            const url = MuhalikConfig.PATH + `/api/users/add-wish/${props.token._id}`;
            await axios.put(url, data, {
                headers: {
                    'authorization': undecoded_token,
                }
            }).then(function (res) {
                setWish('orange')
            }).catch(function (error) {
                alert('ERROR: Product not added to wishlist')
            });
        } else {
            const url = MuhalikConfig.PATH + `/api/users/remove-wish/${props.token._id}`;
            await axios.put(url, data, {
                headers: {
                    'authorization': undecoded_token,
                }
            }).then(function (res) {
                setWish('gray')
            }).catch(function (error) {
                alert('ERROR: Product not removed from wishlist')
            });
        }
    }


    async function handleAddToCart(product_id, variation_id, index) {
        let data = {
            p_id: product_id,
            variation_id: variation_id,
            index: index,
            quantity: cart
        }
        if (token.full_name == '') {
            Router.push('/login')
        } else if (cart == 0 || cart == 'Quantity') {
            setCartError(translate('select_quantity_first'))
        } else {
            cartLoading(true)
            if (cart > 0) {
                const url = MuhalikConfig.PATH + `/api/users/add-to-cart/${token._id}`;
                await axios.put(url, data, {
                    headers: {
                        'authorization': undecoded_token,
                    }
                }).then(function (res) {
                    cartLoading(false)
                    getCartCount(token._id)
                }).catch(function (error) {
                    cartLoading(false)
                    alert('Error')
                });
            }
        }
    }

    async function reloadProduct() {
        const url_1 = MuhalikConfig.PATH + `/api/products/product-by-id/${product}`;
        await axios.get(url_1).then((res) => {
            setSingle_product(res.data.data[0])
        }).catch((error) => {
        })
    }

    return (
        <div className='single_product_style'>
            <Layout
                role={token.role || ''}
                name={token.full_name || ''}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                active_category={category}
                active_sub_category={sub_category}
                {...props}
            >
                {single_product == '' ?
                    null
                    :
                    <div className='main-row'>
                        <BreadcrumbRow active={product}>
                            <div className='breadcrumb-item'>
                                <Link href='/products/category/[category]' as={`/products/category/${category}`} >
                                    <a> {category}</a>
                                </Link>
                            </div>
                            <div className='breadcrumb-item'>
                                <Link href='/products/category/[category]/[sub_category]' as={`/products/category/${category}/${sub_category}`} >
                                    <a>{sub_category}</a>
                                </Link>
                            </div>
                        </BreadcrumbRow>

                        <Row noGutters>
                            {single_product.product_type == "simple-product" ?
                                <SimpleProduct
                                    single_product={single_product}
                                    vendor={vendor}
                                    token={token}
                                    undecoded_token={undecoded_token}
                                    wish={wish}
                                    addToWishlist={addToWishlist}
                                    setCart={(value) => { setCart(value), setCartError('') }}
                                    cartError={cartError}
                                    handleAddToCart={handleAddToCart}
                                    loading={_loading}
                                    reloadProduct={reloadProduct}
                                />
                                :
                                <VariableProduct
                                    single_product={single_product}
                                    vendor={vendor}
                                    token={token}
                                    undecoded_token={undecoded_token}
                                    wish={wish}
                                    addToWishlist={addToWishlist}
                                    setCart={(value) => { setCart(value), setCartError('') }}
                                    cartError={cartError}
                                    handleAddToCart={handleAddToCart}
                                    loading={_loading}
                                    reloadProduct={reloadProduct}
                                />
                            }
                        </Row>
                        <RelatedProducts
                            products={products}
                            current_product_id={props.single_product._id}
                            totl={total}
                        />
                    </div>
                }
            </Layout >
            <style type="text/css">{`
                .single_product_style{
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .single_product_style .main-row{
                    padding: 2% 5%;
                }
                .single_product_style .single_product_img{
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                }
                .single_product_style .single_product_img:hover{
                    cursor: pointer;
                    background: ${GlobalStyleSheet.body_color};
                }

                .display_in_xs{
                    display: none;
                }
                .display_in_lg_md_sm{
                    display: block;
                }
                
                .img_col{
                    padding: 2%;
                    background: white;
                }
                .vertical_align_img{
                    min-width: 14.2857142857%;
                    max-width: 14.2857142857%;
                    margin: 0%;
                    padding: 0%;
                }
                .larg_img{
                    padding: 0%;
                    margin: 0%;
                }
                .desc_col{
                    padding: 2% 4%;
                    background: white;
                }
                .vendor_desc_col{
                    padding: 2% 2% 2% 3%;
                    border-left: 0.5px solid lightgray;
                    background: white;
                }

                .price_label{
                    width: 100%;
                    margin: 2% 0%;
                }

                .slope{
                    width: 40%;
                    height:40px;
                    margin: 2% 0%;
                    background:${GlobalStyleSheet.primry_color};
                    text-align:center;
                    font-size:26px;
                    color:#fff;
                    vertical-align:middle;
                    overflow: visible;
                    position: relative;
                }
                .slope:after {
                    content: "";
                    position: absolute;
                    display: block;
                    right: -30px;
                    top: 0px;
                    width: 0px;
                    height: 0px;
                    border-top: solid 40px ${GlobalStyleSheet.primry_color};
                    border-right: solid 30px transparent;
                }

                .stock{
                    font-size: 16px;
                    width: 100%;
                    background: #d6f5d6;
                    color: gray;
                    padding: 2%;
                    margin: 2% 0%;
                }
                .stock span{
                    font-size: 13px;
                    width: 100%;
                    display: flex;
                    color: black;
                    padding: 2% 2% 0% 2%;
                    border-top: 1px solid lightgray;
                }
                .cart{
                    margin: 5% 0%;
                }

                .rating_review_col{
                    font-size: 12px;
                    color: gray;
                    align-items: center;
                }
                
                .product_label{
                    font-size: 18px;
                    color: gray;
                    width: 100%;
                    margin: 10px 0%;
                    text-align: center;
                }

                .add_to_wish_list{
                    color: gray;
                    margin: 3% 0%;
                    align-items: center;
                }
                .add_to_wish_list label{
                    padding: 0%;
                    margin-right: 4%;
                }
                .add_to_wish_list .font_awsome{
                    color: ${wish};
                    min-width: 15px;
                    max-width: 15px;
                    min-height: 15px;
                    max-height: 15px;
                }
                .add_to_wish_list .font_awsome:hover{
                    color: orange;
                    cursor: pointer;
                }

                @media (max-width: 1199px) {
                    .single_product_style .main-row{
                        padding: 2% 3%;
                    }
                    .img_col{
                        padding: 2% 0% 2% 2%;
                    }
                    .vertical_align_img{
                        padding: 0% 1%;
                    }
                    .desc_col{
                        padding: 2% 1% 2% 2%;
                    }
                    .vendor_desc_col{
                        padding: 2%;
                    }
                }
                @media (max-width: 991px) {
                    .single_product_style .main-row{
                        padding: 2%;
                    }
                    .img_col{
                        padding: 2% 0% 2% 2%;
                    }
                    .vertical_align_img{
                        padding: 0% 1% 0% 2%;
                    }
                    .desc_col{
                        padding: 2% 1% 2% 2%;
                    }
                    .vendor_desc_col{
                        padding: 2% 1% 2% 1%;
                    }
                }
                @media (max-width: 767px) {
                    .single_product_style .main-row{
                        padding: 2% 2% 50px 2%;
                    }
                    .img_col{
                        padding: 2%;
                    }
                    .vertical_align_img{
                        padding: 0% 0% 0% 3%;
                    }
                    .desc_col{
                        padding: 2%;
                    }
                    .vendor_desc_col{
                        margin: 2% 0%;
                        border-radius: 5px;
                        padding: %;
                        border: none;
                    }
                }
                @media (max-width: 575px) {
                    .single_product_style .main-row{
                        padding: 1.5% 1.5% 50px 1.5%;
                    }
                    .single_product_style .img_col{
                        border-radius: 5px;
                    }
                    .single_product_style .larg_img{
                        padding: 0% 2%;
                        margin: 0% 2%;
                    }
                    .single_product_style .desc_col{
                        margin: 2% 0%;
                        border-radius: 5px;
                    }
                    .single_product_style .vendor_desc_col{
                        margin-bottom: 2%;
                    }

                    .single_product_style .display_in_lg_md_sm{
                        display: none;
                    }
                    .single_product_style .display_in_xs{
                        display: block;
                    }

                    .single_product_style .disable_scroll{
                        display: block;
                        margin-top: 2%;
                    }
                    .single_product_style .disable_scroll {
                        display: inline-flex;
                        background: ${GlobalStyleSheet.body_color};
                        width: 100%;
                        padding: 0.5%;
                        margin: 1% 0%;
                        overflow-y: scroll;
                    }
                    .single_product_style .disable_scroll::-webkit-scrollbar {
                        display: none;
                    }
                    .single_product_style .disable_scroll {
                        -ms-overflow-style: none;
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
function SimpleProduct(props) {
    const [ref, { x, y, width }] = useDimensions();
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    let rating_review = {
        rating: {
            overall: 0,
            one_star: 0,
            two_star: 0,
            three_star: 0,
            four_star: 0,
            five_star: 0
        },
        reviews: []
    }
    let options = []

    for (let i = 0; i < props.single_product.product_in_stock; i++) {
        options.push(
            <option key={i}>{i + 1}</option>
        )
    }

    if ('rating_review' in props.single_product) {
        rating_review = props.single_product.rating_review;
    }

    return (
        <div className='simple_product'>
            <Row className='m-0 p-0'>
                <Col lg={4} md={4} sm={6} xs={12} className='img_col'>
                    <Row >
                        <Col lg={3} md={3} sm={2} xs={12} className='display_in_lg_md_sm vertical_align_img'>
                            {props.single_product.product_image_link && props.single_product.product_image_link.map((element, index) =>
                                <MyImages key={element._id}
                                    undefind={'50px'}
                                    element={element}
                                    index={index == activeImageIndex}
                                    plus={14}
                                    setData={() => setActiveImageIndex(index)}
                                />
                            )}
                        </Col>
                        <Col className='larg_img'>
                            <Image ref={ref} className='single_product_img'
                                style={{ maxHeight: width + 60 || '200px', minHeight: width + 60 || '200px' }}
                                src={props.single_product.product_image_link[activeImageIndex].url}
                            />
                        </Col>
                        <Col xs={12} className='display_in_xs'>
                            <div className='disable_scroll'>
                                {props.single_product.product_image_link && props.single_product.product_image_link.map((element, index) =>
                                    <Col xs={2} key={element._id} className='p-0 m-0'>
                                        <MyImages key={element._id}
                                            undefind={'250px'}
                                            element={element}
                                            index={index == activeImageIndex}
                                            plus={10}
                                            setData={() => setActiveImageIndex(index)}
                                        />
                                    </Col>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} md={5} sm={6} xs={12} className='desc_col'>
                    {props.single_product.product_name}
                    <div className='slope'>{translate('rs')} {props.single_product.product_price}</div>
                    <Row noGutters>
                        <Col lg={6} md={6} sm={6} xs={6} className='rating_review_col'>
                            <div className='d-inline-flex'>
                                <div className='product_rating'> Rating: </div>
                                <Badge variant='info' style={{ fontSize: '13px', marginLeft: '5px' }}> {rating_review.rating.overall} </Badge>
                            </div>
                            <ReactStars
                                count={5}
                                size={15}
                                half={true}
                                value={rating_review.rating.overall}
                                edit={false}
                                color2={"orange"}
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} className='rating_review_col'>
                            <div>Reviews </div>
                            <div>{rating_review.reviews.length}</div>
                        </Col>
                    </Row>

                    {/* <div className='add_to_wish_list'>
                        <label>Add to Wishlist</label>
                        <FontAwesomeIcon icon={faHeart} className='font_awsome' onClick={() => props.addToWishlist(props.single_product._id)} />
                    </div> */}

                    <div className='stock'>
                        {translate('available_in_stock')}
                        <span>{translate('stock')}: {props.single_product.product_in_stock}</span>
                    </div>

                    <div className='cart'>
                        <Row noGutters>
                            <Form.Group as={Col} lg='auto' md='auto' sm='auto' xs='12' controlId="formGridState">
                                <Form.Control as="select" onChange={(e) => props.setCart(e.target.value)} defaultValue="Choose...">
                                    <TranslateOption id='quantity' />
                                    {options.map(element =>
                                        element
                                    )}
                                </Form.Control>
                                <Form.Row style={{ color: '#DC3545', fontSize: '13px', marginLeft: '2px' }}>
                                    {props.cartError}
                                </Form.Row>
                            </Form.Group>
                            <Col className='ml-1'>
                                <Button variant='success' block disabled={props.loading}
                                    onClick={() => props.handleAddToCart(props.single_product._id, '', '')}>
                                    {props.loading ? translate('adding') : translate('add_to_cart')}
                                    {props.loading ? <Spinner animation="grow" size="sm" /> : null}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                </Col>
                <Col lg={3} md={3} sm={12} xs={12} className='vendor_desc_col'>
                    <VendorInfo vendor={props.vendor} />
                </Col>
            </Row>
            {/*  Overview / Specification / Review */}
            <TabComponent
                single_product={props.single_product}
                custom_fields={props.single_product.custom_fields}
                single_product={props.single_product}
                token={props.token}
                undecoded_token={props.undecoded_token}
                reloadProduct={props.reloadProduct}
            />
            <style type="text/css">{`
                .simple_product{
                    width: 100%;
                }
            `}</style>
        </div>
    )
}
// Proxima Nova, Helvetica Neue, Arial, sans - serif;
function VariableProduct(props) {
    const [ref, { x, y, width }] = useDimensions();
    const [activeVariation, setActiveVariation] = useState(props.single_product.product_variations[0])
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [activeVariationIndex, setActiveVariationIndex] = useState(0)

    let rating_review = {
        rating: {
            overall: 0,
            one_star: 0,
            two_star: 0,
            three_star: 0,
            four_star: 0,
            five_star: 0,
        },
        reviews: []
    }
    let options = []

    for (let i = 0; i < activeVariation.stock; i++) {
        options.push(
            <option key={i}>{i + 1}</option>
        )
    }

    if ('rating_review' in activeVariation) {
        rating_review = activeVariation.rating_review;
    }

    return (
        <div className='variable_product'>
            <Row className='m-0 p-0'>
                <Col lg={4} md={4} sm={6} xs={12} className='img_col'>
                    <Row className='p-0 m-0'>
                        <Col lg={3} md={3} sm={2} xs={12} className='display_in_lg_md_sm vertical_align_img'>
                            {activeVariation.image_link && activeVariation.image_link.map((element, index) =>
                                <MyImages key={element._id}
                                    undefind={'50px'}
                                    element={element}
                                    index={index == activeImageIndex}
                                    plus={14}
                                    setData={() => setActiveImageIndex(index)}
                                />
                            )}
                        </Col>
                        <Col className='larg_img'>
                            <Image ref={ref} className='single_product_img'
                                style={{ maxHeight: width + 60 || '300px', minHeight: width + 60 || '300px' }}
                                src={activeVariation.image_link[activeImageIndex].url}
                            />
                        </Col>
                        <Col xs={12} className='display_in_xs'>
                            <div className='disable_scroll'>
                                {activeVariation.image_link && activeVariation.image_link.map((element, index) =>
                                    <Col xs={2} key={element._id} className='p-0 m-0'>
                                        <MyImages key={element._id}
                                            undefind={'50px'}
                                            element={element}
                                            index={index == activeImageIndex}
                                            plus={10}
                                            setData={() => setActiveImageIndex(index)}
                                        />
                                    </Col>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col lg={5} md={5} sm={6} xs={12} className='desc_col'>
                    {props.single_product.product_name}
                    <div className='slope'>{translate('rs')} {activeVariation.price}</div>
                    <Row noGutters>
                        <Col lg={6} md={6} sm={6} xs={6} className='rating_review_col'>
                            <div className='d-inline-flex'>
                                <div className='product_rating'> {translate('rating')}: </div>
                                <Badge variant='info' style={{ fontSize: '13px', marginLeft: '5px' }}> {rating_review.rating.overall} </Badge>
                            </div>
                            <ReactStars
                                count={5}
                                size={15}
                                half={true}
                                value={rating_review.rating.overall}
                                edit={false}
                                color2={"orange"}
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} className='rating_review_col'>
                            <div>Reviews </div>
                            <div>{rating_review.reviews.length}</div>
                        </Col>
                    </Row>

                    {/* <div className='add_to_wish_list'>
                        <label>Add to Wishlist</label>
                        <FontAwesomeIcon icon={faHeart} className='font_awsome' onClick={() => props.addToWishlist(props.single_product._id)} />
                    </div> */}

                    <div className='stock'>
                        {translate('available_in_stock')}
                        <span>{translate('stock')}: {activeVariation.stock}</span>
                    </div>

                    <div className='cart'>
                        <Row noGutters>
                            <Form.Group as={Col} lg='auto' md='auto' sm='auto' xs='12' controlId="formGridState">
                                <Form.Control as="select" onChange={(e) => props.setCart(e.target.value)} >
                                    <TranslateOption id='quantity' />
                                    {options.map(element =>
                                        element
                                    )}
                                </Form.Control>
                                <Form.Row style={{ color: '#DC3545', fontSize: '13px', marginLeft: '2px' }}>
                                    {props.cartError}
                                </Form.Row>
                            </Form.Group>
                            <Col className='ml-1'>
                                <Button variant='success' block disabled={props.loading}
                                    onClick={() => props.handleAddToCart(props.single_product._id, activeVariation._id, activeVariationIndex)}>
                                    {props.loading ? translate('adding') : translate('add_to_cart')}
                                    {props.loading ? <Spinner animation="grow" size="sm" /> : null}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className='variation_item'>
                        {activeVariation.item && activeVariation.item.map((element, index) =>
                            <div key={element._id} className='item'>
                                <div className='item_name_div'>
                                    {element.name}:
                                    {/* <span style={{ color: 'black', fontSize: '16px' }}>{element.value}</span> */}
                                </div>
                                <div>
                                    <Button block size='sm' variant='primary' disabled className='item_value_btn'> {element.value} </Button>
                                </div>
                            </div>
                        )}
                        {/* {props.single_product.product_variations[0].item.map((element, index) =>
                            <div className='item'>
                                <div className='item_name_div'>
                                    {element.name}: <span style={{ color: 'black', fontSize: '16px' }}>{activeVariation.item[index].value}</span>
                                </div>
                                <div>
                                    {props.single_product.product_variations.map((e, i) =>
                                        <Button block size='sm' variant={activeVariationIndex == i ? 'primary' : 'outline-secondary'} className='item_value_btn'
                                            onClick={() => {
                                                setActiveVariation(e),
                                                    setActiveVariationIndex(i),
                                                    setActiveImageIndex(0)
                                            }}
                                        >
                                            {e.item[index].value}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )} */}
                    </div>
                    <hr />
                    <div className='display_in_lg_md_sm'>
                        <Row noGutters className='d-flex flex-row'>
                            {props.single_product.product_variations && props.single_product.product_variations.map((element, index) =>
                                <Col lg={2} md={2} xs={2} sm={2} key={element._id} >
                                    <MyImages index={index == activeVariationIndex}
                                        element={element.image_link[0]}
                                        plus={16}
                                        setData={() => {
                                            setActiveVariation(element),
                                                setActiveVariationIndex(index),
                                                setActiveImageIndex(0)
                                        }}
                                    />
                                </Col>
                            )}
                        </Row>
                    </div>
                    <div className='display_in_xs disable_scroll'>
                        {props.single_product.product_variations && props.single_product.product_variations.map((element, index) =>
                            <Col lg={2} md={2} xs={2} sm={2} key={element._id} className='p-0 m-0'>
                                <MyImages index={index == activeVariationIndex}
                                    element={element.image_link[0]}
                                    plus={16}
                                    setData={() => {
                                        setActiveVariation(element),
                                            setActiveVariationIndex(index),
                                            setActiveImageIndex(0)
                                    }}
                                />
                            </Col>
                        )}
                    </div>
                </Col>
                <Col lg={3} md={3} sm={12} xs={12} className='vendor_desc_col'>
                    <VendorInfo vendor={props.vendor} />
                </Col>
            </Row>
            {/*  Overview / Specification / Review */}
            <TabComponent
                single_product={props.single_product}
                activeVariation={activeVariation}
                activeVariationIndex={activeVariationIndex}
                custom_fields={activeVariation.custom_fields}
                item={activeVariation.item}
                single_product={props.single_product}
                token={props.token}
                undecoded_token={props.undecoded_token}
                reloadProduct={props.reloadProduct}
            />
            <style type="text/css">{`
                .variable_product{
                    width: 100%;
                }
                .variable_product .variation_item{
                    width: 100%;
                    padding: 4%;
                    background: #f7f9fe;
                    border-radius: 5px;
                }
                .variable_product .item{
                    display: flex;
                    margin-bottom: 3%;
                    flex-direction: column;
                }
                .variable_product .item_name_div{
                    color: gray;
                    font-size: 13px;
                    margin: 0% 1%;
                }
                .variable_product .item_value_btn{
                    margin: 1%;
                }
            `}</style>
        </div >
    )
}


function MyImages(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <div className='my_image'>
            <Image ref={ref} className='my_image_img'
                style={{
                    border: props.index ? '1px solid black' : '1px solid lightgray',
                    maxHeight: width + props.plus || props.undefind, minHeight: width + props.plus || props.undefind
                }}
                src={props.element.url}
                onClick={props.setData}
            />
            <style type="text/css">{`
                .my_image{
                    margin: 5% 0%;
                }
                .my_image .my_image_img{
                    min-width: 90%;
                    max-width: 90%;
                    background: white;
                    cursor: pointer;
                    padding: 5%;
                    border-radius: 2px;
                }
                @media (max-width: 575) {
                    // .my_image{
                    //     margin: 5% 1% 1% 1%;
                    //     background: white;
                    // }
                    // .my_image .my_image_img{
                    //     min-width: 200px;
                    //     max-width: 200px;
                    //     background: white;
                    //     cursor: pointer;
                    //     padding: 5%;
                    //     border-radius: 2px;
                    // }
                }
            `}</style>
        </div>
    )
}

function VendorInfo(props) {
    let rating = {
        overall: 0,
        one_star: 0,
        two_star: 0,
        three_star: 0,
        four_star: 0,
        five_star: 0
    }
    if (props.vendor && 'rating' in props.vendor) {
        rating = props.vendor.rating_review
    }

    return (
        <div className='vendor_info'>
            <label className='product_label'>Shop Info</label>
            <label className='text-center w-100 pb-0 mb-0'>
                {props.vendor && 'shop_name' in props.vendor ? props.vendor.shop_name : '-'}
            </label>
            <hr className='pt-0 mt-1' />
            <Row noGutters className='_div'>
                <div > Rating: </div>
                <Badge variant='info' style={{ fontSize: '13px', margin: '0% 4% 0% 2%' }}>
                    {rating.overall}
                </Badge>
                <ReactStars
                    count={5}
                    size={15}
                    half={true}
                    value={rating.overall}
                    edit={false}
                    color2={"orange"}
                />
            </Row>
            <div className='d-flex flex-column p-2'>
                <div className='vendor_rating five_stars_vendor_rating'>
                    {'5:'} <span></span>
                    <label>
                        {rating.five_star}
                    </label>
                </div>
                <div className='vendor_rating four_stars_vendor_rating'>
                    {'4:'} <span></span>
                    <label>
                        {rating.four_star}
                    </label>
                </div>
                <div className=' vendor_rating three_stars_vendor_rating'>
                    {'3:'} <span></span>
                    <label>
                        {rating.three_star}
                    </label>
                </div>
                <div className='vendor_rating two_stars_vendor_rating'>
                    {'2:'} <span></span>
                    <label>
                        {rating.two_star}
                    </label>
                </div>
                <div className='vendor_rating one_stars_vendor_rating'>
                    {'1:'} <span></span>
                    <label>
                        {rating.one_star}
                    </label>
                </div>
            </div>

            <hr />
            <style type="text/css">{`
                ._div{
                    font-size: 13px;
                    color: gray;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                .vendor_rating {
                    display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    color: orange;
                    justify-content: center;
                }
                .vendor_rating label{
                     color: gray;
                     padding: 0px;
                     margin: 0px;
                     font-size: 13px;
                }
                .vendor_rating span{
                    width: 60%;
                    min-height: 10px;
                    max-height: 10px;
                    border:1px solid lightgray;
                    position:relative;
                    margin: 0% 5px 0% 10px;
                    border-radius: 2px;
                }
                .vendor_rating span:after {
                    content:'';
                    position:absolute;
                    background: orange;
                    top:0; bottom:0;
                    left:0;
                }
                .one_stars_vendor_rating span:after{
                    width: calc(${rating.one_star}% / 10);
                }
                .two_stars_vendor_rating span:after{
                    width: calc(${rating.two_star}% / 10);
                }
                .three_stars_vendor_rating span:after{
                    width: cals(${rating.three_star}% / 10);
                }
                .four_stars_vendor_rating span:after{
                    width: calc(${rating.four_star}% / 10);
                }
                .five_stars_vendor_rating span:after{
                    width: calc(${rating.five_star}% / 10);
                }
                
                .delivered_slope , .cancelled_slope, .returned_slope {
                    width: 70%;
                    height:30px;
                    margin: 2% 0%;
                    text-align:center;
                    font-size:16px;
                    color: black;
                    vertical-align:middle;
                    overflow: visible;
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .delivered_slope{
                    background: #adebbb;
                } 
                .cancelled_slope{
                    background: #ffe699;
                }
                .returned_slope {
                    background: #ff9999;
                }
                .delivered_slope:after {
                    content: "";
                    position: absolute;
                    display: block;
                    right: -30px;
                    top: 0px;
                    width: 0px;
                    height: 0px;
                    border-top: solid 30px #adebbb;
                    border-right: solid 30px transparent;
                }
                .cancelled_slope:after {
                    content: "";
                    position: absolute;
                    display: block;
                    right: -30px;
                    top: 0px;
                    width: 0px;
                    height: 0px;
                    border-top: solid 30px #ffe699;
                    border-right: solid 30px transparent;
                }
                .returned_slope:after {
                    content: "";
                    position: absolute;
                    display: block;
                    right: -30px;
                    top: 0px;
                    width: 0px;
                    height: 0px;
                    border-top: solid 30px #ff9999;
                    border-right: solid 30px transparent;
                }


            `}</style>
        </div >
    )
}


function TabComponent(props) {
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')
    const [reviewError, setReviewError] = useState('')

    const [loading, setLoading] = useState(false)
    const [showAlertModal, setShowAlertModal] = useState(false)

    let rating_review = {
        rating: {
            overall: 0,
            one_star: 0,
            two_star: 0,
            three_star: 0,
            four_star: 0,
            five_star: 0
        },
        reviews: []
    }
    if (props.single_product.product_type == "simple-product") {
        if ('rating_review' in props.single_product) {
            rating_review = props.single_product.rating_review;
        }
    } else {
        if ('rating_review' in props.activeVariation) {
            rating_review = props.activeVariation.rating_review;
        }
    }

    function ratingChanged(newRating) {
        setRating(newRating)
    }
    function handleSetRating() {
        setLoading(true)
        let parameters = {}
        if (props.single_product.product_type == "simple-product") {
            parameters = { _id: props.single_product._id }
        } else {
            parameters = {
                _id: props.single_product._id,
                variation_id: props.activeVariation._id,
                variation_index: props.activeVariationIndex
            }
        }
        const _url = MuhalikConfig.PATH + '/api/products/review-rating'
        axios({
            method: 'PUT',
            url: _url,
            headers: { 'authorization': props.undecoded_token },
            params: parameters,
            data: { rating: rating, review: review, c_name: props.token.full_name }
        }).then(res => {
            setRating(0)
            setReview('')
            setLoading(false)
            setShowAlertModal(true)
            props.reloadProduct()
        }).catch(err => {
            alert('Error')
        })
    }

    function handleSetReview(e) {
        setReview(e.target.value)
        setReviewError('')
    }

    return (
        <div className='tab_component'>
            <AlertModal
                onHide={(e) => setShowAlertModal(false)}
                show={showAlertModal}
                header={translate('success')}
                message={translate('review_added')}
                iconname={faThumbsUp}
                color={'green'}
            />
            <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className='outer_tabs'>
                <Tab eventKey="Description" title={translate('description')} className='p-3'>
                    {'product_description' in props.single_product ?
                        <div style={{ fontSize: '12px', color: 'gray' }}>
                            {props.single_product.product_description}
                        </div>
                        :
                        <label className='text-center p-5 w-100' style={{ fontSize: '13px', color: 'gray' }}>{translate('no_description')}</label>
                    }
                </Tab>
                <Tab eventKey="Specifications" title={translate('specifications')} className='p-3'>
                    {props.custom_fields.length == 0 ?
                        <label className='text-center p-5 w-100' style={{ fontSize: '13px', color: 'gray' }}>{translate('no_specifications')}</label>
                        :
                        <Table borderless size="sm" >
                            <tbody>
                                {props.custom_fields.map((element, index) =>
                                    <tr key={element._id} style={{ background: index % 2 == 0 ? '#F7F9FE' : 'white' }}>
                                        <td>{element.name}</td>
                                        <td>{element.value}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    }
                </Tab>
                <Tab eventKey="RatingAndReviews" title={translate('rating_reviews')} className='p-2'>
                    <Tabs defaultActiveKey="Rating" id="uncontrolled-tab-example" className='inner_tabs'>
                        <Tab eventKey="Rating" title={translate('rating')}>
                            <Row className='pt-3 pb-3'>
                                <Col lg={4} md={4} sm={4} xs={4} className='d-flex flex-column align-items-center  justify-content-center'>
                                    <div className='text-center' style={{ fontSize: '12px', color: 'gray', marginBottom: '5px' }}>{translate('overall_rating')}</div>
                                    <div className='text-center' style={{ fontSize: '20px', color: 'orange' }}>
                                        {rating_review.rating.overall}
                                    </div>
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        half={true}
                                        value={rating_review.rating.overall}
                                        edit={false}
                                        color2={"orange"}
                                    />
                                </Col>
                                <Col lg={8} md={8} sm={8} xs={8} className='d-flex flex-column'>
                                    <div className='star_rating five_stars_rating'>
                                        {'5:'} <span></span>
                                        <label>
                                            {rating_review.rating.five_star}
                                        </label>
                                    </div>
                                    <div className='star_rating four_stars_rating'>
                                        {'4:'} <span></span>
                                        <label>
                                            {rating_review.rating.four_star}
                                        </label>
                                    </div>
                                    <div className='star_rating three_stars_rating'>
                                        {'3:'} <span></span>
                                        <label>
                                            {rating_review.rating.three_star}
                                        </label>
                                    </div>
                                    <div className='star_rating two_stars_rating'>
                                        {'2:'} <span></span>
                                        <label>
                                            {rating_review.rating.two_star}
                                        </label>
                                    </div>
                                    <div className='star_rating one_stars_rating'>
                                        {'1:'} <span></span>
                                        <label>
                                            {rating_review.rating.one_star}
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="Reviews" title={translate('reviews')} style={{ overflowY: 'auto', maxHeight: '300px' }}>
                            {rating_review.reviews == [] ?
                                <label className='text-center p-5 w-100' style={{ fontSize: '13px', color: 'gray' }}>{translate('no_reviews')}</label>
                                :
                                rating_review.reviews && rating_review.reviews.map((element, index) =>
                                    <div key={element._id} className='review'>
                                        <div>
                                            <label>{element.c_name}</label>
                                            <span>{element.entry_date.substring(0, 10)}</span>
                                        </div>
                                        {element.review}
                                        <hr />
                                    </div>
                                )
                            }
                        </Tab>
                        {props.token.role != '' ?
                            <Tab eventKey="GiveReview" title={translate('give_review')} >
                                <Row className='pt-2 pb-2 pl-5 pr-5'>
                                    <div className='d-inline-flex align-items-center'>
                                        <div style={{ fontSize: '13px', marginRight: '10px' }}>{translate('rate_product')}</div>
                                        <ReactStars
                                            count={5}
                                            value={rating}
                                            half={false}
                                            onChange={ratingChanged}
                                            size={20}
                                            color2={"orange"}
                                        />
                                    </div>
                                    <InputGroup className='mt-1 mb-3'>
                                        <TranslateFormControl
                                            id='enter_review'
                                            as="textarea"
                                            onChange={(e) => handleSetReview(e)}
                                            isInvalid={reviewError}
                                            rows="3"
                                            value={review}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {reviewError}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                    <Button block size='sm' variant='outline-primary'
                                        onClick={handleSetRating}
                                        disabled={rating == '' ? true : false}
                                    >
                                        {loading ? translate('rating') : translate('rate')}
                                        {loading ? <Spinner size='sm' animation='grow' /> : null}
                                    </Button>
                                </Row>
                            </Tab>
                            :
                            null
                        }
                    </Tabs>
                </Tab>
            </Tabs>
            <style type="text/css">{`
                .tab_component{
                    min-height: 300px;
                    max-height: 500px;
                    margin: 2% 0%;
                    background: white;
                }
                td{
                    font-size: 12px;
                    padding: 0.5% 3%;
                    color: gray;
                }

                .star_rating {
                    padding-left: 5%;
                   display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    color: orange;
                }
                .star_rating  label{
                     color: gray;
                     padding: 0px;
                     margin: 0px;
                     font-size: 13px;
                }                
                .star_rating span{
                    width: 350px;
                    min-height: 10px;
                    max-height: 10px;
                    border:1px solid lightgray;
                    position:relative;
                    margin: 0% 5px 0% 10px;
                    border-radius: 2px;
                }
                .star_rating span:after {
                    content:'';
                    position:absolute;
                    background: orange;
                    top:0; bottom:0;
                    left:0;
                }
                .one_stars_rating span:after{
                    width: calc(${rating_review.rating.one_star}% / 10);
                }
                .two_stars_rating span:after{
                    width: calc(${rating_review.rating.two_star}% / 10);
                }
                .three_stars_rating span:after{
                    width: calc(${rating_review.rating.three_star}% / 10);
                }
                .four_stars_rating span:after{
                    width: calc(${rating_review.rating.four_star}% / 10);
                }
                .five_stars_rating span:after{
                    width: calc(${rating_review.rating.five_star}% / 10);
                }

                .review{
                    margin: 2%;
                    font-size: 12px;
                    color: gray;
                }
                .review label{
                    color: black;
                    font-size: 14px;
                }
                .review span{
                    float: right;
                    color: gray;
                    font-size: 12px;
                }

                .give_review{
                    width: 100%;
                    margin: 2%;
                }
                @media (max-width: 767px) {
                    .star_rating span{
                        width: 300px;
                    }
                }
                @media (max-width: 575px) {
                    .outer_tabs{
                        font-size: 13px;
                    }
                    .inner_tabs{
                        font-size: 12px;
                    }
                    .star_rating {
                        padding-left: 14%;
                    }
                    .star_rating span{
                        width: 200px;
                    }
                    .tab_component{
                        min-height: 200px;
                        max-height: 400px;
                        margin: 2% 0%;
                    }
                }
            `}</style>
        </div>
    )
}


function RelatedProducts(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <div className='related_products'>
            <label className='header'>{translate('related_products')}</label>
            <Row noGutters>
                {props.total > 0 ?
                    props.products && props.products.map((element, index) =>
                        props.current_product_id != element._id ?
                            <Card key={element._id} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                {element.product_type == "simple-product" ?
                                    <div className='only_products_div' onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                        <Image ref={ref} className='only_product_img'
                                            style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }}
                                            src={element.product_image_link[0].url}
                                        />
                                        <label className='my_label'>{element.product_name}</label>
                                        <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >{translate('rs')}</span>{element.product_price}</label>
                                    </div>
                                    :
                                    <div className='only_products_div' onClick={() => Router.push('/products/category/[category]/[sub_category]/[product]', `/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`)}>
                                        <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                        <label className='my_label'>{element.product_name}</label>
                                        <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >{translate('rs')}</span>{element.product_variations[0].price}</label>
                                    </div>
                                }
                            </Card>
                            :
                            null
                    )
                    :
                    <Row className='h-100 p-5 w-100'>
                        <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                            <h5 className='text-center w-100'>No Data Found</h5>
                        </div>
                    </Row>
                }
            </Row>
            <style type="text/css">{`
                .related_products .header{
                    font-size: 18px;
                    margin-left: 0.5%;
                    margin-bottom: 0%;
                    padding: 0%;
                    color: gray;
                }
                .related_products .only_products_card{
                    padding: 0.8% 0%;
                    background: none;
                    border: none;
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
                .related_products .only_products_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 3px;
                    margin: 3%;
                    padding: 2%;
                    cursor: pointer;
                    background: white;
                    border: 0.5px solid lightgray;
                }
                .related_products .only_products_div:hover{
                    box-shadow: 0px 0px 10px 0.5px gray;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    margin: 0% 0% 6% 0%;
                }     
                .related_products .only_product_img{
                    margin-bottom: 5px;
                }    
                @media (min-width: 1200px) {
                    .only_products_card{
                        max-width: 14.285714285714285714285714285714%;
                    }
                }
                @media (max-width: 767px) {
                    .related_products .header{
                        font-size: 16px;
                    }
                    .related_products{
                        margin: 1%;
                    }
                }     
            `}</style>
        </div>
    )
}

export default Product