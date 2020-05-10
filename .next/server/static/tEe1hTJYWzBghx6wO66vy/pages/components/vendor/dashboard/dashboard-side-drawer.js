module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JS1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bWZ2");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CardAccordion = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
  defaultActiveKey: "0",
  noGutters: true,
  style: {
    margin: '2%'
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  style: styles.card
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
  style: styles.card_header
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, props.title), __jsx("div", {
  className: "mr-auto"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Toggle, {
  eventKey: "0",
  style: {
    background: 'none'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  size: "xs",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
  style: styles.slider_fontawesome
}))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Collapse, {
  eventKey: "0"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, props.children)))));

const styles = {
  card: {
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].card_header_background}`
  },
  slider_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].admin_primry_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CardAccordion);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2STs":
/***/ (function(module, exports) {

module.exports = require("react-select-material-ui");

/***/ }),

/***/ "3R2T":
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



const ShowToast = props => {
  return __jsx("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '40%',
      zIndex: '100'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    onClose: props.onCloseHandler,
    show: props.show,
    delay: 10000,
    autohide: true,
    style: {
      display: 'absolute',
      background: '#e6ffe6',
      width: '300px',
      border: `0.5px solid ${props.color}`
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.iconName,
    style: {
      color: `${props.color}`,
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    },
    className: "mr-auto"
  }), __jsx("span", {
    style: {
      marginLeft: '20px',
      fontSize: '18px',
      color: `${props.color}`,
      fontWeight: 'bold'
    },
    className: "mr-auto"
  }, props.header)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, {
    style: styles.toastBody
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    }
  }, __jsx("span", {
    className: "mr-auto"
  }, props.message)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowToast);
const styles = {
  toastBody: {
    fontSize: '16px',
    padding: '10px'
  }
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ECmN");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "73vd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const options = [{
  value: 'chocolat',
  label: 'Chocolat'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];

class Orders extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      files: []
    });

    _defineProperty(this, "fileSelectedHandler", e => {
      this.setState({
        files: [...this.state.files, ...e.target.files]
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Orders);

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

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "ECmN":
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
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dashboard_contents_vendor_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("87rd");
/* harmony import */ var _dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("sUJQ");
/* harmony import */ var _dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tz4B");
/* harmony import */ var _dashboard_contents_product_contents_add_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dZKh");
/* harmony import */ var _dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("wY5l");
/* harmony import */ var _dashboard_contents_discounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("UJaG");
/* harmony import */ var _dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("L0tY");
/* harmony import */ var _dashboard_contents_bulk_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("L0/n");
/* harmony import */ var _dashboard_contents_orders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("73vd");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("vvUq");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("VbX6");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("bWZ2");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  const [show_product, setShow_product] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  async function upload(data) {
    console.log('da111222333ta: ', data);
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].PATH + '/api/products/add';
    await axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(url, {
      data
    }, {
      headers: {
        'authorization': await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_16__[/* getUncodededTokenFromStorage */ "c"])()
      }
    }).then(function (response) {
      return true;
    }).catch(function (error) {
      return false;
    });
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "Dashboard"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + (drawerClasses || "")
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: styles.image
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik
  }, " ", props.token, " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Dashboard",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, "Dashboard"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: styles.nav_link,
    onClick: () => setShow_product(!show_product)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, " Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: show_product ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"],
    style: styles.forword_fontawesome
  })))), show_product ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AllProducts",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, " All Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddNew",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, " Add New "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddCategory",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, " Add Category "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, "Inventory"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "BulkUpload",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, "Bulk Upload"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Discounts",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, "Discount Coupons"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Orders",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, "Orders"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Reports",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, "Reports"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    onClick: (props.click, props.logoutClickHandler),
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPowerOff"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "mr-auto"
  }, "Logout"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]]]) + " " + "tabs_side_drawer_tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Dashboard"
  }, __jsx(_dashboard_contents_vendor_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AllProducts"
  }, __jsx(_dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddNew"
  }, __jsx(_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_8__["default"], {
    upload: upload,
    isUpdateProduct: false,
    productCategories: '',
    productSubCategories: '',
    productSubSubCategories: '',
    subCategoryDisabled: true,
    subSubCategoryDisabled: true,
    productTags: [],
    warrantyType: '',
    simple_product_image_link: [],
    variationsArray: [],
    dangerousGoodsArray: []
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddCategory"
  }, __jsx(_dashboard_contents_product_contents_add_category__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory"
  }, __jsx(_dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "BulkUpload"
  }, __jsx(_dashboard_contents_bulk_upload__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Discounts"
  }, __jsx(_dashboard_contents_discounts__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Orders"
  }, __jsx(_dashboard_contents_orders__WEBPACK_IMPORTED_MODULE_14__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Reports"
  }, __jsx(_dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_12__["default"], null)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3017863662",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color]
  }, [`.nav_link.__jsx-style-dynamic-selector{color:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;}`, ".nav_link.__jsx-style-dynamic-selector:hover{background:#30313E;}", `.tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color};box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;overflow-y:auto;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}`, ".tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}", `.product_submenu.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:0% 5% 0% 10%;}`, "p.__jsx-style-dynamic-selector{text-align:center;margin:0px;padding:0px;}", `label.__jsx-style-dynamic-selector{margin-top:4%;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color};}`, "@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}"]));
};

const styles = {
  image_div: {
    background: 'white',
    width: '100%',
    borderRight: '0.5px solid gray',
    padding: '2%'
  },
  image: {
    width: '80px'
  },
  muhalik: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].admin_primry_color}`,
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    padding: '0px',
    margin: '0px'
  },
  nav_link: {
    color: 'white',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  product_submenu_link: {
    color: 'white',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
    height: '40px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color}`,
    marginRight: '8%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].body_color}`,
    float: 'right',
    width: '8px',
    height: '8px',
    maxHeight: '8px',
    maxWidth: '8px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DashboardSideDrawer);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HcA0":
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
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("bWZ2");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qxaI");
/* harmony import */ var _add_new_field_name_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nvxB");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const groupStyles = {
  border: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].admin_primry_color}`,
  borderRadius: '5px',
  background: 'white',
  color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].admin_primry_color}`
};

const Group = props => __jsx("div", {
  style: groupStyles
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_6__["components"].Group, props));

const CustomFields = props => {
  const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [fieldName, setFieldName] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [fieldValue, setFieldValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');

  function handleAddCustomFieldBtnClick() {
    if (fieldName != '' && fieldValue != '') {
      const copyArray = Object.assign([], props.customFieldsArray);
      copyArray.push({
        name: fieldName.value,
        value: fieldValue
      });
      props.setFieldsArrayHandler(copyArray);
      setError('');
      setFieldName('');
      setFieldValue('');
    } else {
      setError('Enter Field Name and Value');
    }
  }

  function deleteCustomFieldsClick(index) {
    const copyArray = Object.assign([], props.customFieldsArray);
    copyArray.splice(index, 1);
    props.setFieldsArrayHandler(copyArray);
  }

  function saveCustomFieldsHandler() {
    if (props.customFieldsArray != '') {
      setError('');
      props.saveCustomFieldsHandler();
    } else {
      setError('Add Fields First');
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.showCustomFields ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Please First Create Variations ") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      margin: '0%',
      padding: '1.5%',
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].body_color}`
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Name"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_6___default.a, {
    styles: _styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].react_select_styles,
    options: _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_7__[/* groupedOptions */ "a"],
    components: {
      Group
    },
    value: fieldName,
    onChange: e => setFieldName(e)
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: {
      padding: '0%',
      margin: '0%',
      fontSize: '14px'
    },
    onClick: () => setModalShow(true)
  }, "Add New"), __jsx(_add_new_field_name_model__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false)
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Value "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: {
      fontSize: '14px'
    },
    type: "text",
    placeholder: "Enter Value",
    name: "sku",
    value: fieldValue,
    onChange: e => setFieldValue(e.target.value)
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: handleAddCustomFieldBtnClick
  }, "Add"))), __jsx("span", {
    className: "jsx-1112730667" + " " + "mr-auto"
  }, " ", error, " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    noGutters: true
  }, props.isVariableProduct ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label,
    className: "mr-auto"
  }, "For Variable Products each Custom Field will be added to all variations") : null, __jsx("div", {
    className: "jsx-1112730667" + " " + 'mr-auto'
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    onClick: saveCustomFieldsHandler
  }, "Save Fields")))), __jsx("div", {
    style: {
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].body_color}`,
      marginTop: '1%'
    },
    className: "jsx-1112730667"
  }, props.customFieldsArray && props.customFieldsArray.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      padding: '1% 2%'
    },
    key: index
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    size: "sm",
    value: element.name,
    onChange: () => element.name
  }, __jsx("option", {
    className: "jsx-1112730667"
  }, element.name))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: element.value,
    onChange: () => element.value
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => deleteCustomFieldsClick(index)
  }, " delete")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1112730667"
  }, ["span.jsx-1112730667{color:red;font-size:13px;}"]));
};

