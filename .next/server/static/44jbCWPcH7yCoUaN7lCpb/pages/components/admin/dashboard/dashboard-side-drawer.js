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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oV2t");


/***/ }),

/***/ "7RBj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Reports = () => {
  return __jsx("div", {
    style: {
      width: '100%',
      background: 'yellow'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "daily",
    transition: false,
    id: "reports_tab",
    style: {
      padding: '0px',
      margin: '0px',
      width: '100%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "daily",
    title: "Daily Reports"
  }, __jsx("p", null, "Daily Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "weekly",
    title: "Weekly Reports"
  }, __jsx("p", null, "Weekly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "monthly",
    title: "Monthly Reports"
  }, __jsx("p", null, "Monthly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "yearly",
    title: "Yearly Reports"
  }, __jsx("p", null, "Yearly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "overall",
    title: "Overall Reports"
  }, __jsx("p", null, "Overall Reports"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Reports);

/***/ }),

/***/ "7WCM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Inventory = () => {
  return __jsx("div", null, __jsx("p", null, "Inventory page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "CQpV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Discount = () => {
  return __jsx("div", null, __jsx("p", null, "This is Discount page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Discount);

/***/ }),

/***/ "D0YP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Customers = () => {
  return __jsx("div", null, __jsx("p", null, "This is Customers page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Customers);

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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "bEtG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
const GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  primary_text_color: 'white'
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyleSheet);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fMUu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ProductCategories = () => {
  return __jsx("div", null, __jsx("p", null, "This is Product Categories page"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCategories);

/***/ }),

/***/ "kplv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Commision = () => {
  return __jsx("div", null, __jsx("p", null, "This is Commision page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Commision);

/***/ }),

/***/ "oV2t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ukOe");
/* harmony import */ var _dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("D0YP");
/* harmony import */ var _dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("uVM9");
/* harmony import */ var _dashboard_tabs_content_product_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("fMUu");
/* harmony import */ var _dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("7WCM");
/* harmony import */ var _dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("CQpV");
/* harmony import */ var _dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("kplv");
/* harmony import */ var _dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("7RBj");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("bEtG");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const styles = {
  background: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color}`
  },
  // Styles for the dashboard.js
  search_bar: {
    width: '75%',
    flex: '7',
    border: `2px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color}`,
    margin: '2px 2.5px 1px 1.2px'
  },
  search_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color}`,
    flex: '1',
    border: 'none',
    color: 'white',
    width: '20%',
    float: 'right',
    borderRadius: 'none'
  },
  side_drawer_search_bars: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color}`,
    margin: '0px 1px',
    color: 'white',
    width: '17%',
    maxHeight: '40px',
    maxWidth: '40px',
    border: 'none',
    borderRadius: 'none'
  },
  border: {
    border: '1px solid white',
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color}`,
    color: 'white',
    borderRadius: '4px'
  },
  link_color: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primary_text_color}`
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primary_text_color}`,
    marginRight: '20px',
    width: '10%',
    maxHeight: '22px',
    maxWidth: '22px'
  }
};

const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: "jsx-2154470133"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "one"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    style: {
      padding: '0px',
      margin: '0px'
    }
  }, __jsx("div", {
    className: "jsx-2154470133" + " " + (drawerClasses || "")
  }, __jsx("div", {
    className: "jsx-2154470133"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "flex-column",
    variant: "tabs"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "one",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPersonBooth"],
    style: styles.fontawesome
  }), "Vendors"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "two",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"],
    style: styles.fontawesome
  }), "Customers"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "three",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faProductHunt"],
    style: styles.fontawesome
  }), "Products"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "four",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faListAlt"],
    style: styles.fontawesome
  }), "Categories"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "five",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWarehouse"],
    style: styles.fontawesome
  }), "Inventory"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "six",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTags"],
    style: styles.fontawesome
  }), "Discounts"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "seven",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPercent"],
    style: styles.fontawesome
  }), "Commision"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Item, null, __jsx("div", {
    style: styles.border,
    className: "jsx-2154470133" + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: "eight",
    onClick: props.click,
    style: styles.link_color
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChartBar"],
    style: styles.fontawesome
  }), "Reports")))))), __jsx("div", {
    className: "jsx-2154470133" + " " + "tabs_side_drawer_tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "one"
  }, __jsx(_dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "two"
  }, __jsx(_dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "three"
  }, __jsx(_dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "four"
  }, __jsx(_dashboard_tabs_content_product_categories__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "five"
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "six"
  }, __jsx(_dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "seven"
  }, __jsx(_dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, {
    eventKey: "eight"
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_13__["default"], null))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2154470133"
  }, [".hover.jsx-2154470133:hover{margin-left:10px;margin-right:-10px;margin-top:-4px;margin-bottom:4px;}", ".tabs_side_drawer.jsx-2154470133{height:100%;background:white;box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:1px;bottom:1px;left:0;width:60%;max-width:400px;z-index:200;-webkit-transform:translateX(-100% );-ms-transform:translateX(-100% );transform:translateX(-100% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}", ".tabs_side_drawer.open.jsx-2154470133{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}", "@media (min-width:992px){.tabs_side_drawer.jsx-2154470133{display:none;}.tabs_side_drawer_tab_content.jsx-2154470133{display:none;}}"]));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardSideDrawer);

/***/ }),

/***/ "uVM9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Products = () => {
  return __jsx("div", null, __jsx("p", null, "This is Product page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "ukOe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Vendors = () => {
  return __jsx("div", null, __jsx("p", null, "It is the Vendors page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Vendors);

/***/ })

/******/ });