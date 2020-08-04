import { Image, Nav, Navbar, Dropdown, NavDropdown, ButtonGroup, Form, Container, DropdownButton, InputGroup, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faBars, faChevronRight, faTachometerAlt, faUpload, faHandsHelping, faUser,
    faChevronDown, faChevronUp, faPowerOff, faListAlt, faWarehouse, faTags, faPercent, faPlusCircle, faChartBar, faCog, faPlus
} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

import VendorDashboard from './dashboard-contents/vendor-dashboard';
import AddNew from './dashboard-contents/product-contents/add-new';

import AllProducts from './dashboard-contents/all-products';
import OutOfStockProducts from './dashboard-contents/out-of-stock-products';

import Discounts from './dashboard-contents/discounts';
import Orders from './dashboard-contents/orders';
import GlobalStyleSheet from '../../../../styleSheet';
import { faUserCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import Router from "next/router";
import AddNewFieldNameModal from "./dashboard-contents/product-contents/add-new-contents/add-new-field-name-model";

const Dashboard = props => {
    let wprapper_Classes = "wrapper";
    if (props.show) {
        wprapper_Classes = "wrapper open";
    }

    const [modalShow, setModalShow] = useState(false)
    const [show_inventory, setShow_inventory] = useState(false)

    function handleShowAddNewFieldModal() {
        setModalShow(true)
    }

    return (
        <div className='vendor_dashboard'>
            <AddNewFieldNameModal
                token={props.token}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Tab.Container id="dashboard-tabs" defaultActiveKey="Dashboard" >
                <Row noGutters>
                    {/* Show/Hide Tabs & Tabs-Content when screen Switches to Large/Medium,Small,Extra-Small Devices*/}
                    <div className={wprapper_Classes} style={styles.wrapper_col}>
                        <Nav className="flex-column" variant="pills" style={{ minWidth: '220px', maxWidth: '220px' }}>
                            <Nav.Item style={styles.image_div}>
                                <p>
                                    <Image src={props.avatar} roundedCircle thumbnail fluid style={styles.image} />
                                    <Nav.Link style={styles.muhalik}> {props.full_name} </Nav.Link>
                                </p>
                            </Nav.Item>

                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Dashboard" style={styles.nav_link} onClick={() => setShow_inventory(false)}>
                                        <FontAwesomeIcon size="xs" icon={faTachometerAlt} style={styles.fontawesome} />
                                        <div className="mr-auto"> Dashboard </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="AddProduct" style={styles.nav_link} onClick={() => setShow_inventory(false)}>
                                        <FontAwesomeIcon size="xs" icon={faPlusCircle} style={styles.fontawesome} />
                                        <div className="mr-auto"> Add Product </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link style={styles.nav_link} onClick={() => setShow_inventory(!show_inventory)}>
                                        <FontAwesomeIcon icon={faWarehouse} style={styles.fontawesome} />
                                        <div className="mr-auto"> Inventory </div>
                                        <FontAwesomeIcon icon={show_inventory ? faChevronUp : faChevronDown} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            {show_inventory ?
                                <div>
                                    <div className="limk_submenue">
                                        <Nav.Link eventKey="AllProducts" style={styles.submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faProductHunt} style={styles.fontawesome} />
                                            <div className="mr-auto"> All Products</div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                    <div className="limk_submenue">
                                        <Nav.Link eventKey="OutOfStock" style={styles.submenu_link} >
                                            <FontAwesomeIcon size="xs" icon={faWarehouse} style={styles.fontawesome} />
                                            <div className="mr-auto"> Out of Stock</div>
                                            <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                        </Nav.Link>
                                    </div>
                                </div>
                                : null
                            }
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Orders" style={styles.nav_link} onClick={() => setShow_inventory(false)}>
                                        <FontAwesomeIcon size="xs" icon={faEdit} style={styles.fontawesome} />
                                        <div className="mr-auto"> Orders </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item onClick={handleShowAddNewFieldModal}>
                                <div className="nav_link">
                                    <Nav.Link style={styles.nav_link} >
                                        <FontAwesomeIcon size="xs" icon={faPlusCircle} style={styles.fontawesome} />
                                        <div className="mr-auto"> Request Custom Field </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="nav_link">
                                    <Nav.Link eventKey="Discounts" style={styles.nav_link} onClick={() => setShow_inventory(false)}>
                                        <FontAwesomeIcon size="xs" icon={faTags} style={styles.fontawesome} />
                                        <div className="mr-auto"> Discount </div>
                                        <FontAwesomeIcon icon={faChevronRight} style={styles.forword_fontawesome} />
                                    </Nav.Link>
                                </div>
                            </Nav.Item>

                        </Nav>
                        {/* End Tabs Side Drawer */}
                    </div>
                    {/* Toolbar & Tabs Contents */}
                    <Col>
                        {/* Toolbar */}
                        <Navbar collapseOnSelect expand="lg" style={styles.navbar} variant="dark" className='p-1 m-0'>
                            {/* Show/Hide bar btn while screen switches to Large to Small,Medium,Extra-Small Devices */}
                            <div className="side_tab_toogle_btn mr-auto" style={styles.toolbar_btn_div}>
                                <Button style={styles.toolbar_btn} onClick={props.drawerClickHandler}>
                                    <FontAwesomeIcon icon={faBars} style={styles.toolbar_fontawesomer} />
                                </Button>
                            </div>
                            {/* Bars Btn to Show/Hide Tabs Sde Drawer in Large Devices */}
                            <div className="wrapper_btn" style={styles.toolbar_btn_div}>
                                <Button style={styles.toolbar_btn} onClick={props.wrapperBtnClickHandler} className='ml-1'>
                                    <FontAwesomeIcon icon={faBars} style={styles.toolbar_fontawesomer} />
                                </Button>
                            </div>
                            <div className="account_settig_dropdown ml-auto">
                                <NavDropdown className='p-0 m-0' title={
                                    <FontAwesomeIcon icon={faCog} style={styles.cog_fontawesome} />
                                } id="nav-dropdown" alignRight>
                                    <NavDropdown.Item onClick={() => Router.push('/user/profile')} className='profile_md_lg'>
                                        <FontAwesomeIcon icon={faUserCircle} className='dropdown_fontawesome' />
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => Router.push('/user/account')} className='profile_xs_sm'>
                                        <FontAwesomeIcon icon={faUserCircle} className='dropdown_fontawesome' />
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='dropdown_item'>
                                        <FontAwesomeIcon icon={faHandsHelping} className='dropdown_fontawesome' />
                                        Help?
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={props.logout} className='dropdown_item'>
                                        <FontAwesomeIcon icon={faPowerOff} className='dropdown_fontawesome' />
                                        Logout
                                </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Navbar>
                        {/* End of Toolbar */}
                        {/* Tab Content for Large Devices */}
                        <div className="tab_content">
                            <Tab.Content style={{ height: `calc(100vh - 65px)`, overflowY: 'auto' }}>
                                <Tab.Pane eventKey="Dashboard">
                                    <VendorDashboard
                                        status={props.user.status}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AddProduct">
                                    <AddNew
                                        {...props}
                                        title={'Vendor Dashboard / Add New'}

                                        subCategoryDisabled={true}
                                        isUpdateProduct={false}
                                        isVariableProduct={false}
                                        productCategories={''}
                                        productSubCategories={''}
                                        productTags={[]}
                                        warrantyType={''}
                                        simple_product_image_link={[]}
                                        variationsArray={[]}
                                        dangerousGoodsArray={[]}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AllProducts">
                                    <AllProducts
                                        user_id={props.user._id}
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="OutOfStock">
                                    <OutOfStockProducts
                                        user_id={props.user._id}
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Orders">
                                    <Orders
                                        user_id={props.user._id}
                                        {...props}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Discounts">
                                    <Discounts />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        {/* End of Tab Content for Large Devices */}
                    </Col>
                    {/* End of the Toolbar & Tabs Components */}
                </Row>
            </Tab.Container>
            <style type="text/css">{`
                .vendor_dashboard .dropdown_item{
                    color: gray;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    padding: 3% 5%;
                }
                .vendor_dashboard .dropdown_item:hover{
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: white;
                }
                .vendor_dashboard .search_form{
                    width: 50%;
                    padding-left: 5%;
                }
                
                .vendor_dashboard .dropdown_fontawesome {
                    margin: 0px 10px 0px 0px;
                    min-width: 18px;
                    min-height: 18px;
                    max-height: 18px;
                    max-width: 18px;
                }
                .vendor_dashboard .profile_md_lg {
                    display: flex;
                    color: gray;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    padding: 3% 5%;
                }
                .vendor_dashboard .profile_md_lg:hover {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    color: white;
                }
                .vendor_dashboard .profile_xs_sm {
                    display: none;
                }
                @media (max-width: 991px){
                    .vendor_dashboard .search_form{
                        width: 80%;
                        padding: 0%;
                    }
                }
                @media (max-width: 767px) {
                    .vendor_dashboard .profile_md_lg {
                        display: none;
                    }
                    .vendor_dashboard .profile_xs_sm {
                        display: flex;
                        color: gray;
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                        padding: 3% 5%;
                    }
                }
                @media (max-width: 575px){
                    .vendor_dashboard .search_form{
                        width: 90%;
                    }
                }
            `}</style>
            <style jsx>
                {`
                .account_settig_dropdown {
                    display: flex;
                    align-items: center;
                }
                .wrapper {
                    display: none;
                }
                .wrapper.open{
                    backgroung:  ${GlobalStyleSheet.admin_primry_color};
                    display: block;
                    height: 100vh;
                    overflow-y: auto;
                }
                .nav_link {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    border-top: 0.5px solid #434556;
                    border-bottom: 0.5px solid #434556;
                    margin: 1.5px 0px;
                }
                .nav_link:hover {
                    background: #30313E;
                }
                .limk_submenue {
                    background: ${GlobalStyleSheet.admin_primry_color};
                    border-top: 0.5px solid #434556;
                    border-bottom: 0.5px solid #434556;
                    margin: 0% 5% 0% 10%;
                }
                .limk_submenue:hover {
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
                    .wrapper_btn {
                        display: none
                    }
                    .wrapper {
                      display: none;
                    }
                    .tab_content {
                        display: none;
                    }
                    .wrapper.open {
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
    wrapper_col: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
    },
    navbar: {
        borderBottom: `1px solid ${GlobalStyleSheet.admin_primry_color}`,
        background: 'white',
        padding: '1% 1%',
    },
    toolbar_btn_div: {
        marginRight: '1%',
    },
    toolbar_btn: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
        border: 'none',
        width: '31px',
        height: '31px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
    },
    toolbar_fontawesomer: {
        color: `${GlobalStyleSheet.body_color}`,
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    submenu_link: {
        color: 'white',
        fontSize: '11px',
        display: 'flex',
        alignItems: 'center',
        height: '40px'
    },
    search_bar: {
        flex: '1',
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
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    },
    forword_fontawesome: {
        color: `${GlobalStyleSheet.body_color}`,
        width: '10px',
        height: '10px',
        maxHeight: '10px',
        maxWidth: '10px',
    },
    cog_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        margin: '0px',
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18px',
    }
}

export default Dashboard;