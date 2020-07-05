import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import Router from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Layout from './components/customer/layout'
import { getTokenFromStorage, removeTokenFromStorage, getDecodedTokenFromStorage } from '../sdk/core/authentication-service';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config'
import Typical from 'react-typical'
import SliderCarousel from './components/customer/slider-carousel'
import Home from './components/customer/home'
// import { connect } from 'react-redux'
// import { setCategories } from '../redux/actions/category-actions';

let animation =
    <h3 style={{ background: 'green', color: 'white', position: 'fixed', left: '1%', bottom: '1%', zIndex: 1000 }}>
        <Typical
            steps={['This website is under development', 1000,
                'Comming Soon...!', 1000,
                'Be Ready to Shop online...', 1000]}
            loop={Infinity}
            wrapper="p"
        />
    </h3>


export async function getServerSideProps(context) {
    let new_products_list = []
    let categories_list = []
    let sub_categories_list = []
    let top_ranking_products_list = []

    const url = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url).then((response) => {
        categories_list = response.data.category.docs,
            sub_categories_list = response.data.sub_category.docs
    }).catch((error) => {
    })

    const url_3 = MuhalikConfig.PATH + '/api/products/';
    await axios.get(url_3).then((response) => {
        top_ranking_products_list = response.data.data
    }).catch((error) => {
    })

    const _url = MuhalikConfig.PATH + `/api/products/get`
    await axios({
        method: 'GET',
        url: _url,
        params: { q: "new-arrival", page: 1, limit: 8 },
    }).then((response) => {
        new_products_list = response.data.data
    }).catch(err => {
    })

    return {
        props: {
            new_products_list,
            top_ranking_products_list,
            categories_list,
            sub_categories_list
        },
    }
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
        }
    }
    async componentDidMount() {
        // this.props.setCategories(this.props.categories)
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            this.setState({ token: _token })
        }
    }

    logout = () => {
        if (removeTokenFromStorage()) {
            this.setState({ token: '' })
            Router.reload('/index');
            Router.replace('/index');
        } else {
            alert('Logout Failed')
        }
    }

    render() {
        return (
            <div className='div'>
                <Head>
                    <title>Mahaalk</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossOrigin="anonymous"
                    />
                    <link rel="shortcut icon" href=""></link>
                </Head>
                <main>
                    {animation}
                    <Layout
                        role={this.state.token.role || ''}
                        name={this.state.token.full_name || ''}
                        logout={this.logout}
                        categories_list={this.props.categories_list}
                        sub_categories_list={this.props.sub_categories_list}
                    >
                        <SliderCarousel categories_list={this.props.categories_list} />
                        <Home
                            new_products_list={this.props.new_products_list}
                            top_ranking_products_list={this.props.top_ranking_products_list}
                            categories_list={this.props.categories_list}
                            sub_categories_list={this.props.sub_categories_list}
                        />
                    </Layout>
                </main>
                <style jsx>{`
                    .div {
                        min-height: 100vh;
                        background: ${GlobalStyleSheet.body_color};
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                    }
                    @media (max-width: 767px){
                        
                    }
                `}</style>
                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
                    }

                    * {
                        box-sizing: border-box;
                    }
                `}</style>
            </div >
        );
    }
}

// const mapStateToProps = (state) => {
//     console.log('map store:', state)
//     return {
//         categories_list: state.CategoryReducer.categories_list,
//         sub_categories_list: state.CategoryReducer.sub_categories_list
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCategories: (categories) => {
//             dispatch(setCategories(categories))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Index);
export default Index