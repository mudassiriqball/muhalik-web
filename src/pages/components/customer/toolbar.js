import {
    Navbar, Nav, Form, InputGroup, FormControl, Image, Button,
    NavDropdown, DropdownButton, Card, Dropdown, ButtonGroup,
    Row, Col, OverlayTrigger, Popover, Tooltip, Badge
} from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faUserPlus, faLanguage, faPowerOff, faUser,
    faTachometerAlt, faHandsHelping, faPen, faSignOutAlt, faGlobe,
    faLuggageCart, faFileInvoiceDollar, faListAlt, faEdit,
    faStoreAlt, faChevronDown, faChevronRight, faListUl, faShoppingCart, faSignLanguage, faMobile, faMobileAlt, faSuitcaseRolling
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import MuhalikConfig from '../../../sdk/muhalik.config'
import { removeTokenFromStorage } from '../../../sdk/core/authentication-service'
import React from 'react';
import { faHeart, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import Router from 'next/router'
import MyButton from '../buttons/my-btn'

const categoryArray = [{ value: 'All' }, { value: 'Machinay' }, { value: 'Clothes' }]
const Toolbar = (props) => {
    let loggedIn = false
    let dashboard_href = ''
    if (props.role == '') {
        loggedIn = false
    } else if (props.role == 'customer') {
        loggedIn = true
        dashboard_href = '/index'
    } else if (props.role == 'vendor') {
        loggedIn = true
        dashboard_href = '/vendor'
    } else if (props.role == 'admin') {
        loggedIn = true
        dashboard_href = '/admin'
    }

    const [searchType, setSearchType] = React.useState('All')
    const [selectedLang, setSelectedLang] = React.useState('English')
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
            setSticky(ref.current.getBoundingClientRect().top < 0);
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
        setCategory_id(copyArray[index])
    }
    function categoryMouseLeave() {
        setCategory_id('')
    }

    function logout() {
        removeTokenFromStorage(true)
    }

    return (
        <div className='customer_toolbar'>
            <Navbar className='m-0 p-1 display_in_md_lg' >
                <Nav className='m-0 ml-auto p-0 align-items-center mr-auto'>
                    {props.role == 'vendor' || props.role == 'admin' ?
                        <Nav.Link href={dashboard_href} className='first_nav_link'>
                            Go To Dashboard
                            </Nav.Link>
                        :
                        <Nav.Link href='/vendor-signup' className='first_nav_link'>
                            Sell On Mahaalk
                        </Nav.Link>
                    }
                    <Nav.Link href='' className='mr-auto first_nav_link' style={{ borderRight: 'none' }}>
                        Get The App
                        </Nav.Link>

                    <Nav.Link href='' className='first_nav_link'>
                        Services
                        </Nav.Link>
                    <Nav.Link href='' className='first_nav_link'>
                        Help
                        </Nav.Link>
                    <Dropdown className='d-flex align-items-center'>
                        <Dropdown.Toggle as={Nav.Link} className='d-inline-flex align-items-center first_nav_link'>
                            {selectedLang == 'English' ?
                                <Image src="/pk-flag.svg.png" fluid style={{ width: '22px', maxWidth: '22px', marginRight: '5px' }} />
                                :
                                <Image src="/ksa-flag.svg.png" fluid style={{ width: '22px', maxWidth: '22px', marginRight: '5px' }} />
                            }
                            {selectedLang}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ zIndex: 100 }}>
                            <Dropdown.Item className='dropdown_item' onClick={() => setSelectedLang('English')}>English</Dropdown.Item>
                            <Dropdown.Item className='dropdown_item' onClick={() => setSelectedLang("العربية")}>
                                {"العربية"}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div style={{ minWidth: '15%' }}></div>
                    {loggedIn ?
                        null
                        :
                        <>
                            <Nav.Link href='/login' className='first_nav_link'> Login </Nav.Link>
                            <Nav.Link href='/signup' className='first_nav_link'> Signup </Nav.Link>
                        </>
                    }


                    {loggedIn ?
                        <Dropdown className='first_nav_link' alignRight>
                            <Dropdown.Toggle as={Nav.Link} className='first_nav_link align-self-end' style={{ borderRight: 'none' }}>
                                {props.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ zIndex: 100 }}>
                                <Dropdown.Item className='dropdown_item'>
                                    <FontAwesomeIcon icon={faUserCircle} style={styles.dropdown_fontawesome} />
                                    {'My Profile'}
                                </Dropdown.Item>
                                {props.role == 'customer' && <>
                                    <Dropdown.Item className='dropdown_item' href=''>
                                        <FontAwesomeIcon icon={faSuitcaseRolling} style={styles.dropdown_fontawesome} />
                                        {'My Orders'}
                                    </Dropdown.Item>
                                </>
                                }
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logout} className='dropdown_item'>
                                    <FontAwesomeIcon icon={faPowerOff} style={styles.dropdown_fontawesome} />
                                    {'Logout'}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        null
                    }
                </Nav>
            </Navbar>

            <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                <Navbar className='sticky-inner' style={{ background: 'white' }}>
                    <Navbar.Brand onClick={() => Router.push('/')} className='d-inline-flex align-items-center p-0 m-0'>
                        <Image src="/muhalik.jpg" className='mahaalk_img' fluid />
                        <h4 className="display_in_md_lg text_animation">.com</h4>
                        {/* <h4 className=" text_animation" onClick={() => Router.push('/')}>.com<span className='display_in_md_lg mr-3' style={{ fontSize: '15px' }}>@2020</span></h4> */}
                    </Navbar.Brand>
                    <InputGroup className='input_group'>
                        <FormControl className='search-bar' size='md' variant='warning' placeholder="Search here" />
                        <InputGroup.Append>
                            <MyButton>
                                <div className='display_in_md_lg pr-1'>Search</div>
                                <FontAwesomeIcon className='serch-icon' icon={faSearch} style={styles.search_fontawesome} />
                            </MyButton>
                            {/* <Button className='btn_search d-inline-flex align-items-center' variant='warning' >

                                </Button> */}
                        </InputGroup.Append>
                    </InputGroup>
                    {/* <Nav className=""> */}
                    <Nav.Link href='/cart' className='display_in_md_lg nav_link pb-0 mb-0'>
                        <div className='cart_div'>
                            <FontAwesomeIcon icon={faShoppingCart} style={styles.second_nav_fontawesome} />
                            <Badge variant='primary' className='cart_badge'>{props.cart_count}</Badge>
                        </div>
                        {"Cart"}
                    </Nav.Link>
                    {/* </Nav> */}
                </Navbar>
            </div>

            {/* Third Navbar */}
            <Navbar className=' third_nav_bar' style={{ background: `${GlobalStyleSheet.primry_color}` }}>
                <Nav>
                    <Dropdown
                        onMouseOver={() => { setIsCategoryOpen(true), setHoverCategory(true) }}
                        onMouseLeave={() => { setIsCategoryOpen(false), setHoverCategory(false) }}
                        show={isCategoryOpen}
                    >
                        <Dropdown.Toggle as={Nav.Link} className='third_nav_link'
                            style={{
                                // border: hoverCategory ? '1px solid lightgray' : null,
                                background: hoverCategory ? 'white' : null,
                                // margin: hoverCategory ? '-1px' : '0px',
                                color: hoverCategory ? `${GlobalStyleSheet.primry_color}` : 'white',
                            }}>
                            <FontAwesomeIcon icon={faListUl} style={hoverCategory ? styles.third_nav_fontawesome_hover : styles.third_nav_fontawesome} />
                            <div style={{ color: hoverCategory ? `${GlobalStyleSheet.primry_color}` : 'white' }}>
                                Categories
                                    </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown_menue'>
                            <Row noGutters onMouseLeave={() => categoryMouseLeave()} >
                                <Col style={{ overflowY: 'auto', zIndex: 1, minHeight: '500px', maxHeight: '500px', }}>
                                    {props.categories_list && props.categories_list.map((element, index) =>
                                        <Link href='/[category]' as={`/${element.value}`} key={index} >
                                            {props.active_category == element.value ?
                                                <a style={{ color: 'blue' }} className="category_list_item" onMouseOver={() => categoryMouseEnter(index)} onClick={() => { setIsCategoryOpen(false), setHoverCategory(false) }}>
                                                    <Image src={element.url} roundedCircle fluid style={{ width: '30px', maxWidth: '30px', minHeight: '30px', maxHeight: '30px', marginRight: '10px' }} />
                                                    {element.value}
                                                </a>
                                                :
                                                <a className="category_list_item" onMouseOver={() => categoryMouseEnter(index)} onClick={() => { setIsCategoryOpen(false), setHoverCategory(false) }}>
                                                    <Image src={element.url} roundedCircle fluid style={{ width: '30px', maxWidth: '30px', minHeight: '30px', maxHeight: '30px', marginRight: '10px' }} />
                                                    {element.value}
                                                </a>
                                            }
                                        </Link>
                                    )}
                                </Col>
                                {/* {category_id ? */}
                                <Col style={{ minHeight: '500px', maxHeight: '50px', overflowY: 'auto', boxShadow: '-2px 0px 10px 1px rgba(0,0,0,0.12)' }}>
                                    {props.sub_categories_list && props.sub_categories_list.map((element, index) =>
                                        element.category_id == category_id._id ?
                                            <Link href='/[category]/[sub_category]' as={`/${category_id.value}/${element.value}`} key={index} >
                                                {props.active_sub_category == element.value ?
                                                    <a style={{ color: 'blue' }} className="category_list_item" onClick={() => { setIsCategoryOpen(false), setHoverCategory(false) }}>
                                                        {element.value}
                                                    </a>
                                                    :
                                                    <a className="category_list_item" onClick={() => { setIsCategoryOpen(false), setHoverCategory(false) }}>
                                                        {element.value}
                                                    </a>
                                                }
                                            </Link>
                                            :
                                            null
                                    )}
                                </Col>
                            </Row>
                        </Dropdown.Menu>
                    </ Dropdown>
                    {/* <div className='align-self-center' style={{ color: 'white' }}>|</div> */}
                    {/* Shops */}
                    {/* <Dropdown
                            onMouseOver={() => { setIsShopOpen(true), setHoverShops(true) }}
                            onMouseLeave={() => { setIsShopOpen(false), setHoverShops(false) }}
                            show={isShopOpen}
                        >
                            <Dropdown.Toggle as={Nav.Link} className='third_nav_link'
                                style={{
                                    paddingLeft: '1vw',
                                    paddingRight: '1vw',
                                    border: hoverShops ? '1px solid lightgray' : null,
                                    background: hoverShops ? 'white' : null,
                                    margin: hoverShops ? '-1px' : '0px',
                                    color: hoverShops ? `${GlobalStyleSheet.primry_color}` : 'white'
                                }}>
                                <FontAwesomeIcon icon={faStoreAlt} style={hoverShops ? styles.third_nav_fontawesome_hover : styles.third_nav_fontawesome} />
                                <div style={{ color: hoverShops ? `${GlobalStyleSheet.primry_color}` : 'white' }}> Shops </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minWidth: '80vw', minHeight: '45vw', left: '-1px', borderTop: 'none', borderTopLeftRadius: '0px' }} className='m-0 pt-3'>
                                <Row noGutters>
                                    <h1>Shops Will Show Here</h1>
                                </Row>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className='align-self-center' style={{ color: 'white' }}>|</div> */}
                    {/* Products */}
                    {/* <Dropdown
                            onMouseOver={() => { setIsProductOpen(true), setHoverProducts(true) }}
                            onMouseLeave={() => { setIsProductOpen(false), setHoverProducts(false) }}
                            show={isProductOpen}
                        >
                            <Dropdown.Toggle as={Nav.Link} className='third_nav_link'
                                style={{
                                    paddingLeft: '1vw',
                                    paddingRight: '1vw',
                                    border: hoverProducts ? '1px solid lightgray' : null,
                                    background: hoverProducts ? 'white' : null,
                                    margin: hoverProducts ? '-1px' : '0px',
                                    color: hoverProducts ? `${GlobalStyleSheet.primry_color}` : 'white'
                                }}>
                                <FontAwesomeIcon icon={faProductHunt} style={hoverProducts ? styles.third_nav_fontawesome_hover : styles.third_nav_fontawesome} />
                                <div style={{ color: hoverProducts ? `${GlobalStyleSheet.primry_color}` : 'white' }}> Products </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minWidth: '80vw', left: '-87%', minHeight: '45vw', borderTop: 'none', borderTopLeftRadius: '0px' }} className='m-0 pt-3'>
                                <Row noGutters >
                                    <h1>Products Will Show Here</h1>
                                </Row>
                            </Dropdown.Menu>
                        </Dropdown> */}
                </Nav>
            </Navbar>
            <style type="text/css">{`
                .mahaalk_img{
                    width: 60px;
                    max-width: 60px;
                    height: 60px;
                    max-height: 60px;
                }
                .input_group {
                    margin: 0% 1% 0% 10%;
                }
                .cart_div{
                    display: inline-flex;
                    align-items: center;
                }
                .cart_badge{
                    margin-top: -20px;
                    margin-left: 3px;
                }
                .customer_toolbar{
                    padding: 0%;
                    margin: 0%;
                }
                .first_nav_link {
                    font-size: 12.5px;
                    white-space: nowrap;
                    margin: 0px;
                    padding: 0%;
                    border-right: 1px solid lightgray;
                }
                .customer_toolbar .first_nav_link:hover{
                    color: ${GlobalStyleSheet.primry_color};
                }
                .customer_toolbar .first_nav_link:last-child{
                    border: none;
                }
                .customer_toolbar .dropdown_item{
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    color: gray;
                }
                .customer_toolbar .dropdown_item:hover{
                    background: ${GlobalStyleSheet.primry_color};
                    color: white
                }



                // Second Navbar //

                .customer_toolbar .sticky-wrapper {
                    position: relative;
                }
                .customer_toolbar .sticky .sticky-inner {
                    background: ${GlobalStyleSheet.primry_color};
                    position: fixed;
                    align-items: center;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000000;
                }
                .customer_toolbar .sticky-inner{
                    align-items: center;
                    padding: 0.5% 12%;
                }

                .btn_search {
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                    padding-right: 10px;
                    color: white;
                }
                .btn_search:hover{
                    color: white;
                }
                .btn_search:focus{
                    color: white;
                }
                .btn_search:active{
                    color: white;
                }

                .btn_search_type {
                     border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    padding-left: 10px;
                    color: white;
                }
                .btn_search_type:hover{
                    color: white;
                }
                .btn_search_type:focus{
                    color: white;
                }
                .btn_search_type:active{
                    color: white;
                }

                // .customer_toolbar .sticky .sticky-inner .btn_search{
                //     color:  ${GlobalStyleSheet.primry_color};
                //     background: white;
                //     border-color: white;
                //     border-radius: 0px;
                // }
                // .customer_toolbar .sticky .sticky-inner .btn_search:hover{
                //     color:  green;
                //     border-right: 1px solid green;
                //     border-left: 1px solid green
                // }
                // .customer_toolbar .sticky .sticky-inner .serch-icon{
                //     color:  ${GlobalStyleSheet.primry_color};
                // }
                
                .customer_toolbar .search-bar{
                    border-color: ${GlobalStyleSheet.primry_color};
                }
                // .customer_toolbar .sticky .sticky-inner .search-bar{
                //     border-color: white;
                // }
                
                .customer_toolbar .nav_link{
                    display: flex;
                    flex-direction: column;
                    font-size: 14px;
                    margin-left: 2%;
                    color: gray;
                }
                
                .customer_toolbar .nav_link:hover{
                    color: ${GlobalStyleSheet.primry_color};
                }
                // .customer_toolbar .sticky .sticky-inner .nav_link {
                //     color: lightgray;
                // }
                // .customer_toolbar .sticky .sticky-inner .nav_link:hover {
                //     color: white;
                // }
                
                    
                    .customer_toolbar .text_animation{
                        animation: mymove 5s infinite;
                        color: ${GlobalStyleSheet.primry_color};
                        margin: 0%;
                        cursor: pointer;
                    }
                    // .customer_toolbar .sticky .sticky-inner .text_animation {
                    //     animation: mymmove 5s infinite;
                    //     color: white;
                    // }
                    @keyframes mymove {
                        50% {text-shadow: 10px 15px 3px ${GlobalStyleSheet.primry_color}}
                    }
                    // @keyframes mymmove {
                    //     50% {text-shadow: 10px 15px 3px white;}
                    // }


                .third_nav_bar{
                    padding: 0.5% 3.7%;
                }
                .dropdown_menue {
                    min-width: 700px; 
                    min-height: 500px;
                    max-height: 500px; 
                    border-top: none; 
                    left: -1px; 
                    padding: 0%;
                    border-top-left-radius: 0px;
                }
                .customer_toolbar .third_nav_link {
                        white-space: nowrap;
                        font-size: 15px;
                        color: lightgray;
                        display: inline-flex;
                        align-items: center;
                    }
                    
                    .customer_toolbar .category_list_item {
                        cursor: pointer;
                        width: 98%;
                        display: inline-flex;
                        align-items: center;
                        font-size: 14px;
                        padding: 1.5% 4%;
                        margin: 0% -2% 0% 2%;
                        color: gray;
                    }
                    .customer_toolbar .category_list_item:hover{
                        z-index: 100;
                        color: #005ce6;
                        border-radius: 2px;
                        box-shadow: -1px 0px 10px 1px rgba(0,0,0,0.12);
                    }
                    .display_in_md_lg{
                        display: flex;
                    }
                     @media (max-width: 1199px) {
                        .third_nav_bar{
                            padding: 0.5% 2.7% 0% 2.7%;
                        }
                    }
                    @media (max-width: 991px) {
                        .customer_toolbar .sticky-inner{
                            padding: 0.5% 5%;
                        }
                    }
                    @media (max-width: 767px) {
                        .customer_toolbar .sticky-inner{
                            padding: 0.5% 4%;
                        }
                        .third_nav_bar{
                            display: none;
                        }
                        .customer_toolbar .display_in_md_lg {
                            display: none;
                        }
                        .mahaalk_img{
                            width: 50px;
                            max-width: 50px;
                            height: 50px;
                            max-height: 50px;
                        }
                    }
                     @media (max-width: 575px) {
                        .customer_toolbar .sticky-inner{
                            padding: 0.5% 2%;
                        }
                    }
            `}</style>
            <style jsx>
                {`
                    a{
                        color: gray;
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
    search_fontawesome: {
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
        fontWeight: 'normal'
    },
    second_nav_fontawesome: {
        minWidth: '24px',
        minHeight: '24px',
        maxHeight: '24px',
        maxWidth: '24px',
    },
    dropdown_fontawesome: {
        marginRight: '10px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    third_nav_fontawesome: {
        marginRight: '15px',
        color: 'white',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    third_nav_fontawesome_hover: {
        color: `${GlobalStyleSheet.primry_color}`,
        marginRight: '15px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
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
