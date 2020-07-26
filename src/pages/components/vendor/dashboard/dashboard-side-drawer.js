
import { Nav, Tab, Row, Col, Image } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUpload, faTachometerAlt, faChevronRight, faChevronDown, faChevronUp,
    faPlusCircle, faPowerOff, faListAlt, faWarehouse, faTags, faPercent, faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import VendorDashboard from './dashboard-contents/vendor-dashboard';
import AddNew from './dashboard-contents/product-contents/add-new';
// import AddCategory from './dashboard-contents/product-contents/add-category';
import Inventory from './dashboard-contents/inventory';
import Discounts from './dashboard-contents/discounts';
import Reports from './dashboard-contents/reports';
import BulkUpload from './dashboard-contents/bulk-upload';
import Orders from './dashboard-contents/orders';
import GlobalStyleSheet from '../../../../styleSheet';

const DashboardSideDrawer = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }
    const [show_product, setShow_product] = React.useState(false);

    return (
        <div className='vendor_dashboard_drawer'>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="Dashboard">
                {/* Side Drawer Components */}
                <div className={drawerClasses}>
                    <Nav className="flex-column" variant="pills">
                        <Nav.Item style={styles.image_div}>
                            <p>
                                <Image src={props.avatar} roundedCircle thumbnail fluid style={styles.image} />
                                <Nav.Link style={styles.muhalik}> {props.user_name} </Nav.Link>
                            </p>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="Dashboard" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                    <div className="mr-auto">Dashboard</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="AddProduct" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                    <div className="mr-auto">Add Product</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="Inventory" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                    <div className="mr-auto">Inventory</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="BulkUpload" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faUpload} style={styles.fontawesome} />
                                    <div className="mr-auto">Bulk Upload</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="Discounts" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                    <div className="mr-auto">Discount Coupons</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="Orders" onClick={props.click} style={styles.nav_link} >
                                    <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                    <div className="mr-auto">Orders</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link" >
                                <Nav.Link eventKey="Reports" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
                                    <div className="mr-auto">Reports</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link" >
                                <Nav.Link onClick={props.click, props.logoutClickHandler} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faPowerOff} style={styles.fontawesome} />
                                    <div className="mr-auto">Logout</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                    </Nav>
                </div>

                <div className="tabs_side_drawer_tab_content" >
                    <Col sm={"auto"} style={{ padding: '0px' }}>
                        <Tab.Content>
                            <Tab.Pane eventKey="Dashboard">
                                <VendorDashboard user_status={props.user_status} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="AddProduct">
                                <AddNew
                                    {...props}
                                    isUpdateProduct={false}
                                    productCategories={''}
                                    productSubCategories={''}
                                    productSubSubCategories={''}
                                    subCategoryDisabled={true}
                                    subSubCategoryDisabled={true}
                                    productTags={[]}
                                    warrantyType={''}
                                    simple_product_image_link={[]}
                                    variationsArray={[]}
                                    dangerousGoodsArray={[]}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Inventory">
                                <Inventory {...props} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="BulkUpload">
                                <BulkUpload />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Discounts">
                                <Discounts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Orders">
                                <Orders {...props} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Reports">
                                <Reports />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </div>
                {/* End of the Side Drawer Components */}
            </Tab.Container>
            <style jsx>
                {`
                    .nav_link {
                        color: ${GlobalStyleSheet.body_color};
                        border-top: 0.5px solid #434556;
                        border-bottom: 0.5px solid #434556;
                    }
                    .nav_link:hover {
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
                        overflow-y: auto;                        
                        width: 80%;
                        max-width: 400px;
                        z-index: 200;
                        transform: translateX(-150% );
                        transition: transform 0.5s ease-out;
                    }
                    .tabs_side_drawer.open{
                        transform: translateX(0);
                    }
                    .product_submenu {
                        background: ${GlobalStyleSheet.admin_primry_color};
                        border-top: 0.5px solid #434556;
                        border-bottom: 0.5px solid #434556;
                        margin: 0% 5% 0% 10%;
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
        marginTop: '5px',
        minWidth: '100px',
        maxWidth: '100px',
        minHeight: '100px',
        maxHeight: '100px',
    },
    muhalik: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        fontSize: '14px',
        margin: '0%',
        padding: '1%',
        border: 'none',
        cursor: 'default',
        background: 'none'
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
        width: '17px',
        height: '17px',
        maxHeight: '17px',
        maxWidth: '17px',
    },
    forword_fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        float: 'right',
        width: '8px',
        height: '8px',
        maxHeight: '8px',
        maxWidth: '8px',
    },
}

export default DashboardSideDrawer;