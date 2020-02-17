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

const DashboardTabs = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }

    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="zero" style={styles.row}>
                <Row style={styles.row}>
                    {/* Tabs Components */}
                    <div className={drawerClasses}>
                        <Col lg={3} md={3} style={{ maxWidth: '300px', padding: '0px' }}>
                            <div className="tabs" style={styles.body}>
                                <Nav className="flex-column" variant="pills">
                                    {/* Links */}
                                    <Nav.Item>
                                        <Row style={styles.image_div}>
                                            <Col>
                                                <Image className="text-center" src="/static/a.png" fluid style={styles.image} />
                                            </Col>
                                            <Col>
                                                <Nav.Link style={styles.muhalik}>
                                                    Muhalik
                                            </Nav.Link>
                                            </Col>
                                        </Row>
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
                            </div>
                        </Col>
                    </div>
                    <Col style={styles.row}>
                        <Navbar collapseOnSelect expand="lg" style={styles.navbar} variant="dark">
                            <div className="side_tab_toogle_btn mr-auto">
                                <Button className="mr-auto" style={styles.buttons} onClick={props.drawerClickHandler}>
                                    <FontAwesomeIcon icon={faBars} style={styles.search_fontawesome} />
                                </Button>
                            </div>
                            <div className="tabs mr-sm-4">
                                <Button className="mr-auto" style={styles.buttons} onClick={props.ClickHandler}>
                                    <FontAwesomeIcon icon={faBars} style={styles.search_fontawesome} />
                                </Button>
                            </div>
                            <Form inline className="mr-auto">
                                <Form.Control
                                    style={styles.search_bar}
                                    className="mr-xs-2"
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
                            <Dropdown as={ButtonGroup} >
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
                        </Navbar>
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
                    </Col>
                    {/* End of the Tabs Components */}
                </Row>
            </Tab.Container>
            <style jsx>
                {`
                .tabs_side_drawer {
                    display: none;
                }
                .tabs_side_drawer.open{
                    display: block;
                }
                .hover {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: ${GlobalStyleSheet.body_color};
                }
                .hover:hover {
                    background: #30313E;
                }
                .side_tab_toogle_btn {
                    margin: 1% 0%
                }
                @media (max-width: 991px) {
                    .tabs {
                      display: none;
                    }
                    .tab_content {
                        display: none;
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
        marginRight: '1px',
        padding: '30px 10px'
    },
    image: {
        width: '100px'
    },
    muhalik: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        fontSize: '28px',
        fontWeight: 'bold'
    },
    body: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
    },
    navbar: {
        borderBottom: `1px solid ${GlobalStyleSheet.admin_primry_color}`,
        background: 'white',
        padding: '2% 2%',
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
        color: '#cccccc',
        fontSize: '14px',
        paddingTop: '8%',
        paddingBottom: '8%',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        margin: '0px 8% 0px 12%',
        width: '17px',
        height: '17px',
        maxHeight: '17px',
        maxWidth: '17px',
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
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    dropDown_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        margin: '0px 20px 0px -5px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    }
}

export default DashboardTabs;