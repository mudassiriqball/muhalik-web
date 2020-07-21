import React, { Component } from 'react';
import axios from 'axios'
import Dashboard from './components/admin/dashboard/dashboard';
import DashboardSideDrawer from './components/admin/dashboard/dashboard-side-drawer';
import AdminLayout from './components/admin/layout/AdminLayout';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config'
import { checkAuth, removeTokenFromStorage, getTokenFromStorage } from '../sdk/core/authentication-service';


export async function getServerSideProps(context) {
    let sliders_list = []
    let categories_list = []
    let sub_categories_list = []

    let admins_count = 0
    let vendors_count = 5
    let new_vendors_count = 0
    let restricted_vendors_count = 0
    let customers_count = 0
    let restricted_customers_count = 0

    let pending_orders_count = 0
    let delivered_orders_count = 0
    let cancelled_orders_count = 0

    const users_count_url = MuhalikConfig.PATH + '/api/users/users-count';
    await axios.get(users_count_url).then((res) => {
        admins_count = res.data.admins_count
        vendors_count = res.data.vendors_count
        new_vendors_count = res.data.new_vendors_count
        restricted_vendors_count = res.data.restricted_vendors_count
        customers_count = res.data.customers_count
        restricted_customers_count = res.data.restricted_customers_count
    }).catch((error) => {
    })

    const order_count_url = MuhalikConfig.PATH + '/api/orders/order-count';
    await axios.get(order_count_url).then((res) => {
        pending_orders_count = res.data.pending_orders
        delivered_orders_count = res.data.delivered_orders
        cancelled_orders_count = res.data.cancelled_orders
    }).catch((error) => {
    })

    const url_1 = MuhalikConfig.PATH + '/api/sliders/';
    await axios.get(url_1).then((res) => {
        sliders_list = res.data.data
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
            admins_count,
            vendors_count,
            new_vendors_count,
            restricted_vendors_count,
            customers_count,
            restricted_customers_count,

            pending_orders_count,
            delivered_orders_count,
            cancelled_orders_count,

            sliders_list,
            categories_list,
            sub_categories_list
        },
    }
}


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

