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
    faStoreAlt, faChevronDown, faChevronRight, faListUl
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import MuhalikConfig from '../../../sdk/muhalik.config'
import axios from 'axios'
import { removeTokenFromStorage } from '../../../sdk/core/authentication-service'

const categoryArray = [{ value: 'All' }, { value: 'Machinay' }, { value: 'Clothes' }]
function Toolbar(props) {

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
    const [isCategoryOpen, setIsCategoryOpen] = React.useState(false)
    const [isShops, setIsShops] = React.useState(false)
    const [hover, setHover] = React.useState(false)

    const [category_id, setCategory_id] = React.useState('')

    function toggle() {
        setIsCategoryOpen(!isCategoryOpen)
    }

    function onMouseEnter() {
        setIsCategoryOpen(true)
        setHover(true)
    }

    function onMouseLeave() {
        setIsCategoryOpen(false)
        setHover(false)
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
            <Card >
                <Card.Body className='p-0 m-0'>
                    <Navbar className='w-100 p-0 m-0'>
                        <div className='row w-100 m-0'>
                            <Col lg='auto' md={12} sm={12} xs={12} className='d-inline-flex align-items-center m-0 p-0'>
                                <Navbar.Brand className='d-inline-flex align-items-center'>
                                    <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '50px', display: 'flex', margin: '0% 3%' }} />
                                    <h4 className=" text_animation">Muhalik<span style={{ fontSize: '15px' }}>@2020</span></h4>
                                    <div className='pr-4'></div>
                                </Navbar.Brand>
                            </Col>
                            <Col className='align-items-center m-2 p-0'>
                                <InputGroup className='d-inline-flex align-items-center'>
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
                                    <FormControl placeholder="Search here" />
                                    <InputGroup.Append>
                                        <Button variant='success'>Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col lg='auto' md='auto' sm={0} xs={0} className='m-0 p-0'>
                                <div className='categories_lg_md align-items-center'>
                                    <Nav className='d-inline-flex align-items-center w-100'>
                                        <div className='ml-5'></div>
                                        {loggedIn ?
                                            null
                                            :
                                            <Nav.Link href='./login' className='ml-3  align-items-center' style={styles.nav_link}>
                                                <FontAwesomeIcon icon={faUser} style={styles.nav_fontawesome} />
                                                <FontAwesomeIcon icon={faUserPlus} style={styles.nav_fontawesome} />
                                                <div className='nav_link_text'>Signin/up</div>
                                            </Nav.Link>
                                        }
                                        <Nav.Link href='#' className='ml-3' style={styles.nav_link}>
                                            <FontAwesomeIcon icon={faGlobe} style={styles.nav_fontawesome} />
                                            <div className='nav_link_text'>Eng</div>
                                        </Nav.Link>
                                        <Nav.Link href='#' className='ml-3' style={styles.nav_link}>
                                            <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.nav_fontawesome} />
                                            <div className='nav_link_text'>Orders</div>
                                        </Nav.Link>
                                        <Nav.Link href="#" className='ml-3' style={styles.nav_link}>
                                            <FontAwesomeIcon icon={faLuggageCart} style={styles.nav_cart_fontawesome} />
                                            <div className='nav_link_text'>Cart</div>
                                        </Nav.Link>
                                        {loggedIn ?
                                            <NavDropdown title={<Image src="muhalik.jpg" roundedCircle fluid style={{ width: '35px', maxWidth: '35px' }} />}
                                                className='ml-3' id="nav-dropdown" alignRight>
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
                    </Navbar>


                    <Navbar expand="md" className=' ml-2 mr-2 mb-2 p-0'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='p-1 m-0' />
                        <div className='categories_sm_xs'>
                            <div className='d-inline-flex align-items-center'>
                                <Dropdown onMouseOver={onMouseEnter}
                                    onMouseLeave={onMouseLeave} show={isCategoryOpen}>
                                    <Dropdown.Toggle as={Nav.Link} className="p-2" style={{ color: `${GlobalStyleSheet.primry_color}` }}>
                                        <FontAwesomeIcon icon={faListAlt} style={styles.small_fontawesome} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ width: '60vw', left: '-20vw', position: 'absolute', maxHeight: '50vh', overflowY: 'auto' }}>
                                        <Row noGutters className='pl-2 pr-2'>
                                            {props.categories_list && props.categories_list.map((element, index) =>
                                                <Col key={index} style={{ border: '1px solid lightgray' }} className='p-1 m-1'>
                                                    <div className="category_list_item">
                                                        {element.value}
                                                        <div className='mr-auto'></div>
                                                        <FontAwesomeIcon icon={faChevronDown} style={styles.categories_fontawesome} />
                                                    </div>
                                                    <hr className='p-0 m-0' />
                                                    {props.sub_categories_list && props.sub_categories_list.map((e, i) =>
                                                        e.category_id == element._id ?
                                                            <div key={i} className="category_list_item" >
                                                                {e.value}
                                                            </div>
                                                            :
                                                            null
                                                    )}
                                                </Col>
                                            )}
                                        </Row>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className='no_width_sm mr-2 ml-2'></div>
                                {loggedIn ?
                                    null
                                    :
                                    <Nav.Link href='./login' className='p-2'>
                                        <FontAwesomeIcon icon={faUser} style={styles.small_fontawesome} />
                                        <FontAwesomeIcon icon={faUserPlus} style={styles.small_fontawesome} />
                                    </Nav.Link>
                                }
                                <div className='no_width_sm mr-2 ml-2'></div>

                                <Nav.Link href='#' className='p-2' >
                                    <FontAwesomeIcon icon={faGlobe} style={styles.small_fontawesome} />
                                    {/* <div className='nav_link_text'>Eng</div> */}
                                </Nav.Link>
                                <div className='no_width_sm mr-2 ml-2'></div>

                                <Nav.Link href='#' className='p-2'>
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.small_fontawesome} />
                                </Nav.Link>
                                <div className='no_width_sm mr-2 ml-2'></div>

                                <Nav.Link href="#" className='p-2' >
                                    <FontAwesomeIcon icon={faCartPlus} style={styles.small_fontawesome} />
                                    {/* <div className='nav_link_text'>Cart</div> */}
                                </Nav.Link>
                                <div className='no_width_sm mr-2 ml-2'></div>

                                {loggedIn ?
                                    <NavDropdown title={
                                        <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '30px', maxWidth: '30px' }} />
                                    } id="nav-dropdown" alignRight>
                                        <NavDropdown.Item href={dashboard_href} className='d-inline-flex' >
                                            <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                            <div>Dashboard</div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className='d-inline-flex'>
                                            <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                            <div>Profile</div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => removeTokenFromStorage()} className='d-inline-flex'>
                                            <FontAwesomeIcon icon={faPowerOff} style={styles.dropDown_fontawesome} />
                                            <div>Logout</div>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    null
                                }
                            </div>
                        </div>
                        <Navbar.Collapse >
                            <Nav className='w-100 d-inline-flex align-items-center' style={{ border: '0.5px solid lightgray', padding: '0% 1%' }}>
                                <div className='categories_lg_md'>
                                    <Dropdown onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} show={isCategoryOpen}>
                                        <Dropdown.Toggle as={Nav.Link} className="d-inline-flex align-items-center"
                                            style={{
                                                border: hover ? '1px solid lightgray' : null,
                                                margin: hover ? '-1px' : '0px',
                                                color: hover ? `${GlobalStyleSheet.primry_color}` : 'gray'
                                            }}>
                                            <FontAwesomeIcon icon={faListUl} style={hover ? styles.second_nav_fontawesome_hover : styles.second_nav_fontawesome} />
                                            <div className='second_nav_link_text' style={{ color: hover ? `${GlobalStyleSheet.primry_color}` : 'gray' }}> Categories </div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ minWidth: category_id == '' ? '30vw' : '60vw' }} className='m-0 pt-3'>
                                            <Row noGutters onMouseLeave={() => categoryMouseLeave()}>
                                                <Col style={{ height: '80vh', overflowY: 'auto' }}>
                                                    {props.categories_list && props.categories_list.map((element, index) =>
                                                        <div key={index} className="category_list_item" onMouseOver={() => categoryMouseEnter(index)}>
                                                            {element.value}
                                                            <div className='mr-auto'></div>
                                                            <FontAwesomeIcon icon={faChevronRight} style={styles.categories_fontawesome} />
                                                        </div>
                                                    )}
                                                </Col>
                                                {category_id ?
                                                    <Col style={{ borderLeft: '1px solid lightgray', height: '80vh', overflowY: 'auto' }}>
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
                                    </Dropdown>
                                </div>

                                {isShops ?
                                    <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                        <Nav.Link href="#" className="d-inline-flex" onClick={() => setIsShops(false)}>
                                            {/* <FontAwesomeIcon icon={faStoreAlt} style={styles.second_nav_fontawesome} /> */}
                                            <div className='second_nav_link_text'>Shops</div>
                                        </Nav.Link>
                                    </OverlyPopover>
                                    :
                                    <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                        <Nav.Link href="#" className="d-inline-flex" onClick={() => setIsShops(true)}>
                                            {/* <FontAwesomeIcon icon={faProductHunt} style={styles.second_nav_fontawesome} /> */}
                                            <div className='second_nav_link_text'>Products</div>
                                        </Nav.Link>
                                    </OverlyPopover>
                                }
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" className="d-inline-flex p-2">
                                        {/* <FontAwesomeIcon icon={faHandsHelping} style={styles.second_nav_fontawesome} /> */}
                                        <div className='second_nav_link_text'>About Us</div>
                                    </Nav.Link>
                                </OverlyPopover>
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" className="d-inline-flex p-2">
                                        {/* <FontAwesomeIcon icon={faEdit} style={styles.second_nav_fontawesome} /> */}
                                        <div className='second_nav_link_text'>Feedback</div>
                                    </Nav.Link>
                                </OverlyPopover>
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" className="d-inline-flex p-2">
                                        {/* <FontAwesomeIcon icon={faEdit} style={styles.second_nav_fontawesome} /> */}
                                        <div className='second_nav_link_text'>Help?</div>
                                    </Nav.Link>
                                </OverlyPopover>
                                <div className='mr-auto'></div>
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" >
                                        <div className='second_nav_link_text'>Sell With Muhalik</div>
                                    </Nav.Link>
                                </OverlyPopover>
                                <div className='vertical_bar'>|</div>
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" >
                                        <div className='second_nav_link_text'>Get Muhalik's App</div>
                                    </Nav.Link>
                                </OverlyPopover>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Card.Body>

            </Card >

            <style jsx>
                {`
                    .row {
                        display: inline-flex;
                         align-items: center;
                         width: 100%;
                         padding: 0.4% 3%
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
                        margin-top: 1px;
                        color: gray
                    }
                    .second_nav_link_text {
                        white-space: nowrap;
                        font-size: 14px;
                        margin-left: 5%;
                        color: ${GlobalStyleSheet.admin_primry_color}
                    }
                    .nav_link_text:hover, .second_nav_link_text:hover {
                        color: green
                    }
                    

                    .category_list_item {
                        cursor: pointer;
                        width: 100%;
                        display: inline-flex;
                        align-items: center;
                        font-size: 14px;
                        padding: 1.5% 6%;
                        margin: 0%;
                        color: gray
                    }
                    .category_list_item:hover{
                        border-top: 0.5px solid lightgray;
                        border-bottom: 0.5px solid lightgray;
                        overflow: auto;
                        padding: 1.5% 2% 1.5% 6%;
                        color: #005ce6;
                        background: #e6f0ff
                    }

                    @media (max-width: 992px) {
                        .width {
                            max-width: 0px;
                            display: none
                        }
                    }
                    .vertical_bar {
                       color: ${GlobalStyleSheet.primry_color}
                    }
                    .categories_sm_xs {
                        display: none;
                    }
                    @media (max-width: 767px) {
                        .vertical_bar {
                            display: none;
                        }
                        .categories_sm_xs {
                            display: block;
                        }
                        .categories_lg_md {
                            display: none;
                        }
                        .row {
                            padding: 0.3% 0%
                        }
                    }
                    @media (max-width: 450px) {
                        .no_width_sm{
                            display: none
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
    nav_fontawesome: {
        color: 'gray',
        width: '24px',
        height: '24px',
        maxHeight: '24px',
        maxWidth: '24px',
        margin: '0px'
    },
    nav_cart_fontawesome: {
        color: 'gray',
        width: '28px',
        height: '28px',
        maxHeight: '28px',
        maxWidth: '28px',
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
        color: 'gray',
        width: '22px',
        height: '22px',
        maxHeight: '22px',
        maxWidth: '22px',
    },
    second_nav_fontawesome_hover: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '22px',
        height: '22px',
        maxHeight: '22px',
        maxWidth: '22px',
    },
    categories_fontawesome: {
        color: 'gray',
        float: 'right',
        width: '10px',
        height: '10px',
        maxHeight: '10px',
        maxWidth: '10px',
    },
    faChevronDown_fontawesome: {
        color: 'gray',
        width: '12px',
        height: '12px',
        maxHeight: '12px',
        maxWidth: '12px',
    },
    small_fontawesome: {
        color: 'gray',
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
    },
}

export default Toolbar

