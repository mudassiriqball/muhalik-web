import React, { Component, useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, Nav, Table, Form, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCheckDouble, faHistory, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faThumbsUp, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import CountColoredCard from '../../../count-colored-card'
import TitleRow from '../../../title-row'
import CardSearchAccordion from '../../../card-search-accordion';
import vendorOrdersPageLimit from '../../../../../vendor-orders-page-limit'
import vendorOrdersQuerySearch from '../../../../../vendor-orders-query-search'

import ConfirmModal from './../../../confirm-modal'
import AlertModal from './../../../alert-modal'
import Loading from './../../../loading'
import PaginationRow from './../../../pagination-row'
import ReactToPrint from 'react-to-print'
import MuhalikConfig from '../../../../../sdk/muhalik.config';

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh_count: 0,
      isViewOrder: false,

      single_order: {},
      token: this.props.token,
      user_id: this.props.user_id,

      showConfirmModal: false,
      confirmModalLoading: false,
      confirmModalMsg: '',
      iconname: '',
      confirmModalColor: '',

      showAlertModal: false,
      alertModalMsg: '',
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      token: nextProps.token,
      user_id: nextProps.user_id
    });
  }
  async handleConfirmed() {
    let currentComponent = this
    let data = []
    if (this.state.method == 'cancelled') {
      this.setState({ confirmModalLoading: true })
      data = {
        status: 'cancelled'
      }
    } else if (this.state.method == 'pending') {
      this.setState({ confirmModalLoading: true })
      data = {
        status: 'pending'
      }
    } else if (this.state.method == 'delivered') {
      this.setState({ confirmModalLoading: true })
      data = {
        status: 'delivered'
      }
    } else if (this.state.method == 'returned') {
      this.setState({ confirmModalLoading: true })
      data = {
        status: 'returned'
      }
    }

    const url = MuhalikConfig.PATH + `/api/orders/${this.state.single_order._id}`;
    await axios.put(url, data, {
      headers: { 'authorization': currentComponent.props.token }
    }).then(function (response) {
      currentComponent.setState({
        confirmModalLoading: false,
        showConfirmModal: false,
        alertModalMsg: `Order Status Updated  successfully`,
        showAlertModal: true,
        refresh_count: currentComponent.refresh_count + 1,
        isViewOrder: false,
      })
      currentComponent.props.ordersReloadCountHandler()
    }).catch(function (error) {
      currentComponent.setState({
        confirmModalLoading: false,
        showConfirmModal: false,
      })
      alert(`Set order to ${currentComponent.state.method} failed: `)
      console.log(`Set order to ${currentComponent.state.method} failed: `, error)
    });
  }

  render() {
    return (
      <div className='vendor_orders'>
        <ConfirmModal
          onHide={() => this.setState({ showConfirmModal: false, confirmModalLoading: false })}
          show={this.state.showConfirmModal}
          title={this.state.confirmModalMsg}
          iconname={this.state.iconname}
          color={this.state.confirmModalColor}
          _id={this.state.single_order._id}
          name={this.state.single_order.full_name}
          confirm={this.handleConfirmed.bind(this)}
          loading={this.state.confirmModalLoading}
        />
        <AlertModal
          onHide={(e) => this.setState({ showAlertModal: false })}
          show={this.state.showAlertModal}
          header={'Success'}
          message={this.state.alertModalMsg}
          iconname={faThumbsUp}
          color={'green'}
        />
        {!this.state.isViewOrder ?
          <>
            <TitleRow icon={faEdit} title={' Admin Dashboard / Orders'} />
            <Row className='Card' noGutters>
              <Col lg={4} md={4} sm={4} xs={12} className='p-0 m-0'>
                <CountColoredCard
                  count={this.props.pending_orders_count}
                  header={'Pending'}
                  background={'yellow'}
                  iconname={faHistory}
                />
              </Col>
              <Col lg={4} md={4} sm={4} xs={12} className='p-0 m-0'>
                <CountColoredCard
                  count={this.props.delivered_orders_count}
                  header={'Delivered'}
                  background={'lightgreen'}
                  iconname={faCheckDouble}
                />
              </Col>
              <Col lg={4} md={4} sm={4} xs={12} className='p-0 m-0'>
                <CountColoredCard
                  count={this.props.cancelled_orders_count}
                  header={'Cancelled'}
                  background={'orange'}
                  iconname={faBan}
                />
              </Col>
            </Row>
            {this.state.token != '' && <>
              <Order
                header={'Pending Orders'}
                setView={(element) => this.setState({
                  isViewOrder: true,
                  single_order: element,
                })}
                token={this.state.token}
                user_id={this.state.user_id}
                status={'pending'}
                refresh={this.state.refresh_count}
                setRefresh={() => this.setState({ refresh_count: this.state.refresh_count + 1 })}
                ordersReloadCountHandler={this.props.ordersReloadCountHandler}
              />
              <Order
                header={'Delivered Orders'}
                setView={(element) => this.setState({
                  isViewOrder: true,
                  single_order: element,
                })}
                token={this.state.token}
                user_id={this.state.user_id}
                status={'delivered'}
                refresh={this.state.refresh_count}
                setRefresh={() => this.setState({ refresh_count: this.state.refresh_count + 1 })}
                ordersReloadCountHandler={this.props.ordersReloadCountHandler}
              />
              <Order
                header={'Cancelled Orders'}
                setView={(element) => this.setState({
                  isViewOrder: true,
                  single_order: element,
                })}
                token={this.state.token}
                user_id={this.state.user_id}
                status={'cancelled'}
                refresh={this.state.refresh_count}
                setRefresh={() => this.setState({ refresh_count: this.state.refresh_count + 1 })}
                ordersReloadCountHandler={this.props.ordersReloadCountHandler}
              />
              <Order
                header={'Returned Orders'}
                setView={(element) => this.setState({
                  isViewOrder: true,
                  single_order: element,
                })}
                token={this.state.token}
                user_id={this.state.user_id}
                status={'returned'}
                refresh={this.state.refresh_count}
                setRefresh={() => this.setState({ refresh_count: this.state.refresh_count + 1 })}
                ordersReloadCountHandler={this.props.ordersReloadCountHandler}
              />
            </>
            }
          </>
          :
          <ViewOrder
            back={() => this.setState({ isViewOrder: false })}
            single_order={this.state.single_order}
            setPending={() => {
              this.setState({
                method: 'pending',
                showConfirmModal: true,
                confirmModalMsg: 'Set Order Pnding?',
                confirmModalColor: '#ffc107',
                iconname: faHistory,
              })
            }}
            setDelivered={() => {
              this.setState({
                method: 'delivered',
                showConfirmModal: true,
                confirmModalMsg: 'Set Order Delivered?',
                confirmModalColor: 'green',
                iconname: faCheckCircle,
              })
            }}
            setCancel={() => {
              this.setState({
                method: 'pending',
                showConfirmModal: true,
                confirmModalMsg: 'Cancel Order?',
                confirmModalColor: '#ff4d4d',
                iconname: faTimes,
              })
            }}
            setReturned={() => {
              this.setState({
                method: 'returned',
                showConfirmModal: true,
                confirmModalMsg: 'Set Order Returned?',
                confirmModalColor: '#ff4d4d',
                iconname: faBan,
              })
            }}
          />
        }
        <style type="text/css">{`
          .vendor_orders .Card {
              margin: 1%;
          }
          th {
              text-align: center;
              font-size: 14px;
              white-space: nowrap;
          }
          .vendor_orders .td {
              display: flex;
              flex-direction: row;
              font-size: 12px;
              float: right;
              padding: 0%;
              margin: 0%;
          }
          .vendor_orders td {
              font-size: 12px;
          }
      `}</style>
      </div>
    )
  }
}

