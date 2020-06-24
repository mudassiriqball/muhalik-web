import React, { Component } from 'react'
import Router from 'next/router'
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

class Vendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            showWrapper: true,

            categories_list: [],
            sub_categories_list: [],

            fields_list: [],
            field_requests_list: [],

            token: '',
            decodedToken: '',
        }
    }

    async componentDidMount() {
        this.authUser();
        const url = MuhalikConfig.PATH + '/api/categories/categories'
        this.setState({ token: await getTokenFromStorage() })
        const currentComponent = this
        await axios.get(url).then((response) => {
            currentComponent.setState({
                categories_list: response.data.category.docs,
                sub_categories_list: response.data.sub_category.docs
            })
        }).catch((error) => {
            console.log('Caterories Fetchig Error: ', error)
        })

        const url_1 = MuhalikConfig.PATH + '/api/categories/fields'
        await axios.get(url_1).then(function (response) {
            currentComponent.setState({
                fields_list: response.data.data.docs,
                field_requests_list: response.data.data.docs,
            })
        }).catch(function (error) {
            alert('F error: ', error)
        })
    }

    async authUser() {
        this.setState({ decodedToken: await checkAuth('vendor') })
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
        if (removeTokenFromStorage()) {
            this.setState({ token: '', decodedToken: '', })
            Router.replace('/index');
        } else {
            alert('Logout Failed')
        }
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
                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    field_requests_list={this.state.field_requests_list}
                    fields_list={this.state.fields_list}
                    token={this.state.token}
                    user_name={this.state.decodedToken.full_name}
                    user_status={this.state.decodedToken.status}
                    show={this.state.showWrapper}
                    drawerClickHandler={this.drawerToggleClickHandler}
                    wrapperBtnClickHandler={this.ShowWrapperClickHandler}
                    logoutClickHandler={this.logout} />

                <DashboardSideDrawer
                    categories_list={this.state.categories_list}
                    sub_categories_list={this.state.sub_categories_list}
                    field_requests_list={this.state.field_requests_list}
                    fields_list={this.state.fields_list}
                    token={this.state.token}
                    user_name={this.state.decodedToken.full_name}
                    user_status={this.state.decodedToken.status}
                    show={this.state.sideDrawerOpen}
                    click={this.backdropClickHandler}
                    logoutClickHandler={this.logout} />
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