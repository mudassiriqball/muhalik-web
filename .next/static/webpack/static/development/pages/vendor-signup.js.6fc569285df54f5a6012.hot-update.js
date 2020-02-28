webpackHotUpdate("static\\development\\pages\\vendor-signup.js",{

/***/ "./pages/vendor-signup.js":
/*!********************************!*\
  !*** ./pages/vendor-signup.js ***!
  \********************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styleSheet */ "./styleSheet.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








 // RegEx for phone number validation

var phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
var schema = yup__WEBPACK_IMPORTED_MODULE_13__["object"]({
  mobile: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Mobile Number").matches(phoneRegExp, "Phone number is not valid"),
  fullName: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Full Name").min(5, "Full Name must have at least 5 characters").max(20, "Full Name can't be longer than 20 characters"),
  verificationCode: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Verification Code"),
  email: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().email("Must be a valid email address").max(100, "Email must be less than 100 characters"),
  password: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Password").min(8, "Password must have at least 8 characters").max(20, "Password can't be longer than 20 characters"),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Confirm Password").when("password", {
    is: function is(val) {
      return val && val.length > 0 ? true : false;
    },
    then: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_13__["ref"]("password")], "Passwords must match")
  }),
  shopName: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Shop Name").min(3, "Shop Name must have at least 3 characters").max(20, "Shop Name can't be longer than 20 characters"),
  category: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Category"),
  shopAddress: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Shop Address").min(5, "Shop Address must have at least 5 characters").max(30, "Shop Address can't be longer than 30 characters"),
  countary: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Countary"),
  city: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter City"),
  role: yup__WEBPACK_IMPORTED_MODULE_13__["string"]()
});

