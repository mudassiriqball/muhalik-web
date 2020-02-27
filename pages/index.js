import Link from 'next/link';
import Layout from './components/customer/layout/CustomerLayout';

const Index = () => {
    return (
        <div style={{ background: '#F5F5F5'}}>
            <Layout>
                <Link href='./admin'><a>Admin dashboard</a></Link>
                <br />
                <Link href='./vendor'><a>Vendor dashboard</a></Link>
                <br />
                <Link href='./login'><a>Login</a></Link>
                <br />
                <Link href='./signup'><a>Signup</a></Link>
                <br />
                <Link href='./vendor-signup'><a>Vendor Signup</a></Link>
                <Link href='./vendor-signup'><a>Nothing</a></Link>
            </Layout>
        </div>
    );
}

export default Index;