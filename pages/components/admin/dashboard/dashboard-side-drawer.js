import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import { Nav, Tab, Row, Col, } from "react-bootstrap"

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
    side_drawer_search_bars: {
        background: `${GlobalStyleSheet.primry_color}`,
        margin: '0px 1px',
        color: 'white',
        width: '17%',
        maxHeight: '40px',
        maxWidth: '40px',
        border: 'none',
        borderRadius: 'none',
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
        width: '10%',
        maxHeight: '22px',
        maxWidth: '22px',
    },
}

const DashboardSideDrawer = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }
    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="one">
                <Row style={{ padding: '0px', margin: '0px' }}>
                    {/* Side Drawer Components */}
                    <div className={drawerClasses}>
                        <div>
                            <Nav className="flex-column" variant="tabs">
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="one" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faPersonBooth} style={styles.fontawesome} />
                                            Vendors
                                                </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="two" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                            Customers
                                            </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="three" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                            Products
                                            </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="four" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faListAlt} style={styles.fontawesome} />
                                            Categories
                                            </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="five" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                            Inventory
                                            </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="six" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                            Discounts
                                            </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="seven" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faPercent} style={styles.fontawesome} />
                                            Commision
                                            </Nav.Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover" style={styles.border}>
                                        <Nav.Link eventKey="eight" onClick={props.click} style={styles.link_color}>
                                            <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
                                            Reports
                                            </Nav.Link>
                                    </div>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>

                    <div className="tabs_side_drawer_tab_content">
                        <Col sm={"auto"} style={{ padding: '0px' }}>
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
                    {/* End of the Side Drawer Components */}

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
                    .tabs_side_drawer {
                        height: 100%;
                        background: white;
                        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
                        position: fixed;
                        top: 1px;
                        bottom: 1px;
                        left: 0;
                        width: 60%;
                        max-width: 400px;
                        z-index: 200;
                        transform: translateX(-100% );
                        transition: transform 0.5s ease-out;
                    }
                    .tabs_side_drawer.open{
                        transform: translateX(0);
                    }
                    @media (min-width: 992px) {
                        .tabs_side_drawer {
                            display: none;
                        }
                        .tabs_side_drawer_tab_content {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default DashboardSideDrawer;