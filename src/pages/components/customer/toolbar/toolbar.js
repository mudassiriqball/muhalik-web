import {
    Navbar, Nav, Form, InputGroup, FormControl, Image, Button,
    NavDropdown, DropdownButton, Card, Dropdown, ButtonGroup,
    Row, Col, OverlayTrigger, Popover
} from 'react-bootstrap'
import GlobalStyleSheet from '../../../../styleSheet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faUserPlus, faLanguage, faPowerOff, faUser,
    faCartPlus, faHandsHelping, faPen, faSignOutAlt, faGlobe,
    faLuggageCart, faFileInvoiceDollar, faListAlt, faEdit,
    faStoreAlt, faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import MuhalikConfig from '../../../../sdk/muhalik.config'
import axios from 'axios'
import { removeTokenFromStorage } from '../../../../sdk/core/authentication-service'
import OverlayPopover from '../../overlay-opover'

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

    function toggle() {
        setIsCategoryOpen(!isCategoryOpen)
    }

    function onMouseEnter() {
        setIsCategoryOpen(true)
    }

    function onMouseLeave() {
        setIsCategoryOpen(false)
    }

    return (
        <div>
            <Card>
                <Card.Body style={{ padding: '0%', margin: '0%' }}>
                    <Navbar style={styles.nav_bar}>
                        <Row style={styles.row} >
                            <Col lg={2} md={4} sm={12} xs={12} style={{
                                display: 'flex', alignItems: 'center', marginTop: '1%', marginBottom: '1%'
                            }}>
                                <div className='mr-auto'></div>
                                <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '50px', display: 'flex', marginLeft: '5%' }} />
                                <h5 style={{ marginLeft: '5%' }} className="text-center mr-auto">Muhalik</h5>
                            </Col>
                            <Col lg={7} md={8} sm={12} xs={12} style={styles.col}>
                                <InputGroup style={styles.search_div}>
                                    <InputGroup.Prepend >
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle as={Nav.Link} variant="success" style={styles.search_type}>
                                                {searchType}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="super-colors">
                                                {categoryArray.map((element, index) =>
                                                    <Dropdown.Item key={index} onClick={() => setSearchType(element.value)}>{element.value}</Dropdown.Item>
                                                )}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </InputGroup.Prepend>
                                    <FormControl style={styles.search_box} placeholder="Search here" />
                                    <InputGroup.Append style={styles.search_btn}>
                                        <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col lg={3} md={12} sm={12} xs={12} style={styles.col}>
                                <Nav style={styles.nav}>
                                    <div className='mr-auto width'></div>
                                    {loggedIn ?
                                        null
                                        :
                                        <Nav.Link href='./login' className='mr-auto' style={styles.nav_link}>
                                            <FontAwesomeIcon icon={faUser} style={styles.nav_fontawesome} />
                                            <FontAwesomeIcon icon={faUserPlus} style={styles.nav_fontawesome} />
                                            <div className='nav_link_text'>Signin/up</div>
                                        </Nav.Link>
                                    }
                                    <Nav.Link href='#' className='mr-auto' style={styles.nav_link}>
                                        <FontAwesomeIcon icon={faGlobe} style={styles.nav_fontawesome} />
                                        <div className='nav_link_text'>Eng</div>
                                    </Nav.Link>
                                    <Nav.Link href='#' className='mr-auto' style={styles.nav_link}>
                                        <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.nav_fontawesome} />
                                        <div className='nav_link_text'>Orders</div>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='mr-auto' style={styles.nav_link}>
                                        <FontAwesomeIcon icon={faLuggageCart} style={styles.nav_cart_fontawesome} />
                                        <div className='nav_link_text'>Cart</div>
                                    </Nav.Link>
                                    {loggedIn ?
                                        <NavDropdown title={
                                            <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '40px', maxWidth: '40px' }} />
                                        } id="nav-dropdown" alignRight>
                                            <NavDropdown.Item href={dashboard_href} style={styles.flex_row}>
                                                <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                                <div>Dashboard</div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item style={styles.flex_row}>
                                                <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                                <div>Profile</div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={() => removeTokenFromStorage()} style={styles.flex_row}>
                                                <FontAwesomeIcon icon={faPowerOff} style={styles.dropDown_fontawesome} />
                                                <div>Logout</div>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        :
                                        null
                                    }
                                </Nav>
                            </Col>
                        </Row>
                    </Navbar>
                    <Navbar expand="md" style={{ padding: '0px 0.3% 0.3% 0.3%' }}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse >
                            <Nav style={styles.nav_bar}>
                                <Row style={{ border: `1px solid ${GlobalStyleSheet.card_header_background}`, width: '100%' }} noGutters>
                                    <Col lg='auto' md='auto' sm='auto' xs='auto' style={styles.flex_row}>
                                        <Dropdown className="d-inline-block" onMouseOver={onMouseEnter}
                                            onMouseLeave={onMouseLeave} show={isCategoryOpen}>
                                            <Dropdown.Toggle as={Nav.Link} style={styles.flex_row}>
                                                <FontAwesomeIcon icon={faListAlt} style={styles.second_nav_fontawesome} />
                                                <div className='second_nav_link_text'>Categories</div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >Header</Dropdown.Item>
                                                <Dropdown.Item >Action</Dropdown.Item>
                                                <Dropdown.Item>Another Action</Dropdown.Item>
                                                <Dropdown.Item>Another Action</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <div style={{ color: `${GlobalStyleSheet.primry_color}` }}>|</div>
                                        {isShops ?
                                            <OverlayPopover title={'Find Shops'} content={'Here you will get shops'}>
                                                <Nav.Link href="#" style={styles.flex_row} onClick={() => setIsShops(false)}>
                                                    <FontAwesomeIcon icon={faStoreAlt} style={styles.second_nav_fontawesome} />
                                                    <div className='second_nav_link_text'>Shops</div>
                                                    <div className='width' style={{ width: '70px' }}></div>
                                                </Nav.Link>
                                            </OverlayPopover>
                                            :
                                            <OverlayPopover title={'Find Products'} content={'Here you will get our products'}>
                                                <Nav.Link href="#" style={styles.flex_row} onClick={() => setIsShops(true)}>
                                                    <FontAwesomeIcon icon={faProductHunt} style={styles.second_nav_fontawesome} />
                                                    <div className='second_nav_link_text'>Products</div>
                                                    <div className='width' style={{ width: '70px' }}></div>
                                                </Nav.Link>
                                            </OverlayPopover>
                                        }
                                    </Col>
                                    <Col style={styles.flex_row}>
                                        <OverlayPopover title={'Know About Us'} content={'We are providing you the best services, know about us'}>
                                            <Nav.Link href="#" style={styles.flex_row}>
                                                <FontAwesomeIcon icon={faHandsHelping} style={styles.second_nav_fontawesome} />
                                                <div className='second_nav_link_text'>About Us</div>
                                            </Nav.Link>
                                        </OverlayPopover>
                                        <OverlayPopover title={'Feedback'} content={'Give your feedback and help us to improve'}>
                                            <Nav.Link href="#" style={styles.flex_row}>
                                                <FontAwesomeIcon icon={faEdit} style={styles.second_nav_fontawesome} />
                                                <div className='second_nav_link_text'>Feedback</div>
                                            </Nav.Link>
                                        </OverlayPopover>
                                        <Nav.Link href="#" style={styles.flex_row}>
                                            <FontAwesomeIcon icon={faEdit} style={styles.second_nav_fontawesome} />
                                            <div className='second_nav_link_text'>Help</div>
                                        </Nav.Link>
                                    </Col>
                                    <Col style={styles.flex_row}>
                                        <div className='mr-auto'></div>
                                        <OverlayPopover title={'Sell Your Products with Muhalik'} content={'Register your shop and sell your products online'}>
                                            <Nav.Link href="#" style={styles.flex_row}>
                                                <div className='second_nav_link_text'>Sell With Muhalik</div>
                                            </Nav.Link>
                                        </OverlayPopover>
                                        <div style={{ color: `${GlobalStyleSheet.primry_color}` }}>|</div>
                                        <OverlayPopover title={'App for Andriod & IOS'} content={'Install the app and continue your shopping with mobile app'}>
                                            <Nav.Link href="#" style={styles.flex_row}>
                                                <div className='second_nav_link_text'>Get Muhalik's App</div>
                                            </Nav.Link>
                                        </OverlayPopover>
                                    </Col>
                                </Row>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Card.Body>

            </Card>

            <style jsx>
                {`
                    .nav_link_text {
                        text-align: center;
                        white-space: nowrap;
                        overflow: hidden;
                        font-size: 14px;
                        color: ${GlobalStyleSheet.primry_color}
                    }
                    .nav_link_text:hover, .second_nav_link_text:hover {
                        color: black
                    }
                    .second_nav_link_text {
                        text-align: center;
                        white-space: nowrap;
                        overflow: hidden;
                        font-size: 14px;
                        margin-left: 5px;
                        margin-right: 8px;
                        color: ${GlobalStyleSheet.primry_color}
                    }
                    @media (max-width: 992px) {
                        .width {
                            max-width: 0px;
                            display: none
                        }
                    }
                `}
            </style>
        </div >
    )
}

