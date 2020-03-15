webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/vendor-dashboard.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/vendor-dashboard.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../styleSheet */ "./src/styleSheet.js");





var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\vendor-dashboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faStoreAlt, faUserPlus, faCheckDouble, faDollarSign, faEdit, faClock, faBan  } from '@fortawesome/free-solid-svg-icons';
// import { faThumbsUp,} from '@fortawesome/free-regular-svg-icons';
// import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
// import GlobalStyleSheet from '../../../../../styleSheet'
// class Dashboard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             noOfTtotalProducts: '',
//             noOfInStockProducts: '',
//             noOfSoldProducts: '',
//             noOfReturnedProducts: '',
//             totalEarnings: '',
//             thisYearEarnings: '',
//             thsMonthEarnings: '',
//             thisWeekEarnings: '',
//             noOfTotalOrders: '',
//             noOfDeliveredOrders: '',
//             noOfPendingOrders: '',
//             noOfCancelledOrders: '',
//         }
//     }
//     render() {
//         return (
//             <div style={{height:`calc(100vh - 65px)`, overflowY: 'scroll'}}>
//                 <Row style={styles.row}>
//                     <Card style={styles.card_headerr}>
//                         <Card.Header style={styles.card_headerr}>
//                             Products
//                     </Card.Header>
//                     </Card>
//                 </Row>
//                 <Row style={styles.row}>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}>Products</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faProductHunt} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}>In-Stock</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faStoreAlt} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}> Sold </Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faCheckDouble} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}> Reterned </Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row style={styles.roww}>
//                     <Card style={{ width: '100%' }}>
//                         <Card.Header style={styles.card_headerr}>
//                             Earning
//                     </Card.Header>
//                     </Card>
//                 </Row>
//                 <Row style={styles.row}>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}>Total</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}>This Year</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}> This Month </Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}>This Week</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faDollarSign} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row style={styles.roww}>
//                     <Card style={{ width: '100%' }}>
//                         <Card.Header style={styles.card_headerr}>
//                             Orders
//                     </Card.Header>
//                     </Card>
//                 </Row>
//                 <Row style={styles.row}>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}>Total</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faEdit} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}> Delivered</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faCheckDouble} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}> Pending </Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faClock} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                     <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
//                         <div className="hover">
//                             <Card style={styles.card} >
//                                 <Card.Header style={styles.card_header}>Cancelled</Card.Header>
//                                 <Card.Body>
//                                     <Row>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 1234
//                                         </Card.Text>
//                                         </Col>
//                                         <Col>
//                                             <Card.Text style={styles.card_text}>
//                                                 <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
//                                             </Card.Text>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     </Col>
//                 </Row>
//                 <style jsx>
//                     {`
//                         .hover {
//                             margin: 5px 15px
//                         }
//                         .hover:hover {
//                             margin: 0px 2%;
//                             cursor: pointer
//                         }
//                     `}
//                 </style>
//             </div >
//         )
//     }
// }
// const styles = {
//     row: {
//         margin: '2%',
//         padding: '0px'
//     },
//     roww: {
//         margin: '7% 2% 2% 2%',
//         padding: '0px'
//     },
//     col: {
//         padding: '0px',
//         margin: '0px'
//     },
//     card: {
//         background: 'white',
//         borderRadius: '0px',
//         padding: '0px',
//         margin:'0%'
//     },
//     card_header: {
//         background: 'white',
//         color: 'gray',
//         borderBottom: `0.5px solid ${GlobalStyleSheet.body_color}`
//     },
//     card_headerr: {
//         // background: `${GlobalStyleSheet.admin_primry_color}`,
//         // color: `${GlobalStyleSheet.body_color}`,
//         borderBottom: '1px solid gray',
//         width: '100%'
//     },
//     card_text: {
//         color: '#6A7074',
//         fontSize: '20px',
//     },
//     fontawesome: {
//         color: `${GlobalStyleSheet.primry_color}`,
//         width: '50px',
//         height: '50px',
//         maxHeight: '50px',
//         maxWidth: '50px',
//         float: 'right'
//     },
// }
// export default Dashboard;
// import { Row, Col, Card, InputGroup, Button } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faStoreAlt, faUserPlus, faCheckDouble, faDollarSign, faTachometerAlt, 
// faEdit, faClock, faBan  } from '@fortawesome/free-solid-svg-icons';
// import { faThumbsUp,} from '@fortawesome/free-regular-svg-icons';








