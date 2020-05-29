import React, { Component } from 'react';
import Router from 'next/router'
import axios from 'axios'
import Dashboard from './components/admin/dashboard/dashboard';
import DashboardSideDrawer from './components/admin/dashboard/dashboard-side-drawer';
import AdminLayout from './components/admin/layout/AdminLayout';
import GlobalStyleSheet from '../styleSheet';
import MuhalikConfig from '../sdk/muhalik.config'
import { chectAuth, removeTokenFromStorage, getTokenFromStorage } from '../sdk/core/authentication-service';

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
        this.authUser()
        this.state = {
            sideDrawerOpen: false,
            showWrapper: true,

            categories_list: [],
            sub_categories_list: [],

            fields_list: [],
            field_requests_list: [],

            token: '',
            user_name: '',
        }
    }

    async componentDidMount() {
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
            alert('F error: ', error)
        })

        // function getCategories() {
        //     return axios.get(MuhalikConfig.PATH + '/api/categories_list/categories_list');
        // }
        // function getFields() {
        //     return axios.get(MuhalikConfig.PATH + '/api/categories_list/fields');
        // }

        // axios.all([getCategories(), getFields()])
        //     .then(axios.spread(function (response) {
        //         this.setState({
        //             categories_list: response[0].data.category.docs,
        //             sub_categories_list: response[0].data.sub_category.docs,
        //             fields: response[1].data.sub_category.docs
        //         })
        //     })).catch(function (error) {
        //         console.log('ERRORR:', error);
        //     });
    }

    async authUser() {
        this.setState({ user_name: await chectAuth('admin') });
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
                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    fields_list={this.state.fields_list}
                    field_requests_list={this.state.field_requests_list}
                    token={this.state.token}
                    user_name={this.state.user_name}
                    show={this.state.showWrapper}
                    drawerClickHandler={this.drawerToggleClickHandler}
                    wrapperBtnClickHandler={this.ShowWrapperClickHandler}
                    logoutClickHandler={this.logout} />
                <DashboardSideDrawer
                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    fields_list={this.state.fields_list}
                    field_requests_list={this.state.field_requests_list}
                    token={this.state.token}
                    user_name={this.state.user_name}
                    show={this.state.sideDrawerOpen}
                    click={this.backdropClickHandler}
                    logoutClickHandler={this.logout} />
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