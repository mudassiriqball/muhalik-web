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
//                                         <InputGroup.Prepend>
//                                             <Button id="eyeBtn" style={styles.fontawesome_btn}>
//                                                 <FontAwesomeIcon icon={faLock} style={styles.fontawesome} />
//                                             </Button>
//                                         </InputGroup.Prepend>
//                                         <Form.Control type="password" placeholder="Enter Password" />
//                                         <InputGroup.Prepend>
//                                             <Button id="eyeBtn" style={styles.fontawesome_eye_btn}>
//                                                 <FontAwesomeIcon icon={faEye} style={styles.fontawesome_eye} />
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
      var hide = this.state.hide;
      var eyeBtn;

      if (this.state.hide) {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEye"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        });
      } else {
        eyeBtn = __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEyeSlash"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
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
          lineNumber: 185
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
            lineNumber: 217
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"], {
          variant: "dark",
          style: {
            background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].primry_color)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"].Brand, {
          href: "/",
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, " Muhalik ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 3,
          md: 3,
          sm: 1,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          style: styles.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
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
            lineNumber: 227
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
            lineNumber: 229
          },
          __self: this
        }, "Forgot Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, console.log("fucking values fffffffffffffffff: ", values), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          controlId: "validationMobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          style: styles.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, "Enter Your Mobile Number"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          id: "eyeBtn",
          style: styles.fontawesome_btn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faMobileAlt"],
          style: styles.fontawesome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "text",
          placeholder: "+966590911891",
          "aria-describedby": "mobile",
          name: "mobile",
          value: values.mobile,
          onChange: handleChange,
          isInvalid: touched.mobile && errors.mobile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, errors.mobile)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          block: true,
          style: styles.submit_btn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, "Continue")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          className: "text-center",
          style: styles.term_condition_label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, "By creating an account, you agree to Muhalik's", __jsx("span", {
          className: "jsx-1794121765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, " Terms & Conditions ")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 3,
          md: 3,
          sm: 1,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "1794121765",
          __self: this
        }, "span.jsx-1794121765{color:red;}p.jsx-1794121765{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvUnFDLEFBR3VELEFBR1EsVUFGdEIsUUFHZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IE5hdmJhciwgRm9ybSwgSW5wdXRHcm91cCwgQnV0dG9uLCBSb3csIENvbCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuLy8gaW1wb3J0IHsgZmFNb2JpbGUsIGZhTG9jaywgZmFFeWUsIGZhTW9iaWxlQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbi8vIGltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuLy8gY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgc3RhdGUgPSB7fVxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuLy8gICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgPiBNdWhhbGlrICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbi8vICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PldlbGNvbWUgVG8gTXVoYWxpazwvaDY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Nb2JpbGUgTnVtYmVyPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgIDxCdXR0b24gaWQ9XCJleWVCdG5cIiBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2J0bn0+XHJcbi8vICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1vYmlsZUFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuLy8gICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiBXZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuIDwvRm9ybS5UZXh0PiAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJleWVCdG5cIiBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2J0bn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZXllQnRuXCIgc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9leWVfYnRufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9leWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmxleDogJzEnIH19PjwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IEZvcmdvdCBQYXNzd29yZCA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiIGJsb2NrIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PiBMb2dpbiA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIiBibG9jayB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT4gU2lnaG51cCA8L0J1dHRvbj4gKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50Li4/P1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+IFNpZ251cCA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezF9IHhzPXswfT48L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuLy8gICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4vLyAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7YFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGB9XHJcbi8vICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBzdHlsZXMgPSB7XHJcbi8vICAgICBib2R5OiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbi8vICAgICAgICAgdG9wOiAnMCcsXHJcbi8vICAgICAgICAgbGVmdDogJzAnLFxyXG4vLyAgICAgICAgIHJpZ2h0OiAnMCcsXHJcbi8vICAgICAgICAgYm90dG9tOiAnMCcsXHJcblxyXG4vLyAgICAgfSxcclxuLy8gICAgIHN1Ym1pdF9idG46IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4vLyAgICAgICAgIC8vIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbi8vICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbi8vICAgICAgICAgbWFyZ2luVG9wOiAnNSUnLFxyXG4vLyAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIlJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250YWluZXI6IHtcclxuLy8gICAgICAgICAvLyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbi8vICAgICAgICAgLy8gYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHBhZGRpbmc6ICcyMHB4IDMwcHgnLFxyXG4vLyAgICAgICAgIG1hcmdpbjogJzUlIDUlJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBsYWJlbDoge1xyXG4vLyAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbi8vICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuLy8gICAgIH0sXHJcbi8vIGZvbnRhd2Vzb21lX2J0bjoge1xyXG4vLyAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgIGJvcmRlcjogJ25vbmUnLFxyXG4vLyB9LFxyXG4vLyAgICAgZm9udGF3ZXNvbWU6IHtcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuLy8gICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4vLyAgICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZm9udGF3ZXNvbWVfZXllX2J0bjoge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuLy8gICAgICAgICBib3JkZXI6ICcwLjVweCBzb2xpZCAjRERFMUUzJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmb250YXdlc29tZV9leWU6IHtcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4vLyAgICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4vLyAgICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbi8vICAgICB9LFxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmF2YmFyLCBDb250YWluZXIsIEZvcm0sIENvbCwgUm93LCBJbnB1dEdyb3VwLCBCdXR0b24sIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFFeWUsIGZhRXllU2xhc2gsIGZhTW9iaWxlQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBSZWdFeCBmb3IgcGhvbmUgbnVtYmVyIHZhbGlkYXRpb25cclxuY29uc3QgcGhvbmVSZWdFeHAgPSAvXihcXCs/XFxkezAsNH0pP1xccz8tP1xccz8oXFwoP1xcZHszfVxcKT8pXFxzPy0/XFxzPyhcXCg/XFxkezN9XFwpPylcXHM/LT9cXHM/KFxcKD9cXGR7NH1cXCk/KT8kL1xyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBtb2JpbGU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIE1vYmlsZSBOdW1iZXJcIilcclxuICAgICAgICAubWF0Y2hlcyhwaG9uZVJlZ0V4cCwgXCJQaG9uZSBudW1iZXIgaXMgbm90IHZhbGlkXCIpLFxyXG5cclxuICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBQYXNzd29yZFwiKVxyXG4gICAgICAgIC5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMCwgXCJQYXNzd29yZCBjYW4ndCBiZSBsb25nZXIgdGhhbiAyMCBjaGFyYWN0ZXJzXCIpLFxyXG59KTtcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBoaWRlOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc2hvd1Bhc3N3b3JkID0gZXYgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlOiAhdGhpcy5zdGF0ZS5oaWRlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaGlkZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZXllQnRuO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmhpZGUpIHtcclxuICAgICAgICAgICAgZXllQnRuID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXllQnRuID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZVNsYXNofSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgIC8vIG9uU3VibWl0PXtjb25zb2xlLmxvZ31cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6ICcnLCBwYXNzd29yZDogJydcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gYnV0dG9uIHN1Ym1pdHMgZm9ybSBhbmQgZm9ybSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBzdWJtaXR0aW5nLCBzdWJtaXQgYnV0dG9uIGlzIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldHMgZm9ybSBhZnRlciBzdWJtaXNzaW9uIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0cyBzZXRTdWJtaXR0aW5nIHRvIGZhbHNlIGFmdGVyIGZvcm0gaXMgcmVzZXRcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIHZhcmlhbnQ9XCJkYXJrXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiA+IE11aGFsaWsgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezF9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9tdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgbWF4V2lkdGg6ICcxNTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PkZvcmdvdCBQYXNzd29yZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiZnVja2luZyB2YWx1ZXMgZmZmZmZmZmZmZmZmZmZmZmY6IFwiLCB2YWx1ZXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RW50ZXIgWW91ciBNb2JpbGUgTnVtYmVyPC9Gb3JtLkxhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJleWVCdG5cIiBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lX2J0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1vYmlsZUFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQubW9iaWxlICYmIGVycm9ycy5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogNHRoIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT5Db250aW51ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIDR0aCBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3N0eWxlcy50ZXJtX2NvbmRpdGlvbl9sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkgY3JlYXRpbmcgYW4gYWNjb3VudCwgeW91IGFncmVlIHRvIE11aGFsaWsnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBUZXJtcyAmIENvbmRpdGlvbnMgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgYm90dG9tOiAnMCcsXHJcblxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgc3VibWl0X2J0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAvLyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnNSUgOCUnLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgfSxcclxuICAgIHRlcm1fY29uZGl0aW9uX2xhYmVsOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZV9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\login.js */"));
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
    margin: '5% 8%'
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
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].primry_color),
    border: 'none'
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
//# sourceMappingURL=login.js.82cb239e88f6878d79b8.hot-update.js.map