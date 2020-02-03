import { Nav, Form, FormControl, InputGroup, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faChevronRight, faTachometerAlt, faPersonBooth, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import Vendors from './dashboard-tabs-content/vendors';
import Customers from './dashboard-tabs-content/customers';
import Products from './dashboard-tabs-content/products';
import ProductCategories from './dashboard-tabs-content/product-categories';
import Inventory from './dashboard-tabs-content/inventory';
import Discounts from './dashboard-tabs-content/discount';
import Commision from './dashboard-tabs-content/commision';
import Reports from './dashboard-tabs-content/reports';

import GlobalStyleSheet from '../../../../styleSheet';

const Dashboard = props => {
    return (
        <div>

            {/* Toogle Button Components */}
            <div className="side_tab_toogle_btn" style={{ width: '100%' }}>
                <Form inline style={{ margin: '2px 3px' }}>
                    <InputGroup.Prepend>
                        <Button style={styles.search_btn} onClick={props.drawerClickHandler}>
                            <FontAwesomeIcon icon={faBars} style={styles.search_fontawesome} />
                        </Button>
                    </InputGroup.Prepend>
                    <Form.Control
                        style={styles.search_bar}
                        className="mr-sm-6"
                        type="text"
                        placeholder="Search here"
                        aria-describedby="side_drawer_searchbar"
                        name="side_drawer_searchbar"
                    />
                    <InputGroup.Prepend>
                        <Button id="side_drawer_searchBtn" style={styles.search_btn}>
                            <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                        </Button>
                    </InputGroup.Prepend>
                </Form>
            </div>
            {/* End of the Toogle Button Components */}

            <Tab.Container id="dashboard-tabs" defaultActiveKey="zero" >
                <Row>
                    {/* Tabs Components */}
                    <Col lg={3} md={3} style={{ maxWidth: '310px' }}>
                        <div className="tabs" style={styles.body}>
                            <Nav className="flex-column" variant="pills">
                                <Form.Row style={{ margin: '5px' }}>
                                    <Form.Control
                                        style={{ flex: '3' }}
                                        type="text"
                                        placeholder="Search here"
                                        aria-describedby="searchBtn"
                                        name="searchBtn"
                                    />
                                    <Button id="searchBtn" style={styles.search_btn}>
                                        <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                                    </Button>
                                </Form.Row>

                                {/* Links */}
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
                                <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="three" style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                            Products
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
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
                    <Col>
                        <div className="tab_content">
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
                        </div>
                    </Col>
                    {/* End of the Tabs Components */}
                </Row>
            </Tab.Container>
            <style type="text/css">
                {`
                .hover {
                    // margin: 2px 0px;
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: ${GlobalStyleSheet.body_color};
                }
                .hover:hover {
                    background: #30313E;
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
    body: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
    },
    row: {
        padding: '0px',
        margin: '0px',
    },
    search_btn: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
        border: 'none',
        float: 'right',
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
        marginRight: '10%',
        float: 'right',
        width: '14px',
        height: '14px',
        maxHeight: '14px',
        maxWidth: '14px',
    },
    search_fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default Dashboard;