import React, { Component } from 'react';
import Link from 'next/link'
import useDimensions from "react-use-dimensions";
React.useLayoutEffect = React.useEffect;
import { Card, Row, Col, Image, Nav, Button } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Carousel from "react-multi-carousel"

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

const Products = (props) => {
    const [ref, { x, y, width }] = useDimensions();

    return (
        <div className='products'>
            <Row noGutters>
                <Col lg={6} md={12} sm={12} xs={12} style={{ height: '100%' }}>
                    <Card className='_card'>
                        <Card.Header className='card_header'>
                            <div className='mr-auto' >New Arrivals</div>
                            <Link href=''><a>Show More</a></Link>
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
                                {props.products_list && props.products_list.map((element, index) =>
                                    <Card key={element._id} className="product_card">
                                        {element.product_type == "simple-product" ?
                                            <div className='card_div'>
                                                <Image className='img' ref={ref} style={{ maxHeight: width || 100, minHeight: width || 100 }} src={element.product_image_link[0].url} />
                                                <label className='w-100 d-inline-flex'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                                                    <div className="text_animation pr-1">NEW</div>
                                                </div>
                                            </div>
                                            :
                                            <div className='card_div'>
                                                <Image className='img' style={{ maxHeight: width || 100, minHeight: width || 100 }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='w-100 d-inline-flexp'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price || '-'}</label>
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
                            <div className='mr-auto' >Top Renking</div>
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
                                {props.products_list && props.products_list.map((element, index) =>
                                    <Card key={element._id} className="product_card">
                                        {element.product_type == "simple-product" ?
                                            <div className='card_div'>
                                                <Image className='img' ref={ref} style={{ maxHeight: width || 100, minHeight: width || 100 }} src={element.product_image_link[0].url} />
                                                <label className='w-100 d-inline-flex'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                                                    <div className="text_animation pr-1">TOP</div>
                                                </div>
                                            </div>
                                            :
                                            <div className='card_div'>
                                                <Image className='img' style={{ maxHeight: width || 100, minHeight: width || 100 }} src={element.product_variations[0].image_link[0].url} />
                                                <label className='w-100 d-inline-flexp'>{element.product_name}</label>
                                                <div className='d-inline-flex align-items-center'>
                                                    <label className='mr-auto'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price || '-'}</label>
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
                index < 3 ?
                    <CategoryCard key={element._id} item={element} sub_categories_list={props.sub_categories_list} />
                    :
                    null
            )}


            <style type="text/css">
                {`
                    .products{
                        padding: 0.5% 3%
                    }
                    .products .product_card{
                        margin: 1%;
                        border: none;
                        border-radius: 4px;
                    }
                    .products .product_card:hover{
                        box-shadow: 0px 0px 10px 0.5px lightgray;
                    }
                    .products .product_card .card_div{
                        display: flex;
                        flex-direction: column;
                        border-radiud: 3px;
                        margin: 5px;
                        cursor: pointer;
                        background: #fafafa;
                    }
                    .products .product_card .card_div:hover{
                        transition-timing-function: ease-in;
                        transition: 0.5s;
                        margin: 4px;
                    }
                    .products .product_card .img{
                        margin-bottom: 2px;
                        min-width: 100%;
                        max-width: 100%;
                        background: ${GlobalStyleSheet.body_color};
                        border-radius: 4px;
                    }
                    .products .product_card label{
                       font-size: 12px;
                        margin: 0px 5px 0px 5px;
                        cursor: pointer;
                    }

                    .products ._card{
                        margin: 1%;
                        border: none;
                        border-radius: 4px;
                    }
                    .products .card_header{
                        display: flex;
                        align-items: center;
                        border: none;
                        background: none;
                        padding-bottom: 0%;
                        font-size: 14px;
                        color: gray
                    }
                    .products .card_header a{
                        font-size: 13px;
                    }
                    .products .card_header:hover{
                        color: green;
                        cursor: pointer;
                    }
                    .products .card_body{
                        padding: 1% 2%;
                    }

                    .products .text_animation{
                        animation: newmove 5s infinite;
                        color: red;
                        font-size: 10px;
                        margin: 0%;
                    }
                    @keyframes newmove {
                        50% {text-shadow: 0px -8px 3px red;}
                    }

                    
                    @media (max-width: 992px) {
                        .products{
                            padding: 2%;
                        }
                    }
                    @media (max-width: 767px) {
                        // .products .product_card{
                        //     overflow-y: scroll;
                        //     display: inline-flex;
                        // }
                        // .products .product_card::-webkit-scrollbar {
                        //     display: none;
                        // }
                        // .products .product_card {
                        //     -ms-overflow-style: none;
                        // }
                        .products{
                            padding: 0%;
                        }
                    }
                `}
            </style>
        </div >
    );
}


function CategoryCard(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <div className='CategoryCard'>
            <h3 style={{ margin: '2% 0.5% 0.5% 0.5%', color: 'green' }}>{props.item.value}</h3>
            <Card as={Row} className='category_card'>
                <Card.Body className='category_card_body'>
                    <Row noGutters>
                        <Col ref={ref} lg={3} md={3} sm={3} xs={6}>
                            <Image src='muhalik.jpg' className='category_img'
                                style={{ maxHeight: width - 60 || '250px', minHeight: width - 60 || '250px' }} />
                            <Button variant='light' className='_button'>Show More</Button>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={6}>
                            {props.sub_categories_list && props.sub_categories_list.map((element, index) =>
                                props.item._id == element.category_id ?
                                    <div>{element.value}</div>
                                    :
                                    null
                            )}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <style type="text/css">{`
                .CategoryCard .category_card{
                    margin: 0% 0.5% 2% 0.5%;
                    border: none;
                    border-radius: 5px;
                }
                .CategoryCard .category_card_body{
                    padding: 0%;
                    margin: 0%;
                }

                .CategoryCard .category_img{
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                }
                .CategoryCard .category_card:hover{
                    box-shadow: 0px 0px 10px 1px lightgray;
                }
                .CategoryCard ._button{
                    position: absolute;
                    left: 26%;
                    bottom: 8%;
                    border-radius: 20px;
                    color: ${GlobalStyleSheet.primry_color};
                }
            `}</style>
        </div>
    )
}


const styles = {

}
export default Products;