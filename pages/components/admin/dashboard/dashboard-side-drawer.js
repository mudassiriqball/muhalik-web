import { Nav, Tab, Row, Col, Image } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth, faTachometerAlt, faChevronRight, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
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


const DashboardSideDrawer = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }
    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="zero">

                {/* Side Drawer Components */}
                <div className={drawerClasses}>
                    <p>
                        <Image src="/static/muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '25%', maxWidth: '150px' }} />
                        <label>Mr.X</label>
                    </p>
                    <Nav className="flex-column" variant="pills">
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="zero" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faTachometerAlt} style={styles.fontawesome} />
                                    Dashboard
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="one" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faPersonBooth} style={styles.fontawesome} />
                                    Vendors
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="two" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                    Customers
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="three" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                    Products
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="four" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faListAlt} style={styles.fontawesome} />
                                    Categories
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="five" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                    Inventory
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="six" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                    Discounts
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="seven" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faPercent} style={styles.fontawesome} />
                                    Commision
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover" >
                                <Nav.Link eventKey="eight" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
                                    Reports
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                    </Nav>
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
            </Tab.Container>
            <style jsx>
                {`
                    .hover:hover {
                        background: #30313E;
                    }
                    .tabs_side_drawer {
                        height: 100%;
                        background: ${GlobalStyleSheet.admin_primry_color};
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
                    p {
                        text-align: center; 
                        padding: 5% 0px;
                        border-bottom: 1px solid gray;
                    }
                    label {
                        margin-top: 4%;
                        color: ${GlobalStyleSheet.body_color};
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

const styles = {
    tab_link: {
        color: '#cccccc',
        fontSize: '14px',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        margin: '0px 8% 0px 5%',
        width: '17px',
        height: '17px',
        maxHeight: '17px',
        maxWidth: '17px',
    },
    forword_fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        margin: '8px 5% 0px 0px',
        float: 'right',
        width: '8px',
        height: '8px',
        maxHeight: '8px',
        maxWidth: '8px',
    },
}

export default DashboardSideDrawer;