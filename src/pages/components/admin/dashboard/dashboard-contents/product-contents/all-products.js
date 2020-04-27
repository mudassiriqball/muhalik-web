import React, { Component } from 'react';
import { Row, Table, Button, Nav, Col, Image, Card, Form, InputGroup, Accordion } from 'react-bootstrap'
import axios from 'axios'

// import ViewProduct from './all-products-contents/view-product'
import Link from 'next/link'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowLeft, faTimes, faChevronLeft, faChevronRight, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import CardAccordion from '../../../../card_accordion';
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../../../styleSheet'
import TitleRow from '../../../../title-row';
class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsArray: [],
            viewProduct: false,
            data: {},
        }
    }
    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products/';
        try {
            const response = await axios.get(url);
            console.log('data:', response.data.data.docs)
            this.setState({ productsArray: response.data.data.docs })
        } catch (error) {
            console.log('Data Fetching Eror:', error);
        }
    }

    handleViewProduct(index) {
        // let dataa;
        // Simple Product
        // if (i == -1) {
        this.setState({ data: this.state.productsArray[index], viewProduct: true })

        // } else { // Variable Product
        // dataa = Object.assign([], this.state.productsArray[index])
        // dataa.product_variations = dataa.product_variations[i];
        //     this.setState({ data: this.state.productsArray[index], viewProduct: true })
        // }
        // console.log('datadata:', data)
        // Router.push({
        //     pathname: '/view-product',
        //     query: { data: data },
        // }, '/vendor/view-product?' + data.product_name);
    }

    isVariableProduct(element) {
        if (element.product_type != "simple-product") {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <>
                {this.state.viewProduct ?
                    <ViewProduct
                        data={this.state.data}
                        back={() => this.setState({ viewProduct: false, data: {} })}
                        isVariableProduct={this.state.data.product_type != "simple-product"}
                    />
                    :
                    <>
                        <TitleRow icon={faPlus} title={' Vendor Dashboard / All Products'} />

                        <Row noGutters style={{ margin: '2%', background: 'white' }}>
                            <Table responsive bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>
                                            <Form.Check type="checkbox" />
                                        </th>
                                        <th style={{ textAlign: 'center' }}>Name</th>
                                        <th style={{ textAlign: 'center' }}>SKU</th>
                                        <th style={{ textAlign: 'center' }}>Stock</th>
                                        <th style={{ textAlign: 'center' }}>Price</th>
                                        <th style={{ textAlign: 'center' }}>Categories</th>
                                        <th style={{ textAlign: 'center' }}>Tags</th>
                                        <th style={{ textAlign: 'center' }}>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.productsArray && this.state.productsArray.map((element, index) =>
                                        <>
                                            {this.isVariableProduct(element) ?
                                                <tr key={index}>
                                                    <td align="center" style={styles.label}><Form.Check type="checkbox" /></td>
                                                    <td className="td">
                                                        {element.product_name}
                                                        <div className="mr-auto"></div>
                                                        <Nav.Link style={styles.nav_link} onClick={() => this.handleViewProduct(index)}> View </Nav.Link>
                                                        <Nav.Link style={styles.nav_link}>Edit</Nav.Link>
                                                        <Nav.Link style={styles.nav_link}>Delete</Nav.Link>
                                                    </td>
                                                    <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
                                                    <td align="center" style={styles.label}>{element.product_in_stock}</td>
                                                    <td align="center" style={styles.label}>{element.product_price}</td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_category && element.product_category.map(e =>
                                                            e.value + ','
                                                        )}
                                                    </td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_tags && element.product_tags.map(e =>
                                                            e.value + ','
                                                        )}
                                                    </td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_entry_date}
                                                    </td>
                                                </tr>
                                                :
                                                <>
                                                    <tr>
                                                        <td align="center" style={styles.label}>
                                                            <Form.Check type="checkbox" />
                                                        </td>
                                                        <td className="td">
                                                            {element.product_name}
                                                            <div className="mr-auto"></div>
                                                            <Nav.Link style={styles.nav_link} onClick={() => this.handleViewProduct(index)}>View</Nav.Link>
                                                            <Nav.Link style={styles.nav_link}>Edit</Nav.Link>
                                                            <Nav.Link style={styles.nav_link}>Delete</Nav.Link>
                                                        </td>
                                                        <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
                                                        <td align="center" style={styles.label}>
                                                            {element.product_variations.map(e =>
                                                                e.item[e.item.length - 2].value + ','
                                                            )}
                                                        </td>
                                                        <td align="center" style={styles.label}>
                                                            {element.product_variations.map(e =>
                                                                e.item[e.item.length - 3].value + ','
                                                            )}
                                                        </td>
                                                        <td align="center" style={styles.label}>
                                                            {element.product_category && element.product_category.map(e =>
                                                                e.value + ','
                                                            )}
                                                        </td>
                                                        <td align="center" style={styles.label}>
                                                            {element.product_tags && element.product_tags.map(e =>
                                                                e.value + ','
                                                            )}
                                                        </td>
                                                        <td align="center" style={styles.label}>
                                                            {element.product_entry_date}
                                                        </td>
                                                    </tr>
                                                </>
                                            }
                                        </>
                                    )}
                                </tbody>
                            </Table>
                        </Row >
                    </>
                }
                <style jsx>
                    {`
                        .td {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            font-size: ${GlobalStyleSheet.form_label_fontsize};
                        }
                    `}
                </style>
            </>
        );
    }
}


