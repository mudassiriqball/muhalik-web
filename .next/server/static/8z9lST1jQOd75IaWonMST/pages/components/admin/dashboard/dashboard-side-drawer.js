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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

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






class Inventory extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  // static async getInitialProps(ctx) {
  //     const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //     const json = await res.json()
  //     return { stars: 10 }
  // }
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
    }, "Product In Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, "Product Sold"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Product Categories "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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






class Customers extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, "New Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Top Customers "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "icUW":
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






class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Product Sold "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Oredrs "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "5678")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      md: 6,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      md: 6,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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

/***/ "mf3m":
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






class Categories extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
    }, "Product Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, "Product Sold"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Product Categories "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "oV2t":
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
/* harmony import */ var _dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("icUW");
/* harmony import */ var _dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ukOe");
/* harmony import */ var _dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("D0YP");
/* harmony import */ var _dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uVM9");
/* harmony import */ var _dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("mf3m");
/* harmony import */ var _dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("7WCM");
/* harmony import */ var _dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("CQpV");
/* harmony import */ var _dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kplv");
/* harmony import */ var _dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("7RBj");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("vkTu");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "one"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + (drawerClasses || "")
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: styles.image_div
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 5,
    xs: 5
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "text-center",
    src: "/static/a.png",
    fluid: true,
    style: styles.image
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 5,
    xs: 5
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik
  }, "Muhalik")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "zero",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome
  }), "Dashboard", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "one",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    style: styles.fontawesome
  }), "Vendors", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "two",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
    style: styles.fontawesome
  }), "Customers", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "four",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.fontawesome
  }), "Categories", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "five",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome
  }), "Inventory", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "six",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), "Discounts", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "seven",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPercent"],
    style: styles.fontawesome
  }), "Commission", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "eight",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), "Reports", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "tabs_side_drawer_tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "zero"
  }, __jsx(_dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "one"
  }, __jsx(_dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "two"
  }, __jsx(_dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "four"
  }, __jsx(_dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "five"
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "six"
  }, __jsx(_dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "seven"
  }, __jsx(_dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "eight"
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__["default"], null)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3248124927",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]
  }, [".hover.__jsx-style-dynamic-selector:hover{background:#30313E;}", `.tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color};box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}`, ".tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}", "p.__jsx-style-dynamic-selector{text-align:center;padding:5% 0px;border-bottom:1px solid gray;}", `label.__jsx-style-dynamic-selector{margin-top:4%;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color};}`, "@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}"]));
};

const styles = {
  image_div: {
    background: 'white',
    marginRight: '1px',
    padding: '10% 2%'
  },
  image: {
    width: '100%'
  },
  muhalik: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color}`,
    fontSize: '28px',
    fontWeight: 'bold'
  },
  // tab_link: {
  //     color: '#cccccc',
  //     fontSize: '14px',
  //     paddingTop: '2%',
  //     paddingBottom: '2%',
  // },
  tab_link: {
    color: '#cccccc',
    fontSize: '14px',
    paddingTop: '8%',
    paddingBottom: '8%'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color}`,
    margin: '0px 8% 0px 5%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color}`,
    margin: '8px 5% 0px 0px',
    float: 'right',
    width: '8px',
    height: '8px',
    maxHeight: '8px',
    maxWidth: '8px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DashboardSideDrawer);

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

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