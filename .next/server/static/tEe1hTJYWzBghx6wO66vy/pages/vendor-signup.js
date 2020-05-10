module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3R2T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ShowToast = props => {
  return __jsx("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '40%',
      zIndex: '100'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    onClose: props.onCloseHandler,
    show: props.show,
    delay: 10000,
    autohide: true,
    style: {
      display: 'absolute',
      background: '#e6ffe6',
      width: '300px',
      border: `0.5px solid ${props.color}`
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.iconName,
    style: {
      color: `${props.color}`,
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    },
    className: "mr-auto"
  }), __jsx("span", {
    style: {
      marginLeft: '20px',
      fontSize: '18px',
      color: `${props.color}`,
      fontWeight: 'bold'
    },
    className: "mr-auto"
  }, props.header)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, {
    style: styles.toastBody
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    }
  }, __jsx("span", {
    className: "mr-auto"
  }, props.message)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowToast);
const styles = {
  toastBody: {
    fontSize: '16px',
    padding: '10px'
  }
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Chtn");


/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "Chtn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VbX6");
/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("3R2T");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("bWZ2");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // RegEx for phone number validation

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const schema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]({
  mobile: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Mobile Number").matches(phoneRegExp, "Phone number is not valid"),
  fullName: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Full Name").min(5, "Full Name must have at least 5 characters").max(25, "Can't be longer than 25 characters"),
  verificationCode: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Verification Code"),
  email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email("Must be a valid email address").max(100, "Can't be longer than 100 characters"),
  password: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Password").min(8, "Must have at least 8 characters").max(20, "Can't be longer than 20 characters"),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Confirm Password").when("password", {
    is: val => val && val.length > 0 ? true : false,
    then: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_7__["ref"]("password")], "Passwords must match")
  }),
  shopName: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Shop Name").min(3, "Must have at least 3 characters").max(50, "Can't be longer than 50 characters"),
  category: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Category"),
  shopAddress: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter Shop Address").min(5, "Must have at least 5 characters").max(200, "Can't be longer than 200 characters"),
  countary: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Select Countary"),
  city: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Enter City Name").min(3, "Must have at least 3 characters").max(30, "Can't be longer than 30 characters"),
  role: yup__WEBPACK_IMPORTED_MODULE_7__["string"]()
});

