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
    faStoreAlt, faChevronDown,
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
                <Card.Body className='p-0 m-0'>
                    <Navbar className='d-flex flex-lg-row align-items-center w-100'>
                        <div style={{ width: '10%' }}></div>
                        <Navbar.Brand className='d-inline-flex align-items-center'>
                            <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '50px', display: 'flex' }} />
                            <h5 className="text-center pl-3">Muhalik</h5>
                        </Navbar.Brand>
                        <div style={{ width: '10%' }}></div>
                        <InputGroup className='d-inline-flex align-items-center pl-2 pr-2'>
                            <InputGroup.Prepend >
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle as={Button} variant='outline-success'>
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
                                <Button variant='outline-success'>Search</Button>
                                {/* <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} /> */}
                            </InputGroup.Append>
                        </InputGroup>
                        <div style={{ width: '10%' }}></div>
                        <div className='categories_lg_md'>
                            <Nav >
                                {loggedIn ?
                                    null
                                    :
                                    <Nav.Link href='./login' style={styles.nav_link}>
                                        <FontAwesomeIcon icon={faUser} style={styles.nav_fontawesome} />
                                        <FontAwesomeIcon icon={faUserPlus} style={styles.nav_fontawesome} />
                                        <div className='nav_link_text'>Signin/up</div>
                                    </Nav.Link>
                                }
                                <Nav.Link href='#' className='mr-4' style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faGlobe} style={styles.nav_fontawesome} />
                                    <div className='nav_link_text'>Eng</div>
                                </Nav.Link>
                                <Nav.Link href='#' className='mr-4' style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.nav_fontawesome} />
                                    <div className='nav_link_text'>Orders</div>
                                </Nav.Link>
                                <Nav.Link href="#" className='mr-4' style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faLuggageCart} style={styles.nav_cart_fontawesome} />
                                    <div className='nav_link_text'>Cart</div>
                                </Nav.Link>
                                {loggedIn ?
                                    <NavDropdown title={
                                        <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '40px', maxWidth: '40px' }} />
                                    } id="nav-dropdown" alignRight>
                                        <NavDropdown.Item href={dashboard_href} >
                                            <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                            <div>Dashboard</div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >
                                            <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                            <div>Profile</div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => removeTokenFromStorage()} >
                                            <FontAwesomeIcon icon={faPowerOff} style={styles.dropDown_fontawesome} />
                                            <div>Logout</div>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    null
                                }
                            </Nav>
                        </div>
                    </Navbar>


                    <Navbar expand="md" className=' m-2 p-0'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <div className='categories_sm_xs'>
                        </div>
                        <div className='categories_sm_xs'>
                        </div>
                        <div className='categories_sm_xs'>
                        </div>
                        <div className='categories_sm_xs'>
                        </div>
                        <div className='categories_sm_xs'>
                            <Dropdown onMouseOver={onMouseEnter}
                                onMouseLeave={onMouseLeave} show={isCategoryOpen}>
                                <Dropdown.Toggle as={Nav.Link} className="d-inline-flex align-items-center">
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
                        </div>
                        <Navbar.Collapse >
                            <Nav className='w-100 d-flex align-items-center' style={{ border: `0.5px solid ${GlobalStyleSheet.primry_color}` }}>
                                <div className='categories_lg_md'>
                                    <Dropdown onMouseOver={onMouseEnter}
                                        onMouseLeave={onMouseLeave} show={isCategoryOpen}>
                                        <Dropdown.Toggle as={Nav.Link} className="d-inline-flex align-items-center">
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
                                </div>
                                <div className='vertical_bar'>|</div>
                                {isShops ?
                                    <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                        <Nav.Link href="#" className="d-inline-flex" onClick={() => setIsShops(false)}>
                                            <FontAwesomeIcon icon={faStoreAlt} style={styles.second_nav_fontawesome} />
                                            <div className='second_nav_link_text'>Shops</div>
                                            <div className='width' style={{ width: '70px' }}></div>
                                        </Nav.Link>
                                    </OverlyPopover>
                                    :
                                    <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                        <Nav.Link href="#" className="d-inline-flex" onClick={() => setIsShops(true)}>
                                            <FontAwesomeIcon icon={faProductHunt} style={styles.second_nav_fontawesome} />
                                            <div className='second_nav_link_text'>Products</div>
                                            <div className='width' style={{ width: '70px' }}></div>
                                        </Nav.Link>
                                    </OverlyPopover>
                                }
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" className="d-inline-flex p-2">
                                        <FontAwesomeIcon icon={faHandsHelping} style={styles.second_nav_fontawesome} />
                                        <div className='second_nav_link_text'>About Us</div>
                                    </Nav.Link>
                                </OverlyPopover>
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" className="d-inline-flex p-2">
                                        <FontAwesomeIcon icon={faEdit} style={styles.second_nav_fontawesome} />
                                        <div className='second_nav_link_text'>Feedback</div>
                                    </Nav.Link>
                                </OverlyPopover>
                                <OverlyPopover title={'Get Android/IOS App'} content={'Shop products using mobile app'}>
                                    <Nav.Link href="#" className="d-inline-flex p-2">
                                        <FontAwesomeIcon icon={faEdit} style={styles.second_nav_fontawesome} />
                                        <div className='second_nav_link_text'>Help</div>
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

            </Card>

            <style jsx>
                {`
                    .nav_link_text {
                        white-space: nowrap;
                        font-size: 14px;
                        color: ${GlobalStyleSheet.primry_color}
                    }
                    .nav_link_text:hover, .second_nav_link_text:hover {
                        color: black
                    }
                    .second_nav_link_text {
                        white-space: nowrap;
                        font-size: 14px;
                        color: ${GlobalStyleSheet.primry_color}
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
                    @media (max-width: 768px) {
                        .vertical_bar {
                            display: none;
                        }
                        .categories_sm_xs {
                            display: block;
                        }
                        .categories_lg_md {
                            display: none;
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
        marginRight: '3%',
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

