import {
    Navbar, Nav, Form, InputGroup, FormControl, Image, Button,
    NavDropdown, DropdownButton, Card, Dropdown, ButtonGroup,
    Row, Col, OverlayTrigger, Popover, Tooltip
} from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faUserPlus, faLanguage, faPowerOff, faUser,
    faTachometerAlt, faHandsHelping, faPen, faSignOutAlt, faGlobe,
    faLuggageCart, faFileInvoiceDollar, faListAlt, faEdit,
    faStoreAlt, faChevronDown, faChevronRight, faListUl, faShoppingCart, faSignLanguage
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import MuhalikConfig from '../../../sdk/muhalik.config'
import { removeTokenFromStorage } from '../../../sdk/core/authentication-service'
import React from 'react';

const categoryArray = [{ value: 'All' }, { value: 'Machinay' }, { value: 'Clothes' }]
const Toolbar = (props) => {

    let loggedIn = false
    let dashboard_href = ''
    if (props.role == '') {
        loggedIn = false
    } else if (props.role == 'customer') {
        loggedIn = true
        dashboard_href = './index'
    } else if (props.role == 'vendor') {
        loggedIn = true
        dashboard_href = './vendor'
    } else if (props.role == 'admin') {
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
        <div className='customer_toolar'>
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
                                                <Dropdown.Toggle as={Button} className='btn_search' variant='success'>
                                                    {searchType}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu >
                                                    {categoryArray.map((element, index) =>
                                                        <Dropdown.Item className='btn' key={index} onClick={() => setSearchType(element.value)}>{element.value}</Dropdown.Item>
                                                    )}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </InputGroup.Prepend>
                                    </div>
                                    <FormControl className='search-bar' placeholder="Search here" />
                                    <InputGroup.Append>
                                        <Button className='btn_search' variant='success'>
                                            <FontAwesomeIcon className='serch-icon' icon={faSearch} style={styles.search_fontawesome} />
                                        </Button>
                                    </InputGroup.Append>
                                </div>
                            </Col>
                            <Col lg="auto" md="auto" sm={0} xs={0} className='m-0 p-0 align-items-center'>
                                <div className='display_in_md_lg'>
                                    <Nav className='d-flex flex-row align-items-center w-100'>
                                        {loggedIn ?
                                            null
                                            :
                                            <Nav.Link href='./login' className='nav_link'>
                                                <div className='d-inline-flex'>
                                                    <FontAwesomeIcon icon={faUser} style={styles.nav_fontawesome} />
                                                    <FontAwesomeIcon icon={faUserPlus} style={styles.nav_fontawesome} />
                                                </div>
                                                Login/Join
                                            </Nav.Link>
                                        }
                                        <div href='#' className='nav_link' style={{ zIndex: 1 }}>
                                            <FontAwesomeIcon icon={faLanguage} style={styles.nav_fontawesome} />
                                            <Dropdown>
                                                <Dropdown.Toggle as={Nav.Link} className='dropdown_togle'>
                                                    {selectedLang}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu style={{ zIndex: 100 }}>
                                                    <Dropdown.Item className='btn' onClick={() => setSelectedLang('En')}>English</Dropdown.Item>
                                                    <Dropdown.Item className='btn' onClick={() => setSelectedLang("Ar")}>
                                                        {"العربية"}</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <Nav.Link href="#" className='nav_link'>
                                            <FontAwesomeIcon icon={faShoppingCart} style={styles.nav_fontawesome} />
                                            Cart
                                        </Nav.Link>
                                        {loggedIn ?
                                            <Dropdown className='nav_link' alignRight>
                                                <Dropdown.Toggle as={Nav.Link} className='dropdown_togle align-self-end'>
                                                    <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '27px', maxWidth: '27px' }} />
                                                </Dropdown.Toggle>


                                                <OverlayTrigger placement='bottom-end' overlay={<Tooltip id="tooltip-disabled">{props.name}</Tooltip>}>
                                                    <span className="d-inline-block">
                                                        <label className='dropdown_togle p-0 m-0' style={{ fontSize: '14px' }}>
                                                            {props.name.slice(0, 6) + (props.name.length > 6 ? "..." : "") || ''}
                                                        </label>
                                                    </span>
                                                </OverlayTrigger>




                                                <Dropdown.Menu style={{ zIndex: 100 }}>
                                                    <Dropdown.Item className='dropdown_item' href={dashboard_href}>
                                                        <FontAwesomeIcon icon={faTachometerAlt} style={styles.dropdown_fontawesome} />
                                                            Dashboard
                                                        </Dropdown.Item>
                                                    <Dropdown.Item className='dropdown_item' href='./vendor'>
                                                        <FontAwesomeIcon icon={faTachometerAlt} style={styles.dropdown_fontawesome} />
                                                            Vendor
                                                        </Dropdown.Item>
                                                    <Dropdown.Item className='dropdown_item'>
                                                        <FontAwesomeIcon icon={faUser} style={styles.dropdown_fontawesome} />
                                                            Profile
                                                        </Dropdown.Item>
                                                    <Dropdown.Item onClick={props.logout} className='dropdown_item'>
                                                        <FontAwesomeIcon icon={faPowerOff} style={styles.dropdown_fontawesome} />
                                                            Logout
                                                        </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
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
                                    <div className='second_nav_link_text ml-2' style={{ color: hoverCategory ? `${GlobalStyleSheet.primry_color}` : 'white' }}>
                                        Categories
                                    </div>
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
            <style type="text/css">{`
                .customer_toolar .sticky .sticky-inner .btn_search{
                    color:  ${GlobalStyleSheet.primry_color};
                    background: white;
                    border-color: white;
                    border-radius: 0px;
                }
                .customer_toolar .sticky .sticky-inner .btn_search:hover{
                    color:  green;
                    border-right: 1px solid green;
                    border-left: 1px solid green
                }
                .customer_toolar .sticky .sticky-inner .serch-icon{
                    color:  ${GlobalStyleSheet.primry_color};
                }

                .customer_toolar .toogle-btn{
                    align-items: center;
                    display: inline-flex;
                    margin: 0px;
                    padding: 0px;
                    color: gray;
                }
                .customer_toolar .sticky .sticky-inner .toogle-btn{
                    color: white;
                }

                .customer_toolar .search-bar{
                    border-color: ${GlobalStyleSheet.primry_color};
                }
                .customer_toolar .sticky .sticky-inner .search-bar{
                    border-color: white;
                }

                .customer_toolar .account-dropdown{
                    font-size: 14px;
                    align-items: center;
                    display: inline-flex;
                    color: gray;
                }
                .customer_toolar .account-dropdown:hover{
                    color: ${GlobalStyleSheet.primry_color};
                }
                
                .customer_toolar .nav_link{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    font-size: 14px;
                    margin: 0% 0% 0% 20px;
                    padding: 5px 0% 0% 0%;
                    justify-content: center;
                    color: gray;
                }
                .customer_toolar .nav_link:hover{
                    color: ${GlobalStyleSheet.primry_color};
                }
                .customer_toolar .dropdown_togle{
                    align-items: center;
                    display: inline-flex;
                    color: gray;
                    padding: 0px;
                    margin: 0px;
                }
                .customer_toolar .dropdown_togle:hover{
                    color: ${GlobalStyleSheet.primry_color};
                }

                .customer_toolar .sticky .sticky-inner .nav_link {
                    color: white;
                }
                .customer_toolar .sticky .sticky-inner .dropdown_togle {
                    color: white;
                }

                .customer_toolar .sticky .sticky-inner .nav_link:hover {
                    color: lightgray;
                }
                .customer_toolar .sticky .sticky-inner .dropdown_togle:hover {
                    color: lightgray;
                }

                .customer_toolar .dropdown_item{
                    font-size: 13px;
                    color: gray;
                    display: flex;
                    align-items: center;
                }

                .customer_toolar .btn:hover, .dropdown_item:hover{
                    background: ${GlobalStyleSheet.primry_color};
                    color: white;
                }
                .customer_toolar .btn:focus, .dropdown_item:hover{
                    background: ${GlobalStyleSheet.primry_color};
                    color: white;
                }
                .customer_toolar .btn:active, .dropdown_item:hover{
                    background: ${GlobalStyleSheet.primry_color};
                    color: white;
                }
                @media (max-width: 992px) {
                    .customer_toolar .nav_link{
                        margin-left: 4px;
                    }
                }
            `}</style>
            <style jsx>
                {`
                    .customer_toolar .sticky-wrapper {
                        position: relative;
                    }

                    .customer_toolar .sticky .sticky-inner {
                        background: white;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1000;
                    }

                    .customer_toolar .sticky .sticky-inner .row {
                        padding: 5px 4%;
                        background: ${GlobalStyleSheet.primry_color}
                    }
                    .customer_toolar .sticky .sticky-inner .text_animation {
                        color: white;
                    }

                    .customer_toolar .sticky .sticky-inner .nav_link_text {
                        color: white;
                    }
                    .customer_toolar .sticky .sticky-inner .nav_link_text:hover {
                        color: lightgray;
                    }
                    .customer_toolar .text_animation{
                        animation: mymove 5s infinite;
                        color: ${GlobalStyleSheet.primry_color};
                        font-family: Verdana, Geneva, sans-serif;
                        margin: 0%;
                    }

                    @keyframes mymove {
                        50% {text-shadow: 10px 10px 10px green;}
                    }

                    .customer_toolar .nav_link_text {
                        white-space: nowrap;
                        font-size: 13px;
                        padding: 0px;
                        margin: 0px;
                        color: gray
                    }
                    .customer_toolar .second_nav_link_text {
                        white-space: nowrap;
                        font-size: 14px;
                        color: white;
                    }
                    .customer_toolar .nav_link_text:hover, .second_nav_link_text:hover {
                        color: lightgray;
                    }
                    
                    .customer_toolar .category_list_item {
                        cursor: pointer;
                        width: 98%;
                        display: inline-flex;
                        align-items: center;
                        font-size: 14px;
                        padding: 2% 4%;
                        margin: 1% -2% 0% 2%;
                        color: gray;
                    }
                    .customer_toolar .category_list_item:hover{
                        z-index: 100;
                        color: #005ce6;
                        border-radius: 2px;
                        box-shadow: -1px 0px 10px 1px rgba(0,0,0,0.12);
                    }
                    .customer_toolar .row {
                            display: inline-flex;
                            align-items: center;
                            width: 100%;
                            padding: 10px 4%;
                    }
                    .customer_toolar .input-group{
                        align-items: center;
                        display: inline-flex;
                        padding-left: 6%;
                        padding-right: 9%;
                    }

                    @media (max-width: 1200px) {
                        .customer_toolar .input-group{
                            padding-left: 2%;
                            padding-right: 0%;
                        }
                    }
                    @media (min-width: 767px) {
                        // .row {
                        //     padding: 5px 10px;
                        // }
                    }
                    @media (max-width: 767px) {
                        .customer_toolar .display_in_md_lg {
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
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
        fontWeight: 'normal'
    },
    nav_fontawesome: {
        minWidth: '26px',
        minHeight: '26px',
        maxHeight: '26px',
        maxWidth: '26px',
    },
    dropdown_fontawesome: {
        marginRight: '15px',
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
