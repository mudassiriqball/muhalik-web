import Head from 'next/head';
import Toolbar from './toolbar';
import Footer from './footer';

const Layout = (props) => (
    <>
        <Toolbar {...props} />
        {/* <Toolbar token={props.token} logout={props.logoutClickHandler} /> */}
        {props.children}
        <Footer />
    </>
);

export default Layout;