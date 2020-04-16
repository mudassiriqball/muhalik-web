import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Layout from './components/customer/layout/Layout';
import Router from 'next/router'
import { getTokenFromStorage, removeTokenFromStorage } from '../sdk/core/authentication-service';
import GlobalStyleSheet from '../styleSheet';
import Typical from 'react-typical'
import { Container, Row, Col, Carousel } from 'react-bootstrap'


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
                    <link rel="shortcut icon" href=""></link>
                </Head>
                <Layout token={this.state.jwt_token} logoutClickHandler={this.logout}>
                    {animation}
                </Layout>
            </div>
        );
    }
}

const styles = {
    body: {
        background: '#f1f3f4',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        minHeight: '100vh',
        // bottom: '-100',
    },
}
export default Index;