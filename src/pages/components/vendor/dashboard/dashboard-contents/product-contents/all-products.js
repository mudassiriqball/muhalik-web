import React, { Component } from 'react';
import { Row, Table, Button, Nav, Col, Image, Card, Form, InputGroup, Accordion } from 'react-bootstrap'
import axios from 'axios'
import { getUncodededTokenFromStorage } from '../../../../../../sdk/core/authentication-service'
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
import AddNew from './add-new'


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
    // async componentDidMount() {
    //     const url = MuhalikConfig.PATH + '/api/products/';
    //     try {
    //         const response = await axios.get(url);
    //         console.log('data:', response.data.data.docs)
    //         this.setState({ productsArray: response.data.data.docs })
    //     } catch (error) {
    //         console.log('Data Fetching Eror:', error);
    //     }    
    // }
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products/'
        const currentComponent = this

        await axios.get(url, {
            headers: { 'authorization': await getUncodededTokenFromStorage() }
        }).then((response) => {
            console.log('data:', response.data.data)
            currentComponent.setState({ productsArray: response.data.data })
        }).catch((error) => {
            alert('Data Fetchig Error: ', error)
        });
    }


    handleEditProduct(index) {
        console.log('edit called')
        let element = []
        if (index == -1) {
            element = this.state.data
        } else {
            element = this.state.productsArray[index]
        }
        if (element.product_type != 'simple-product') {
            let array = [];
            let variations = element.product_variations
            variations.forEach((element, i) => {
                array.push({
                    item: element.item, price: element.price, stock: element.stock, image_link: element.image_link,
                    price_error: '', stock_error: '', image_link_error: '', custom_fields: element.custom_fields
                })
            })
            element.product_variations = array
        } else {
            element.product_variations = []
        }

        this.setState({ data: element, viewProduct: 'edit' })

    }

    async handleDeleteProduct(index) {
        // const copyArray = Object.assign([], this.state.productsArray)
        // const array = Object.assign([], this.state.productsArray)
        // let _id = ''
        // if (index == -1) {
        //     _id = this.state.data._id;
        // } else {
        //     _id = copyArray[index]._id;
        // }
        // const url = MuhalikConfig.PATH + `/api/products/${_id}`;
        // copyArray.forEach((element, i) => {
        //     if (element._id == _id) {
        //         array.splice(i, 1)
        //     }
        // })
        // this.setState({ productsArray: array })
        // await axios.delete(url, {
        //     headers: { 'authorization': await getUncodededTokenFromStorage() }
        // }).then(function (response) {
        //     return true;
        // }).catch(function (error) {
        //     alert('Error: ', error.response.data.message);
        //     return false;
        // });
    }

    isVariableProduct(element) {
        if (element.product_type != "simple-product") {
            return true
        } else {
            return false
        }
    }

    renderSwitch(param) {
        switch (param) {
            case 'view':
                return <ViewProduct
                    data={this.state.data}
                    back={() => this.setState({ viewProduct: false, data: {} })}
                    isVariableProduct={this.state.data.product_type != "simple-product"}
                    delete={this.handleDeleteProduct(-1)}
                    edit={() => this.handleEditProduct(-1)}
                />
                break;
            case 'edit':
                return <AddNew
                    upload={this.upload}
                    title={'Vendor Dashboard / All Products / Update'}
                    isUpdateProduct={true}
                    back={() => this.setState({ viewProduct: false, data: {} })}
                    view={() => this.setState({ viewProduct: 'view' })}
                    delete={this.handleDeleteProduct(-1)}

                    isVariableProduct={this.state.data.product_type == 'variable-product'}
                    productCategories={this.state.data.product_category}
                    productSubCategories={this.state.data.product_sub_category}
                    productSubSubCategories={this.state.data.product_sub_sub_category}
                    subCategoryDisabled={false}
                    subSubCategoryDisabled={false}
                    productTags={this.state.data.product_tags}
                    warrantyType={this.state.data.warranty_type}
                    simple_product_image_link={this.state.data.product_image_link}
                    variationsArray={this.state.data.product_variations}
                    dangerousGoodsArray={this.state.data.dangerous_goods}

                    product_name={this.state.data.product_name}
                    product_description={this.state.data.product_description}
                    product_type={'variable-product'}
                    // product_type={this.state.data.product_type}
                    sku={this.state.data.sku}
                    product_price={this.state.data.product_price}
                    product_in_stock={this.state.data.product_in_stock}
                    product_brand_name={this.state.data.product_brand_name}
                    // product_image_link={this.state.data.product_image_link}
                    product_warranty={this.state.data.product_warranty}
                    warranty_type={this.state.data.warranty_type}
                    product_discount={this.state.data.product_discount}
                    purchase_note={this.state.data.purchase_note}
                    // product_variations={this.state.data.product_variations}
                    product_weight={this.state.data.product_weight}
                    dimension_length={this.state.data.dimension_length}
                    dimension_width={this.state.data.dimension_width}
                    dimension_height={this.state.data.dimension_height}
                    shipping_charges={this.state.data.shipping_charges}
                    handling_fee={this.state.data.handling_fee}
                />
                break;
            default:
                return <>
                    <TitleRow icon={faPlus} title={' Vendor Dashboard / All Products'} />
                    <Row noGutters style={{ margin: '2%', background: 'white' }}>
                        <Table responsive bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>
                                        <Form.Check type="checkbox" />
                                    </th>
                                    <th style={{ textAlign: 'center' }}>Name</th>
                                    <th style={{ textAlign: 'center' }}>Product Type</th>
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
                                                    <Nav.Link style={styles.nav_link} onClick={() => this.setState({ data: element, viewProduct: 'view' })}> View </Nav.Link>
                                                    <Nav.Link style={styles.nav_link} onClick={() => this.handleEditProduct(index)}>Edit</Nav.Link>
                                                    <Nav.Link style={styles.nav_link} onClick={() => this.handleDeleteProduct(index)}>Delete</Nav.Link>
                                                </td>
                                                <td align="center" style={styles.label}>{element.product_type}</td>
                                                <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
                                                <td align="center" style={styles.label}>
                                                    {element.product_variations.map(e =>
                                                        e.stock + ','
                                                    )}
                                                </td>
                                                <td align="center" style={styles.label}>
                                                    {element.product_variations.map(e =>
                                                        e.price + ','
                                                    )}
                                                </td>
                                                <td align="center" style={styles.label}>
                                                    {/* {element.product_category && element.product_category.map(e =>
                                                            e.value + ','
                                                        )} */}
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
                                                        <Nav.Link style={styles.nav_link} onClick={() => this.setState({ data: element, viewProduct: 'view' })}>View</Nav.Link>
                                                        <Nav.Link style={styles.nav_link} onClick={() => this.handleEditProduct(index)}>Edit</Nav.Link>
                                                        <Nav.Link style={styles.nav_link} onClick={() => this.handleDeleteProduct(index)}>Delete</Nav.Link>
                                                    </td>
                                                    <td align="center" style={styles.label}>{element.product_type}</td>
                                                    <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_in_stock}
                                                    </td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_price}
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
                    <style jsx >
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
        }
    }

    render() {
        return (
            <>
                <div>
                    {this.renderSwitch(this.state.viewProduct)}
                </div>
            </>
        );
    }
}