var Signup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
    key: "uploadData",
    value: function uploadData(data) {
      var url = MuhalikConfig.PATH + '/api/users/register';
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(url, {
        data: data
      }).then(function (response) {
        alert(response.data.message);
      })["catch"](function (error) {
        alert(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hide = this.state.hide;
      var eyeBtn;

      if (this.state.hide) {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faEye"],
          style: styles.fontawesome
        });
      } else {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faEyeSlash"],
          style: styles.fontawesome
        });
      }

      return __jsx(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], {
        validationSchema: schema // onSubmit={console.log}
        ,
        initialValues: {
          mobile: '',
          fullName: '',
          verificationCode: '',
          email: '',
          password: '',
          confirmPassword: '',
          shopName: '',
          category: '',
          shopAddress: '',
          countary: '',
          city: '',
          role: 'vendor'
        },
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting,
              resetForm = _ref.resetForm;
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true); // Resets form after submission is complete

          resetForm(); // Sets setSubmitting to false after form is reset

          setSubmitting(false);
          ssetTimeout(function () {
            alert("fuck you");

            _this2.uploadData(values);

            resetForm();
            setSubmitting(false);
          }, 500);
        }
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
          className: "jsx-1794121765"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
          variant: "dark",
          style: {
            background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primry_color)
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"].Brand, {
          href: "/",
          className: "mr-auto"
        }, " Muhalik ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 1,
          md: 0,
          sm: 0,
          xs: 0,
          style: styles.side_column
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          style: styles.center_column
        }, __jsx("p", {
          className: "jsx-1794121765"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Image"], {
          src: "/static/muhalik.jpg",
          roundedCircle: true,
          thumbnail: true,
          fluid: true,
          style: {
            width: '25%',
            maxWidth: '150px'
          }
        })), __jsx("h6", {
          style: {
            width: '100%',
            paddingBottom: '10px'
          },
          className: "jsx-1794121765" + " " + "text-center"
        }, "Register Your Shop"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          md: "6",
          controlId: "validationMobile"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Mobile Number ", __jsx("span", {
          className: "jsx-1794121765"
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "+966590911891",
          "aria-describedby": "mobile",
          name: "mobile",
          value: values.mobile,
          onChange: handleChange,
          isInvalid: touched.mobile && errors.mobile
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          id: "sndCodeBtn",
          disabled: !touched.mobile && errors.mobile,
          style: styles.buttons
        }, "Send Code")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.mobile))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          md: "6",
          controlId: "validationFullName"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Full Name", __jsx("span", {
          className: "jsx-1794121765"
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "Full Name",
          "aria-describedby": "fullName",
          name: "fullName",
          value: values.fullName,
          onChange: handleChange,
          isInvalid: touched.fullName && errors.fullName
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.fullName)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          md: "6",
          controlId: "validationVerificationCode"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Verification Code", __jsx("span", {
          className: "jsx-1794121765"
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "Verification Code",
          name: "verificationCode",
          value: values.verificationCode,
          onChange: handleChange,
          isInvalid: touched.verificationCode && errors.verificationCode
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.verificationCode)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          md: "6",
          controlId: "validationEmail"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Email Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "email",
          placeholder: "mr.x@gmail.com",
          name: "email",
          value: values.email,
          onChange: handleChange,
          isInvalid: touched.email && errors.email
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          md: 6,
          controlId: "validationPassword"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Password ", __jsx("span", {
          className: "jsx-1794121765"
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: hide ? 'password' : 'text',
          placeholder: "Enter Password",
          "aria-describedby": "inputGroup",
          name: "password",
          value: values.password,
          onChange: handleChange,
          isInvalid: touched.password && errors.password
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          id: "passwordEyeBtn",
          onClick: _this2.showPassword,
          style: styles.buttons
        }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.password))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          md: 6,
          controlId: "validationConfirmPassword"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Confirm Password ", __jsx("span", {
          className: "jsx-1794121765"
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: hide ? 'password' : 'text',
          placeholder: "Re-enter Password",
          "aria-describedby": "confirmPassword",
          name: "confirmPassword",
          value: values.confirmPassword,
          onChange: handleChange,
          isInvalid: touched.confirmPassword && errors.confirmPassword
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          id: "confirmPasswordEyeBtn",
          onClick: _this2.showPassword,
          style: styles.buttons
        }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.confirmPassword)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          lg: 3,
          md: 3
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Shop Name", __jsx("span", {
          className: "jsx-1794121765"
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "Shop Name",
          "aria-describedby": "shopName",
          name: "shopName",
          value: values.shopName,
          onChange: handleChange,
          isInvalid: touched.shopName && errors.shopName
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.shopName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          lg: 3,
          md: 3,
          controlId: "category"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Category", __jsx("span", {
          className: "jsx-1794121765"
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          as: "select",
          "aria-describedby": "countary",
          name: "countary",
          value: values.countary,
          onChange: handleChange,
          isInvalid: touched.countary && errors.countary
        }, __jsx("option", {
          className: "jsx-1794121765"
        }, "Select"), __jsx("option", {
          className: "jsx-1794121765"
        }, " KSA "), __jsx("option", {
          className: "jsx-1794121765"
        }, " Pak ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.countary)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          lg: 6,
          md: 6
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Shop Address", __jsx("span", {
          className: "jsx-1794121765"
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "Shop Address",
          "aria-describedby": "shopAddress",
          name: "shopAddress",
          value: values.shopAddress,
          onChange: handleChange,
          isInvalid: touched.shopAddress && errors.shopAddress
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.shopAddress)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          lg: 2,
          md: 3,
          controlId: "countary"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "Countary", __jsx("span", {
          className: "jsx-1794121765"
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          as: "select",
          "aria-describedby": "countary",
          name: "countary",
          value: values.countary,
          onChange: handleChange,
          isInvalid: touched.countary && errors.countary
        }, __jsx("option", {
          className: "jsx-1794121765"
        }, "Select"), __jsx("option", {
          className: "jsx-1794121765"
        }, " KSA "), __jsx("option", {
          className: "jsx-1794121765"
        }, " Pak ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.countary)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          lg: 2,
          md: 3,
          controlId: "city"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label
        }, "City", __jsx("span", {
          className: "jsx-1794121765"
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          as: "select",
          "aria-describedby": "city",
          name: "city",
          value: values.city,
          onChange: handleChange,
          isInvalid: touched.city && errors.city
        }, __jsx("option", {
          className: "jsx-1794121765"
        }, "Select"), __jsx("option", {
          className: "jsx-1794121765"
        }, " Male "), __jsx("option", {
          className: "jsx-1794121765"
        }, " Female "), __jsx("option", {
          className: "jsx-1794121765"
        }, " Other ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid"
        }, errors.countary)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: {
            color: 'white',
            fontSize: '0.1px'
          }
        }, " . "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          className: "text-center",
          style: styles.term_condition_label
        }, "By Registering your shop, you agree to Muhalik's", __jsx("span", {
          className: "jsx-1794121765"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "./help/terms-and-conditions"
        }, __jsx("a", {
          className: "jsx-1794121765"
        }, "Terms & Conditions"))), "and", __jsx("span", {
          className: "jsx-1794121765"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "./help/privacy-statement"
        }, __jsx("a", {
          className: "jsx-1794121765"
        }, "Privacy Statement")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          lg: 4,
          controlId: "loginGrop"
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          className: "text-center",
          style: styles.label
        }, "Already have an account...", __jsx("span", {
          className: "jsx-1794121765"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "login"
        }, __jsx("a", {
          className: "jsx-1794121765"
        }, "Login")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          block: true,
          style: styles.submit_btn
        }, "Register Shop"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 1,
          md: 0,
          sm: 0,
          xs: 0,
          style: styles.side_column
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "1794121765"
        }, "span.jsx-1794121765{color:red;}p.jsx-1794121765{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFx2ZW5kb3Itc2lnbnVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBZcUMsQUFHdUQsQUFHUSxVQUZ0QixRQUdlLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxccGFnZXNcXHZlbmRvci1zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIENvbnRhaW5lciwgRm9ybSwgQ29sLCBSb3csIElucHV0R3JvdXAsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuLy8gUmVnRXggZm9yIHBob25lIG51bWJlciB2YWxpZGF0aW9uXHJcbmNvbnN0IHBob25lUmVnRXhwID0gL14oXFwrP1xcZHswLDR9KT9cXHM/LT9cXHM/KFxcKD9cXGR7M31cXCk/KVxccz8tP1xccz8oXFwoP1xcZHszfVxcKT8pXFxzPy0/XFxzPyhcXCg/XFxkezR9XFwpPyk/JC9cclxuXHJcbmNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgbW9iaWxlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBNb2JpbGUgTnVtYmVyXCIpXHJcbiAgICAgICAgLm1hdGNoZXMocGhvbmVSZWdFeHAsIFwiUGhvbmUgbnVtYmVyIGlzIG5vdCB2YWxpZFwiKSxcclxuXHJcbiAgICBmdWxsTmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgRnVsbCBOYW1lXCIpXHJcbiAgICAgICAgLm1pbig1LCBcIkZ1bGwgTmFtZSBtdXN0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMCwgXCJGdWxsIE5hbWUgY2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICB2ZXJpZmljYXRpb25Db2RlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBWZXJpZmljYXRpb24gQ29kZVwiKSxcclxuXHJcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKFwiTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJFbWFpbCBtdXN0IGJlIGxlc3MgdGhhbiAxMDAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgUGFzc3dvcmRcIilcclxuICAgICAgICAubWluKDgsIFwiUGFzc3dvcmQgbXVzdCBoYXZlIGF0IGxlYXN0IDggY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoMjAsIFwiUGFzc3dvcmQgY2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIENvbmZpcm0gUGFzc3dvcmRcIikud2hlbihcInBhc3N3b3JkXCIsIHtcclxuICAgICAgICBpczogdmFsID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2UpLFxyXG4gICAgICAgIHRoZW46IHl1cC5zdHJpbmcoKS5vbmVPZihcclxuICAgICAgICAgICAgW3l1cC5yZWYoXCJwYXNzd29yZFwiKV0sXHJcbiAgICAgICAgICAgIFwiUGFzc3dvcmRzIG11c3QgbWF0Y2hcIlxyXG4gICAgICAgIClcclxuICAgIH0pLFxyXG5cclxuICAgIHNob3BOYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBTaG9wIE5hbWVcIilcclxuICAgICAgICAubWluKDMsIFwiU2hvcCBOYW1lIG11c3QgaGF2ZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDIwLCBcIlNob3AgTmFtZSBjYW4ndCBiZSBsb25nZXIgdGhhbiAyMCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIGNhdGVnb3J5OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBDYXRlZ29yeVwiKSxcclxuXHJcbiAgICBzaG9wQWRkcmVzczogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgU2hvcCBBZGRyZXNzXCIpXHJcbiAgICAgICAgLm1pbig1LCBcIlNob3AgQWRkcmVzcyBtdXN0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgzMCwgXCJTaG9wIEFkZHJlc3MgY2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMzAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICBjb3VudGFyeTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgQ291bnRhcnlcIiksXHJcbiAgICBjaXR5OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBDaXR5XCIpLFxyXG4gICAgcm9sZTogeXVwLnN0cmluZygpXHJcbn0pO1xyXG5cclxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBoaWRlOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc2hvd1Bhc3N3b3JkID0gZXYgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlOiAhdGhpcy5zdGF0ZS5oaWRlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRGF0YShkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvdXNlcnMvcmVnaXN0ZXInO1xyXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCB7XHJcbiAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoaWRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBleWVCdG47XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGlkZSkge1xyXG4gICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllU2xhc2h9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17Y29uc29sZS5sb2d9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiAnJywgZnVsbE5hbWU6ICcnLCB2ZXJpZmljYXRpb25Db2RlOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIGNvbmZpcm1QYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcE5hbWU6ICcnLCBjYXRlZ29yeTogJycsIHNob3BBZGRyZXNzOiAnJywgY291bnRhcnk6ICcnLCBjaXR5OiAnJywgcm9sZTogJ3ZlbmRvcidcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gYnV0dG9uIHN1Ym1pdHMgZm9ybSBhbmQgZm9ybSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBzdWJtaXR0aW5nLCBzdWJtaXQgYnV0dG9uIGlzIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldHMgZm9ybSBhZnRlciBzdWJtaXNzaW9uIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0cyBzZXRTdWJtaXR0aW5nIHRvIGZhbHNlIGFmdGVyIGZvcm0gaXMgcmVzZXRcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcImZ1Y2sgeW91XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZERhdGEodmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhciB2YXJpYW50PVwiZGFya1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgPiBNdWhhbGlrIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MX0gbWQ9ezB9IHNtPXswfSB4cz17MH0gc3R5bGU9e3N0eWxlcy5zaWRlX2NvbHVtbn0+PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY2VudGVyX2NvbHVtbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcgfX0+UmVnaXN0ZXIgWW91ciBTaG9wPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TW9iaWxlIE51bWJlciA8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQubW9iaWxlICYmIGVycm9ycy5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwic25kQ29kZUJ0blwiIGRpc2FibGVkPXshdG91Y2hlZC5tb2JpbGUgJiYgZXJyb3JzLm1vYmlsZX0gc3R5bGU9e3N0eWxlcy5idXR0b25zfT5TZW5kIENvZGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uRnVsbE5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GdWxsIE5hbWU8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImZ1bGxOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5mdWxsTmFtZSAmJiBlcnJvcnMuZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IG1kPVwiNlwiIGNvbnRyb2xJZD1cInZhbGlkYXRpb25WZXJpZmljYXRpb25Db2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+VmVyaWZpY2F0aW9uIENvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZlcmlmaWNhdGlvbiBDb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZlcmlmaWNhdGlvbkNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnZlcmlmaWNhdGlvbkNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC52ZXJpZmljYXRpb25Db2RlICYmIGVycm9ycy52ZXJpZmljYXRpb25Db2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnZlcmlmaWNhdGlvbkNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uRW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5FbWFpbCBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtci54QGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD17Nn0gY29udHJvbElkPVwidmFsaWRhdGlvblBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UGFzc3dvcmQgPHNwYW4+Kjwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2hpZGUgPyAncGFzc3dvcmQnIDogJ3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiaW5wdXRHcm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cInBhc3N3b3JkRXllQnRuXCIgb25DbGljaz17dGhpcy5zaG93UGFzc3dvcmR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V5ZUJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbWQ9ezZ9IGNvbnRyb2xJZD1cInZhbGlkYXRpb25Db25maXJtUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Db25maXJtIFBhc3N3b3JkIDxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmUtZW50ZXIgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5jb25maXJtUGFzc3dvcmQgJiYgZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJjb25maXJtUGFzc3dvcmRFeWVCdG5cIiBvbkNsaWNrPXt0aGlzLnNob3dQYXNzd29yZH0gc3R5bGU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXllQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDR0aCBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXszfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U2hvcCBOYW1lPHNwYW4+Kjwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaG9wTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hvcE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zaG9wTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuc2hvcE5hbWUgJiYgZXJyb3JzLnNob3BOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnNob3BOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17M30gbWQ9ezN9IGNvbnRyb2xJZD1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Q2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvdW50YXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdW50YXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3VudGFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLmNvdW50YXJ5ICYmIGVycm9ycy5jb3VudGFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEtTQSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gUGFrIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb3VudGFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U2hvcCBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaG9wIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNob3BBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaG9wQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnNob3BBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5zaG9wQWRkcmVzcyAmJiBlcnJvcnMuc2hvcEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuc2hvcEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIDR0aCBSb3cgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDV0aCBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17M30gY29udHJvbElkPVwiY291bnRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Db3VudGFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAqIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb3VudGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY291bnRhcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5jb3VudGFyeSAmJiBlcnJvcnMuY291bnRhcnl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gS1NBIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBQYWsgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvdW50YXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXszfSBjb250cm9sSWQ9XCJjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Q2l0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAqIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5jaXR5ICYmIGVycm9ycy5jaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTWFsZSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gRmVtYWxlIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBPdGhlciA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY291bnRhcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcwLjFweCd9fT4gLiA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3N0eWxlcy50ZXJtX2NvbmRpdGlvbl9sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSBSZWdpc3RlcmluZyB5b3VyIHNob3AsIHlvdSBhZ3JlZSB0byBNdWhhbGlrJ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIuL2hlbHAvdGVybXMtYW5kLWNvbmRpdGlvbnNcIj48YT5UZXJtcyAmIENvbmRpdGlvbnM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLi9oZWxwL3ByaXZhY3ktc3RhdGVtZW50XCI+PGE+UHJpdmFjeSBTdGF0ZW1lbnQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gY29udHJvbElkPVwibG9naW5Hcm9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwibG9naW5cIj48YT5Mb2dpbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT5SZWdpc3RlciBTaG9wPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgNHRoIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezF9IG1kPXswfSBzbT17MH0geHM9ezB9IHN0eWxlPXtzdHlsZXMuc2lkZV9jb2x1bW59PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgYm90dG9tOiAnLTEwMCcsXHJcblxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgc3VibWl0X2J0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgY2VudGVyX2NvbHVtbjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMyUgMyUnLFxyXG4gICAgfSxcclxuICAgIHNpZGVfY29sdW1uOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMCAyJScsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\vendor-signup.js */"));
      });
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var styles = {
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].body_color),
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '-100'
  },
  buttons: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primry_color),
    border: 'none',
    fontSize: '10px'
  },
  submit_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primry_color)
  },
  center_column: {
    background: 'white',
    padding: '20px 30px',
    margin: '3% 3%'
  },
  side_column: {
    margin: '0 2%'
  },
  label: {
    width: '100%',
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].form_label_fontsize)
  },
  term_condition_label: {
    width: '100%',
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].form_label_fontsize),
    paddingTop: '-10px',
    marginTop: '-10px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primary_text_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=vendor-signup.js.6fc569285df54f5a6012.hot-update.js.map