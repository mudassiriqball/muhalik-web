webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styleSheet */ "./styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;







 // RegEx for phone number validation

var phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
var schema = yup__WEBPACK_IMPORTED_MODULE_12__["object"]({
  mobile: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Mobile number is required").matches(phoneRegExp, "Phone number is not valid"),
  fullName: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Full Name is required").min(5, "Full Name must have at least 5 characters").max(20, "Full Name can't be longer than 20 characters"),
  verificationCode: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Verification Code is required"),
  email: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().email("Must be a valid email address").max(100, "Email must be less than 100 characters"),
  password: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Password is required").min(8, "Password must have at least 8 characters").max(20, "Password can't be longer than 20 characters"),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Conform Password is required").min(8, "Conform Password must have at least 8 characters").max(20, "Conform Password can't be longer than 20 characters"),
  countary: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Countary is required"),
  gender: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Gender is required")
});

var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      hide: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showPassword", function (ev) {
      _this.setState({
        hide: !_this.state.hide
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hide = this.state.hide;
      var eyeBtn;

      if (this.state.sideDrawerOpen) {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEye"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });
      } else {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEyeSlash"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        });
      }

      return __jsx(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
        validationSchema: schema // onSubmit={console.log}
        ,
        initialValues: {
          mobile: '',
          fullName: '',
          verificationCode: '',
          email: '',
          password: '',
          confirmPassword: '',
          countary: '',
          gender: ''
        },
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting,
              resetForm = _ref.resetForm;
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true); // Resets form after submission is complete

          resetForm(); // Sets setSubmitting to false after form is reset

          setSubmitting(false);
          setTimeout(function () {
            alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, function (_ref2) {
        var handleSubmit = _ref2.handleSubmit,
            handleChange = _ref2.handleChange,
            values = _ref2.values,
            touched = _ref2.touched,
            isValid = _ref2.isValid,
            errors = _ref2.errors,
            handleBlur = _ref2.handleBlur,
            isSubmitting = _ref2.isSubmitting;
        return __jsx("div", {
          style: styles.body,
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"], {
          variant: "dark",
          style: {
            background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].primry_color)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"].Brand, {
          href: "/",
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, " Muhalik ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 1,
          md: 1,
          sm: 0,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          style: styles.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
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
            lineNumber: 102
          },
          __self: this
        })), __jsx("h6", {
          style: {
            width: '100%',
            paddingBottom: '10px'
          },
          className: "jsx-1794121765" + " " + "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, "Create Your Acount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, console.log("fucking values fffffffffffffffff: ", values), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: "6",
          controlId: "validationMobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Mobile Number ", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "text",
          placeholder: "+966590911891",
          "aria-describedby": "mobile",
          name: "mobile",
          value: values.mobile,
          onChange: handleChange,
          isInvalid: touched.mobile && errors.mobile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "sndCodeBtn",
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, "Send Code")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, errors.mobile))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: "6",
          controlId: "validationFullName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "Full Name", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "text",
          placeholder: "Full Name",
          "aria-describedby": "fullName",
          name: "fullName",
          value: values.fullName,
          onChange: handleChange,
          isInvalid: touched.fullName && errors.fullName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, errors.fullName)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: "6",
          controlId: "validationVerificationCode",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, "Verification Code", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "text",
          placeholder: "Verification Code",
          name: "verificationCode",
          value: values.verificationCode,
          onChange: handleChange,
          isInvalid: touched.verificationCode && errors.verificationCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, errors.verificationCode)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: "6",
          controlId: "validationEmail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "Email Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "email",
          placeholder: "mr.x@gmail.com",
          name: "email",
          value: values.email,
          onChange: handleChange,
          isInvalid: touched.email && errors.email,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: 6,
          controlId: "validationPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, "Password ", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: hide ? 'password' : 'text',
          placeholder: "Enter Password",
          "aria-describedby": "inputGroup",
          name: "password",
          value: values.password,
          onChange: handleChange,
          isInvalid: touched.password && errors.password,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "passwordEyeBtn",
          onClick: _this2.showPassword,
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, errors.password))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: 6,
          controlId: "validationConfirmPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, "Confirm Password ", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: hide ? 'password' : 'text',
          placeholder: "Re-enter Password",
          "aria-describedby": "confirmPassword",
          name: "confirmPassword",
          value: values.confirmPassword,
          onChange: handleChange,
          isInvalid: touched.confirmPassword && errors.confirmPassword,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "confirmPasswordEyeBtn",
          onClick: _this2.showPassword,
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, errors.confirmPassword)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          lg: 2,
          md: 3,
          controlId: "countary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, "Countary", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          as: "select",
          "aria-describedby": "countary",
          name: "countary",
          value: values.countary,
          onChange: handleChange,
          isInvalid: touched.countary && errors.countary,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, __jsx("option", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, "Select"), __jsx("option", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, " KSA "), __jsx("option", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, " Pak ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, errors.countary)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          lg: 2,
          md: 3,
          controlId: "gender",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, "Gender", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          as: "select",
          "aria-describedby": "gender",
          name: "gender",
          value: values.gender,
          onChange: handleChange,
          isInvalid: touched.gender && errors.gender,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, __jsx("option", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, "Select"), __jsx("option", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, " Male "), __jsx("option", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, " Female "), __jsx("option", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, " Other ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, errors.gender)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }, __jsx("div", {
          style: {
            height: '30%'
          },
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          className: "text-center",
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, "By creating an account, you agree to Muhalik's", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        }, " Terms & Conditions ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          lg: 4,
          controlId: "loginGrop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          className: "text-center",
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, "Already have an account...", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, " Login "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          block: true,
          style: styles.submit_btn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, "Signup"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 1,
          md: 1,
          sm: 0,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "1794121765",
          __self: this
        }, "span.jsx-1794121765{color:red;}p.jsx-1794121765{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxzaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1NxQyxBQUd1RCxBQUdRLFVBRnRCLFFBR2UsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcRllQXFxtdWhhbGlrd2ViXFxwYWdlc1xcc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE5hdmJhciwgQ29udGFpbmVyLCBGb3JtLCBDb2wsIFJvdywgSW5wdXRHcm91cCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBSZWdFeCBmb3IgcGhvbmUgbnVtYmVyIHZhbGlkYXRpb25cclxuY29uc3QgcGhvbmVSZWdFeHAgPSAvXihcXCs/XFxkezAsNH0pP1xccz8tP1xccz8oXFwoP1xcZHszfVxcKT8pXFxzPy0/XFxzPyhcXCg/XFxkezN9XFwpPylcXHM/LT9cXHM/KFxcKD9cXGR7NH1cXCk/KT8kL1xyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBtb2JpbGU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIk1vYmlsZSBudW1iZXIgaXMgcmVxdWlyZWRcIilcclxuICAgICAgICAubWF0Y2hlcyhwaG9uZVJlZ0V4cCwgXCJQaG9uZSBudW1iZXIgaXMgbm90IHZhbGlkXCIpLFxyXG5cclxuICAgIGZ1bGxOYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJGdWxsIE5hbWUgaXMgcmVxdWlyZWRcIilcclxuICAgICAgICAubWluKDUsIFwiRnVsbCBOYW1lIG11c3QgaGF2ZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDIwLCBcIkZ1bGwgTmFtZSBjYW4ndCBiZSBsb25nZXIgdGhhbiAyMCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIHZlcmlmaWNhdGlvbkNvZGU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlZlcmlmaWNhdGlvbiBDb2RlIGlzIHJlcXVpcmVkXCIpLFxyXG5cclxuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoXCJNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkVtYWlsIG11c3QgYmUgbGVzcyB0aGFuIDEwMCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiKVxyXG4gICAgICAgIC5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMCwgXCJQYXNzd29yZCBjYW4ndCBiZSBsb25nZXIgdGhhbiAyMCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIGNvbmZpcm1QYXNzd29yZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiQ29uZm9ybSBQYXNzd29yZCBpcyByZXF1aXJlZFwiKVxyXG4gICAgICAgIC5taW4oOCwgXCJDb25mb3JtIFBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDIwLCBcIkNvbmZvcm0gUGFzc3dvcmQgY2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAgY2hhcmFjdGVyc1wiKSxcclxuXHJcblxyXG4gICAgY291bnRhcnk6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkNvdW50YXJ5IGlzIHJlcXVpcmVkXCIpLFxyXG5cclxuICAgIGdlbmRlcjogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiR2VuZGVyIGlzIHJlcXVpcmVkXCIpLFxyXG59KTtcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHNob3dQYXNzd29yZCA9IGV2ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlkZTogIXRoaXMuc3RhdGUuaGlkZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhpZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGV5ZUJ0bjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWRlRHJhd2VyT3Blbikge1xyXG4gICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPjtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGV5ZUJ0biA9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWVTbGFzaH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgIC8vIG9uU3VibWl0PXtjb25zb2xlLmxvZ31cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6ICcnLCBmdWxsTmFtZTogJycsIHZlcmlmaWNhdGlvbkNvZGU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgY29uZmlybVBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGFyeTogJycsIGdlbmRlcjogJydcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gYnV0dG9uIHN1Ym1pdHMgZm9ybSBhbmQgZm9ybSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBzdWJtaXR0aW5nLCBzdWJtaXQgYnV0dG9uIGlzIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldHMgZm9ybSBhZnRlciBzdWJtaXNzaW9uIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0cyBzZXRTdWJtaXR0aW5nIHRvIGZhbHNlIGFmdGVyIGZvcm0gaXMgcmVzZXRcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIHZhcmlhbnQ9XCJkYXJrXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiA+IE11aGFsaWsgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxfSBtZD17MX0gc209ezB9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9tdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgbWF4V2lkdGg6ICcxNTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PkNyZWF0ZSBZb3VyIEFjb3VudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiZnVja2luZyB2YWx1ZXMgZmZmZmZmZmZmZmZmZmZmZmY6IFwiLCB2YWx1ZXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TW9iaWxlIE51bWJlciA8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQubW9iaWxlICYmIGVycm9ycy5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwic25kQ29kZUJ0blwiIHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+U2VuZCBDb2RlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbWQ9XCI2XCIgY29udHJvbElkPVwidmFsaWRhdGlvbkZ1bGxOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RnVsbCBOYW1lPHNwYW4+Kjwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5mdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuZnVsbE5hbWUgJiYgZXJyb3JzLmZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uVmVyaWZpY2F0aW9uQ29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlZlcmlmaWNhdGlvbiBDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICogPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWZXJpZmljYXRpb24gQ29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2ZXJpZmljYXRpb25Db2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy52ZXJpZmljYXRpb25Db2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQudmVyaWZpY2F0aW9uQ29kZSAmJiBlcnJvcnMudmVyaWZpY2F0aW9uQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy52ZXJpZmljYXRpb25Db2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbWQ9XCI2XCIgY29udHJvbElkPVwidmFsaWRhdGlvbkVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RW1haWwgQWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibXIueEBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbWQ9ezZ9IGNvbnRyb2xJZD1cInZhbGlkYXRpb25QYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlBhc3N3b3JkIDxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImlucHV0R3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJwYXNzd29yZEV5ZUJ0blwiIG9uQ2xpY2s9e3RoaXMuc2hvd1Bhc3N3b3JkfSBzdHlsZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleWVCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IG1kPXs2fSBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uQ29uZmlybVBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Q29uZmlybSBQYXNzd29yZCA8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17aGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlLWVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuY29uZmlybVBhc3N3b3JkICYmIGVycm9ycy5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiY29uZmlybVBhc3N3b3JkRXllQnRuXCIgb25DbGljaz17dGhpcy5zaG93UGFzc3dvcmR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V5ZUJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogNHRoIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXszfSBjb250cm9sSWQ9XCJjb3VudGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkNvdW50YXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvdW50YXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdW50YXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3VudGFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLmNvdW50YXJ5ICYmIGVycm9ycy5jb3VudGFyeX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBLU0EgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IFBhayA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY291bnRhcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezN9IGNvbnRyb2xJZD1cImdlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkdlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAqIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJnZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5nZW5kZXIgJiYgZXJyb3JzLmdlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE1hbGUgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEZlbWFsZSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gT3RoZXIgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmdlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzMwJScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkgY3JlYXRpbmcgYW4gYWNjb3VudCwgeW91IGFncmVlIHRvIE11aGFsaWsnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj4gVGVybXMgJiBDb25kaXRpb25zIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IGNvbnRyb2xJZD1cImxvZ2luR3JvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50Li4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IExvZ2luIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PlNpZ251cDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIDR0aCBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxfSBtZD17MX0gc209ezB9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIGJvdHRvbTogJzAnLFxyXG5cclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDMwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzUlIDUlJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\signup.js */"));
      });
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var styles = {
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color),
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  buttons: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].primry_color),
    border: 'none',
    fontSize: '10px'
  },
  submit_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].primry_color)
  },
  container: {
    background: 'white',
    // border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
    padding: '20px 30px',
    margin: '5% 5%'
  },
  label: {
    width: '100%',
    fontSize: '14px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].primary_text_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.64d2f2d6837439175134.hot-update.js.map