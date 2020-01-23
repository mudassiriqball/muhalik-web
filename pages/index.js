import Link from 'next/link';
import Layout from './layouts/Layout';

const Index = () => {
    return (
        <div>
            <Layout>
                <Link href='./admin/dashboard'>Admin dashboard</Link>
            </Layout>
        </div>
    );
}

export default Index;