function Order(props) {
  const [page, setPage] = useState(1)
  const [queryPage, setQueryPage] = useState(1)
  const [pageNumber, setpageNumber] = useState(1)
  const [queryPageNumber, setQueryPageNumber] = useState(1)
  const [isSearch, setIsSearch] = useState(false)
  const [fieldName, setFieldName] = useState('')
  const [query, setQuery] = useState('')

  const [single_order, setSingle_order] = useState({})
  // Confirm Modal
  const [method, setMethod] = useState('')
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [confirmModalMsg, setConfirmModalMsg] = useState('')
  const [confirmModalColor, setConfirmModalColor] = useState('green')
  const [confirmModalLoading, setConfirmModalLoading] = useState(false)

  const [showAlertModal, setShowAlertModal] = useState(false)
  const [alertModalMsg, setAlertModalMsg] = useState(false)

  const [iconname, setIconname] = useState(null)

  const { vendor_orders_loading, vendor_orders_error, vendor_orders, vendor_orders_pages, vendor_orders_total } =
    vendorOrdersPageLimit(props.token, props.user_id, props.refresh, props.status, pageNumber, '20')
  const { vendor_orders_query_loading, vendor_orders_query_error, vendor_query_orders, vendor_orders_query_pages, vendor_orders_query_total } =
    vendorOrdersQuerySearch(props.token, props.user_id, props.refresh, props.status, fieldName, query, queryPageNumber, '20')

  // console.log(`${props.status}`, vendor_orders)
  async function handleSearch(type, value) {
    if (value != '') {
      setFieldName(type)
      setQuery(value)
      setIsSearch(true)
    } else {
      setIsSearch(false)
    }
  }

  function handleSetPage(ppage) {
    if (ppage > page) {
      setPage(ppage)
      setpageNumber(ppage)
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

  async function handleConfirmed() {
    let data = []
    if (method == 'cancelled') {
      setConfirmModalLoading(true)
      data = {
        status: 'cancelled'
      }
    } else if (method == 'pending') {
      setConfirmModalLoading(true)
      data = {
        status: 'pending'
      }
    } else if (method == 'delivered') {
      setConfirmModalLoading(true)
      data = {
        status: 'delivered'
      }
    } else if (method == 'returned') {
      setConfirmModalLoading(true)
      data = {
        status: 'returned'
      }
    }

    const url = MuhalikConfig.PATH + `/api/orders/${single_order._id}`;
    await axios.put(url, data, {
      headers: { 'authorization': props.token }
    }).then(function (response) {
      setConfirmModalLoading(false)
      setShowConfirmModal(false)
      setAlertModalMsg(`Order Status Updated  successfully`)
      setShowAlertModal(true)
      props.ordersReloadCountHandler()
      props.setRefresh()
    }).catch(function (error) {
      setConfirmModalLoading(false)
      setShowConfirmModal(false)
      alert(`Set order to ${method} failed: `);
      console.log(`Set order to ${method} failed: `, error)
    });
  }

  return (
    <div className='vendor_table'>
      <ConfirmModal
        onHide={() => { setShowConfirmModal(false), setConfirmModalLoading(false) }}
        show={showConfirmModal}
        title={confirmModalMsg}
        iconname={iconname}
        color={confirmModalColor}
        _id={single_order._id}
        name={single_order.full_name}
        confirm={handleConfirmed}
        loading={confirmModalLoading}
      />
      <AlertModal
        onHide={(e) => setShowAlertModal(false)}
        show={showAlertModal}
        header={'Success'}
        message={alertModalMsg}
        iconname={faThumbsUp}
        color={'green'}
      />

      <CardSearchAccordion
        title={props.header}
        option={'order'}
        value={query}
        handleSearch={handleSearch}
        setIsSearch={() => setIsSearch(false)}
      >
        {!isSearch ?
          vendor_orders_loading ?
            <Loading />
            :
            vendor_orders_total > 0 ?
              <>
                <OrderTable
                  pageNumber={page}
                  list={vendor_orders}
                  status={props.status}
                  setView={props.setView}

                  setPending={(element) => {
                    setMethod('pending')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Set Order Pending?')
                    setConfirmModalColor('#ffc107')
                    setIconname(faHistory)
                  }}
                  setDelivered={(element) => {
                    setMethod('delivered')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Set Order Delivered?')
                    setConfirmModalColor('green')
                    setIconname(faCheckCircle)
                  }}
                  setCancel={(element) => {
                    setMethod('cancelled')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Cancel Order?')
                    setConfirmModalColor('#ff4d4d')
                    setIconname(faTimes)
                  }}
                  setReturned={(element) => {
                    setMethod('returned')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Set Order Returned?')
                    setConfirmModalColor('#ff4d4d')
                    setIconname(faBan)
                  }}
                />
                <hr />
                <PaginationRow
                  totalPages={vendor_orders_pages}
                  activePageNumber={page}
                  setActivePageNumber={(ppage) => handleSetPage(ppage)}
                />
              </>
              :
              <Row className='_div'>No Data Found</Row>
          :
          vendor_orders_query_loading ?
            <Loading />
            :
            vendor_orders_query_total ?
              <>
                <OrderTable
                  pageNumber={queryPage}
                  list={vendor_query_orders}
                  status={props.status}
                  setView={props.setView}

                  setPending={(element) => {
                    setMethod('pending')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Set Order Pending?')
                    setConfirmModalColor('green')
                    setIconname(faHistory)
                  }}
                  setDelivered={(element) => {
                    setMethod('delivered')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Set Order Delivered?')
                    setConfirmModalColor('green')
                    setIconname(faCheckCircle)
                  }}
                  setCancel={(element) => {
                    setMethod('cancelled')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Cancel Order?')
                    setConfirmModalColor('#ff4d4d')
                    setIconname(faTimes)
                  }}
                  setReturned={(element) => {
                    setMethod('returned')
                    setSingle_order(element)
                    setShowConfirmModal(true)
                    setConfirmModalMsg('Set Order Returned?')
                    setConfirmModalColor('#ff4d4d')
                    setIconname(faBan)
                  }}
                />
                <hr />
                <PaginationRow
                  totalPages={vendor_orders_query_pages}
                  activePageNumber={queryPage}
                  setActivePageNumber={(ppage) => handleSetQueryPage(ppage)}
                />
              </>
              :
              <Row className='_div'>No Data Found</Row>
        }
      </CardSearchAccordion>
    </div>
  )
}

function OrderTable(props) {
  const [lower_limit, setlower_limit] = useState(0)
  const [upper_limit, setupper_limit] = useState(0)

  useEffect(() => {
    setlower_limit(props.pageNumber * 20 - 20)
    setupper_limit(props.pageNumber * 20)
  }, [props.pageNumber])

  return (
    <div className='vendor_table'>
      <Table responsive bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Id</th>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Products</th>
            <th>Sub Total</th>
            <th>Shipping Charges</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.list && props.list.map((element, index) =>
            index >= lower_limit && index < upper_limit && <tr key={index}>
              <td align="center" >{lower_limit + 1}</td>
              <td>
                {element._id}
                <div className="td">
                  {props.status == 'pending' && <>
                    <Nav.Link className='pt-0 success' onClick={() => props.setDelivered(element)} > Delivered </Nav.Link>
                    <Nav.Link className='pt-0 delete' onClick={() => props.setCancel(element)} > Cancel </Nav.Link>
                    <Nav.Link className='pt-0 delete' onClick={() => props.setReturned(element)} > Returned </Nav.Link>
                  </>
                  }
                  {props.status == 'delivered' && <>
                    <Nav.Link className='pt-0 warning' onClick={() => props.setPending(element)} > Pending </Nav.Link>
                    <Nav.Link className='pt-0 delete' onClick={() => props.setCancel(element)} > Cancel </Nav.Link>
                    <Nav.Link className='pt-0 delete' onClick={() => props.setReturned(element)} > Returned </Nav.Link>
                  </>
                  }
                  {props.status == 'cancelled' && <>
                    <Nav.Link className='pt-0 warning' onClick={() => props.setPending(element)} > Pending </Nav.Link>
                    <Nav.Link className='pt-0 success' onClick={() => props.setDelivered(element)} > Delivered </Nav.Link>
                    <Nav.Link className='pt-0 delete' onClick={() => props.setReturned(element)} > Returned </Nav.Link>
                  </>
                  }
                  {props.status == 'returned' && <>
                    <Nav.Link className='pt-0 warning' onClick={() => props.setPending(element)} > Pending </Nav.Link>
                    <Nav.Link className='pt-0 success' onClick={() => props.setDelivered(element)} > Delivered </Nav.Link>
                    <Nav.Link className='pt-0 delete' onClick={() => props.setCancel(element)} > Cancelled </Nav.Link>
                  </>
                  }
                  <Nav.Link className='pt-0' onClick={() => props.setView(element)} > View </Nav.Link>
                </div>
              </td>
              <td align="center" >{element.c_id}</td>
              <td align="center" >{element.c_name}</td>
              <td align="center" >{element.mobile}</td>
              <td align="center" >{element.city}</td>
              <td align="center" >{element.products.length || ''}</td>
              <td align="center" >{element.sub_total}</td>
              <td align="center" >{element.shipping_charges}</td>
              <td align="center" >{element.entry_date.substring(0, 10) || '-'}</td>
            </tr>
          )}
        </tbody>
      </Table>
      <style jsx>
        {`
        th {
          text-align: center;
          font-size: 14px;
          white-space: nowrap;
        }
        .vendor_table .td {
            display: flex;
            flex-direction: row;
            font-size: 12px;
            float: right;
            padding: 0%;
            margin: 0%;
        }
        .vendor_table td {
            font-size: 12px;
        }
      `}
      </style>
      <style type="text/css">{`
        .vendor_table .delete{
            color: #ff4d4d;
        }
        .vendor_table .delete:hover{
            color: #cc0000;
        }
        .vendor_table .success {
          color: #00cc00;
        }
        .vendor_table .success:hover {
          color: #009900;
        }
        .vendor_table .warning {
          color: #ffc107;
        }
        .vendor_table .warning:hover {
          color: #cc9900;
        }
    `}</style>
    </div>
  )
}

function ViewOrder(props) {
  let componentRef = React.useRef();
  return (
    <div>
      <TitleRow icon={faEdit} title={`Admin Dashboard / Vendors / ${props.single_order.full_name}`} />
      <Form.Row style={{ margin: ' 0% 2%', display: 'flex', alignItems: 'center' }} >
        <Button size='sm' variant='outline-primary' className="mr-auto mt-2" onClick={props.back}> Back </Button>


        {props.single_order.status == 'pending' && <>
          <Button size='sm' variant='outline-success' className="mt-2 ml-1 mr-1" onClick={props.setDelivered}> Delivered </Button>
          <Button size='sm' variant='outline-danger' className="mt-2 ml-1 mr-1" onClick={props.setCancel}> Cancel </Button>
          <Button size='sm' variant='outline-primary' className="mt-2 ml-1 mr-1" onClick={props.setReturned}> Returned </Button>
        </>
        }
        {props.single_order.status == 'delivered' && <>
          <Button size='sm' variant='outline-warning' className="mt-2 ml-1 mr-1" onClick={props.setPending}> Pending </Button>
          <Button size='sm' variant='outline-danger' className="mt-2 ml-1 mr-1" onClick={props.setCancel}> Cancel </Button>
          <Button size='sm' variant='outline-primary' className="mt-2 ml-1 mr-1" onClick={props.setReturned}> Returned </Button>
        </>
        }
        {props.single_order.status == 'cancelled' && <>
          <Button size='sm' variant='outline-warning' className="mt-2 ml-1 mr-1" onClick={props.setPending}> Pending </Button>
          <Button size='sm' variant='outline-success' className="mt-2 ml-1 mr-1" onClick={props.setDelivered}> Delivered </Button>
          <Button size='sm' variant='outline-primary' className="mt-2 ml-1 mr-1" onClick={props.setReturned}> Returned </Button>
        </>
        }
        {props.single_order.status == 'returned' && <>
          <Button size='sm' variant='outline-warning' className="mt-2 ml-1 mr-1" onClick={props.setPending}> Pending </Button>
          <Button size='sm' variant='outline-success' className="mt-2 ml-1 mr-1" onClick={props.setDelivered}> Delivered </Button>
          <Button size='sm' variant='outline-danger' className="mt-2 ml-1 mr-1" onClick={props.setCancel}> Cancel </Button>
        </>
        }



        <ReactToPrint
          trigger={() => <Button size='sm' variant='primary' className='mt-2 ml-4'> Print </Button>}
          content={() => componentRef.current}
          bodyClass='print_style'
          documentTitle='Order'
        />

      </Form.Row>
      <Card className='view_user' ref={componentRef}>
        <Card.Body>
          <Row>
            <p className='p'><span>Order Info</span></p>
            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Placed On</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.entry_date.substring(0, 10)} disabled={true} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Order Id</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order._id} disabled={true} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Status</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.status} disabled={true} />
              </InputGroup>
            </Form.Group>

            <p className='p'><span>Custmer Info</span></p>
            <Form.Group as={Col} lg={3} md={6} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Cutomer Id</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.c_id} disabled={true} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} lg={3} md={6} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Mobile</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.mobile || '-'} disabled={true} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} lg={3} md={6} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Name</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.c_name || '-'} disabled={true} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} lg={3} md={6} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>City</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.city} disabled={true} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} lg={12} md={12} sm={12} xs={12} className='address_form_group'>
              <Form.Label className='form_label'>Address</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.address} disabled={true} />
              </InputGroup>
            </Form.Group>

            <p className='p'><span>Price Info</span></p>
            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Sub Total</Form.Label>
              <InputGroup>
                <Form.Control type="text" size="sm" className='form_control' value={props.single_order.sub_total} disabled={true} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} lg={4} md={4} sm={6} xs={12} className='form_group'>
              <Form.Label className='form_label'>Shipping Charges</Form.Label>
              <InputGroup>
                <Form.Control type="text" className='form_control' size="sm" value={props.single_order.shipping_charges} disabled={true} />
              </InputGroup>
            </Form.Group>

            <p className='p' style={{ marginTop: '10px', marginBottom: '40px' }}><span>Order Details</span></p>
            <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
              <InputGroup>
                <Table responsive bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Id</th>
                      <th>Variation Id</th>
                      <th>Vendor Id</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {props.single_order.products && props.single_order.products.map((element, index) =>
                    <tbody>
                      <td align="center" >{index + 1}</td>
                      <td align="center" >{element.p_id}</td>
                      <td align="center" >{element.variation_id}</td>
                      <td align="center" >{element.vendor_id}</td>
                      <td align="center" >{element.quantity}</td>
                      <td align="center" >{element.price}</td>
                    </tbody>
                  )}
                </Table>
              </InputGroup>
            </Form.Group>
          </Row>
        </Card.Body>
      </Card>
      <style type="text/css">{`
        .print_style {
            display: flex;
            padding-top: 80px;
            min-width: 100%;
            max-width: 100%;
        }
        .print_style .form_group {
            min-width: 25%;
            max-width: 25%;
        }
        .print_style .address_form_group {
            width: 100%;
        }
        .vendor_orders .view_user {
            margin: 1% 2%;
        }
        .vendor_orders .p, .print_style .p {
            width: 100%; 
            text-align: center; 
            border-bottom: 1px solid lightgray; 
            line-height: 0.1em;
            margin: 20px 20px;
        } 

        .vendor_orders .p span, .print_style .p span {
            font-size: 13px;
            color: gray;
            background: white;
            padding:0 10px;
        }
        th {
            text-align: center;
            font-size: 14px;
            white-space: nowrap;
        }
        .vendor_orders .td {
            display: flex;
            flex-direction: row;
            font-size: 12px;
            float: right;
            padding: 0%;
            margin: 0%;
        }
        .vendor_orders td {
            font-size: 12px;
        }
        .vendor_orders .form_control:disabled, .print_style .form_control:disabled {
            background: none;
            border: none;
            padding-left: 0%;
            padding-top: 0%;
            font-size: 14px;
            font-weight: bold;
        }
    `}</style>
    </div>
  )
}
