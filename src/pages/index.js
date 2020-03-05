import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Layout from './components/customer/layout/CustomerLayout';
import Router from 'next/router'
import { getTokenFromStorage } from '../sdk/core/authentication-service';

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
            this.setState({ jwt_token: token });
        }
    }

    render() {
        let vendor_dashoard = <div></div>;
        let admin_dashoard = <div></div>;

        if (this.state.jwt_token.role == 'vendor') {
            vendor_dashoard =
                <div>
                    <Link href='./vendor'><a>Vendor dashboard</a></Link>
                    <br></br>
                </div>
        } else if (this.state.jwt_token.role == 'admin') {
            admin_dashoard =
                <div>
                    <Link href='./admin'><a>Admin dashboard</a></Link>
                    <br></br>
                </div>
        }

        return (
            <div>
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
                <Layout>
                    {admin_dashoard}
                    {vendor_dashoard}
                    <Link href='./login'><a>Login</a></Link>
                    <br />
                    <Link href='./signup'><a>Signup</a></Link>
                    <br />
                    <Link href='./vendor-signup'><a>Vendor Signup</a></Link>
                </Layout>
            </div>
        );
    }
}

export default Index;