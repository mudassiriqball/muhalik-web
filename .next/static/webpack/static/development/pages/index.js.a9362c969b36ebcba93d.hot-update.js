webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/admin/footer/footer-style-sheet.js":
false,

/***/ "./pages/components/customer/footer/footer-style-sheet.js":
/*!****************************************************************!*\
  !*** ./pages/components/customer/footer/footer-style-sheet.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_styles_styleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global-styles/styleSheet */ "./pages/global-styles/styleSheet.js");

var primry_color = _global_styles_styleSheet__WEBPACK_IMPORTED_MODULE_0__["default"].primry_color;
var primary_text_color = _global_styles_styleSheet__WEBPACK_IMPORTED_MODULE_0__["default"].primary_text_color;
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
/* harmony default export */ __webpack_exports__["default"] = (FooterStyleSheet);

/***/ }),

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
/* harmony import */ var _footer_style_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-style-sheet */ "./pages/components/customer/footer/footer-style-sheet.js");
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
    style: _footer_style_sheet__WEBPACK_IMPORTED_MODULE_1__["default"].footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("p", {
    className: "text-center",
    style: _footer_style_sheet__WEBPACK_IMPORTED_MODULE_1__["default"].fooeter_text,
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

/***/ })

})
//# sourceMappingURL=index.js.a9362c969b36ebcba93d.hot-update.js.map