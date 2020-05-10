module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2STs":
/***/ (function(module, exports) {

module.exports = require("react-select-material-ui");

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZTIo");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });