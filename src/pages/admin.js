import React, { Component } from 'react';
import Router from 'next/router'
import axios from 'axios'
import Dashboard from './components/admin/dashboard/dashboard';
import DashboardSideDrawer from './components/admin/dashboard/dashboard-side-drawer';
import AdminLayout from './components/admin/layout/AdminLayout';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config'
import { checkAuth, removeTokenFromStorage, getTokenFromStorage } from '../sdk/core/authentication-service';

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
            sideDrawerOpen: false,
            showWrapper: true,

            products_list: [],
            vendors_list: [],
            new_vendors_list: [],
            restricted_vendors_list: [],

            customers_list: [],
            restricted_customers_list: [],

            categories_list: [],
            sub_categories_list: [],

            fields_list: [],
            field_requests_list: [],

            token: '',
            user_name: '',
        }
    }

    async componentDidMount() {
        this.authUser()

        const url = MuhalikConfig.PATH + '/api/categories/categories';
        this.setState({ token: await getTokenFromStorage() })
        const currentComponent = this;
        await axios.get(url).then((response) => {
            currentComponent.setState({
                categories_list: response.data.category.docs,
                sub_categories_list: response.data.sub_category.docs
            });
        }).catch((error) => {
            console.log('Caterories Fetchig Error: ', error)
        })

        const url_1 = MuhalikConfig.PATH + '/api/categories/fields';
        await axios.get(url_1).then(function (response) {
            currentComponent.setState({
                fields_list: response.data.data.docs,
            });
        }).catch(function (error) {
            console.log("Fields Fetching Error:", error)
            alert('Fields Fetching Error: ', error)
        })

        const url_2 = MuhalikConfig.PATH + '/api/categories/field-requests';
        await axios.get(url_2).then(function (response) {
            currentComponent.setState({
                field_requests_list: response.data.data.docs,
            });
        }).catch(function (error) {
            console.log("Field Requests Fetching Error:", error)
            alert('field-requests: ', error)
        })

        const url_3 = MuhalikConfig.PATH + '/api/products/';
        await axios.get(url_3).then(function (response) {
            console.log("all products: ", response.data.data)
            currentComponent.setState({
                products_list: response.data.data,
            });
        }).catch(function (error) {
            console.log("all products: Fetching Error:", error)
            alert('all products error: ', error)
        })

        const url_4 = MuhalikConfig.PATH + '/api/users/vendors';
        await axios.get(url_4).then(function (response) {
            console.log("vendors: ", response.data.data)
            currentComponent.setState({
                vendors_list: response.data.data,
            });
        }).catch(function (error) {
            console.log("vendors Fetching Error:", error)
            alert('vendors error: ', error)
        })

        const url_5 = MuhalikConfig.PATH + '/api/users/new-vendors';
        await axios.get(url_5).then(function (response) {
            console.log("new-vendors: ", response.data.data)
            currentComponent.setState({
                new_vendors_list: response.data.data,
            });
        }).catch(function (error) {
            console.log("new-vendors Fetching Error:", error)
            alert('new-vendors error: ', error)
        })

        const url_6 = MuhalikConfig.PATH + '/api/users/restricted-vendors';
        await axios.get(url_6).then(function (response) {
            console.log("restricted-vendors: ", response.data.data)
            currentComponent.setState({
                restricted_vendors_list: response.data.data,
            });
        }).catch(function (error) {
            console.log("restricted_vendors Fetching Error:", error)
            alert('restricted_vendors error: ', error)
        })

        const url_7 = MuhalikConfig.PATH + '/api/users/customers';
        await axios.get(url_7).then(function (response) {
            console.log("customers: ", response.data.data)
            currentComponent.setState({
                customers_list: response.data.data,
            });
        }).catch(function (error) {
            console.log("customers Fetching Error:", error)
            alert('customers error: ', error)
        })
        const url_8 = MuhalikConfig.PATH + '/api/users/restricted-customers';
        await axios.get(url_8).then(function (response) {
            console.log("customers: ", response.data.data)
            currentComponent.setState({
                restricted_customers_list: response.data.data,
            });
        }).catch(function (error) {
            console.log("restricted customers Fetching Error:", error)
            alert('restricted customers error: ', error)
        })

    }

    async authUser() {
        this.setState({ user_name: await checkAuth('admin') });
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
        if (removeTokenFromStorage()) {
            this.setState({ token: '', user_name: '', })
            Router.replace('/index');
        } else {
            alert('Logout Failed')
        }
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
                    products_list={this.state.products_list}

                    vendors_list={this.state.vendors_list}
                    new_vendors_list={this.state.new_vendors_list}
                    restricted_vendors_list={this.state.restricted_vendors_list}

                    customers_list={this.state.customers_list}
                    restricted_customers_list={this.state.restricted_customers_list}

                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}

                    fields_list={this.state.fields_list}
                    field_requests_list={this.state.field_requests_list}

                    token={this.state.token}
                    user_name={this.state.user_name}
                    show={this.state.showWrapper}
                    drawerClickHandler={this.drawerToggleClickHandler}
                    wrapperBtnClickHandler={this.ShowWrapperClickHandler}
                    logout={this.logout} />
                <DashboardSideDrawer
                    products_list={this.state.products_list}

                    vendors_list={this.state.vendors_list}
                    new_vendors_list={this.state.new_vendors_list}
                    restricted_vendors_list={this.state.restricted_vendors_list}

                    customers_list={this.state.customers_list}
                    restricted_customers_list={this.state.restricted_customers_list}

                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}

                    fields_list={this.state.fields_list}
                    field_requests_list={this.state.field_requests_list}

                    token={this.state.token}
                    user_name={this.state.user_name}
                    show={this.state.sideDrawerOpen}
                    click={this.backdropClickHandler}
                    logout={this.logout} />
                {backdrop}
                {/* </AdminLayout> */}
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