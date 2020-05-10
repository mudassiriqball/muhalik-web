module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("87rd");


/***/ }),

/***/ "87rd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NHP8");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bWZ2");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("qTQu");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class VendorDashboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfTotalProducts: 1000,
      noOfInStockProducts: 2000,
      noOfSoldProducts: 3000,
      noOfReturnedProducts: 4000,
      totalEarnings: 5470,
      thisYearEarnings: 2309,
      thisMonthEarnings: 1207,
      noOfTotalOrders: 1190,
      noOfDeliveredOrders: 980,
      noOfPendingOrders: 120,
      noOfCancelledOrders: 100
    };
  }

  render() {
    return __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
      title: 'Vendor Dashboard'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: {
        padding: '0% 1%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.product_card_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header
    }, "Products"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: styles.card_body
    }, __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Total Products")), __jsx("div", {
      style: styles.total_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faProductHunt"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfTotalProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "In-Stock Products")), __jsx("div", {
      style: styles.stock_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStoreAlt"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfInStockProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Sold Products")), __jsx("div", {
      style: styles.sold_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckDouble"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfSoldProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Returned Products")), __jsx("div", {
      style: styles.returned_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faThumbsDown"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfReturnedProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.order_card_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header
    }, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: styles.card_body
    }, __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Total Orders")), __jsx("div", {
      style: styles.total_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfTotalOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Deleivered Orders")), __jsx("div", {
      style: styles.delivered_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faThumbsUp"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfDeliveredOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Pending Orders")), __jsx("div", {
      style: styles.prnding_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClock"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Cancelled Orders")), __jsx("div", {
      style: styles.cancelled_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBan"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfCancelledOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.earning_card_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.total_earning_card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header
    }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, __jsx("div", {
      style: styles.total_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.year_earning_card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header
    }, "This Year Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, __jsx("div", {
      style: styles.year_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.month_earning_card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header
    }, "This Month Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, __jsx("div", {
      style: styles.month_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4035273632"
    }, ["p.jsx-4035273632{width:100%;border-bottom:1.2px dashed lightgray;line-height:0.1em;}", ".label_span.jsx-4035273632{background:#fff;padding-right:3%;}", ".number_count.jsx-4035273632{color:white;font-size:25px;}", ".number_count_div.jsx-4035273632{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5%;background:red;border-radius:5px;}", ".number_count_div.jsx-4035273632:hover{margin:-5px 0px 5px 0px;box-shadow:0 4px 8px 0 black,0 6px 20px 0 yellow;}"]));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  card_header: {
    // background: 'white',
    // padding: '1.5% 5%',
    color: '#6A7074',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].card_header_background}`
  },
  card_text_div: {
    color: '#6A7074',
    fontSize: '14px',
    padding: '5%'
  },
  // Products
  product_card_col: {
    padding: '3% 1%'
  },
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
  order_card_col: {
    padding: '3% 1%'
  },
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
  // Earnings
  earning_card_col: {
    padding: '3% 1%'
  },
  earning_card_row: {
    marginBottom: '4%'
  },
  earning_card_header: {
    color: 'white',
    fontSize: '15px'
  },
  total_earning_card: {
    width: '100%',
    background: '#0099e6'
  },
  year_earning_card: {
    width: '100%',
    background: '#ac00e6',
    color: 'blue'
  },
  month_earning_card: {
    width: '100%',
    background: '#ac7339'
  },
  // 
  total_errning_row: {
    // margin: '3% 0%',
    background: '#0088cc'
  },
  year_errning_row: {
    // margin: '3% 0%',
    background: '#9900cc'
  },
  month_errning_row: {
    // margin: '3% 0%',
    background: '#996633'
  },
  product_fontawesome: {
    color: 'white',
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VendorDashboard);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "bWZ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
let GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  admin_primry_color: '#373948',
  primary_text_color: 'white',
  // Body color
  body_color: '#F1F1F1',
  // body_color: '#DDE1E3',
  // body_color: '#F0F0F0',
  // Fontsize for all the labels of any form control (input, textbox etc):
  form_label_fontsize: '13px',
  card_header_fontsize: '14px',
  card_header_background: 'lightgray',
  react_select_styles: {
    control: base => _objectSpread({}, base, {
      fontSize: '13px'
    }),
    dropdownIndicator: base => _objectSpread({}, base, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    clearIndicator: base => _objectSpread({}, base, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    option: provided => _objectSpread({}, provided, {
      fontSize: '13px',
      display: 'absolute',
      zIndex: '1000'
    })
  }
};
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyleSheet);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qTQu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TitleRow = props => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  style: styles.title_row,
  noGutters: true
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: props.icon,
  style: styles.title_fontawesome
}), __jsx("div", {
  className: "mr-auto",
  style: styles.title
}, " Muhalik / ", props.title, " "));

const styles = {
  title_row: {
    borderBottom: '1px solid lightgray',
    padding: '1% 2.5%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '22px',
    height: '22px',
    maxHeight: '22px',
    maxWidth: '22px'
  },
  title: {
    color: 'gray',
    fontSize: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TitleRow);

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ })

/******/ });