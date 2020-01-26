import Head from 'next/head';
import Toolbar from '../toolbar/toolbar';
import Footer from '../footer/footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>
                Muhalik
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
            />
        </Head>
        <Toolbar />
        {props.children}
        <br />
        <Footer />
    </div>
);

export default Layout;