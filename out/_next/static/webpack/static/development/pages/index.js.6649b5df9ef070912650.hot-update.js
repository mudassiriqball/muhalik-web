webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/customer/footer/footer.js":
/*!****************************************************!*\
  !*** ./pages/components/customer/footer/footer.js ***!
  \****************************************************/
/*! exports provided: FooterStyleSheet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStyleSheet", function() { return FooterStyleSheet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styleSheet */ "./pages/components/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\components\\customer\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var primry_color = _styleSheet__WEBPACK_IMPORTED_MODULE_1__["default"].primry_color;
var primary_text_color = _styleSheet__WEBPACK_IMPORTED_MODULE_1__["default"].primary_text_color;
var FooterStyleSheet = {
  footer: {
    background: "".concat(primry_color),
    position: 'absolute',
    left: "0",
    bottom: '0',
    right: '0'
  },
  fooeter_text: {
    margin: '10px',
    fontSize: 'smaller',
    color: "".concat(primary_text_color)
  }
};

var Footer = function Footer() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    style: FooterStyleSheet.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    className: "text-center",
    style: FooterStyleSheet.fooeter_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Copyright@ 2020", __jsx("span", {
    style: {
      fontSize: 'medium',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, " Muhalik "), "- Online Shopping Website")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/components/customer/toolbar/toolbar.js":
/*!******************************************************!*\
  !*** ./pages/components/customer/toolbar/toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styleSheet */ "./pages/components/styleSheet.js");

var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\components\\customer\\toolbar\\toolbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var styles = {
  background: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color)
  },
  brand: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color),
    fontSize: 'larger',
    fontWeight: 'bolder'
  },
  form: {
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color),
    width: '60%',
    borderRadius: '25px',
    padding: '0px 5px'
  }
};

var Toolbar = function Toolbar() {
  var _jsx;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    href: "#home",
    style: styles.brand,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Muhalik"), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    style: styles.form,
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("label", {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Fuck"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], (_jsx = {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-2",
    style: {
      width: '80%'
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "mr-auto"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 36
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      background: 'none',
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Search")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Login/Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#features",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Cart")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./pages/components/styleSheet.js":
/*!****************************************!*\
  !*** ./pages/components/styleSheet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
var GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  primary_text_color: 'white'
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyleSheet);

/***/ }),

/***/ "./pages/global-styles/styleSheet.js":
false

})
//# sourceMappingURL=index.js.6649b5df9ef070912650.hot-update.js.map