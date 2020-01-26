
import DashboardStyleSheet from './dashboard_style-sheet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faPersonBooth, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import { Nav, Form, FormControl, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"

import Vendors from './dashboard-tabs-content/vendors';
import Customers from './dashboard-tabs-content/customers';
import Products from './dashboard-tabs-content/products';
import ProductCategories from './dashboard-tabs-content/product-categories';
import Inventory from './dashboard-tabs-content/inventory';
import Discounts from './dashboard-tabs-content/discount';
import Commision from './dashboard-tabs-content/commision';
import Reports from './dashboard-tabs-content/reports';

const Dashboard = props => (
    <div>
        <Tab.Container id="dashboard-tabs" defaultActiveKey="one">
            {/* Toogle Button Components */}
            <div className="side_tab_toogle_btn" style={{ width: '100%' }}>
                <Form inline>
                    <Button style={DashboardStyleSheet.side_drawer_search_bars} onClick={props.drawerClickHandler}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <FormControl type="text" placeholder="Search" className="mr-sm-6" style={{ flex: '1', margin: '0px 5px' }}></FormControl>
                    <Button style={DashboardStyleSheet.side_drawer_search_bars}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </Form>
            </div>
            {/* End of the Toogle Button Components */}


            <Row style={{ padding: '0px', margin: '0px' }}>

                {/* Tabs Components */}
                <div className="tabs">
                    <Col sm={2} style={{ padding: '0px', maxWidth: '280px', minWidth: '110px' }}>
                        <Nav className="flex-column" variant='tabs'>
                            <Form inline>
                                <FormControl style={DashboardStyleSheet.search_bar} type="text" placeholder="Search" className="mr-sm-6"></FormControl>
                                <Button style={DashboardStyleSheet.search_btn}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </Form>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="one" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faPersonBooth} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Vendors
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="two" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faUsers} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Customers
                                                 </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="three" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faProductHunt} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Products
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="four" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faListAlt} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Categories
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="five" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faWarehouse} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Inventory
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="six" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faTags} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Discounts
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="seven" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faPercent} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Commision
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={DashboardStyleSheet.border}>
                                    <Nav.Link eventKey="eight" style={DashboardStyleSheet.link_color}>
                                        <FontAwesomeIcon icon={faChartBar} style={DashboardStyleSheet.tabs_fontawesome} />
                                        Reports
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </div>
                <div className="tab_content">
                    <Col sm={"auto"} style={{ padding: '5px', margin: '0px', minWidth: '100%' }}>
                        <Tab.Content>
                            <Tab.Pane eventKey="one">
                                <Vendors />
                            </Tab.Pane>
                            <Tab.Pane eventKey="two">
                                <Customers />
                            </Tab.Pane>
                            <Tab.Pane eventKey="three">
                                <Products />
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                                <ProductCategories />
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
                    </Col>
                </div>
                {/* End of the Tabs Components */}
            </Row>
        </Tab.Container>
        <style jsx>
            {`
                .hover:hover {
                    margin-left: 10px;
                    margin-right: -10px;
                    margin-top: -4px;
                    margin-bottom: 4px;
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

export default Dashboard;