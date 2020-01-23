import AdminLayout from '../layouts/AdminLayout';
import AdminStyleSheet from './adminStyleSheet';
import { Nav, Form, FormControl, Button, Spinner, Tab, Row, Col, } from "react-bootstrap"

import Vendors from './dashboard-components/vendors';
import Customers from './dashboard-components/customers';
import Products from './dashboard-components/products';
import ProductCategories from './dashboard-components/product-categories';
import Inventory from './dashboard-components/inventory';
import Discounts from './dashboard-components/discount';
import Commision from './dashboard-components/commision';
import Reports from './dashboard-components/reports';

const AdminDashboard = () => (
    <div>
        <AdminLayout>
            <Tab.Container id="dashboard-tabs" defaultActiveKey="one">
                <Row style={{ padding: '0px', margin: '0px' }}>
                    <Col sm={2} style={{ padding: '0px', maxWidth: '280px', minWidth: '110px' }}>
                        <Nav className="flex-column" variant="pills">
                            <Form inline>
                                <FormControl style={AdminStyleSheet.search_bar} type="text" placeholder="Search" className="mr-sm-6"></FormControl>
                                <Button style={AdminStyleSheet.search_btn}>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                </Button>
                            </Form>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="one" style={AdminStyleSheet.link_color}>Vendors</Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="two" style={AdminStyleSheet.link_color}> Customers</Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="three" style={AdminStyleSheet.link_color}>Products</Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="four" style={AdminStyleSheet.link_color}>Categories</Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="five" style={AdminStyleSheet.link_color}>Inventory</Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="six" style={AdminStyleSheet.link_color}>Discounts</Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="seven" style={AdminStyleSheet.link_color}>Commision</Nav.Link>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="hover" style={AdminStyleSheet.border}>
                                    <Nav.Link eventKey="eight" style={AdminStyleSheet.link_color}>Reports</Nav.Link>
                                </div>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10} style={{ padding: 'auto' }}>
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
                </Row>
            </Tab.Container>
        </AdminLayout>
        <style jsx>
            {`
                .hover:hover {
                    margin-left: 10px;
                    margin-right: -10px;
                    margin-top: -4px;
                    margin-bottom: 4px;
                }
            `}
        </style>
    </div>
)

export default AdminDashboard;