class VendorSignup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      hide: true,
      isLoading: false,
      showToast: false,
      serverErrorMsg: ''
    });

    _defineProperty(this, "showPassword", ev => {
      this.setState({
        hide: !this.state.hide
      });
    });
  }

  userRegister(data, currentComponent) {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].PATH + '/api/users/register';
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, {
      data
    }).then(function (response) {
      console.log('response:', response);

      if (response.status == '200') {
        currentComponent.setState({
          isLoading: false
        });
        currentComponent.setState({
          showToast: true
        });
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
        return true;
      }
    }).catch(function (error) {
      currentComponent.setState({
        isLoading: false
      });

      if (error.response.status == '500') {
        currentComponent.setState({
          serverErrorMsg: 'This User already exists.'
        });
      } else {
        alert('ERROR:' + error.response.data.message);
      }

      return false;
    });
  }

  render() {
    const {
      hide
    } = this.state;
    let eyeBtn;

    if (this.state.hide) {
      eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faEye"],
        style: styles.fontawesome
      });
    } else {
      eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faEyeSlash"],
        style: styles.fontawesome
      });
    }

    return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
      validationSchema: schema,
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
        countary: 'KSA',
        city: '',
        role: 'vendor'
      },
      onSubmit: (values, {
        setSubmitting,
        resetForm
      }) => {
        this.setState({
          isLoading: true
        });
        setSubmitting(true);
        setTimeout(() => {
          if (this.userRegister(values, this)) {
            resetForm();
          }

          setSubmitting(false);
        }, 500);
      }
    }, ({
      handleSubmit,
      handleChange,
      values,
      touched,
      isValid,
      errors,
      handleBlur,
      isSubmitting
    }) => __jsx("div", {
      style: styles.body,
      className: "jsx-1794121765"
    }, this.state.showToast ? __jsx(_components_toast__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onCloseHandler: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      message: 'Your Account Created Successfully',
      iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faThumbsUp"]
    }) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
      variant: "dark",
      style: {
        background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].primry_color}`
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Brand, {
      href: "/",
      className: "mr-auto"
    }, " Muhalik ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: "justify-content-md-center",
      noGutters: true
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto",
      style: styles.form_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: "justify-content-md-center",
      noGutters: true
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto",
      style: styles.register_as_shop_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      thumbnail: true,
      fluid: true,
      style: styles.image
    }), __jsx("h6", {
      className: "jsx-1794121765" + " " + "text-center"
    }, "Register Your Shop"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      noValidate: true,
      onSubmit: handleSubmit
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      md: "6",
      controlId: "validationMobile"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Mobile Number ", __jsx("span", {
      className: "jsx-1794121765"
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "+966590911891",
      "aria-describedby": "mobile",
      name: "mobile",
      value: values.mobile,
      onChange: handleChange,
      isInvalid: touched.mobile && errors.mobile
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "sndCodeBtn",
      disabled: !touched.mobile && errors.mobile,
      style: styles.buttons
    }, "Send Code")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.mobile))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      md: "6",
      controlId: "validationFullName"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Full Name", __jsx("span", {
      className: "jsx-1794121765"
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "Full Name",
      "aria-describedby": "fullName",
      name: "fullName",
      value: values.fullName,
      onChange: handleChange,
      isInvalid: touched.fullName && errors.fullName
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.fullName)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      md: "6",
      controlId: "validationVerificationCode"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Verification Code", __jsx("span", {
      className: "jsx-1794121765"
    }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "Verification Code",
      name: "verificationCode",
      value: values.verificationCode,
      onChange: handleChange,
      isInvalid: touched.verificationCode && errors.verificationCode
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.verificationCode)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      md: "6",
      controlId: "validationEmail"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Email Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "email",
      placeholder: "mr.x@gmail.com",
      name: "email",
      value: values.email,
      onChange: handleChange,
      isInvalid: touched.email && errors.email
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      md: 6,
      controlId: "validationPassword"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Password ", __jsx("span", {
      className: "jsx-1794121765"
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: hide ? 'password' : 'text',
      placeholder: "Enter Password",
      "aria-describedby": "inputGroup",
      name: "password",
      value: values.password,
      onChange: handleChange,
      isInvalid: touched.password && errors.password
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "passwordEyeBtn",
      onClick: this.showPassword,
      style: styles.buttons
    }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.password))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      md: 6,
      controlId: "validationConfirmPassword"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Confirm Password ", __jsx("span", {
      className: "jsx-1794121765"
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: hide ? 'password' : 'text',
      placeholder: "Re-enter Password",
      "aria-describedby": "confirmPassword",
      name: "confirmPassword",
      value: values.confirmPassword,
      onChange: handleChange,
      isInvalid: touched.confirmPassword && errors.confirmPassword
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "confirmPasswordEyeBtn",
      onClick: this.showPassword,
      style: styles.buttons
    }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.confirmPassword)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      lg: 3,
      md: 3
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Shop Name", __jsx("span", {
      className: "jsx-1794121765"
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "Shop Name",
      "aria-describedby": "shopName",
      name: "shopName",
      value: values.shopName,
      onChange: handleChange,
      isInvalid: touched.shopName && errors.shopName
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.shopName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      lg: 3,
      md: 3,
      controlId: "category"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Category", __jsx("span", {
      className: "jsx-1794121765"
    }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      as: "select",
      "aria-describedby": "category",
      name: "category",
      value: values.category,
      onChange: handleChange,
      isInvalid: touched.category && errors.category
    }, __jsx("option", {
      className: "jsx-1794121765"
    }, "Select"), __jsx("option", {
      className: "jsx-1794121765"
    }, " KSA "), __jsx("option", {
      className: "jsx-1794121765"
    }, " Pak ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.category)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      lg: 6,
      md: 6
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Shop Address", __jsx("span", {
      className: "jsx-1794121765"
    }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "Shop Address",
      "aria-describedby": "shopAddress",
      name: "shopAddress",
      value: values.shopAddress,
      onChange: handleChange,
      isInvalid: touched.shopAddress && errors.shopAddress
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.shopAddress)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      className: "text-center",
      style: styles.errorMsg
    }, this.state.serverErrorMsg)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "Countary", __jsx("span", {
      className: "jsx-1794121765"
    }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
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
    }, " Pak ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.countary)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      style: styles.label
    }, "City", __jsx("span", {
      className: "jsx-1794121765"
    }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "Enter City Name",
      name: "city",
      value: values.city,
      onChange: handleChange,
      isInvalid: touched.city && errors.city
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.city))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"],
      lg: 5,
      md: 5,
      sm: 12,
      xs: 12,
      style: styles.term_condition_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      className: "text-center",
      style: styles.term_condition_label
    }, "By Registering your shop, you agree to Muhalik's", __jsx("span", {
      className: "jsx-1794121765"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "./help/terms-and-conditions"
    }, __jsx("a", {
      className: "jsx-1794121765"
    }, "Terms & Conditions"))), "and", __jsx("span", {
      className: "jsx-1794121765"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "./help/privacy-statement"
    }, __jsx("a", {
      className: "jsx-1794121765"
    }, "Privacy Statement")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      className: "text-center",
      style: styles.errorMsg
    }, this.state.serverErrorMsg)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"]
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      className: "text-center",
      style: styles.label
    }, "Already have an account...", __jsx("span", {
      className: "jsx-1794121765"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "login"
    }, __jsx("a", {
      className: "jsx-1794121765"
    }, "Login")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      onSubmit: handleSubmit,
      disabled: this.state.isLoading,
      block: true,
      style: styles.submit_btn
    }, this.state.isLoading ? 'Registering' : 'Register', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
      animation: "grow",
      size: "sm"
    }) : null))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1794121765"
    }, ["span.jsx-1794121765{color:red;}", "p.jsx-1794121765{text-align:center;margin:0px;}"])));
  }

}

const styles = {
  body: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].body_color}`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    minHeight: '100vh' // bottom: '-100',

  },
  buttons: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].primry_color}`,
    border: 'none',
    fontSize: '10px'
  },
  errorMsg: {
    color: 'red',
    width: '100%',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize}`
  },
  submit_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].primry_color}`,
    marginTop: '5px'
  },
  form_col: {
    background: 'white',
    padding: '20px 30px',
    margin: '2% 0%'
  },
  register_as_shop_col: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2%'
  },
  image: {
    width: '100px',
    marginRight: '10px'
  },
  errorMsg: {
    color: 'red',
    width: '100%',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize}`
  },
  label: {
    width: '100%',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize}`
  },
  term_condition_col: {
    display: 'flex',
    alignItems: 'center',
    margin: '0%'
  },
  term_condition_label: {
    width: '100%',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].form_label_fontsize}`,
    margin: '0%'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].primary_text_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VendorSignup);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "VbX6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const path = 'https://muhalikweb.herokuapp.com'; // const path = 'http://localhost:5000';

const MuhalikConfig = {
  PATH: path
};
/* harmony default export */ __webpack_exports__["a"] = (MuhalikConfig);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bWZ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
let GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  admin_primry_color: '#373948',
  primary_text_color: 'white',
  // Body color
  body_color: '#F1F1F1',
  // body_color: '#DDE1E3',
  // body_color: '#F0F0F0',
  // Fontsize for all the labels of any form control (input, textbox etc):
  form_label_fontsize: '13px',
  card_header_fontsize: '14px',
  card_header_background: 'lightgray',
  react_select_styles: {
    control: base => _objectSpread({}, base, {
      fontSize: '13px'
    }),
    dropdownIndicator: base => _objectSpread({}, base, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    clearIndicator: base => _objectSpread({}, base, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    option: provided => _objectSpread({}, provided, {
      fontSize: '13px',
      display: 'absolute',
      zIndex: '1000'
    })
  }
};
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyleSheet);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });