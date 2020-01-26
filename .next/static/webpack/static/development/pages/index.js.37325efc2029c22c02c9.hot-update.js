webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/customer/Layout.js":
false,

/***/ "./pages/components/customer/footer/footer.js":
/*!****************************************************!*\
  !*** ./pages/components/customer/footer/footer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_footer_footer_style_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/footer/footer-style-sheet */ "./pages/components/admin/footer/footer-style-sheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\components\\customer\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Footer = function Footer() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    style: _admin_footer_footer_style_sheet__WEBPACK_IMPORTED_MODULE_1__["default"].footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("p", {
    className: "text-center",
    style: _admin_footer_footer_style_sheet__WEBPACK_IMPORTED_MODULE_1__["default"].fooeter_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Copyright@ 2020", __jsx("span", {
    style: {
      fontSize: 'medium',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " Muhalik "), "- Online Shopping Website")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/components/customer/layout/CustomerLayout.js":
/*!************************************************************!*\
  !*** ./pages/components/customer/layout/CustomerLayout.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbar_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolbar/toolbar */ "./pages/components/customer/toolbar/toolbar.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer */ "./pages/components/customer/footer/footer.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\components\\customer\\layout\\CustomerLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Layout = function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Muhalik"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx(_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), props.children, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/components/footers/footer.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_customer_layout_CustomerLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/customer/layout/CustomerLayout */ "./pages/components/customer/layout/CustomerLayout.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Index = function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_customer_layout_CustomerLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Admin dashboard")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.37325efc2029c22c02c9.hot-update.js.map