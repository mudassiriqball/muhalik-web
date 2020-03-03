import React, { Component } from 'react';

import DashboardTabs from './components/vendor/dashboard/dashboard-tabs';
import DashboardSideDrawer from './components/vendor/dashboard/dashboard-side-drawer';
import GlobalStyleSheet from '../styleSheet';

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
        sideDrawerOpen: false,
        showSideDrawer: true
    };
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };
    showSideDrawerClickHandler = () => {
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
                    <DashboardTabs show={this.state.showSideDrawer} drawerClickHandler={this.drawerToggleClickHandler} ClickHandler={this.showSideDrawerClickHandler}/>
                    <DashboardSideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
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