const ViewProduct = props => {
    const [imgPreview, setImgPreview] = React.useState(false);
    const [index, setIndex] = React.useState('')
    const [imgData, setImgData] = React.useState('')
    console.log('1111111:', props.data)

    const len = props.data.product_image_link.length;

    function prevImage() {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    function nextImage() {
        if (index < (len - 1)) {
            setIndex(index + 1)
        }
    }

    return (
        <>
            <TitleRow icon={faPlus} title={` Vendor Dashboard / All Products / ${props.data.product_name}`} />
            <Form.Row style={{ margin: '2%' }} >
                <FontAwesomeIcon className="fontawesome" icon={faArrowLeft} style={styles.fontawesome} onClick={props.back} className="mr-auto" />
                <div className="mr-auto" style={styles.title}> {props.data.product_name}</div>
                <div style={styles.title}> Prev </div>
                <div style={styles.title}> Next </div>
            </Form.Row>
            <CardAccordion title={'General Info'}>
                <Row>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Product Name:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Brand Name:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>SKU:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>


                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Warranty:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Warranty Type:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Discount:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Purchase Note(s):</Form.Label>
                        <InputGroup>
                            <Form.Control as="textarea" row="5" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Discruption:</Form.Label>
                        <InputGroup>
                            <Form.Control as="textarea" row="5" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </CardAccordion>

            {props.isVariableProduct ?
                <CardAccordion title={'Product Variations'}>
                    {props.data.product_variations && props.data.product_variations.map(element =>
                        <>
                            <Row >
                                {element.item.map(e =>
                                    <>
                                        <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
                                            <Form.Label style={styles.label}>{e.name}</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" size="sm" value={e.value} disabled={true} />
                                            </InputGroup>
                                        </Form.Group>
                                        {e.img_link && e.img_link.map((img, i) =>
                                            <Row>
                                                <Image thumbnail fluid style={{ minWidth: '100px', maxWidth: '100px' }} src={img.value} alt="Product Image"
                                                    onClick={() => { setImgPreview(true), setIndex(i), setImgData(e.img_link) }} />
                                            </Row>
                                        )}
                                    </>
                                )}
                            </Row>
                            <hr />
                        </>
                    )}
                </CardAccordion>
                :
                <CardAccordion title={'Product Images'}>
                    {props.data.product_image_link && props.data.product_image_link.map((element, index) =>
                        <Image thumbnail fluid style={{ minWidth: '200px', maxWidth: '200px' }} src={element.value}
                            alt="Product Image" onClick={() => { setImgPreview(true), setIndex(index), setImgData(props.data.product_image_link) }} />
                    )}
                </CardAccordion>
            }
            <CardAccordion title={'Shipping Details'}>
                <Row>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Length (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Width (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Height (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Weight (kg):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Shipping Charges:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Handlink Fee:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </CardAccordion>
            <CardAccordion title={'Product Categories'}>
                <Form.Group>
                    <Form.Label size="sm">Product Categories</Form.Label>
                    <InputGroup>
                        {props.data.product_category && props.data.product_category.map(element =>
                            <Form.Label style={styles.label}>{element.value}</Form.Label>
                        )}
                    </InputGroup>
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label size="sm">Product Tags</Form.Label>
                    <InputGroup>
                        {props.data.product_tags && props.data.product_tags.map(element =>
                            <Form.Label style={styles.label}>{element.value}</Form.Label>
                        )}
                    </InputGroup>
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Dangerous Goods</Form.Label>
                    <InputGroup>
                        {props.data.dangerous_goods && props.data.dangerous_goods.map(element =>
                            <Form.Label style={styles.label}>{element.value}</Form.Label>
                        )}
                    </InputGroup>
                </Form.Group>
            </CardAccordion>

            {/* Image Preview */}
            {imgPreview ?
                <div className="modal-overlay">
                    <div className="modal-body">
                        <div className="close-modal">
                            <div className="mr-auto"></div>
                            <div className="mr-auto"></div>
                            <FontAwesomeIcon className="mr-auto" icon={faChevronLeft} style={styles.img_preview_fontawesome}
                                onClick={() => prevImage} />
                            <FontAwesomeIcon className="mr-auto" icon={faChevronRight} style={styles.img_preview_fontawesome}
                                onClick={nextImage} />
                            <div className="mr-auto"></div>
                            <FontAwesomeIcon icon={faTimes} style={styles.img_preview_fontawesome}
                                onClick={() => setImgPreview(false)} />
                        </div>
                        <div className="image-container">
                            <img
                                src={imgData[index].value}
                                style={{ maxWidth: '100%', maxHeight: '90vh', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
                : null
            }
            <style jsx>
                {`
                   .modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        z-index: 10;
                        width: 100%;
                        height: 100%;
                        background: rgba(21, 21, 21, 0.75);
                    }
                     .modal-body {
                        position: relative;
                        z-index: 11;
                        margin: 2.5%;
                        overflow: hidden;
                        max-width: 100%;
                        max-height: 100%;
                    }
                    .close-modal {
                        position: fixed;
                        display: flex;
                        top: 10px;
                        left: 0;
                        right: 0;
                        width: 100%;
                    }
                    .image-container {
                        display: grid;
                        height: 100%;
                        // display: flex;
                        // justify-content: center;
                        // align-items: center;
                    }
                `}
            </style>
        </>
    )
}

const styles = {
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
    nav_link: {
        paddingLeft: '10px',
        paddingRight: '5px',
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '2%'
    },
    row: {
        margin: '2%', padding: '0%'
    },
    img_preview_fontawesome: {
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'lighter',
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '10%',
        width: '17px',
        height: '17px',
        maxHeight: '17px',
        maxWidth: '17px',
    },
    general_info_label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
        width: '100%',
        borderBottom: '1px solid gray'
    },
    field_label: {
        border: `1px solid ${GlobalStyleSheet.body_color}`,
        color: `${GlobalStyleSheet.admin_primry_color}`,
        margin: '0%',
        width: '100%',
        padding: '2px 5px'
    },
    card: {
        width: '100%',
        border: '1px solid lightgray'
    },
    card_header: {
        alignItems: 'center',
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
    },
}

export default AllProducts;