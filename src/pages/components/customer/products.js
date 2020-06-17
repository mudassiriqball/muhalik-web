import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='products'>
                <Card style={{ border: 'none' }}>
                    <Card.Header style={{ background: 'none', border: 'none' }}>
                        <div>New Arrival</div>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            {this.props.products_list && this.props.products_list.map((element, inde) =>
                                <>
                                    {element.product_type == "simple-product" ?
                                        <Col lg={2} md={2} sm={3} xs={4} className="column">
                                            <div>
                                                <Image className='img' src={element.product_image_link[0].url} fluid />
                                                {element.product_name}
                                            </div>
                                        </Col>
                                        :
                                        <Col lg={2} md={2} sm={3} xs={4} className="column">
                                            <div>
                                                <Image className='img' src={element.product_variations[0].image_link[0].url} />
                                                {element.product_name}
                                            </div>
                                        </Col>
                                    }
                                </>
                            )}
                        </Row>

                    </Card.Body>
                </Card>
                <Card style={{ border: 'none' }}>
                    <Card.Header style={{ background: 'none', border: 'none' }}>
                        <div>New Arrival</div>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            {this.props.products_list && this.props.products_list.map((element, inde) =>
                                <>
                                    {element.product_type == "simple-product" ?
                                        <Col lg={2} md={2} sm={3} xs={4} className="column">
                                            <div>
                                                <Image className='img' src={element.product_image_link[0].url} fluid />
                                                {element.product_name}
                                            </div>
                                        </Col>
                                        :
                                        <Col lg={2} md={2} sm={3} xs={4} className="column">
                                            <div>
                                                <Image className='img' src={element.product_variations[0].image_link[0].url} />
                                                {element.product_name}
                                            </div>
                                        </Col>
                                    }
                                </>
                            )}
                        </Row>

                    </Card.Body>
                </Card>
                <style type="text/css">
                    {`
                    .products{
                        padding: 2% 4%
                    }
                    .products .column{
                        padding: 10px;
                    }
                    .products .column div{
                        padding: 10px;
                        background: ${GlobalStyleSheet.body_color};
                        font-size: 13px;
                    }
                    .products .column:hover{
                        cursor: pointer
                    }
                    .products .column .img{
                        min-width: 100%;
                        max-width: 100%;
                        min-height: 130px;
                        max-height: 130px;
                    }

                    @media (max-width: 992px) {
                        .products .column .img{
                            min-height: 110px;
                            max-height: 110px;
                        }
                        .products{
                            padding: 2%;
                        }
                    }
                    @media (max-width: 767px) {
                        .products .column .img{
                            min-height: 100px;
                            max-height: 100px;
                        }
                        .products{
                            padding: 0%;
                        }
                    }
   
                `}
                </style>
            </div>
        );
    }
}

const styles = {

}
export default Products;