let token = ''
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins_count: this.props.admins_count,
            vendors_count: this.props.vendors_count,
            new_vendors_count: this.props.new_vendors_count,
            restricted_vendors_count: this.props.restricted_vendors_count,
            customers_count: this.props.customers_count,
            restricted_customers_count: this.props.restricted_customers_count,

            pending_orders_count: this.props.pending_orders_count,
            delivered_orders_count: this.props.delivered_orders_count,
            cancelled_orders_count: this.props.cancelled_orders_count,

            sideDrawerOpen: false,
            showWrapper: true,

            // products_list: [],
            users_count: this.props.users_count,
            vendors_list: [],
            new_vendors_list: [],
            restricted_vendors_list: [],

            customers_list: [],
            restricted_customers_list: [],

            categories_list: this.props.categories_list,
            sub_categories_list: this.props.sub_categories_list,

            fields_list: [],
            field_requests_list: [],

            sliders_list: this.props.sliders_list,

            token: '',
            decodedToken: { role: '', full_name: '', status: '' },
        }
    }

    async componentDidMount() {
        this.authUser()
        const currentComponent = this;
        this.setState({ token: await getTokenFromStorage() })

        const url_1 = MuhalikConfig.PATH + '/api/categories/fields';
        await axios.get(url_1).then(function (res) {
            currentComponent.setState({
                fields_list: res.data.data.docs,
            });
        }).catch(function (error) {
            console.log("Fields Fetching Error:", error)
            // alert('Fields Fetching Error: ', error)
        })
        const url_2 = MuhalikConfig.PATH + '/api/categories/field-requests';
        await axios.get(url_2).then(function (res) {
            currentComponent.setState({
                field_requests_list: res.data.data.docs,
            });
        }).catch(function (error) {
            console.log("Field Requests Fetching Error:", error)
            // alert('field-requests: ', error)
        })
    }

    async authUser() {
        let _decodedToken = await checkAuth('admin')
        if (_decodedToken != null) {
            this.setState({ decodedToken: _decodedToken })
        }
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };
    ShowWrapperClickHandler = () => {
        this.setState(prevState => {
            return { showWrapper: !prevState.showWrapper };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    logout = () => {
        removeTokenFromStorage(false)
    }

    async reloadCategories() {
        let currentComponent = this
        const url = MuhalikConfig.PATH + '/api/categories/categories';
        await axios.get(url).then((res) => {
            currentComponent.setState({
                categories_list: res.data.category.docs,
                sub_categories_list: res.data.sub_category.docs
            });
        }).catch((error) => {
            console.log('Caterories Fetchig Error: ', error)
        })
    }
    async reloadSlider() {
        let currentComponent = this
        const url = MuhalikConfig.PATH + '/api/sliders/';
        await axios.get(url).then(function (res) {
            currentComponent.setState({
                sliders_list: res.data.data,
            });
        }).catch(function (error) {
            console.log("sliders_list Fetching Error:", error)
            alert('sliders_list error: ', error)
        })
    }
    async reloadUsersCount() {
        let currentComponent = this
        const users_count_url = MuhalikConfig.PATH + '/api/users/users-count';
        await axios.get(users_count_url).then((res) => {
            currentComponent.setState({
                admins_count: res.data.admins_count,
                vendors_count: res.data.vendors_count,
                new_vendors_count: res.data.new_vendors_count,
                restricted_vendors_count: res.data.restricted_vendors_count,
                customers_count: res.data.customers_count,
                restricted_customers_count: res.data.restricted_customers_count,
            })
        }).catch((error) => {
        })
    }
    async reloadOrdersCount() {
        let currentComponent = this
        const users_count_url = MuhalikConfig.PATH + '/api/users/users-count';
        await axios.get(users_count_url).then((res) => {
            currentComponent.setState({
                pending_orders_count: res.data.pending_orders,
                delivered_orders_count: res.data.delivered_orders,
                cancelled_orders_count: res.data.cancelled_orders,
            })
        }).catch((error) => {
        })
    }


    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />;
        }
        return (
            <div style={styles.body}>
                {/* <AdminLayout> */}
                <Dashboard
                    admins_count={this.state.admins_count}
                    vendors_count={this.state.vendors_count}
                    new_vendors_count={this.state.new_vendors_count}
                    restricted_vendors_count={this.state.restricted_vendors_count}
                    customers_count={this.state.customers_count}
                    restricted_customers_count={this.state.restricted_customers_count}
                    usersReloadCountHandler={this.reloadUsersCount.bind(this)}

                    pending_orders_count={this.state.pending_orders_count}
                    delivered_orders_count={this.state.delivered_orders_count}
                    cancelled_orders_count={this.state.cancelled_orders_count}
                    ordersReloadCountHandler={this.reloadOrdersCount.bind(this)}

                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    categoriesReloadHandler={this.reloadCategories.bind(this)}

                    fields_list={this.state.fields_list}
                    field_requests_list={this.state.field_requests_list}

                    sliders_list={this.state.sliders_list}
                    sliderReloadHandler={this.reloadSlider.bind(this)}

                    token={this.state.token}
                    user_name={this.state.decodedToken.full_name}
                    show={this.state.showWrapper}
                    drawerClickHandler={this.drawerToggleClickHandler}
                    wrapperBtnClickHandler={this.ShowWrapperClickHandler}
                    logout={this.logout}
                />
                <DashboardSideDrawer
                    admins_count={this.state.admins_count}
                    vendors_count={this.state.vendors_count}
                    new_vendors_count={this.state.new_vendors_count}
                    restricted_vendors_count={this.state.restricted_vendors_count}
                    customers_count={this.state.customers_count}
                    restricted_customers_count={this.state.restricted_customers_count}
                    usersReloadCountHandler={this.reloadUsersCount.bind(this)}

                    pending_orders_count={this.state.pending_orders_count}
                    delivered_orders_count={this.state.delivered_orders_count}
                    cancelled_orders_count={this.state.cancelled_orders_count}
                    ordersReloadCountHandler={this.reloadOrdersCount.bind(this)}

                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    categoriesReloadHandler={this.reloadCategories.bind(this)}

                    fields_list={this.state.fields_list}
                    field_requests_list={this.state.field_requests_list}

                    sliders_list={this.state.sliders_list}
                    sliderReloadHandler={this.reloadSlider.bind(this)}

                    token={this.state.token}
                    user_name={this.state.decodedToken.full_name}
                    show={this.state.sideDrawerOpen}
                    click={this.backdropClickHandler}
                    logout={this.logout}
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

export default Admin;