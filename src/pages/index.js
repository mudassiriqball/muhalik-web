import React, { Component } from 'react';
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import axios from 'axios'
import Layout from './components/customer/layout'
import { getTokenFromStorage, removeTokenFromStorage, getDecodedTokenFromStorage } from '../sdk/core/authentication-service';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config'
import Typical from 'react-typical'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import CarouselDiv from './components/customer/main-carousel'

let animation =
    <Container >
        <Row className="justify-content-md-center" style={{ display: 'flex', alignItems: 'center', minHeight: '83vh' }}>
            <Col lg="auto" md="auto" sm="auto" xs="auto" style={{ background: '#46d267', padding: '5%' }} >
                <h1>
                    <Typical
                        steps={['This website is under development', 1000,
                            'Comming Soon...!', 1000,
                            'Be Ready to Shop online...', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h1>
            </Col>
        </Row>
    </Container>

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            jwt_token: '',

            categories_list: [],
            sub_categories_list: []
        }
    }

    async componentDidMount() {
        const token = await getDecodedTokenFromStorage()
        if (token !== null) {
            this.setState({ jwt_token: token.role })
        }
        const url = MuhalikConfig.PATH + '/api/categories/categories';
        const currentComponent = this;
        await axios.get(url).then((response) => {
            currentComponent.setState({
                categories_list: response.data.category.docs,
                sub_categories_list: response.data.sub_category.docs
            });
        }).catch((error) => {
            console.log('Caterories Fetchig Error: ', error)
        })
    }

    logout = () => {
        if (removeTokenFromStorage()) {
            this.setState({ jwt_token: '' })
            // window.location.reload(true);
            Router.reload('/index');
            Router.replace('/index');
        } else {
            alert('Logout Failed')
        }
    }

    render() {
        return (
            <div style={styles.body}>
                <Head>
                    <title>Muhalik</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossOrigin="anonymous"
                    />
                    <link rel="shortcut icon" href=""></link>
                </Head>
                <Layout
                    token={this.state.jwt_token}
                    logout={this.logout}
                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                >
                    <CarouselDiv categories_list={this.state.categories_list}
                        sub_categories_list={this.state.sub_categories_list} />
                    {animation}
                </Layout>

            </div>
        );
    }
}

const styles = {
    body: {
        background: `${GlobalStyleSheet.body_color}`,
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        minHeight: '100vh',
    },
}
export default Index;