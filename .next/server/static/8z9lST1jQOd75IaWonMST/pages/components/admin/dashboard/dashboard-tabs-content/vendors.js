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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ukOe");


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "ukOe":
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
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Vendor extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "New Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Top Vendors "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Admin Vendors "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "5678")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742"
    }, [".hover.jsx-3124640742{margin:5px 15px;}", ".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  card: {
    background: 'white',
    borderRadius: '0px',
    padding: '0px'
  },
  card_header: {
    background: 'white',
    color: 'gray',
    border: 'none'
  },
  card_text: {
    color: '#6A7074',
    fontSize: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vendor);

/***/ }),

/***/ "vkTu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
const GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  admin_primry_color: '#373948',
  primary_text_color: 'white',
  // Body color
  body_color: '#DDE1E3',
  // body_color: '#F0F0F0',
  // Fontsize for all the labels of any form control (input, textbox etc):
  form_label_fontsize: '13px'
};
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyleSheet);

/***/ })

/******/ });