var VendorDashboard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VendorDashboard, _React$Component);

  function VendorDashboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VendorDashboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(VendorDashboard).call(this, props));
    _this.state = {
      noOfTotalProducts: 1000,
      noOfInStockProducts: 2000,
      noOfSoldProducts: 3000,
      noOfReturnedProducts: 4000,
      totalEarnings: 547,
      thisYearEarnings: '',
      thisMonthEarnings: '',
      thisWeekEarnings: '',
      noOfTotalOrders: 1190,
      noOfDeliveredOrders: 980,
      noOfPendingOrders: 120,
      noOfCancelledOrders: 100
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VendorDashboard, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: styles.title_row,
        noGutters: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faTachometerAlt"],
        style: styles.title_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }), __jsx("div", {
        style: styles.title,
        className: "jsx-4035273632" + " " + "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, " Dashboard ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        noGutters: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12,
        style: styles.card_col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "Products"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        style: styles.card_body,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "Total Products")), __jsx("div", {
        style: styles.total_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faProductHunt"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfTotalProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, function (_ref) {
        var countUpRef = _ref.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, "In-Stock Products")), __jsx("div", {
        style: styles.stock_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStoreAlt"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfInStockProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, function (_ref2) {
        var countUpRef = _ref2.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 480
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, "Sold Products")), __jsx("div", {
        style: styles.sold_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCheckDouble"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfSoldProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, function (_ref3) {
        var countUpRef = _ref3.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 495
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, "Returned Products")), __jsx("div", {
        style: styles.returned_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faThumbsDown"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfReturnedProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, function (_ref4) {
        var countUpRef = _ref4.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 509
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 510
          },
          __self: this
        }));
      })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12,
        style: styles.card_col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        style: styles.card_body,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, "Total Orders")), __jsx("div", {
        style: styles.total_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faEdit"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfTotalOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, function (_ref5) {
        var countUpRef = _ref5.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 535
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, "Deleivered Orders")), __jsx("div", {
        style: styles.delivered_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faThumbsUp"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfDeliveredOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, function (_ref6) {
        var countUpRef = _ref6.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 550
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 551
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, "Pending Orders")), __jsx("div", {
        style: styles.prnding_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faClock"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfPendingOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, function (_ref7) {
        var countUpRef = _ref7.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 565
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, "Cancelled Orders")), __jsx("div", {
        style: styles.cancelled_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faBan"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfCancelledOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, function (_ref8) {
        var countUpRef = _ref8.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 580
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 581
          },
          __self: this
        }));
      })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12,
        style: styles.card_col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: styles.card_col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: styles.card_col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: styles.card_col,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        },
        __self: this
      }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4035273632",
        __self: this
      }, "p.jsx-4035273632{width:100%;border-bottom:1.2px dashed lightgray;line-height:0.1em;}.label_span.jsx-4035273632{background:#fff;padding-right:3%;}.number_count.jsx-4035273632{color:white;font-size:25px;}.number_count_div.jsx-4035273632{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5%;background:red;border-radius:5px;}.number_count_div.jsx-4035273632:hover{margin:-5px 0px 5px 0px;box-shadow:0 4px 8px 0 black,0 6px 20px 0 yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFx2ZW5kb3ItZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtuQnFCLEFBR3dDLEFBS0ksQUFJSCxBQUlHLEFBUVUsV0FwQlksQ0FVekMsR0FHaUIsQ0FQakIsUUFldUQsR0FYdEQsTUFKQSxlQUxxQixrQkFDckIsT0FvQkEsZ0JBUnNCLDZGQUNSLFdBQ0ksZUFFbkIsa0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHZlbmRvci1kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG4vLyBpbXBvcnQgeyAgZmFTdG9yZUFsdCwgZmFVc2VyUGx1cywgZmFDaGVja0RvdWJsZSwgZmFEb2xsYXJTaWduLCBmYUVkaXQsIGZhQ2xvY2ssIGZhQmFuICB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbi8vIGltcG9ydCB7IGZhVGh1bWJzVXAsfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbi8vIGltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbi8vIGltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG4vLyBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4vLyAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgICAgICBzdXBlcihwcm9wcyk7XHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXHJcbi8vICAgICAgICAgICAgIG5vT2ZUdG90YWxQcm9kdWN0czogJycsXHJcbi8vICAgICAgICAgICAgIG5vT2ZJblN0b2NrUHJvZHVjdHM6ICcnLFxyXG4vLyAgICAgICAgICAgICBub09mU29sZFByb2R1Y3RzOiAnJyxcclxuLy8gICAgICAgICAgICAgbm9PZlJldHVybmVkUHJvZHVjdHM6ICcnLFxyXG5cclxuLy8gICAgICAgICAgICAgdG90YWxFYXJuaW5nczogJycsXHJcbi8vICAgICAgICAgICAgIHRoaXNZZWFyRWFybmluZ3M6ICcnLFxyXG4vLyAgICAgICAgICAgICB0aHNNb250aEVhcm5pbmdzOiAnJyxcclxuLy8gICAgICAgICAgICAgdGhpc1dlZWtFYXJuaW5nczogJycsXHJcblxyXG4vLyAgICAgICAgICAgICBub09mVG90YWxPcmRlcnM6ICcnLFxyXG4vLyAgICAgICAgICAgICBub09mRGVsaXZlcmVkT3JkZXJzOiAnJyxcclxuLy8gICAgICAgICAgICAgbm9PZlBlbmRpbmdPcmRlcnM6ICcnLFxyXG4vLyAgICAgICAgICAgICBub09mQ2FuY2VsbGVkT3JkZXJzOiAnJyxcclxuXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6YGNhbGMoMTAwdmggLSA2NXB4KWAsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT5cclxuLy8gICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuLy8gICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBzbT17Nn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5Qcm9kdWN0czwvQ2FyZC5IZWFkZXI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBzbT17Nn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5Jbi1TdG9jazwvQ2FyZC5IZWFkZXI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBzbT17Nn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gU29sZCA8L0NhcmQuSGVhZGVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrRG91YmxlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gc209ezZ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IFJldGVybmVkIDwvQ2FyZC5IZWFkZXI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFufSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93d30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhcm5pbmdcclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuLy8gICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezZ9IHNtPXs2fSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlRvdGFsPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gc209ezZ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+VGhpcyBZZWFyPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gc209ezZ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IFRoaXMgTW9udGggPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gc209ezZ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+VGhpcyBXZWVrPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd3d9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVycn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlcnNcclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuLy8gICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezZ9IHNtPXs2fSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlRvdGFsPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gc209ezZ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IERlbGl2ZXJlZDwvQ2FyZC5IZWFkZXI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2tEb3VibGV9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBzbT17Nn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gUGVuZGluZyA8L0NhcmQuSGVhZGVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNsb2NrfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gc209ezZ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+Q2FuY2VsbGVkPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYW59IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5ob3ZlciB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAxNXB4XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyOmhvdmVyIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDIlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBgfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuLy8gICAgICAgICAgICAgPC9kaXYgPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3Qgc3R5bGVzID0ge1xyXG4vLyAgICAgcm93OiB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4vLyAgICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgcm93dzoge1xyXG4vLyAgICAgICAgIG1hcmdpbjogJzclIDIlIDIlIDIlJyxcclxuLy8gICAgICAgICBwYWRkaW5nOiAnMHB4J1xyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbDoge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4vLyAgICAgICAgIG1hcmdpbjogJzBweCdcclxuLy8gICAgIH0sXHJcbi8vICAgICBjYXJkOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuLy8gICAgICAgICBib3JkZXJSYWRpdXM6ICcwcHgnLFxyXG4vLyAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4vLyAgICAgICAgIG1hcmdpbjonMCUnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2FyZF9oZWFkZXI6IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4vLyAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbi8vICAgICAgICAgYm9yZGVyQm90dG9tOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNhcmRfaGVhZGVycjoge1xyXG4vLyAgICAgICAgIC8vIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgLy8gY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5JyxcclxuLy8gICAgICAgICB3aWR0aDogJzEwMCUnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2FyZF90ZXh0OiB7XHJcbi8vICAgICAgICAgY29sb3I6ICcjNkE3MDc0JyxcclxuLy8gICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGZvbnRhd2Vzb21lOiB7XHJcbi8vICAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgd2lkdGg6ICc1MHB4JyxcclxuLy8gICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuLy8gICAgICAgICBtYXhIZWlnaHQ6ICc1MHB4JyxcclxuLy8gICAgICAgICBtYXhXaWR0aDogJzUwcHgnLFxyXG4vLyAgICAgICAgIGZsb2F0OiAncmlnaHQnXHJcbi8vICAgICB9LFxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG4vLyBpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbi8vIGltcG9ydCB7ICBmYVN0b3JlQWx0LCBmYVVzZXJQbHVzLCBmYUNoZWNrRG91YmxlLCBmYURvbGxhclNpZ24sIGZhVGFjaG9tZXRlckFsdCwgXHJcbi8vIGZhRWRpdCwgZmFDbG9jaywgZmFCYW4gIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuLy8gaW1wb3J0IHsgZmFUaHVtYnNVcCx9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVN0b3JlQWx0LCBmYVVzZXJQbHVzLCBmYUNoZWNrRG91YmxlLCBmYURvbGxhclNpZ24sIGZhVGFjaG9tZXRlckFsdCwgXHJcbiAgICBmYUVkaXQsIGZhQ2xvY2ssIGZhQmFuIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCwgZmFUaHVtYnNEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5cclxuY2xhc3MgVmVuZG9yRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5vT2ZUb3RhbFByb2R1Y3RzOiAxMDAwLFxyXG4gICAgICAgICAgICBub09mSW5TdG9ja1Byb2R1Y3RzOiAyMDAwLFxyXG4gICAgICAgICAgICBub09mU29sZFByb2R1Y3RzOiAzMDAwLFxyXG4gICAgICAgICAgICBub09mUmV0dXJuZWRQcm9kdWN0czogNDAwMCxcclxuXHJcbiAgICAgICAgICAgIHRvdGFsRWFybmluZ3M6IDU0NyxcclxuICAgICAgICAgICAgdGhpc1llYXJFYXJuaW5nczogJycsXHJcbiAgICAgICAgICAgIHRoaXNNb250aEVhcm5pbmdzOiAnJyxcclxuICAgICAgICAgICAgdGhpc1dlZWtFYXJuaW5nczogJycsXHJcblxyXG4gICAgICAgICAgICBub09mVG90YWxPcmRlcnM6IDExOTAsXHJcbiAgICAgICAgICAgIG5vT2ZEZWxpdmVyZWRPcmRlcnM6IDk4MCxcclxuICAgICAgICAgICAgbm9PZlBlbmRpbmdPcmRlcnM6IDEyMCxcclxuICAgICAgICAgICAgbm9PZkNhbmNlbGxlZE9yZGVyczogMTAwLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy50aXRsZV9yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFjaG9tZXRlckFsdH0gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gRGFzaGJvYXJkIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY2FyZF9jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3N0eWxlcy5jYXJkX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+VG90YWwgUHJvZHVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy50b3RhbF9wcm9kdWN0X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZUb3RhbFByb2R1Y3RzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+SW4tU3RvY2sgUHJvZHVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5zdG9ja19wcm9kdWN0X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZJblN0b2NrUHJvZHVjdHN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5Tb2xkIFByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMuc29sZF9wcm9kdWN0X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2tEb3VibGV9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZTb2xkUHJvZHVjdHN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5SZXR1cm5lZCBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnJldHVybmVkX3Byb2R1Y3Rfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNEb3dufSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mUmV0dXJuZWRQcm9kdWN0c30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb2wtMiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY2FyZF9jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXtzdHlsZXMuY2FyZF9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPlRvdGFsIE9yZGVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnRvdGFsX29yZGVyX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlRvdGFsT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+RGVsZWl2ZXJlZCBPcmRlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5kZWxpdmVyZWRfb3JkZXJfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNVcH0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZkRlbGl2ZXJlZE9yZGVyc30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPlBlbmRpbmcgT3JkZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMucHJuZGluZ19vcmRlcl9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNsb2NrfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mUGVuZGluZ09yZGVyc30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPkNhbmNlbGxlZCBPcmRlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5jYW5jZWxsZWRfb3JkZXJfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYW59IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZDYW5jZWxsZWRPcmRlcnN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQ29sLTMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNhcmRfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmNhcmRfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgRWFybmluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmNhcmRfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgRWFybmluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmNhcmRfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgRWFybmluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxLjJweCBkYXNoZWQgbGlnaHRncmF5OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWxfc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm51bWJlcl9jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5udW1iZXJfY291bnRfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5udW1iZXJfY291bnRfZGl2OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC01cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgYmxhY2ssIDAgNnB4IDIwcHggMCB5ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBsaWdodGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxLjUlIDQlJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjZweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknXHJcbiAgICB9LFxyXG5cclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmRfY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzMlIDElJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAvLyBwYWRkaW5nOiAnMS41JSA1JScsXHJcbiAgICAgICAgY29sb3I6ICcjNkE3MDc0JyxcclxuICAgICAgICAvLyBib3JkZXJCb3R0b206IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4J1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dF9kaXY6IHtcclxuICAgICAgICBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzUlJyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHJvZHVjdHNcclxuICAgIHRvdGFsX3Byb2R1Y3Rfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2JsdWUnLFxyXG4gICAgfSxcclxuICAgIHN0b2NrX3Byb2R1Y3Rfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3B1cnBsZScsXHJcbiAgICB9LFxyXG4gICAgc29sZF9wcm9kdWN0X3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdncmVlbicsXHJcbiAgICB9LFxyXG4gICAgcmV0dXJuZWRfcHJvZHVjdF9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnZ3JheScsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIE9yZGVyc1xyXG4gICAgdG90YWxfb3JkZXJfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2JsdWUnLFxyXG4gICAgfSxcclxuICAgIGRlbGl2ZXJlZF9vcmRlcl9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnZ3JlZW4nLFxyXG4gICAgfSxcclxuICAgIHBybmRpbmdfb3JkZXJfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmJmMDAnLFxyXG4gICAgfSxcclxuICAgIGNhbmNlbGxlZF9vcmRlcl9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAncmVkJyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gXHJcblxyXG4gICAgcHJvZHVjdF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMzBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICczMHB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCdcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlbmRvckRhc2hib2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\vendor-dashboard.js */"));
    }
  }]);

  return VendorDashboard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var styles = {
  title_row: {
    borderBottom: '1px solid lightgray',
    padding: '1.5% 4%'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '26px',
    height: '26px',
    maxHeight: '26px',
    maxWidth: '26px'
  },
  title: {
    color: 'gray'
  },
  row: {
    margin: '2%',
    padding: '0px'
  },
  card_col: {
    padding: '3% 1%'
  },
  card_header: {
    // background: 'white',
    // padding: '1.5% 5%',
    color: '#6A7074',
    // borderBottom: `0.5px solid ${GlobalStyleSheet.body_color}`
    fontSize: '16px'
  },
  card_text_div: {
    color: '#6A7074',
    fontSize: '14px',
    padding: '5%'
  },
  // Products
  total_product_row: {
    background: 'blue'
  },
  stock_product_row: {
    background: 'purple'
  },
  sold_product_row: {
    background: 'green'
  },
  returned_product_row: {
    background: 'gray'
  },
  // Orders
  total_order_row: {
    background: 'blue'
  },
  delivered_order_row: {
    background: 'green'
  },
  prnding_order_row: {
    background: '#ffbf00'
  },
  cancelled_order_row: {
    background: 'red'
  },
  // 
  product_fontawesome: {
    color: 'white',
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primry_color),
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    "float": 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VendorDashboard);

/***/ })

})
//# sourceMappingURL=vendor.js.9d6e048b40a46ef993f1.hot-update.js.map