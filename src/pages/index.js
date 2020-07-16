import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
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
    let slider_list = []
    let new_products_list = []
    let categories_list = []
    let sub_categories_list = []
    let top_ranking_products_list = []
    const url = MuhalikConfig.PATH + '/api/sliders/';
    await axios.get(url).then((res) => {
        slider_list = res.data.data
    }).catch((error) => {
    })

    const url_1 = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url_1).then((res) => {
        categories_list = res.data.category.docs,
            sub_categories_list = res.data.sub_category.docs
    }).catch((error) => {
    })

    const url_3 = MuhalikConfig.PATH + `/api/products/get`
    await axios({
        method: 'GET',
        url: url_3,
        params: { q: "new-arrival", page: 1, limit: 12 },
    }).then((res) => {
        top_ranking_products_list = res.data.data
    }).catch(err => {
    })

    const _url = MuhalikConfig.PATH + `/api/products/get`
    await axios({
        method: 'GET',
        url: _url,
        params: { q: "new-arrival", page: 1, limit: 12 },
    }).then((res) => {
        new_products_list = res.data.data
    }).catch(err => {
    })

    return {
        props: {
            slider_list,
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
            cart_count: 0,
            slider_list: this.props.slider_list,
            new_products_list: this.props.new_products_list,
            top_ranking_products_list: this.props.top_ranking_products_list,
            categories_list: this.props.categories_list,
            sub_categories_list: this.props.sub_categories_list,
        }
    }
    async componentDidMount() {
        let currentComponent = this
        const _token = await getDecodedTokenFromStorage()
        if (_token !== null) {
            this.setState({ token: _token })
            const url = MuhalikConfig.PATH + `/api/users/cart/${_token._id}`;
            await axios.get(url).then((res) => {
                currentComponent.setState({ cart_count: res.data.data.length })
            }).catch((error) => {
            })
        }
    }

    logout = () => {
        removeTokenFromStorage(true)
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
                        role={this.state.token.role}
                        name={this.state.token.full_name}
                        logout={this.logout}
                        categories_list={this.state.categories_list}
                        sub_categories_list={this.state.sub_categories_list}
                        cart_count={this.state.cart_count}
                    >
                        <SliderCarousel
                            categories_list={this.state.categories_list}
                            slider_list={this.state.slider_list}
                        />
                        <div className='_index'>
                            <Home
                                new_products_list={this.state.new_products_list}
                                top_ranking_products_list={this.state.top_ranking_products_list}
                                categories_list={this.state.categories_list}
                                sub_categories_list={this.state.sub_categories_list}
                            />
                        </div>
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
                    ._index{
                        padding: 2% 3.7%;
                    }
                    @media (max-width: 1199px){
                        ._index{
                            padding: 2% 2.7%;
                        }
                    }
                    @media (max-width: 991px){
                        ._index{
                            padding: 2%;
                        }
                    }
                    @media (max-width: 767px) {
                        ._index{
                            padding: 2% 2% 16% 2%;
                        }
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