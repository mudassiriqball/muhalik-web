
import product_size_options from '../../../../../../../sdk/consts/product-size-options'
import product_color_options from '../../../../../../../sdk/consts/product-color-options'

import { Form, Col, Row, Card, InputGroup, Button, Toast, Tab, Nav, Tabs, Accordion, Spinner, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faKey, faSlidersH, faStoreAlt, faTruck, faTools, faDollarSign, faListAlt, faArrowAltCircleDown,
} from '@fortawesome/free-solid-svg-icons';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactSelectMaterialUi from "react-select-material-ui";
import GlobalStyleSheet from '../../../../../../../styleSheet';
import MuhalikConfig from '../../../../../../../sdk/muhalik.config';

const ProductData = props => {
    let variations = true;
    if (props.attributesArray == '') {
        variations = false;
    } else {
        variations = true;
    }

    // let array = Object.assign([], props.variationsArray);
    // let len;

    // array.forEach(element => {
    //     len = element.items.length;
    //     element.items.splice((len - 1), 1)
    //     element.items.splice((len - 2), 1)
    // });


    return (
        <Card style={styles.card}>
            <Card.Header style={styles.card_header}>
                <Row noGutters style={{ display: 'flex', alignItems: 'center' }}>
                    <Col lg={3} md={3} sm={3} xs={4}>
                        Product Data
                        </Col>
                    <Col lg={3} md={3} sm={5} xs={8}>
                        <Form.Control
                            as="select"
                            name="productType"
                            value={props.values.product_type}
                            onChange={props.onChange, props.productTypeHandler}
                        >
                            <option value='simple-product'> Simple Product </option>
                            <option value="variable-prouct"> Variable Product </option>
                        </Form.Control>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body style={{ padding: '0.5%', margin: '0px' }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="Inventory">
                    <Row style={{ margin: '0px' }} noGutters>
                        <Col lg={2} md={2} sm={2} xs={2} style={{ background: `${GlobalStyleSheet.admin_primry_color}` }}>
                            <Nav variant="pills" className="flex-column" style={{ margin: '0px' }}>

                                <Nav.Item>
                                    <div className="nav_link">
                                        <Nav.Link eventKey="Inventory" style={styles.nav_link}>
                                            <FontAwesomeIcon size="xs" icon={faStoreAlt} style={styles.product_fontawesome} />
                                            <div> Inventory </div>
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>

                                {!props.isVariableProduct ?
                                    <Nav.Item>
                                        <div className="nav_link">
                                            <Nav.Link eventKey="General" style={styles.nav_link}>
                                                <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.product_fontawesome} />
                                                <div> General </div>
                                            </Nav.Link>
                                        </div>
                                    </Nav.Item>
                                    :
                                    <>
                                        <Nav.Item>
                                            <div className="nav_link">
                                                <Nav.Link eventKey="Attributes" style={styles.nav_link}>
                                                    <FontAwesomeIcon size="xs" icon={faListAlt} style={styles.product_fontawesome} />
                                                    <div> Attributes </div>
                                                </Nav.Link>
                                            </div>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <div className="nav_link">
                                                <Nav.Link eventKey="Variations" style={styles.nav_link}>
                                                    <FontAwesomeIcon size="xs" icon={faListAlt} style={styles.product_fontawesome} />
                                                    <div> Variations </div>
                                                </Nav.Link>
                                            </div>
                                        </Nav.Item>
                                    </>
                                }

                                <Nav.Item>
                                    <div className="nav_link">
                                        <Nav.Link eventKey="Shipping" style={styles.nav_link}>
                                            <FontAwesomeIcon size="xs" icon={faTruck} style={styles.product_fontawesome} />
                                            <div> Shipping </div>
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>

                                <Nav.Item>
                                    <div className="nav_link">
                                        <Nav.Link eventKey="Advanced" style={styles.nav_link}>
                                            <FontAwesomeIcon size="xs" icon={faTools} style={styles.product_fontawesome} />
                                            <div> Advanced </div>
                                        </Nav.Link>
                                    </div>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <div className="nav_link">
                                        <Nav.Link eventKey="Commission" style={styles.nav_link}>
                                            <FontAwesomeIcon size="xs" icon={faDollarSign} style={styles.product_fontawesome} />
                                            <div> Commission </div>
                                        </Nav.Link>
                                    </div>
                                </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} style={{ padding: '2%' }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="General">

                                    {props.isVariableProduct ? null :
                                        <>
                                            <Form.Row>
                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Product Price<span>*</span></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="number"
                                                            size="sm"
                                                            placeholder="Enter Product Price"
                                                            name="product_price"
                                                            value={props.values.product_price}
                                                            onChange={props.onChange}
                                                            isInvalid={props.touched.product_price && props.errors.product_price}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {props.errors.product_price}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Product in Stock</Form.Label>
                                                    <Form.Control type="number"
                                                        size="sm"
                                                        name="product_in_stock"
                                                        value={props.values.product_in_stock}
                                                        onChange={props.onChange}
                                                        isInvalid={props.touched.product_in_stock && props.errors.product_in_stock}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {props.errors.product_in_stock}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Brand Name</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="text"
                                                            size="sm"
                                                            placeholder="Enter Brand Name"
                                                            name="product_brand_name"
                                                            value={props.values.product_brand_name}
                                                            onChange={props.onChange}
                                                            isInvalid={props.touched.product_brand_name && props.errors.product_brand_name}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {props.errors.product_brand_name}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>
                                            {/* <Form.Row>
                                                <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Product Size</Form.Label>
                                                    <CreatableSelect
                                                        onChange={props.productSizeChangeHandler}
                                                        options={product_size_options}
                                                        value={props.size}
                                                        placeholder="Select/Enter Size"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Product Color</Form.Label>
                                                    <CreatableSelect
                                                        onChange={props.productColorChangeHandler}
                                                        options={product_color_options}
                                                        value={props.color}
                                                        placeholder="Select/Enter Color"
                                                    />
                                                </Form.Group>
                                            </Form.Row> */}
                                            <Form.Row>
                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Product Warranty (months) </Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="number"
                                                            size="sm"
                                                            placeholder="Enter Product Warranty"
                                                            name="product_warranty"
                                                            value={props.values.product_warranty}
                                                            onChange={props.onChange}
                                                            isInvalid={props.touched.product_warranty && props.errors.product_warranty}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {props.errors.product_warranty}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}> Warranty Type </Form.Label>
                                                    <InputGroup>
                                                        <InputGroup.Prepend>
                                                            <Form.Control
                                                                as="select"
                                                                name="warranty_type"
                                                                size="sm"
                                                                value={props.values.warranty_type}
                                                                onChange={props.onChange}
                                                                isInvalid={props.touched.warranty_type && props.errors.warranty_type}
                                                            >
                                                                <option>Waranty Type</option>
                                                                <option> No Warranty </option>
                                                                <option> Brand Warranty </option>
                                                                <option> Local Warranty </option>
                                                                <option> Local Seller Warranty </option>
                                                                <option> Non-Local Warranty </option>
                                                                <option> Internationsl Warranty </option>
                                                                <option> Internationsl Seller Warranty </option>
                                                                <option> International Manufacturer Warranty </option>

                                                            </Form.Control>
                                                        </InputGroup.Prepend>
                                                        <Form.Control.Feedback type="invalid">
                                                            {props.errors.product_warranty}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                    <Form.Label style={styles.label}>Product Discount</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="number"
                                                            size="sm"
                                                            placeholder="Enter Discount on on Product(%)"
                                                            name="product_discount"
                                                            value={props.values.product_discount}
                                                            onChange={props.onChange}
                                                            isInvalid={props.touched.product_discount && props.errors.product_discount}
                                                        />
                                                        <InputGroup.Prepend>
                                                            <Button variant='primary' size="sm">%</Button>
                                                        </InputGroup.Prepend>
                                                        <Form.Control.Feedback type="invalid">
                                                            {props.errors.product_discount}
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>
                                        </>
                                    }
                                </Tab.Pane>




                                <Tab.Pane eventKey="Inventory">
                                    <Form.Row>
                                        <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
                                            <Form.Label style={styles.label}>Product SKU</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Discount on on Product(%)"
                                                    name="sku"
                                                    value={props.values.sku}
                                                    onChange={props.onChange}
                                                    isInvalid={props.touched.sku && props.errors.sku}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {props.errors.sku}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                </Tab.Pane>




                                <Tab.Pane eventKey="Shipping">
                                    <Form.Group as={Row} noGutters>
                                        <Form.Label style={styles.label}>Weight (kg)</Form.Label>
                                        <Form.Control type="number"
                                            name="product_weight"
                                            size="sm"
                                            value={props.values.product_weight}
                                            onChange={props.onChange}
                                            isInvalid={props.touched.product_weight && props.errors.product_weight}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {props.errors.product_weight}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Row} noGutters>
                                        <Form.Label style={styles.label}>Dimensions (cm)</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <Form.Control
                                                    type="number"
                                                    name="dimension_length"
                                                    size="sm"
                                                    value={props.values.dimension_length}
                                                    onChange={props.onChange}
                                                    placeholder="Length"
                                                    isInvalid={props.touched.dimension_length && props.errors.dimension_length}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {props.errors.dimension_length}
                                                </Form.Control.Feedback>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="number"
                                                name="dimension_width"
                                                size="sm"
                                                value={props.values.dimension_width}
                                                placeholder="Width"
                                                onChange={props.onChange}
                                                isInvalid={props.touched.dimension_width && props.errors.dimension_width}
                                            />
                                            <InputGroup.Prepend>
                                                <Form.Control.Feedback type="invalid">
                                                    {props.errors.dimension_width}
                                                </Form.Control.Feedback>
                                                <Form.Control
                                                    type="number"
                                                    name="dimension_height"
                                                    size="sm"
                                                    value={props.values.dimension_height}
                                                    placeholder="Height"
                                                    onChange={props.onChange}
                                                    isInvalid={props.touched.dimension_height && props.errors.dimension_height}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {props.errors.dimension_height}
                                                </Form.Control.Feedback>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
                                            <Form.Label style={styles.label}>Product Shipping Charges</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Product Shipping Charges"
                                                    name="shipping_charges"
                                                    value={props.values.shipping_charges}
                                                    onChange={props.onChange}
                                                    isInvalid={props.touched.shipping_charges && props.errors.shipping_charges}
                                                />
                                                <InputGroup.Prepend>
                                                    <Button variant='primary' size="sm">Riyal</Button>
                                                </InputGroup.Prepend>
                                                <Form.Control.Feedback type="invalid">
                                                    {props.errors.shipping_charges}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
                                            <Form.Label style={styles.label}>Product Handling Fee</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Product Handling Fee"
                                                    name="handling_fee"
                                                    value={props.values.handling_fee}
                                                    onChange={props.onChange}
                                                    isInvalid={props.touched.handling_fee && props.errors.handling_fee}
                                                />
                                                <InputGroup.Prepend>
                                                    <Button variant='primary' size="sm">Riyal</Button>
                                                </InputGroup.Prepend>
                                                <Form.Control.Feedback type="invalid">
                                                    {props.errors.handling_fee}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                </Tab.Pane>





                                <Tab.Pane eventKey="Attributes">
                                    <Form.Row >
                                        <Form.Group as={Col} lg={5} md={5} sm={12} xs={12}>
                                            <Form.Label style={styles.label}>Field Name</Form.Label>
                                            <Form.Control
                                                as="select"
                                                size="sm"
                                                value={props.name}
                                                onChange={props.attributeNameHandler}
                                            >
                                                <option>Select</option>
                                                <option>Aaaa</option>
                                                <option>Bbb</option>
                                                <option>Ccc</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} lg={7} md={7} sm={12} xs={12}>
                                            <Form.Label style={styles.label}>Field Value </Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    size="sm"
                                                    placeholder="Enter Value"
                                                    name="sku"
                                                    value={props.value}
                                                    onChange={props.attributeValueHandler}
                                                />
                                                <Button variant="outline-primary" size="sm" style={{ marginLeft: '1%' }}
                                                    onClick={props.addAttributeHandler}>Add</Button>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Label style={styles.label}>
                                            <span style={{ color: 'red' }}>{props.error}</span>
                                        </Form.Label>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Label style={styles.label} className="mr-auto">For Multiple Values add | between values</Form.Label>
                                        <Button variant="outline-primary" size="sm"
                                            onClick={props.saveAttributesHandler}>Save Attributes</Button>
                                    </Form.Row>
                                    <hr />
                                    {/* <Card style={{ background: 'lightGray', margin: '0.5% 1%' }}> */}

                                    {props.attributesArray.map((data, index) =>
                                        <Form.Row style={{ padding: '0%' }} key={index}>
                                            <Form.Group as={Col} lg={5} md={5} sm={12} xs={12}>
                                                <Form.Control
                                                    as="select"
                                                    size="sm"
                                                    value={data.productAttributeName}
                                                    onChange={() => data.productAttributeName}
                                                >
                                                    <option>Aaaa</option>
                                                    <option>Bbb</option>
                                                    <option>Ccc</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={7} md={7} sm={12} xs={12}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        size="sm"
                                                        placeholder="Enter Value"
                                                        name="sku"
                                                        value={data.productAttributeValue}
                                                        onChange={() => data.productAttributeValue}
                                                    />
                                                    <Button variant="outline-primary" size="sm" style={{ marginLeft: '1%' }}
                                                        onClick={() => props.deleteAttributeHandler(index)}> delete</Button>
                                                </InputGroup>
                                            </Form.Group>
                                            {/* <Button variant="outline-primary" size="sm" block style={{ width: '100px' }}
                                                    onClick={() => props.update(index, data.fieldName, data.fieldValue)}> update</Button> */}


                                        </Form.Row>
                                    )}
                                </Tab.Pane>



                                <Tab.Pane eventKey="Variations">
                                    {variations ?
                                        <>
                                            <Form.Label>
                                                <Form.Check
                                                    name="not_specified"
                                                    label="Same Price for all"
                                                    style={styles.label}
                                                    onChange={props.priceCheckboxHandler}
                                                    id="not_specified"
                                                />
                                            </Form.Label>

                                            {props.variationsArray.map((data, index) =>
                                                <div key={index}>
                                                    <Accordion>

                                                        <Row noGutters style={{ width: '100%' }}>
                                                            {data.items.map((d, i) =>
                                                                <Form.Group as={Col} lg={3} md={3} sm={6} xs={6} key={i}>
                                                                    <Form.Control
                                                                        type="text"
                                                                        size="sm"
                                                                        placeholder="Enter Value"
                                                                        name="sku"
                                                                        value={d.value}
                                                                        onChange={() => data.productAttributeValue}
                                                                    />
                                                                </Form.Group>
                                                            )}
                                                            <div className="mr-auto"></div>
                                                            <Accordion.Toggle as={Form.Group} eventKey="0">
                                                                <Button variant="outline-primary" size="sm">
                                                                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
                                                                </Button>
                                                            </Accordion.Toggle>
                                                            <Form.Group style={{ float: 'right' }}>
                                                                <Button variant="outline-primary" size="sm" style={{ marginLeft: '1%' }}
                                                                    onClick={() => props.deleteVariationHandler(index)}> delete</Button>
                                                            </Form.Group>
                                                        </Row>

                                                        <Accordion.Collapse eventKey="0">
                                                            <Form.Row>
                                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                                    <Form.Label style={styles.label}>Product Price<span>*</span></Form.Label>
                                                                    <InputGroup>
                                                                        <Form.Control
                                                                            type="number"
                                                                            size="sm"
                                                                            placeholder="Enter Product Price"
                                                                            name="product_price"
                                                                            value={data.price}
                                                                            onChange={(e) => props.productPriceHandler(e, index)}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">
                                                                        </Form.Control.Feedback>
                                                                    </InputGroup>
                                                                </Form.Group>
                                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                                    <Form.Label style={styles.label}>Product in Stock</Form.Label>
                                                                    <Form.Control type="number"
                                                                        size="sm"
                                                                        name="product_in_stock"
                                                                        value={data.stock}
                                                                        onChange={(e) => props.productStockHandler(e, index)}
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                    </Form.Control.Feedback>
                                                                </Form.Group>
                                                                <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
                                                                    <Form.Label style={styles.label}>Image Link</Form.Label>
                                                                    <Form.Control type="text"
                                                                        size="sm"
                                                                        name="image_link"
                                                                        value={data.image_link}
                                                                        onChange={(e) => props.productImageLinkHandler(e, index)}
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">
                                                                    </Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Form.Row>
                                                        </Accordion.Collapse>
                                                        {/* <Button variant="outline-primary" size="sm" block style={{ width: '100px' }}
                                                    onClick={() => props.update(index, data.fieldName, data.fieldValue)}> update</Button> */}
                                                    </Accordion>
                                                </div>
                                            )}
                                        </>
                                        :
                                        <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
                                            <Form.Label>Please First add Attributes from Attributes Tab</Form.Label>
                                        </div>
                                    }
                                </Tab.Pane>


                                <Tab.Pane eventKey="Advanced">
                                    <Form.Row >
                                        <Form.Label style={styles.label}>Purchase Note</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                size="sm"
                                                placeholder="Enter Purchase Notes"
                                                name="purchase_note"
                                                value={props.values.purchase_note}
                                                onChange={props.onChange}
                                                isInvalid={props.touched.purchase_note && props.errors.purchase_note}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {props.errors.purchase_note}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Row>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="Commission">
                                    Commission
                                    </Tab.Pane> */}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Card.Body>
            <style jsx>
                {`
                    span: {
                        color: red
                    }
                `}
            </style>
        </Card>
    )
}

const styles = {
    title_row: {
        borderBottom: '1px solid gray',
        padding: '1.5% 4%'
    },
    title_fontawesome: {
        color: 'gray',
        marginRight: '3%',
        width: '26px',
        height: '26px',
        maxHeight: '26px',
        maxWidth: '26px',
    },
    title: {
        color: 'gray'
    },

    nav_link: {
        color: 'white',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        height: '45px',
    },


    row: {
        margin: '2%',
        padding: '0%'
    },
    card: {
        width: '100%',
    },
    card_header: {
        alignItems: 'center',
        // color: '#6A7074',
        fontSize: '15px',
        background: 'lightgray'
    },
    buttons: {
        background: `${GlobalStyleSheet.primry_color}`,
        border: 'none',
        fontSize: '10px',
    },
    submit_btn: {
        background: `${GlobalStyleSheet.primry_color}`,
        marginTop: '3%',
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    term_condition_label: {
        width: '100%',
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
        paddingTop: '-10px',
        marginTop: '-10px',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
    product_fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        marginRight: '10%',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
    variations_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '10%',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default ProductData;