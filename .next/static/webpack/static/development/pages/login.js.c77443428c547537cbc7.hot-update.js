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
        }, "Continue")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 3,
          md: 3,
          sm: 1,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "1794121765",
          __self: this
        }, "span.jsx-1794121765{color:red;}p.jsx-1794121765{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0UXFDLEFBR3VELEFBR1EsVUFGdEIsUUFHZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IE5hdmJhciwgRm9ybSwgSW5wdXRHcm91cCwgQnV0dG9uLCBSb3csIENvbCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuLy8gaW1wb3J0IHsgZmFNb2JpbGUsIGZhTG9jaywgZmFFeWUsIGZhTW9iaWxlQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbi8vIGltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuLy8gY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgc3RhdGUgPSB7fVxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuLy8gICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgPiBNdWhhbGlrICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbi8vICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PldlbGNvbWUgVG8gTXVoYWxpazwvaDY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Nb2JpbGUgTnVtYmVyPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPEJ1dHRvbiBpZD1cImV5ZUJ0blwiIHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1vYmlsZUFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiKzk2NjU5MDkxMTg5MVwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4gV2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLiA8L0Zvcm0uVGV4dD4gKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZXllQnRuXCIgc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9idG59PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9ja30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImV5ZUJ0blwiIHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfZXllX2J0bn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWV9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfZXllfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZsZXg6ICcxJyB9fT48L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBGb3Jnb3QgUGFzc3dvcmQgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIiBibG9jayB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT4gTG9naW4gPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cImxpZ2h0XCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn0+IFNpZ2hudXAgPC9CdXR0b24+ICovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudC4uPz9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBTaWdudXAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxfSB4cz17MH0+PC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuLy8gICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2BcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBgfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3Qgc3R5bGVzID0ge1xyXG4vLyAgICAgYm9keToge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4vLyAgICAgICAgIHRvcDogJzAnLFxyXG4vLyAgICAgICAgIGxlZnQ6ICcwJyxcclxuLy8gICAgICAgICByaWdodDogJzAnLFxyXG4vLyAgICAgICAgIGJvdHRvbTogJzAnLFxyXG5cclxuLy8gICAgIH0sXHJcbi8vICAgICBzdWJtaXRfYnRuOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuLy8gICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4vLyAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4vLyAgICAgICAgIG1hcmdpblRvcDogJzUlJyxcclxuLy8gICAgICAgICBtYXJnaW5Cb3R0b206ICcyJScsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGFpbmVyOiB7XHJcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4vLyAgICAgICAgIC8vIGJvcmRlcjogYDAuNXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBwYWRkaW5nOiAnMjBweCAzMHB4JyxcclxuLy8gICAgICAgICBtYXJnaW46ICc1JSA1JScsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgbGFiZWw6IHtcclxuLy8gICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4vLyAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbi8vICAgICB9LFxyXG4gICAgLy8gZm9udGF3ZXNvbWVfYnRuOiB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgIC8vICAgICBib3JkZXI6ICdub25lJyxcclxuICAgIC8vIH0sXHJcbi8vICAgICBmb250YXdlc29tZToge1xyXG4vLyAgICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbi8vICAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmb250YXdlc29tZV9leWVfYnRuOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4vLyAgICAgICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkICNEREUxRTMnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGZvbnRhd2Vzb21lX2V5ZToge1xyXG4vLyAgICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbi8vICAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuLy8gICAgIH0sXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOYXZiYXIsIENvbnRhaW5lciwgRm9ybSwgQ29sLCBSb3csIElucHV0R3JvdXAsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUV5ZSwgZmFFeWVTbGFzaCwgZmFNb2JpbGVBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIFJlZ0V4IGZvciBwaG9uZSBudW1iZXIgdmFsaWRhdGlvblxyXG5jb25zdCBwaG9uZVJlZ0V4cCA9IC9eKFxcKz9cXGR7MCw0fSk/XFxzPy0/XFxzPyhcXCg/XFxkezN9XFwpPylcXHM/LT9cXHM/KFxcKD9cXGR7M31cXCk/KVxccz8tP1xccz8oXFwoP1xcZHs0fVxcKT8pPyQvXHJcblxyXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KHtcclxuICAgIG1vYmlsZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgTW9iaWxlIE51bWJlclwiKVxyXG4gICAgICAgIC5tYXRjaGVzKHBob25lUmVnRXhwLCBcIlBob25lIG51bWJlciBpcyBub3QgdmFsaWRcIiksXHJcblxyXG4gICAgcGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIFBhc3N3b3JkXCIpXHJcbiAgICAgICAgLm1pbig4LCBcIlBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDIwLCBcIlBhc3N3b3JkIGNhbid0IGJlIGxvbmdlciB0aGFuIDIwIGNoYXJhY3RlcnNcIiksXHJcbn0pO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGhpZGU6IHRydWVcclxuICAgIH07XHJcbiAgICBzaG93UGFzc3dvcmQgPSBldiA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGU6ICF0aGlzLnN0YXRlLmhpZGUgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoaWRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBleWVCdG47XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGlkZSkge1xyXG4gICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleWVCdG4gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllU2xhc2h9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgLy8gb25TdWJtaXQ9e2NvbnNvbGUubG9nfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogJycsIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBidXR0b24gc3VibWl0cyBmb3JtIGFuZCBmb3JtIGlzIGluIHRoZSBwcm9jZXNzIG9mIHN1Ym1pdHRpbmcsIHN1Ym1pdCBidXR0b24gaXMgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0cyBmb3JtIGFmdGVyIHN1Ym1pc3Npb24gaXMgY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXRzIHNldFN1Ym1pdHRpbmcgdG8gZmFsc2UgYWZ0ZXIgZm9ybSBpcyByZXNldFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibXItYXV0b1wiID4gTXVoYWxpayA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcgfX0+Rm9yZ290IFBhc3N3b3JkPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coXCJmdWNraW5nIHZhbHVlcyBmZmZmZmZmZmZmZmZmZmZmZjogXCIsIHZhbHVlcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGNvbnRyb2xJZD1cInZhbGlkYXRpb25Nb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5FbnRlciBZb3VyIE1vYmlsZSBOdW1iZXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImV5ZUJ0blwiIHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNb2JpbGVBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis5NjY1OTA5MTE4OTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5tb2JpbGUgJiYgZXJyb3JzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA0dGggUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PkNvbnRpbnVlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgNHRoIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgYm90dG9tOiAnMCcsXHJcblxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgc3VibWl0X2J0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAvLyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnNSUgOCUnLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lX2J0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\login.js */"));
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
//# sourceMappingURL=login.js.c77443428c547537cbc7.hot-update.js.map