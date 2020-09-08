import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Image, Button, Form, Table, Tab, Badge, Tabs, InputGroup, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Layout from '../../../../components/customer/layout';
import useDimensions from "react-use-dimensions";
import Router from 'next/router'
import {
    isMobile
} from "react-device-detect";
import {
    checkTokenExpAuth,
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

import AlertModal from '../../../../components/alert-modal'
import CustomerWarningAlert from '../../../../components/customer-warning'

import translate from '../../../../../i18n/translate'
import TranslateFormControl from '../../../../../i18n/translate-form-control'
import TranslateOption from '../../../../../i18n/translate-option'
import MyButton from '../../../../components/buttons/my-btn';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import DiscountPrice from '../../../../components/discount-price';
import CalculateDiscountPrice from '../../../../../calculate-discount';
import capitalize from '../../../../../capitalize';

export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []
    let single_product = []
    const { product } = context.query

    const url = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url).then((res) => {
        categories_list = res.data.category.docs,
            sub_categories_list = res.data.sub_category.docs
    }).catch((err) => {
    })

    const url_1 = MuhalikConfig.PATH + `/api/products/product-by-id/${product}`;
    await axios.get(url_1).then((res) => {
        single_product = res.data.data[0]
    }).catch((err) => {
        console.log('err:', err)
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
    const [token, setToken] = useState(null)
    const [user, setUser] = useState({
        _id: null, role: '', mobile: '', full_name: '', gender: '', countary: '', city: '', address: '',
        email: '', shop_name: '', shop_category: '', shop_address: '', avatar: '', status: '', wish_list: ''
    })
    const [showAlertModal, setShowAlertModal] = useState(false)
    const { loading, error, products, pages, total, hasMore } = useQueryInfiniteScroll('sub-category', props.single_product == '' ? null : props.single_product.sub_category.value, '1', isMobile ? '6' : '8')
    const [vendor, setVendor] = useState({})
    const [_loading, cartLoading] = useState(false)
    const [cart_count, setCart_count] = useState(0)
    const [isWishListLoading, setIsWishListLoading] = useState(false)

    useEffect(() => {
        setSingle_product(props.single_product)
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

                const _token = await getTokenFromStorage()
                setToken(_token)
            }
        }

        if (props.single_product != '')
            getVendor()
        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, [props]);

    async function getCartCount(user_id) {
        const url = MuhalikConfig.PATH + `/api/users/cart/${user_id}`;
        await axios.get(url).then((res) => {
            setCart_count(res.data.data.length)
        }).catch((err) => {
        })
    }

    async function getVendor() {
        const url = MuhalikConfig.PATH + `/api/users/user-by-id/${props.single_product.vendor_id}`;
        await axios.get(url).then((res) => {
            setVendor(res.data.data[0])
        }).catch((err) => {
        })
    }

    async function addToWishlist(product_id, variation_id) {
        if (user.full_name == '') {
            Router.push('/login')
        } else {
            setIsWishListLoading(true)
            let data = []
            if (variation_id == null) {
                data = {
                    product_id: product_id,
                }
            } else {
                data = {
                    product_id: product_id,
                    variation_id: variation_id,
                }
            }
            const url = MuhalikConfig.PATH + `/api/users/add-to-wishlist/${user._id}`;
            await axios.put(url, data, {
                headers: {
                    'authorization': token,
                }
            }).then(function (res) {
                reloadUser()
                setIsWishListLoading(false)
            }).catch(function (err) {
                alert('ERROR: Product not added to wishlist')
                setIsWishListLoading(false)
            });
        }
    }

    async function removeToWishlist(obj_id) {
        if (user.full_name == '') {
            Router.push('/login')
        } else {
            setIsWishListLoading(true)
            const _url = MuhalikConfig.PATH + `/api/users/delete/user-wishlist/${user._id}`;
            axios({
                method: 'PUT',
                url: _url,
                params: { object_id: obj_id },
                headers: {
                    'authorization': token,
                }
            }).then(res => {
                reloadUser()
                setIsWishListLoading(false)
            }).catch(err => {
                console.log('remove to wishlist error:', err)
                setIsWishListLoading(false)
                alert('ERROR')
            })
        }
    }

    async function handleAddToCart(quantity, product_id, variation_id, index) {
        let data = {
            p_id: product_id,
            variation_id: variation_id,
            index: index,
            quantity: quantity
        }
        if (user.full_name == '') {
            Router.push('/login')
        } else {
            cartLoading(true)
            const url = MuhalikConfig.PATH + `/api/users/add-to-cart/${user._id}`;
            await axios.put(url, data, {
                headers: {
                    'authorization': token,
                }
            }).then(function (res) {
                cartLoading(false)
                setShowAlertModal(true)
                getCartCount(user._id)
            }).catch(function (err) {
                cartLoading(false)
                alert('Error')
            });
        }
    }

    async function reloadProduct() {
        const url_1 = MuhalikConfig.PATH + `/api/products/product-by-id/${product}`;
        await axios.get(url_1).then((res) => {
            setSingle_product(res.data.data[0])
        }).catch((err) => {
        })
    }

    async function reloadUser() {
        const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${user._id}`;
        await axios.get(user_url).then((res) => {
            setUser(res.data.data[0])
            setCart_count(res.data.data[0].cart.length)
        }).catch((err) => {
            console.log('reload user error:', err)
        })
    }

    return (
        <div className='product_style'>
            <Layout
                role={user.role}
                full_name={user.full_name}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                active_category={category}
                active_sub_category={sub_category}
                {...props}
            >
                <AlertModal
                    onHide={(e) => setShowAlertModal(false)}
                    show={showAlertModal}
                    header={'Success'}
                    message={translate('added_to_cart')}
                    iconname={faThumbsUp}
                    color={'green'}
                />
                {single_product == '' ?
                    <Row className='h-100 p-5 w-100'>
                        <div className='h-100 w-100'>
                            <h5 className='text-center w-100 pt-5'>{translate('out_of_stock')}</h5>
                            <label className='text-center w-100 pt-1 pb-5'>{translate('we_are_sorry_product')}</label>
                        </div>
                    </Row>
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
                                    user={user}
                                    addToWishlist={addToWishlist}
                                    removeToWishlist={removeToWishlist}
                                    handleAddToCart={handleAddToCart}
                                    loading={_loading}
                                    reloadProduct={reloadProduct}
                                    isWishListLoading={isWishListLoading}
                                />
                                :
                                <VariableProduct
                                    single_product={single_product}
                                    vendor={vendor}
                                    token={token}
                                    user={user}
                                    addToWishlist={addToWishlist}
                                    removeToWishlist={removeToWishlist}
                                    handleAddToCart={handleAddToCart}
                                    loading={_loading}
                                    reloadProduct={reloadProduct}
                                    isWishListLoading={isWishListLoading}
                                />
                            }
                        </Row>
                        <RelatedProducts
                            products={products}
                            current_product_id={props.single_product._id}
                            total={total}
                        />
                    </div>
                }
            </Layout >
            <style type="text/css">{`
                .product_style {
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .product_style .main-row{
                    padding: 2% 5%;
                }
                .product_style .single_product_img{
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                }
                .product_style .single_product_img:hover{
                    cursor: pointer;
                    background: ${GlobalStyleSheet.body_color};
                }

                .product_style .display_in_xs{
                    display: none;
                }
                .product_style .display_in_lg_md_sm{
                    display: block;
                }
                
                .product_style .img_col{
                    padding: 2%;
                    background: white;
                }
                .product_style .vertical_align_img{
                    min-width: 14.2857142857%;
                    max-width: 14.2857142857%;
                    margin: 0%;
                    padding: 0%;
                }
                .product_style .larg_img{
                    padding: 0%;
                    margin: 0%;
                }
                .product_style .desc_col{
                    padding: 2% 4%;
                    background: white;
                }
                .product_style .vendor_desc_col{
                    padding: 2% 2% 2% 3%;
                    border-left: 0.5px solid lightgray;
                    background: white;
                }

                .product_style .price_label{
                    width: 100%;
                    margin: 2% 0%;
                }

                .product_style .slope{
                    width: 80%;
                    height: 50px;
                    margin: 2% 0%;
                    background:${GlobalStyleSheet.primry_color};
                    text-align:center;
                    font-size:26px;
                    color:#fff;
                    overflow: visible;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .product_style .slope:after {
                    content: "";
                    position: absolute;
                    display: block;
                    right: -35px;
                    top: 0px;
                    width: 0px;
                    height: 0px;
                    border-top: solid 50px ${GlobalStyleSheet.primry_color};
                    border-right: solid 35px transparent;
                }
                .product_style .stock{
                    font-size: 16px;
                    width: 100%;
                    background: #c1f0c1;
                    color: #595959;
                    padding: 2%;
                    margin: 2% 0%;
                }
                .product_style .stock span{
                    font-size: 13px;
                    width: 100%;
                    display: flex;
                    color: black;
                    padding: 2% 2% 0% 2%;
                    border-top: 1px solid lightgray;
                }
                .product_style .warranty {
                    padding-top: 2%;
                    font-size: 14px;
                    color: gray;
                }
                .product_style .warranty .label {
                    width: 100%;
                }
                .product_style .cart{
                    margin: 5% 0%;
                }

                .product_style .rating_review_col{
                    font-size: 12px;
                    color: gray;
                    align-items: center;
                }
                
                .product_style .product_label{
                    font-size: 18px;
                    color: gray;
                    width: 100%;
                    margin: 10px 0%;
                    text-align: center;
                }

                .product_style .add_to_wish_list{
                    color: gray;
                    width: 100%;
                    margin: 3% 0%;
                    display: flex;
                    align-items: center;
                }
                .product_style .wishlist_font_awsome{
                    color: gray;
                    margin-left: 3%;
                    min-width: 20px;
                    max-width: 20px;
                    min-height: 20px;
                    max-height: 20px;
                }
                .product_style .wishlist_font_awsome:hover{
                    color: orange;
                    cursor: pointer;
                }
                .product_style  .remove_wishlist_font_awsome {
                    cursor: pointer;
                    color: orange;
                    margin-left: 3%;
                    min-width: 20px;
                    max-width: 20px;
                    min-height: 20px;
                    max-height: 20px;
                }
                @media (max-width: 1199px) {
                    .product_style .main-row{
                        padding: 2% 3%;
                    }
                    .product_style .img_col{
                        padding: 2% 0% 2% 2%;
                    }
                    .product_style .vertical_align_img{
                        padding: 0% 1%;
                    }
                    .product_style .desc_col{
                        padding: 2% 1% 2% 2%;
                    }
                    .product_style .vendor_desc_col{
                        padding: 2%;
                    }
                }
                @media (max-width: 991px) {
                    .product_style .main-row{
                        padding: 2%;
                    }
                    .product_style .img_col{
                        padding: 2% 0% 2% 2%;
                    }
                    .product_style .vertical_align_img{
                        padding: 0% 1% 0% 2%;
                    }
                    .product_style .desc_col{
                        padding: 2% 1% 2% 2%;
                    }
                    .product_style .vendor_desc_col{
                        padding: 2% 1% 2% 1%;
                    }
                }
                @media (max-width: 767px) {
                    .product_style .main-row{
                        padding: 2% 2% 50px 2%;
                    }
                    .product_style .img_col{
                        padding: 2%;
                    }
                    .product_style .vertical_align_img{
                        padding: 0% 0% 0% 3%;
                    }
                    .product_style .desc_col{
                        padding: 2%;
                    }
                    .product_style .vendor_desc_col{
                        margin: 2% 0%;
                        border-radius: 5px;
                        padding: %;
                        border: none;
                    }
                }
                @media (max-width: 575px) {
                    .product_style .main-row{
                        padding: 1.5% 1.5% 50px 1.5%;
                    }
                    .product_style .img_col{
                        border-radius: 5px;
                    }
                    .product_style .larg_img{
                        padding: 0% 2%;
                        margin: 0% 2%;
                    }
                    .product_style .desc_col{
                        margin: 2% 0%;
                        border-radius: 5px;
                    }
                    .product_style .vendor_desc_col{
                        margin-bottom: 2%;
                    }
                    .product_style .slope{
                        width: 90%;
                    }

                    .product_style .display_in_lg_md_sm{
                        display: none;
                    }
                    .product_style .display_in_xs{
                        display: block;
                    }

                    .product_style .disable_scroll{
                        display: block;
                        margin-top: 2%;
                    }
                    .product_style .disable_scroll {
                        display: inline-flex;
                        background: ${GlobalStyleSheet.body_color};
                        width: 100%;
                        padding: 0.5%;
                        margin: 1% 0%;
                        overflow-y: scroll;
                    }
                    .product_style .disable_scroll::-webkit-scrollbar {
                        display: none;
                    }
                    .product_style .disable_scroll {
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
    if ('rating_review' in props.single_product) {
        rating_review = props.single_product.rating_review;
    }
    const [quantity, setQuantity] = useState(1)

    function handleSetQuantityMinus() {
        setQuantity(quantity - 1)
    }
    function handleSetQuantityPlus() {
        setQuantity(quantity + 1)
    }

    const [isInWishlist, setIsInWishlist] = useState(false)
    const [wish_list_obj_id, setwish_list_obj_id] = useState('')

    useEffect(() => {
        setIsInWishlist(false)
        setwish_list_obj_id('')
        props.user.wish_list && props.user.wish_list.forEach((element, index) => {
            if (element.product_id == props.single_product._id) {
                setIsInWishlist(true)
                setwish_list_obj_id(element._id)
            }
        })
        return () => {
        }
    }, [props])

    return (
        <div className='simple_product'>
            <Row className='m-0 p-0'>
                <Col lg={4} md={4} sm={6} xs={12} className='img_col'>
                    <Row >
                        <Col lg={3} md={3} sm={2} xs={12} className='display_in_lg_md_sm vertical_align_img'>
                            {props.single_product.product_image_link && props.single_product.product_image_link.map((element, index) =>
                                <MyImages key={index}
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
                                    <Col xs={2} key={index} className='p-0 m-0'>
                                        <MyImages key={index}
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
                    <div className='slope'>{translate('rs')}
                        <CalculateDiscountPrice price={props.single_product.product_price} discount={props.single_product.product_discount} />
                    </div>
                    <DiscountPrice isShowProuct={true} price={props.single_product.product_price} discount={props.single_product.product_discount} />
                    <Row noGutters className='mt-2 mb-3'>
                        <Col lg={6} md={6} sm={6} xs={6} className='rating_review_col'>
                            <div className='d-inline-flex'>
                                <div className='product_rating'>{translate('rating')}: </div>
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
                            <div>{translate('reviews')} </div>
                            <div>{rating_review.reviews.length}</div>
                        </Col>
                    </Row>
                    {props.user.role == 'customer' || props.user.role == '' ?
                        isInWishlist ?
                            <div className='add_to_wish_list'>
                                <label className='p-0 m-0'>{props.isWishListLoading ? translate('removing') : translate('remove_to_wishlist')}</label>
                                <FontAwesomeIcon icon={faHeart} className='remove_wishlist_font_awsome' onClick={() => props.removeToWishlist(wish_list_obj_id)} />
                            </div>
                            :
                            <div className='add_to_wish_list'>
                                <label className='p-0 m-0'>{props.isWishListLoading ? translate('adding') : translate('add_to_wishlist')}</label>
                                <FontAwesomeIcon icon={faHeart} className='wishlist_font_awsome' onClick={() => props.addToWishlist(props.single_product._id, null)} />
                            </div>
                        :
                        null
                    }

                    <div className='stock'>
                        {translate('available_in_stock')}
                        <span>{translate('stock')}: {props.single_product.product_in_stock}</span>
                    </div>
                    <div className='warranty'>
                        <label className='label'>{translate('brand')}: {props.single_product.product_brand_name}</label>
                    </div>
                    <div className='warranty'>
                        {props.single_product.product_warranty > 0 ?
                            <>
                                <label className='label'> {translate('warranty')} : {props.single_product.product_warranty} <span style={{ fontSize: '11px', color: 'gray' }}>{translate('months')}</span></label>
                                <label className='label'> {props.single_product.warranty_type}</label>
                            </>
                            :
                            translate('no_warranty')
                        }
                    </div>
                    <div className='cart'>
                        <Row noGutters>
                            <Form.Group as={Col} lg='auto' md='auto' sm='auto' xs='12' controlId="formGridState">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <MyButton onClick={handleSetQuantityMinus} disabled={quantity == 1}>
                                            <FontAwesomeIcon icon={faMinus} className='fontawesome' />
                                        </MyButton>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        style={{ maxWidth: '80px', textAlign: 'center' }}
                                        type='number'
                                        value={quantity}
                                        disabled={true}
                                    />
                                    <InputGroup.Prepend>
                                        <MyButton onClick={handleSetQuantityPlus} disabled={quantity == props.single_product.product_in_stock}>
                                            <FontAwesomeIcon icon={faPlus} className='fontawesome' />
                                        </MyButton>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                            <Col className='ml-1'>
                                <MyButton block disabled={props.loading || props.user.role == 'vendor' || props.user.role == 'admin'}
                                    onClick={() => props.handleAddToCart(quantity, props.single_product._id, '', '')}>
                                    {props.loading ? translate('adding') : translate('add_to_cart')}
                                    {props.loading ? <Spinner animation="grow" size="sm" /> : null}
                                </MyButton>
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
                token={props.token}
                user={props.user}
                reloadProduct={props.reloadProduct}
            />
            <style type="text/css">{`
                .simple_product{
                    width: 100%;
                }
                .simple_product .fontawesome {
                    min-width: 15px;
                    max-width: 15px;
                    min-height: 15px;
                    max-height: 15px;
                }
            `}</style>
        </div >
    )
}
// Proxima Nova, Helvetica Neue, Arial, sans - serif;
function VariableProduct(props) {
    const [ref, { x, y, width }] = useDimensions();
    const [activeVariation, setActiveVariation] = useState(props.single_product.product_variations[0])
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [activeVariationIndex, setActiveVariationIndex] = useState(0)
    const [variation_items_array, setVariation_items_array] = useState([])

    const [selected_items_array, setSelected_items_array] = useState([])
    const [showVariationNotFountAlert, setShowVariationNotFountAlert] = useState(false)

    const [isInWishlist, setIsInWishlist] = useState(false)
    const [wish_list_obj_id, setwish_list_obj_id] = useState('')

    useEffect(() => {
        setIsInWishlist(false)
        setwish_list_obj_id('')
        props.user.wish_list && props.user.wish_list.forEach((element, index) => {
            if (element.product_id == props.single_product._id && element.variation_id == activeVariation._id) {
                setIsInWishlist(true)
                setwish_list_obj_id(element._id)
            }
        })
        return () => {
        }
    }, [props])

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

    const [quantity, setQuantity] = useState(1)
    function handleSetQuantityMinus() {
        setQuantity(quantity - 1)
    }
    function handleSetQuantityPlus() {
        setQuantity(quantity + 1)
    }

    if ('rating_review' in activeVariation) {
        rating_review = activeVariation.rating_review;
    }

    useEffect(() => {
        let array = []
        let array_1 = []
        let array_2 = []
        let array_3 = []
        let obj = {}
        props.single_product.product_variations.forEach((element, index) => {
            element.item.forEach((e, i) => {
                array.push(e)
            })
        })
        array.forEach((element, index) => {
            array_2 = []
            array.forEach((e, i) => {
                if (e.name == element.name) {
                    let found = false
                    array_2 && array_2.forEach((ee, ii) => {
                        if (e.value == ee) {
                            found = true
                            return
                        }
                    })
                    if (!found) {
                        array_2.push(e.value)
                    }
                }
            })

            let found = false
            array_1 && array_1.forEach((e, i) => {
                if (element.name == e.name) {
                    found = true
                    return
                }
            })
            if (!found) {
                obj = {}
                obj['name'] = element.name
                obj['value'] = array_2
                if (array_2.length > 5) {
                    obj['isOptions'] = true
                } else {
                    obj['isOptions'] = false
                }
                array_1.push(obj)
                array_3.push(props.single_product.product_variations[0].item[index].value)
            }
        })
        setSelected_items_array(array_3)
        setVariation_items_array(array_1)

        return () => { }
    }, [])

    async function handleVariationItemClick(curr_item_index, curr_item_val) {
        let copyArray = []
        copyArray = Object.assign([], selected_items_array)
        copyArray[curr_item_index] = curr_item_val

        let flag = false
        props.single_product.product_variations.forEach((element, index) => {
            let found = false
            copyArray.forEach((e, i) => {
                if (element.item[i].value != e) {
                    found = true
                    return
                }
            })
            if (!found) {
                setSelected_items_array(copyArray)
                setActiveVariation(element)
                setActiveVariationIndex(index)
                setActiveImageIndex(0)
                flag = true
                return
            }
        })
        if (!flag) {
            setShowVariationNotFountAlert(true)
            setTimeout(() => {
                setShowVariationNotFountAlert(false)
            }, 3000);
        }
    }

    return (
        <div className='variable_product'>
            <CustomerWarningAlert
                show={showVariationNotFountAlert}
                onHide={() => setShowVariationNotFountAlert(false)}
                delay={3000}
            />
            <Row className='m-0 p-0'>
                <Col lg={4} md={4} sm={6} xs={12} className='img_col'>
                    <Row className='p-0 m-0'>
                        <Col lg={3} md={3} sm={2} xs={12} className='display_in_lg_md_sm vertical_align_img'>
                            {activeVariation.image_link && activeVariation.image_link.map((element, index) =>
                                <MyImages
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
                                    <Col xs={2} key={index} className='p-0 m-0'>
                                        <MyImages
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
                    <div className='slope'>{translate('rs')}
                        <CalculateDiscountPrice price={activeVariation.price} discount={activeVariation.discount} />
                    </div>
                    <DiscountPrice isShowProuct={true} price={activeVariation.price} discount={activeVariation.discount} />
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
                            <div>{translate('reviews')}</div>
                            <div>{rating_review.reviews.length}</div>
                        </Col>
                    </Row>

                    {props.user.role == 'customer' || props.user.role == '' ?
                        isInWishlist ?
                            <div className='add_to_wish_list'>
                                <label className='p-0 m-0'>{props.isWishListLoading ? translate('removing') : translate('remove_to_wishlist')}</label>
                                <FontAwesomeIcon icon={faHeart} className='remove_wishlist_font_awsome' onClick={() => props.removeToWishlist(wish_list_obj_id)} />
                            </div>
                            :
                            <div className='add_to_wish_list'>
                                <label className='p-0 m-0'>{props.isWishListLoading ? translate('adding') : translate('add_to_wishlist')}</label>
                                <FontAwesomeIcon icon={faHeart} className='wishlist_font_awsome' onClick={() => props.addToWishlist(props.single_product._id, activeVariation._id)} />
                            </div>
                        :
                        null
                    }

                    <div className='stock'>
                        {translate('available_in_stock')}
                        <span>{translate('stock')}: {activeVariation.stock}</span>
                    </div>

                    <div className='warranty'>
                        <label className='label'>{translate('brand')}: {props.single_product.product_brand_name}</label>
                    </div>

                    <div className='warranty'>
                        {activeVariation.warranty > 0 ?
                            <>
                                <label className='label'> {translate('warranty')} : {activeVariation.warranty} <span style={{ fontSize: '11px', color: 'gray' }}>{translate('months')}</span></label>
                                <label className='label'> {activeVariation.warranty_type}</label>
                            </>
                            :
                            translate('no_warranty')
                        }
                    </div>

                    <div className='variation_item'>
                        {variation_items_array && variation_items_array.map((element, index) =>
                            <div key={index}>
                                <div className='item_name_div'>
                                    {capitalize(element.name)}
                                </div>

                                {element.isOptions ?
                                    <Form.Control as='select' value={selected_items_array[index]} onChange={(e) => { handleVariationItemClick(index, e.target.value) }}>
                                        {element.value && element.value.map((e, i) =>
                                            <option key={i} value={e}>{e}</option>
                                        )}
                                    </Form.Control>
                                    :
                                    element.value && element.value.map((e, i) =>
                                        <Button key={i} className='item_value_btn' size='sm' variant={e == selected_items_array[index] ? 'primary' : 'outline-primary'}
                                            onClick={() => { handleVariationItemClick(index, e) }}
                                        >
                                            {e}
                                        </Button>
                                    )
                                }
                            </div>
                        )}
                    </div>

                    <div className='cart'>
                        <Row noGutters>
                            <Form.Group as={Col} lg='auto' md='auto' sm='auto' xs='12' controlId="formGridState">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <MyButton onClick={handleSetQuantityMinus} disabled={quantity == 1}>
                                            <FontAwesomeIcon icon={faMinus} className='fontawesome' />
                                        </MyButton>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        style={{ maxWidth: '80px', textAlign: 'center' }}
                                        type='number'
                                        value={quantity}
                                        disabled={true}
                                    />
                                    <InputGroup.Prepend>
                                        <MyButton onClick={handleSetQuantityPlus} disabled={quantity == activeVariation.stock}>
                                            <FontAwesomeIcon icon={faPlus} className='fontawesome' />
                                        </MyButton>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                            <Col className='ml-1'>
                                <MyButton block disabled={props.loading || props.user.role == 'vendor' || props.user.role == 'admin'}
                                    onClick={() => props.handleAddToCart(quantity, props.single_product._id, activeVariation._id, activeVariationIndex)}>
                                    {props.loading ? translate('adding') : translate('add_to_cart')}
                                    {props.loading ? <Spinner animation="grow" size="sm" /> : null}
                                </MyButton>
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
                activeVariation={activeVariation}
                activeVariationIndex={activeVariationIndex}
                custom_fields={activeVariation.custom_fields}
                item={activeVariation.item}
                token={props.token}
                user={props.user}
                reloadProduct={props.reloadProduct}
            />
            <style type="text/css">{`
                .variable_product{
                    width: 100%;
                }
                .variable_product .variation_item{
                    width: 100%;
                    padding: 4%;
                    background: #ebf6f9;
                    border-radius: 5px;
                }
                .variable_product .item{
                    display: flex;
                    margin-bottom: 3%;
                    flex-direction: column;
                }
                .variable_product .item_name_div{
                    color: black;
                    font-size: 14px;
                    margin: 0% 1%;
                }
                .variable_product .item_value_btn{
                    margin: 1%;
                }
                .variable_product .fontawesome {
                    min-width: 15px;
                    max-width: 15px;
                    min-height: 15px;
                    max-height: 15px;
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
            <label className='product_label'>{translate('shop_info')}</label>
            <label className='text-center w-100 pb-0 mb-0'>
                {props.vendor && 'shop_name' in props.vendor ? props.vendor.shop_name : '-'}
            </label>
            <hr className='pt-0 mt-1' />
            <Row noGutters className='abc'>
                <div >{translate('rating')}</div>
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
                .vendor_info .abc{
                    font-size: 13px;
                    color: gray;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                .vendor_info .vendor_rating {
                    display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    color: orange;
                    justify-content: center;
                }
                .vendor_info .vendor_rating label{
                     color: gray;
                     padding: 0px;
                     margin: 0px;
                     font-size: 13px;
                }
                .vendor_info .vendor_rating span{
                    width: 60%;
                    min-height: 10px;
                    max-height: 10px;
                    border:1px solid lightgray;
                    position:relative;
                    margin: 0% 5px 0% 10px;
                    border-radius: 2px;
                }
                .vendor_info .vendor_rating span:after {
                    content:'';
                    position:absolute;
                    background: orange;
                    top:0; bottom:0;
                    left:0;
                }
                .vendor_info .one_stars_vendor_rating span:after{
                    width: calc(${rating.one_star}% / 10);
                }
                .vendor_info .two_stars_vendor_rating span:after{
                    width: calc(${rating.two_star}% / 10);
                }
                .vendor_info .three_stars_vendor_rating span:after{
                    width: cals(${rating.three_star}% / 10);
                }
                .vendor_info .four_stars_vendor_rating span:after{
                    width: calc(${rating.four_star}% / 10);
                }
                .vendor_info .five_stars_vendor_rating span:after{
                    width: calc(${rating.five_star}% / 10);
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
            headers: { 'authorization': props.token },
            params: parameters,
            data: { rating: rating, review: review, c_name: props.user.full_name }
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
                                    <tr key={index} style={{ background: index % 2 == 0 ? '#F7F9FE' : 'white' }}>
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
                                    <div key={index} className='review'>
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
                        {props.user.role != '' && props.user.role == 'customer' ?
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
                .tab_component td{
                    font-size: 12px;
                    padding: 0.5% 3%;
                    color: gray;
                }

                .tab_component .star_rating {
                    padding-left: 5%;
                   display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    color: orange;
                }
                .tab_component .star_rating  label{
                     color: gray;
                     padding: 0px;
                     margin: 0px;
                     font-size: 13px;
                }                
                .tab_component .star_rating span{
                    width: 350px;
                    min-height: 10px;
                    max-height: 10px;
                    border:1px solid lightgray;
                    position:relative;
                    margin: 0% 5px 0% 10px;
                    border-radius: 2px;
                }
                .tab_component .star_rating span:after {
                    content:'';
                    position:absolute;
                    background: orange;
                    top:0; bottom:0;
                    left:0;
                }
                .tab_component .one_stars_rating span:after{
                    width: calc(${rating_review.rating.one_star}% / 10);
                }
                .tab_component .two_stars_rating span:after{
                    width: calc(${rating_review.rating.two_star}% / 10);
                }
                .tab_component .three_stars_rating span:after{
                    width: calc(${rating_review.rating.three_star}% / 10);
                }
                .tab_component .four_stars_rating span:after{
                    width: calc(${rating_review.rating.four_star}% / 10);
                }
                .tab_component .five_stars_rating span:after{
                    width: calc(${rating_review.rating.five_star}% / 10);
                }

                .tab_component .review{
                    margin: 2%;
                    font-size: 12px;
                    color: gray;
                }
                .tab_component .review label{
                    color: black;
                    font-size: 14px;
                }
                .tab_component .review span{
                    float: right;
                    color: gray;
                    font-size: 12px;
                }

                .tab_component .give_review{
                    width: 100%;
                    margin: 2%;
                }
                @media (max-width: 767px) {
                    .tab_component .star_rating span{
                        width: 300px;
                    }
                }
                @media (max-width: 575px) {
                    .tab_component .outer_tabs{
                        font-size: 13px;
                    }
                    .tab_component .inner_tabs{
                        font-size: 12px;
                    }
                    .tab_component .star_rating {
                        padding-left: 14%;
                    }
                    .tab_component .star_rating span{
                        width: 200px;
                    }
                    .tab_component .tab_component{
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
                            <Card key={index} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                                {element.product_type == "simple-product" ?
                                    <Link href='/products/category/[category]/[sub_category]/[product]' as={`/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`}>
                                        <a className='only_products_div'>
                                            <Image ref={ref} className='only_product_img'
                                                style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }}
                                                src={element.product_image_link[0].url}
                                            />
                                            <label className='my_label'>{element.product_name}</label>
                                            <DiscountPrice price={element.product_price} discount={element.product_discount} />
                                        </a>
                                    </Link>
                                    :
                                    <Link href='/products/category/[category]/[sub_category]/[product]' as={`/products/category/${element.category.value}/${element.sub_category.value}/${element._id}`}>
                                        <a className='only_products_div'>
                                            <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                            <label className='my_label'>{element.product_name}</label>
                                            <DiscountPrice price={element.product_variations[0].price} discount={element.product_variations[0].discount} />
                                        </a>
                                    </Link>
                                }
                            </Card>
                            :
                            null
                    )
                    :
                    <Row className='h-100 p-5 w-100'>
                        <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                            <h5 className='text-center w-100'>{translate('no_data_found')}</h5>
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
                .related_products .my_label{
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
                    text-decoration: none;
                    margin: 3%;
                    padding: 2%;
                    cursor: pointer;
                    background: white;
                    border: 0.5px solid lightgray;
                }
                .related_products .only_products_div:hover{
                    box-shadow: 0px 0px 10px 0.5px gray;
                    transition-timing-function: ease-in;
                    text-decoration: none;
                    transition: 0.5s;
                    margin: 0% 0% 6% 0%;
                }     
                .related_products .only_product_img{
                    margin-bottom: 5px;
                }    
                @media (min-width: 1200px) {
                    .related_products .only_products_card{
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