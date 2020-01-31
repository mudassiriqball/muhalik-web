webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styleSheet */ "./styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;








var styles = {
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].body_color),
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  buttons: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color),
    border: 'none',
    fontSize: '10px'
  },
  container: {
    background: 'white',
    border: "0.5px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color),
    padding: '20px 30px'
  },
  label: {
    width: '100%',
    fontSize: '14px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primary_text_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
var schema = yup__WEBPACK_IMPORTED_MODULE_11__["object"]({
  mobile: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required(),
  name: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required(),
  verificationCode: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required(),
  email: yup__WEBPACK_IMPORTED_MODULE_11__["string"](),
  password: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required(),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required(),
  gender: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required()
});

var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
    key: "render",
    value: function render() {
      return __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Formik"], {
        validationSchema: schema,
        onSubmit: console.log,
        initialValues: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, function (_ref) {
        var handleSubmit = _ref.handleSubmit,
            handleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            values = _ref.values,
            touched = _ref.touched,
            isValid = _ref.isValid,
            errors = _ref.errors;
        return __jsx("div", {
          style: styles.body,
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
          variant: "dark",
          style: {
            background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].primry_color)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Brand, {
          href: "/",
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, " Muhalik ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, __jsx("p", {
          style: {
            textAlign: 'center',
            margin: '0px'
          },
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
          src: "/static/muhalik.jpg",
          roundedCircle: true,
          thumbnail: true,
          fluid: true,
          style: {
            maxWidth: '15%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          lg: 2,
          md: 2,
          sm: 0,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: styles.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("h5", {
          style: {
            width: '100%',
            paddingBottom: '10px'
          },
          className: "jsx-1933994283" + " " + "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Create Your Acount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          md: "6",
          controlId: "validationMobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Mobile Number ", __jsx("span", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          placeholder: "+966590911891",
          "aria-describedby": "inputGrouphh",
          name: "mobile",
          value: values.mobile,
          onChange: handleChange,
          isInvalid: !!errors.mobile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          id: "inputGroupPrepend",
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Send Code")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, errors.mobile))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          md: "6",
          controlId: "validationFullName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Full Name", __jsx("span", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          placeholder: "Full Name",
          "aria-describedby": "inputGroupPrepend",
          name: "Full name",
          value: values.name,
          onChange: handleChange,
          isInvalid: !!errors.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, errors.name)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          md: "6",
          controlId: "validationVerificationCode",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "Verification Code ", __jsx("span", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          placeholder: "Verification Code",
          name: "verificationCode",
          value: values.verificationCode,
          onChange: handleChange,
          isInvalid: !!errors.verificationCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, errors.verificationCode)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          md: "6",
          controlId: "validationEmail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "Email Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "Email",
          placeholder: "mr.x@gmail.com",
          name: "email",
          value: values.email,
          onChange: handleChange,
          isInvalid: !!errors.email,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          md: 6,
          controlId: "validationPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, "Password ", __jsx("span", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "password",
          placeholder: "Enter Password",
          "aria-describedby": "inputGroup",
          name: "password",
          value: values.password,
          onChange: handleChange,
          isInvalid: !!errors.password,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          id: "eyeBtn",
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faEye"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, errors.password))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          md: 6,
          controlId: "validationConfirmPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "Confirm Password ", __jsx("span", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "password",
          placeholder: "Re-enter Password",
          "aria-describedby": "inputGroupPrepend",
          name: "confirmPassword",
          value: values.confirmPassword,
          onChange: handleChange,
          isInvalid: !!errors.confirmPassword,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          id: "inputGroupPrepend",
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faEye"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, errors.confirmPassword)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 3,
          controlId: "formGridState",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, "Gender"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          as: "select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, __jsx("option", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, "Select"), __jsx("option", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, " Male "), __jsx("option", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, " Female "), __jsx("option", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, " Other "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, __jsx("div", {
          style: {
            height: '30%'
          },
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          className: "text-center",
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, "By creating an account, you agree to Muhalik's", __jsx("span", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, " Terms & Conditions ")), ".")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 4,
          controlId: "formGridState",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
          className: "text-center",
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, "Already have an account", __jsx("span", {
          className: "jsx-1933994283",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, " Signin "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          block: true,
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, "Signup"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          lg: 2,
          md: 2,
          sm: 0,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "1933994283",
          __self: this
        }, "span.jsx-1933994283{color:red;}.center.jsx-1933994283{display:block;margin-left:auto;margin-right:auto;width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxzaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaVBxQyxBQUd1RCxBQUdJLFVBRmxCLElBR3FCLGlCQUNDLGtCQUNSLFVBQ1oiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxccGFnZXNcXHNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOYXZiYXIsIENvbnRhaW5lciwgRm9ybSwgQ29sLCBSb3csIElucHV0R3JvdXAsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUV5ZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIGJvdHRvbTogJzAnLFxyXG5cclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDMwcHgnXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBtb2JpbGU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICB2ZXJpZmljYXRpb25Db2RlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgZ2VuZGVyOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxufSk7XHJcblxyXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG5cclxuICAgIH07XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1payB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9IG9uU3VibWl0PXtjb25zb2xlLmxvZ30gaW5pdGlhbFZhbHVlcz17e319ID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibXItYXV0b1wiID4gTXVoYWxpayA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9tdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1heFdpZHRoOiAnMTUlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsyfSBtZD17Mn0gc209ezB9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmdCb3R0b206ICcxMHB4JyB9fT5DcmVhdGUgWW91ciBBY291bnQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IG1kPVwiNlwiIGNvbnRyb2xJZD1cInZhbGlkYXRpb25Nb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Nb2JpbGUgTnVtYmVyIDxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis5NjY1OTA5MTE4OTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImlucHV0R3JvdXBoaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImlucHV0R3JvdXBQcmVwZW5kXCIgc3R5bGU9e3N0eWxlcy5idXR0b25zfT5TZW5kIENvZGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uRnVsbE5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GdWxsIE5hbWU8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImlucHV0R3JvdXBQcmVwZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGdWxsIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uVmVyaWZpY2F0aW9uQ29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlZlcmlmaWNhdGlvbiBDb2RlIDxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZlcmlmaWNhdGlvbiBDb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZlcmlmaWNhdGlvbkNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnZlcmlmaWNhdGlvbkNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMudmVyaWZpY2F0aW9uQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy52ZXJpZmljYXRpb25Db2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbWQ9XCI2XCIgY29udHJvbElkPVwidmFsaWRhdGlvbkVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RW1haWwgQWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibXIueEBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbWQ9ezZ9IGNvbnRyb2xJZD1cInZhbGlkYXRpb25QYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlBhc3N3b3JkIDxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiaW5wdXRHcm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImV5ZUJ0blwiIHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbWQ9ezZ9IGNvbnRyb2xJZD1cInZhbGlkYXRpb25Db25maXJtUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Db25maXJtIFBhc3N3b3JkIDxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZS1lbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiaW5wdXRHcm91cFByZXBlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJpbnB1dEdyb3VwUHJlcGVuZFwiIHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA0dGggUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17M30gY29udHJvbElkPVwiZm9ybUdyaWRTdGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkdlbmRlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwic2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE1hbGUgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEZlbWFsZSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gT3RoZXIgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMCUnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IGNyZWF0aW5nIGFuIGFjY291bnQsIHlvdSBhZ3JlZSB0byBNdWhhbGlrJ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IFRlcm1zICYgQ29uZGl0aW9ucyA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IGNvbnRyb2xJZD1cImZvcm1HcmlkU3RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBTaWduaW4gPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGJsb2NrIHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+U2lnbnVwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgNHRoIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezJ9IG1kPXsyfSBzbT17MH0geHM9ezB9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\signup.js */"));
      });
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.bdefdfbde831361e08f7.hot-update.js.map