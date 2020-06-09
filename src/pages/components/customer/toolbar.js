import {
    Navbar, Nav, Form, InputGroup, FormControl, Image, Button,
    NavDropdown, DropdownButton, Card, Dropdown, ButtonGroup,
    Row, Col, OverlayTrigger, Popover
} from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faUserPlus, faLanguage, faPowerOff, faUser,
    faCartPlus, faHandsHelping, faPen, faSignOutAlt, faGlobe,
    faLuggageCart, faFileInvoiceDollar, faListAlt, faEdit,
    faStoreAlt, faChevronDown, faChevronRight, faListUl, faShoppingCart, faSignLanguage
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import MuhalikConfig from '../../../sdk/muhalik.config'
import axios from 'axios'
import { removeTokenFromStorage } from '../../../sdk/core/authentication-service'
import React from 'react';

const categoryArray = [{ value: 'All' }, { value: 'Machinay' }, { value: 'Clothes' }]
const Toolbar = (props) => {

    let loggedIn = false
    let dashboard_href = ''
    if (props.token == '') {
        loggedIn = false
    } else if (props.token == 'customer') {
        loggedIn = true
        dashboard_href = './index'
    } else if (props.token == 'vendor') {
        loggedIn = true
        dashboard_href = './vendor'
    } else if (props.token == 'admin') {
        loggedIn = true
        dashboard_href = './admin'
    }

    const [searchType, setSearchType] = React.useState('All')
    const [selectedLang, setSelectedLang] = React.useState('En')
    const [isCategoryOpen, setIsCategoryOpen] = React.useState(false)
    const [isShopOpen, setIsShopOpen] = React.useState(false)
    const [isProductOpen, setIsProductOpen] = React.useState(false)

    const [hoverCategory, setHoverCategory] = React.useState(false)
    const [hoverProducts, setHoverProducts] = React.useState(false)
    const [hoverShops, setHoverShops] = React.useState(false)

    const [category_id, setCategory_id] = React.useState('')


    const [isSticky, setSticky] = React.useState(false);
    const ref = React.useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    function toggle() {
        setIsCategoryOpen(!isCategoryOpen)
    }

    function categoryMouseEnter(index) {
        const copyArray = Object.assign([], props.categories_list)
        setCategory_id(copyArray[index]._id)
    }
    function categoryMouseLeave() {
        setCategory_id('')
    }

    return (
        <div>
            <Card>
                <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                    <div className='navbar w-100 p-0 m-0 sticky-inner'>
                        <div className='row w-100 m-0'>
                            <Col lg='auto' md='auto' sm='auto' xs='auto' className='d-inline-flex align-items-center m-0 p-0'>
                                <Navbar.Brand className='d-inline-flex align-items-center p-0 m-0'>
                                    <div className='display_in_md_lg pr-2'>
                                        <Image src="muhalik.jpg" className='display_in_md_lg' roundedCircle fluid style={{ width: '60px', display: 'flex', margin: '0%' }} />
                                    </div>
                                    <h4 className=" text_animation mr-2">Mahaalk<span className='display_in_md_lg' style={{ fontSize: '15px' }}>@2020</span></h4>
                                </Navbar.Brand>
                            </Col>
                            <Col className='align-items-center m-0 p-0'>
                                <div className='input-group'>
                                    <div className='display_in_md_lg'>
                                        <InputGroup.Prepend >
                                            <Dropdown as={ButtonGroup}>
                                                <Dropdown.Toggle as={Button} variant='success'>
                                                    {searchType}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors">
                                                    {categoryArray.map((element, index) =>
                                                        <Dropdown.Item key={index} onClick={() => setSearchType(element.value)}>{element.value}</Dropdown.Item>
                                                    )}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </InputGroup.Prepend>
                                    </div>
                                    <FormControl placeholder="Search here" />
                                    <InputGroup.Append>
                                        <Button variant='success'>
                                            <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                                        </Button>
                                    </InputGroup.Append>
                                </div>
                            </Col>
                            <Col lg='auto' md='auto' sm={0} xs={0} className='m-0 p-0'>
                                <div className='display_in_md_lg align-items-center'>
                                    <Nav className='d-inline-flex align-items-center w-100'>
                                        <div className='mr-auto'></div>
                                        {loggedIn ?
                                            null
                                            :
                                            <Nav.Link href='./login' className='ml-2 align-items-center' style={styles.nav_link}>
                                                <div className='fontawesome'>
                                                    <FontAwesomeIcon icon={faUser} style={styles.nav_fontawesome} />
                                                    <FontAwesomeIcon icon={faUserPlus} style={styles.nav_fontawesome} />
                                                </div>
                                                <div className='nav_link_text'>Login/Join</div>
                                            </Nav.Link>
                                        }
                                        <div href='#' className='ml-2 d-flex flex-column' style={{ zIndex: 1 }}>
                                            <div className='fontawesome'>
                                                <FontAwesomeIcon className='icons' icon={faLanguage} style={styles.nav_fontawesome} />
                                            </div>
                                            <Dropdown className='p-0 m-0'>
                                                <Dropdown.Toggle as={Nav.Link} className='d-inline-flex m-0 p-0 align-items-center' style={{ color: 'gray' }}>
                                                    <div className='nav_link_text p-0 m-0'>{selectedLang}</div>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors" style={{ zIndex: 100 }}>
                                                    <Dropdown.Item onClick={() => setSelectedLang('En')}>English</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSelectedLang("Ar")}>
                                                        {"العربية"}</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <Nav.Link href="#" className='ml-2' style={styles.nav_link}>
                                            <div className='fontawesome'>
                                                <FontAwesomeIcon icon={faShoppingCart} style={styles.nav_fontawesome} />
                                            </div>
                                            <div className='nav_link_text'>Cart</div>
                                        </Nav.Link>
                                        {loggedIn ?
                                            <NavDropdown title={<Image src="muhalik.jpg" roundedCircle fluid style={{ width: '35px', maxWidth: '35px' }} />}
                                                className='ml-2' id="nav-dropdown" alignRight>
                                                <NavDropdown.Item href={dashboard_href} className='d-inline-flex align-items-center'>
                                                    <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                                    <div>Dashboard</div>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href='./vendor' className='d-inline-flex align-items-center'>
                                                    <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                                    <div>Dashboard</div>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item className='d-inline-flex align-items-center'>
                                                    <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                                    <div>Profile</div>
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item onClick={props.logout} className='d-inline-flex align-items-center' >
                                                    <FontAwesomeIcon icon={faPowerOff} style={styles.dropDown_fontawesome} />
                                                    <div>Logout</div>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            :
                                            null
                                        }
                                    </Nav>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>

                <div className='display_in_md_lg'>
                    <Navbar className='ml-3 mb-2 mr-3 p-0 '>
                        <Nav className='w-100 d-inline-flex' style={{ boxShadow: '-1px 0px 10px 1px rgba(0,0,0,0.12) inset', background: `${GlobalStyleSheet.primry_color}` }}>
                            <Dropdown
                                onMouseOver={() => { setIsCategoryOpen(true), setHoverCategory(true) }}
                                onMouseLeave={() => { setIsCategoryOpen(false), setHoverCategory(false) }}
                                show={isCategoryOpen}
                            >
                                <Dropdown.Toggle as={Nav.Link} className="d-inline-flex align-items-center"
                                    style={{
                                        paddingLeft: '1.5vw',
                                        paddingRight: '1.5vw',
                                        border: hoverCategory ? '1px solid lightgray' : null,
                                        background: hoverCategory ? 'white' : null,
                                        margin: hoverCategory ? '-1px' : '0px',
                                        color: hoverCategory ? `${GlobalStyleSheet.primry_color}` : 'white',
                                    }}>
                                    <FontAwesomeIcon icon={faListUl} style={hoverCategory ? styles.second_nav_fontawesome_hover : styles.second_nav_fontawesome} />
                                    <div className='second_nav_link_text ml-2' style={{ color: hoverCategory ? `${GlobalStyleSheet.primry_color}` : 'white' }}> Categories </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ minWidth: category_id == '' ? '30.45vw' : '60vw', left: '-1px', borderTop: 'none', borderTopLeftRadius: '0px' }} className='m-0 p-0'>
                                    <Row noGutters onMouseLeave={() => categoryMouseLeave()} >
                                        <Col style={{ height: '45vw', overflowY: 'auto', zIndex: 1 }}>
                                            {props.categories_list && props.categories_list.map((element, index) =>
                                                <div key={index} className="category_list_item" onMouseOver={() => categoryMouseEnter(index)}>
                                                    {element.value}
                                                    <div className='mr-auto'></div>
                                                    <FontAwesomeIcon icon={faChevronRight} pull="right" style={styles.faChevronRight} />
                                                </div>
                                            )}
                                        </Col>
                                        {category_id ?
                                            <Col style={{ height: '45vwx', overflowY: 'auto', boxShadow: '-2px 0px 10px 1px rgba(0,0,0,0.12)' }}>
                                                {props.sub_categories_list && props.sub_categories_list.map((element, index) =>
                                                    element.category_id == category_id ?
                                                        <div key={index} className="category_list_item" >
                                                            {element.value}
                                                        </div>
                                                        :
                                                        null
                                                )}
                                            </Col>
                                            :
                                            null
                                        }
                                    </Row>
                                </Dropdown.Menu>
                            </ Dropdown>

                            {/* Shops */}
                            <Dropdown
                                onMouseOver={() => { setIsShopOpen(true), setHoverShops(true) }}
                                onMouseLeave={() => { setIsShopOpen(false), setHoverShops(false) }}
                                show={isShopOpen}
                            >
                                <Dropdown.Toggle as={Nav.Link} className="d-inline-flex align-items-center"
                                    style={{
                                        paddingLeft: '1vw',
                                        paddingRight: '1vw',
                                        border: hoverShops ? '1px solid lightgray' : null,
                                        background: hoverShops ? 'white' : null,
                                        margin: hoverShops ? '-1px' : '0px',
                                        color: hoverShops ? `${GlobalStyleSheet.primry_color}` : 'white'
                                    }}>
                                    <FontAwesomeIcon icon={faStoreAlt} style={hoverShops ? styles.second_nav_fontawesome_hover : styles.second_nav_fontawesome} />
                                    <div className='second_nav_link_text ml-2' style={{ color: hoverShops ? `${GlobalStyleSheet.primry_color}` : 'white' }}> Shops </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ minWidth: '80vw', minHeight: '45vw', left: '-1px', borderTop: 'none', borderTopLeftRadius: '0px' }} className='m-0 pt-3'>
                                    <Row noGutters>
                                        <h1>Shops Will Show Here</h1>
                                    </Row>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Products */}
                            <Dropdown
                                onMouseOver={() => { setIsProductOpen(true), setHoverProducts(true) }}
                                onMouseLeave={() => { setIsProductOpen(false), setHoverProducts(false) }}
                                show={isProductOpen}
                            >
                                <Dropdown.Toggle as={Nav.Link} className="d-inline-flex align-items-center"
                                    style={{
                                        paddingLeft: '1vw',
                                        paddingRight: '1vw',
                                        border: hoverProducts ? '1px solid lightgray' : null,
                                        background: hoverProducts ? 'white' : null,
                                        margin: hoverProducts ? '-1px' : '0px',
                                        color: hoverProducts ? `${GlobalStyleSheet.primry_color}` : 'white'
                                    }}>
                                    <FontAwesomeIcon icon={faProductHunt} style={hoverProducts ? styles.second_nav_fontawesome_hover : styles.second_nav_fontawesome} />
                                    <div className='second_nav_link_text ml-2' style={{ color: hoverProducts ? `${GlobalStyleSheet.primry_color}` : 'white' }}> Products </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ minWidth: '80vw', left: '-87%', minHeight: '45vw', borderTop: 'none', borderTopLeftRadius: '0px' }} className='m-0 pt-3'>
                                    <Row noGutters >
                                        <h1>Products Will Show Here</h1>
                                    </Row>
                                </Dropdown.Menu>
                            </Dropdown>

                            <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                <Nav.Link href="#" style={{ paddingLeft: '0.5vw', paddingRight: '0.5vw' }}>
                                    <div className='second_nav_link_text'>About Us</div>
                                </Nav.Link>
                            </OverlyPopover>
                            <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                <Nav.Link href="#" style={{ paddingLeft: '0.5vw', paddingRight: '0.5vw' }}>
                                    <div className='second_nav_link_text'>Feedback</div>
                                </Nav.Link>
                            </OverlyPopover>
                            <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                <Nav.Link href="#" style={{ paddingLeft: '0.5vw', paddingRight: '0.5vw' }}>
                                    <div className='second_nav_link_text'>Help?</div>
                                </Nav.Link>
                            </OverlyPopover>
                            <div className='mr-auto'></div>
                            <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                <Nav.Link href="#" style={{ paddingLeft: '0.5vw', paddingRight: '0.5vw' }}>
                                    <div className='second_nav_link_text'>Sell With Muhalik</div>
                                </Nav.Link>
                            </OverlyPopover>
                            <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                <Nav.Link href="#" style={{ paddingLeft: '1.5vw', paddingRight: '1.5vw' }}>
                                    <div className='second_nav_link_text'>Get Muhalik's App</div>
                                </Nav.Link>
                            </OverlyPopover>
                        </Nav>
                    </Navbar>
                </div>
            </Card >

            <style jsx>
                {`
                    .sticky-wrapper {
                        position: relative;
                    }

                    .sticky .sticky-inner {
                        background: white;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1000;
                    }

                    .sticky .sticky-inner .row {
                        padding: 5px 3%;
                        background: ${GlobalStyleSheet.primry_color}
                    }
                    .sticky .sticky-inner .text_animation {
                        color: white;
                    }

                    .sticky .sticky-inner .nav_link_text {
                        color: white;
                    }
                    .sticky .sticky-inner .nav_link_text:hover {
                        color: lightgray;
                    }
                    .sticky .sticky-inner .fontawesome {
                        color: white;
                    }
                    .sticky .sticky-inner .fontawesome:hover {
                        color: lightgray;
                    }

                    .fontawesome {
                        color: ${GlobalStyleSheet.primry_color};
                    }

                    .text_animation{
                        animation: mymove 5s infinite;
                        color: ${GlobalStyleSheet.primry_color};
                        font-family: Verdana, Geneva, sans-serif;
                        margin: 0%;
                    }

                    @keyframes mymove {
                        50% {text-shadow: 10px 10px 10px green;}
                    }

                    .nav_link_text {
                        white-space: nowrap;
                        font-size: 13px;
                        padding: 0px;
                        margin: 0px;
                        color: gray
                    }
                    .second_nav_link_text {
                        white-space: nowrap;
                        font-size: 14px;
                        color: white;
                    }
                    .nav_link_text:hover, .second_nav_link_text:hover {
                        color: lightgray;
                    }
                    
                    .category_list_item {
                        cursor: pointer;
                        width: 98%;
                        display: inline-flex;
                        align-items: center;
                        font-size: 14px;
                        padding: 2% 4%;
                        margin: 1% -2% 0% 2%;
                        color: gray;
                    }
                    .category_list_item:hover{
                        z-index: 100;
                        color: #005ce6;
                        border-radius: 2px;
                        box-shadow: -1px 0px 10px 1px rgba(0,0,0,0.12);
                    }
                    .row {
                            display: inline-flex;
                            align-items: center;
                            width: 100%;
                            padding: 10px 3%;
                    }
                    .input-group{
                        align-items: center;
                        display: inline-flex;
                        padding-left: 7%;
                        padding-right: 12%;
                    }

                    @media (max-width: 992px) {
                        .input-group{
                            padding: 0%;
                        }
                    }
                    @media (min-width: 767px) {
                        // .row {
                        //     padding: 5px 10px;
                        // }
                    }
                    @media (max-width: 767px) {
                        .display_in_md_lg {
                            display: none;
                        }
                        // .row {
                        //     padding: 1%;
                        // }
                        .input-group{
                            padding: 0%;
                        }
                    }
                `}
            </style>
        </div >
    )
}

