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
import AddNew from './product-contents/add-new'
import vendorProductsPageLimit from '../../../../../vendor-products-page-limit';
import vendorProductsQuerySearch from '../../../../../vendor-products-query-search';
import useDimensions from "react-use-dimensions";
import ConfirmModal from '../../../confirm-modal'
import AlertModal from '../../../alert-modal';
import { getTokenFromStorage } from '../../../../../sdk/core/authentication-service'
import PaginationRow from '../../../pagination-row'
import Loading from '../../../loading';
import CardSearchAccordion from '../../../card-search-accordion'

export default function AllProducts(props) {

    const [page, setPage] = useState(1)
    const [queryPage, setQueryPage] = useState(1)

    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [viewProduct, setViewProduct] = useState(false)
    const [data, setData] = useState({})

    const [isSearch, setIsSearch] = useState(false)
    const [refresh_count, setRefresh_count] = useState(0)

    const [fieldName, setFieldName] = useState('')
    const [limitPageNumber, setlimitPageNumber] = useState(1)
    const [queryPageNumber, setQueryPageNumber] = useState(1)
    const [query, setQuery] = useState('')

    const [start_date, setStart_date] = useState(new Date("2020/01/01"))
    const [end_date, setEnd_date] = useState(new Date())

    const { vendor_products_loading, vendor_products_error, vendor_products_products, vendor_products_pages, vendor_products_total, vendor_products_hasMore } =
        vendorProductsPageLimit(props.token, refresh_count, props.user_id, false, limitPageNumber, '20')
    const { vendor_products_query_loading, vendor_products_query_error, vendor_products_query_products, vendor_products_query_total, vendor_products_query_pages, vendor_products_query_hasMore } =
        vendorProductsQuerySearch(props.token, refresh_count, props.user_id, fieldName, query, queryPageNumber, '20', start_date, end_date)
    async function handleSearch(searchType, searchValue, start, end) {
        if (searchValue != '') {
            setFieldName(searchType)
            setQuery(searchValue)
            setStart_date(start)
            setEnd_date(end)
            setIsSearch(true)
        } else {
            setIsSearch(false)
        }
    }

    function handleSetPage(ppage) {
        if (ppage > page) {
            setPage(ppage)
            setlimitPageNumber(ppage)
        } else {
            setPage(ppage)
        }
    }
    function handleSetQueryPage(ppage) {
        if (ppage > page) {
            setQueryPage(ppage)
            setQueryPageNumber(ppage)
        } else {
            setQueryPage(ppage)
        }
    }


    function handleEditProduct(element) {
        // if (element.product_type != 'simple-product') {
        //     let array = [];
        //     let variations = element.product_variations
        //     variations.forEach((element, i) => {
        //         array.push({
        //             item: element.item, price: element.price, stock: element.stock, image_link: element.image_link,
        //             price_error: '', stock_error: '', image_link_error: '', custom_fields: element.custom_fields
        //         })
        //     })
        //     element.product_variations = array
        // } else {
        //     element.product_variations = []
        // }
        setData(element)
        setViewProduct('edit')
    }

    function handleShowConfirmModal(element) {
        setData(element)
        setShowConfirmDeleteModal(true)
    }

    async function handleDeleteProduct(element) {
        setShowConfirmDeleteModal(false)
        const url = MuhalikConfig.PATH + `/api/products/delete-product/${data._id}`;

        await axios.put(url, {}, {
            headers: {
                'authorization': props.token
            }
        }).then(function (response) {
            setShowModal(true)
            setRefresh_count(refresh_count + 1)
        }).catch(function (error) {
            console.log(error)
            alert('Error: ');
        });
    }

    function renderSwitch(param) {
        switch (param) {
            case 'view':
                return <ViewProduct
                    isUpdate={false}
                    data={data}
                    back={() => { setViewProduct(false), setData({}) }}
                    isVariableProduct={data.product_type != "simple-product"}
                    handleShowConfirmModal={() => handleShowConfirmModal(-1)}
                    edit={() => handleEditProduct(data)}
                />
                break;
            case 'edit':
                return <ViewProduct
                    isUpdate={true}
                    data={data}
                    token={props.token}
                    back={() => { setViewProduct(false), setData({}) }}
                    isVariableProduct={data.product_type != "simple-product"}
                    handleShowConfirmModal={() => handleShowConfirmModal(-1)}
                    edit={() => handleEditProduct(data)}
                />
                // <AddNew
                // title={`Vendor Dashboard / All Products / Update / ${data._id}`}
                // categories_list={props.categories_list}
                // sub_categories_list={props.sub_categories_list}

                // isUpdateProduct={true}
                // _id={data._id}
                // isVariableProduct={data.product_type != 'simple-product'}

                // back={() => { setViewProduct(false), setData({}) }}
                // view={() => setViewProduct('view')}
                // handleShowConfirmModal={() => handleShowConfirmModal(-1)}

                // productCategory={data.category}
                // productSubCategory={data.sub_category}
                // subCategoryDisabled={false}

                // productTags={data.product_tags}
                // warrantyType={data.warranty_type}
                // product_image_link={data.product_image_link}
                // variationsArray={data.product_variations}
                // customFieldsArray={data.custom_fields}
                // dangerousGoodsArray={data.dangerous_goods}

                // product_name={data.product_name}
                // product_description={data.product_description}
                // product_type={'variable-product'}
                // product_type={data.product_type}
                // sku={data.sku}
                // product_price={data.product_price}
                // product_in_stock={data.product_in_stock}
                // product_brand_name={data.product_brand_name}

                // product_warranty={data.product_warranty}
                // warranty_type={data.warranty_type}
                // product_discount={data.product_discount}
                // purchase_note={data.purchase_note}
                // product_weight={data.product_weight || ''}
                // dimension_length={data.dimension_length | 1}
                // dimension_width={data.dimension_width || ''}
                // dimension_height={data.dimension_height || ''}
                // shipping_charges={data.shipping_charges || ''}
                // handling_fee={data.handling_fee || ''}
                // />
                break;
            default:
                return <>
                    <TitleRow icon={faPlus} title={' Vendor Dashboard / All Products'} />
                    <CardSearchAccordion
                        title={'Inventory'}
                        option={'inventory'}
                        value={query}
                        handleSearch={handleSearch}
                        setIsSearch={() => setIsSearch(false)}
                    >
                        {!isSearch ?
                            vendor_products_loading ?
                                <Loading />
                                :
                                vendor_products_total > 0 ?
                                    <>
                                        <ProductTable
                                            list={vendor_products_products}
                                            pageNumber={page}
                                            setViewProduct={(element) => { setData(element), setViewProduct('view') }}
                                            handleEditProduct={(element) => handleEditProduct(element)}
                                            handleShowConfirmModal={(element) => handleShowConfirmModal(element)}
                                        />
                                        <hr />
                                        <PaginationRow
                                            totalPages={vendor_products_pages}
                                            activePageNumber={page}
                                            setActivePageNumber={(ppage) => handleSetPage(ppage)}
                                        />
                                    </>
                                    :
                                    <Row className='_div'>No Data Found</Row>
                            :
                            vendor_products_query_loading ?
                                <Loading />
                                :
                                vendor_products_query_total > 0 ?
                                    <>
                                        <ProductTable
                                            list={vendor_products_query_products}
                                            pageNumber={queryPage}
                                            setViewProduct={(element) => { setData(element), setViewProduct('view') }}
                                            handleEditProduct={(element) => handleEditProduct(element)}
                                            handleShowConfirmModal={(element) => handleShowConfirmModal(element)}
                                        />
                                        <hr />
                                        <PaginationRow
                                            totalPages={vendor_products_query_pages}
                                            activePageNumber={queryPage}
                                            setActivePageNumber={(ppage) => handleSetQueryPage(ppage)}
                                        />
                                    </>
                                    :
                                    <Row className='_div'>No Data Found</Row>
                        }
                    </CardSearchAccordion >
                </>
        }
    }

    return (
        <div className='vendor_inventory'>
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

            <style type="text/css">{`
                .vendor_inventory ._div{
                    display: flex;
                    justify-content: center;
                    margin: 5%;
                }
                .vendor_inventory .form_label{
                    font-size: 12px;
                }
                .vendor_inventory .form-control:disabled {
                    background: none;
                    font-size: 14px;
                }
                @media (max-width: 575px){
                    .vendor_inventory .search_col{
                        padding-top: 1%;
                    }
                }
            `}</style>
            <style jsx >{`
                th {
                    font-size: 14px;
                }
            `}</style>
        </div>
    )
}

