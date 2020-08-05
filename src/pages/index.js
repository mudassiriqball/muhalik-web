import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import Head from 'next/head'
import Router from 'next/router'
import axios from 'axios'
import Layout from './components/customer/layout'
import { getTokenFromStorage, removeTokenFromStorage, getDecodedTokenFromStorage, checkTokenExpAuth } from '../sdk/core/authentication-service';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config'
import Typical from 'react-typical'
import SliderCarousel from './components/customer/slider-carousel'
import Home from './components/customer/home'
// import { connect } from 'react-redux'
// import { setCategories } from '../redux/actions/category-actions';

let animation =
    <h3 style={{ background: 'transparent', color: `${GlobalStyleSheet.primry_color}`, position: 'fixed', left: '1%', bottom: '1%', zIndex: 1000 }}>
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
    let home_categories_list = []
    let categories_list = []
    let sub_categories_list = []

    let new_products_list = []
    let top_ranking_products_list = []

    const url = MuhalikConfig.PATH + '/api/sliders/sliders';
    await axios.get(url, { "rejectUnauthorized": false }).then((res) => {
        slider_list = res.data.data
    }).catch((error) => {
    })

    const home_categories_url = MuhalikConfig.PATH + '/api/categories/home-categories';
    await axios.get(home_categories_url).then((res) => {
        home_categories_list = res.data.data
    }).catch((err) => {
    })

    const cat_url = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(cat_url).then((res) => {
        categories_list = res.data.category.docs
        sub_categories_list = res.data.sub_category.docs
    }).catch((err) => {
    })

    const url_3 = MuhalikConfig.PATH + `/api/products/all-products-query-search`
    await axios({
        method: 'GET',
        url: url_3,
        params: { q: "new-arrival", page: 1, limit: 12 },
    }).then((res) => {
        top_ranking_products_list = res.data.data
    }).catch(err => {
    })

    const _url = MuhalikConfig.PATH + `/api/products/all-products-query-search`
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
            home_categories_list,
            categories_list,
            sub_categories_list,
            new_products_list,
            top_ranking_products_list,
        },
    }
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider_list: this.props.slider_list,
            new_products_list: this.props.new_products_list,
            top_ranking_products_list: this.props.top_ranking_products_list,

            token: null,
            cart_count: 0,
            user: {
                _id: null, role: '', mobile: '', full_name: '', gender: '', countary: '', city: '', address: '',
                email: '', shop_name: '', shop_category: '', shop_address: '', avatar: '', status: ''
            }
        }
    }

    unmounted = true
    CancelToken = axios.CancelToken;
    source = this.CancelToken.source();

    async componentDidMount() {
        Router.events.on('routeChangeComplete', () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });

        const _decodedToken = await checkTokenExpAuth()
        if (_decodedToken != null) {
            let obj = this.state.user
            obj._id = _decodedToken._id
            obj.role = _decodedToken.role
            this.setState({ user: obj })

            this.getUser(_decodedToken._id)
            // this.getCartCount(_decodedToken._id)

            const _token = await getTokenFromStorage()
            this.setState({ token: _token })
        }
    }

    async getUser(id) {
        let currentComponent = this
        const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${id}`;
        await axios.get(user_url, { cancelToken: this.source.token }).then((res) => {
            if (currentComponent.unmounted) {
                currentComponent.setState({ user: res.data.data[0], cart_count: res.data.data[0].cart.length })
            }
        }).catch((err) => {
            if (axios.isCancel(err)) return
        })
    }

    // async getCartCount(id) {
    //     const url = MuhalikConfig.PATH + `/api/users/cart/${id}`;
    //     await axios.get(url, { cancelToken: source.token }).then((res) => {
    //         if (unmounted) {
    //             currentComponent.setState({})
    //         }
    //     }).catch((err) => {
    //         if (axios.isCancel(err)) return
    //     })
    // }

    componentWillUnmount() {
        this.source.cancel();
        this.unmounted = false
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
                    <link rel="shortcut icon" href="/muhalik.jpg" />
                </Head>
                <main>
                    {animation}
                    <Layout
                        role={this.state.user.role}
                        full_name={this.state.user.full_name}

                        cart_count={this.state.cart_count}
                        {...this.props}
                    >
                        <SliderCarousel
                            slider_list={this.state.slider_list}
                            categories_list={this.props.categories_list}
                            sub_categories_list={this.props.sub_categories_list}
                        />
                        <div className='_index'>
                            <Home
                                new_products_list={this.state.new_products_list}
                                top_ranking_products_list={this.state.top_ranking_products_list}
                                categories_list={this.props.categories_list}
                                sub_categories_list={this.props.sub_categories_list}
                                home_categories_list={this.props.home_categories_list}
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
                            padding: 1.5% 1.5% 50px 1.5%;
                        }
                    }
                `}</style>
                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
                        // font-family: 'Janna LT Regular خط الجنة'
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