const styles = {
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%'
  },
  card_header: {
    width: '100%',
    alignItems: 'center',
    // color: '#6A7074',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].card_header_background}`
  },
  label: {
    fontSize: '13px'
  },
  accordin_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "L0/n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bWZ2");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VbX6");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("qTQu");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class BulkUpload extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "downloadBulkUploadTemplete", () => {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('/excel.xlsx').then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'muhalik bulk-upload templete.xlsx';
          a.click();
        });
      });
    });

    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit

    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }

  onChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  async fileUpload(file) {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].PATH + '/api/products/bulk-upload';
    const form = new FormData();
    form.append('file', file);
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, form, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      console.log(error);
    });
    return "fuck"; // const form = new FormData()
    // form.append('username', 'malcoded')
    // form.append('file', file)
    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //     body: form,
    // })
    // return response;
    // const response = await axios.post(
    //     url,
    //     { example: 'data' },
    //     { headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"  } }
    //   )

    return response; // const form = new FormData();
    // form.set('username', 'malcoded');
    // form.append('file', file);
    // return axios.post(url, file, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // })
    // const formData = new FormData();
    // formData.append('file', file)
    // const config = {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*"
    //     }
    // }
    // return post(url, formData, {
    //     headers: {
    //         'Access-Control-Allow-Origin': true,
    //     }
    // });
  }

  render() {
    return __jsx("div", null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUpload"],
      title: ' Vendor Dashboard / All Products'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Download Templete"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "primary",
      size: "md",
      active: true,
      onClick: this.downloadBulkUploadTemplete
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDownload"],
      style: styles.fontawesome
    }), "Download")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Upload File"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx("form", {
      onSubmit: this.onFormSubmit
    }, __jsx("div", {
      style: styles.browseBtnDiv
    }, __jsx("input", {
      type: "file",
      onChange: this.onChange
    })), __jsx("div", {
      style: {
        width: '100%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "primary",
      size: "md",
      active: true,
      type: "submit"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUpload"],
      style: styles.fontawesome
    }), "Upload")))))));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  card: {
    width: '100%'
  },
  card_header: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].card_header_background}`
  },
  browseBtnDiv: {
    width: '100%',
    padding: '0px 0px 10px 0px'
  },
  fontawesome: {
    color: 'white',
    marginRight: '10px',
    width: '14px',
    height: '14px',
    maxHeight: '14px',
    maxWidth: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BulkUpload);

/***/ }),

/***/ "L0tY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _report_contents_weekly_reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MwrM");
/* harmony import */ var _report_contents_monthly_reports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xZEg");
/* harmony import */ var _report_contents_yearly_reports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Wx9U");
/* harmony import */ var _report_contents_overall_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VrQ6");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Reports = () => {
  return __jsx("div", {
    style: {
      width: '100%',
      margin: '2%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "overall",
    transition: false,
    id: "reports_tab",
    justify: true,
    fill: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "overall",
    title: "Overall"
  }, __jsx(_report_contents_overall_reports__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "yearly",
    title: "Yearly"
  }, __jsx(_report_contents_yearly_reports__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "monthly",
    title: "Monthly"
  }, __jsx(_report_contents_monthly_reports__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "weekly",
    title: "Weekly"
  }, __jsx(_report_contents_weekly_reports__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Reports);

/***/ }),

/***/ "MwrM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class WeeklyReports extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      striped: true,
      bordered: true,
      hover: true,
      responsive: true
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "First Name"), __jsx("th", null, "Last Name"), __jsx("th", null, "Username"))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "1"), __jsx("td", null, "Mark"), __jsx("td", null, "Otto"), __jsx("td", null, "@mdo")), __jsx("tr", null, __jsx("td", null, "2"), __jsx("td", null, "Jacob"), __jsx("td", null, "Thornton"), __jsx("td", null, "@fat")), __jsx("tr", null, __jsx("td", null, "3"), __jsx("td", {
      colSpan: "2"
    }, "Larry the Bird"), __jsx("td", null, "@twitter"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WeeklyReports);

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UJaG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Discounts = () => {
  return __jsx("div", null, __jsx("p", null, "This is Discount page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Discounts);

/***/ }),

/***/ "VbX6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const path = 'https://muhalikweb.herokuapp.com'; // const path = 'http://localhost:5000';

const MuhalikConfig = {
  PATH: path
};
/* harmony default export */ __webpack_exports__["a"] = (MuhalikConfig);

/***/ }),

/***/ "VrQ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OverallReports = () => {
  return __jsx("div", null, "This is overall");
};

/* harmony default export */ __webpack_exports__["default"] = (OverallReports);

/***/ }),

/***/ "Wx9U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const YearlyReports = () => {
  return __jsx("div", null, "This is overall");
};

/* harmony default export */ __webpack_exports__["default"] = (YearlyReports);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZTIo":
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
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLyC");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_select_creatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2STs");
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select_material_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bWZ2");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VbX6");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("qxaI");
/* harmony import */ var _add_new_field_name_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("nvxB");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const groupStyles = {
  border: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].admin_primry_color}`,
  borderRadius: '5px',
  background: 'white',
  color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].admin_primry_color}`
};
const coomponents = {
  DropdownIndicator: null
};

const Group = props => __jsx("div", {
  style: groupStyles
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_9__["components"].Group, props));

const ProductData = props => {
  const [imgLinkValue, setImgLinkValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [imgLinkError, setImgLinkError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
    style: {
      margin: '2%'
    },
    defaultActiveKey: "0"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: styles.card
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    style: styles.card_header
  }, "Product Data", __jsx("div", {
    className: "jsx-3282219053" + " " + 'mr-auto'
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: {
      width: '50%'
    },
    as: "select",
    name: "product_type",
    size: "sm",
    value: props.product_type_values,
    onChange: e => {
      props.onChange(e), props.productTypeHandler(e);
    } // disabled={props.isUpdateProduct}

  }, __jsx("option", {
    value: "simple-product",
    className: "jsx-3282219053"
  }, " Simple Product "), __jsx("option", {
    value: "variable-prouct",
    className: "jsx-3282219053"
  }, " Variable Product ")), __jsx("div", {
    className: "jsx-3282219053" + " " + 'mr-auto'
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    eventKey: "0",
    style: {
      background: 'none'
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.slider_fontawesome
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "0"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    style: {
      padding: '0.5%',
      margin: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "left-tabs-example",
    defaultActiveKey: "Inventory"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      margin: '0px',
      minHeight: '300px'
    },
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
    style: {
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].admin_primry_color}`
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    variant: "pills",
    className: "flex-column",
    style: {
      margin: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStoreAlt"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Inventory ")))), props.isVariableProduct ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Attributes",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Attributes ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Variations",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Variations "))))) : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "General",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " General ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Shipping",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTruck"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Shipping ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Advanced",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTools"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Advanced ")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      padding: '2%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "General"
  }, props.isVariableProduct ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Price ", __jsx("span", {
    className: "jsx-3282219053"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Price",
    name: "product_price",
    value: props.product_price_values,
    onChange: props.onChange,
    isInvalid: props.product_price_touched && props.product_price_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_price_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product in Stock", __jsx("span", {
    className: "jsx-3282219053"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    name: "product_in_stock",
    placeholder: "Enter Product In Stock",
    value: props.product_in_stock_values,
    onChange: props.onChange,
    isInvalid: props.product_in_stock_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_in_stock_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Brand Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Brand Name",
    name: "product_brand_name",
    value: props.product_brand_name_values,
    onChange: props.onChange,
    isInvalid: props.product_brand_name_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_brand_name_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    style: {
      marginBottom: '5px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Images ", __jsx("span", {
    className: "jsx-3282219053"
  }, " * ")), __jsx("input", {
    type: "file",
    style: {
      margin: '0% 2%',
      fontSize: '13px'
    },
    multiple: true,
    onChange: props.fileSelectedHandler,
    name: "image",
    accept: "image/*",
    className: "jsx-3282219053"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, __jsx("span", {
    className: "jsx-3282219053"
  }, imgLinkError)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, (props.imagePreviewArray || []).map((url, index) => __jsx("div", {
    className: "jsx-3282219053" + " " + "show-image"
  }, __jsx("img", {
    style: {
      height: '100px',
      width: '100px',
      margin: '1%'
    },
    src: url,
    alt: "...",
    className: "jsx-3282219053"
  }), __jsx("input", {
    type: "button",
    onClick: () => props.deleteImage(index),
    value: "Delete",
    className: "jsx-3282219053" + " " + "deleteImage"
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Warranty (months) "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Warranty",
    name: "product_warranty",
    value: props.product_warranty_values,
    onChange: props.onChange,
    isInvalid: props.product_warranty_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_warranty_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Warranty Type "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    name: "warranty_type",
    size: "sm",
    value: props.warranty_type_values,
    onChange: props.onChange,
    isInvalid: props.warranty_type_errors
  }, __jsx("option", {
    className: "jsx-3282219053"
  }, "Waranty Type"), __jsx("option", {
    className: "jsx-3282219053"
  }, " No Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Brand Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Local Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Local Seller Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Non-Local Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Internationsl Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Internationsl Seller Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " International Manufacturer Warranty "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_warranty_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Discount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Discount on on Product(%)",
    name: "product_discount",
    value: props.product_discount_values,
    onChange: props.onChange,
    isInvalid: props.product_discount_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "sm"
  }, "%")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_discount_errors)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product SKU"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter SKU (Stock Keeping Unit)",
    name: "sku",
    value: props.sku_values,
    onChange: props.onChange,
    isInvalid: props.sku_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.sku_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Shipping"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Weight (kg)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "product_weight",
    size: "sm",
    value: props.product_weight_values,
    onChange: props.onChange,
    isInvalid: props.product_weight_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_weight_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Dimensions (cm)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "dimension_length",
    size: "sm",
    value: props.dimension_length_values,
    onChange: props.onChange,
    placeholder: "Length",
    isInvalid: props.dimension_length_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.dimension_length_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "dimension_width",
    size: "sm",
    value: props.dimension_width_values,
    placeholder: "Width",
    onChange: props.onChange,
    isInvalid: props.dimension_width_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.dimension_width_errors), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "dimension_height",
    size: "sm",
    value: props.dimension_height_values,
    placeholder: "Height",
    onChange: props.onChange,
    isInvalid: props.dimension_height_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.dimension_height_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Shipping Charges"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Shipping Charges",
    name: "shipping_charges",
    value: props.shipping_charges_values,
    onChange: props.onChange,
    isInvalid: props.shipping_charges_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "sm"
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.shipping_charges_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Handling Fee"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Handling Fee",
    name: "handling_fee",
    value: props.handling_fee_values,
    onChange: props.onChange,
    isInvalid: props.handling_fee_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "sm"
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.handling_fee_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Attributes"
  }, __jsx(ProductAttributes, {
    setVariationsArray: props.setVariationsArray
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Variations"
  }, __jsx(ProductVariations, {
    variationsArray: props.variationsArray,
    setVariationsArray: props.setVariationsArray,
    setVariationsSaved: props.setVariationsSaved,
    isVariationsArrayEmpty: props.variationsArray == ''
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Advanced"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Purchase Note"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Purchase Notes",
    name: "purchase_note",
    value: props.purchase_note_values,
    onChange: props.onChange,
    isInvalid: props.purchase_note_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.purchase_note_errors))))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3282219053"
  }, ["span.jsx-3282219053{color:red;}", "@media (max-width:991px){.linkName.jsx-3282219053{display:none;}}", "div.show-image.jsx-3282219053{position:relative;float:left;margin:5px;}", "div.show-image.jsx-3282219053:hover img.jsx-3282219053{opacity:0.5;}", "div.show-image.jsx-3282219053:hover input.jsx-3282219053{display:block;}", "div.show-image.jsx-3282219053 input.jsx-3282219053{position:absolute;display:none;}", "div.show-image.jsx-3282219053 input.deleteImage.jsx-3282219053{top:0;left:0;color:red;font-size:13px;}"]));
};

