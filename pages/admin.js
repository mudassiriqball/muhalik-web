import React, { Component } from 'react';

import Dashboard from './components/admin/dashboard/dashboard';
import DashboardSideDrawer from './components/admin/dashboard/dashboard-side-drawer';
import AdminLayout from './components/admin/layout/AdminLayout';

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
    state = {
        sideDrawerOpen: false
    };
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
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
            <div>
                <AdminLayout>
                    <Dashboard drawerClickHandler={this.drawerToggleClickHandler} />
                    <DashboardSideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
                    {backdrop}
                </AdminLayout>
            </div>
        );
    }
}

export default AdminDashboard;