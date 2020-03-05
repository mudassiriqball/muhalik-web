import { Nav, Tab, Row, Col, Image } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth, faTachometerAlt, faChevronRight, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
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


const DashboardSideDrawer = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }
    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="one">
                {/* Side Drawer Components */}
                <div className={drawerClasses}>
                    <Nav className="flex-column" variant="pills">
                        {/* Links */}
                        <Nav.Item style={styles.image_div}>
                            <p>
                                <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={styles.image} />
                                <Nav.Link href="/index" style={styles.muhalik}> {props.token} </Nav.Link>
                            </p>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover">
                                <Nav.Link eventKey="zero" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                    Dashboard
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover">
                                <Nav.Link eventKey="one" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon size="xs" icon={faPersonBooth} style={styles.fontawesome} />
                                    Vendors
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover">
                                <Nav.Link eventKey="two" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                        Customers
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        {/* <Nav.Item>
                                    <div className="hover">
                                        <Nav.Link eventKey="three" onClick={props.click} style={styles.tab_link}>
                                            <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
                                            Products
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </Nav.Item> */}
                        <Nav.Item>
                            <div className="hover">
                                <Nav.Link eventKey="four" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faListAlt} style={styles.fontawesome} />
                                    Categories
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover">
                                <Nav.Link eventKey="five" onClick={props.click} style={styles.tab_link}>
                                    <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                    Inventory
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="hover">
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
                                    Commission
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

                <div className="tabs_side_drawer_tab_content" >
                    <Col sm={"auto"} style={{ padding: '0px' }}>
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
                    </Col>
                </div>
                {/* End of the Side Drawer Components */}
            </Tab.Container>
            <style jsx>
                {`
                    .hover {
                        color: ${GlobalStyleSheet.body_color};
                        border-top: 0.5px solid #434556;
                        border-bottom: 0.5px solid #434556;
                    }
                    .hover:hover {
                        background: #30313E;
                    }
                    .tabs_side_drawer {
                        height: 100%;
                        background: ${GlobalStyleSheet.admin_primry_color};
                        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
                        position: fixed;
                        top: 0;
                        bottom: 1px;
                        left: 0;
                        width: 80%;
                        max-width: 400px;
                        z-index: 200;
                        transform: translateX(-150% );
                        transition: transform 0.5s ease-out;
                    }
                    .tabs_side_drawer.open{
                        transform: translateX(0);
                    }
                    p {
                        text-align: center; 
                        margin: 0px;
                        padding: 0px;
                    }
                    label {
                        margin-top: 4%;
                        color: ${GlobalStyleSheet.body_color};
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
    image_div: {
        background: 'white',
        width: '100%',
        borderRight: '0.5px solid gray',
        padding: '2%'
    },
    image: {
        width: '80px'
    },
    muhalik: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        padding: '0px',
        margin: '0px'
    },
    // tab_link: {
    //     color: '#cccccc',
    //     fontSize: '14px',
    //     paddingTop: '2%',
    //     paddingBottom: '2%',
    // },
    tab_link: {
        color: 'white',
        fontSize: '14px',
        paddingTop: '5%',
        paddingBottom: '5%',
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