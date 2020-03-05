import { Image, Nav, Navbar, Dropdown, ButtonGroup, Form, Container, InputGroup, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faChevronRight, faTachometerAlt, faUpload, faHandsHelping, faUser, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import Dashboard from './dashboard-tabs-content/dashboard';
import Products from './dashboard-tabs-content/products';
import Inventory from './dashboard-tabs-content/inventory';
import Discounts from './dashboard-tabs-content/discounts';
import Reports from './dashboard-tabs-content/reports';
import BulkUpload from './dashboard-tabs-content/bulk-upload';
import Orders from './dashboard-tabs-content/orders';

import GlobalStyleSheet from '../../../../styleSheet';

const DashboardTabs = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }

    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="dashboard" >
                <Row noGutters>
                    {/* Show/Hide Tabs & Tabs-Content when screen Switches to Large/Medium,Small,Extra-Small Devices*/}
                    <div className={drawerClasses} style={styles.body}>
                        {/* Show/Hide Tabs SIde Drawer in Lg-Devices when bar btn Clicked*/}
                        <div className="tabs" >
                            {/* Tabs Side Drawer */}
                            <Nav className="flex-column" variant="pills" style={{ minWidth: '320px', maxWidth: '320px' }}>
                                <Nav.Item style={styles.image_div}>
                                    <p>
                                        <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={styles.image} />
                                        <Nav.Link href="/index" style={styles.muhalik}> {props.token} </Nav.Link>
                                    </p>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="dashboard" style={styles.tab_link}>
                                            <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                                Dashboard
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="products" style={styles.tab_link}>
                                            <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                                Products
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="inventory" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                                Inventory
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="bulkUpload" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faUpload} style={styles.fontawesome} />
                                                Bulk Upload
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="discountCoupons" style={styles.tab_link}>
                                            <FontAwesomeIcon size="xs" icon={faTags} style={styles.fontawesome} />
                                                Discount
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="orders" style={styles.tab_link}>
                                            <FontAwesomeIcon size="xs" icon={faTags} style={styles.fontawesome} />
                                                Orders
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" >
                                        <Nav.Link eventKey="reports" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
                                                Reports
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                            </Nav>
                            {/* End Tabs Side Drawer */}
                        </div>
                    </div>
                    {/* Toolbar & Tabs Contents */}
                    <Col>
                        {/* Toolbar */}
                        <Navbar collapseOnSelect expand="lg" style={styles.navbar} variant="dark">
                            {/* Show/Hide bar btn while screen switches to Large to Small,Medium,Extra-Small Devices */}
                            <div className="side_tab_toogle_btn mr-auto" style={styles.drawerBtn}>
                                <Button style={styles.buttons} onClick={props.drawerClickHandler}>
                                    <FontAwesomeIcon icon={faBars} style={styles.search_fontawesome} />
                                </Button>
                            </div>
                            {/* Bars Btn to Show/Hide Tabs Sde Drawer in Large Devices */}
                            <div className="tabs mr-sm-4" style={styles.drawerBtn}>
                                <Button style={styles.buttons} onClick={props.ClickHandler}>
                                    <FontAwesomeIcon icon={faBars} style={styles.search_fontawesome} />
                                </Button>
                            </div>
                            {/* Search Bar */}
                            <Form inline style={{width: '85%'}} className="mr-auto">
                                <Form.Control
                                    style={styles.search_bar}
                                    type="text"
                                    placeholder="Search here"
                                    aria-describedby="side_drawer_searchbar"
                                    name="side_drawer_searchbar"
                                />
                                <InputGroup.Prepend>
                                    <Button id="side_drawer_searchBtn" style={styles.buttons}>
                                        <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                                    </Button>
                                </InputGroup.Prepend>
                            </Form>
                            {/* Account Setting Dropdown */}
                            <div className="account_settig_dropdown">
                            <Dropdown as={ButtonGroup} alignRight>
                                <Dropdown.Toggle size="sm" split variant="light" id="dropdown-split" style={{ background: 'none', border: 'none' }} />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        <FontAwesomeIcon icon={faUser} style={styles.dropDown_fontawesome} />
                                        My Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <FontAwesomeIcon icon={faSearch} style={styles.dropDown_fontawesome} />
                                        Feedback
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <FontAwesomeIcon icon={faHandsHelping} style={styles.dropDown_fontawesome} />
                                        Help?
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">
                                        <FontAwesomeIcon icon={faSearch} style={styles.dropDown_fontawesome} />
                                        Logout
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </Navbar>
                        {/* End of Toolbar */}
                        {/* Tab Content for Large Devices */}
                        <div className="tab_content">
                            <Tab.Content>
                                <Tab.Pane eventKey="dashboard">
                                    <Dashboard />
                                </Tab.Pane>
                                <Tab.Pane eventKey="products">
                                    <Products />
                                </Tab.Pane>
                                <Tab.Pane eventKey="inventory">
                                    <Inventory />
                                </Tab.Pane>
                                <Tab.Pane eventKey="bulkUpload">
                                    <BulkUpload />
                                </Tab.Pane>
                                <Tab.Pane eventKey="discountCoupons">
                                    <Discounts />
                                </Tab.Pane>
                                <Tab.Pane eventKey="orders">
                                    <Orders />
                                </Tab.Pane>
                                <Tab.Pane eventKey="reports">
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
                .tabs_side_drawer {
                    display: none;
                }
                .tabs_side_drawer.open{
                    backgroung:  ${GlobalStyleSheet.admin_primry_color};
                    display: block;
                    height: 100vh;
                }
                .hover {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: ${GlobalStyleSheet.body_color};
                    border-top: 0.5px solid #434556;
                    border-bottom: 0.5px solid #434556;
                }
                .hover:hover {
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
                    .tabs {
                      display: none;
                    }
                    .tab_content {
                        display: none;
                    }
                    .account_settig_dropdown {
                        display: none
                    }
                    .tabs_side_drawer.open {
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
    body: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
    },
    navbar: {
        borderBottom: `1px solid ${GlobalStyleSheet.admin_primry_color}`,
        background: 'white',
        padding: '1% 1%',
    },
    drawerBtn: {
        marginRight: '1%',
    },
    row: {
        padding: '0px',
        margin: '0px',
    },
    col: {
        padding: '0px',
        margin: '0px',
    },
    buttons: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
        border: 'none',
        width: 'auto',
        height: '38px',
    },
    search_bar: {
        flex: '1',
    },
    tab_link: {
        color: 'white',
        fontSize: '14px',
        paddingTop: '7%',
        paddingBottom: '7%',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        margin: '0px 8% 0px 12%',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    forword_fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        margin: '8px 5% 0px 0px',
        float: 'right',
        width: '10px',
        height: '10px',
        maxHeight: '10px',
        maxWidth: '10px',
    },
    search_fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        width: '16px',
        height: '16px',
        maxHeight: '16px',
        maxWidth: '16px',
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

export default DashboardTabs;