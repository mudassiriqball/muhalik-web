module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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

/***/ "2STs":
/***/ (function(module, exports) {

module.exports = require("react-select-material-ui");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tz4B");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });