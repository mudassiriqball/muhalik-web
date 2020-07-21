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


import Inventory from './dashboard-contents/inventory';
import Orders from './dashboard-contents/orders'
import Discounts from './dashboard-contents/discount';
import Commision from './dashboard-contents/commision';
import Reports from './dashboard-contents/reports';
import GlobalStyleSheet from '../../../../styleSheet';
import Router from "next/router";

const Dashboard = props => {
    let wprapper_Casses = "wrapper";
    if (props.show) {
        wprapper_Casses = "wrapper open";
    }
    const [show_product, setShow_product] = React.useState(false);
    const [show_category, setShow_category] = React.useState(false);

    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="Dashboard"  >
                <Row noGutters>
                    {/* Show/Hide Tabs & Tabs-Content when screen Switches to Large/Medium,Small,Extra-Small Devices*/}
                    <div className={wprapper_Casses} style={styles.wrapper_col}>
                        <Nav className="flex-column" variant="pills" style={{ minWidth: '220px', maxWidth: '220px' }}>
                            <Nav.Item style={styles.image_div}>
                                <p>
                                    <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={styles.image} />
                                    <Nav.Link style={styles.muhalik}> {props.user_name} </Nav.Link>
                                </p>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Dashboard" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                        <div className="mr-auto"> Dashboard </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
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
                                    <div className="product_submenu">
                                        <Nav.Link eventKey="AddCategory" style={styles.product_submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faPlusCircle} style={styles.fontawesome} />
                                            <div className="mr-auto"> Add Category</div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                    <div className="product_submenu">
                                        <Nav.Link eventKey="AllCategories" style={styles.product_submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                            <div className="mr-auto"> All Categories</div>
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
                            <Nav.Item>
                                <div className="nav_link" >
                                    <Nav.Link eventKey="Reports" style={styles.nav_link} onClick={() => setShow_category(false)}>
                                        <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
                                        <div className="mr-auto">Reports</div>
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
                            {/* Search Bar */}
                            {/* <Form inline className='search_form mr-auto'>
                                <Form.Control
                                    style={styles.search_bar}
                                    type="text"
                                    size="sm"
                                    placeholder="Search here"
                                    aria-describedby="side_drawer_searchbar"
                                    name="side_drawer_searchbar"
                                />
                                <InputGroup.Prepend>
                                    <Button id="side_drawer_searchBtn" style={styles.toolbar_btn}>
                                        <FontAwesomeIcon icon={faSearch} style={styles.toolbar_fontawesomer} />
                                    </Button>
                                </InputGroup.Prepend>
                            </Form> */}
                            {/* Account Setting Dropdown */}
                            <div className="account_settig_dropdown ml-auto">
                                <NavDropdown className='nav_dropdown' title={
                                    <FontAwesomeIcon icon={faCog} style={styles.cog_fontawesome} />
                                } id="nav-dropdown" alignRight>
                                    <NavDropdown.Item onClick={() => Router.push('/user/profile')} className='dropdown_item'>
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
                                <Tab.Pane eventKey="Dashboard">
                                    <AdminDashboard />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Vendors">
                                    <Vendors {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Customers">
                                    <Customers {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Slider">
                                    <Slider {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Inventory">
                                    <Inventory {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Orders">
                                    <Orders {...props} />
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="AddProduct">
                                    <AddNew
                                        {...props}
                                        title={' Admin Dashboard / Add New'}
                                        isUpdateProduct={false}
                                        productCategories={''}
                                        productSubCategories={''}
                                        subCategoryDisabled={true}
                                        productTags={[]}
                                        warrantyType={''}
                                        simple_product_image_link={[]}
                                        variationsArray={[]}
                                        dangerousGoodsArray={[]}
                                    />
                                </Tab.Pane> */}
                                {/* Category */}
                                <Tab.Pane eventKey="AddCategory">
                                    <AddCategory {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AllCategories">
                                    <AllCategories {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="ProductFields">
                                    <ProductFields {...props} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Discounts">
                                    <Discounts />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Commision">
                                    <Commision />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Reports">
                                    <Reports />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        {/* End of Tab Content for Large Devices */}
                    </Col>
                    {/* End of the Toolbar & Tabs Components */}
                </Row>
            </Tab.Container>
            <style type="text/css">{`
                .dropdown_item{
                    color: gray;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    padding: 3% 5%;
                }
                .dropdown_item:hover{
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: white;
                }
                .dropdown_fontawesome {
                    margin: 0px 10px 0px 0px;
                    min-width: 18px;
                    min-height: 18px;
                    max-height: 18px;
                    max-width: 18px;
                }
                
                .search_form{
                    width: 50%;
                    padding-left: 5%;
                }
                @media (max-width: 991px){
                    .search_form{
                        width: 80%;
                        padding: 0%;
                    }
                }
                @media (max-width: 575px){
                    .search_form{
                        width: 90%;
                    }
                }
            `}</style>
            <style jsx>
                {`
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
                .product_submenu {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    border-top: 0.5px solid #434556;
                    border-bottom: 0.5px solid #434556;
                    margin: 0% 5% 0% 10%;
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
                    .account_settig_dropdown {
                        display: none
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
        width: '100px'
    },
    muhalik: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
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
    product_submenu_link: {
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