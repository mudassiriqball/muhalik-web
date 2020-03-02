import Head from 'next/head';
import AdminToolbar from '../toolbar/admin-toolbar';
import AdminFooter from '../footer/admin-footer';
const AdminLayout = (props) => (
    <div>
        <AdminToolbar />
        {props.children}
        <AdminFooter />
    </div>
);

export default AdminLayout;