function ProductAttributes(props) {
  const [attributeName, setAttributeName] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [attributeValue, setAttributeValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [successMessage, setSuccessMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [attributesArray, setAttributesArray] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);

  function handleAddProductAttributeClick() {
    setSuccessMessage('');

    if (attributeName != '' && attributeValue != '') {
      setError('');
      const copyArray = Object.assign([], attributesArray);
      copyArray.push({
        attributeName: attributeName.value,
        attributeValue: attributeValue
      });
      console.log('aaaaaaa:', copyArray);
      setAttributeName('');
      setAttributeValue();
      setAttributesArray(copyArray);
    } else {
      setError('Enter Field Name and Value');
    }
  }

  function handleDeleteProductAttributeClick(index) {
    const copyArray = Object.assign([], attributesArray);
    copyArray.splice(index, 1);
    setAttributesArray(copyArray);
  }

  function handleCreateVariationsClick() {
    if (attributesArray != '') {
      var allArrays = [];
      attributesArray.forEach(element => {
        var item = [];
        element.attributeValue.map(e => {
          item.push(e.value);
        });
        allArrays.push(item);
      });
      const array = allPossibleCases(allArrays);
      console.log('array:', array);
      var data = [];
      array.forEach((element, index) => {
        const split = element.split('-');
        let item = [];
        split.forEach((e, i) => {
          item.push({
            name: attributesArray[i].attributeName,
            value: e
          });
        });
        data.push({
          item: item,
          price: '',
          stock: '',
          image_link: [],
          imagePreviewArray: '',
          price_error: '',
          stock_error: '',
          image_link_error: '',
          custom_fields: []
        });
      });
      setSuccessMessage('Variations Created Successfully');
      setAttributesArray([]);
      props.setVariationsArray(data);
    } else {
      setError('Add some attributes first');
    }
  }

  function allPossibleCases(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      var result = [];
      var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array

      for (var i = 0; i < allCasesOfRest.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          result.push(arr[0][j] + "-" + allCasesOfRest[i]);
        }
      }

      return result;
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12,
    style: {
      marginBottom: '0%',
      paddingBottom: '0%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Name"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    styles: _styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].react_select_styles,
    options: _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_10__[/* groupedOptions */ "a"],
    components: {
      Group
    },
    value: attributeName,
    onChange: e => setAttributeName(e)
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: {
      padding: '0%',
      margin: '0%',
      fontSize: '14px'
    },
    onClick: () => setModalShow(true)
  }, "Add New"), __jsx(_add_new_field_name_model__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false)
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    style: {
      marginBottom: '0%',
      paddingBottom: '0%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Value "), __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isMulti: true,
    styles: _styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].react_select_styles,
    onChange: value => setAttributeValue(value),
    placeholder: "Press enter to add more"
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, __jsx("span", {
    style: {
      color: 'red'
    }
  }, error)), __jsx("div", {
    className: "mr-auto"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    onClick: handleAddProductAttributeClick,
    style: {
      marginRight: '2%'
    }
  }, "Add"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-success",
    size: "sm",
    onClick: handleCreateVariationsClick
  }, "Create Variations")), __jsx("hr", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, successMessage), attributesArray && attributesArray.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      padding: '0%'
    },
    key: index
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    size: "sm",
    value: element.attributeName,
    onChange: () => element.attributeName,
    disabled: true
  }, __jsx("option", null, element.attributeName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: element.attributeValue.map(e => e.value),
    disabled: true
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => handleDeleteProductAttributeClick(index)
  }, " delete"))))));
}

const createOption = label => ({
  value: label,
  label
});

function ProductVariations(props) {
  const [samePrice, setSamePrice] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [samePriceError, setSamePriceError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [sameStock, setSameStock] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [sameStockError, setSameStockError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [successMessage, setSuccessMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''); // Same Price For All Variations

  function handleSamePriceApplyBtnClick() {
    if (samePrice != '') {
      setSamePriceError('');
      const copyArray = Object.assign([], props.variationsArray);
      copyArray.forEach(element => {
        element.price = samePrice;
      });
      props.setVariationsArray(copyArray);
    } else {
      setSamePriceError('Enter Value');
    }
  } // Same Stock For All Variations


  function handleSameStockApplyBtnClick() {
    if (sameStock != '') {
      setSameStockError('');
      const copyArray = Object.assign([], props.variationsArray);
      copyArray.forEach(element => {
        element.stock = sameStock;
      });
      props.setVariationsArray(copyArray);
    } else {
      setSameStockError('Enter Value');
    }
  }

  function handlenPriceChange(e, index) {
    const copyArray = Object.assign([], props.variationsArray);
    let object = copyArray[index];

    if (e.target.value >= 0) {
      object.price = e.target.value;
      object.price_error = '';
      copyArray[index] = object;
      props.setVariationsArray(copyArray);
    }
  }

  function handleInStockChang(e, index) {
    const copyArray = Object.assign([], props.variationsArray);
    let object = copyArray[index];

    if (e.target.value >= 0) {
      object.stock = e.target.value;
      object.stock_error = '';
      copyArray[index] = object;
      props.setVariationsArray(copyArray);
    }
  }

  function handleDeleteVariationClick(index) {
    const copyArray = Object.assign([], props.variationsArray);
    copyArray.splice(index, 1);
    props.setVariationsArray(copyArray);
  }

  function handleDeleteCustomFieldClick(index, i) {
    const copyArray = Object.assign([], props.variationsArray);
    copyArray[index].custom_fields.splice(i, 1);
    props.setVariationsArray(copyArray);
  }

  function handleSaveVariationsClick() {
    const copyArray = Object.assign([], props.variationsArray);
    let flag = true;
    copyArray.forEach(element => {
      if (element.price == '' || element.stock == '' || element.image_link.length == 0) {
        flag = false;

        if (element.price == '') {
          element.price_error = 'Enter price';
        }

        if (element.stock == '') {
          element.stock_error = 'Enter stock';
        }

        console.log('elemnt.image_link:', element.image_link);

        if (element.image_link.length == 0) {
          element.image_link_error = 'Enter image Link';
        }
      } else {
        element.price_error = '';
        element.stock_error = '';
        element.image_link_error = '';
      }
    });

    if (flag == true) {
      props.setVariationsSaved(true);
      setSuccessMessage('Variations saved Successfully');
    }

    props.setVariationsArray(copyArray);
  }

  function handleVariationsErrorCheck(element) {
    if (element.price_error != '' || element.image_link_error != '') {
      return '1px solid red';
    } else {
      return 'none';
    }
  }

  function handleItemValueChange(event, index, i) {
    const copyArray = Object.assign([], props.variationsArray);
    let obj = copyArray[index].item;
    obj[i].value = event.target.value;
    props.setVariationsArray(copyArray);
  }

  async function fileSelectedHandler(e, index) {
    const copyArray = Object.assign([], props.variationsArray);
    let object = copyArray[index];

    if (e.target.files != '') {
      object.image_link = [...object.image_link, ...e.target.files];
      let array = [];
      object.image_link.forEach(element => {
        array.push(URL.createObjectURL(element));
      });
      object.imagePreviewArray = array;
      object.image_link_error = '';
      copyArray[index] = object;
      props.setVariationsArray(copyArray);
    }
  }

  function deleteImage(index, i) {
    const copyArray = Object.assign([], props.variationsArray);
    let obj = copyArray[index];
    obj.image_link.splice(i, 1);
    obj.imagePreviewArray.splice(i, 1);
    copyArray[index] = obj;
    props.setVariationsArray(copyArray);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.isVariationsArrayEmpty ? __jsx("div", {
    style: {
      width: '100%',
      textAlign: 'center',
      marginTop: '10%'
    },
    className: "jsx-728850913"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Please First add Attributes from Attributes Tab")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"]
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Same Price"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Price",
    name: "samePrice",
    value: samePrice,
    onChange: e => {
      if (e.target.value >= 0) {
        setSamePrice(e.target.value);
        setSamePriceError('');
      }
    },
    isInvalid: samePriceError
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    style: styles.label,
    onClick: handleSamePriceApplyBtnClick,
    size: "sm"
  }, "Apply")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.samePriceError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"]
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Same Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Stock",
    name: "sameStock",
    value: sameStock,
    onChange: e => {
      if (e.target.value >= 0) {
        setSameStock(e.target.value);
        setSameStockError('');
      }
    },
    isInvalid: sameStockError
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    style: styles.label,
    onClick: handleSameStockApplyBtnClick,
    size: "sm"
  }, "Apply")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.sameStockError)))), __jsx("hr", {
    style: {
      marginTop: '0%'
    },
    className: "jsx-728850913"
  }), props.variationsArray && props.variationsArray.map((element, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    style: {
      border: handleVariationsErrorCheck(element)
    }
  }, element.item && element.item.map((e, i) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 3,
    md: 3,
    sm: 6,
    xs: 6,
    key: i
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: e.value,
    onChange: event => handleItemValueChange(event, index, i)
  }))), __jsx("div", {
    className: "jsx-728850913" + " " + "mr-auto"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group,
    eventKey: "0"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginRight: '10px'
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.slider_fontawesome
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    style: {
      float: 'right'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => handleDeleteVariationClick(index)
  }, " delete"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "0"
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Price ", __jsx("span", {
    className: "jsx-728850913"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Price",
    name: "product_price",
    value: element.price,
    onChange: e => handlenPriceChange(e, index),
    isInvalid: element.price_error
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, element.price_error)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product in Stock ", __jsx("span", {
    className: "jsx-728850913"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    name: "product_in_stock",
    placeholder: "Enter Product In Stock",
    value: element.stock,
    onChange: e => handleInStockChang(e, index),
    isInvalid: element.stock_error
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, element.stock_error)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Images ", __jsx("span", {
    className: "jsx-728850913"
  }, " * ")), __jsx("input", {
    type: "file",
    style: {
      margin: '0% 2%',
      fontSize: '13px'
    },
    multiple: true,
    onChange: e => fileSelectedHandler(e, index),
    name: "image",
    accept: "image/*",
    className: "jsx-728850913"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, __jsx("span", {
    className: "jsx-728850913"
  }, element.image_link_error)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, (element.imagePreviewArray || []).map((url, i) => __jsx("div", {
    className: "jsx-728850913" + " " + "show-image"
  }, __jsx("img", {
    style: {
      height: '100px',
      width: '100px',
      margin: '1%'
    },
    src: url,
    alt: "...",
    className: "jsx-728850913"
  }), __jsx("input", {
    type: "button",
    onClick: () => deleteImage(index, i),
    value: "Delete",
    className: "jsx-728850913" + " " + "deleteImage"
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, element.custom_fields && element.custom_fields.map((e, i) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 3,
    md: 3,
    sm: 6,
    xs: 6,
    key: i
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: e.value,
    onChange: () => e.attributeValue
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => handleDeleteCustomFieldClick(index, i)
  }, " delete"))))))))), __jsx("hr", {
    style: {
      marginTop: '0%'
    },
    className: "jsx-728850913"
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-success",
    size: "sm",
    block: true,
    onClick: handleSaveVariationsClick
  }, " Save Variations")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "728850913"
  }, ["span.jsx-728850913{color:red;}", "div.show-image.jsx-728850913{position:relative;float:left;margin:5px;}", "div.show-image.jsx-728850913:hover img.jsx-728850913{opacity:0.5;}", "div.show-image.jsx-728850913:hover input.jsx-728850913{display:block;}", "div.show-image.jsx-728850913 input.jsx-728850913{position:absolute;display:none;}", "div.show-image.jsx-728850913 input.deleteImage.jsx-728850913{top:0;left:0;color:red;font-size:13px;}"]));
}

