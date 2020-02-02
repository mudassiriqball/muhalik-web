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
//                                         <InputGroup.Prepend>
//                                             <Button id="eyeBtn" style={styles.fontawesome_btn}>
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
        }, "Create Your Acount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
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
            lineNumber: 235
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
            lineNumber: 236
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, errors.mobile)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          block: true,
          style: styles.submit_btn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, "Continue")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          lg: 3,
          md: 3,
          sm: 1,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "1794121765",
          __self: this
        }, "span.jsx-1794121765{color:red;}p.jsx-1794121765{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzUXFDLEFBR3VELEFBR1EsVUFGdEIsUUFHZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IE5hdmJhciwgRm9ybSwgSW5wdXRHcm91cCwgQnV0dG9uLCBSb3csIENvbCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuLy8gaW1wb3J0IHsgZmFNb2JpbGUsIGZhTG9jaywgZmFFeWUsIGZhTW9iaWxlQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbi8vIGltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuLy8gY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgc3RhdGUgPSB7fVxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuLy8gICAgICAgICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgPiBNdWhhbGlrICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbi8vICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MX0geHM9ezB9PjwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL211aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBtYXhXaWR0aDogJzE1MHB4JyB9fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PldlbGNvbWUgVG8gTXVoYWxpazwvaDY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Nb2JpbGUgTnVtYmVyPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImV5ZUJ0blwiIHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfYnRufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1vYmlsZUFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiKzk2NjU5MDkxMTg5MVwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4gV2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLiA8L0Zvcm0uVGV4dD4gKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZXllQnRuXCIgc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZV9idG59PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9ja30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImV5ZUJ0blwiIHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfZXllX2J0bn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWV9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWVfZXllfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZsZXg6ICcxJyB9fT48L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBGb3Jnb3QgUGFzc3dvcmQgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIiBibG9jayB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT4gTG9naW4gPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cImxpZ2h0XCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn0+IFNpZ2hudXAgPC9CdXR0b24+ICovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudC4uPz9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPiBTaWdudXAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxfSB4cz17MH0+PC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuLy8gICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2BcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBgfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3Qgc3R5bGVzID0ge1xyXG4vLyAgICAgYm9keToge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4vLyAgICAgICAgIHRvcDogJzAnLFxyXG4vLyAgICAgICAgIGxlZnQ6ICcwJyxcclxuLy8gICAgICAgICByaWdodDogJzAnLFxyXG4vLyAgICAgICAgIGJvdHRvbTogJzAnLFxyXG5cclxuLy8gICAgIH0sXHJcbi8vICAgICBzdWJtaXRfYnRuOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuLy8gICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4vLyAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4vLyAgICAgICAgIG1hcmdpblRvcDogJzUlJyxcclxuLy8gICAgICAgICBtYXJnaW5Cb3R0b206ICcyJScsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGFpbmVyOiB7XHJcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4vLyAgICAgICAgIC8vIGJvcmRlcjogYDAuNXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBwYWRkaW5nOiAnMjBweCAzMHB4JyxcclxuLy8gICAgICAgICBtYXJnaW46ICc1JSA1JScsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgbGFiZWw6IHtcclxuLy8gICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4vLyAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZm9udGF3ZXNvbWVfYnRuOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBib3JkZXI6ICdub25lJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmb250YXdlc29tZToge1xyXG4vLyAgICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbi8vICAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmb250YXdlc29tZV9leWVfYnRuOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4vLyAgICAgICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkICNEREUxRTMnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGZvbnRhd2Vzb21lX2V5ZToge1xyXG4vLyAgICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbi8vICAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbi8vICAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuLy8gICAgIH0sXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOYXZiYXIsIENvbnRhaW5lciwgRm9ybSwgQ29sLCBSb3csIElucHV0R3JvdXAsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYUV5ZSwgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gUmVnRXggZm9yIHBob25lIG51bWJlciB2YWxpZGF0aW9uXHJcbmNvbnN0IHBob25lUmVnRXhwID0gL14oXFwrP1xcZHswLDR9KT9cXHM/LT9cXHM/KFxcKD9cXGR7M31cXCk/KVxccz8tP1xccz8oXFwoP1xcZHszfVxcKT8pXFxzPy0/XFxzPyhcXCg/XFxkezR9XFwpPyk/JC9cclxuXHJcbmNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgbW9iaWxlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBNb2JpbGUgTnVtYmVyXCIpXHJcbiAgICAgICAgLm1hdGNoZXMocGhvbmVSZWdFeHAsIFwiUGhvbmUgbnVtYmVyIGlzIG5vdCB2YWxpZFwiKSxcclxuXHJcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgUGFzc3dvcmRcIilcclxuICAgICAgICAubWluKDgsIFwiUGFzc3dvcmQgbXVzdCBoYXZlIGF0IGxlYXN0IDggY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoMjAsIFwiUGFzc3dvcmQgY2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAgY2hhcmFjdGVyc1wiKSxcclxufSk7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHNob3dQYXNzd29yZCA9IGV2ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlkZTogIXRoaXMuc3RhdGUuaGlkZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhpZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGV5ZUJ0bjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oaWRlKSB7XHJcbiAgICAgICAgICAgIGV5ZUJ0biA9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWV9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV5ZUJ0biA9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWVTbGFzaH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17Y29uc29sZS5sb2d9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiAnJywgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGJ1dHRvbiBzdWJtaXRzIGZvcm0gYW5kIGZvcm0gaXMgaW4gdGhlIHByb2Nlc3Mgb2Ygc3VibWl0dGluZywgc3VibWl0IGJ1dHRvbiBpcyBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXRzIGZvcm0gYWZ0ZXIgc3VibWlzc2lvbiBpcyBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldHMgc2V0U3VibWl0dGluZyB0byBmYWxzZSBhZnRlciBmb3JtIGlzIHJlc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhciB2YXJpYW50PVwiZGFya1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgPiBNdWhhbGlrIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxfSB4cz17MH0+PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvbXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzI1JScsIG1heFdpZHRoOiAnMTUwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmdCb3R0b206ICcxMHB4JyB9fT5DcmVhdGUgWW91ciBBY291bnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImZ1Y2tpbmcgdmFsdWVzIGZmZmZmZmZmZmZmZmZmZmZmOiBcIiwgdmFsdWVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gY29udHJvbElkPVwidmFsaWRhdGlvbk1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkVudGVyIFlvdXIgTW9iaWxlIE51bWJlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTY2NTkwOTExODkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQubW9iaWxlICYmIGVycm9ycy5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogNHRoIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT5Db250aW51ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIDR0aCBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezF9IHhzPXswfT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIGJvdHRvbTogJzAnLFxyXG5cclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDMwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzUlIDglJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\login.js */"));
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
//# sourceMappingURL=login.js.94ac7322eead04ebbc2b.hot-update.js.map