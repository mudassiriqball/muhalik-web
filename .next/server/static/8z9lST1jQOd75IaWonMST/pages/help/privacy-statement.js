module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fHQ6");


/***/ }),

/***/ "ILKo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbar_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zwR7");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vpgN");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Muhalik"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
  integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
  crossorigin: "anonymous"
})), __jsx(_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, __jsx(_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fHQ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_customer_layout_CustomerLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ILKo");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PrivacyPolicy = () => __jsx(_components_customer_layout_CustomerLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("h3", {
  className: "text-center"
}, "Muhalik's Privacy Policy"));

/* harmony default export */ __webpack_exports__["default"] = (PrivacyPolicy);

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

/***/ }),

/***/ "vpgN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStyleSheet", function() { return FooterStyleSheet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const primry_color = _styleSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].primry_color;
const primary_text_color = _styleSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].primary_text_color;
const FooterStyleSheet = {
  footer: {
    background: `${primry_color}`,
    position: 'absolute',
    left: "0",
    bottom: '0',
    right: '0'
  },
  fooeter_text: {
    margin: '10px',
    fontSize: 'smaller',
    color: `${primary_text_color}`
  }
};

const Footer = () => __jsx("div", null, __jsx("div", {
  style: FooterStyleSheet.footer
}, __jsx("p", {
  className: "text-center",
  style: FooterStyleSheet.fooeter_text
}, "Copyright@ 2020", __jsx("span", {
  style: {
    fontSize: 'medium',
    fontWeight: 'bold'
  }
}, " Muhalik "), "- Online Shopping Website")));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zwR7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const styles = {
  background: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color}`
  },
  brand: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color}`,
    fontSize: 'medium'
  },
  form: {
    border: `2px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color}`,
    width: '60%',
    borderRadius: '25px',
    padding: '0px 5px'
  }
};

const Toolbar = () => __jsx("div", null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
  collapseOnSelect: true,
  expand: "lg"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
  href: "#home",
  style: styles.brand
}, "Muhalik"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
  "aria-controls": "responsive-navbar-nav"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
  id: "responsive-navbar-nav"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
  className: "mr-auto"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
  inline: true,
  style: styles.form,
  className: "mr-auto"
}, __jsx("label", {
  className: "mr-auto"
}, "Fuck"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
  type: "text",
  placeholder: "Search",
  className: "mr-sm-2",
  style: {
    width: '80%'
  },
  className: "mr-auto"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  style: {
    background: 'none',
    border: 'none'
  }
}, "Search")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
  className: true
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  href: "#home"
}, "Login/Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  href: "#features"
}, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  href: "#pricing"
}, "Cart")))))));

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ })

/******/ });