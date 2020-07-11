import React, { Component, useState, useEffect } from 'react';
import { Row, Table, Button, Nav, Col, Image, Card, Form, InputGroup, Accordion, Pagination, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowLeft, faTimes, faChevronLeft, faChevronRight, faSlidersH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import CardAccordion from '../../../card-accordion';
import MuhalikConfig from '../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../../styleSheet'
import TitleRow from '../../../title-row';
import AddNew from '../../../vendor/dashboard/dashboard-contents/product-contents/add-new'
import useIdPageLimitInfiniteScroll from '../../../../../use-id-page-limit-infinite-scroll';
import useIdQueryInfiniteScroll from '../../../../../use-id-query-infinite-scroll';
import useDimensions from "react-use-dimensions";
import ConfirmModal from '../../../confirm-modal'
import AlertModal from '../../../alert-modal';
import { getTokenFromStorage } from '../../../../../sdk/core/authentication-service'
export default function Inventory(props) {

    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [product_list, setProduct_list] = useState([])
    const [viewProduct, setViewProduct] = useState(false)
    const [data, setData] = useState({})

    const [isSearch, setIsSearch] = useState(false)
    const [searchType, setSearchType] = useState('_id')
    const [filterStr, setFilterStr] = useState('')

    const [fieldName, setFieldName] = useState('')
    const [limitPageNumber, setlimitPageNumber] = useState(1)
    const [queryPageNumber, setQueryPageNumber] = useState(1)
    const [query, setQuery] = useState(null)

    const { _id_loading, _id_error, _id_products, _id_hasMore } = useIdPageLimitInfiniteScroll(false, limitPageNumber, 20)
    const { id_loading, id_error, id_products, id_hasMore } = useIdQueryInfiniteScroll(fieldName, query, queryPageNumber, 20)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const url = MuhalikConfig.PATH + '/api/products/total-products';
        await axios.get(url).then((response) => {
            setTotalProducts(response.data.count)
            let count = response.data.count / 20
            let rounded = Math.floor(count);
            let decimal = count - rounded;
            if (decimal > 0) {
                setTotalPages(rounded + 1)
            } else {
                setTotalPages(rounded)
            }
        }).catch((error) => {
            console.log('total Fetchig Error: ', error)
        })
    }

    function handleSearchEnterPress(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            handleSearch()
        } else {
            console.log('not e')
        }
    }

    async function handleSearch() {
        if (filterStr != '') {
            setFieldName(searchType)
            setQuery(filterStr)
            setIsSearch(true)
        } else {
            setIsSearch(false)
        }
    }

    function handleEditProduct(index) {
        let element = []
        if (index == -1) {
            element = data
        } else {
            element = _id_products[index]
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
        setData(element)
        setViewProduct('edit')
    }

    function handleShowConfirmModal(element) {
        setData(element)
        setShowConfirmDeleteModal(true)
    }

    async function handleDeleteProduct() {
        setShowConfirmDeleteModal(false)
        const url = MuhalikConfig.PATH + `/api/products/delete/${data._id}`;

        await axios.put(url, {}, {
            headers: {
                'authorization': props.token
            }
        }).then(function (response) {
            setShowModal(true)
            if (!isSearch) {
                _id_products.forEach((element, index) => {
                    if (data._id == element._id) {
                        _id_products.splice(index, 1)
                        return
                    }
                })
            } else {
                id_products.forEach((element, index) => {
                    if (data._id == element._id) {
                        id_products.splice(index, 1)
                        return
                    }
                })
            }
        }).catch(function (error) {
            console.log(error)
            alert('Error: ');
        });
    }

    function renderSwitch(param) {
        switch (param) {
            case 'view':
                return <ViewProduct
                    data={data}
                    back={() => { setViewProduct(false), setData({}) }}
                    isVariableProduct={data.product_type != "simple-product"}
                    handleShowConfirmModal={() => handleShowConfirmModal(-1)}
                    edit={() => handleEditProduct(-1)}
                />
                break;
            case 'edit':
                return <AddNew
                    title={'Vendor Dashboard / All Products / Update'}
                    isUpdateProduct={true}
                    _id={data._id}
                    isVariableProduct={data.product_type != 'simple-product'}

                    back={() => { setViewProduct(false), setData({}) }}
                    view={() => setViewProduct('view')}
                    handleShowConfirmModal={() => handleShowConfirmModal(-1)}

                    productCategory={data.category}
                    // productSubCategories={data.sub_category}

                    productTags={data.product_tags}
                    warrantyType={data.warranty_type}
                    simple_product_image_link={data.product_image_link}
                    variationsArray={data.product_variations}
                    dangerousGoodsArray={data.dangerous_goods}

                    product_name={data.product_name}
                    product_description={data.product_description}
                    product_type={'variable-product'}
                    product_type={data.product_type}
                    sku={data.sku}
                    product_price={data.product_price}
                    product_in_stock={data.product_in_stock}
                    product_brand_name={data.product_brand_name}

                    product_warranty={data.product_warranty}
                    warranty_type={data.warranty_type}
                    product_discount={data.product_discount}
                    purchase_note={data.purchase_note}
                    product_weight={data.product_weight}
                    dimension_length={data.dimension_length}
                    dimension_width={data.dimension_width}
                    dimension_height={data.dimension_height}
                    shipping_charges={data.shipping_charges}
                    handling_fee={data.handling_fee}
                />
                break;
            default:
                return <>
                    <TitleRow icon={faPlus} title={' Vendor Dashboard / All Products'} />
                    <Card as={Row} style={{ margin: '2%' }}>
                        <Card.Header>
                            <Form.Row>
                                <Col lg='auto' md='auto' sm='auto' sm='auto'>
                                    <Form.Control as="select"
                                        variant="dark"
                                        value={searchType}
                                        onChange={(e) => setSearchType(e.target.value)}>
                                        <option value='_id'>ID</option>
                                        <option value='product_name'>Name</option>
                                        <option value='category'>Category</option>
                                        <option value='sub-category'>Sub Category</option>
                                    </Form.Control>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={12} className='search_col'>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Search Here"
                                            name="search"
                                            value={filterStr}
                                            onKeyPress={(e) => handleSearchEnterPress(e)}
                                            onChange={(e) => { e.target.value != '' ? setFilterStr(e.target.value) : setIsSearch(false), setFilterStr(e.target.value) }}
                                        />
                                        <InputGroup.Append >
                                            <Button variant='outline-primary' onClick={handleSearch}>
                                                Search
                                            </Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                            </Form.Row>
                        </Card.Header>
                        <Card.Body className='w-100'>
                            <Table responsive bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>#</th>
                                        <th style={{ textAlign: 'center' }}>ID</th>
                                        <th style={{ textAlign: 'center' }}>Name</th>
                                        <th style={{ textAlign: 'center' }}>Type</th>
                                        <th style={{ textAlign: 'center' }}>Price</th>
                                        <th style={{ textAlign: 'center' }}>Stock</th>
                                        <th style={{ textAlign: 'center' }}>Category</th>
                                        <th style={{ textAlign: 'center' }}>Sub Category</th>
                                        <th style={{ textAlign: 'center' }}>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!isSearch ?
                                        _id_products && _id_products.map((element, index) =>
                                            <TableBody key={element._id}
                                                element={element}
                                                pageNumber={limitPageNumber}
                                                index={index}
                                                loading={_id_loading}

                                                setViewProduct={() => { setData(element), setViewProduct('view') }}
                                                handleEditProduct={() => handleEditProduct(index)}
                                                handleShowConfirmModal={() => handleShowConfirmModal(element)}
                                            />
                                        )
                                        :
                                        id_hasMore && id_products && id_products.map((element, index) =>
                                            <TableBody key={element._id}
                                                element={element}
                                                pageNumber={queryPageNumber}
                                                index={index}
                                                loading={id_loading}

                                                setViewProduct={() => { setData(element), setViewProduct('view') }}
                                                handleEditProduct={() => handleEditProduct(index)}
                                                handleShowConfirmModal={() => handleShowConfirmModal(element)}
                                            />
                                        )
                                    }
                                </tbody>
                            </Table >

                            {!isSearch ?
                                <>
                                    {_id_loading ?
                                        <div className='_div'>
                                            < Spinner animation="grow" variant="primary" />
                                            <Spinner animation="grow" variant="secondary" />
                                            <Spinner animation="grow" variant="success" />
                                            <Spinner animation="grow" variant="danger" />
                                            <Spinner animation="grow" variant="warning" />
                                            <Spinner animation="grow" variant="info" />
                                            <Spinner animation="grow" variant="dark" />
                                        </div>
                                        :
                                        !_id_hasMore && <Row className='_div'>No Data Found</Row>
                                    }
                                    <hr />
                                    <PaginationRow
                                        totalPages={totalPages}
                                        pageNumber={limitPageNumber}
                                        setPageNumber={(pageNumber) => setlimitPageNumber(pageNumber)}
                                    />
                                </>
                                :
                                <>
                                    {id_loading ?
                                        <div className='_div'>
                                            < Spinner animation="grow" variant="primary" />
                                            <Spinner animation="grow" variant="secondary" />
                                            <Spinner animation="grow" variant="success" />
                                            <Spinner animation="grow" variant="danger" />
                                            <Spinner animation="grow" variant="warning" />
                                            <Spinner animation="grow" variant="info" />
                                            <Spinner animation="grow" variant="dark" />
                                        </div>
                                        :
                                        !id_hasMore && <Row className='_div'>No Data Found</Row>
                                    }
                                    <hr />
                                    <PaginationRow
                                        totalPages={-1}
                                        pageNumber={queryPageNumber}
                                        setPageNumber={(pageNumber) => setQueryPageNumber(pageNumber)}
                                        hasMore={id_hasMore}
                                    />
                                </>
                            }
                        </Card.Body >
                    </Card >
                    <style type="text/css">{`
                        ._div{
                            display: flex;
                            justify-content: center;
                            margin: 5%;
                        }
                        .form_label{
                            font-size: 12px;
                        }
                        @media (max-width: 575px){
                            .search_col{
                                padding-top: 1%;
                            }
                        }
                    `}</style>
                    <style jsx >
                        {`
                        th{
                            font-size: 14px;
                        }
                    `}
                    </style>
                </>
        }
    }

    return (
        <div>
            <AlertModal
                onHide={() => setShowModal(false)}
                show={showModal}
                header={'Success'}
                message={'Product Deleted Successfully'}
                iconname={faThumbsUp}
                color={"#00b300"}
            />
            <ConfirmModal
                onHide={() => setShowConfirmDeleteModal(false)}
                show={showConfirmDeleteModal}
                iconname={faTrash}
                color={'red'}
                title={'Delete Product?'}
                _id={data._id}
                name={data.product_name}
                confirm={handleDeleteProduct}
            />

            {renderSwitch(viewProduct)}
        </div>
    )
}

