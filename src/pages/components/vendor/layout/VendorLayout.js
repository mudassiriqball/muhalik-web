import Head from 'next/head';
import VendorToolbar from '../toolbar/vendor-toolbar';
import VendorFooter from '../footer/vendor-footer';
const VendorLayout = (props) => (
    <div>
        <VendorToolbar />
        {props.children}
        <VendorFooter />
    </div>
);

export default VendorLayout;
