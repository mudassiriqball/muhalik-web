import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Layout from './components/customer/layout/Layout';
import Router from 'next/router'
import { getTokenFromStorage, removeTokenFromStorage } from '../sdk/core/authentication-service';
import GlobalStyleSheet from '../styleSheet';
import Typical from 'react-typical'
import { Container, Row, Carousel } from 'react-bootstrap'

let animation = <h1 className="text-center" style={{ width: '100%' }}>
    <Typical
        steps={['This website is under development', 1000,
            'Comming Soon...!', 500,
            'Be Ready for Shop online...', 100]}
        loop={Infinity}
        wrapper="p"
    />
</h1>

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt_token: '',
        }
    }

    async componentDidMount() {
        const token = await getTokenFromStorage()
        if (token !== null) {
            this.setState({ jwt_token: token.role });
        }
    }

    logout() {
        removeTokenFromStorage();
    }



    render() {
        return (
            <div style={styles.body}>
                <Head>
                    <title>Muhalik</title>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="bootstrap-multiselect.css" type="text/css" />
                    <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossorigin="anonymous"
                    />
                </Head>
                <Layout token={this.state.jwt_token} logoutClickHandler={this.logout}>
                    {/* <Container> */}
                    {/* <Row> */}
                    <Carousel style={{ margin: '5%' }}>
                        <Carousel.Item>
                            <img
                                style={{ width: '100%', height: `calc(100vh - 250px)` }}
                                src="muhalik.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption style={{ background: 'green', padding: '20px' }}>
                                {animation}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="a.png"
                                style={{ width: '100%', height: `calc(100vh - 250px)` }}
                                alt="Third slide"
                            />
                            <Carousel.Caption style={{ background: 'gray', padding: '20px' }}>
                                {animation}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: '100%', height: `calc(100vh - 250px)` }}
                                src="muhalik.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption style={{ background: 'red', padding: '20px' }}>
                                {animation}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    {/* </Row> */}
                    {/* </Container> */}
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
        // bottom: '-100',
    },
}
export default Index;