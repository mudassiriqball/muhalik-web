import { Image, Nav, Navbar, Dropdown, NavDropdown, ButtonGroup, Form, Container, DropdownButton, InputGroup, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faBars, faChevronRight, faTachometerAlt, faUpload, faHandsHelping, faUser,
    faChevronDown, faChevronUp, faPowerOff, faListAlt, faWarehouse, faTags, faPercent, faPlusCircle, faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import VendorDashboard from './dashboard-contents/vendor-dashboard';
import AllProducts from './dashboard-contents/product-contents/all-products';
import AddNew from './dashboard-contents/product-contents/add-new';
// import AddCategory from './dashboard-contents/product-contents/add-category';
import Inventory from './dashboard-contents/inventory';
import Discounts from './dashboard-contents/discounts';
import Reports from './dashboard-contents/reports';
import BulkUpload from './dashboard-contents/bulk-upload';
import Orders from './dashboard-contents/orders';
import GlobalStyleSheet from '../../../../styleSheet';

const Dashboard = props => {
    let wprapper_Casses = "wrapper";
    if (props.show) {
        wprapper_Casses = "wrapper open";
    }

    const [show_product, setShow_product] = React.useState(false);

    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="Dashboard" >
                <Row noGutters>
                    {/* Show/Hide Tabs & Tabs-Content when screen Switches to Large/Medium,Small,Extra-Small Devices*/}
                    <div className={wprapper_Casses} style={styles.wrapper_col}>
                        <Nav className="flex-column" variant="pills" style={{ minWidth: '220px', maxWidth: '220px' }}>
                            <Nav.Item style={styles.image_div}>
                                <p>
                                    <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={styles.image} />
                                    <Nav.Link href="/index" style={styles.muhalik}> {props.user_name} </Nav.Link>
                                </p>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Dashboard" style={styles.nav_link} onClick={() => setShow_product(false)}>
                                        <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                        <div className="mr-auto"> Dashboard </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link style={styles.nav_link} onClick={() => setShow_product(!show_product)}>
                                        <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                        <div className="mr-auto"> Products </div>
                                        <FontAwesomeIcon icon={show_product ? faChevronUp : faChevronDown} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            {show_product ?
                                <div>
                                    <div className="product_submenu">
                                        <Nav.Link eventKey="AllProducts" style={styles.product_submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                            <div className="mr-auto"> All Products </div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                    <div className="product_submenu">
                                        <Nav.Link eventKey="AddNew" style={styles.product_submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faPlusCircle} style={styles.fontawesome} />
                                            <div className="mr-auto"> Add New </div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                    {/* <div className="product_submenu">
                                        <Nav.Link eventKey="AddCategory" style={styles.product_submenu_link}>
                                            <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                            <div className="mr-auto"> Add Category </div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div> */}
                                </div>
                                : null}
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Inventory" style={styles.nav_link} onClick={() => setShow_product(false)}>
                                        <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                        <div className="mr-auto"> Inventory </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="BulkUpload" style={styles.nav_link} onClick={() => setShow_product(false)}>
                                        <FontAwesomeIcon icon={faUpload} style={styles.fontawesome} />
                                        <div className="mr-auto"> Bulk Upload </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Discounts" style={styles.nav_link} onClick={() => setShow_product(false)}>
                                        <FontAwesomeIcon size="xs" icon={faTags} style={styles.fontawesome} />
                                        <div className="mr-auto"> Discount </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Orders" style={styles.nav_link} onClick={() => setShow_product(false)}>
                                        <FontAwesomeIcon size="xs" icon={faTags} style={styles.fontawesome} />
                                        <div className="mr-auto"> Orders </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link" >
                                    <Nav.Link eventKey="Reports" style={styles.nav_link} onClick={() => setShow_product(false)}>
                                        <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
                                        <div className="mr-auto"> Reports </div>
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
                        <Navbar collapseOnSelect expand="lg" style={styles.navbar} variant="dark" className='p-1 m-0'>
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
                            <Form inline style={{ width: '85%' }} className="mr-auto">
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
                            </Form>
                            {/* Account Setting Dropdown */}
                            <div className="account_settig_dropdown">
                                <NavDropdown className='p-0 m-0' title={
                                    <Image src="muhalik.jpg" roundedCircle fluid style={{ width: '30px', maxWidth: '30px' }} />
                                } id="nav-dropdown" alignRight>
                                    <NavDropdown.Item href="#/action-1">
                                        <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                        My Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#/action-2">
                                        <FontAwesomeIcon icon={faSearch} style={styles.dropDown_fontawesome} />
                                        Feedback
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#/action-3">
                                        <FontAwesomeIcon icon={faHandsHelping} style={styles.dropDown_fontawesome} />
                                        Help?
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={props.logoutClickHandler}>
                                        <FontAwesomeIcon icon={faPowerOff} style={styles.dropDown_fontawesome} />
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
                                    <VendorDashboard user_status={props.user_status} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AllProducts">
                                    <AllProducts />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AddNew">
                                    <AddNew
                                        {...props}
                                        title={'Vendor Dashboard / Add New'}
                                        _id={''}
                                        isUpdateProduct={false}
                                        isVariableProduct={false}

                                        productCategories={''}
                                        productSubCategories={''}

                                        productTags={[]}
                                        warrantyType={''}
                                        simple_product_image_link={[]}
                                        variationsArray={[]}
                                        dangerousGoodsArray={[]}
                                    />
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="AddCategory">
                                    <AddCategory />
                                </Tab.Pane> */}
                                <Tab.Pane eventKey="Inventory">
                                    <Inventory />
                                </Tab.Pane>
                                <Tab.Pane eventKey="BulkUpload">
                                    <BulkUpload />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Discounts">
                                    <Discounts />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Orders">
                                    <Orders />
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
            <style jsx>
                {`
                .show_product {
                    display: none;
                }
                .show_product.open {
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
                .product_submenu:hover {
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
        padding: '1% 1%',
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

    dropDown_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        margin: '0px 20px 0px 0px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    }
}

export default Dashboard;