import React, { Component } from 'react'
import Router from 'next/router'
import axios from 'axios'
import Dashboard from './components/vendor/dashboard/dashboard'
import DashboardSideDrawer from './components/vendor/dashboard/dashboard-side-drawer'
import GlobalStyleSheet from '../styleSheet'
import { checkTokenExpAuth, removeTokenFromStorage, getTokenFromStorage } from '../sdk/core/authentication-service'
import MuhalikConfig from '../sdk/muhalik.config'

const BackDrop = props => (
    <div>
        <div onClick={props.click}>
        </div>
        <style jsx>{`
             position: fixed;
             width: 100%;
             height: 100%;
             top: 0;
             left: 0;
             background: rgba(0, 0, 0, 0.3);
             z-index: 100;
        `}</style>
    </div>
)



export async function getServerSideProps(context) {
    let fields_list = []
    let categories_list = []
    let sub_categories_list = []

    const url_1 = MuhalikConfig.PATH + '/api/categories/fields'
    await axios.get(url_1).then((res) => {
        fields_list = res.data.data.docs
    }).catch((error) => {
    })

    const url_2 = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url_2).then((res) => {
        categories_list = res.data.category.docs
        sub_categories_list = res.data.sub_category.docs
    }).catch((error) => {
    })

    return {
        props: {
            fields_list,
            categories_list,
            sub_categories_list,
        },
    }
}


class Vendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            showWrapper: true,

            categories_list: this.props.categories_list,
            sub_categories_list: this.props.sub_categories_list,

            fields_list: this.props.fields_list,

            pending_orders_count: 0,
            delivered_orders_count: 0,
            cancelled_orders_count: 0,
            returned_orders_count: 0,

            token: null,
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
        const _decodedToken = await checkTokenExpAuth()
        if (_decodedToken != null) {
            await this.authUser(_decodedToken.role)
            await this.setState({ user: _decodedToken })
            this.getUser(_decodedToken._id)
            this.getOrdersCount()
            const _token = await getTokenFromStorage()
            this.setState({ token: _token })
        } else {
            Router.push('/')
        }
    }

    async authUser(role) {
        if (role != 'vendor') {
            Router.push('/')
        }
    }

    async getUser(id) {
        let currentComponent = this
        const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${id}`;
        await axios.get(user_url, { cancelToken: this.source.token }).then((res) => {
            if (currentComponent.unmounted) {
                currentComponent.setState({ user: res.data.data[0] })
            }
        }).catch((err) => {
            if (axios.isCancel(err)) return
        })
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }
    ShowWrapperClickHandler = () => {
        this.setState(prevState => {
            return { showWrapper: !prevState.showWrapper }
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    async logout() {
        if (await removeTokenFromStorage()) {
            Router.replace('/')
        }
    }

    async getOrdersCount() {
        let currentComponent = this
        const order_count_url = MuhalikConfig.PATH + `/api/orders/user-orders-count/${this.state.user._id}`;
        await axios.get(order_count_url, { cancelToken: this.source.token }).then((res) => {
            if (currentComponent.unmounted) {
                currentComponent.setState({
                    pending_orders_count: res.data.pending_orders_count,
                    delivered_orders_count: res.data.delivered_orders_count,
                    cancelled_orders_count: res.data.cancelled_orders_count,
                    returned_orders_count: res.data.returned_orders_count,
                })
            }
        }).catch((error) => {
        })
    }


    componentWillUnmount() {
        this.source.cancel();
        this.unmounted = false
    }


    render() {
        let backdrop
        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />
        }

        return (
            <div style={styles.body}>
                <Dashboard
                    token={this.state.token}
                    user_id={this.state.user._id}
                    full_name={this.state.user.full_name}
                    avatar={this.state.user.avatar}
                    status={this.state.user.status}

                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    fields_list={this.state.fields_list}

                    pending_orders_count={this.state.pending_orders_count}
                    delivered_orders_count={this.state.delivered_orders_count}
                    cancelled_orders_count={this.state.cancelled_orders_count}
                    returned_orders_count={this.state.returned_orders_count}
                    ordersReloadCountHandler={this.getOrdersCount.bind(this)}

                    show={this.state.showWrapper}
                    drawerClickHandler={this.drawerToggleClickHandler}
                    wrapperBtnClickHandler={this.ShowWrapperClickHandler}
                    logout={this.logout.bind(this)}
                />

                <DashboardSideDrawer
                    token={this.state.token}
                    user_id={this.state.user._id}
                    full_name={this.state.user.full_name}
                    avatar={this.state.user.avatar}
                    status={this.state.user.status}

                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    fields_list={this.state.fields_list}

                    pending_orders_count={this.state.pending_orders_count}
                    delivered_orders_count={this.state.delivered_orders_count}
                    cancelled_orders_count={this.state.cancelled_orders_count}
                    returned_orders_count={this.state.returned_orders_count}
                    ordersReloadCountHandler={this.getOrdersCount.bind(this)}

                    show={this.state.sideDrawerOpen}
                    click={this.backdropClickHandler}
                    logout={this.logout.bind(this)}
                />
                {backdrop}
                {/* </AdminLayout> */}
                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
                    }
                `}</style>
            </div>
        )
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

export default Vendor