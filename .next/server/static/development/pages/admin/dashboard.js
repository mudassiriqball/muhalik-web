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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/admin/components/adminLayout.js":
/*!***********************************************!*\
  !*** ./pages/admin/components/adminLayout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adminNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminNavbar */ "./pages/admin/components/adminNavbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer */ "./pages/components/footer.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./pages/admin/components/sidebar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\mysouqapi\\pages\\admin\\components\\adminLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AdminLayout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Muhalik"), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
  integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx(_adminNavbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
  style: {
    padding: '0px',
    margin: '0px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
  style: {
    paddingLeft: '0px'
  },
  xs: "5",
  sm: "4",
  lg: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, props.children)), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (AdminLayout);

/***/ }),

/***/ "./pages/admin/components/adminNavbar.js":
/*!***********************************************!*\
  !*** ./pages/admin/components/adminNavbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/colorStyle */ "./pages/styles/colorStyle.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\mysouqapi\\pages\\admin\\components\\adminNavbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AdminNavbar = () => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
  collapseOnSelect: true,
  expand: "lg",
  style: _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__["default"].nav_background,
  variant: "dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("dev", {
  style: {
    flex: '1'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
  href: "#home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Muhalik")), __jsx("dev", {
  style: {
    flex: '1'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
  href: "#home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Admin Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
  "aria-controls": "responsive-navbar-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
  id: "responsive-navbar-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
  className: "mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  href: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, " Signout "))));

/* harmony default export */ __webpack_exports__["default"] = (AdminNavbar);
{
  /* 563D7C E35300 */
}

/***/ }),

/***/ "./pages/admin/components/sidebar.js":
/*!*******************************************!*\
  !*** ./pages/admin/components/sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/colorStyle */ "./pages/styles/colorStyle.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\mysouqapi\\pages\\admin\\components\\sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sidebar = () => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
  defaultActiveKey: "/home",
  className: "flex-column",
  style: _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__["default"].nav_background,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  style: _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__["default"].nav_background,
  href: "/home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Active"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  style: _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__["default"].nav_background,
  eventKey: "link-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Link"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  style: _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__["default"].nav_background,
  eventKey: "link-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Link"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
  style: _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__["default"].nav_background,
  eventKey: "link-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Disabled"));

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./pages/admin/dashboard.js":
/*!**********************************!*\
  !*** ./pages/admin/dashboard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_adminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/adminLayout */ "./pages/admin/components/adminLayout.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\mysouqapi\\pages\\admin\\dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AdminDashboard = () => __jsx("dev", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_components_adminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "This is admin dashboard")));

/* harmony default export */ __webpack_exports__["default"] = (AdminDashboard);

/***/ }),

/***/ "./pages/components/footer.js":
/*!************************************!*\
  !*** ./pages/components/footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/colorStyle */ "./pages/styles/colorStyle.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\mysouqapi\\pages\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx("dev", {
  style: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    right: '0'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  style: _styles_colorStyle__WEBPACK_IMPORTED_MODULE_2__["default"].nav_background,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
  className: "text-center",
  style: {
    color: 'white'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Copyright@ 2020", __jsx("span", {
  style: {
    fontWeight: 'bolder',
    fontSize: 'larger'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, " Muhalik "), "- Online Shopping Website"))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/styles/colorStyle.js":
/*!************************************!*\
  !*** ./pages/styles/colorStyle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const MyStyle = {
  nav_background: {
    background: "#563D7C",
    color: "white"
  },
  nav_text: {
    color: "#563D7C"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MyStyle);

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./pages/admin/dashboard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MudassirR\Desktop\FYP\mysouqapi\pages\admin\dashboard.js */"./pages/admin/dashboard.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=dashboard.js.map