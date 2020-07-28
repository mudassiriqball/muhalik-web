import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import Router from 'next/router'

import { Navbar, Nav, InputGroup, Image, NavDropdown, Dropdown, Row, Col, OverlayTrigger, Popover, Badge } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPowerOff, faStoreAlt, faChevronRight, faListUl, faShoppingCart, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'


import { removeTokenFromStorage } from '../../../sdk/core/authentication-service'
import MyButton from '../buttons/my-btn'
import GlobalStyleSheet from '../../../styleSheet'

import translate from '../../../i18n/translate'
import TranslateFormControl from '../../../i18n/translate-form-control'


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

    const [searchValue, setSearchValue] = useState('')
    const [selectedLang, setSelectedLang] = useState('English')
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)

    const [hoverCategory, setHoverCategory] = useState(false)

    const [category_id, setCategory_id] = useState('')


    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top < 0);
        }
    };
    useEffect(() => {
        if (props.currLang == 'en') {
            setSelectedLang("English")
        } else {
            setSelectedLang("العربية")
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    function handleSetLanguage(lang) {
        props.changeLang(lang)
        if (lang == 'en') {
            setSelectedLang("English")
        } else {
            setSelectedLang("العربية")
        }
    }

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

    function handleSearchEnterPress(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            handleSearch()
        }
    }
    async function handleSearch() {
        Router.push('/search/[search]', `/search/${searchValue}`)
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
                            {translate('go_to_dashbord')}
                        </Nav.Link>
                        :
                        <Nav.Link href='/vendor-signup' className='first_nav_link'>
                            {translate('sell_on_mahaalk')}
                        </Nav.Link>
                    }
                    <Nav.Link href='' className='mr-auto first_nav_link' style={{ borderRight: 'none' }}>
                        {translate('get_app')}
                    </Nav.Link>

                    <Nav.Link href='' className='first_nav_link'>
                        {translate('services')}
                    </Nav.Link>
                    <Nav.Link href='' className='first_nav_link'>
                        {translate('help')}
                    </Nav.Link>
                    <Dropdown className='d-flex align-items-center'>
                        <Dropdown.Toggle as={Nav.Link} className='d-inline-flex align-items-center first_nav_link'>
                            {selectedLang == 'English' ?
                                <Image src="/us-flag.jpg" fluid style={{ width: '22px', maxWidth: '22px', marginRight: '5px' }} />
                                :
                                <Image src="/ksa-flag.svg.png" fluid style={{ width: '22px', maxWidth: '22px', marginRight: '5px' }} />
                            }
                            {selectedLang}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ zIndex: 100 }}>
                            <Dropdown.Item className='dropdown_item' onClick={() => handleSetLanguage('en')}>English</Dropdown.Item>
                            <Dropdown.Item className='dropdown_item' onClick={() => handleSetLanguage("ar")}>{"العربية"}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div style={{ minWidth: '15%' }}></div>
                    {loggedIn ?
                        null
                        :
                        <>
                            <Nav.Link href='/login' className='first_nav_link'> {translate('login')} </Nav.Link>
                            <Nav.Link href='/signup' className='first_nav_link'> {translate('signup')} </Nav.Link>
                        </>
                    }

                    {loggedIn ?
                        <Dropdown className='first_nav_link' alignRight>
                            <Dropdown.Toggle as={Nav.Link} className='first_nav_link align-self-end' style={{ borderRight: 'none' }}>
                                {props.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ zIndex: 100 }}>
                                <NavDropdown.Item onClick={() => Router.push('/user/profile')} className='dropdown_item'>
                                    <FontAwesomeIcon icon={faUserCircle} className='dropdown_fontawesome' />
                                    {translate('profile')}
                                </NavDropdown.Item>
                                {props.role == 'customer' && <>
                                    <Dropdown.Item className='dropdown_item' href=''>
                                        <FontAwesomeIcon icon={faSuitcaseRolling} className='dropdown_fontawesome' />
                                        {translate('my_orders')}
                                    </Dropdown.Item>
                                </>
                                }
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logout} className='dropdown_item'>
                                    <FontAwesomeIcon icon={faPowerOff} className='dropdown_fontawesome' />
                                    {translate('logout')}
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
                    </Navbar.Brand>
                    <InputGroup className='input_group'>
                        <TranslateFormControl
                            id='search_here'
                            type="text"
                            size='md'
                            value={searchValue}
                            onKeyPress={(e) => handleSearchEnterPress(e)}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <InputGroup.Append>
                            <MyButton onClick={handleSearch}>
                                <div className='display_in_md_lg pr-1'>{translate('search')}</div>
                                <FontAwesomeIcon className='serch-icon' icon={faSearch} style={styles.search_fontawesome} />
                            </MyButton>
                        </InputGroup.Append>
                    </InputGroup>
                    {/* <Nav className=""> */}
                    <Nav.Link href='/cart' className='display_in_md_lg nav_link pb-0 mb-0'>
                        <div className='cart_div'>
                            <FontAwesomeIcon icon={faShoppingCart} style={styles.second_nav_fontawesome} />
                            <Badge variant='primary' className='cart_badge'>{props.cart_count}</Badge>
                        </div>
                        {translate('cart')}
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
                                {translate('categories')}
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown_menue'>
                            <Row noGutters onMouseLeave={() => categoryMouseLeave()} >
                                <Col style={{ overflowY: 'auto', zIndex: 1, minHeight: '500px', maxHeight: '500px', }}>
                                    {props.categories_list && props.categories_list.map((element, index) =>
                                        <Link key={index} href='/products/category/[category]' as={`/products/category/${element.value}`} >
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
                                            <Link href='/products/category/[category]/[sub_category]' as={`/products/category/${category_id.value}/${element.value}`} key={index} >
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
                .customer_toolbar .dropdown_fontawesome {
                    margin: 0px 10px 0px 0px;
                    min-width: 18px;
                    min-height: 18px;
                    max-height: 18px;
                    max-width: 18px;
                }
                .customer_toolbar .dropdown_item {
                     display: flex;
                    color: gray;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    padding: 4% 6%;
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
                .customer_toolbar .text_animation{
                    animation: mymove 5s infinite;
                    color: ${GlobalStyleSheet.primry_color};
                    margin: 0%;
                    cursor: pointer;
                }
                @keyframes mymove {
                    50% {text-shadow: 10px 15px 3px ${GlobalStyleSheet.primry_color}}
                }

                // Third Navbar
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
                    .customer_toolbar .sticky-inner {
                        padding: 0.5% 5%;
                    }
                }
                @media (max-width: 767px) {
                    .customer_toolbar .sticky-inner {
                        padding: 0.5% 4%;
                    }
                    .third_nav_bar {
                        display: none;
                    }
                    .customer_toolbar .display_in_md_lg {
                        display: none;
                    }
                    .mahaalk_img {
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
