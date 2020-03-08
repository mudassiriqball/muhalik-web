import Head from 'next/head';
import Toolbar from '../toolbar/toolbar';
import Footer from '../footer/footer';

const Layout = (props) => (
    <div>
        <Toolbar token={props.token} logout={props.logoutClickHandler} />
            {props.children}
        <Footer />
    </div>
);

export default Layout;