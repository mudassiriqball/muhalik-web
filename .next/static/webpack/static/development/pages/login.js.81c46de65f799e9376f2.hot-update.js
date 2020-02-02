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








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;
// import React, { Component } from 'react';
// import { Navbar, Form, InputGroup, Button, Row, Col, Container, Image } from 'react-bootstrap';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEyeSlash, faLock, faEye, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
// import GlobalStyleSheet from '../styleSheet';
// // RegEx for phone number validation
// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
// const schema = yup.object({
//     mobile: yup.string().required("Enter Mobile Number")
//         .matches(phoneRegExp, "Phone number is not valid"),
//     password: yup.string().required("Enter Password")
//         .min(8, "Password must have at least 8 characters")
//         .max(20, "Password can't be longer than 20 characters"),
// });
// class Login extends Component {
//     state = {
//         hide: true
//     };
//     showPassword = ev => {
//         this.setState({ hide: !this.state.hide })
//     }
//     render() {
//         const { hide } = this.state;
//         let eyeBtn;
//         if (this.state.hide) {
//             eyeBtn = <FontAwesomeIcon icon={faEye} style={styles.fontawesome_eye} />;
//         } else {
//             eyeBtn = <FontAwesomeIcon icon={faEyeSlash} style={styles.fontawesome_eye} />;
//         }
//         return (
//             <Formik
//                 validationSchema={schema}
//                 // onSubmit={console.log}
//                 initialValues={{
//                     mobile: '', fullName: '', verificationCode: '', email: '', password: '', confirmPassword: '',
//                     countary: '', gender: ''
//                 }}></Formik>
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
//                                         <InputGroup.Prepend>
//                                             <Button id="mobileIcon" style={styles.fontawesome_btn}>
//                                                 <FontAwesomeIcon icon={faMobileAlt} style={styles.fontawesome} />
//                                             </Button>
//                                         </InputGroup.Prepend>
//                                         <Form.Control type="text" placeholder="+966590911891" />
//                                     </InputGroup>
//                                     {/* <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text> */}
//                                 </Form.Group>
//                                 <Form.Group controlId="formBasicPassword">
//                                     <Form.Label style={styles.label}> Password</Form.Label>
//                                     <InputGroup>
//                                         <InputGroup.Prepend>
//                                             <Button id="passwordBtn" style={styles.fontawesome_btn}>
//                                                 <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
//                                             </Button>
//                                         </InputGroup.Prepend>
//                                         <Form.Control type={hide ? 'password' : 'text'} placeholder="Enter Password" />
//                                         <InputGroup.Prepend>
//                                             <Button id="eyeBtn" onClick={this.showPassword} style={styles.fontawesome_eye_btn}>
//                                                 {eyeBtn}
//                                             </Button>
//                                         </InputGroup.Prepend>
//                                     </InputGroup>
//                                 </Form.Group>
//                                 <Form.Label className="text-right" style={styles.label}>
//                                     <label style={{ flex: '1' }}></label>
//                                     <Link href="#"> Forgot Password </Link>
//                                 </Form.Label>
//                                 <Button variant="light" block type="submit" style={styles.submit_btn}> Login </Button>
//                                 {/* <Button variant="light" block type="submit" style={styles.submit_btn}> Sighnup </Button> */}
//                                 <Form.Label className="text-center" style={styles.label}>
//                                     Don't have an account..??
//                                     <span>
//                                         <Link href="#"> Signup </Link>
//                                     </span>
//                                 </Form.Label>
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
//     fontawesome_btn: {
//         background: `${GlobalStyleSheet.primry_color}`,
//         border: 'none',
//     },
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
var schema = yup__WEBPACK_IMPORTED_MODULE_12__["object"]({
  mobile: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Enter Mobile Number").matches(phoneRegExp, "Phone number is not valid"),
  password: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("Enter Password").min(8, "Password must have at least 8 characters").max(20, "Password can't be longer than 20 characters")
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
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEye"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        });
      } else {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEyeSlash"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        });
      }

      return __jsx(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
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
          lineNumber: 220
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
            lineNumber: 252
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"], {
          variant: "dark",
          style: {
            background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].primry_color)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"].Brand, {
          href: "/",
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, " Muhalik ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 1,
          md: 1,
          sm: 0,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          style: styles.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
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
            lineNumber: 262
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
            lineNumber: 264
          },
          __self: this
        }, "Create Your Acount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, console.log("fucking values fffffffffffffffff: ", values), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: "6",
          controlId: "validationMobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }, "Mobile Number ", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
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
            lineNumber: 271
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, errors.mobile)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          md: 6,
          controlId: "validationPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, "Password ", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
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
            lineNumber: 293
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "passwordEyeBtn",
          onClick: _this2.showPassword,
          style: styles.buttons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303
          },
          __self: this
        }, eyeBtn)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, errors.password)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 1,
          md: 1,
          sm: 0,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "1794121765",
          __self: this
        }, "span.jsx-1794121765{color:red;}p.jsx-1794121765{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4VHFDLEFBR3VELEFBR1EsVUFGdEIsUUFHZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IE5hdmJhciwgRm9ybSwgSW5wdXRHcm91cCwgQnV0dG9uLCBSb3csIENvbCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuLy8gaW1wb3J0IHsgZmFFeWVTbGFzaCwgZmFMb2NrLCBmYUV5ZSwgZmFNb2JpbGVBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuLy8gaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vc3R5bGVTaGVldCc7XHJcblxyXG4vLyAvLyBSZWdFeCBmb3IgcGhvbmUgbnVtYmVyIHZhbGlkYXRpb25cclxuLy8gY29uc3QgcGhvbmVSZWdFeHAgPSAvXihcXCs/XFxkezAsNH0pP1xccz8tP1xccz8oXFwoP1xcZHszfVxcKT8pXFxzPy0/XFxzPyhcXCg/XFxkezN9XFwpPylcXHM/LT9cXHM/KFxcKD9cXGR7NH1cXCk/KT8kL1xyXG5cclxuLy8gY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCh7XHJcbi8vICAgICBtb2JpbGU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIE1vYmlsZSBOdW1iZXJcIilcclxuLy8gICAgICAgICAubWF0Y2hlcyhwaG9uZVJlZ0V4cCwgXCJQaG9uZSBudW1iZXIgaXMgbm90IHZhbGlkXCIpLFxyXG5cclxuLy8gICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBQYXNzd29yZFwiKVxyXG4vLyAgICAgICAgIC5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXCIpXHJcbi8vICAgICAgICAgLm1heCgyMCwgXCJQYXNzd29yZCBjYW4ndCBiZSBsb25nZXIgdGhhbiAyMCBjaGFyYWN0ZXJzXCIpLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIHN0YXRlID0ge1xyXG4vLyAgICAgICAgIGhpZGU6IHRydWVcclxuLy8gICAgIH07XHJcbi8vICAgICBzaG93UGFzc3dvcmQgPSBldiA9PiB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGU6ICF0aGlzLnN0YXRlLmhpZGUgfSlcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgY29uc3QgeyBoaWRlIH0gPSB0aGlzLnN0YXRlO1xyXG4vLyAgICAgICAgIGxldCBleWVCdG47XHJcbi8vICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGlkZSkge1xyXG4vLyAgICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2V5ZX0gLz47XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgZXllQnRuID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZVNsYXNofSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2V5ZX0gLz47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8Rm9ybWlrXHJcbi8vICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XHJcbi8vICAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17Y29uc29sZS5sb2d9XHJcbi8vICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiAnJywgZnVsbE5hbWU6ICcnLCB2ZXJpZmljYXRpb25Db2RlOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIGNvbmZpcm1QYXNzd29yZDogJycsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnRhcnk6ICcnLCBnZW5kZXI6ICcnXHJcbi8vICAgICAgICAgICAgICAgICB9fT48L0Zvcm1paz5cclxuXHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuLy8gICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgPiBNdWhhbGlrICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbi8vICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PldlbGNvbWUgVG8gTXVoYWxpazwvaDY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Nb2JpbGUgTnVtYmVyPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cIm1vYmlsZUljb25cIiBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2J0bn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNb2JpbGVBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIis5NjY1OTA5MTE4OTFcIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IFdlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS4gPC9Gb3JtLlRleHQ+ICovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljUGFzc3dvcmRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+IFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cInBhc3N3b3JkQnRuXCIgc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9idG59PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9ja30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPXtoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J30gcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJleWVCdG5cIiBvbkNsaWNrPXt0aGlzLnNob3dQYXNzd29yZH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9leWVfYnRufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V5ZUJ0bn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmbGV4OiAnMScgfX0+PC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj4gRm9yZ290IFBhc3N3b3JkIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImxpZ2h0XCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn0+IExvZ2luIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiIGJsb2NrIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PiBTaWdobnVwIDwvQnV0dG9uPiAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQuLj8/XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj4gU2lnbnVwIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbi8vICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYH1cclxuLy8gICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHN0eWxlcyA9IHtcclxuLy8gICAgIGJvZHk6IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuLy8gICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuLy8gICAgICAgICB0b3A6ICcwJyxcclxuLy8gICAgICAgICBsZWZ0OiAnMCcsXHJcbi8vICAgICAgICAgcmlnaHQ6ICcwJyxcclxuLy8gICAgICAgICBib3R0b206ICcwJyxcclxuXHJcbi8vICAgICB9LFxyXG4vLyAgICAgc3VibWl0X2J0bjoge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZDogJ3doaXRlJyxcclxuLy8gICAgICAgICBib3JkZXI6ICdub25lJyxcclxuLy8gICAgICAgICBtYXJnaW5Ub3A6ICc1JScsXHJcbi8vICAgICAgICAgbWFyZ2luQm90dG9tOiAnMiUnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbnRhaW5lcjoge1xyXG4vLyAgICAgICAgIC8vIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuLy8gICAgICAgICAvLyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXHJcbi8vICAgICAgICAgbWFyZ2luOiAnNSUgNSUnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGxhYmVsOiB7XHJcbi8vICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuLy8gICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGZvbnRhd2Vzb21lX2J0bjoge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZm9udGF3ZXNvbWU6IHtcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuLy8gICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4vLyAgICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZm9udGF3ZXNvbWVfZXllX2J0bjoge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuLy8gICAgICAgICBib3JkZXI6ICcwLjVweCBzb2xpZCAjRERFMUUzJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmb250YXdlc29tZV9leWU6IHtcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4vLyAgICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbi8vICAgICB9LFxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5hdmJhciwgQ29udGFpbmVyLCBGb3JtLCBDb2wsIFJvdywgSW5wdXRHcm91cCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBSZWdFeCBmb3IgcGhvbmUgbnVtYmVyIHZhbGlkYXRpb25cclxuY29uc3QgcGhvbmVSZWdFeHAgPSAvXihcXCs/XFxkezAsNH0pP1xccz8tP1xccz8oXFwoP1xcZHszfVxcKT8pXFxzPy0/XFxzPyhcXCg/XFxkezN9XFwpPylcXHM/LT9cXHM/KFxcKD9cXGR7NH1cXCk/KT8kL1xyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBtb2JpbGU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIE1vYmlsZSBOdW1iZXJcIilcclxuICAgICAgICAubWF0Y2hlcyhwaG9uZVJlZ0V4cCwgXCJQaG9uZSBudW1iZXIgaXMgbm90IHZhbGlkXCIpLFxyXG5cclxuICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBQYXNzd29yZFwiKVxyXG4gICAgICAgIC5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMCwgXCJQYXNzd29yZCBjYW4ndCBiZSBsb25nZXIgdGhhbiAyMCBjaGFyYWN0ZXJzXCIpLFxyXG59KTtcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBoaWRlOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc2hvd1Bhc3N3b3JkID0gZXYgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlOiAhdGhpcy5zdGF0ZS5oaWRlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaGlkZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZXllQnRuO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmhpZGUpIHtcclxuICAgICAgICAgICAgZXllQnRuID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXllQnRuID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZVNsYXNofSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgIC8vIG9uU3VibWl0PXtjb25zb2xlLmxvZ31cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6ICcnLCBwYXNzd29yZDogJydcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gYnV0dG9uIHN1Ym1pdHMgZm9ybSBhbmQgZm9ybSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBzdWJtaXR0aW5nLCBzdWJtaXQgYnV0dG9uIGlzIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldHMgZm9ybSBhZnRlciBzdWJtaXNzaW9uIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0cyBzZXRTdWJtaXR0aW5nIHRvIGZhbHNlIGFmdGVyIGZvcm0gaXMgcmVzZXRcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIHZhcmlhbnQ9XCJkYXJrXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiA+IE11aGFsaWsgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxfSBtZD17MX0gc209ezB9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9tdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgbWF4V2lkdGg6ICcxNTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PkNyZWF0ZSBZb3VyIEFjb3VudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiZnVja2luZyB2YWx1ZXMgZmZmZmZmZmZmZmZmZmZmZmY6IFwiLCB2YWx1ZXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBtZD1cIjZcIiBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TW9iaWxlIE51bWJlciA8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQubW9iaWxlICYmIGVycm9ycy5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IG1kPXs2fSBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QYXNzd29yZCA8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17aGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJpbnB1dEdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwicGFzc3dvcmRFeWVCdG5cIiBvbkNsaWNrPXt0aGlzLnNob3dQYXNzd29yZH0gc3R5bGU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXllQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxfSBtZD17MX0gc209ezB9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIGJvdHRvbTogJzAnLFxyXG5cclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDMwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzUlIDUlJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\login.js */"));
      });
    }
  }]);

  return Login;
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
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.81c46de65f799e9376f2.hot-update.js.map