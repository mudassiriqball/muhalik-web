

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

import GlobalStyleSheet from '../../../../styleSheet';
export const styles = {
    background: {
        background: `${GlobalStyleSheet.primry_color}`,
    },

    // Styles for the dashboard.js
    search_bar: {
        width: '75%',
        flex: '7',
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        margin: '2px 2.5px 1px 1.2px',
    },
    search_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        flex: '1',
        border: 'none',
        color: 'white',
        width: '20%',
        float: 'right',
        borderRadius: 'none',
    },
    side_drawer_search_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        margin: '0px 2px',
        color: 'white',
        width: '38px',
        height: '38px',
        maxHeight: '40px',
        maxWidth: '40px',
        border: 'none',
    },
    side_drawer_search_bar: {
        margin: '2px 0px',
        flex: '1',
    },
    border: {
        border: '1px solid white',
        background: `${GlobalStyleSheet.primry_color}`,
        color: 'white',
        borderRadius: '4px'
    },
    link_color: {
        color: `${GlobalStyleSheet.primary_text_color}`,
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        marginRight: '20px',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

const Dashboard = props => (
    <div>
        <Tab.Container id="dashboard-tabs" defaultActiveKey="one">
            {/* Toogle Button Components */}
            <div className="side_tab_toogle_btn" style={{ width: '100%' }}>
                <Form inline>
                    <Button style={styles.side_drawer_search_btn} onClick={props.drawerClickHandler}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <FormControl type="text" placeholder="Search" className="mr-sm-6" style={styles.side_drawer_search_bar}></FormControl>
                    <Button style={styles.side_drawer_search_btn}>
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
                                <FormControl style={styles.search_bar} type="text" placeholder="Search" className="mr-sm-6"></FormControl>
                                <Button style={styles.search_btn}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </Form>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="one" style={styles.link_color}>
                                        <FontAwesomeIcon size="xs" icon={faPersonBooth} style={styles.fontawesome} />
                                        Vendors
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="two" style={styles.link_color}>
                                        <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                        Customers
                                                 </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="three" style={styles.link_color}>
                                        <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                        Products
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="four" style={styles.link_color}>
                                        <FontAwesomeIcon icon={faListAlt} style={styles.fontawesome} />
                                        Categories
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="five" style={styles.link_color}>
                                        <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                        Inventory
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="six" style={styles.link_color}>
                                        <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                        Discounts
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="seven" style={styles.link_color}>
                                        <FontAwesomeIcon icon={faPercent} style={styles.fontawesome} />
                                        Commision
                                                </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={styles.border}>
                                    <Nav.Link eventKey="eight" style={styles.link_color}>
                                        <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
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