const OverlyPopover = (props) => (
    <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={
        <Popover id="popover-basic">
            <Popover.Title as="h4">{props.title}</Popover.Title>
            <Popover.Content>
                {props.content}
            </Popover.Content>
        </Popover>
    }>
        {props.children}
    </OverlayTrigger>
);

const styles = {
    nav_link: {
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontSize: '13px',
    },
    search_fontawesome: {
        color: 'white',
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
        fontWeight: 'normal'
    },
    nav_fontawesome: {
        minWidth: '24px',
        minHeight: '24px',
        maxHeight: '24px',
        maxWidth: '24px',
    },
    dropDown_fontawesome: {
        color: 'gray',
        margin: '0px 20px 0px 0px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    second_nav_fontawesome: {
        color: 'white',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
    second_nav_fontawesome_hover: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
    faChevronRight: {
        color: 'gray',
        width: '10px',
        height: '10px',
        maxHeight: '10px',
        maxWidth: '10px',
    },
}

export default Toolbar





// import Head from 'next/head'

// export default function Home() {
//     return (
//         <div className="container">
//             <Head>
//                 <title>Create Next App</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <main>
//                 <h1 className="title">
//                     Welcome to <a href="https://nextjs.org">Next.js!</a>
//                 </h1>

//                 <p className="description">
//                     Get started by editing <code>pages/index.js</code>
//                 </p>

//                 <div className="grid">
//                     <a href="https://nextjs.org/docs" className="card">
//                         <h3>Documentation &rarr;</h3>
//                         <p>Find in-depth information about Next.js features and API.</p>
//                     </a>

//                     <a href="https://nextjs.org/learn" className="card">
//                         <h3>Learn &rarr;</h3>
//                         <p>Learn about Next.js in an interactive course with quizzes!</p>
//                     </a>

//                     <a
//                         href="https://github.com/vercel/next.js/tree/master/examples"
//                         className="card"
//                     >
//                         <h3>Examples &rarr;</h3>
//                         <p>Discover and deploy boilerplate example Next.js projects.</p>
//                     </a>

//                     <a
//                         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//                         className="card"
//                     >
//                         <h3>Deploy &rarr;</h3>
//                         <p>
//                             Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//                     </a>
//                 </div>
//             </main>

//             <footer>
//                 <a
//                     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Powered by{' '}
//                     <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//                 </a>
//             </footer>

//             <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//             <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//         </div>
//     )
// }
