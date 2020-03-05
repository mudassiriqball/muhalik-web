import React, { Component } from 'react';

import DashboardTabs from './components/admin/dashboard/dashboard-tabs';
import DashboardSideDrawer from './components/admin/dashboard/dashboard-side-drawer';
import AdminLayout from './components/admin/layout/AdminLayout';
import GlobalStyleSheet from '../styleSheet';
import { getTokenFromStorage } from '../sdk/core/authentication-service';

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

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            showSideDrawer: true,
            jwt_token: '',
        }
    }

    async componentDidMount() {
        this.setState({ jwt_token: await getTokenFromStorage() });
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };
    fuckClickHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />;
        }

        return (
            <div style={styles.body}>
                {/* <AdminLayout> */}
                <DashboardTabs token={this.state.jwt_token.fullName} show={this.state.showSideDrawer} drawerClickHandler={this.drawerToggleClickHandler} ClickHandler={this.fuckClickHandler} />
                <DashboardSideDrawer token={this.state.jwt_token.fullName} show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
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
        bottom: '0',
    },
}

export default AdminDashboard;