function TableBody(props) {
    let element = props.element
    let pageNumber = props.pageNumber
    let index = props.index
    return (
        <>
            {element.product_type == "simple-product" ?
                <tr>
                    <td align="center" >{(pageNumber - 1) * 20 + index + 1}</td>
                    <td >
                        {element._id}
                        <div className="td">
                            <Nav.Link style={styles.nav_link} className='pt-0' onClick={props.setViewProduct} >View</Nav.Link>
                            <Nav.Link style={styles.nav_link} className='pt-0' onClick={props.handleEditProduct}>Edit</Nav.Link>
                            <Nav.Link style={styles.nav_link} className='pt-0 delete' onClick={props.handleShowConfirmModal}>Delete</Nav.Link>
                        </div>
                    </td>
                    <td align="center" >{element.product_name}</td>
                    <td align="center" >{element.product_type == "simple-product" ? 'Simple' : 'Variable'}</td>
                    <td align="center" >
                        {element.product_price}
                    </td>
                    <td align="center" >
                        {element.product_in_stock}
                    </td>
                    <td align="center" >
                        {element.category.value}
                    </td>
                    <td align="center" >
                        {element.sub_category.value}
                    </td>
                    <td align="center" >
                        {element.entry_date.substring(0, 10)}
                    </td>
                </tr>
                :
                <tr>
                    <td align="center" >{(pageNumber - 1) * 20 + index + 1}</td>
                    <td>
                        {element._id}
                        <div className="td">
                            <Nav.Link style={styles.nav_link} className='pt-0' onClick={props.setViewProduct} >View</Nav.Link>
                            <Nav.Link style={styles.nav_link} className='pt-0' onClick={props.handleEditProduct}>Edit</Nav.Link>
                            <Nav.Link style={styles.nav_link} className='pt-0 delete' onClick={props.handleShowConfirmModal}>Delete</Nav.Link>
                        </div>
                    </td>
                    <td align="center" >{element.product_name}</td>
                    <td align="center" >{element.product_type == "simple-product" ? 'Simple' : 'Variable'}</td>
                    <td align="center" >
                        {element.product_variations[0].price} ...
                    </td>
                    <td align="center" >
                        {element.product_variations[0].stock} ...
                    </td>
                    <td align="center" >
                        {element.category.value}
                    </td>
                    <td align="center" >
                        {element.sub_category.value}
                    </td>
                    <td align="center" >
                        {element.entry_date.substring(0, 10)}
                    </td>
                </tr>
            }
            <style type="text/css">{`
                .delete{
                    color: #ff4d4d;
                }
                .delete:hover{
                    color: #e60000;
                }
            `}</style>
            <style jsx >
                {`
                .td {
                    display: flex;
                    flex-direction: row;
                    font-size: 12px;
                    float: right;
                    padding: 0%;
                    margin: 0%;
                }
                td {
                    font-size: 12px;
                }
            `}
            </style>
        </>
    )
}

