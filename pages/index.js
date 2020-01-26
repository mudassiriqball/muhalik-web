import Link from 'next/link';
import Layout from './components/customer/layout/CustomerLayout';

const Index = () => {
    return (
        <div>
            <Layout>
                <Link href='./admin'>Admin dashboard</Link>
            </Layout>
        </div>
    );
}

export default Index;