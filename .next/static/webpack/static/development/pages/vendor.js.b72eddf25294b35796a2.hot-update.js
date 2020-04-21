webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products-contents/view-product.js":
/*!*************************************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products-contents/view-product.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\all-products-contents\\view-product.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





 // https://drive.google.com/uc?export=view&id=1NXjE17yYJj2Pt7be9_J0DXdsnNzO4Yd4
// https://drive.google.com/uc?export=view&id=1F7ylPEh_UmvimCgPAOM7rf6gJ_yG8TK9

var ViewProduct = function ViewProduct(props) {
  var _jsx;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      imgPreview = _React$useState2[0],
      setImgPreview = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      index = _React$useState4[0],
      setIndex = _React$useState4[1];

  var len = props.data.product_image_link.length;

  function prevImage() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function nextImage() {
    if (index < len - 1) {
      setIndex(index + 1);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.title_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], (_jsx = {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"],
    style: styles.title_fontawesome,
    onClick: props.back
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "mr-auto"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 17
  }), _jsx)), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, " Next ")), _.isEqual(props.data.product_type, "simple-product") ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.img_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx("div", {
      style: {
        margin: '0%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      thumbnail: true,
      fluid: true,
      style: {
        minWidth: '200px',
        maxWidth: '200px'
      },
      src: element.value,
      alt: "Flowers in Chania",
      onClick: function onClick() {
        setImgPreview(true), setIndex(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.img_row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 32
    }
  }, "General Info")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronLeft"],
    style: styles.img_preview_fontawesome,
    onClick: function onClick() {
      return prevImage;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronRight"],
    style: styles.img_preview_fontawesome,
    onClick: nextImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"],
    style: styles.img_preview_fontawesome,
    onClick: function onClick() {
      return setImgPreview(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: props.data.product_image_link[index].value,
    style: {
      maxWidth: '100%',
      maxHeight: '90vh',
      margin: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3760348805", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3760348805",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color],
    __self: _this
  }, "label.__jsx-style-dynamic-selector{width:100%;text-align:center;border-bottom:1px solid gray;line-height:0.1em;margin:10px 50px;}label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color, ";color:white;padding:5px 10px;}.modal-overlay.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.__jsx-style-dynamic-selector{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.__jsx-style-dynamic-selector{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.__jsx-style-dynamic-selector{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRmlCLEFBR29DLEFBT2lDLEFBSzdCLEFBV0csQUFRSCxBQVFGLFdBdENLLEVBdUNOLEVBM0JOLEFBbUJPLEdBUkYsR0FWSixJQThCWCxHQTdCYSxDQWJvQixBQXVCakIsUUFUSixHQVJRLENBa0JBLElBVEwsT0FSVSxJQVNWLENBU0ksQ0F4QkcsU0FnQk4sRUFUaEIsR0FrQm9CLElBeEJDLEdBZ0JpQixTQVN0QyxDQUlhLElBNUJiLEtBNkJXLE9BQ0MsS0FkWixHQWVlLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFsbC1wcm9kdWN0cy1jb250ZW50c1xcdmlldy1wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEltYWdlLCBNb2RhbCwgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhVGltZXMsIGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFBcnJvd0FsdENpcmNsZUxlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MU5YakUxN3lZSmoyUHQ3YmU5X0owRFhkc25Oek80WWQ0XHJcbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xRjd5bFBFaF9VbXZpbUNnUEFPTTdyZjZnSl95RzhUSzlcclxuXHJcblxyXG5jb25zdCBWaWV3UHJvZHVjdCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFtpbWdQcmV2aWV3LCBzZXRJbWdQcmV2aWV3XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgbGVuID0gcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4IC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IChsZW4gLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJmb250YXdlc29tZVwiIGljb249e2ZhQXJyb3dMZWZ0fSBzdHlsZT17c3R5bGVzLnRpdGxlX2ZvbnRhd2Vzb21lfSBvbkNsaWNrPXtwcm9wcy5iYWNrfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMudGl0bGV9PiB7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBQcmV2IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gTmV4dCA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIHtfLmlzRXF1YWwocHJvcHMuZGF0YS5wcm9kdWN0X3R5cGUsIFwic2ltcGxlLXByb2R1Y3RcIikgP1xyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmltZ19yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsgJiYgcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMjAwcHgnLCBtYXhXaWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC52YWx1ZX0gYWx0PVwiRmxvd2VycyBpbiBDaGFuaWFcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldEluZGV4KGluZGV4KSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5pbWdfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMuZ2VuZXJhbF9pbmZvX2xhYmVsfT5HZW5lcmFsIEluZm88L0Zvcm0uTGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHNwYW4+R2VuZXJhbCBJbmZvPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7LyogSW1hZ2UgUHJldmlldyAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpbWdQcmV2aWV3ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtci1hdXRvXCIgaWNvbj17ZmFDaGV2cm9uTGVmdH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJldkltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbWdQcmV2aWV3KGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmtbaW5kZXhdLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICc5MHZoJywgbWFyZ2luOiAnYXV0bycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNTBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCBzcGFuIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tb2RhbC1vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAyMSwgMjEsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlLW1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjclIDQlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgfSxcclxuICAgIGltZ19yb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB6SW5kZXg6ICc5OTknXHJcbiAgICB9LFxyXG4gICAgaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXHJcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGdlbmVyYWxfaW5mb19sYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5J1xyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaWV3UHJvZHVjdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */")));
};

var styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '0.7% 4%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    cursor: 'pointer',
    marginRight: '3%',
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px'
  },
  title: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color)
  },
  label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize)
  },
  img_row: {
    margin: '2%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '999'
  },
  img_preview_fontawesome: {
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'lighter',
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  },
  general_info_label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize),
    width: '100%',
    borderBottom: '1px solid gray'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ViewProduct);

/***/ })

})
//# sourceMappingURL=vendor.js.b72eddf25294b35796a2.hot-update.js.map