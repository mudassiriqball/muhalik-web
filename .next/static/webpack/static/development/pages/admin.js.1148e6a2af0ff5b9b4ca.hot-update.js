webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/components/admin/adminStyleSheet.js":
/*!***************************************************!*\
  !*** ./pages/components/admin/adminStyleSheet.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_styles_styleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-styles/styleSheet */ "./pages/global-styles/styleSheet.js");

var primry_color = _global_styles_styleSheet__WEBPACK_IMPORTED_MODULE_0__["default"].primry_color;
var primary_text_color = _global_styles_styleSheet__WEBPACK_IMPORTED_MODULE_0__["default"].primary_text_color;
var AdminStyleSheet = {
  background: {
    background: "".concat(primry_color)
  },
  // Styles for the dashboard.js
  search_bar: {
    width: '75%',
    flex: '7',
    border: "2px solid ".concat(primry_color),
    // borderBottom: `2px solid ${primry_color}`,
    margin: '2px 2.5px 1px 1.2px'
  },
  search_btn: {
    background: "".concat(primry_color),
    flex: '1',
    border: 'none',
    color: 'white',
    width: '20%',
    "float": 'right',
    borderRadius: 'none'
  },
  side_drawer_search_bars: {
    background: "".concat(primry_color),
    margin: '0px 1px',
    color: 'white',
    width: '17%',
    maxHeight: '40px',
    maxWidth: '40px',
    border: 'none',
    borderRadius: 'none'
  },
  border: {
    border: '1px solid white',
    background: "".concat(primry_color),
    color: 'white',
    borderRadius: '4px'
  },
  link_color: {
    color: "".concat(primary_text_color)
  },
  tabs_fontawesome: {
    color: "".concat(primary_text_color),
    marginRight: '20px',
    width: '10%',
    maxHeight: '22px',
    maxWidth: '22px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AdminStyleSheet);

/***/ }),

/***/ "./pages/components/admin/toolbar/admin-toolbar.js":
/*!*********************************************************!*\
  !*** ./pages/components/admin/toolbar/admin-toolbar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminStyleSheet */ "./pages/components/admin/adminStyleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\components\\admin\\toolbar\\admin-toolbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var AdminToolbar = function AdminToolbar() {
  return __jsx("div", {
    className: "jsx-331570028",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].background,
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    href: "/",
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Muhalik"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    href: "#home",
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Admin Dashboard"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"],
    alignRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Settings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    split: true,
    variant: "light",
    id: "dropdown-split",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Acount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Signout")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "331570028",
    __self: this
  }, ".hover.jsx-331570028:hover{margin-left:10px;margin-right:-10px;margin-bottom:5px;margin-top:-5px;background:red;}.spliter_hover.jsx-331570028:hover{margin-left:10px;margin-right:-10px;margin-bottom:13px;margin-top:-5px;background:red;}.dropdown.jsx-331570028{z-index:200;}.nav.jsx-331570028{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcdG9vbGJhclxcYWRtaW4tdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qk8sQUFHNEIsQUFPQSxBQU9MLEFBR0EsWUFGZCxBQUdBLEtBakJxQixBQU9BLG1CQU5ELEFBT0Msa0JBTkgsQ0FPQSxlQU5ELENBT0EsY0FOakIsQ0FPQSIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcRllQXFxtdWhhbGlrd2ViXFxwYWdlc1xcY29tcG9uZW50c1xcYWRtaW5cXHRvb2xiYXJcXGFkbWluLXRvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd24sIERyb3Bkb3duLCBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEFkbWluU3R5bGVTaGVldCBmcm9tICcuLi9hZG1pblN0eWxlU2hlZXQnO1xyXG5cclxuXHJcbmNvbnN0IEFkbWluVG9vbGJhciA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPE5hdmJhciBjb2xsYXBzZU9uU2VsZWN0IGV4cGFuZD1cImxnXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5iYWNrZ3JvdW5kfSB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibXItYXV0b1wiPk11aGFsaWs8L05hdmJhci5CcmFuZD5cclxuICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9XCJtci1hdXRvXCI+QWRtaW4gRGFzaGJvYXJkPC9OYXZiYXIuQnJhbmQ+XHJcblxyXG4gICAgICA8RHJvcGRvd24gYXM9e0J1dHRvbkdyb3VwfSBhbGlnblJpZ2h0PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImxpZ2h0XCI+U2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHNwbGl0IHZhcmlhbnQ9XCJsaWdodFwiIGlkPVwiZHJvcGRvd24tc3BsaXRcIiAvPlxyXG4gICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5BY291bnQ8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMlwiPkZlZWRiYWNrPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5IZWxwPzwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxEcm9wZG93bi5EaXZpZGVyLz5cclxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+U2lnbm91dDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcblxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAgIC5ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC5zcGxpdGVyX2hvdmVyOmhvdmVyIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24ge1xyXG4gICAgICAgICAgei1pbmRleDogMjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblRvb2xiYXI7XHJcblxyXG57LyogNTYzRDdDIEUzNTMwMCAqLyB9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\components\\\\admin\\\\toolbar\\\\admin-toolbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminToolbar);
{
  /* 563D7C E35300 */
}

/***/ })

})
//# sourceMappingURL=admin.js.1148e6a2af0ff5b9b4ca.hot-update.js.map