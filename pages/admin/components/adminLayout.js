import Head from 'next/head';
import AdminNavbar from './adminNavbar';
import Footer from '../../components/footer';
import Sidebar from './sidebar';
import { Row, Col } from 'react-bootstrap';
const AdminLayout = (props) => (
    <div>
        <Head>
            <title>
                Muhalik
            </title>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
            />
        </Head>
        <AdminNavbar />
        <Row style={{ padding: '0px', margin: '0px' }}>
            <Col style={{ paddingLeft: '0px' }} xs="5" sm="4" lg="3">
                <Sidebar />
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
        <Footer />
    </div>
);

export default AdminLayout;