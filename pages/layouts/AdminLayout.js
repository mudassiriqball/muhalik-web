import Head from 'next/head';
import AdminNavbar from '../components/navbars/adminNavbar';
import Footer from '../components/footers/footer';
const AdminLayout = (props) => (
    <div>
        <Head>
            <title>
                Muhalik
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous" />
        </Head>
        <AdminNavbar />
        {props.children}
        <Footer />
    </div>
);

export default AdminLayout;





{/* <Row className="fuck" style={{ padding: '0px', margin: '0px' }}>
                <Col sm={3} style={{ padding: '0px', flex: '0 0 280px' }}><Sidebar /></Col>
                <Col sm={9} style={{ padding: '0px' }}>{props.children}</Col>
            </Row> */}