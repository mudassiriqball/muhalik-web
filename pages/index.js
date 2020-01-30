import Link from 'next/link';
import Layout from './components/customer/layout/CustomerLayout';

const Index = () => {
    return (
        <div style={{ background: '#F5F5F5'}}>
            <Layout>
                <Link href='./admin'>Admin dashboard</Link>
                <br />
                <Link href='./login'>Login</Link>
                <br />
                <Link href='./signup'>Signup</Link>
                <br />
                <Link href='./vendor-signup'>Vendor Signup</Link>
            </Layout>
        </div>
    );
}

export default Index;