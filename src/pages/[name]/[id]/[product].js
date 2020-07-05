import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap'
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

    const _url = MuhalikConfig.PATH + `/api/products/product/${product}`;
    await axios.get(_url).then((response) => {
        console.log('single-product:', response.data.data)
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
    const [single_product, setSingle_product] = useState([])

    const [token, setToken] = useState({ role: '', full_name: '' })

    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
        }
        if (name == 'sub_category') {
            props.sub_categories_list.forEach(element => {
                if (element._id == id) {
                    set_id(element.category_id)
                }
            })
        }
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
                    {props.single_product.produt_type == "simple-product" ?
                        <SimpleProduct single_product={props.single_product} />
                        :
                        <VariableProduct single_product={props.single_product} />
                    }
                </Row>
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
                    padding: 1% 4.44% 2% 4.44%;
                }
                .single_product ._row{
                    background: white;
                    width: 100%;
                    padding: 1%;
                }
                .single_product .single_product_img{
                    min-width: 100%;
                    max-width: 100%;
                    background: white;
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

    return (
        <div className='simple_product'>
            <Row noGutters className='_row'>
                <Col lg={3} md={3} sm={12} xs={12}>
                    <Image ref={ref} className='single_product_img'
                        style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }}
                        src={props.single_product.product_image_link[0].url} />
                </Col>
                <Col>
                </Col>
            </Row>
            <style type="text/css">{`
                .simple_product{
                    width: 100%;
                }
            `}</style>
        </div>
    )
}
function VariableProduct(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <div className='variable_product'>
            <Row noGutters className='_row'>
                <Col lg={3} md={3} sm={12} xs={12}>
                    <Image ref={ref} className='single_product_img'
                        style={{ maxHeight: width + 20 || '200px', minHeight: width + 20 || '200px' }}
                        src={props.single_product.product_variations[0].image_link[0].url}
                    />
                </Col>
                <Col>
                </Col>
            </Row>
            <style type="text/css">{`
                .variable_product{
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default Product