const ViewProduct = props => {
    const [imgPreview, setImgPreview] = React.useState(false);
    const [index, setIndex] = React.useState('')
    const [imgData, setImgData] = React.useState('')

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
            <Form.Row style={{ margin: ' 0% 2%', display: 'flex', alignItems: 'center' }} >
                <Nav.Link style={{ fontSize: '14px' }} className="mr-auto" onClick={props.back}>Back</Nav.Link>
                <div className="mr-auto" style={{ fontSize: '14px' }}> {props.data.product_name}</div>
                <Nav.Link style={{ fontSize: '14px' }} onClick={props.edit}> Edit </Nav.Link>
                <Nav.Link style={{ fontSize: '14px' }} onClick={props.delete}> Delete </Nav.Link>
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
                            <Form.Control type="text" size="sm" value={props.data.product_brand_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>SKU:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.sku} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    {props.isVariableProduct ?
                        null :
                        <>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label style={styles.label}>Price:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.product_price} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label style={styles.label}>Product In Stock:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.product_in_stock} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                        </>
                    }


                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Warranty (month):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_warranty} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Warranty Type:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.warranty_type} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Discount (%):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_discount} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Purchase Note(s):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.purchase_note} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                        <Form.Label style={styles.label}>Description:</Form.Label>
                        <InputGroup>
                            <Form.Control as="textarea" row="5" size="sm" value={props.data.product_description} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </CardAccordion>

            {props.isVariableProduct ?
                <CardAccordion title={'Product Variations'}>
                    {props.data.product_variations && props.data.product_variations.map(element =>
                        <>
                            <Row >
                                <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
                                    <Form.Label style={styles.label}>Price</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" size="sm" value={element.price} disabled={true} />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
                                    <Form.Label style={styles.label}>Stock</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" size="sm" value={element.stock} disabled={true} />
                                    </InputGroup>
                                </Form.Group>
                                {element.item && element.item.map(e =>
                                    <>
                                        <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
                                            <Form.Label style={styles.label}>{e.name}</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" size="sm" value={e.value} disabled={true} />
                                            </InputGroup>
                                        </Form.Group>
                                    </>
                                )}
                                {element.custom_fields && element.custom_fields.map(e =>
                                    <>
                                        <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
                                            <Form.Label style={styles.label}>{e.name}</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" size="sm" value={e.value} disabled={true} />
                                            </InputGroup>
                                        </Form.Group>
                                    </>
                                )}
                                {/* {element.image_link && element.image_link.map((img, i) =>
                                    <Row>
                                        <Image thumbnail fluid style={{ minWidth: '100px', maxWidth: '100px' }} src={`https://drive.google.com/uc?export=view&id= ${img.value}`} alt="Product Image"
                                            onClick={() => { setImgPreview(true), setIndex(i), setImgData(e.img_link) }} />
                                    </Row>
                                )} */}
                            </Row>
                            <hr />
                        </>
                    )}
                </CardAccordion>
                :
                <CardAccordion title={'Product Images'}>
                    {props.data.product_image_link && props.data.product_image_link.map((element, index) =>
                        <Image thumbnail fluid style={{ minWidth: '200px', maxWidth: '200px' }} src={`https://drive.google.com/uc?export=view&id= ${img.value}`}
                            alt="Product Image" onClick={() => { setImgPreview(true), setIndex(index), setImgData(props.data.product_image_link) }} />
                    )}
                </CardAccordion>
            }
            <CardAccordion title={'Shipping Details'}>
                <Row>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Length (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.dimension_length} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Width (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.dimension_width} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Height (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.dimension_height} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Weight (kg):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_weight} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Shipping Charges:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.shipping_charges} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label style={styles.label}>Handlink Fee:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.handling_fee} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </CardAccordion>
            <CardAccordion title={'Product Categories'}>
                <Form.Group>
                    <Form.Label style={{ fontSie: '13px', fontWeight: 'bold' }}>Product Categories:</Form.Label>
                    <InputGroup>
                        {/* {props.data.product_category && props.data.product_category.map(element =>
                            <Form.Label style={styles.label}>{element.value}</Form.Label>
                        )} */}
                    </InputGroup>
                </Form.Group >
                <hr />
                <Form.Group>
                    <Form.Label style={{ fontSie: '13px', fontWeight: 'bold' }}>Product Tags:</Form.Label>
                    <InputGroup>
                        {props.data.product_tags && props.data.product_tags.map(element =>
                            <Form.Label style={styles.label}>{element.value}</Form.Label>
                        )}
                    </InputGroup>
                </ Form.Group >
                <hr />
                <Form.Group>
                    <Form.Label style={{ fontSie: '13px', fontWeight: 'bold' }}>Dangerous Goods:</Form.Label>
                    <InputGroup>
                        {props.data.dangerous_goods && props.data.dangerous_goods.map(element =>
                            <Form.Label style={styles.label}>{element.value}</Form.Label>
                        )}
                    </InputGroup>
                </Form.Group>
            </CardAccordion >

            {/* Image Preview */}
            {
                imgPreview ?
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


// import React, { Component } from 'react';

// import CreatableSelect from 'react-select/creatable';
// const colourOptions = [{ label: '111', value: '111' }]

// export default class AllProducts extends Component {
//     handleChange = (newValue) => {
//         console.log('Value Changed', newValue);
//     };

//     render() {
//         return (
//             <CreatableSelect
//                 isMulti
//                 onChange={this.handleChange}
//                 options={colourOptions}
//             />
//         );
//     }
// }