const styles = {
  nav_link: {
    color: 'white',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].card_header_background}`
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].form_label_fontsize}`
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primary_text_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primary_text_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  slider_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].admin_primry_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProductData);

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "dZKh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3R2T");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bWZ2");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qTQu");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class AddCategory extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleCategoryValueChange", e => {
      this.setState({
        categoryValue: e.target.value
      });
    });

    _defineProperty(this, "handleSubmit", () => {
      if (this.state.categoryValue == '') {
        this.setState({
          error: 'Enter Value First'
        });
      } else {
        this.setState({
          isLoading: true
        });
        this.setState({
          error: ''
        });
        this.addCategory(this);
      }
    });

    this.state = {
      isLoading: false,
      showToast: false,
      categoryValue: '',
      error: ''
    };
  } //  Submit data to api


  async addCategory(currentComponent) {// const url = MuhalikConfig.PATH + '/api/categories/add-category';
    // await axios.post(url, {
    //     this.state.categoryValue
    // }, {
    //     headers: { 'authorization': await getUncodededTokenFromStorage() }
    // }).then(function (response) {
    //     currentComponent.setState({ isLoading: false });
    //     currentComponent.setState({ showToast: true });
    //     return true;
    // }).catch(function (error) {
    //     currentComponent.setState({ isLoading: false });
    //     alert('Error: ', error.response.data.message);
    //     return false;
    // });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.showToast ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onCloseHandler: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      header: 'Success',
      message: 'Category Added Successfully',
      iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faThumbsUp"],
      color: "green"
    }) : null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_7__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
      title: 'Vendor Dashboard / Add New Category'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      noGutters: true
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      style: styles.card_header
    }, "Product Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      style: styles.card_body
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: this.state.categoryValue,
      onChange: this.handleCategoryValueChange,
      isInvalid: this.state.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
      type: "invalid"
    }, this.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      size: "sm",
      onClick: this.handleSubmit.bind(this),
      disabled: this.state.isLoading,
      block: true,
      style: styles.submit_btn
    }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
      animation: "grow",
      size: "sm"
    }) : __jsx("div", null)))))));
  }

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
    maxWidth: '26px'
  },
  title: {
    color: 'gray'
  },
  card: {
    width: '100%',
    margin: '5%'
  },
  card_header: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].card_header_background}`
  },
  card_body: {
    padding: '5%'
  },
  error: {
    width: '100%',
    textAlign: 'center',
    color: '#DC3545',
    fontSize: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AddCategory);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "f6Jz":
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function AlertModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "alert-modal",
    centered: true
  }), __jsx("div", {
    style: {
      border: `1px solid ${props.color}`,
      borderRadius: '5px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    style: {
      color: `${props.color}`,
      borderBottom: `1px solid ${props.color}`
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.iconName,
    style: {
      color: `${props.color}`,
      marginRight: '10px',
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "alert-modal"
  }, props.header)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    }
  }, props.message)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    onClick: props.onHide
  }, "Close"))));
}

/* harmony default export */ __webpack_exports__["default"] = (AlertModal);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nvxB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VbX6");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function AddNewFieldNameModal(props) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");

  async function handleAdd() {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].PATH + '/api/categories/add-field-request';
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, {
      value
    }, {
      headers: {
        'authorization': await getUncodededTokenFromStorage()
      }
    }).then(response => {
      alert('Field request sended');
    }).catch(error => {
      alert('Field request failed');
    });
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Header, {
    closeButton: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Add New Field")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      width: '100%'
    }
  }, "Your Request for Adding New Field Name will be send to Admin, Admin will Approve/Discard it."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Field Name",
    name: "sku",
    value: value,
    onChange: e => setValue(e.target.value),
    isInvalid: error
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
    type: "invalid"
  }, error)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "sm",
    className: "mr-auto",
    onClick: handleAdd ? props.onHide : null
  }, "Add"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "sm",
    onClick: props.onHide
  }, "Cancel")));
}

/* harmony default export */ __webpack_exports__["default"] = (AddNewFieldNameModal);

/***/ }),

/***/ "pLyC":
/***/ (function(module, exports) {

module.exports = require("react-select/creatable");

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

/***/ "qxaI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generalOptions */
/* unused harmony export laptop */
/* unused harmony export stateOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupedOptions; });
const generalOptions = [{
  value: 'Color',
  label: 'Color'
}, {
  value: 'Size',
  label: 'Size'
}, {
  value: 'Width',
  label: 'Width'
}, {
  value: 'Length',
  label: 'Length'
}, {
  value: 'Quality',
  label: 'Quality'
}, {
  value: 'Camera',
  label: 'Camera'
}];
const laptop = [{
  value: 'USB Type/ Post',
  label: 'USB Type/ Post'
}, {
  value: 'Screen Resolution',
  label: 'Screen Resolution'
}, {
  value: 'Displays Type',
  label: 'Displays Type'
}, {
  value: 'Processor',
  label: 'Processor'
}, {
  value: 'RAM',
  label: 'RAM'
}, {
  value: 'ROM',
  label: 'ROM'
}, {
  value: 'SSD',
  label: 'SSD'
}, {
  value: 'Graphic Card',
  label: 'RAM'
}, {
  value: 'Operating System',
  label: 'Operating System'
}];
const stateOptions = [{
  value: 'AL',
  label: 'Alabama'
}, {
  value: 'AK',
  label: 'Alaska'
}, {
  value: 'AS',
  label: 'American Samoa'
}, {
  value: 'AZ',
  label: 'Arizona'
}, {
  value: 'AR',
  label: 'Arkansas'
}, {
  value: 'CA',
  label: 'California'
}, {
  value: 'CO',
  label: 'Colorado'
}, {
  value: 'CT',
  label: 'Connecticut'
}, {
  value: 'DE',
  label: 'Delaware'
}, {
  value: 'DC',
  label: 'District Of Columbia'
}, {
  value: 'FM',
  label: 'Federated States Of Micronesia'
}, {
  value: 'FL',
  label: 'Florida'
}, {
  value: 'GA',
  label: 'Georgia'
}, {
  value: 'GU',
  label: 'Guam'
}, {
  value: 'HI',
  label: 'Hawaii'
}, {
  value: 'ID',
  label: 'Idaho'
}, {
  value: 'IL',
  label: 'Illinois'
}, {
  value: 'IN',
  label: 'Indiana'
}, {
  value: 'IA',
  label: 'Iowa'
}, {
  value: 'KS',
  label: 'Kansas'
}, {
  value: 'KY',
  label: 'Kentucky'
}, {
  value: 'LA',
  label: 'Louisiana'
}, {
  value: 'ME',
  label: 'Maine'
}, {
  value: 'MH',
  label: 'Marshall Islands'
}, {
  value: 'MD',
  label: 'Maryland'
}, {
  value: 'MA',
  label: 'Massachusetts'
}, {
  value: 'MI',
  label: 'Michigan'
}, {
  value: 'MN',
  label: 'Minnesota'
}, {
  value: 'MS',
  label: 'Mississippi'
}, {
  value: 'MO',
  label: 'Missouri'
}, {
  value: 'MT',
  label: 'Montana'
}, {
  value: 'NE',
  label: 'Nebraska'
}, {
  value: 'NV',
  label: 'Nevada'
}, {
  value: 'NH',
  label: 'New Hampshire'
}, {
  value: 'NJ',
  label: 'New Jersey'
}, {
  value: 'NM',
  label: 'New Mexico'
}, {
  value: 'NY',
  label: 'New York'
}, {
  value: 'NC',
  label: 'North Carolina'
}, {
  value: 'ND',
  label: 'North Dakota'
}, {
  value: 'MP',
  label: 'Northern Mariana Islands'
}, {
  value: 'OH',
  label: 'Ohio'
}, {
  value: 'OK',
  label: 'Oklahoma'
}, {
  value: 'OR',
  label: 'Oregon'
}, {
  value: 'PW',
  label: 'Palau'
}, {
  value: 'PA',
  label: 'Pennsylvania'
}, {
  value: 'PR',
  label: 'Puerto Rico'
}, {
  value: 'RI',
  label: 'Rhode Island'
}, {
  value: 'SC',
  label: 'South Carolina'
}, {
  value: 'SD',
  label: 'South Dakota'
}, {
  value: 'TN',
  label: 'Tennessee'
}, {
  value: 'TX',
  label: 'Texas'
}, {
  value: 'UT',
  label: 'Utah'
}, {
  value: 'VT',
  label: 'Vermont'
}, {
  value: 'VI',
  label: 'Virgin Islands'
}, {
  value: 'VA',
  label: 'Virginia'
}, {
  value: 'WA',
  label: 'Washington'
}, {
  value: 'WV',
  label: 'West Virginia'
}, {
  value: 'WI',
  label: 'Wisconsin'
}, {
  value: 'WY',
  label: 'Wyoming'
}];
const groupedOptions = [{
  label: 'General',
  options: generalOptions
}, {
  label: 'Laptop',
  options: laptop
},, {
  label: 'States',
  options: stateOptions
}];

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "sUJQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vvUq");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/JS1");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("VbX6");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("bWZ2");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("qTQu");
/* harmony import */ var _add_new__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("tz4B");
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("f6Jz");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // import ViewProduct from './all-products-contents/view-product'














class AllProducts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmDeleteModal: false,
      showToast: false,
      productsArray: [],
      showProduct: false,
      data: {}
    };
  }

  async componentDidMount() {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].PATH + '/api/products/';
    const currentComponent = this;
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {
      headers: {
        'authorization': await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__[/* getUncodededTokenFromStorage */ "c"])()
      }
    }).then(response => {
      console.log('data:', response.data.data);
      currentComponent.setState({
        productsArray: response.data.data
      });
    }).catch(error => {
      alert('Data Fetchig Error: ', error);
    });
  }

  handleEditProduct(index) {
    console.log('edit called');
    let element = [];

    if (index == -1) {
      element = this.state.data;
    } else {
      element = this.state.productsArray[index];
    }

    if (element.product_type != 'simple-product') {
      let array = [];
      let variations = element.product_variations;
      variations.forEach((element, i) => {
        array.push({
          item: element.item,
          price: element.price,
          stock: element.stock,
          image_link: element.image_link,
          price_error: '',
          stock_error: '',
          image_link_error: '',
          custom_fields: element.custom_fields
        });
      });
      element.product_variations = array;
    } else {
      element.product_variations = [];
    }

    this.setState({
      data: element,
      showProduct: 'edit'
    });
  }

  async handleDeleteProduct() {
    const _id = this.state.data._id;
    console.log('fuck fuck', _id);
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].PATH + `/api/products/${_id}`;
    this.setState({
      showConfirmDeleteModal: false
    });
    const currentComponent = this;
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(url, {
      headers: {
        'authorization': await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__[/* getUncodededTokenFromStorage */ "c"])()
      }
    }).then(function (response) {
      const copyArray = Object.assign([], currentComponent.state.productsArray);
      let array = copyArray;
      copyArray.forEach((element, i) => {
        if (element._id == _id) {
          array.splice(i, 1);
          return;
        }
      });
      currentComponent.setState({
        productsArray: array,
        showToast: true
      });
    }).catch(function (error) {
      try {
        alert('Error Message: ', error.response.data.message);
      } catch (err) {
        console.log('Error: ', error);
      }
    });
  }

  isVariableProduct(element) {
    if (element.product_type != "simple-product") {
      return true;
    } else {
      return false;
    }
  }

  renderSwitch(param) {
    switch (param) {
      case 'view':
        return __jsx(ViewProduct, {
          data: this.state.data,
          back: () => this.setState({
            showProduct: false,
            data: {}
          }),
          isVariableProduct: this.state.data.product_type != "simple-product",
          delete: () => this.setState({
            showConfirmDeleteModal: true
          }),
          edit: () => this.handleEditProduct(-1)
        });
        break;

      case 'edit':
        return __jsx(_add_new__WEBPACK_IMPORTED_MODULE_14__["default"], {
          title: 'Vendor Dashboard / All Products / Update',
          isUpdateProduct: true,
          _id: this.state.data._id,
          isVariableProduct: this.state.data.product_type != 'simple-product',
          back: () => this.setState({
            showProduct: false,
            data: {}
          }),
          view: () => this.setState({
            showProduct: 'view'
          }),
          delete: () => this.setState({
            showConfirmDeleteModal: true,
            showProduct: false
          }),
          productCategories: this.state.data.product_category,
          productSubCategories: this.state.data.product_sub_category,
          productTags: this.state.data.product_tags,
          warrantyType: this.state.data.warranty_type,
          simple_product_image_link: this.state.data.product_image_link,
          variationsArray: this.state.data.product_variations,
          dangerousGoodsArray: this.state.data.dangerous_goods,
          product_name: this.state.data.product_name,
          product_description: this.state.data.product_description,
          product_type: 'variable-product',
          product_type: this.state.data.product_type,
          sku: this.state.data.sku,
          product_price: this.state.data.product_price,
          product_in_stock: this.state.data.product_in_stock,
          product_brand_name: this.state.data.product_brand_name,
          product_warranty: this.state.data.product_warranty,
          warranty_type: this.state.data.warranty_type,
          product_discount: this.state.data.product_discount,
          purchase_note: this.state.data.purchase_note,
          product_weight: this.state.data.product_weight,
          dimension_length: this.state.data.dimension_length,
          dimension_width: this.state.data.dimension_width,
          dimension_height: this.state.data.dimension_height,
          shipping_charges: this.state.data.shipping_charges,
          handling_fee: this.state.data.handling_fee
        });
        break;

      default:
        return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_13__["default"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlus"],
          title: ' Vendor Dashboard / All Products'
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          noGutters: true,
          style: {
            margin: '2%',
            background: 'white'
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
          responsive: true,
          bordered: true,
          hover: true,
          size: "sm"
        }, __jsx("thead", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, __jsx("tr", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "#"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "Name"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "Product ID"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "Product Type"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "SKU"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "Stock"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "Price"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "Categories"), __jsx("th", {
          style: {
            textAlign: 'center'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, "Date"))), __jsx("tbody", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, this.state.productsArray && this.state.productsArray.map((element, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.isVariableProduct(element) ? __jsx("tr", {
          key: index,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, index + 1), __jsx("td", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]]) + " " + "td"
        }, element.product_name, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]]) + " " + "mr-auto"
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          style: styles.nav_link,
          onClick: () => this.setState({
            data: element,
            showProduct: 'view'
          })
        }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          style: styles.nav_link,
          onClick: () => this.handleEditProduct(index)
        }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          style: styles.nav_link,
          onClick: () => this.setState({
            data: element,
            showConfirmDeleteModal: true,
            showProduct: false
          })
        }, "Delete")), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element._id), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_type), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.sku ? element.sku : '-'), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_variations.map(e => e.stock + ',')), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_variations.map(e => e.price + ',')), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_entry_date)) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("tr", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, index + 1), __jsx("td", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]]) + " " + "td"
        }, element.product_name, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]]) + " " + "mr-auto"
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          style: styles.nav_link,
          onClick: () => this.setState({
            data: element,
            showProduct: 'view'
          })
        }, "View"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          style: styles.nav_link,
          onClick: () => this.handleEditProduct(index)
        }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          style: styles.nav_link,
          onClick: () => this.setState({
            data: element,
            showConfirmDeleteModal: true,
            showProduct: false
          })
        }, "Delete")), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element._id), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_type), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.sku ? element.sku : '-'), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_in_stock), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_price), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
          align: "center",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661101606", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]]])
        }, element.product_entry_date)))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "2661101606",
          dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize]
        }, [`.td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize};}`, `td.__jsx-style-dynamic-selector{vertical-align:middle;font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize};}`]));
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(ConfirmDeleteModal, {
      onHide: () => this.setState({
        showConfirmDeleteModal: false
      }),
      show: this.state.showConfirmDeleteModal,
      _id: this.state.data._id,
      product_name: this.state.data.product_name,
      confirmDelete: this.handleDeleteProduct.bind(this)
    }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onHide: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      header: 'Success',
      message: 'Product Deleted Successfully.',
      iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faThumbsUp"],
      color: "#00b300"
    }), __jsx("div", null, this.renderSwitch(this.state.showProduct)));
  }

}

const ViewProduct = props => {
  const [imgPreview, setImgPreview] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [imgData, setImgData] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const len = props.data.product_image_link.length;

  function prevImage() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function nextImage() {
    if (index < len - 1) {
      setIndex(index + 1);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlus"],
    title: ` Vendor Dashboard / All Products / ${props.data.product_name}`
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      margin: ' 0% 2%',
      display: 'flex',
      alignItems: 'center'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    className: "mr-auto",
    onClick: props.back
  }, "Back"), __jsx("div", {
    style: {
      fontSize: '14px'
    },
    className: "jsx-1902595393" + " " + "mr-auto"
  }, " ", props.data.product_name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    onClick: props.edit
  }, " Edit "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    onClick: props.delete
  }, " Delete ")), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'General Info'
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_name,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Brand Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_brand_name,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "SKU:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.sku,
    disabled: true
  }))), props.isVariableProduct ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Price:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_price,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product In Stock:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_in_stock,
    disabled: true
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Warranty (month):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_warranty,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Warranty Type:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.warranty_type,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Discount (%):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_discount,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Purchase Note(s):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.purchase_note,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Description:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "textarea",
    row: "5",
    size: "sm",
    value: props.data.product_description,
    disabled: true
  }))))), props.isVariableProduct ? __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'Product Variations'
  }, props.data.product_variations && props.data.product_variations.map(element => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 2,
    md: 2,
    sm: 4,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Price"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: element.price,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 2,
    md: 2,
    sm: 4,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: element.stock,
    disabled: true
  }))), element.item && element.item.map(e => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 2,
    md: 2,
    sm: 4,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: e.value,
    disabled: true
  }))))), element.custom_fields && element.custom_fields.map(e => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 2,
    md: 2,
    sm: 4,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: e.value,
    disabled: true
  })))))), __jsx("hr", {
    className: "jsx-1902595393"
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'Custom Fields'
  }, props.data.custom_fields && props.data.custom_fields.map(element => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 2,
    md: 2,
    sm: 4,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, element.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: element.value,
    disabled: true
  })))))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'Product Images'
  }, props.data.product_image_link && props.data.product_image_link.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    thumbnail: true,
    fluid: true,
    style: {
      minWidth: '200px',
      maxWidth: '200px'
    },
    src: `https://drive.google.com/uc?export=view&id=${element.value}`,
    alt: "Product Image",
    onClick: () => {
      setImgPreview(true), setIndex(index), setImgData(props.data.product_image_link);
    }
  })))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'Shipping Details'
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Length (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_length,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Width (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_width,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Height (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_height,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Weight (kg):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_weight,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Shipping Charges:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.shipping_charges,
    disabled: true
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Handlink Fee:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.handling_fee,
    disabled: true
  }))))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'Product Categories'
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    }
  }, "Product Categories:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, props.data.product_category.value + ' => ' + props.data.product_sub_category.value))), __jsx("hr", {
    className: "jsx-1902595393"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    }
  }, "Product Tags:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, props.data.product_tags && props.data.product_tags.map(element => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, element.value)))), __jsx("hr", {
    className: "jsx-1902595393"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    }
  }, "Dangerous Goods:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, props.data.dangerous_goods && props.data.dangerous_goods.map(element => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, element.value))))), imgPreview ? __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-overlay"
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-body"
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "close-modal"
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto"
  }), __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto"
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faChevronLeft"],
    style: styles.img_preview_fontawesome,
    onClick: () => prevImage
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faChevronRight"],
    style: styles.img_preview_fontawesome,
    onClick: nextImage
  }), __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto"
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
    style: styles.img_preview_fontawesome,
    onClick: () => setImgPreview(false)
  })), __jsx("div", {
    className: "jsx-1902595393" + " " + "image-container"
  }, __jsx("img", {
    src: imgData[index].value,
    style: {
      maxWidth: '100%',
      maxHeight: '90vh',
      margin: 'auto'
    },
    className: "jsx-1902595393"
  })))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1902595393"
  }, [".modal-overlay.jsx-1902595393{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}", ".modal-body.jsx-1902595393{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}", ".close-modal.jsx-1902595393{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}", ".image-container.jsx-1902595393{display:grid;height:100%;}"]));
};

