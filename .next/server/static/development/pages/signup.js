module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styleSheet */ "./styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const styles = {
  submit_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}`,
    border: 'none',
    marginTop: '50px'
  },
  container: {
    border: `2px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}`,
    padding: '50px'
  }
};

class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      variant: "dark",
      style: {
        background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      href: "/",
      className: "mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, " Muhalik    "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      href: "#",
      className: "mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " Signup    ")), __jsx("div", {
      style: {
        height: '100px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      controlId: "formGridEmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "email",
      required: true,
      placeholder: "Enter email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      controlId: "formGridPassword",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      required: true,
      type: "password",
      placeholder: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formGridAddress1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      required: true,
      placeholder: "1234 Main St",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formGridAddress2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Address 2"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      required: true,
      placeholder: "Apartment, studio, or floor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      controlId: "formGridCity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "City"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      controlId: "formGridState",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "State"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      required: true,
      as: "select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Choose..."), __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "..."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      required: true,
      controlId: "formGridZip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Zip"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      id: "formGridCheckbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
      type: "checkbox",
      required: true,
      label: "Check me out",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      block: true,
      type: "submit",
      style: styles.submit_btn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, " Submit "))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./styleSheet.js":
/*!***********************!*\
  !*** ./styleSheet.js ***!
  \***********************/
/*! exports provided: default */
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

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MudassirR\Desktop\FYP\muhalikweb\pages\signup.js */"./pages/signup.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map