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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 32
    }
  }, "General Info")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "mr-auto",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]) + " " + "image-container",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3036783059", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3036783059",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color],
    __self: _this
  }, "label.__jsx-style-dynamic-selector{width:100%;text-align:center;border-bottom:1px solid gray;line-height:0.1em;margin:10px 0 20px;}label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color, ";padding:0 10px;}.modal-overlay.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.__jsx-style-dynamic-selector{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.__jsx-style-dynamic-selector{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.__jsx-style-dynamic-selector{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRmlCLEFBR29DLEFBT2lDLEFBSTdCLEFBV0csQUFRSCxBQVFGLFdBckNLLEVBc0NOLEVBM0JOLEFBbUJPLEdBUkYsR0FWSixJQThCWCxHQTdCYSxDQVpvQixBQXNCakIsUUFUSixHQVBVLENBaUJGLElBVEwsVUFQZixDQVFlLENBU0ksQ0F2QkcsU0FlTixLQVNJLElBdkJHLEdBZWUsU0FTdEMsQ0FJYSxNQTNCYixHQTRCVyxPQUNDLEtBZFosR0FlZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBJbWFnZSwgTW9kYWwsIEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVBsdXMsIGZhQXJyb3dMZWZ0LCBmYVRpbWVzLCBmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQXJyb3dBbHRDaXJjbGVMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFOWGpFMTd5WUpqMlB0N2JlOV9KMERYZHNuTnpPNFlkNFxyXG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MUY3eWxQRWhfVW12aW1DZ1BBT003cmY2Z0pfeUc4VEs5XHJcblxyXG5cclxuY29uc3QgVmlld1Byb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbaW1nUHJldmlldywgc2V0SW1nUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGxlbiA9IHByb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rLmxlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2SW1hZ2UoKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5leHRJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAobGVuIC0gMSkpIHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggKyAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy50aXRsZV9yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiZm9udGF3ZXNvbWVcIiBpY29uPXtmYUFycm93TGVmdH0gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gb25DbGljaz17cHJvcHMuYmFja30gY2xhc3NOYW1lPVwibXItYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4ge3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gUHJldiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50aXRsZX0+IE5leHQgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICB7Xy5pc0VxdWFsKHByb3BzLmRhdGEucHJvZHVjdF90eXBlLCBcInNpbXBsZS1wcm9kdWN0XCIpID9cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5pbWdfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rICYmIHByb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JywgbWF4V2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQudmFsdWV9IGFsdD1cIkZsb3dlcnMgaW4gQ2hhbmlhXCIgb25DbGljaz17KCkgPT4geyBzZXRJbWdQcmV2aWV3KHRydWUpLCBzZXRJbmRleChpbmRleCkgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMuaW1nX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmdlbmVyYWxfaW5mb19sYWJlbH0+R2VuZXJhbCBJbmZvPC9Gb3JtLkxhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzcGFuPkdlbmVyYWwgSW5mbzwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgey8qIEltYWdlIFByZXZpZXcgKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1nUHJldmlldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvbkxlZnR9IHN0eWxlPXtzdHlsZXMuaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByZXZJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV4dEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW1nUHJldmlldyhmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rW2luZGV4XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnOTB2aCcsIG1hcmdpbjogJ2F1dG8nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCBzcGFuIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjEsIDIxLCAyMSwgMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2UtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aXRsZV9yb3c6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuNyUgNCUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICB9LFxyXG4gICAgaW1nX3Jvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIHpJbmRleDogJzk5OSdcclxuICAgIH0sXHJcbiAgICBpbWdfcHJldmlld19mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgZ2VuZXJhbF9pbmZvX2xhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdQcm9kdWN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */")));
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
//# sourceMappingURL=vendor.js.f370ae7372e4d8d410d7.hot-update.js.map