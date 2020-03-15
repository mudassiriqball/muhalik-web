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
          lineNumber: 34
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: styles.title_row,
        noGutters: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faTachometerAlt"],
        style: styles.title_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("div", {
        style: styles.title,
        className: "jsx-4035273632" + " " + "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, " Dashboard ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        noGutters: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
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
          lineNumber: 40
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Products"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        style: styles.card_body,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Total Products")), __jsx("div", {
        style: styles.total_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faProductHunt"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfTotalProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, function (_ref) {
        var countUpRef = _ref.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "In-Stock Products")), __jsx("div", {
        style: styles.stock_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStoreAlt"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfInStockProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, function (_ref2) {
        var countUpRef = _ref2.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Sold Products")), __jsx("div", {
        style: styles.sold_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCheckDouble"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfSoldProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, function (_ref3) {
        var countUpRef = _ref3.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Returned Products")), __jsx("div", {
        style: styles.returned_product_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faThumbsDown"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfReturnedProducts,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, function (_ref4) {
        var countUpRef = _ref4.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
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
          lineNumber: 111
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        style: styles.card_body,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Total Orders")), __jsx("div", {
        style: styles.total_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faEdit"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfTotalOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, function (_ref5) {
        var countUpRef = _ref5.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Deleivered Orders")), __jsx("div", {
        style: styles.delivered_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faThumbsUp"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfDeliveredOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, function (_ref6) {
        var countUpRef = _ref6.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Pending Orders")), __jsx("div", {
        style: styles.prnding_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faClock"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfPendingOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, function (_ref7) {
        var countUpRef = _ref7.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }));
      }))), __jsx("div", {
        style: styles.card_text_div,
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-4035273632",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-4035273632" + " " + "label_span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Cancelled Orders")), __jsx("div", {
        style: styles.cancelled_order_row,
        className: "jsx-4035273632" + " " + "number_count_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faBan"],
        className: "mr-auto",
        style: styles.product_fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_12___default.a, {
        start: 0,
        end: this.state.noOfCancelledOrders,
        delay: 0,
        duration: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, function (_ref8) {
        var countUpRef = _ref8.countUpRef;
        return __jsx("div", {
          className: "jsx-4035273632",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, __jsx("span", {
          ref: countUpRef,
          className: "jsx-4035273632" + " " + "number_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
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
          lineNumber: 182
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        noGutters: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        noGutters: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        noGutters: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
        style: styles.card_header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4035273632",
        __self: this
      }, "p.jsx-4035273632{width:100%;border-bottom:1.2px dashed lightgray;line-height:0.1em;}.label_span.jsx-4035273632{background:#fff;padding-right:3%;}.number_count.jsx-4035273632{color:white;font-size:25px;}.number_count_div.jsx-4035273632{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5%;background:red;border-radius:5px;}.number_count_div.jsx-4035273632:hover{margin:-5px 0px 5px 0px;box-shadow:0 4px 8px 0 black,0 6px 20px 0 yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFx2ZW5kb3ItZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdOcUIsQUFHd0MsQUFLSSxBQUlILEFBSUcsQUFRVSxXQXBCWSxDQVV6QyxHQUdpQixDQVBqQixRQWV1RCxHQVh0RCxNQUpBLGVBTHFCLGtCQUNyQixPQW9CQSxnQkFSc0IsNkZBQ1IsV0FDSSxlQUVuQixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xcdmVuZG9yLWRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU3RvcmVBbHQsIGZhVXNlclBsdXMsIGZhQ2hlY2tEb3VibGUsIGZhRG9sbGFyU2lnbiwgZmFUYWNob21ldGVyQWx0LCBcclxuICAgIGZhRWRpdCwgZmFDbG9jaywgZmFCYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBWZW5kb3JEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbm9PZlRvdGFsUHJvZHVjdHM6IDEwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZJblN0b2NrUHJvZHVjdHM6IDIwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZTb2xkUHJvZHVjdHM6IDMwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZSZXR1cm5lZFByb2R1Y3RzOiA0MDAwLFxyXG5cclxuICAgICAgICAgICAgdG90YWxFYXJuaW5nczogNTQ3LFxyXG4gICAgICAgICAgICB0aGlzWWVhckVhcm5pbmdzOiAnJyxcclxuICAgICAgICAgICAgdGhpc01vbnRoRWFybmluZ3M6ICcnLFxyXG4gICAgICAgICAgICB0aGlzV2Vla0Vhcm5pbmdzOiAnJyxcclxuXHJcbiAgICAgICAgICAgIG5vT2ZUb3RhbE9yZGVyczogMTE5MCxcclxuICAgICAgICAgICAgbm9PZkRlbGl2ZXJlZE9yZGVyczogOTgwLFxyXG4gICAgICAgICAgICBub09mUGVuZGluZ09yZGVyczogMTIwLFxyXG4gICAgICAgICAgICBub09mQ2FuY2VsbGVkT3JkZXJzOiAxMDAsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUYWNob21ldGVyQWx0fSBzdHlsZT17c3R5bGVzLnRpdGxlX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMudGl0bGV9PiBEYXNoYm9hcmQgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jYXJkX2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17c3R5bGVzLmNhcmRfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5Ub3RhbCBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnRvdGFsX3Byb2R1Y3Rfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQcm9kdWN0SHVudH0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlRvdGFsUHJvZHVjdHN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5Jbi1TdG9jayBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnN0b2NrX3Byb2R1Y3Rfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdG9yZUFsdH0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZkluU3RvY2tQcm9kdWN0c30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPlNvbGQgUHJvZHVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5zb2xkX3Byb2R1Y3Rfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0RvdWJsZX0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlNvbGRQcm9kdWN0c30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPlJldHVybmVkIFByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMucmV0dXJuZWRfcHJvZHVjdF9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRodW1ic0Rvd259IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZSZXR1cm5lZFByb2R1Y3RzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENvbC0yICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jYXJkX2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3N0eWxlcy5jYXJkX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+VG90YWwgT3JkZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMudG90YWxfb3JkZXJfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mVG90YWxPcmRlcnN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5EZWxlaXZlcmVkIE9yZGVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLmRlbGl2ZXJlZF9vcmRlcl9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRodW1ic1VwfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mRGVsaXZlcmVkT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+UGVuZGluZyBPcmRlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5wcm5kaW5nX29yZGVyX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2xvY2t9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZQZW5kaW5nT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+Q2FuY2VsbGVkIE9yZGVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLmNhbmNlbGxlZF9vcmRlcl9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhbn0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZkNhbmNlbGxlZE9yZGVyc30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb2wtMyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY2FyZF9jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIEVhcm5pbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBFYXJuaW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgRWFybmluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxLjJweCBkYXNoZWQgbGlnaHRncmF5OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWxfc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm51bWJlcl9jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5udW1iZXJfY291bnRfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5udW1iZXJfY291bnRfZGl2OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC01cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgYmxhY2ssIDAgNnB4IDIwcHggMCB5ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBsaWdodGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxLjUlIDQlJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjZweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknXHJcbiAgICB9LFxyXG5cclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmRfY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzMlIDElJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAvLyBwYWRkaW5nOiAnMS41JSA1JScsXHJcbiAgICAgICAgY29sb3I6ICcjNkE3MDc0JyxcclxuICAgICAgICAvLyBib3JkZXJCb3R0b206IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4J1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dF9kaXY6IHtcclxuICAgICAgICBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzUlJyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHJvZHVjdHNcclxuICAgIHRvdGFsX3Byb2R1Y3Rfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2JsdWUnLFxyXG4gICAgfSxcclxuICAgIHN0b2NrX3Byb2R1Y3Rfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3B1cnBsZScsXHJcbiAgICB9LFxyXG4gICAgc29sZF9wcm9kdWN0X3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdncmVlbicsXHJcbiAgICB9LFxyXG4gICAgcmV0dXJuZWRfcHJvZHVjdF9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnZ3JheScsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIE9yZGVyc1xyXG4gICAgdG90YWxfb3JkZXJfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2JsdWUnLFxyXG4gICAgfSxcclxuICAgIGRlbGl2ZXJlZF9vcmRlcl9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnZ3JlZW4nLFxyXG4gICAgfSxcclxuICAgIHBybmRpbmdfb3JkZXJfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmJmMDAnLFxyXG4gICAgfSxcclxuICAgIGNhbmNlbGxlZF9vcmRlcl9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAncmVkJyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gXHJcblxyXG4gICAgcHJvZHVjdF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMzBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICczMHB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCdcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlbmRvckRhc2hib2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\vendor-dashboard.js */"));
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
//# sourceMappingURL=vendor.js.4fe0e42a94c9c0a04f05.hot-update.js.map