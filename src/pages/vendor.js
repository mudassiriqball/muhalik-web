import React, { Component } from 'react'
import axios from 'axios'
import Dashboard from './components/vendor/dashboard/dashboard'
import DashboardSideDrawer from './components/vendor/dashboard/dashboard-side-drawer'
import GlobalStyleSheet from '../styleSheet'
import { checkAuth, removeTokenFromStorage, getTokenFromStorage } from '../sdk/core/authentication-service'
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
    let field_requests_list = []

    let categories_list = []
    let sub_categories_list = []

    const url_1 = MuhalikConfig.PATH + '/api/categories/fields'
    await axios.get(url_1).then(function (response) {
        currentComponent.setState({
            fields_list: response.data.data.docs,
            field_requests_list: response.data.data.docs,
        })
    }).catch(function (error) {
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
            field_requests_list,

            categories_list,
            sub_categories_list,
        },
    }
}


class Vendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',

            sideDrawerOpen: false,
            showWrapper: true,

            categories_list: this.props.categories_list,
            sub_categories_list: this.props.sub_categories_list,

            fields_list: this.props.fields_list,
            field_requests_list: this.props.field_requests_list,

            pending_orders_count: 0,
            delivered_orders_count: 0,
            cancelled_orders_count: 0,
            return_orders_count: 0,

            token: '',
            decodedToken: { _id: null, role: '', full_name: '', status: '' },
        }
    }

    async componentDidMount() {
        this.authUser();
    }

    async authUser() {
        const currentComponent = this
        let _decodedToken = await checkAuth('vendor')
        if (_decodedToken != null) {
            const _token = await getTokenFromStorage()
            this.setState({ token: _token, decodedToken: _decodedToken })
            this.getOrdersCount()
            const currentComponent = this
            const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${_decodedToken._id}`;
            await axios.get(user_url).then((res) => {
                currentComponent.setState({ user: res.data.data[0] })
            }).catch((error) => {
            })
        }
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

    logout = () => {
        removeTokenFromStorage(false)
    }

    async getOrdersCount() {
        let currentComponent = this
        const order_count_url = MuhalikConfig.PATH + `/api/orders/user-order-count/${this.state.decodedToken._id}`;
        await axios.get(order_count_url).then((res) => {
            currentComponent.setState({
                pending_orders_count: res.data.pending_orders_count,
                delivered_orders_count: res.data.delivered_orders_count,
                cancelled_orders_count: res.data.cancelled_orders_count,
                return_orders_count: res.data.return_orders_count,
            })
        }).catch((error) => {
        })
    }

    render() {
        let backdrop
        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />
        }

        return (
            <div style={styles.body}>
                {/* <AdminLayout> */}
                <Dashboard
                    avatar={this.state.user.avatar}
                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    field_requests_list={this.state.field_requests_list}
                    fields_list={this.state.fields_list}

                    pending_orders_count={this.state.pending_orders_count}
                    delivered_orders_count={this.state.delivered_orders_count}
                    cancelled_orders_count={this.state.cancelled_orders_count}
                    return_orders_count={this.state.return_orders_count}
                    ordersReloadCountHandler={this.getOrdersCount.bind(this)}

                    token={this.state.token}
                    user_id={this.state.decodedToken._id}
                    user_name={this.state.decodedToken.full_name}
                    user_status={this.state.decodedToken.status}

                    profileHref={'/user/profile'}
                    show={this.state.showWrapper}
                    drawerClickHandler={this.drawerToggleClickHandler}
                    wrapperBtnClickHandler={this.ShowWrapperClickHandler}
                    logoutClickHandler={this.logout}
                />

                <DashboardSideDrawer
                    avatar={this.state.user.avatar}
                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    field_requests_list={this.state.field_requests_list}
                    fields_list={this.state.fields_list}

                    pending_orders_count={this.state.pending_orders_count}
                    delivered_orders_count={this.state.delivered_orders_count}
                    cancelled_orders_count={this.state.cancelled_orders_count}
                    return_orders_count={this.state.return_orders_count}
                    ordersReloadCountHandler={this.getOrdersCount.bind(this)}

                    token={this.state.token}
                    user_id={this.state.decodedToken._id}
                    user_name={this.state.decodedToken.full_name}
                    user_status={this.state.decodedToken.status}

                    show={this.state.sideDrawerOpen}
                    click={this.backdropClickHandler}
                    logoutClickHandler={this.logout}
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