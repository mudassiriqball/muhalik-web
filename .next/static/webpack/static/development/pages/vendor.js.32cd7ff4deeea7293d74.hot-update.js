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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 32
    }
  }, "General Info")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "image-container",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1498656416", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1498656416",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color],
    __self: _this
  }, "label.__jsx-style-dynamic-selector{width:100%;text-align:center;border-bottom:1px solid gray;line-height:0.1em;font-size:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, " margin:0%;}label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color, ";color:white;padding:5px 10px;}.modal-overlay.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.__jsx-style-dynamic-selector{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.__jsx-style-dynamic-selector{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.__jsx-style-dynamic-selector{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRmlCLEFBR29DLEFBUWlDLEFBSzdCLEFBV0csQUFRSCxBQVFGLFdBdkNLLEVBd0NOLEVBM0JOLEFBbUJPLEdBUkYsR0FWSixJQThCWCxHQTdCYSxDQWRvQixBQXdCakIsUUFUSixHQVJRLENBa0JBLElBVEwsT0FSVSxJQVNWLENBU0ksQ0F6QkcsU0FpQk4sRUFUaEIsR0FrQm9CLElBeEJOLEdBZ0J3QixTQVN0QyxDQUlhLFNBQ0YsT0FDQyxLQWRaLEdBZWUsV0FDZixDQWhDQSIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWxsLXByb2R1Y3RzLWNvbnRlbnRzXFx2aWV3LXByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UsIE1vZGFsLCBCdXR0b24sIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFQbHVzLCBmYUFycm93TGVmdCwgZmFUaW1lcywgZmFDaGV2cm9uTGVmdCwgZmFDaGV2cm9uUmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xTlhqRTE3eVlKajJQdDdiZTlfSjBEWGRzbk56TzRZZDRcclxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFGN3lsUEVoX1VtdmltQ2dQQU9NN3JmNmdKX3lHOFRLOVxyXG5cclxuXHJcbmNvbnN0IFZpZXdQcm9kdWN0ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW2ltZ1ByZXZpZXcsIHNldEltZ1ByZXZpZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBsZW4gPSBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5sZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldkltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggLSAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0SW1hZ2UoKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgKGxlbiAtIDEpKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMudGl0bGVfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZvbnRhd2Vzb21lXCIgaWNvbj17ZmFBcnJvd0xlZnR9IHN0eWxlPXtzdHlsZXMudGl0bGVfZm9udGF3ZXNvbWV9IG9uQ2xpY2s9e3Byb3BzLmJhY2t9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+IHtwcm9wcy5kYXRhLnByb2R1Y3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50aXRsZX0+IFByZXYgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBOZXh0IDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAge18uaXNFcXVhbChwcm9wcy5kYXRhLnByb2R1Y3RfdHlwZSwgXCJzaW1wbGUtcHJvZHVjdFwiKSA/XHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMuaW1nX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgbWluV2lkdGg6ICcyMDBweCcsIG1heFdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LnZhbHVlfSBhbHQ9XCJGbG93ZXJzIGluIENoYW5pYVwiIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0SW5kZXgoaW5kZXgpIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmltZ19yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5nZW5lcmFsX2luZm9fbGFiZWx9PkdlbmVyYWwgSW5mbzwvRm9ybS5MYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Bhbj5HZW5lcmFsIEluZm88L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsvKiBJbWFnZSBQcmV2aWV3ICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltZ1ByZXZpZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBpY29uPXtmYUNoZXZyb25MZWZ0fSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcmV2SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtci1hdXRvXCIgaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IHN0eWxlPXtzdHlsZXMuaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEltZ1ByZXZpZXcoZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGlua1tpbmRleF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzkwdmgnLCBtYXJnaW46ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC4xZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgc3BhbiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMC43JSA0JScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICBpbWdfcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgekluZGV4OiAnOTk5J1xyXG4gICAgfSxcclxuICAgIGltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxyXG4gICAgICAgIHdpZHRoOiAnMzBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBnZW5lcmFsX2luZm9fbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheSdcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlld1Byb2R1Y3Q7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */")));
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
//# sourceMappingURL=vendor.js.32cd7ff4deeea7293d74.hot-update.js.map