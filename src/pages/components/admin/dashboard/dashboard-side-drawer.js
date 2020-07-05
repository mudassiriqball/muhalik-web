import { Nav, Tab, Row, Col, Image } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPersonBooth, faTachometerAlt, faChevronRight, faUsers, faChevronUp, faChevronDown,
    faListAlt, faWarehouse, faTags, faPercent, faChartBar, faPlusCircle, faTh
} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import AdminDashboard from './dashboard-contents/admin-dashboard';
import Vendors from './dashboard-contents/vendors';
import Customers from './dashboard-contents/customers';
import Slider from './dashboard-contents/slider'
// Products
import AllProducts from './dashboard-contents/product-contents/all-products';
import AddNew from '../../vendor/dashboard/dashboard-contents/product-contents/add-new';
import ProductFields from './dashboard-contents/product-contents/product-fields'

// Category
import AddCategory from './dashboard-contents/category-contents/add-category'
import AllCategories from './dashboard-contents/category-contents/all-categories'

import Inventory from './dashboard-contents/inventory';
import Discounts from './dashboard-contents/discount';
import Commision from './dashboard-contents/commision';
import Reports from './dashboard-contents/reports';
import GlobalStyleSheet from '../../../../styleSheet';

const DashboardSideDrawer = props => {
    let drawerClasses = "tabs_side_drawer";
    if (props.show) {
        drawerClasses = "tabs_side_drawer open";
    }

    const [show_product, setShow_product] = React.useState(false);
    const [show_category, setShow_category] = React.useState(false);

    return (
        <div>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="Dashboard">
                {/* Side Drawer Components */}
                <div className={drawerClasses}>
                    <Nav className="flex-column" variant="pills">
                        {/* Links */}
                        <Nav.Item style={styles.image_div}>
                            <p>
                                <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={styles.image} />
                                <Nav.Link href="/index" style={styles.muhalik}> {props.user_name} </Nav.Link>
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
                                <Nav.Link eventKey="Vendors" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon size="xs" icon={faPersonBooth} style={styles.fontawesome} />
                                    <div className="mr-auto">Vendors</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="Customers" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                    <div className="mr-auto">Customers</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link eventKey="Slider" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                    <div className="mr-auto">Slider</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>














                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link style={styles.nav_link} onClick={() => setShow_product(!show_product)}>
                                    <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                    <div className="mr-auto"> Products </div>
                                    <FontAwesomeIcon icon={show_product ? faChevronUp : faChevronDown} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        {show_product ?
                            <div>
                                <div className="product_submenu">
                                    <Nav.Link eventKey="AllProducts" onClick={props.click} style={styles.product_submenu_link} >
                                        <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                        <div className="mr-auto"> All Products </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                                <div className="product_submenu">
                                    <Nav.Link eventKey="AddProduct" onClick={props.click} style={styles.product_submenu_link} >
                                        <FontAwesomeIcon size="xs" icon={faPlusCircle} style={styles.fontawesome} />
                                        <div className="mr-auto"> Add Product</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                                <div className="product_submenu">
                                    <Nav.Link eventKey="ProducCategories" onClick={props.click} style={styles.product_submenu_link}>
                                        <FontAwesomeIcon size="xs" icon={faListAlt} style={styles.fontawesome} />
                                        <div className="mr-auto"> Product Categories </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>

                                <div className="product_submenu">
                                    <Nav.Link eventKey="ProductFields" onClick={props.click} style={styles.product_submenu_link}>
                                        <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                        <div className="mr-auto"> Product Fields </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </div>
                            :
                            null
                        }










                        <Nav.Item>
                            <div className="nav_link">
                                <Nav.Link style={styles.nav_link} onClick={() => setShow_category(!show_category)}>
                                    <FontAwesomeIcon size="xs" icon={faTh} style={styles.fontawesome} />
                                    <div className="mr-auto"> Category </div>
                                    <FontAwesomeIcon icon={show_category ? faChevronUp : faChevronDown} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        {show_category ?
                            <div>
                                <div className="product_submenu">
                                    <Nav.Link eventKey="AddCategory" style={styles.product_submenu_link} >
                                        <FontAwesomeIcon size="xs" icon={faPlusCircle} style={styles.fontawesome} />
                                        <div className="mr-auto"> Add Category</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                                <div className="product_submenu">
                                    <Nav.Link eventKey="AllCategories" style={styles.product_submenu_link} >
                                        <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                        <div className="mr-auto"> All Categories</div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </div>
                            : null
                        }






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
                                <Nav.Link eventKey="Discounts" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faTags} style={styles.fontawesome} />
                                    <div className="mr-auto">Discounts</div>
                                    <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className="nav_link" >
                                <Nav.Link eventKey="Commission" onClick={props.click} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faPercent} style={styles.fontawesome} />
                                    <div className="mr-auto">Commission</div>
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
                                <Nav.Link onClick={props.click, props.logout} style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faChartBar} style={styles.fontawesome} />
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
                                <AdminDashboard />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Vendors">
                                <Vendors {...props} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Customers">
                                <Customers {...props} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Slider">
                                <Slider {...props} />
                            </Tab.Pane>
                            {/* Product */}
                            <Tab.Pane eventKey="AllProducts">
                                <AllProducts {...props} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="AddProduct">
                                <AddNew
                                    {...props}
                                    title={' Admin Dashboard / Add New'}
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

                            {/* Category */}
                            <Tab.Pane eventKey="AddCategory">
                                <AddCategory {...props} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="AllCategories">
                                <AllCategories {...props} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="ProductFields">
                                <ProductFields {...props} />
                            </Tab.Pane>
                            {/*  */}
                            <Tab.Pane eventKey="Inventory">
                                <Inventory />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Discounts">
                                <Discounts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Commision">
                                <Commision />
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
                     .show_category {
                        display: none;
                    }
                    .show_category.open {
                        display: flex;
                    }

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