const styles = {
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize}`
  },
  nav_link: {
    paddingLeft: '10px',
    paddingRight: '5px'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize}`,
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].admin_primry_color}`,
    marginRight: '2%'
  },
  row: {
    margin: '2%',
    padding: '0%'
  },
  img_preview_fontawesome: {
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'lighter',
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].admin_primry_color}`,
    marginRight: '10%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  general_info_label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize}`,
    width: '100%',
    borderBottom: '1px solid gray'
  },
  field_label: {
    border: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].body_color}`,
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].admin_primry_color}`,
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
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].card_header_background}`
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AllProducts);

function ConfirmDeleteModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "alert-modal",
    centered: true
  }), __jsx("div", {
    style: {
      border: '1px solid #ff3333',
      borderRadius: '5px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    closeButton: true,
    style: {
      color: '#ff3333',
      borderBottom: '1px solid #ff3333'
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTrash"],
    style: {
      color: '#ff3333',
      marginRight: '10px',
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
    id: "alert-modal"
  }, 'Delete Product ?')), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    }
  }, `Product Name: ${props.product_name}`, `Product ID: ${props._id}`)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "sm",
    variant: "outline-danger",
    className: "mr-auto",
    onClick: props.confirmDelete
  }, "Confirm"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "sm",
    variant: "outline-primary",
    onClick: props.onHide
  }, "Cancel"))));
} // import React, { Component } from 'react';
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

/***/ }),

/***/ "tYSR":
/***/ (function(module, exports) {

module.exports = require("reactjs-localstorage");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "tz4B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// EXTERNAL MODULE: external "react-select/creatable"
var creatable_ = __webpack_require__("pLyC");
var creatable_default = /*#__PURE__*/__webpack_require__.n(creatable_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: ./src/pages/components/alert-modal.js
var alert_modal = __webpack_require__("f6Jz");

// EXTERNAL MODULE: ./src/styleSheet.js
var styleSheet = __webpack_require__("bWZ2");

// EXTERNAL MODULE: ./src/pages/components/title-row.js
var title_row = __webpack_require__("qTQu");

// EXTERNAL MODULE: ./src/pages/components/card_accordion.js
var card_accordion = __webpack_require__("/JS1");

// EXTERNAL MODULE: ./src/sdk/muhalik.config.js
var muhalik_config = __webpack_require__("VbX6");

// EXTERNAL MODULE: ./src/sdk/core/authentication-service.js
var authentication_service = __webpack_require__("vvUq");

// EXTERNAL MODULE: ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js
var custom_fields = __webpack_require__("HcA0");

// EXTERNAL MODULE: ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js
var product_data = __webpack_require__("ZTIo");

// CONCATENATED MODULE: ./src/sdk/consts/product-size-options.js
// Option List for select Product Size
const product_size_options = [{
  value: 'X-S',
  label: 'X-Small'
}, {
  value: 'S',
  label: 'Small'
}, {
  value: 'M',
  label: 'Medium'
}, {
  value: 'L',
  label: 'Large'
}, {
  value: 'X-L',
  label: 'X-Large'
}, {
  value: '10',
  label: '10'
}, {
  value: '11',
  label: '11'
}, {
  value: '12',
  label: '12'
}, {
  value: '13',
  label: '13'
}, {
  value: '14',
  label: '14'
}, {
  value: '15',
  label: '15'
}, {
  value: '16',
  label: '16'
}, {
  value: '17',
  label: '17'
}, {
  value: '18',
  label: '18'
}, {
  value: '19',
  label: '19'
}, {
  value: '20',
  label: '20'
}, {
  value: '21',
  label: '20'
}, {
  value: '22',
  label: '20'
}, {
  value: '23',
  label: '20'
}, {
  value: '24',
  label: '20'
}, {
  value: '25',
  label: '20'
}, {
  value: '26',
  label: '20'
}, {
  value: '27',
  label: '20'
}, {
  value: '28',
  label: '20'
}, {
  value: '29',
  label: '20'
}, {
  value: '30',
  label: '30'
}, {
  value: '31',
  label: '31'
}, {
  value: '32',
  label: '32'
}, {
  value: '33',
  label: '33'
}, {
  value: '34',
  label: '34'
}, {
  value: '35',
  label: '35'
}, {
  value: '36',
  label: '36'
}, {
  value: '37',
  label: '37'
}, {
  value: '38',
  label: '38'
}, {
  value: '49',
  label: '49'
}, {
  value: '40',
  label: '40'
}, {
  value: '41',
  label: '41'
}, {
  value: '42',
  label: '42'
}, {
  value: '43',
  label: '43'
}, {
  value: '44',
  label: '44'
}, {
  value: '45',
  label: '45'
}, {
  value: '46',
  label: '46'
}, {
  value: '47',
  label: '47'
}, {
  value: '48',
  label: '48'
}, {
  value: '49',
  label: '49'
}, {
  value: '50',
  label: '50'
}, {
  value: '51',
  label: '51'
}, {
  value: '52',
  label: '52'
}, {
  value: '53',
  label: '53'
}, {
  value: '54',
  label: '54'
}, {
  value: '55',
  label: '55'
}, {
  value: '56',
  label: '56'
}, {
  value: '57',
  label: '57'
}, {
  value: '58',
  label: '58'
}, {
  value: '59',
  label: '59'
}, {
  value: '60',
  label: '60'
}, {
  value: '61',
  label: '61'
}, {
  value: '62',
  label: '62'
}, {
  value: '63',
  label: '63'
}, {
  value: '64',
  label: '64'
}, {
  value: '65',
  label: '65'
}, {
  value: '66',
  label: '66'
}, {
  value: '67',
  label: '67'
}, {
  value: '67',
  label: '68'
}, {
  value: '69',
  label: '69'
}, {
  value: '70',
  label: '70'
}, {
  value: '71',
  label: '71'
}, {
  value: '72',
  label: '72'
}, {
  value: '73',
  label: '73'
}, {
  value: '74',
  label: '74'
}, {
  value: '75',
  label: '75'
}, {
  value: '76',
  label: '76'
}, {
  value: '77',
  label: '77'
}, {
  value: '78',
  label: '78'
}, {
  value: '79',
  label: '79'
}, {
  value: '80',
  label: '80'
}, {
  value: '81',
  label: '81'
}, {
  value: '82',
  label: '82'
}, {
  value: '83',
  label: '83'
}, {
  value: '84',
  label: '84'
}, {
  value: '85',
  label: '85'
}, {
  value: '86',
  label: '86'
}, {
  value: '87',
  label: '87'
}, {
  value: '88',
  label: '88'
}, {
  value: '89',
  label: '89'
}, {
  value: '90',
  label: '90'
}, {
  value: '91',
  label: '91'
}, {
  value: '92',
  label: '92'
}, {
  value: '93',
  label: '93'
}, {
  value: '94',
  label: '94'
}, {
  value: '95',
  label: '95'
}, {
  value: '96',
  label: '96'
}, {
  value: '97',
  label: '97'
}, {
  value: '98',
  label: '98'
}, {
  value: '99',
  label: '99'
}, {
  value: '100',
  label: '100'
}];
/* harmony default export */ var consts_product_size_options = (product_size_options);
// CONCATENATED MODULE: ./src/sdk/consts/product-color-options.js
// Option List for select Product Color
const product_color_options = [// A
{
  value: 'Apricot',
  label: 'Apricot'
}, {
  value: 'Aquamarine',
  label: 'Aquamarine'
}, // B
{
  value: 'Black',
  label: 'Black'
}, {
  value: 'Blue',
  label: 'Blue'
}, {
  value: 'Bronze',
  label: 'Bronze'
}, {
  value: 'Baby-Blue',
  label: 'Baby-Blue'
}, {
  value: 'Blue-Green',
  label: 'Blue-Green'
}, {
  value: 'Blue-Violet',
  label: 'Blue-Violet'
}, // C
{
  value: 'Chocolate',
  label: 'Chocolate'
}, {
  value: 'Coffee',
  label: 'Coffee'
}, {
  value: 'Cyan',
  label: 'Cyan'
}, // D
{
  value: 'Desert-Sand',
  label: 'Desert-Sand'
}, // G
{
  value: 'Gray',
  label: 'Gray'
}, {
  value: 'Green',
  label: 'Green'
}, // I
{
  value: 'Indigo',
  label: 'Indigo'
}, // L
{
  value: 'Lime',
  label: 'Lime'
}, // M
{
  value: 'Magenta',
  label: 'Magenta'
}, {
  value: 'Maroon',
  label: 'Maroon'
}, // N
{
  value: 'Navy',
  label: 'Navy'
}, {
  value: 'Navy-Blue',
  label: 'Navy-Blue'
}, // O
{
  value: 'Orange',
  label: 'Orange'
}, {
  value: 'Olive',
  label: 'Olive'
}, // P
{
  value: 'Pink',
  label: 'Pink'
}, {
  value: 'Peach',
  label: 'Peach'
}, {
  value: 'Purple',
  label: 'Purple'
}, // R
{
  value: 'Red',
  label: 'Chocolate'
}, {
  value: 'Rose',
  label: 'Rose'
}, {
  value: 'Red-Violet',
  label: 'Red-Violet'
}, // S
{
  value: 'Silver',
  label: 'Silver'
}, {
  value: 'Sky-Blue',
  label: 'Sky-Blue'
}, // T
{
  value: 'Tan',
  label: 'Tan'
}, {
  value: 'Teal',
  label: 'Teal'
}, {
  value: 'Turquoise',
  label: 'Turquoise'
}, // V
{
  value: 'Violet',
  label: 'Violet'
}, // W
{
  value: 'White',
  label: 'White'
}, // Y
{
  value: 'Yellow',
  label: 'Yellow'
}];
/* harmony default export */ var consts_product_color_options = (product_color_options);
// CONCATENATED MODULE: ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js

var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















 // Option List for select Product Category (when offline)

let product_categories_options = [{
  value: 'Shoe',
  label: 'Shoe'
}, {
  value: 'Cloth',
  label: 'Cloth'
}, {
  value: 'Shirt',
  label: 'Shirt'
}, {
  value: 'Pant',
  label: 'Pant'
}];
const product_sub_categories_options = [{
  value: 'Sub Shoe',
  label: 'Sub Shoe'
}, {
  value: 'Sub Cloth',
  label: 'Sub Cloth'
}, {
  value: 'Sub Shirt',
  label: 'Sub Shirt'
}]; // For React-Select

const components = {
  DropdownIndicator: null
}; // Model For React-Select

const createOption = label => ({
  value: label,
  label
}); // Yup Schema for validation fields


const schema = external_yup_["object"]({
  product_name: external_yup_["string"]().required("Enter Product Name").min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_description: external_yup_["string"]().min(5, "Must have at least 5 characters").max(200, "Can't be longer than 200 characters"),
  // Product Data
  product_type: external_yup_["string"](),
  // => Inventory
  sku: external_yup_["string"]().min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => General(Simple-Product)
  product_price: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000000').max(1000000, 'Enter Between 1-1000000'),
  product_in_stock: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000000').max(1000000, "Can't be longer than 1000000"),
  product_brand_name: external_yup_["string"]().min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_image_link: external_yup_["string"](),
  product_warranty: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000').max(1000, 'Enter Between 0-1000'),
  warranty_type: external_yup_["string"](),
  product_discount: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => Attributes (Variable Product)
  purchase_note: external_yup_["string"](),
  // => Variations (Variable Product)
  product_variations: external_yup_["string"](),
  // => Shipping
  product_weight: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_length: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_width: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_height: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  shipping_charges: external_yup_["number"]("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, 'Enter Between 0-10000'),
  handling_fee: external_yup_["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 1000"),
  // => Advanve
  purchase_note: external_yup_["string"](),
  // Custom Fields
  custom_fields: external_yup_["string"](),
  product_category: external_yup_["string"](),
  product_sub_category: external_yup_["string"](),
  dangerous_goods: external_yup_["string"](),
  product_tags: external_yup_["string"]()
});

class add_new_AddNew extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSimpleProductImage_linkKeyDown", (event, inputValue) => {
      const simple_product_image_link = this.state.simple_product_image_link;
      if (!inputValue) return;

      switch (event.key) {
        case 'Enter':
        case 'Tab':
          this.setState({
            simple_product_image_link: [...simple_product_image_link, createOption(inputValue)]
          });
          event.preventDefault();
          return true;
      }
    });

    _defineProperty(this, "handleProductCategoryChange", value => {
      this.setState({
        productCategories: value,
        subCategoryDisabled: false,
        categoryErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleProductSubCategoryChange", value => {
      this.setState({
        productSubCategories: value,
        subSubCategoryDisabled: false,
        subCategoryErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleDangerousGoodsChange", (e, name) => {
      const copyArray = Object.assign([], this.state.dangerousGoodsArray);

      if (e.target.checked) {
        copyArray.push({
          value: name
        });
      } else {
        copyArray.forEach((element, index) => {
          if (element.value == name) {
            copyArray.splice(index, 1);
          }
        });
      }

      this.setState({
        dangerousGoodsArray: copyArray
      });
    });

    _defineProperty(this, "handleProductTagChange", arr => {
      this.setState({
        productTags: arr
      });
    });

    _defineProperty(this, "deleteImage", index => {
      const copyArray = Object.assign([], this.state.files);
      const imgCopyArray = Object.assign([], this.state.imagePreviewArray);
      copyArray.splice(index, 1);
      imgCopyArray.splice(index, 1);
      this.setState({
        files: copyArray,
        imagePreviewArray: imgCopyArray
      });
    });

    this.state = {
      isUpdateProduct: this.props.isUpdateProduct,
      _id: this.props._id,
      isLoading: false,
      showToast: false,
      toastMessage: '',
      showVariationsErrorAlert: false,
      showSimpleProductPriceImgLinkErrorrAlert: false,
      isVariableProduct: this.props.isVariableProduct,
      productCategories: this.props.productCategories,
      productSubCategories: this.props.productSubCategories,
      subCategoryDisabled: true,
      categoryErrorDiv: 'BorderDiv',
      subCategoryErrorDiv: 'BorderDiv',
      productTags: this.props.productTags,
      warrantyType: this.props.warrantyType,
      inputValue: '',
      simple_product_image_link: this.props.simple_product_image_link,
      variationsArray: this.props.variationsArray,
      isVariationsSaved: false,
      // Custom Fields
      customFieldsArray: [],
      files: [],
      imagePreviewArray: [],
      // Dangerous Goods
      dangerousGoodsArray: this.props.dangerousGoodsArray
    }; // this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
  } // Getting Product Categories from DB


  async componentDidMount() {
    const url = muhalik_config["a" /* default */].PATH + '/api/categories/categories';
    const url_1 = muhalik_config["a" /* default */].PATH + '/api/categories/fields';
    const url_2 = muhalik_config["a" /* default */].PATH + '/api/categories/tags';
    const token = await Object(authentication_service["c" /* getUncodededTokenFromStorage */])();
    await external_axios_default.a.get(url, {
      headers: {
        'authorization': token
      }
    }).then(response => {// console.log('categories:', response.data)
    }).catch(error => {// alert('categories Fetchig Error: ', error)
    });
    await external_axios_default.a.get(url_1, {
      headers: {
        'authorization': token
      }
    }).then(response => {// console.log('fields:', response.data)
    }).catch(error => {// console.log('fuck:', error)
      // alert('fields Fetchig Error: ', error.response.data.message)
    });
    await external_axios_default.a.get(url_2, {
      headers: {
        'authorization': token
      }
    }).then(response => {// console.log('tags:', response.data)
    }).catch(error => {// alert('tags Fetchig Error: ', error)
    });
  }

  async uploadProduct(data, currentComponent) {
    console.log('da111222333ta: ', data);

    if (this.state.isUpdateProduct == false) {
      const url = muhalik_config["a" /* default */].PATH + '/api/products/add';
      await external_axios_default.a.post(url, {
        data
      }, {
        headers: {
          'authorization': await Object(authentication_service["c" /* getUncodededTokenFromStorage */])()
        }
      }).then(function (response) {
        currentComponent.setState({
          isLoading: false
        });
        currentComponent.setState({
          showToast: true,
          toastMessage: 'Product Uploaded Successfully'
        });
        return true;
      }).catch(function (error) {
        console.log('error rooro:', error);
        console.log('error rooro:', error.response);
        currentComponent.setState({
          isLoading: false
        });
        alert('Product Upload failed');
        return false;
      });
    } else {
      const url = muhalik_config["a" /* default */].PATH + `/api/products/${this.state._id}`;
      await external_axios_default.a.put(url, {
        data
      }, {
        headers: {
          'authorization': await Object(authentication_service["c" /* getUncodededTokenFromStorage */])()
        }
      }).then(function (response) {
        currentComponent.setState({
          isLoading: false
        });
        currentComponent.setState({
          showToast: true,
          toastMessage: 'Product Updated Successfully'
        });
        return true;
      }).catch(function (error) {
        currentComponent.setState({
          isLoading: false
        });
        alert('Product Update failed');
        return false;
      });
    }
  } //  Submit data to api
  // async uploadProduct(data, ) {
  //     if (await this.props.upload(data) == true) {
  //         currentComponent.setState({ isLoading: false });
  //         currentComponent.setState({ showToast: true });
  //         return true;
  //     } else {
  //         currentComponent.setState({ isLoading: false });
  //         alert('Product Upload failed');
  //         return false;
  //     }
  // }
  // handleProductTypeChange(e) {
  // if (e.target.value == 'variable-prouct') {
  //     this.setState({ isVariableProduct: true, customFieldsArray: [] });
  // }
  //     else {
  //         this.setState({ isVariableProduct: false, variationsArray: [] });
  //     }
  // }
  // Product Data
  // => Simple Product Image Link


  simpleProductImgLinkChange(value) {
    this.setState({
      simple_product_image_link: value
    });
  }

  // => End Of Simple Product Image Link
  // Custom Fields
  handleSaveCustomFieldsBtnClick() {
    if (this.state.isVariableProduct == true) {
      const copyArray = Object.assign([], this.state.variationsArray);
      copyArray.forEach(element => {
        this.state.customFieldsArray.forEach(e => {
          element.customField.push({
            name: e.name,
            value: e.value
          });
        });
      });
      this.setState({
        variationsArray: copyArray,
        customFieldsArray: []
      });
    }
  } // Product Category


  async fileSelectedHandler(e) {
    await this.setState({
      files: [...this.state.files, ...e.target.files]
    });
    let array = [];
    this.state.files.forEach(element => {
      array.push(URL.createObjectURL(element));
    });
    this.setState({
      imagePreviewArray: array
    });
  }

  render() {
    var showCustomFields = false;

    if (this.state.variationsArray == [] && this.state.isVariableProduct == true) {
      showCustomFields = true;
    } else {
      showCustomFields = false;
    }

    return __jsx(external_formik_["Formik"], {
      validationSchema: schema,
      initialValues: this.props.isUpdateProduct ? {
        product_name: this.props.product_name,
        product_description: this.props.product_description,
        product_type: this.props.product_type,
        sku: this.props.sku,
        product_price: this.props.product_price,
        product_in_stock: this.props.product_in_stock,
        product_brand_name: this.props.product_brand_name,
        // product_image_link:this.props.product_image_link}
        product_warranty: this.props.product_warranty,
        warranty_type: this.props.warranty_type,
        product_discount: this.props.product_discount,
        purchase_note: this.props.purchase_note,
        // product_variations:this.props.product_variations}
        product_weight: this.props.product_weight,
        dimension_length: this.props.dimension_length,
        dimension_width: this.props.dimension_width,
        dimension_height: this.props.dimension_height,
        shipping_charges: this.props.shipping_charges,
        handling_fee: this.props.handling_fee
      } : {
        product_type: 'simple-product',
        product_price: '',
        product_in_stock: ''
      },
      onSubmit: (values, {
        setSubmitting,
        resetForm
      }) => {
        if (this.state.productCategories == '' || this.state.productSubCategories == '') {
          if (this.state.productCategories == '') {
            this.setState({
              categoryErrorDiv: 'RedBorderDiv'
            });
          }

          if (this.state.productSubCategories == '') {
            this.setState({
              subCategoryErrorDiv: 'RedBorderDiv'
            });
          }

          setSubmitting(false);
        } else if (values.product_type == 'simple-prouct' && values.product_price == '' || values.product_in_stock == '' || this.state.files == '') {
          this.setState({
            showSimpleProductPriceImgLinkErrorrAlert: true
          });
        } else if (this.state.isVariationsSaved == false && values.product_type == 'variable-prouct') {
          this.setState({
            showVariationsErrorAlert: true
          });
        } else {
          resetForm();
          setSubmitting(true);
          this.setState({
            isLoading: true
          });
          setTimeout(() => {
            let array = [];
            values.product_category = this.state.productCategories;
            values.product_sub_category = this.state.productSubCategories;
            values.product_tags = this.state.productTags;
            values.dangerous_goods = this.state.dangerousGoodsArray;

            if (!this.state.isVariableProduct) {
              values.product_image_link = this.state.files;
              values.custom_fields = this.state.customFieldsArray;
            } else {
              array = [];
              this.state.variationsArray.forEach((element, index) => {
                let item = [];
                element.item.forEach(e => {
                  item.push({
                    name: e.name,
                    value: e.value
                  });
                });
                let item_1 = [];
                element.custom_fields.forEach(e => {
                  item_1.push({
                    name: e.name,
                    value: e.value
                  });
                });
                array.push({
                  item: item,
                  custom_fields: item_1,
                  price: element.price,
                  stock: element.stock,
                  image_link: element.image_link
                });
              });
              values.product_variations = array;
            }

            resetForm();

            if (this.uploadProduct(values, this)) {
              this.setState({
                showVariationsErrorAlert: false,
                showSimpleProductPriceImgLinkErrorrAlert: false,
                isVariableProduct: false,
                productCategories: '',
                productSubCategories: '',
                subCategoryDisabled: true,
                subSubCategoryDisabled: true,
                categoryErrorDiv: 'BorderDiv',
                subCategoryErrorDiv: 'BorderDiv',
                productTags: [],
                warrantyType: '',
                inputValue: '',
                files: [],
                variationsArray: [],
                isVariationsSaved: false,
                // Custom Fields
                customFieldsArray: [],
                // Dangerous Goods
                dangerousGoodsArray: []
              });
            }

            setSubmitting(false);
          }, 500);
        }
      }
    }, ({
      handleSubmit,
      handleChange,
      values,
      touched,
      isValid,
      errors,
      handleBlur,
      isSubmitting
    }) => __jsx("div", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    }, __jsx(title_row["default"], {
      icon: free_solid_svg_icons_["faPlus"],
      title: this.props.title
    }), this.props.isUpdateProduct ? __jsx(external_react_bootstrap_["Form"].Row, {
      style: {
        margin: ' 0% 2%',
        display: 'flex',
        alignItems: 'center'
      }
    }, __jsx(external_react_bootstrap_["Nav"].Link, {
      style: {
        fontSize: '14px'
      },
      className: "mr-auto",
      onClick: this.props.back
    }, "Back"), __jsx("div", {
      style: {
        fontSize: '14px'
      },
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]]) + " " + "mr-auto"
    }, " ", this.props.product_name), __jsx(external_react_bootstrap_["Nav"].Link, {
      style: {
        fontSize: '14px'
      },
      onClick: this.props.view
    }, " View "), __jsx(external_react_bootstrap_["Nav"].Link, {
      style: {
        fontSize: '14px'
      },
      onClick: this.props.delete
    }, " Delete ")) : null, __jsx(external_react_bootstrap_["Form"], {
      noValidate: true,
      onSubmit: handleSubmit
    }, __jsx(alert_modal["default"], {
      onHide: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      header: 'Success',
      message: this.state.toastMessage,
      iconName: free_regular_svg_icons_["faThumbsUp"],
      color: "#00b300"
    }), __jsx(alert_modal["default"], {
      onHide: e => this.setState({
        showVariationsErrorAlert: false
      }),
      show: this.state.showVariationsErrorAlert,
      header: 'Error',
      message: 'Please Add/Save Variations First',
      iconName: free_solid_svg_icons_["faExclamationTriangle"],
      color: "#ff3333"
    }), __jsx(alert_modal["default"], {
      onHide: e => this.setState({
        showSimpleProductPriceImgLinkErrorrAlert: false
      }),
      show: this.state.showSimpleProductPriceImgLinkErrorrAlert,
      header: 'Error',
      message: 'Enter Price/Stock/Image(s) in General Tab First',
      iconName: free_solid_svg_icons_["faExclamationTriangle"],
      color: "#ff3333"
    }), __jsx(external_react_bootstrap_["Row"], {
      noGutters: true,
      style: {
        paddingTop: '1%'
      }
    }, __jsx(external_react_bootstrap_["Col"], {
      lg: 9,
      md: 9,
      sm: 12,
      xs: 12
    }, __jsx(external_react_bootstrap_["Form"].Group, {
      as: external_react_bootstrap_["Row"],
      style: {
        margin: '0.5% 2% 2% 2%',
        padding: '0%'
      }
    }, __jsx(external_react_bootstrap_["Form"].Label, {
      style: styles.label
    }, "Product Name", __jsx("span", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    }, "*")), __jsx(external_react_bootstrap_["InputGroup"], null, __jsx(external_react_bootstrap_["Form"].Control, {
      type: "text",
      placeholder: "Enter Product Name",
      name: "product_name",
      value: values.product_name || '',
      onChange: handleChange,
      isInvalid: errors.product_name
    }), __jsx(external_react_bootstrap_["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.product_name))), __jsx(card_accordion["default"], {
      title: 'Product Discruption'
    }, __jsx(external_react_bootstrap_["Form"].Group, null, __jsx(external_react_bootstrap_["Form"].Control, {
      as: "textarea",
      placeholder: "Enter Product Description",
      name: "product_description",
      value: values.product_description || '',
      rows: "7",
      onChange: handleChange,
      isInvalid: errors.product_description
    }), __jsx(external_react_bootstrap_["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.product_description))), __jsx(product_data["default"], {
      isUpdateProduct: this.props.isUpdateProduct,
      productTypeHandler: e => {
        if (e.target.value == 'variable-prouct') {
          this.setState({
            isVariableProduct: true
          });
        } else {
          this.setState({
            isVariableProduct: false
          });
        }
      },
      isVariableProduct: this.state.isVariableProduct,
      product_type_values: values.product_type,
      product_price_values: values.product_price || '',
      product_price_errors: errors.product_price,
      product_price_touched: touched.product_price,
      product_in_stock_values: values.product_in_stock || '',
      product_in_stock_errors: errors.product_in_stock,
      product_brand_name_values: values.product_brand_name || '',
      product_brand_name_errors: errors.product_brand_name,
      fileSelectedHandler: this.fileSelectedHandler.bind(this),
      imagePreviewArray: this.state.imagePreviewArray,
      deleteImage: this.deleteImage,
      imageLink: this.state.simple_product_image_link,
      simpleProductImgLinkChange: this.simpleProductImgLinkChange.bind(this),
      simpleProductImgLinkKeyDownHandler: this.handleSimpleProductImage_linkKeyDown.bind(this),
      simpleProductError: this.state.showSimpleProductPriceImgLinkErrorrAlert,
      product_warranty_values: values.product_warranty || '',
      product_warranty_errors: errors.product_warranty,
      warranty_type_values: values.warranty_type || '',
      warranty_type_errors: errors.warranty_type,
      product_discount_values: values.product_discount || '',
      product_discount_errors: errors.product_discount,
      sku_values: values.sku || '',
      sku_errors: errors.sku,
      product_weight_values: values.product_weight || '',
      product_weight_errors: errors.product_weight,
      dimension_length_values: values.dimension_length || '',
      dimension_length_errors: errors.dimension_length,
      dimension_width_values: values.dimension_width || '',
      dimension_width_errors: errors.dimension_width,
      dimension_height_values: values.dimension_height || '',
      dimension_height_errors: errors.dimension_height,
      shipping_charges_values: values.shipping_charges || '',
      shipping_charges_errors: errors.shipping_charges,
      handling_fee_values: values.handling_fee || '',
      handling_fee_errors: errors.handling_fee,
      purchase_note_values: values.purchase_note || '',
      purchase_note_errors: errors.purchase_note,
      onChange: handleChange,
      errors: errors,
      productColorChangeHandler: this.handleProductColorChange,
      productSizeChangeHandler: this.handleProductSizeChange,
      variationsArray: this.state.variationsArray,
      setVariationsArray: arr => this.setState({
        variationsArray: arr
      }),
      setVariationsSaved: () => this.setState({
        isVariationsSaved: true
      })
    }), __jsx(card_accordion["default"], {
      title: 'Custom Fields'
    }, __jsx(custom_fields["default"], {
      customFieldsArray: this.state.customFieldsArray,
      setFieldsArrayHandler: arr => this.setState({
        customFieldsArray: arr
      }),
      isVariableProduct: this.state.isVariableProduct,
      showCustomFields: showCustomFields,
      saveCustomFieldsHandler: this.handleSaveCustomFieldsBtnClick.bind(this)
    }))), __jsx(external_react_bootstrap_["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12
    }, __jsx(card_accordion["default"], {
      title: 'Product Categories'
    }, __jsx(external_react_bootstrap_["Form"].Group, null, __jsx(external_react_bootstrap_["Form"].Label, {
      style: styles.label
    }, "Category"), __jsx("div", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]]) + " " + (this.state.categoryErrorDiv || "")
    }, __jsx(external_react_select_default.a, {
      styles: styleSheet["a" /* default */].react_select_styles,
      onChange: this.handleProductCategoryChange,
      options: product_categories_options,
      value: this.state.productCategories,
      isSearchable: true,
      isClearable: true,
      placeholder: "Select Category"
    }))), __jsx(external_react_bootstrap_["Form"].Group, null, __jsx(external_react_bootstrap_["Form"].Label, {
      style: styles.label
    }, "Sub Category"), __jsx("div", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]]) + " " + (this.state.subCategoryErrorDiv || "")
    }, __jsx(external_react_select_default.a, {
      styles: styleSheet["a" /* default */].react_select_styles,
      onChange: this.handleProductSubCategoryChange,
      options: product_sub_categories_options,
      value: this.state.productSubCategories,
      isSearchable: true,
      isClearable: true,
      placeholder: "Select Sub Category",
      isDisabled: this.state.subCategoryDisabled
    })), __jsx("div", {
      style: {
        minHeight: '150px'
      },
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    }))), __jsx(card_accordion["default"], {
      title: 'Dangerous Goods'
    }, __jsx(external_react_bootstrap_["Form"].Check, {
      name: "not_specified",
      label: "Not Specified",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Not-Specified') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Not-Specified')
    }), __jsx("br", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    }), __jsx(external_react_bootstrap_["Form"].Check, {
      name: "ceramic",
      label: "Ceramic",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Ceramic') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Ceramic')
    }), __jsx("br", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    }), __jsx(external_react_bootstrap_["Form"].Check, {
      name: "glass",
      label: "Glass",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Glass') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Glass')
    }), __jsx("br", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    }), __jsx(external_react_bootstrap_["Form"].Check, {
      name: "metal",
      label: "Metal",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Metal') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Metal')
    }), __jsx("br", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    }), __jsx(external_react_bootstrap_["Form"].Check, {
      name: "plastic",
      label: "Plastic",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Plastic') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Plastic')
    })), __jsx(card_accordion["default"], {
      title: 'Product Tags'
    }, __jsx(creatable_default.a, {
      isMulti: true,
      styles: styleSheet["a" /* default */].react_select_styles,
      onChange: this.handleProductTagChange,
      options: consts_product_color_options,
      value: this.state.productTags,
      placeholder: "Select/Enter Tags"
    }), __jsx("div", {
      style: {
        minHeight: '150px'
      },
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    })))), __jsx(external_react_bootstrap_["Row"], {
      style: styles.row
    }, __jsx(external_react_bootstrap_["Button"], {
      type: "submit",
      onSubmit: handleSubmit,
      disabled: this.state.isLoading,
      block: true
    }, this.state.isLoading ? 'Uploading' : 'Upload', this.state.isLoading ? __jsx(external_react_bootstrap_["Spinner"], {
      animation: "grow",
      size: "sm"
    }) : __jsx("div", {
      className: style_default.a.dynamic([["3499326083", [styleSheet["a" /* default */].admin_primry_color]]])
    })))), __jsx(style_default.a, {
      id: "3499326083",
      dynamic: [styleSheet["a" /* default */].admin_primry_color]
    }, [".RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:1px;border-radius:2px;width:100%;}", ".BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}", "span.__jsx-style-dynamic-selector{color:red;}", `.nav_link.__jsx-style-dynamic-selector{background:${styleSheet["a" /* default */].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}`, "p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}"])));
  }

}

const styles = {
  nav_link: {
    color: 'white',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    alignItems: 'center',
    fontSize: `${styleSheet["a" /* default */].card_header_fontsize}`,
    background: `${styleSheet["a" /* default */].card_header_background}`
  },
  buttons: {
    background: `${styleSheet["a" /* default */].primry_color}`,
    border: 'none',
    fontSize: '10px'
  },
  label: {
    fontSize: `${styleSheet["a" /* default */].form_label_fontsize}`
  },
  term_condition_label: {
    width: '100%',
    fontSize: `${styleSheet["a" /* default */].form_label_fontsize}`,
    paddingTop: '-10px',
    marginTop: '-10px'
  },
  fontawesome: {
    color: `${styleSheet["a" /* default */].primary_text_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: `${styleSheet["a" /* default */].primary_text_color}`,
    marginRight: '10%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  variations_fontawesome: {
    color: `${styleSheet["a" /* default */].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ var add_new = __webpack_exports__["default"] = (add_new_AddNew);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "vvUq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return saveTokenToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUncodededTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chectAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tYSR");
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// export default AuthenticationService;
 // import { useRouter } from 'next/router'
// import Router from 'next/router'




const AuthenticationService = () => __jsx("div", null);

async function saveTokenToStorage(token) {
  await reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].set('token', token);
}
function getTokenFromStorage() {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
    return decodedToken.data;
  } catch (error) {
    return null;
  }
}
function getUncodededTokenFromStorage() {
  return reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
}
function removeTokenFromStorage() {
  try {
    reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].remove('token');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/index');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.reload('/index');
  } catch (error) {
    console.log("error:", error);
  }
}
function chectAuth(rolee) {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);

    if (decodedToken.data.role == 'admin') {
      return decodedToken.data.fullName;
    } else if (decodedToken.data.role !== rolee) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/index');
    } else {
      return decodedToken.data.fullName;
    }
  } catch (error) {
    return null;
  }
}
/* unused harmony default export */ var _unused_webpack_default_export = (AuthenticationService);

/***/ }),

/***/ "wY5l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bWZ2");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Inventory extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  // static async getInitialProps(ctx) {
  //     const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //     const json = await res.json()
  //     return { stars: 10 }
  // }
  render() {
    return __jsx("div", {
      className: "jsx-750656228"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      defaultActiveKey: "profile",
      id: "uncontrolled-tab-example"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      eventKey: "home",
      title: "Home"
    }, __jsx("p", {
      className: "jsx-750656228"
    }, "Fuck")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      eventKey: "profile",
      title: "Profile"
    }, __jsx("p", {
      className: "jsx-750656228"
    }, "Fuck")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      eventKey: "contact",
      title: "Contact",
      disabled: true
    }, __jsx("p", {
      className: "jsx-750656228"
    }, "Fuck")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "750656228"
    }, []));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "xZEg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MonthlyReports = () => {
  return __jsx("div", null, "This is overall");
};

/* harmony default export */ __webpack_exports__["default"] = (MonthlyReports);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });