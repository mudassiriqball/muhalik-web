import Link from 'next/link';
import Layout from './components/customer/layout/CustomerLayout';

// const Index = () => {
//     return (
//         <div style={{ background: '#F5F5F5'}}>
// <Layout>
//     <Link href='./admin'><a>Admin dashboard</a></Link>
//     <br />
//     <Link href='./vendor'><a>Vendor dashboard</a></Link>
//     <br />
//     <Link href='./login'><a>Login</a></Link>
//     <br />
//     <Link href='./signup'><a>Signup</a></Link>
//     <br />
//     <Link href='./vendor-signup'><a>Vendor Signup</a></Link>
//     <Link href='./vendor-signup'><a>Nothing</a></Link>
// </Layout>
//         </div>
//     );
// }

// export default Index;

import Head from 'next/head'

function Index() {
    return (
        <div>
            <Head>
                <title>Muhalik</title>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="bootstrap-multiselect.css" type="text/css" />
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossorigin="anonymous"
                />
            </Head>
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
    )
}

export default Index