function PaginationRow(props) {
    return (
        <Row className='d-flex justify-content-center p-0 m-0 align-items-center'>
            <Pagination >
                <Pagination.Item onClick={() => props.setPageNumber(1)}>{1}</Pagination.Item>
                <Pagination.Prev
                    disabled={props.pageNumber == 1}
                    onClick={() => props.setPageNumber(props.pageNumber - 1)}>
                </Pagination.Prev>

                <Pagination.Ellipsis />
                <Pagination.Item active>{props.pageNumber}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Next
                    disabled={props.totalPages != -1 ? props.totalPages == props.pageNumber : props.hasMore ? false : true}
                    onClick={() => props.setPageNumber(props.pageNumber + 1)}>
                </Pagination.Next>

                <Pagination.Item
                    disabled={props.totalPages == -1 ? true : false}
                    onClick={() => props.setPageNumber(props.totalPages)}>{props.totalPages == -1 ? '-' : props.totalPages}</Pagination.Item>
            </Pagination>
        </Row>
    )
}


const ViewProduct = props => {
    const [ref, { x, y, width }] = useDimensions();

    const [imgPreview, setImgPreview] = React.useState(false);
    const [currentImgIndex, setCurrentImgIndex] = React.useState('')
    const [imgData, setImgData] = React.useState([])

    // const len = props.data.product_image_link.length;

    function prevImage() {
        if (currentImgIndex > 0) {
            setCurrentImgIndex(currentImgIndex - 1)
        }
    }
    function nextImage() {
        if (currentImgIndex < (imgData.length - 1)) {
            setCurrentImgIndex(currentImgIndex + 1)
        }
    }

    return (
        <>
            <TitleRow icon={faPlus} title={` Vendor Dashboard / All Products / ${props.data.product_name}`} />
            <Form.Row style={{ margin: ' 1% 2%', display: 'flex', alignItems: 'center' }} >
                <Button variant='outline-primary' size='sm' className="mr-auto" onClick={props.back}>Back</Button>
                <div className="mr-auto" style={{ fontSize: '14px' }}> {props.data.product_name || '-'}</div>
                <Button variant='outline-primary' size='sm' className="mr-3" onClick={props.edit}>Edit</Button>
                <Button variant='outline-danger' size='sm' onClick={props.handleShowConfirmModal}>Delete</Button>
            </Form.Row>
            <CardAccordion title={'General Info'}>
                <Row>
                    <Form.Group as={Col} lg={props.isVariableProduct ? 6 : 4} md={props.isVariableProduct ? 6 : 4} sm={props.isVariableProduct ? 6 : 6} xs={12}>
                        <Form.Label className='form_label'>Product ID:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data._id} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={props.isVariableProduct ? 6 : 4} md={props.isVariableProduct ? 6 : 4} sm={props.isVariableProduct ? 6 : 6} xs={12}>
                        <Form.Label className='form_label'>Product Name:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={props.isVariableProduct ? 6 : 4} md={props.isVariableProduct ? 6 : 4} sm={props.isVariableProduct ? 6 : 6} xs={12}>
                        <Form.Label className='form_label'>SKU:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.sku || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    {props.isVariableProduct ?
                        null
                        :
                        <>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Brand Name:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.product_brand_name || '-'} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Price:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.product_price} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Product In Stock:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.product_in_stock} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Warranty (month):</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.product_warranty || 'No Warranty'} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Warranty Type:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.warranty_type || '-'} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Discount (%):</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={props.data.product_discount || '0%'} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                        </>
                    }

                    <Form.Group as={Col} lg={props.isVariableProduct ? 6 : 4} md={props.isVariableProduct ? 6 : 4} sm={props.isVariableProduct ? 6 : 6} xs={12}>
                        <Form.Label className='form_label'>Purchase Note(s):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.purchase_note || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                        <Form.Label className='form_label'>Description:</Form.Label>
                        <InputGroup>
                            <Form.Control as="textarea" row='8' value={props.data.product_description || 'No Description'} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </CardAccordion>

            {props.isVariableProduct ?
                <CardAccordion title={'Variations'}>
                    {props.data.product_variations && props.data.product_variations.map((element, index) =>
                        <Accordion key={element._id} defaultActiveKey='0' className='pb-2'>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={index} className='accordian_toggle'>
                                    <Form.Label className='p-0 mb-0 ml-0 mr-auto'>ID: {element._id}</Form.Label>
                                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.slider_fontawesome} />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={index} style={{ padding: '1%' }}>
                                    <>
                                        <Row noGutters >
                                            <label className='haeder_label'>Variations</label>
                                            <Form.Group as={Col} lg={2} md={2} sm={4} xs={6} className='pl1 pr-1'>
                                                <Form.Label className='form_label'>Price</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="text" size="sm" value={element.price || '-'} disabled={true} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={4} xs={6} className='pl1 pr-1'>
                                                <Form.Label className='form_label'>Stock</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="text" size="sm" value={element.stock || '-'} disabled={true} />
                                                </InputGroup>
                                            </Form.Group>
                                            {element.item && element.item.map((e, i) =>
                                                <Form.Group key={i} as={Col} lg={2} md={2} sm={4} xs={6} className='pl1 pr-1'>
                                                    <Form.Label className='form_label'>{e.name}</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="text" size="sm" value={e.value} disabled={true} />
                                                    </InputGroup>
                                                </Form.Group>
                                            )}

                                        </Row>
                                        <Row noGutters>
                                            <label className='haeder_label'>Specifications</label>
                                            {element.custom_fields && element.custom_fields.map((e, i) =>
                                                <Form.Group key={i} as={Col} lg={2} md={2} sm={4} xs={6} className='pl1 pr-1'>
                                                    <Form.Label className='form_label'>{e.name}</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="text" size="sm" value={e.value} disabled={true} />
                                                    </InputGroup>
                                                </Form.Group>
                                            )}
                                        </Row>

                                    </>
                                </Accordion.Collapse>
                            </Card>
                            <Row noGutters className='w-100'>
                                {element.image_link && element.image_link.map((img, i) =>
                                    <Col lg={1} md={2} sm={3} xs={3} >
                                        <div className='my_img_div'>
                                            <Image ref={ref} thumbnail
                                                style={{ width: '100%', maxHeight: width + 10 || '200px', minHeight: width + 10 || '200px' }}
                                                onClick={() => { setImgPreview(true), setCurrentImgIndex(i), setImgData(element.image_link) }} src={img.url} />
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </Accordion>
                    )}
                </CardAccordion>
                :
                <>
                    <CardAccordion title={'Custom Fields'}>
                        <Row noGutters>
                            {props.data.custom_fields && props.data.custom_fields.map((element, index) =>
                                <Form.Group as={Col} lg={2} md={2} sm={4} xs={12} className='pl1 pr-1'>
                                    <Form.Label className='form_label'>{element.name}</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" size="sm" value={element.value} disabled={true} />
                                    </InputGroup>
                                </Form.Group>
                            )}
                        </Row>
                    </CardAccordion>
                    <CardAccordion title={'Product Images'}>
                        <Row noGutters>
                            {props.data.product_image_link && props.data.product_image_link.map((img, index) =>
                                <Col lg={1} md={2} sm={3} xs={3} >
                                    <div className='my_img_div'>
                                        <Image ref={ref} thumbnail
                                            style={{ width: '100%', maxHeight: width + 10 || '200px', minHeight: width + 10 || '200px' }}
                                            onClick={() => { setImgPreview(true), setCurrentImgIndex(i), setImgData(element.image_link) }} src={img.url} />
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </CardAccordion>
                </>
            }
            <CardAccordion title={'Shipping Details'}>
                <Row>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Length (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.dimension_length || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Width (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.dimension_width || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Height (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.dimension_height || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Weight (kg):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.product_weight || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Shipping Charges:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.shipping_charges || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Handlink Fee:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={props.data.handling_fee || '-'} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </CardAccordion>
            <CardAccordion title={'Product Categories'}>
                <Form.Group>
                    <Form.Label className='heading_label'>Product Category:</Form.Label>
                    <InputGroup>
                        <Form.Label className='form_label'>
                            {props.data.category.value}
                        </Form.Label>
                    </InputGroup>
                </Form.Group >
                <hr />
                <Form.Group>
                    <Form.Label className='heading_label'>Product Category:</Form.Label>
                    <InputGroup>
                        <Form.Label className='form_label'>
                            {props.data.sub_category.value}
                        </Form.Label>
                    </InputGroup>
                </Form.Group >
                <hr />
                <Form.Group>
                    <Form.Label className='heading_label'>Product Tags:</Form.Label>
                    <InputGroup>
                        {props.data.product_tags && props.data.product_tags.map((element, index) =>
                            <Form.Label key={index} className='form_label'>
                                {element.value}
                            </Form.Label>
                        )}
                    </InputGroup>
                </ Form.Group >
                <hr />
                <Form.Group>
                    <Form.Label className='heading_label'>Dangerous Goods:</Form.Label>
                    <InputGroup>
                        {props.data.dangerous_goods && props.data.dangerous_goods.map((element, index) =>
                            <Form.Label key={index} className='form_label'>
                                {element.value}
                            </Form.Label>
                        )}
                    </InputGroup>
                </Form.Group>
            </CardAccordion >

            {/* Image Preview */}
            {imgPreview && <ImagePreview
                imgData={imgData}
                index={currentImgIndex}
                prevImage={prevImage}
                nextImage={nextImage}
                setImgPreview={() => setImgPreview(false)}
            />}
            <style type="text/css">{`
                .heading_label{
                    font-size: 13px;
                    font-weight: bold;
                }
                .my_img_div{
                    padding: 2%;
                    cursor: pointer;
                    background: white;
                    cursor: pointer;
                }
                .my_img_div:hover{
                    box-shadow: 0px 0px 10px 0.01px gray;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    padding: 0% 2% 4% 2%;
                }
                .haeder_label{
                    font-size: 13px;
                    font-weight: bold;
                    width: 100%;
                }
                .accordian_toggle{
                    background: #9a9db1;
                    font-size: 12px;
                    color: white;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                }
                .accordian_toggle:hover{
                    background: #7d819b;
                }
                .field_col{
                    padding: 0% 2%;
                }
                
            `}</style>
        </>
    )
}

function ImagePreview(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-body">
                    <div className="close-modal">
                        <div className="mr-auto"></div>
                        <div className="mr-auto"></div>
                        <FontAwesomeIcon className="mr-auto" icon={faChevronLeft} style={styles.img_preview_fontawesome}
                            onClick={props.prevImage} />
                        <FontAwesomeIcon className="mr-auto" icon={faChevronRight} style={styles.img_preview_fontawesome}
                            onClick={props.nextImage} />
                        <div className="mr-auto"></div>
                        <FontAwesomeIcon icon={faTimes} style={styles.img_preview_fontawesome}
                            onClick={props.setImgPreview} />
                    </div>
                    <div className="image-container">
                        <img ref={ref}
                            thumbnail
                            src={props.imgData[props.index].url}
                            style={{ width: '100%', maxHeight: width + 90, minHeight: width + 90, margin: 'auto' }}
                        />
                    </div>
                </div>
            </div>
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
                        margin: 2% 30%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                     @media (max-width: 1299px){
                        .image-container {
                            margin: 2% 25%;
                        }
                    }
                    @media (max-width: 1199px){
                        .image-container {
                            margin: 2% 20%;
                        }
                    }
                     @media (max-width: 991px){
                        .image-container {
                            margin: 2% 15%;
                        }
                    }
                     @media (max-width: 767px){
                        .image-container {
                            margin: 2% 10%;
                        }
                    }
                     @media (max-width: 575px){
                        .image-container {
                            margin: 10% 2%;
                        }
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
    slider_fontawesome: {
        color: 'white',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}
