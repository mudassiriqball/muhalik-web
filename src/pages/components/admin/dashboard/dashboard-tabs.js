import { Image, Nav, Navbar, Dropdown, ButtonGroup, Form, FormControl, InputGroup, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faChevronRight, faTachometerAlt, faPersonBooth, faHandsHelping, faUser, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import Dashboard from './dashboard-tabs-content/dashboard';
import Vendors from './dashboard-tabs-content/vendors';
import Customers from './dashboard-tabs-content/customers';
import Products from './dashboard-tabs-content/products';
import Categories from './dashboard-tabs-content/categories';
import Inventory from './dashboard-tabs-content/inventory';
import Discounts from './dashboard-tabs-content/discount';
import Commision from './dashboard-tabs-content/commision';
import Reports from './dashboard-tabs-content/reports';

import GlobalStyleSheet from '../../../../styleSheet';
import { removeTokenFromStorage } from '../../../../sdk/core/authentication-service';

const DashboardTabs = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }

    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="zero"  >
                <Row noGutters>
                    {/* Show/Hide Tabs & Tabs-Content when screen Switches to Large/Medium,Small,Extra-Small Devices*/}
                    <div className={drawerClasses}  style={styles.body}>
                        {/* Show/Hide Tabs SIde Drawer in Lg-Devices when bar btn Clicked*/}
                        <div className="tabs">
                            <Nav className="flex-column" variant="pills" style={{ minWidth: '320px', maxWidth: '320px' }}>
                                <Nav.Item style={styles.image_div}>
                                    <p>
                                        <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={styles.image} />
                                        <Nav.Link href="/index" style={styles.muhalik}> {props.token} </Nav.Link>
                                    </p>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="zero" style={styles.tab_link}>
                                            <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                                Dashboard
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="one" style={styles.tab_link}>
                                            <FontAwesomeIcon size="xs" icon={faPersonBooth} style={styles.fontawesome} />
                                                Vendors
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="two" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                                Customers
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="three" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                            Products
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="four" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faListAlt} style={styles.fontawesome} />
                                                Categories
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="five" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                                Inventory
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="six" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                                Discounts
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" >
                                        <Nav.Link eventKey="seven" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faPercent} style={styles.fontawesome} />
                                                Commission
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" >
                                        <Nav.Link eventKey="eight" style={styles.tab_link}>
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
                        {/* End of toolbar */}
                        {/* Tab Content for Large Devices */}
                        <div className="tab_content">
                            <Tab.Content>
                                <Tab.Pane eventKey="zero">
                                    <Dashboard />
                                </Tab.Pane>
                                <Tab.Pane eventKey="one">
                                    <Vendors />
                                </Tab.Pane>
                                <Tab.Pane eventKey="two">
                                    <Customers />
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="three">
                                    <Products />
                                </Tab.Pane> */}
                                <Tab.Pane eventKey="four">
                                    <Categories />
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <Inventory />
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <Discounts />
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                    <Commision />
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight">
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
                .tabs_side_drawer.open {
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
        margin: '4px 5% 0px 0px',
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