Toolbar.getInitialProps = async ctx => {
    const url = MuhalikConfig.PATH + '/api/categories/categories'
    try {
        const response = await axios.get(url)
        // this.setState({ categoryList: response.data.data })
        return { searchCategory: response.data.data }
    } catch (error) {
        console.error(error)
        return null
    }
    // const res = await fetch('')
    // const json = await res.json()

}

const styles = {
    row: {
        width: '100%',
        margin: '0%',
        padding: '0%',
        display: 'flex',
        alignItems: 'center'
    },
    col: {
        marginTop: '0.5%',
        marginBottom: '0.5%',
    },
    nav_bar: {
        padding: '0%',
        width: '100%'
    },
    nav: {
        display: 'flex',
        alignItems: 'center'
    },
    flex_row: {
        // fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '0px'
    },
    search_type: {
        background: 'none',
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        borderRight: 'none',
        color: 'black',
        padding: '0px 15px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '18px',
        borderBottomLeftRadius: '18px',
    },
    search_box: {
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        // borderLeft: 'none'
    },
    search_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        padding: '0px 15px',
        display: 'flex',
        alignItems: 'center',
        borderTopRightRadius: '18px',
        borderBottomRightRadius: '18px',
    },

    nav_link: {
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontSize: '13px',
    },

    fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18x',
    },
    search_fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    nav_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '25px',
        height: '25px',
        maxHeight: '25px',
        maxWidth: '25px',
        marginBottom: '1px'
    },
    nav_cart_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '28px',
        height: '28px',
        maxHeight: '28px',
        maxWidth: '28px',
    },
    dropDown_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        margin: '0px 20px 0px 0px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    second_nav_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '22px',
        height: '22px',
        maxHeight: '22px',
        maxWidth: '22px',
    },
    faChevronDown_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '12px',
        height: '12px',
        maxHeight: '12px',
        maxWidth: '12px',
    },

}

export default Toolbar

