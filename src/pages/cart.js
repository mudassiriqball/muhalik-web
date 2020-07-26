import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Row, Col, Button, Form, Image, Card, Spinner, InputGroup } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useDimensions from "react-use-dimensions";
import MuhalikConfig from '../sdk/muhalik.config'
import GlobalStyleSheet from '../styleSheet'
import Layout from './components/customer/layout'
import { getDecodedTokenFromStorage, getTokenFromStorage } from '../sdk/core/authentication-service'
import Router from 'next/router'
import MyButton from './components/buttons/my-btn'
import AlertModal from './components/alert-modal'

React.useLayoutEffect = React.useEffect

import translate from '../i18n/translate'
import TranslateFormControl from '../i18n/translate-form-control'


export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []

    const url = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url).then((res) => {
        categories_list = res.data.category.docs,
            sub_categories_list = res.data.sub_category.docs
    }).catch((error) => {
    })

    return {
        props: {
            categories_list,
            sub_categories_list,
        },
    }
}

export default function Cart(props) {
    const [ref, { x, y, width }] = useDimensions();
    const [isProcedeOrder, setIsProcedeOrder] = useState(false)

    const [token, setToken] = useState({ role: '', full_name: '' })
    const [undecoded_token, setUndecoded_token] = useState('')
    const [cart_list, setCart_list] = useState([])
    const [cart_count, setCart_count] = useState(0)
    const [products, setProducts] = useState([])

    const [checkAll, setCheckAll] = useState(false)
    const [sub_total, setTotal] = useState(0)
    const [shipping_charges, setShipping_charges] = useState(0)
    useLayoutEffect(() => {
        setProducts([])
        getData()
    }, []);

    async function getData() {
        const decoded_token = await getDecodedTokenFromStorage()
        if (decoded_token !== null) {
            if (decoded_token.role != 'customer') {
                Router.push('/')
            } else {
                setToken(decoded_token)
                const url = MuhalikConfig.PATH + `/api/users/cart/${decoded_token._id}`;
                await axios.get(url).then((res) => {
                    setCart_list(res.data.data)
                    setCart_count(res.data.data.length)
                }).catch((error) => {
                })
                if (decoded_token.city == 'riyadh' || decoded_token.city == 'Riyadh') {
                    setShipping_charges(25)
                } else {
                    setShipping_charges(45)
                }
            }
            const _token = await getTokenFromStorage()
            if (_token !== null) {
                setUndecoded_token(_token)
            }
        }
    }

    useEffect(() => {
        calculateTotalPrice()
    }, [products])

    useEffect(() => {
        setProducts([])
        cart_list.forEach((element, index) => {
            getProducts(element, index)
        })
    }, [cart_list])
    async function getProducts(element, index) {
        const url = MuhalikConfig.PATH + `/api/products/product-by-id/${element.p_id}`;
        await axios.get(url).then(res => {
            let obj = {}
            obj['_id'] = element._id
            obj['p_id'] = element.p_id
            obj['variation_id'] = element.variation_id
            obj['quantity'] = element.quantity
            obj['product'] = res.data.data[0]
            obj['check'] = false
            obj['isLoading'] = false
            if (res.data.data[0].product_type != "simple-product") {
                res.data.data[0].product_variations.forEach((e, i) => {
                    if (e._id == element.variation_id) {
                        obj['variation'] = e
                    }
                })
            }
            setProducts(prevPro => {
                return [...new Set([...prevPro, obj])]
            })
        }).catch((error) => {
            alert('Error')
        })
    }

    function calculateTotalPrice() {
        let count = 0
        products.forEach(element => {
            if (element.product.product_type == "simple-product") {
                count += element.quantity * element.product.product_price
            } else {
                count += element.quantity * element.variation.price
            }
        })
        setTotal(count)
    }

    function getCartCont(length) {
        let options = []
        for (let i = 0; i < length; i++) {
            options.push(
                <option key={i}>{i + 1}</option>
            )
        }
        return options
    }

    function handleSetQuantity(quan, index) {
        let copyArray = []
        copyArray = Object.assign([], products)
        copyArray[index].quantity = quan
        setProducts(copyArray)
    }

    function handleAllCheck(e) {
        let copyArray = []
        copyArray = Object.assign([], products)
        if (e.target.checked) {
            products.forEach((element, index) => {
                copyArray[index].check = true
            })
            setCheckAll(true)
        } else {
            products.forEach((element, index) => {
                copyArray[index].check = false
            })
            setCheckAll(false)
        }
        setProducts(copyArray)
    }

    function handleCheck(isChecked, index) {
        let copyArray = []
        copyArray = Object.assign([], products)
        copyArray[index].check = !copyArray[index].check
        setProducts(copyArray)

        if (!isChecked) {
            setCheckAll(false)
        }
    }

    function handleAllDeleteClick() {
        products.forEach((element, index) => {
            if (element.check) {
                handleDeleteCart(element._id, index)
            }
        })
    }

    async function handleDeleteCart(obj_id, index) {
        let copyArray = []
        copyArray = Object.assign([], products)
        copyArray[index].isLoading = true
        setProducts(copyArray)
        const _url = MuhalikConfig.PATH + `/api/users/clear-cart-data-by-id/${token._id}`;
        await axios({
            method: 'PUT',
            url: _url,
            params: { obj_id: obj_id },
            headers: {
                'authorization': undecoded_token
            }
        }).then(res => {
            let copyArray = []
            copyArray = Object.assign([], products)
            copyArray.splice(index, 1)
            setCart_count(cart_count - 1)
            setProducts(copyArray)
        }).catch(err => {
            let copyArray = []
            copyArray = Object.assign([], products)
            copyArray[index].isLoading = false
            setProducts(copyArray)
            alert('Error')
        })
    }

    async function handleProcedeOrder() {
        setIsProcedeOrder(true)
    }

    async function handleClearCart() {
        const _url = MuhalikConfig.PATH + `/api/users/clear-cart/${token._id}`;
        await axios({
            method: 'DELETE',
            url: _url,
            headers: {
                'authorization': undecoded_token
            }
        }).then(res => {
            Router.reload()
        }).catch(err => {
            alert('Error')
        })
    }

    function handlePlaceOrderError(element) {
        let copyArray = Object.assign([], products)
        let obj = copyArray[element.index]
        obj[err] = true
        copyArray[element.index] = obj;
        setProducts(copyArray)
    }

    return (
        <div className='_cart'>
            <Layout
                role={token.role || ''}
                name={token.full_name || ''}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                {...props}
            >
                <div className='cart'>
                    {isProcedeOrder ?
                        <ProcedeOrder
                            products={products}
                            token={token}
                            undecoded_token={undecoded_token}
                            cancel={() => setIsProcedeOrder(false)}
                            shipping_charges={shipping_charges}
                            sub_total={sub_total}
                            clearCart={handleClearCart}
                            handlePlaceOrderError={handlePlaceOrderError}
                        />
                        :
                        products == '' ?
                            <div style={{ minHeight: '40vh' }} className='w-100 d-flex align-items-center justify-content-center'>
                                <MyButton onClick={() => Router.push('/')}> {translate('continue_shopping')}</MyButton>
                            </div>
                            :
                            < Row noGutters>
                                <Col className='_col' lg={8} md={8} sm={12} xs={12}>
                                    <div>
                                        <Card>
                                            <Card.Body className='card_body'>
                                                <Form.Check checked={checkAll} onChange={(e) => handleAllCheck(e)}></Form.Check>
                                                <div>{translate('select_all')}</div>
                                                <div className='delete' onClick={handleAllDeleteClick}>
                                                    <FontAwesomeIcon icon={faTrash} className='fontawesome' />
                                                    <div>{translate('delete')}</div>
                                                </div>
                                            </Card.Body>
                                        </Card>

                                        {products && products.map((element, index) =>
                                            <Card key={element._id}>
                                                <Card.Body className='card_body' style={{ color: element.err ? 'red' : null }}>
                                                    <Form.Check className='m-0 pr-0' checked={element.check} onChange={(e) => handleCheck(e.target.checked, index)} ></Form.Check>
                                                    {element.product.product_type == "simple-product" ?
                                                        <Row className='w-100 p-0 m-0'>
                                                            <Col lg={2} md={2} sm={2} xs={3} className='_padding'>
                                                                <Image ref={ref} className='cart_img' thumbnail
                                                                    style={{ maxHeight: width + 15 || '200px', minHeight: width + 15 || '200px' }}
                                                                    src={element.product.product_image_link[0].url}
                                                                />
                                                            </Col>
                                                            <Col className='_padding'>
                                                                <div className='p-0 m-0'>{element.product.product_name}</div>
                                                            </Col>
                                                            <Col className='_padding' lg='auto' md='auto' sm='auto' xs='auto' style={{ color: 'blue' }}>
                                                                <label>{translate('rs')}{element.product.product_price * element.quantity}</label>
                                                            </Col>
                                                            <Col className='d-flex flex-column _padding' lg={2} md='auto' sm='auto' xs='auto'>
                                                                <Form.Control as="select" size='sm' onChange={(e) => handleSetQuantity(e.target.value, index)} defaultValue="Choose...">
                                                                    <option>{element.quantity}</option>
                                                                    {getCartCont(element.product.product_in_stock).map(element =>
                                                                        element
                                                                    )}
                                                                </Form.Control>
                                                                <div className='d-inline-flex mt-auto'>
                                                                    <Link href='/[category]/[sub_category]/[product]' as={`/${element.product.category.value}/${element.product.sub_category.value}/${element.product._id}`}>
                                                                        <a style={{ fontSize: '12px', marginRight: '10px' }}>View</a>
                                                                    </Link>
                                                                    <div className='delete' onClick={() => handleDeleteCart(element._id, index)}>
                                                                        <div>{element.isLoading ? <Spinner animation="grow" size="sm" /> : 'Delete'}</div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        :
                                                        <Row className='w-100 p-0 m-0'>
                                                            <Col lg={2} md={2} sm={2} xs={3} className='_padding'>
                                                                <Image ref={ref} className='cart_img' thumbnail
                                                                    style={{ maxHeight: width + 15 || '200px', minHeight: width + 15 || '200px' }}
                                                                    src={element.variation.image_link[0].url}
                                                                />
                                                            </Col>
                                                            <Col className='_padding'>
                                                                <div className='p-0 m-0'>{element.product.product_name}</div>
                                                            </Col>
                                                            <Col className='_padding' lg='auto' md='auto' sm='auto' xs='auto' style={{ color: 'blue' }}>
                                                                <label>{translate('rs')}{element.variation.price * element.quantity}</label>
                                                            </Col>
                                                            <Col className='d-flex flex-column _padding' lg={2} md='auto' sm='auto' xs='auto'>
                                                                <Form.Control as="select" size='sm' onChange={(e) => handleSetQuantity(e.target.value, index)} defaultValue="Choose...">
                                                                    <option>{element.quantity}</option>
                                                                    {getCartCont(element.variation.stock).map(element =>
                                                                        element
                                                                    )}
                                                                </Form.Control>
                                                                <div className='d-inline-flex mt-auto'>
                                                                    <Link href='/[category]/[sub_category]/[product]' as={`/${element.product.category.value}/${element.product.sub_category.value}/${element.product._id}`}>
                                                                        <a style={{ fontSize: '12px', marginRight: '10px' }}>{translate('view')}</a>
                                                                    </Link>
                                                                    <div className='delete' onClick={() => handleDeleteCart(element._id, index)}>
                                                                        <div>{element.isLoading ? <Spinner animation="grow" size="sm" /> : translate('delete')}</div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    }
                                                </Card.Body>
                                            </Card>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12} className='_col'>
                                    <Card>
                                        <Card.Body className='p-3'>
                                            <div>Order Summary</div>
                                            <div className='d-inline-flex w-100 mt-4' style={{ fontSize: '14px', color: 'blue' }}>
                                                <div className='mr-auto'>{translate('sub_total')}</div>
                                                <div>{translate('rs')}{sub_total}</div>
                                            </div>
                                            <div className='d-inline-flex w-100 mt-2' style={{ fontSize: '14px', color: 'blue' }}>
                                                <div className='mr-auto'>{translate('shipping_charges')}</div>
                                                <div>{translate('rs')}{shipping_charges}</div>
                                            </div>
                                            <hr style={{ color: 'blue' }} />
                                            <div className='d-inline-flex w-100 mb-2' style={{ fontSize: '14px', color: 'blue' }}>
                                                <div className='mr-auto'>{translate('total')}</div>
                                                <div>{translate('rs')}{sub_total + shipping_charges}</div>
                                            </div>
                                            <MyButton onClick={handleProcedeOrder} disabled={products == ''} block={true}> {translate('procede_order')} </MyButton>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                    }
                </div>
            </Layout>
            <style type="text/css">{`
                .cart{
                    margin: 1% 11% 2% 11%;
                }
                .cart ._col{
                    padding: 0.5%;
                }
                .cart .card{
                    border: none;
                    margin-bottom: 1.5%;
                }
                .cart .card_body{
                    display: inline-flex;
                    align-items: center;
                    padding: 1%;
                    margin: 0%;
                }
                ._padding{
                    padding: 0% 10px;
                    margin: 0%;
                    font-size: 13px;
                }
                .cart .delete{
                    margin-left: auto;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    color: gray;
                    cursor: pointer;
                }
                .cart .delete:hover{
                    color: #cc0000;
                }
                .cart .fontawesome{
                    margin-right: 5px;
                    height: 15px;
                    width: 15px;
                    max-width: 15px;
                    max-height: 15px;
                }
                .cart_img{
                    width: 100%;
                }
                @media (max-width: 1199px){
                    .cart{
                        margin: 1% 5% 2% 5%;
                    }
                }
                @media (max-width: 991px){
                    .cart{
                        margin: 1% 2% 2% 2%;
                    }
                    ._padding{
                        padding: 0% 4px;
                    }
                }
                 @media (max-width: 767px){
                    .cart{
                        margin: 1% 5% 2% 5%;
                    }
                    ._padding{
                        font-size: 12px;
                        padding: 0% 2px;
                    }
                }
                 @media (max-width: 575px){
                    .cart{
                        margin: 1% 1% 50px 1%;
                    }
                }
            `}</style>
            <style jsx>{`
                ._cart {
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
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

function ProcedeOrder(props) {
    const [loading, setLoading] = useState(false)
    const [showAlertModal, setShowAlertModal] = useState(false)
    const [showErrorAlertModal, setsetShowErrorAlertModal] = useState(false)

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')

    const [nameError, setNameError] = useState('')
    const [cityError, setCityError] = useState('')
    const [mobError, setMobError] = useState('')
    const [addressError, setAddressError] = useState('')

    const [shipping_charges, setShipping_charges] = useState(props.shipping_charges)

    async function confirmOrder() {
        if (name == '' || city == '' || mobile == '' || address == '') {
            if (name == '') {
                setNameError(translate('enter_value'))
            }
            if (city == '') {
                setCityError(translate('enter_value'))
            }
            if (mobile == '') {
                setMobError(translate('enter_value'))
            }
            if (address == '') {
                setAddressError(translate('enter_value'))
            }
        } else {
            setLoading(true)
            let data = []
            props.products.forEach((element, index) => {
                if (element.product.product_type == "simple-product") {
                    data.push({
                        'vendor_id': element.product.vendor_id,
                        'p_id': element.p_id,
                        'quantity': element.quantity,
                        'price': element.product.product_price * element.quantity,
                    })
                } else {
                    data.push({
                        'vendor_id': element.product.vendor_id,
                        'p_id': element.p_id,
                        'variation_id': element.variation_id,
                        'quantity': element.quantity,
                        'price': element.variation.price * element.quantity,
                    })
                }
            })

            const url = MuhalikConfig.PATH + `/api/orders/place-order/${props.token._id}`;
            await axios.post(url,
                {
                    c_name: name,
                    city: city,
                    mobile: mobile,
                    address: address,
                    sub_total: props.sub_total,
                    shipping_charges: shipping_charges,
                    products: data,
                },
                {
                    headers: {
                        'authorization': props.undecoded_token
                    }
                }).then((res) => {
                    setLoading(false)
                    if (res.data.status == 200) {
                        setShowAlertModal(true)
                        props.clearCart()
                    } else if (res.data.status == 201) {
                        console.log('gagagagg:', res.data)
                        setShowErrorAlertModal(true)
                        props.handlePlaceOrderError(res.data.data)
                    }
                }).catch((error) => {
                    alert('Not  Added')
                })
        }
    }

    function handleSetCity(city) {
        setCity(city)
        setCityError('')
        if (city == 'Riyadh' || city == 'riyadh') {
            setShipping_charges(25)
        } else {
            setShipping_charges(45)
        }
    }

    return (
        <div className='proced_order'>
            <AlertModal
                onHide={(e) => setShowAlertModal(false)}
                show={showAlertModal}
                header={'Success'}
                message={translate('order_placed')}
                iconname={faThumbsUp}
                color={'green'}
            />
            <AlertModal
                onHide={(e) => setShowErrorAlertModal(false)}
                show={showErrorAlertModal}
                header={'Success'}
                message={translate('place_order_error')}
                iconname={faThumbsUp}
                color={'green'}
            />
            <Card>
                <Form.Group as={Card.Body}>
                    <Row className='p-0 m-0'>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Form.Label className='field_label'>{translate('full_name')}</Form.Label>
                            <InputGroup>
                                <TranslateFormControl
                                    id='enter_full_name'
                                    type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value), setNameError('') }}
                                />
                                <Form.Row className='error'> {nameError} </Form.Row>
                            </InputGroup>
                        </Col>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <Form.Label className='field_label'>{translate('city')}</Form.Label>
                            <InputGroup>
                                <TranslateFormControl
                                    id='enter_city'
                                    type="text"
                                    value={city}
                                    onChange={(e) => handleSetCity(e.target.value)}
                                />
                                <Form.Row className='error'> {cityError} </Form.Row>
                            </InputGroup>
                        </Col>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <Form.Label className='field_label'>{translate('mobile_number')} </Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type='number'
                                    min='0'
                                    placeholder='+966590911891'
                                    value={mobile}
                                    onChange={(e) => { setMobile(e.target.value), setMobError('') }}
                                />
                                <Form.Row className='error'> {mobError} </Form.Row>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className='p-0 ml-0 mb-0 mr-0 mt-2'>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Label className='field_label'> {translate('address')} <span> * </span> </Form.Label>
                            <InputGroup>
                                <TranslateFormControl
                                    id='enter_address'
                                    type="text"
                                    value={address}
                                    onChange={(e) => { setAddress(e.target.value), setAddressError('') }}
                                />
                                <Form.Row className='error'> {addressError} </Form.Row>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group as={Card.Body}>
                    <Row >
                        <Col >
                            <Form.Label className='rs_label'>{translate('sub_total')}</Form.Label>
                            <InputGroup className='center'>
                                <Form.Label>{translate('rs')}{props.sub_total}</Form.Label>
                            </InputGroup>
                        </Col>
                        <Col >
                            <Form.Label className='rs_label'>{translate('shipping_charges')}</Form.Label>
                            <InputGroup className='center'>
                                <Form.Label>{translate('rs')}{shipping_charges}</Form.Label>
                            </InputGroup>
                        </Col>
                        <Col >
                            <Form.Label className='rs_label'>{translate('total')}</Form.Label>
                            <InputGroup className='center'>
                                <Form.Label>{translate('rs')}{props.sub_total + shipping_charges}</Form.Label>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group as={Card.Body}>
                    <Row className='p-0 m-0'>
                        <Col>
                            <MyButton onClick={props.cancel} block={true}>{translate('cancel')}</MyButton>
                        </Col>
                        <Col>
                            <MyButton onClick={confirmOrder} block={true}>{translate('confirm_order')}</MyButton>
                        </Col>
                    </Row>
                </Form.Group>

            </Card>
            <style type="text/css">{`
                .proced_order {
                    padding: 5% 0%;
                }
                .proced_order .field_label {
                    font-size: 12px;
                }
                .proced_order .rs_label {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    color: gray;
                }
                .proced_order .center {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    color: blue;
                }
                .proced_order .error {
                    color: ${GlobalStyleSheet.error_color};
                    margin-left: 2px;
                    font-size: 12px;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}
