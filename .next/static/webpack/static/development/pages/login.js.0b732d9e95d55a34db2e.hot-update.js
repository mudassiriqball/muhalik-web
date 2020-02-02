webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styleSheet */ "./styleSheet.js");








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;
// import React, { Component } from 'react';
// import { Navbar, Form, InputGroup, Button, Row, Col, Container, Image } from 'react-bootstrap';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMobile, faLock, faEye, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
// import GlobalStyleSheet from '../styleSheet';
// class Login extends Component {
//     state = {}
//     render() {
//         return (
//             <div style={styles.body}>
//                 <Navbar variant="dark" style={{ background: `${GlobalStyleSheet.primry_color}` }}>
//                     <Navbar.Brand href="/" className="mr-auto" > Muhalik    </Navbar.Brand>
//                 </Navbar>
//                 <Container>
//                     <Row>
//                         <Col lg={3} md={3} sm={1} xs={0}></Col>
//                         <Col style={styles.container}>
//                             <p>
//                                 <Image src="/static/muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '25%', maxWidth: '150px' }} />
//                             </p>
//                             <h6 className="text-center" style={{ width: '100%', paddingBottom: '10px' }}>Welcome To Muhalik</h6>
//                             <Form>
//                                 <Form.Group controlId="formBasicEmail">
//                                     <Form.Label style={styles.label}>Mobile Number</Form.Label>
//                                     <InputGroup>
// <InputGroup.Prepend>
//     <Button id="eyeBtn" style={styles.fontawesome_btn}>
//         <FontAwesomeIcon icon={faMobileAlt} style={styles.fontawesome} />
//     </Button>
//                                         </InputGroup.Prepend>
//                                         <Form.Control type="text" placeholder="+966590911891" />
//                                     </InputGroup>
//                                     {/* <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text> */}
//                                 </Form.Group>
//                                 <Form.Group controlId="formBasicPassword">
//                                     <Form.Label style={styles.label}> Password</Form.Label>
//                                     <InputGroup>
// <InputGroup.Prepend>
//     <Button id="eyeBtn" style={styles.fontawesome_btn}>
//         <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
//     </Button>
// </InputGroup.Prepend>
//                                         <Form.Control type="password" placeholder="Enter Password" />
//                                         <InputGroup.Prepend>
//                                             <Button id="eyeBtn" style={styles.fontawesome_eye_btn}>
//                                                 <FontAwesomeIcon icon={faEye} style={styles.fontawesome_eye} />
//                                             </Button>
//                                         </InputGroup.Prepend>
//                                     </InputGroup>
//                                 </Form.Group>
// <Form.Label className="text-right" style={styles.label}>
//     <label style={{ flex: '1' }}></label>
//     <Link href="#"> Forgot Password </Link>
// </Form.Label>
//                                 <Button variant="light" block type="submit" style={styles.submit_btn}> Login </Button>
//                                 {/* <Button variant="light" block type="submit" style={styles.submit_btn}> Sighnup </Button> */}
// <Form.Label className="text-center" style={styles.label}>
//     Don't have an account..??
//     <span>
//         <Link href="#"> Signup </Link>
//     </span>
// </Form.Label>
//                             </Form>
//                         </Col>
//                         <Col lg={3} md={3} sm={1} xs={0}></Col>
//                     </Row>
//                 </Container>
//                 <style jsx>
//                     {`
//                         p {
//                             text-align: center; 
//                             margin: 0px;
//                         }
//                     `}
//                 </style>
//             </div>
//         );
//     }
// }
// const styles = {
//     body: {
//         background: `${GlobalStyleSheet.body_color}`,
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         right: '0',
//         bottom: '0',
//     },
//     submit_btn: {
//         background: `${GlobalStyleSheet.primry_color}`,
//         color: `${GlobalStyleSheet.primary_text_color}`,
//         // background: 'white',
//         border: 'none',
//         marginTop: '5%',
//         marginBottom: '2%',
//     },
//     container: {
//         // background: `${GlobalStyleSheet.primry_color}`,
//         background: 'white',
//         // border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
//         padding: '20px 30px',
//         margin: '5% 5%',
//     },
//     label: {
//         width: '100%',
//         fontSize: '14px',
//     },
// fontawesome_btn: {
//     background: `${GlobalStyleSheet.primry_color}`,
//     border: 'none',
// },
//     fontawesome: {
//         color: `${GlobalStyleSheet.primary_text_color}`,
//         width: '15px',
//         height: '15px',
//         maxHeight: '15px',
//         maxWidth: '15px',
//     },
//     fontawesome_eye_btn: {
//         background: 'none',
//         border: '0.5px solid #DDE1E3',
//     },
//     fontawesome_eye: {
//         color: `${GlobalStyleSheet.primry_color}`,
//         width: '15px',
//         height: '15px',
//         maxHeight: '15px',
//         maxWidth: '15px',
//     },
// }
// export default Login;







 // RegEx for phone number validation

var phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
var schema = yup__WEBPACK_IMPORTED_MODULE_13__["object"]({
  mobile: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Mobile Number").matches(phoneRegExp, "Phone number is not valid"),
  password: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Password").min(8, "Password must have at least 8 characters").max(20, "Password can't be longer than 20 characters")
});

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hide = this.state.hide;
      var eyeBtn;

      if (this.state.hide) {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faEye"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        });
      } else {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faEyeSlash"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        });
      }

      return __jsx(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], {
        validationSchema: schema // onSubmit={console.log}
        ,
        initialValues: {
          mobile: '',
          password: ''
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
          lineNumber: 189
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
            lineNumber: 221
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
          variant: "dark",
          style: {
            background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primry_color)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"].Brand, {
          href: "/",
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, " Muhalik ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 3,
          md: 2,
          sm: 1,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          style: styles.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Image"], {
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
            lineNumber: 231
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
            lineNumber: 233
          },
          __self: this
        }, "Forgot Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, console.log("fucking values fffffffffffffffff: ", values), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          controlId: "validationMobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, "Enter Your Mobile Number", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          id: "eyeBtn",
          style: styles.fontawesome_btn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faMobileAlt"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "+966590911891",
          "aria-describedby": "mobile",
          name: "mobile",
          value: values.mobile,
          onChange: handleChange,
          isInvalid: touched.mobile && errors.mobile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, errors.mobile)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          controlId: "validationPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, "Password ", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          id: "eyeBtn",
          style: styles.fontawesome_btn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faLock"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: hide ? 'password' : 'text',
          placeholder: "Enter Password",
          "aria-describedby": "inputGroup",
          name: "password",
          value: values.password,
          onChange: handleChange,
          isInvalid: touched.password && errors.password,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          id: "passwordEyeBtn",
          onClick: _this2.showPassword,
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, errors.password)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          className: "text-right",
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "forgot-password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, " Forgot Password "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          className: "text-center",
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, "Don't have an account..??", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "signup",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }, " Signup ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          block: true,
          style: styles.submit_btn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, "Continue")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          className: "text-center",
          style: styles.term_condition_label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          },
          __self: this
        }, "By logingin, you agree to Muhalik's", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, " Terms & Conditions ")), "and", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, " Privacy Statement ")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 3,
          md: 2,
          sm: 1,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "1794121765",
          __self: this
        }, "span.jsx-1794121765{color:red;}p.jsx-1794121765{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1VXFDLEFBR3VELEFBR1EsVUFGdEIsUUFHZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IE5hdmJhciwgRm9ybSwgSW5wdXRHcm91cCwgQnV0dG9uLCBSb3csIENvbCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuLy8gaW1wb3J0IHsgZmFNb2JpbGUsIGZhTG9jaywgZmFFeWUsIGZhTW9iaWxlQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbi8vIGltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuLy8gY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgc3RhdGUgPSB7fVxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuLy8gICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgPiBNdWhhbGlrICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbi8vICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PldlbGNvbWUgVG8gTXVoYWxpazwvaDY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Nb2JpbGUgTnVtYmVyPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgIDxCdXR0b24gaWQ9XCJleWVCdG5cIiBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2J0bn0+XHJcbi8vICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1vYmlsZUFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuLy8gICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiBXZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuIDwvRm9ybS5UZXh0PiAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbi8vIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICA8QnV0dG9uIGlkPVwiZXllQnRuXCIgc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9idG59PlxyXG4vLyAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgPC9CdXR0b24+XHJcbi8vIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImV5ZUJ0blwiIHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfZXllX2J0bn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWV9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfZXllfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4vLyA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbi8vICAgICA8bGFiZWwgc3R5bGU9e3sgZmxleDogJzEnIH19PjwvbGFiZWw+XHJcbi8vICAgICA8TGluayBocmVmPVwiI1wiPiBGb3Jnb3QgUGFzc3dvcmQgPC9MaW5rPlxyXG4vLyA8L0Zvcm0uTGFiZWw+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImxpZ2h0XCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn0+IExvZ2luIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiIGJsb2NrIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PiBTaWdobnVwIDwvQnV0dG9uPiAqL31cclxuLy8gPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuLy8gICAgIERvbid0IGhhdmUgYW4gYWNjb3VudC4uPz9cclxuLy8gICAgIDxzcGFuPlxyXG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IFNpZ251cCA8L0xpbms+XHJcbi8vICAgICA8L3NwYW4+XHJcbi8vIDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbi8vICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYH1cclxuLy8gICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHN0eWxlcyA9IHtcclxuLy8gICAgIGJvZHk6IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuLy8gICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuLy8gICAgICAgICB0b3A6ICcwJyxcclxuLy8gICAgICAgICBsZWZ0OiAnMCcsXHJcbi8vICAgICAgICAgcmlnaHQ6ICcwJyxcclxuLy8gICAgICAgICBib3R0b206ICcwJyxcclxuXHJcbi8vICAgICB9LFxyXG4vLyAgICAgc3VibWl0X2J0bjoge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZDogJ3doaXRlJyxcclxuLy8gICAgICAgICBib3JkZXI6ICdub25lJyxcclxuLy8gICAgICAgICBtYXJnaW5Ub3A6ICc1JScsXHJcbi8vICAgICAgICAgbWFyZ2luQm90dG9tOiAnMiUnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbnRhaW5lcjoge1xyXG4vLyAgICAgICAgIC8vIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuLy8gICAgICAgICAvLyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXHJcbi8vICAgICAgICAgbWFyZ2luOiAnNSUgNSUnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGxhYmVsOiB7XHJcbi8vICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuLy8gICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4vLyAgICAgfSxcclxuLy8gZm9udGF3ZXNvbWVfYnRuOiB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgYm9yZGVyOiAnbm9uZScsXHJcbi8vIH0sXHJcbi8vICAgICBmb250YXdlc29tZToge1xyXG4vLyAgICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbi8vICAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmb250YXdlc29tZV9leWVfYnRuOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4vLyAgICAgICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkICNEREUxRTMnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGZvbnRhd2Vzb21lX2V5ZToge1xyXG4vLyAgICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbi8vICAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuLy8gICAgIH0sXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyLCBDb250YWluZXIsIEZvcm0sIENvbCwgUm93LCBJbnB1dEdyb3VwLCBCdXR0b24sIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUV5ZSwgZmFFeWVTbGFzaCwgZmFNb2JpbGVBbHQsIGZhTG9jayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi9zdHlsZVNoZWV0JztcclxuXHJcbi8vIFJlZ0V4IGZvciBwaG9uZSBudW1iZXIgdmFsaWRhdGlvblxyXG5jb25zdCBwaG9uZVJlZ0V4cCA9IC9eKFxcKz9cXGR7MCw0fSk/XFxzPy0/XFxzPyhcXCg/XFxkezN9XFwpPylcXHM/LT9cXHM/KFxcKD9cXGR7M31cXCk/KVxccz8tP1xccz8oXFwoP1xcZHs0fVxcKT8pPyQvXHJcblxyXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KHtcclxuICAgIG1vYmlsZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgTW9iaWxlIE51bWJlclwiKVxyXG4gICAgICAgIC5tYXRjaGVzKHBob25lUmVnRXhwLCBcIlBob25lIG51bWJlciBpcyBub3QgdmFsaWRcIiksXHJcblxyXG4gICAgcGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIFBhc3N3b3JkXCIpXHJcbiAgICAgICAgLm1pbig4LCBcIlBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDIwLCBcIlBhc3N3b3JkIGNhbid0IGJlIGxvbmdlciB0aGFuIDIwIGNoYXJhY3RlcnNcIiksXHJcbn0pO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGhpZGU6IHRydWVcclxuICAgIH07XHJcbiAgICBzaG93UGFzc3dvcmQgPSBldiA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGU6ICF0aGlzLnN0YXRlLmhpZGUgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoaWRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBleWVCdG47XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGlkZSkge1xyXG4gICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllU2xhc2h9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgLy8gb25TdWJtaXQ9e2NvbnNvbGUubG9nfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogJycsIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBidXR0b24gc3VibWl0cyBmb3JtIGFuZCBmb3JtIGlzIGluIHRoZSBwcm9jZXNzIG9mIHN1Ym1pdHRpbmcsIHN1Ym1pdCBidXR0b24gaXMgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0cyBmb3JtIGFmdGVyIHN1Ym1pc3Npb24gaXMgY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXRzIHNldFN1Ym1pdHRpbmcgdG8gZmFsc2UgYWZ0ZXIgZm9ybSBpcyByZXNldFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibXItYXV0b1wiID4gTXVoYWxpayA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXsyfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcgfX0+Rm9yZ290IFBhc3N3b3JkPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coXCJmdWNraW5nIHZhbHVlcyBmZmZmZmZmZmZmZmZmZmZmZjogXCIsIHZhbHVlcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGNvbnRyb2xJZD1cInZhbGlkYXRpb25Nb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5FbnRlciBZb3VyIE1vYmlsZSBOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZXllQnRuXCIgc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9idG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNb2JpbGVBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzk2NjU5MDkxMTg5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLm1vYmlsZSAmJiBlcnJvcnMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QYXNzd29yZCA8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJleWVCdG5cIiBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2J0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2t9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2hpZGUgPyAncGFzc3dvcmQnIDogJ3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiaW5wdXRHcm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cInBhc3N3b3JkRXllQnRuXCIgb25DbGljaz17dGhpcy5zaG93UGFzc3dvcmR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V5ZUJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImZvcmdvdC1wYXNzd29yZFwiPiBGb3Jnb3QgUGFzc3dvcmQgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudC4uPz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPiBTaWdudXAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn0+Q29udGludWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3N0eWxlcy50ZXJtX2NvbmRpdGlvbl9sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkgbG9naW5naW4sIHlvdSBhZ3JlZSB0byBNdWhhbGlrJ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj4gVGVybXMgJiBDb25kaXRpb25zIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IFByaXZhY3kgU3RhdGVtZW50IDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17Mn0gc209ezF9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIGJvdHRvbTogJzAnLFxyXG5cclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDMwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzMlIDMlJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWVfYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\login.js */"));
      });
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var styles = {
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].body_color),
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  buttons: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primry_color),
    border: 'none',
    fontSize: '10px'
  },
  submit_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primry_color)
  },
  container: {
    background: 'white',
    // border: `0.5px solid ${GlobalStyleSheet.primry_color}`,
    padding: '20px 30px',
    margin: '3% 3%'
  },
  label: {
    width: '100%',
    fontSize: '14px'
  },
  term_condition_label: {
    width: '100%',
    fontSize: '13px',
    padding: '10px'
  },
  fontawesome_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primry_color),
    border: 'none'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].primary_text_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.0b732d9e95d55a34db2e.hot-update.js.map