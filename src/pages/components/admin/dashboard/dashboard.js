import Router from "next/router";
import { Image, Nav, Navbar, Dropdown, NavDropdown, ButtonGroup, Form, FormControl, InputGroup, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faBars, faPowerOff, faChevronRight, faPlusCircle, faChevronDown, faChevronUp,
    faTachometerAlt, faPersonBooth, faHandsHelping, faUser, faUsers,
    faWarehouse, faTags, faPercent, faChartBar, faTh, faCog, faShoppingBag
} from '@fortawesome/free-solid-svg-icons';
import { faEdit, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import AdminDashboard from './dashboard-contents/admin-dashboard';
import Vendors from './dashboard-contents/vendors';
import Customers from './dashboard-contents/customers';
import Slider from './dashboard-contents/slider'
// Products 
import ProductFields from './dashboard-contents/product-contents/product-fields'
// Category
import AddCategory from './dashboard-contents/category-contents/add-category'
import AllCategories from './dashboard-contents/category-contents/all-categories'
import HomeScreenCategories from './dashboard-contents/category-contents/home-screen-categories'

import Inventory from './dashboard-contents/inventory';
import Orders from './dashboard-contents/orders'
import Discounts from './dashboard-contents/discount';
import Commision from './dashboard-contents/commision';
import GlobalStyleSheet from '../../../../styleSheet';

const Dashboard = props => {
    let wprapper_Casses = "wrapper";
    if (props.show) {
        wprapper_Casses = "wrapper open";
    }
    const [show_category, setShow_category] = React.useState(false);

    return (
        <div className='admin_dashboard'>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="Vendors"  >
                <Row noGutters>
                    {/* Show/Hide Tabs & Tabs-Content when screen Switches to Large/Medium,Small,Extra-Small Devices*/}
                    <div className={wprapper_Casses} style={styles.wrapper_col}>
                        <Nav className="flex-column" variant="pills" style={{ minWidth: '220px', maxWidth: '220px' }}>
                            <Nav.Item style={styles.image_div}>
                                <p>
                                    <Image src={props.avatar} roundedCircle thumbnail fluid style={styles.image} />
                                    <Nav.Link style={styles.muhalik}> {props.full_name} </Nav.Link>
                                </p>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Dashboard" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                        <div className="mr-auto"> Dashboard </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item> */}
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Vendors" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon size="xs" icon={faPersonBooth} style={styles.fontawesome} />
                                        <div className="mr-auto">Vendors</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Customers" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                        <div className="mr-auto">Customers</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Inventory" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                        <div className="mr-auto">Inventory</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Orders" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faEdit} style={styles.fontawesome} />
                                        <div className="mr-auto">Orders</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="ProductFields" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                        <div className="mr-auto">Product Fields</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link style={styles.nav_link} onClick={() => setShow_category(!show_category)}>
                                        <FontAwesomeIcon size="xs" icon={faTh} style={styles.fontawesome} />
                                        <div className="mr-auto"> Category </div>
                                        <FontAwesomeIcon icon={show_category ? faChevronUp : faChevronDown} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            {show_category ?
                                <div>
                                    <div className="limk_submenue">
                                        <Nav.Link eventKey="AddCategory" style={styles.submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faPlusCircle} style={styles.fontawesome} />
                                            <div className="mr-auto"> Add Category</div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                    <div className="limk_submenue">
                                        <Nav.Link eventKey="AllCategories" style={styles.submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faTh} style={styles.fontawesome} />
                                            <div className="mr-auto"> All Categories</div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                    <div className="limk_submenue">
                                        <Nav.Link eventKey="HomeScreenCategories" style={styles.submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faTh} style={styles.fontawesome} />
                                            <div className="mr-auto"> Home Screen Categories</div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </div>
                                : null
                            }
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Slider" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                        <div className="mr-auto">Slider</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Discounts" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                        <div className="mr-auto">Discounts</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link" >
                                    <Nav.Link eventKey="Commission" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faPercent} style={styles.fontawesome} />
                                        <div className="mr-auto">Commission</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                        </Nav>
                        {/* End Tabs Side Drawer */}
                    </div>
                    {/* Toolbar & Tabs Contents */}
                    <Col>
                        {/* Toolbar */}
                        <Navbar collapseOnSelect expand="lg" style={styles.navbar} variant="dark" className='p-2 m-0'>
                            {/* Show/Hide bar btn while screen switches to Large to Small,Medium,Extra-Small Devices */}
                            <div className="side_tab_toogle_btn mr-auto" style={styles.toolbar_btn_div}>
                                <Button style={styles.toolbar_btn} onClick={props.drawerClickHandler}>
                                    <FontAwesomeIcon icon={faBars} style={styles.toolbar_fontawesomer} />
                                </Button>
                            </div>
                            {/* Bars Btn to Show/Hide Tabs Sde Drawer in Large Devices */}
                            <div className="wrapper_btn" style={styles.toolbar_btn_div}>
                                <Button style={styles.toolbar_btn} onClick={props.wrapperBtnClickHandler} className='ml-1'>
                                    <FontAwesomeIcon icon={faBars} style={styles.toolbar_fontawesomer} />
                                </Button>
                            </div>
                            {/* Account Setting Dropdown */}
                            <div className="account_settig_dropdown ml-auto">
                                <NavDropdown className='nav_dropdown' title={
                                    <FontAwesomeIcon icon={faCog} style={styles.cog_fontawesome} />
                                } id="nav-dropdown" alignRight>
                                    <NavDropdown.Item onClick={() => Router.push('/user/profile')} className='profile_md_lg'>
                                        <FontAwesomeIcon icon={faUserCircle} className='dropdown_fontawesome' />
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => Router.push('/user/account')} className='profile_xs_sm'>
                                        <FontAwesomeIcon icon={faUserCircle} className='dropdown_fontawesome' />
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown_item'>
                                        <FontAwesomeIcon icon={faHandsHelping} className='dropdown_fontawesome' />
                                        Help?
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={props.logout} className='dropdown_item'>
                                        <FontAwesomeIcon icon={faPowerOff} className='dropdown_fontawesome' />
                                        Logout
                                </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Navbar>
                        {/* End of Toolbar */}
                        {/* Tab Content for Large Devices */}
                        <div className="tab_content">
                            <Tab.Content style={{ height: `calc(100vh - 65px)`, overflowY: 'auto' }}>
                                {/* <Tab.Pane eventKey="Dashboard">
                                    <AdminDashboard />
                                </Tab.Pane> */}
                                <Tab.Pane eventKey="Vendors">
                                    <Vendors
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Customers">
                                    <Customers
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Slider">
                                    <Slider {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Inventory">
                                    <Inventory {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Orders">
                                    <Orders
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AddCategory">
                                    <AddCategory
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AllCategories">
                                    <AllCategories
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="HomeScreenCategories">
                                    <HomeScreenCategories
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="ProductFields">
                                    <ProductFields
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Discounts">
                                    <Discounts />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Commision">
                                    <Commision />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        {/* End of Tab Content for Large Devices */}
                    </Col>
                    {/* End of the Toolbar & Tabs Components */}
                </Row>
            </Tab.Container>
            <style type="text/css">{`
                .admin_dashboard .dropdown_item{
                    color: gray;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    padding: 3% 5%;
                }
                .admin_dashboard .dropdown_item:hover{
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: white;
                }
                .admin_dashboard .search_form{
                    width: 50%;
                    padding-left: 5%;
                }

                .admin_dashboard .dropdown_fontawesome {
                    margin: 0px 10px 0px 0px;
                    min-width: 18px;
                    min-height: 18px;
                    max-height: 18px;
                    max-width: 18px;
                }
                .admin_dashboard .profile_md_lg {
                    display: flex;
                    color: gray;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    padding: 3% 5%;
                }
                .admin_dashboard .profile_md_lg:hover {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: white;
                }
                .admin_dashboard .profile_xs_sm {
                    display: none;
                }

                @media (max-width: 991px){
                    .admin_dashboard .search_form{
                        width: 80%;
                        padding: 0%;
                    }
                }
                @media (max-width: 767px) {
                    .admin_dashboard .profile_md_lg {
                        display: none;
                    }
                    .admin_dashboard .profile_xs_sm {
                        display: flex;
                        color: gray;
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                        padding: 3% 5%;
                    }
                }
                @media (max-width: 575px){
                    .admin_dashboard .search_form{
                        width: 90%;
                    }
                }
            `}</style>
            <style jsx>
                {`
                .account_settig_dropdown {
                    display: flex;
                    align-items: center;
                }
                .show_product {
                    display: none;
                }
                .show_product.open {
                    display: flex;
                }

                .show_category {
                    display: none;
                }
                .show_category.open {
                    display: flex;
                }

                .wrapper {
                    display: none;
                }
                .wrapper.open{
                    backgroung:  ${GlobalStyleSheet.admin_primry_color};
                    display: block;
                    height: 100vh;
                    overflow-y: auto;
                }
                .nav_link {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    border-top: 0.5px solid #434556;
                    border-bottom: 0.5px solid #434556;
                    margin: 1.5px 0px;
                }
                .nav_link:hover {
                    background: #30313E;
                }
                .limk_submenue {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    border-top: 0.5px solid #434556;
                    border-bottom: 0.5px solid #434556;
                    margin: 0% 5% 0% 10%;
                }
                .limk_submenue:hover {
                    background: #30313E;
                }
                .side_tab_toogle_btn {
                    margin: 0%
                }
                p {
                    text-align: center; 
                    margin: 0px;
                }
                @media (max-width: 991px) {
                    .wrapper_btn {
                        display: none
                    }
                    .wrapper {
                      display: none;
                    }
                    .tab_content {
                        display: none;
                    }
                    .wrapper.open {
                        display: none;
                        height: 0vh
                    }
                }
                @media (min-width: 992px) {
                    .side_tab_toogle_btn {
                        display: none;
                    }
                }
            `}
            </style>
        </div>
    )
}

const styles = {
    image_div: {
        background: 'white',
        width: '100%',
        borderRight: '0.5px solid gray',
        padding: '2%'
    },
    image: {
        marginTop: '5px',
        minWidth: '100px',
        maxWidth: '100px',
        minHeight: '100px',
        maxHeight: '100px',
    },
    muhalik: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        fontSize: '14px',
        margin: '0%',
        padding: '1%',
        border: 'none',
        cursor: 'default',
        background: 'none'
    },
    wrapper_col: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
    },
    navbar: {
        borderBottom: `1px solid ${GlobalStyleSheet.admin_primry_color}`,
        background: 'white',
        padding: '0.5% 1%',
    },
    toolbar_btn_div: {
        marginRight: '1%',
    },
    toolbar_btn: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
        border: 'none',
        width: '31px',
        height: '31px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
    },
    toolbar_fontawesomer: {
        color: `${GlobalStyleSheet.body_color}`,
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },

    search_bar: {
        flex: '1',
    },
    nav_link: {
        color: 'white',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        height: '45px'
    },
    submenu_link: {
        color: 'white',
        fontSize: '11px',
        display: 'flex',
        alignItems: 'center',
        height: '40px'
    },

    fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        marginRight: '8%',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    forword_fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        width: '10px',
        height: '10px',
        maxHeight: '10px',
        maxWidth: '10px',
    },

    cog_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        margin: '0px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    }
}

export default Dashboard;