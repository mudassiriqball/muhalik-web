import Head from 'next/head';
import Toolbar from './toolbar';
import Footer from './footer';
import StickyBottomNavbar from './stick-bottom-navbar'

const Layout = (props) => (
    <>
        <Toolbar {...props} />
        <div className='childrens'>
            {props.children}
        </div>
        <div className='display_in_md_lg'>
            <Footer {...props} />
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
            }
            @media (max-width: 767px) {
                .display_in_md_lg{
                    display: none
                }
                .display_in_sm_xs{
                    display: block
                }
            }
        `}</style>
    </>
);

export default Layout;