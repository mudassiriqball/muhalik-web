import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { Row, Col, Card, Image, Button, Form, Table, Tab, Nav, Badge, Tabs, InputGroup } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Layout from '../../components/customer/layout';
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
} from '../../../sdk/core/authentication-service';
import axios from 'axios'
import MuhalikConfig from '../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import useProductsInfiniteScroll from '../../../use-poducts-infinite-scroll'
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

React.useLayoutEffect = React.useEffect

export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []
    let single_product = []
    const { product } = context.query

    const url = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url).then((response) => {
        categories_list = response.data.category.docs,
            sub_categories_list = response.data.sub_category.docs
    }).catch((error) => {
    })

    const url_1 = MuhalikConfig.PATH + `/api/products/product/${product}`;
    await axios.get(url_1).then((response) => {
        // console.log('single-product:', response.data.data)
        single_product = response.data.data[0]
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
    const { id } = router.query
    const { product } = router.query

    const [token, setToken] = useState({ role: '', full_name: '' })
    const { loading, products } = useProductsInfiniteScroll('sub_category', props.single_product.sub_category._id, '1', isMobile ? '6' : '7')
    const [vendor, setVendor] = useState(null)
    const [wish, setWish] = useState('gray')

    useLayoutEffect(() => {
        getData()
    }, []);

    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
        }

        const url = MuhalikConfig.PATH + `/api/users/${props.single_product.vendor_id}`;
        await axios.get(url).then((response) => {
            console.log('vendor info:', response.data.data[0])
            setVendor(response.data.data[0])
        }).catch((error) => {
        })
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

    function addToWishlist() {
        if (token.role == '') {
            Router.push('/login')
        } else if (wish == 'gray') {
            setWish('orange')
        } else {
            setWish('gray')
        }
    }
    // console.log('single-product:', props.single_product)

    return (
        <div className='single_product'>
            <Layout
                role={token.role || ''}
                name={token.full_name || ''}
                logout={logout}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                id={id}
            >
                <Row noGutters className='main-row'>
                    {props.single_product.product_type == "simple-product" ?
                        <SimpleProduct
                            single_product={props.single_product}
                            vendor={vendor}
                            token={token}
                            wish={wish}
                            addToWishlist={addToWishlist}
                        />
                        :
                        <VariableProduct
                            single_product={props.single_product}
                            vendor={vendor}
                            token={token}
                            wish={wish}
                            addToWishlist={addToWishlist}
                        />
                    }
                </Row>
                <RelatedProducts products={products} />
            </Layout >
            <style type="text/css">{`
                .single_product{
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .single_product .main-row{
                    padding: 1% 6% 2% 6%;
                }
                .single_product .single_product_img{
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
                }
                .single_product .single_product_img:hover{
                    cursor: pointer;
                    background: ${GlobalStyleSheet.body_color};
                }


                .desc_col{
                    padding: 0% 5% ;
                }
                .vendor_desc_col{
                    border-left: 0.5px solid lightgray;
                    padding-left: 3%;
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

                @media (max-width: 767px) {
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

    return (
        <div className='simple_product'>
            <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <Row>
                        <Col lg={2} md={2} className='d-flex flex-column'>
                            {props.single_product.product_image_link && props.single_product.product_image_link.map((element, index) =>
                                <MyImages key={element._id}
                                    element={element}
                                    index={index == activeImageIndex}
                                    plus={10}
                                    setData={() => setActiveImageIndex(index)}
                                />
                            )}
                        </Col>
                        <Col>
                            <Image ref={ref} className='single_product_img'
                                style={{ maxHeight: width + 60 || '200px', minHeight: width + 60 || '200px' }}
                                src={props.single_product.product_image_link[activeImageIndex].url}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col className='desc_col'>
                    {props.single_product.product_name}
                    <div className='slope'>Rs. {props.single_product.product_price}</div>
                    <Row noGutters>
                        <Col lg={6} md={6} sm={12} xs={12} className='rating_review_col'>
                            <div className='d-inline-flex'>
                                <div className='product_rating'> Rating: </div>
                                <Badge variant='info' style={{ fontSize: '13px', marginLeft: '5px' }}> 4.0 </Badge>
                            </div>
                            <ReactStars
                                count={5}
                                size={15}
                                half={true}
                                value={4}
                                edit={false}
                                color2={"orange"}
                            />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='rating_review_col'>
                            <div>Reviews </div>
                            <div>160</div>
                        </Col>
                    </Row>

                    <div className='add_to_wish_list'>
                        <label>Add to wishlist</label>
                        <FontAwesomeIcon icon={faHeart} className='font_awsome' onClick={props.addToWishlist} />
                    </div>

                    <div className='stock'>
                        {'Available in Stock'}
                        <span>Stock: {props.single_product.product_in_stock}</span>
                    </div>

                    <div className='cart'>
                        <Row noGutters>
                            <Form.Group as={Col} lg='auto' md='auto' controlId="formGridState">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Quantity</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Col className='ml-1'>
                                <Button variant='success' block>Add To Card</Button>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                </Col>
                <Col lg={3} md={3} sm={12} xs={12} className='vendor_desc_col'>
                    <VendorInfo vendor={props.vendor} />
                </Col>
            </Row>
            <hr />
            {/*  Overview / Specification / Review */}
            <TabComponent
                single_product={props.single_product}
                custom_fields={props.single_product.custom_fields}
                single_product={props.single_product}
                token={props.token}
            />
            <style type="text/css">{`
                .simple_product{
                    width: 100%;
                    padding: 1.5%;
                    background: white;
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


    return (
        <div className='variable_product'>
            <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <Row>
                        <Col lg={2} md={2} className='d-flex flex-column'>
                            {activeVariation.image_link && activeVariation.image_link.map((element, index) =>
                                <MyImages key={element._id}
                                    element={element}
                                    index={index == activeImageIndex}
                                    plus={10}
                                    setData={(index) => setActiveImageIndex(index)}
                                />
                            )}
                        </Col>
                        <Col>
                            <Image ref={ref} className='single_product_img'
                                style={{ maxHeight: width + 60 || '200px', minHeight: width + 60 || '200px' }}
                                src={activeVariation.image_link[activeImageIndex].url}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col className='desc_col'>
                    {props.single_product.product_name}
                    <div className='slope'>Rs. {activeVariation.price}</div>
                    <Row noGutters>
                        <Col lg={6} md={6} sm={12} xs={12} className='rating_review_col'>
                            <div className='d-inline-flex'>
                                <div className='product_rating'> Rating: </div>
                                <Badge variant='info' style={{ fontSize: '13px', marginLeft: '5px' }}> 4.0 </Badge>
                            </div>
                            <ReactStars
                                count={5}
                                size={15}
                                half={true}
                                value={4}
                                edit={false}
                                color2={"orange"}
                            />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='rating_review_col'>
                            <div>Reviews </div>
                            <div>160</div>
                        </Col>
                    </Row>

                    <div className='add_to_wish_list'>
                        <label>Add to wishlist</label>
                        <FontAwesomeIcon icon={faHeart} className='font_awsome' onClick={props.addToWishlist} />
                    </div>

                    <div className='stock'>
                        {'Available in Stock'}
                        <span>Stock: {activeVariation.stock}</span>
                    </div>

                    <div className='cart'>
                        <Row noGutters>
                            <Form.Group as={Col} lg='auto' md='auto' controlId="formGridState">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Quantity</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Col className='ml-1'>
                                <Button variant='success' block>Add To Card</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className='variation_item'>
                        {activeVariation.item && activeVariation.item.map((element, index) =>
                            <div className='item'>
                                <div className='item_name_div'>
                                    {element.name}: <span style={{ color: 'black', fontSize: '16px' }}>{element.value}</span>
                                </div>
                                <div>
                                    <Button block size='sm' variant='primary' className='item_value_btn'> {element.value} </Button>
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
                    <Row noGutters>
                        {props.single_product.product_variations && props.single_product.product_variations.map((element, index) =>
                            <Col lg={2} md={2} key={element._id}>
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
                </Col>
                <Col lg={3} md={3} sm={12} xs={12} className='vendor_desc_col'>
                    <label className='product_label'>Shop Info</label>
                    {props.single_product.vendor_id}
                </Col>
            </Row>
            <hr />
            {/*  Overview / Specification / Review */}
            <TabComponent
                single_product={props.single_product}
                activeVariation={activeVariation}
                custom_fields={activeVariation.custom_fields}
                item={activeVariation.item}
                single_product={props.single_product}
                token={props.token}
            />
            <style type="text/css">{`
                .variable_product{
                    width: 100%;
                    padding: 1.5%;
                    background: white;
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
                    maxHeight: width + props.plus || '200px', minHeight: width + props.plus || '200px'
                }}
                src={props.element.url}
                onClick={props.setData}
            />
            <style type="text/css">{`
                .my_image{
                    margin: 5% 0%;
                    background: white;
                }
                .my_image .my_image_img{
                    min-width: 90%;
                    max-width: 90%;
                    background: white;
                    cursor: pointer;
                    padding: 5%;
                    border-radius: 2px;
                }
            `}</style>
        </div>
    )
}

function VendorInfo(props) {
    return (
        <div className='vendor_info'>
            <label className='product_label'>Shop Info</label>
            {/* {props.vendor.shop_name} */}
            <Row noGutters className='_div'>
                <div > Rating: </div>
                <Badge variant='info' style={{ fontSize: '13px', margin: '0% 4% 0% 2%' }}> 4.0 </Badge>
                <ReactStars
                    count={5}
                    size={15}
                    half={true}
                    value={4}
                    edit={false}
                    color2={"orange"}
                />
            </Row>
            <hr />
            <Row noGutters className='_div'>
                <div > Delivered: </div>
                <Badge variant='success' style={{ fontSize: '13px', margin: '0% 4% 0% 2%' }}> 100 </Badge>
            </Row>
            <Row noGutters className='_div'>
                <div > Cancelled: </div>
                <Badge variant='warning' style={{ fontSize: '13px', margin: '0% 4% 0% 2%' }}> 50 </Badge>
            </Row>
            <Row noGutters className='_div'>
                <div > Returned: </div>
                <Badge variant='danger' style={{ fontSize: '13px', margin: '0% 4% 0% 2%' }}> 10 </Badge>
            </Row>

            <style type="text/css">{`
                .vendor_info ._div{
                    font-size: 13px;
                    color: gray;
                    margin: 4% 0%;
                }
                .stars{
                }
            `}</style>
        </div >
    )
}


function TabComponent(props) {
    const [rating, setRating] = useState('')
    const [review, setReview] = useState('')
    const [reviewError, setReviewError] = useState('')

    function ratingChanged(newRating) {
        setRating(newRating)
    }
    function handleSetRating() {
        let parameters = {}
        if (props.single_product.product_type == "simple-product") {
            parameters = { _id: props.single_product._id }
        } else {
            parameters = { _id: props.single_product._id, variation_id: props.activeVariation._id }
        }
        const _url = MuhalikConfig.PATH + '/api/products/review-rating'
        axios({
            method: 'PUT',
            url: _url,
            params: parameters,
            data: { rating: rating, review: review }
        }).then(res => {
            alert('Add ho gya')
            console.log('response:', res.data)
        }).catch(err => {
            console.log('Error:', err)
        })
    }


    function handleSetReview(e) {
        setReview(e.target.value)
        setReviewError('')
    }
    // function handleGiveReview() {
    //     if (review.length > 9 && review.length < 199) {
    //         setReviewError('')
    //     } else {
    //         setReviewError('Must be 10-200')
    //     }
    // }
    return (
        <Tab.Container id="left-tabs-example" className='tab_component' defaultActiveKey="Overview">
            <Row className='mr-0 pr-0'>
                <Col lg={3} md={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="Overview">
                                Overview
                                </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Specifications">
                                Specifications
                                </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Rating" className='d-flex align-items-center'>
                                {'Rating '}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Reviews" className='d-flex align-items-center'>
                                {'Reviews '}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col lg={9} md={9} className='m-0 p-0' style={{ border: '0.5px solid lightgray' }}>
                    <Tab.Content>
                        <Tab.Pane eventKey="Overview" className='p-3'>
                            <div style={{ fontSize: '12px', color: 'gray' }}>
                                {props.single_product.product_description}
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Specifications" className='p-3'>
                            <Table borderless size="sm">
                                <tbody>
                                    {props.custom_fields && props.custom_fields.map((element, index) =>
                                        <tr style={{ background: index % 2 == 0 ? '#F7F9FE' : 'white' }}>
                                            <td>{element.name}</td>
                                            <td>{element.value}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Rating" className='p-3'>
                            <Row>
                                <Col className='d-flex flex-column align-items-center p-3 justify-content-center' style={{ borderRight: '1px solid lightgray' }} lg={3} md={3} sm={12} xs={12}>
                                    <div className='text-center' style={{ fontSize: '13px', color: 'gray', marginBottom: '5px' }}>Overall Rating</div>
                                    <div className='text-center' style={{ fontSize: '20px', color: 'orange' }}>2.0</div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        half={true}
                                        value={2}
                                        edit={false}
                                        color2={"orange"}
                                    />
                                </Col>
                                <Col className='d-flex flex-column p-3 justify-content-center'>
                                    <div className='stars_rating'>5: <span></span><label>5</label></div>
                                    <div className='stars_rating'>4: <span></span><label>5</label></div>
                                    <div className='stars_rating'>3: <span></span><label>5</label></div>
                                    <div className='stars_rating'>2: <span></span><label>5</label></div>
                                    <div className='stars_rating'>1: <span></span><label>5</label></div>
                                </Col>
                            </Row>
                            <hr />
                            {props.token.role != '' ?
                                <Row className='d-inline-flex align-items-center pl-5'>
                                    <div className='m-3' style={{ fontSize: '20px' }}>Rate Product</div>
                                    <ReactStars
                                        count={5}
                                        value={rating}
                                        half={false}
                                        onChange={ratingChanged}
                                        size={30}
                                        color2={"orange"}
                                    />
                                    <div className='give_review'>
                                        <InputGroup>
                                            <Form.Control as="textarea" onChange={(e) => handleSetReview(e)} isInvalid={reviewError} placeholder='Type your review here' rows="3" />
                                            <Form.Control.Feedback type="invalid">
                                                {reviewError}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </div>
                                    <Button className='ml-5 pl-5 pr-5 float-right' size='sm' variant='outline-primary'
                                        onClick={handleSetRating}
                                        disabled={rating == '' ? true : false}
                                    >Rate</Button>

                                </Row>
                                :
                                null
                            }
                        </Tab.Pane>
                        <Tab.Pane eventKey="Reviews">
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" >
                                <Tab eventKey="home" title="Reviews">
                                    <div className='review'>
                                        <div>
                                            <label>Mudasir Iqbal</label>
                                            <span>20-06-2020</span>
                                        </div>
                                        {'You are better off getting the regular airpods instead of this "wireless charging case" version. Both cases are able to charge your airpods, but this one allows the case to charge on a charging pad instead of being plugged in, which by the way is sold separately.'}
                                        <hr />
                                    </div>
                                </Tab>

                            </Tabs>

                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
            <style type="text/css">{`
                td{
                    font-size: 12px;
                    padding: 0.5% 3%;
                    color: gray;
                }
                .stars_rating {
                   display: inline-flex;
                   align-items: center;
                   font-size: 14px;
                   color: black;
                }
                .stars_rating span{
                    min-height: 10px;
                    max-height: 10px;
                    min-width: 60%;
                    margin: 0% 5px 0% 10px;
                    background: orange;
                    border-radius: 2px;
                }
                .stars_rating label{
                     color: gray;
                     padding: 0px;
                     margin: 0px;
                     font-size: 13px;
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
            `}</style>
        </Tab.Container>
    )
}


function RelatedProducts(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <div className='related_products'>
            <label className='header'>Related Products</label>
            <Row noGutters>
                {props.products && props.products.map((element, index) =>
                    <Card key={element._id} as={Col} lg={2} md={3} sm={3} xs={4} className='only_products_card'>
                        {element.product_type == "simple-product" ?
                            <div className='only_products_div' onClick={() => Router.push('/[name]/[id]/[product]', `/sub_category/${element.sub_category._id}/${element._id}`)}>
                                <Image ref={ref} className='only_product_img'
                                    style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }}
                                    src={element.product_image_link[0].url}
                                />
                                <label className='my_label'>{element.product_name}</label>
                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                            </div>
                            :
                            <div className='only_products_div' onClick={() => Router.push('/[name]/[id]/[product]', `/sub_category/${element.sub_category._id}/${element._id}`)}>
                                <Image ref={ref} className='only_product_img' style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }} src={element.product_variations[0].image_link[0].url} />
                                <label className='my_label'>{element.product_name}</label>
                                <label className='my_label'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price}</label>
                            </div>
                        }
                    </Card>
                )}
            </Row>
            <style type="text/css">{`
                .related_products .header{
                    font-size: 18px;
                    margin-left: 0.5%;
                    margin-bottom: 0%;
                    padding: 0%;
                    color: gray;
                }
                .related_products{
                    margin: 1% 5.5%;
                    padding: 0%;
                }
                .related_products .only_products_card{
                    padding: 0.8% 0%;
                    background: none;
                    border: none;
                }

                .related_products .only_products_div{
                    display: flex;
                    flex-direction: column;
                    border-radius: 3px;
                    margin: 3%;
                    padding: 1%;
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
                @media (max-width: 767px) {
                    .related_products .only_products_div{
                        // border: 1.5px solid ${GlobalStyleSheet.primry_color};
                    }
                    .related_products .header{
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

export default Product