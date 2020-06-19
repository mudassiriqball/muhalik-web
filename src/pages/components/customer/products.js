import React, { Component } from 'react';
import Link from 'next/link'

import { Card, Row, Col, Image, Nav } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='products'>
                <Row noGutters>
                    <Col lg={6} md={6} sm={12} xs={12} style={{ height: '100%' }}>
                        <Card className='card'>
                            <Card.Header className='card_header'>
                                <div className='mr-auto' >New Arrivals</div>
                                <Link href=''><a>Show More</a></Link>
                            </Card.Header>
                            <Card.Body className='card_body'>
                                <Row>
                                    {this.props.products_list && this.props.products_list.map((element, inde) =>
                                        <>
                                            {element.product_type == "simple-product" ?
                                                <Col lg={3} md={3} sm={3} xs={4} className="product_column">
                                                    <Image className='img' src={element.product_image_link[0].url} fluid />
                                                    <label className='w-100'>{element.product_name}</label>
                                                    <div className='d-inline-flex align-items-center'>
                                                        <label className='mr-auto'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                                                        <div className="text_animation pr-1">NEW</div>
                                                    </div>
                                                </Col>
                                                :
                                                <Col lg={3} md={3} sm={3} xs={4} className="product_column">
                                                    <Image className='img' src={element.product_variations[0].image_link[0].url} />
                                                    <label>{element.product_name}</label>
                                                    <div className='d-inline-flex align-items-center'>
                                                        <label className='mr-auto'><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price}</label>
                                                        <div className="text_animation pr-1">NEW</div>
                                                    </div>
                                                </Col>
                                            }
                                        </>
                                    )}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} style={{ height: '100%' }}>
                        <Card className='card'>
                            <Card.Header className='card_header'>
                                <div className='mr-auto' >Top Ranking</div>
                                <Link href=''><a>Show More</a></Link>
                            </Card.Header>
                            <Card.Body className='card_body'>
                                <Row>
                                    {this.props.products_list && this.props.products_list.map((element, inde) =>
                                        <>
                                            {element.product_type == "simple-product" ?
                                                <Col lg={3} md={3} sm={3} xs={4} className="product_column">
                                                    <Image className='img' src={element.product_image_link[0].url} fluid />
                                                    <label>{element.product_name}</label>
                                                    <label><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_price}</label>
                                                </Col>
                                                :
                                                <Col lg={3} md={3} sm={3} xs={4} className="product_column">
                                                    <Image className='img' src={element.product_variations[0].image_link[0].url} />
                                                    <label>{element.product_name}</label>
                                                    <label><span style={{ color: 'green', fontSize: '13px' }} >Rs.</span>{element.product_variations[0].price}</label>
                                                </Col>
                                            }
                                        </>
                                    )}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <style type="text/css">
                    {`
                    .products{
                        padding: 0.5% 3%
                    }
                    .products .product_column{
                        display: flex;
                        flex-direction: column;
                        padding: 3px;
                        cursor: pointer
                    }
                    .products .product_column .img{
                        min-width: 100%;
                        max-width: 100%;
                        min-height: 100px;
                        max-height: 100px;
                        padding: 5px;
                        background: ${GlobalStyleSheet.body_color};
                    }
                    .products .product_column .img:hover{
                        padding: 4px;
                        transition-timing-function: ease-in;
                        transition: 0.5s;
                    }
                    .products .product_column label{
                       font-size: 12px;
                        margin: 0px 5px 0px 5px;
                        cursor: pointer;
                    }

                    .products .card{
                        margin: 1%;
                        border: none;
                        border-radius: 5px;
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
                        padding: 1% 4%;
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
                        .products .product_column .img{
                            min-height: 100px;
                            max-height: 100px;
                        }
                        .products{
                            padding: 2%;
                        }
                    }
                    @media (max-width: 767px) {
                        .products .product_column .img{
                            min-height: 100px;
                            max-height: 100px;
                        }
                        .products{
                            padding: 0%;
                        }
                    }
   
                `}
                </style>
            </div >
        );
    }
}

const styles = {

}
export default Products;