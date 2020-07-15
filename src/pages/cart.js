import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Row, Col, Button, Form, Image, Card, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useDimensions from "react-use-dimensions";
import MuhalikConfig from '../sdk/muhalik.config'
import GlobalStyleSheet from '../styleSheet'
import Layout from './components/customer/layout'
import { getDecodedTokenFromStorage, getTokenFromStorage } from '../sdk/core/authentication-service'
import Router from 'next/router'

React.useLayoutEffect = React.useEffect

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
            setToken(decoded_token)
            const url = MuhalikConfig.PATH + `/api/users/cart/${decoded_token._id}`;
            await axios.get(url).then((res) => {
                console.log('cart data:', res.data.data)
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
        const url = MuhalikConfig.PATH + `/api/products/product/${element.p_id}`;
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
            console.log(error)
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
        console.log('obj_id:', obj_id, index)
        let copyArray = []
        copyArray = Object.assign([], products)
        copyArray[index].isLoading = true
        setProducts(copyArray)
        const _url = MuhalikConfig.PATH + `/api/users/cart/${token._id}`;
        await axios({
            method: 'DELETE',
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
            console.log('Cart Delete error:', err)
            setProducts(copyArray)
        })
    }

    async function handlePlaceOrder() {
        if (products != '') {
            let data = []
            products.forEach((element, index) => {
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

            let d = {}
            d['shipping_charges'] = shipping_charges
            d['sub_total_price'] = sub_total
            d['product'] = data

            console.log('ooo:', d)

            // const url = MuhalikConfig.PATH + `/api/users/place-order/${token._id}`;
            // await axios.post(url, data).then((res) => {
            //     alert('Successfully Added')
            // }).catch((error) => {
            //     console.log('Error:', error)
            //     alert('Not  Added')
            // })
        }
    }

    return (
        <div className='_cart'>
            <Layout
                role={token.role || ''}
                name={token.full_name || ''}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
            >
                <div className='cart'>
                    <Row noGutters>
                        <Col className='col'>
                            <div>
                                <Card>
                                    <Card.Body className='card_body'>
                                        <Form.Check checked={checkAll} onChange={(e) => handleAllCheck(e)}></Form.Check>
                                        <div>Select All</div>
                                        <div className='delete' onClick={handleAllDeleteClick}>
                                            <FontAwesomeIcon icon={faTrash} className='fontawesome' />
                                            <div>Delete</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                {products == '' ?
                                    <div style={{ minHeight: '40vh' }} className='w-100 d-flex align-items-center justify-content-center'>
                                        <Button variant='primary' onClick={() => Router.push('/')}>Continue Shopping</Button>
                                    </div>
                                    :
                                    products && products.map((element, index) =>
                                        <Card key={element._id}>
                                            <Card.Body className='card_body'>
                                                <Form.Check checked={element.check} onChange={(e) => handleCheck(e.target.checked, index)} ></Form.Check>
                                                {element.product.product_type == "simple-product" ?
                                                    <Row className='w-100 pl-1'>
                                                        <Col lg={2} md={2} sm={3} xs={3}>
                                                            <Image ref={ref} className='cart_img' thumbnail
                                                                style={{ maxHeight: width + 15 || '200px', minHeight: width + 15 || '200px' }}
                                                                src={element.product.product_image_link[0].url}
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <div className='cart_p_ame'>{element.product.product_name}</div>
                                                        </Col>
                                                        <Col lg={2} md={2} sm={3} xs={3} style={{ color: 'orange' }} >
                                                            <label>Rs.{element.product.product_price * element.quantity}</label>
                                                        </Col>
                                                        <Col className='d-flex flex-column' >
                                                            <Form.Control as="select" size='sm' onChange={(e) => handleSetQuantity(e.target.value, index)} defaultValue="Choose...">
                                                                <option>{element.quantity}</option>
                                                                {getCartCont(element.product.product_in_stock).map(element =>
                                                                    element
                                                                )}
                                                            </Form.Control>
                                                            <div className='d-inline-flex mt-auto'>
                                                                <Link href='/[category]/[sub_category]/[product]' as={`/${element.product.category.value}/${element.product.sub_category.value}/${element.product._id}`}>
                                                                    <a style={{ fontSize: '13px' }}>View</a>
                                                                </Link>
                                                                <div className='delete' onClick={() => handleDeleteCart(element._id, index)}>
                                                                    <FontAwesomeIcon icon={faTrash} className='fontawesome' />
                                                                    <div>{element.isLoading ? <Spinner animation="grow" size="sm" /> : 'Delete'}</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    :
                                                    <Row className='w-100 pl-1'>
                                                        <Col lg={2} md={2} sm={3} xs={3}>
                                                            <Image ref={ref} className='cart_img' thumbnail
                                                                style={{ maxHeight: width + 15 || '200px', minHeight: width + 15 || '200px' }}
                                                                src={element.variation.image_link[0].url}
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <div className='cart_p_ame'>{element.product.product_name}</div>
                                                        </Col>
                                                        <Col lg={2} md={2} sm={3} xs={3} style={{ color: 'orange' }}>
                                                            <label>Rs.{element.variation.price * element.quantity}</label>
                                                        </Col>
                                                        <Col className='d-flex flex-column' >
                                                            <Form.Control as="select" size='sm' onChange={(e) => handleSetQuantity(e.target.value, index)} defaultValue="Choose...">
                                                                <option>{element.quantity}</option>
                                                                {getCartCont(element.variation.stock).map(element =>
                                                                    element
                                                                )}
                                                            </Form.Control>
                                                            <div className='d-inline-flex mt-auto'>
                                                                <Link href='/[category]/[sub_category]/[product]' as={`/${element.product.category.value}/${element.product.sub_category.value}/${element.product._id}`}>
                                                                    <a style={{ fontSize: '13px' }}>View</a>
                                                                </Link>
                                                                <div className='delete' onClick={() => handleDeleteCart(element._id, index)}>
                                                                    <FontAwesomeIcon icon={faTrash} className='fontawesome' />
                                                                    <div>{element.isLoading ? <Spinner animation="grow" size="sm" /> : 'Delete'}</div>
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
                        <Col lg={4} md={4} sm={4} xs={12} className='col'>
                            <Card>
                                <Card.Body className='p-3'>
                                    <div>Order Summary</div>
                                    <div className='d-inline-flex w-100 mt-4' style={{ fontSize: '14px', color: 'orange' }}>
                                        <div className='mr-auto'>Sub Total</div>
                                        <div>Rs.{sub_total}</div>
                                    </div>
                                    <div className='d-inline-flex w-100 mt-2' style={{ fontSize: '14px', color: 'orange' }}>
                                        <div className='mr-auto'>Shipping Charges</div>
                                        <div>Rs.{shipping_charges}</div>
                                    </div>
                                    <hr style={{ color: 'orange' }} />
                                    <div className='d-inline-flex w-100 ' style={{ fontSize: '14px', color: 'orange' }}>
                                        <div className='mr-auto'>Total</div>
                                        <div>Rs.{sub_total + shipping_charges}</div>
                                    </div>
                                    <Button variant='success' block className='mt-2' onClick={handlePlaceOrder}>Place Order</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout>
            <style type="text/css">{`
                .cart{
                    margin: 1% 11% 2% 11%;
                }
                .cart .col{
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
                .cart .delete{
                    margin-left: auto;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
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
                .cart_p_ame{
                    font-size: 14px;
                    padding-left: 1%;
                    padding-right: 1%;
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
