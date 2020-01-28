webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styleSheet */ "./styleSheet.js");







var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var styles = {
  submit_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].primry_color),
    border: 'none',
    marginTop: '50px'
  },
  container: {
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].primry_color),
    padding: '50px'
  }
};

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        variant: "dark",
        style: {
          background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].primry_color)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Brand, {
        href: "/",
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, " Muhalik    "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Brand, {
        href: "#",
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, " Login    ")), __jsx("div", {
        style: {
          height: '100px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"],
        controlId: "formPlaintextEmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        column: true,
        sm: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " Email "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        plaintext: true,
        readOnly: true,
        defaultValue: "email@example.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"],
        controlId: "formPlaintextPassword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        column: true,
        sm: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " Password "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        type: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "primary",
        block: true,
        type: "submit",
        style: styles.submit_btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, " Submit "))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.8464397c6843e6527545.hot-update.js.map