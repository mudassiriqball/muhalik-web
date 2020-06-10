import Head from 'next/head';
import Toolbar from './toolbar';
import Footer from './footer';
import StickyBottomNavbar from './stick-bottom-navbar'

const Layout = (props) => (
    <>
        <Toolbar {...props} />
        {props.carosuel}
        <div className='childrens'>
            {props.children}
        </div>
        <div className='display_in_md_lg'>
            <Footer />
        </div>

        <div className='display_in_sm_xs'>
            <StickyBottomNavbar {...props} />
        </div>
        <style jsx>{`
            @media (min-width: 767px) {
                .display_in_md_lg{
                    display: block
                }
                .display_in_sm_xs{
                    display: none
                }
                .childrens{
                    padding: 1% 3% 5% 3%;
                }
            }
            @media (max-width: 767px) {
                .display_in_md_lg{
                    display: none
                }
                .display_in_sm_xs{
                    display: block
                }
                .childrens{
                    padding: 0.5%;
                }
            }
        `}</style>
    </>
);

export default Layout;