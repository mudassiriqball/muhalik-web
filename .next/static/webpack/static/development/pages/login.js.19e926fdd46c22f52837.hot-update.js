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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styleSheet */ "./styleSheet.js");







var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      hide: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showPassword", function (ev) {
      _this.setState({
        hide: !_this.state.hide
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      var hide = this.state.hide;
      var eyeBtn;

      if (this.state.hide) {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faEye"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      } else {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faEyeSlash"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      }

      return __jsx("div", {
        style: styles.body,
        className: "jsx-2713768715",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"], {
        variant: "dark",
        style: {
          background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primry_color)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"].Brand, {
        href: "/",
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " Muhalik    ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: 3,
        md: 3,
        sm: 1,
        xs: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-2713768715",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: "/static/muhalik.jpg",
        roundedCircle: true,
        thumbnail: true,
        fluid: true,
        style: {
          width: '25%',
          maxWidth: '150px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), __jsx("h6", {
        style: {
          width: '100%',
          paddingBottom: '10px'
        },
        className: "jsx-2713768715" + " " + "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Welcome To Muhalik"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "formBasicEmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        style: styles.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Mobile Number"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        id: "mobileIcon",
        style: styles.fontawesome_btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faMobileAlt"],
        style: styles.fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: "text",
        placeholder: "+966590911891",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "formBasicPassword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        style: styles.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        id: "passwordBtn",
        style: styles.fontawesome_btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faLock"],
        style: styles.fontawesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: hide ? 'password' : 'text',
        placeholder: "Enter Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        id: "eyeBtn",
        onClick: this.showPassword,
        style: styles.fontawesome_eye_btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, eyeBtn)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "text-right",
        style: styles.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("label", {
        style: {
          flex: '1'
        },
        className: "jsx-2713768715",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, " Forgot Password ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "light",
        block: true,
        type: "submit",
        style: styles.submit_btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, " Login "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        className: "text-center",
        style: styles.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Don't have an account..??", __jsx("span", {
        className: "jsx-2713768715",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, " Signup "))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        lg: 3,
        md: 3,
        sm: 1,
        xs: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2713768715",
        __self: this
      }, "p.jsx-2713768715{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RnFCLEFBRytDLGtCQUNQLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2YmFyLCBGb3JtLCBJbnB1dEdyb3VwLCBCdXR0b24sIFJvdywgQ29sLCBDb250YWluZXIsIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUV5ZVNsYXNoLCBmYUxvY2ssIGZhRXllLCBmYU1vYmlsZUFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi9zdHlsZVNoZWV0JztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGhpZGU6IHRydWVcclxuICAgIH07XHJcbiAgICBzaG93UGFzc3dvcmQgPSBldiA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGU6ICF0aGlzLnN0YXRlLmhpZGUgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhpZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGV5ZUJ0bjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oaWRlKSB7XHJcbiAgICAgICAgICAgIGV5ZUJ0biA9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWV9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV5ZUJ0biA9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWVTbGFzaH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIHZhcmlhbnQ9XCJkYXJrXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibXItYXV0b1wiID4gTXVoYWxpayAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezF9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9tdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgbWF4V2lkdGg6ICcxNTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmdCb3R0b206ICcxMHB4JyB9fT5XZWxjb21lIFRvIE11aGFsaWs8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TW9iaWxlIE51bWJlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJtb2JpbGVJY29uXCIgc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9idG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTW9iaWxlQWx0fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiBXZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuIDwvRm9ybS5UZXh0PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJwYXNzd29yZEJ0blwiIHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2t9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT17aGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCd9IHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZXllQnRuXCIgb25DbGljaz17dGhpcy5zaG93UGFzc3dvcmR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfZXllX2J0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleWVCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmxleDogJzEnIH19PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IEZvcmdvdCBQYXNzd29yZCA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiIGJsb2NrIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PiBMb2dpbiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIiBibG9jayB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT4gU2lnaG51cCA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50Li4/P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IFNpZ251cCA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezF9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgYm90dG9tOiAnMCcsXHJcblxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnNSUnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzIlJyxcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDMwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzUlIDUlJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZV9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lX2V5ZV9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyOiAnMC41cHggc29saWQgI0RERTFFMycsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWVfZXllOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\login.js */"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var styles = {
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color),
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  submit_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primry_color),
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primary_text_color),
    // background: 'white',
    border: 'none',
    marginTop: '5%',
    marginBottom: '2%'
  },
  container: {
    // background: `${GlobalStyleSheet.primry_color}`,
    background: 'white',
    // border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
    padding: '20px 30px',
    margin: '5% 5%'
  },
  label: {
    width: '100%',
    fontSize: '14px'
  },
  fontawesome_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primry_color),
    border: 'none'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primary_text_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  fontawesome_eye_btn: {
    background: 'none',
    border: '0.5px solid #DDE1E3'
  },
  fontawesome_eye: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primry_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.19e926fdd46c22f52837.hot-update.js.map