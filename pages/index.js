import Link from 'next/link';
import Layout from './components/customer/layout/CustomerLayout';

const Index = () => {
    return (
        <div>
            <Layout>
                <Link href='./admin'>Admin dashboard</Link>
                <br />
                <Link href='./login'>Login</Link>
                <br />
                <Link href='./signup'>Signup</Link>
            </Layout>
        </div>
    );
}

export default Index;