function ProductTable(props) {
    const [lower_limit, setlower_limit] = useState(0)
    const [upper_limit, setupper_limit] = useState(0)

    useEffect(() => {
        setlower_limit(props.pageNumber * 20 - 20)
        setupper_limit(props.pageNumber * 20)
    }, [props.pageNumber])

    return (
        <div className='vendor_product_table'>
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
                {props.list && props.list.map((element, index) =>
                    index >= lower_limit && index < upper_limit && <tbody key={index}>
                        {element.product_type == "simple-product" ?
                            <tr >
                                <td align="center" >{index + 1}</td>
                                <td >
                                    {element._id}
                                    <div className="td">
                                        <Nav.Link style={styles.nav_link} className='pt-0' onClick={() => props.setViewProduct(element)} >View</Nav.Link>
                                        <Nav.Link style={styles.nav_link} className='pt-0' onClick={() => props.handleEditProduct(element)}>Edit</Nav.Link>
                                        <Nav.Link style={styles.nav_link} className='pt-0 delete' onClick={() => props.handleShowConfirmModal(element)}>Delete</Nav.Link>
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
                                <td align="center" >{index + 1}</td>
                                <td>
                                    {element._id}
                                    <div className="td">
                                        <Nav.Link style={styles.nav_link} className='pt-0' onClick={() => props.setViewProduct(element)} >View</Nav.Link>
                                        <Nav.Link style={styles.nav_link} className='pt-0' onClick={() => props.handleEditProduct(element)}>Edit</Nav.Link>
                                        <Nav.Link style={styles.nav_link} className='pt-0 delete' onClick={() => props.handleShowConfirmModal(element)}>Delete</Nav.Link>
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
                    </tbody>
                )}
            </Table >
            <style type="text/css">{`
                .vendor_product_table .delete{
                    color: #ff4d4d;
                }
                .vendor_product_table .delete:hover{
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
        </div>
    )
}

const ViewProduct = props => {
    const [ref, { x, y, width }] = useDimensions();

    const [imgPreview, setImgPreview] = useState(false);
    const [currentImgIndex, setCurrentImgIndex] = useState('')
    const [imgData, setImgData] = useState([])

    const [data, setData] = useState(props.data)

    const [name, setname] = useState(props.data.product_name)
    const [brand, setbrand] = useState(props.data.product_brand_name)
    const [price, setprice] = useState(props.data.product_price)
    const [stock, setstock] = useState(props.data.product_in_stock)
    const [discount, setdiscount] = useState(props.data.product_discount)
    const [description, setdescription] = useState(props.data.product_description)

    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [confirmModalMsg, setConfirmModalMsg] = useState('')
    const [confirmModalLoading, setConfirmModalLoading] = useState(false)

    const [showAlertModal, setShowAlertModal] = useState(false)
    const [alertModalMsg, setAlertModalMsg] = useState(false)

    const [iconname, setIconname] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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

    async function handleUpdateProduct() {
        if (name == '' || price == '' || price < 1 || stock == '' || stock < 1 || discount == '' || discount < 0) {
            alert('Enter valid values')
        } else if (name == props.data.product_name && price == props.data.product_price && discount == props.data.product_discount &&
            brand == props.data.product_brand_name && stock == props.data.product_in_stock && description == props.data.product_description
        ) {
            alert('Enter diffrent values')
        } else {
            setIsLoading(true)
            let dd = {}
            dd = {
                product_price: price,
                product_name: name,
                product_brand_name: brand,
                product_in_stock: stock,
                product_discount: discount,
                product_description: description,
            }


            const _url = MuhalikConfig.PATH + `/api/products/product/update/product/${data._id}`
            await axios({
                method: 'PUT',
                url: _url,
                headers: {
                    'authorization': props.token
                },
                data: dd,
            }).then(res => {
                setIsLoading(false)
                setAlertModalMsg('Product Updated Successfully')
                setShowAlertModal(true)
            }).catch((err) => {
                setIsLoading(false)
                alert('Update Failed')
                console.log('error:', err)
            })
        }
    }

    function handleVariabelPriceChange(val, index) {
        let copyArray = []
        copyArray = Object.assign([], data)
        let obj = {}
        obj = copyArray.product_variations[index]
        obj.price = val
        obj.priceError = ''
        copyArray.product_variations[index] = obj
        setData(copyArray)
    }
    function handleVariabelStockChange(val, index) {
        let copyArray = []
        copyArray = Object.assign([], data)
        let obj = {}
        obj = copyArray.product_variations[index]
        obj.stock = val
        obj.stockError = ''
        copyArray.product_variations[index] = obj
        setData(copyArray)
    }
    function handleVariabelDiscountChange(val, index) {
        let copyArray = []
        copyArray = Object.assign([], data)
        let obj = {}
        obj = copyArray.product_variations[index]
        obj.discount = val
        obj.discountError = ''
        copyArray.product_variations[index] = obj
        setData(copyArray)
    }

    async function handleUpdateVariation(element, index) {
        let copyArray = []
        copyArray = Object.assign([], data)
        let obj = {}
        obj = copyArray.product_variations[index]


        // let copyArray_1 = []
        // copyArray_1 = Object.assign([], props.data)
        // let obj_1 = {}
        // obj_1 = dd.product_variations[index]

        if (element.price == '' || element.price < 1 || element.stock == '' || element.stock < 1 || element.discount == '' || element.discount < 0) {
            if (element.price == '' || element.price < 1) {
                obj['priceError'] = 'Enter valid price'
            }
            if (element.stock == '' || element.stock < 1) {
                obj['stockError'] = 'Enter valid stock'
            }
            if (element.discount == '' || element.discount < 0) {
                obj['discountError'] = 'Enter valid dicount'
            }
        }
        // else if (element.price == obj_1.price && element.stock == obj_1.stock && element.discount == obj_1.discount) {
        //     if (element.price == obj_1.price) {
        //         obj['priceError'] = 'Enter diffrent price'
        //     }
        //     if (element.stock == obj_1.stock) {
        //         obj['stockError'] = 'Enter diffrent stock'
        //     }
        //     if (element.discount == obj_1.discount) {
        //         obj['discountError'] = 'Enter diffrent dicount'
        //     }
        // }
        else {
            obj['isLoading'] = true
            copyArray.product_variations[index] = obj
            setData(copyArray)
            let dd = {}
            dd = {
                price: element.price,
                stock: element.stock,
                discount: element.discount
            }

            const _url = MuhalikConfig.PATH + `/api/products/product/update/product-variation/${data._id}`
            axios({
                method: 'PUT',
                url: _url,
                headers: {
                    'authorization': props.token
                },
                data: dd,
                params: { variation_id: element._id },
            }).then((res) => {
                obj['isLoading'] = false
                setAlertModalMsg('Product Variation Updated Successfully')
                setShowAlertModal(true)
            }).catch((err) => {
                obj['isLoading'] = false
            })
        }
        copyArray.product_variations[index] = obj
        setData(copyArray)
    }

    return (
        <div className='vendor_view_product'>
            <AlertModal
                onHide={(e) => setShowAlertModal(false)}
                show={showAlertModal}
                header={'Success'}
                message={alertModalMsg}
                iconname={faThumbsUp}
                color={'green'}
            />
            <TitleRow icon={faPlus} title={` Vendor Dashboard / All Products / ${data.product_name}`} />
            <Form.Row style={{ margin: ' 1% 2%', display: 'flex', alignItems: 'center' }} >
                <Button variant='outline-primary' size='sm' className="mr-auto" onClick={props.back}>Back</Button>
                <div className="mr-auto" style={{ fontSize: '14px' }}> {data.product_name}</div>
                {props.isUpdate ?
                    null
                    :
                    <Button variant='outline-primary' size='sm' className="mr-3" onClick={props.edit}>Edit</Button>
                }
                <Button variant='outline-danger' size='sm' onClick={props.handleShowConfirmModal}>Delete</Button>
            </Form.Row>
            <CardAccordion title={'General Info'}>
                <Row>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Product ID:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={data._id} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Product Name:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" onChange={(e) => setname(e.target.value)} value={name} isInvalid={!name && props.isUpdate} disabled={!props.isUpdate} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>SKU:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={data.sku} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Brand Name:</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" onChange={(e) => setbrand(e.target.value)} value={brand} disabled={!props.isUpdate} />
                        </InputGroup>
                    </Form.Group>
                    {props.isVariableProduct ?
                        null
                        :
                        <>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Price:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" size="sm" onChange={(e) => setprice(e.target.value)} value={price} isInvalid={(!price || price < 1) && props.isUpdate} disabled={!props.isUpdate} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Product In Stock:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" size="sm" onChange={(e) => setstock(e.target.value)} value={stock} isInvalid={(!stock || stock < 1) && props.isUpdate} disabled={!props.isUpdate} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Warranty (month):</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={data.product_warranty} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Warranty Type:</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" size="sm" value={data.warranty_type} disabled={true} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                <Form.Label className='form_label'>Discount (%):</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" size="sm" onChange={(e) => setdiscount(e.target.value)} value={discount || '0%'} isInvalid={(!discount || discount < 0) && props.isUpdate} disabled={!props.isUpdate} />
                                </InputGroup>
                            </Form.Group>
                        </>
                    }

                    <Form.Group as={Col} lg={props.isVariableProduct ? 6 : 4} md={props.isVariableProduct ? 6 : 4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Purchase Note(s):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={data.purchase_note} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                        <Form.Label className='form_label'>Description:</Form.Label>
                        <InputGroup>
                            <Form.Control as="textarea" row='8' onChange={(e) => setdescription(e.target.value)} value={description || ''} disabled={!props.isUpdate} />
                        </InputGroup>
                    </Form.Group>
                    {props.isUpdate ?
                        <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                            <Button variant='outline-success' size='sm' block className="mt-5" onClick={handleUpdateProduct}>
                                {isLoading ? 'Updating' : 'Update'}
                                {isLoading ? <Spinner size='sm' animation='grow' /> : null}
                            </Button>
                        </Form.Group>
                        :
                        null
                    }
                </Row>
            </CardAccordion>

            {props.isVariableProduct ?
                <CardAccordion title={'Variations'}>
                    {data.product_variations && data.product_variations.map((element, index) =>
                        <Accordion key={index} defaultActiveKey='0' className='pb-2'>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='1' className='accordian_toggle'>
                                    <Form.Label className='p-0 mb-0 ml-0 mr-auto'>ID: {element._id}</Form.Label>
                                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.slider_fontawesome} />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='1' style={{ padding: '1%' }}>
                                    <>
                                        <Row noGutters >
                                            <label className='haeder_label'>Variations</label>
                                            <Form.Group as={Col} lg={2} md={2} sm={4} xs={6} className='pl-1 pr-1'>
                                                <Form.Label className='form_label'>Price</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="number" onChange={(e) => handleVariabelPriceChange(e.target.value, index)} isInvalid={element.priceError} size="sm" value={element.price} disabled={!props.isUpdate} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={4} xs={6} className='pl-1 pr-1'>
                                                <Form.Label className='form_label'>Stock</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="number" onChange={(e) => handleVariabelStockChange(e.target.value, index)} isInvalid={element.stockError} size="sm" value={element.stock} disabled={!props.isUpdate} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={4} xs={6} className='pl-1 pr-1'>
                                                <Form.Label className='form_label'>Discount</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="number" onChange={(e) => handleVariabelDiscountChange(e.target.value, index)} isInvalid={element.discountError} size="sm" value={element.discount} disabled={!props.isUpdate} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={4} xs={6} className='pl-1 pr-1'>
                                                <Form.Label className='form_label'>Warranty</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="text" size="sm" value={element.warranty} disabled={true} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group as={Col} lg={2} md={2} sm={4} xs={6} className='pl-1 pr-1'>
                                                <Form.Label className='form_label'>Warranty Type</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="text" size="sm" value={element.warranty_type} disabled={true} />
                                                </InputGroup>
                                            </Form.Group>
                                            {element.item && element.item.map((e, i) =>
                                                <Form.Group key={i} as={Col} lg={2} md={2} sm={4} xs={6} className='pl-1 pr-1'>
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
                                                <Form.Group key={i} as={Col} lg={2} md={2} sm={4} xs={6} className='pl-1 pr-1'>
                                                    <Form.Label className='form_label'>{e.name}</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="text" size="sm" value={e.value} disabled={true} />
                                                    </InputGroup>
                                                </Form.Group>
                                            )}
                                        </Row>
                                        <hr />
                                        <Row noGutters>
                                            <Col>
                                                {props.isUpdate ?
                                                    <Button variant='outline-success' block size='sm' onClick={() => handleUpdateVariation(element, index)}>
                                                        {element.isLoading ? 'Updating' : 'Update'}
                                                        {element.isLoading ? <Spinner size='sm' animation='grow' /> : null}
                                                    </Button>
                                                    :
                                                    null
                                                }
                                            </Col>
                                        </Row>
                                    </>
                                </Accordion.Collapse>
                            </Card>
                            <Row noGutters className='w-100'>
                                {element.image_link && element.image_link.map((img, i) =>
                                    <Col key={i} lg={1} md={2} sm={3} xs={3} >
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
                            {data.custom_fields && data.custom_fields.map((element, index) =>
                                <Form.Group key={index} as={Col} lg={2} md={2} sm={4} xs={12} className='pl-1 pr-1'>
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
                            {data.product_image_link && data.product_image_link.map((img, index) =>
                                <Col key={index} lg={1} md={2} sm={3} xs={3} >
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
                            <Form.Control type="text" size="sm" value={data.dimension_length} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Width (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={data.dimension_width} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Height (cm):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={data.dimension_height} disabled={true} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                        <Form.Label className='form_label'>Weight (kg):</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" size="sm" value={data.product_weight} disabled={true} />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </CardAccordion>
            <CardAccordion title={'Product Categories'}>
                <Form.Group>
                    <Form.Label className='heading_label'>Product Category:</Form.Label>
                    <InputGroup>
                        <Form.Label className='form_label'>
                            {data.category.value}
                        </Form.Label>
                    </InputGroup>
                </Form.Group >
                <hr />
                <Form.Group>
                    <Form.Label className='heading_label'>Product Category:</Form.Label>
                    <InputGroup>
                        <Form.Label className='form_label'>
                            {data.sub_category.value}
                        </Form.Label>
                    </InputGroup>
                </Form.Group >
                <hr />
                <Form.Group>
                    <Form.Label className='heading_label'>Product Tags:</Form.Label>
                    <InputGroup>
                        {data.product_tags && data.product_tags.map((element, index) =>
                            <Form.Label key={index} className='form_label'>
                                {element.value}
                            </Form.Label>
                        )}
                    </InputGroup>
                </ Form.Group >
            </CardAccordion >

            {/* Image Preview */}
            {
                imgPreview && <ImagePreview
                    imgData={imgData}
                    index={currentImgIndex}
                    prevImage={prevImage}
                    nextImage={nextImage}
                    setImgPreview={() => setImgPreview(false)}
                />
            }
            <style type="text/css">{`
                .vendor_view_product .heading_label{
                    font-size: 13px;
                    font-weight: bold;
                }
                .vendor_view_product .my_img_div{
                    padding: 2%;
                    cursor: pointer;
                    background: white;
                    cursor: pointer;
                }
                .vendor_view_product .my_img_div:hover{
                    box-shadow: 0px 0px 10px 0.01px gray;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    padding: 0% 2% 4% 2%;
                }
                .vendor_view_product .haeder_label{
                    font-size: 13px;
                    font-weight: bold;
                    width: 100%;
                }
                .vendor_view_product .accordian_toggle{
                    background: #9a9db1;
                    font-size: 12px;
                    color: white;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                }
                .vendor_view_product .accordian_toggle:hover{
                    background: #7d819b;
                }
                .vendor_view_product .field_col{
                    padding: 0% 2%;
                }
                .vendor_view_product .form-control:disabled {
                    color: ${props.isUpdate && 'lightgray'};
                }
            `}</style>
        </div >
    )
}

function ImagePreview(props) {
    const [ref, { x, y, width }] = useDimensions();
    return (
        <div className='vendor_img_preview'>
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
        <div className='vendor_img_preview'>
                   . .modal-overlay {
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
                    .vendor_img_preview .modal-body {
                        position: relative;
                        z-index: 11;
                        margin: 2.5%;
                        overflow: hidden;
                        max-width: 100%;
                        max-height: 100%;
                    }
                    .vendor_img_preview .close-modal {
                        position: fixed;
                        display: flex;
                        top: 10px;
                        left: 0;
                        right: 0;
                        width: 100%;
                    }
                    .vendor_img_preview .image-container {
                        margin: 2% 30%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    @media (max-width: 1299px){
                        .vendor_img_preview .image-container {
                            margin: 2% 25%;
                        }
                    }
                    @media (max-width: 1199px){
                        .vendor_img_preview .image-container {
                            margin: 2% 20%;
                        }
                    }
                    @media (max-width: 991px){
                        .vendor_img_preview .image-container {
                            margin: 2% 15%;
                        }
                    }
                     @media (max-width: 767px){
                        .vendor_img_preview .image-container {
                            margin: 2% 10%;
                        }
                    }
                     @media (max-width: 575px){
                        .vendor_img_preview .image-container {
                            margin: 10% 2%;
                        }
                    }
                `}
            </style>
        </div>
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
