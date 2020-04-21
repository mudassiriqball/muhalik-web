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
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      index = _React$useState6[0],
      setIndex = _React$useState6[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.title_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], (_jsx = {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"],
    style: styles.title_fontawesome,
    onClick: props.back
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "mr-auto"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 17
  }), _jsx)), __jsx("div", {
    style: styles.title,
    className: "jsx-1669431632" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: "jsx-1669431632",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: "jsx-1669431632",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, " Next ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.img_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx("div", {
      style: {
        margin: '0%'
      },
      className: "jsx-1669431632",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
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
        setImgPreview(true), setData(element), setIndex(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }));
  })), __jsx("div", {
    className: "jsx-1669431632",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: "jsx-1669431632" + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1669431632" + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1669431632" + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"],
    style: styles.close_img_preview_fontawesome,
    onClick: function onClick() {
      return setImgPreview(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "jsx-1669431632" + " " + "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: data.value,
    style: {
      maxWidth: '100%',
      maxHeight: '90vh',
      margin: 'auto'
    },
    className: "jsx-1669431632",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1669431632",
    __self: _this
  }, ".fontawesome.jsx-1669431632: hover.jsx-1669431632{background:red;color:blue;}.modal-overlay.jsx-1669431632{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-1669431632{position:relative;z-index:11;margin:2%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.jsx-1669431632{position:fixed;top:10px;right:10px;}.image-container.jsx-1669431632{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGlCLEFBR3dDLEFBSUEsQUFXRyxBQVFILEFBS0YsYUFDRCxFQTVCRCxBQUlMLEFBbUJHLEdBUkUsR0FWSixHQW1CSSxDQVFmLENBL0JBLEVBS2EsQ0FVQyxNQVNkLEVBbEJZLEVBVVEsTUFUTCxVQVVJLENBVEosV0FDQyxHQVNJLFNBUmtCLE9BU3RDLHdCQVJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBJbWFnZSwgTW9kYWwsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhQ3Jvc3MsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xTlhqRTE3eVlKajJQdDdiZTlfSjBEWGRzbk56TzRZZDRcclxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFGN3lsUEVoX1VtdmltQ2dQQU9NN3JmNmdKX3lHOFRLOVxyXG5cclxuXHJcbmNvbnN0IFZpZXdQcm9kdWN0ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW2ltZ1ByZXZpZXcsIHNldEltZ1ByZXZpZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy50aXRsZV9yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiZm9udGF3ZXNvbWVcIiBpY29uPXtmYUFycm93TGVmdH0gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gb25DbGljaz17cHJvcHMuYmFja30gY2xhc3NOYW1lPVwibXItYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4ge3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gUHJldiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50aXRsZX0+IE5leHQgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMuaW1nX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rICYmIHByb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgbWluV2lkdGg6ICcyMDBweCcsIG1heFdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQudmFsdWV9IGFsdD1cIkZsb3dlcnMgaW4gQ2hhbmlhXCIgb25DbGljaz17KCkgPT4geyBzZXRJbWdQcmV2aWV3KHRydWUpLCBzZXREYXRhKGVsZW1lbnQpLCBzZXRJbmRleChpbmRleCkgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICB7LyogSW1hZ2UgUHJldmlldyAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpbWdQcmV2aWV3ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJmb250YXdlc29tZVwiIGljb249e2ZhVGltZXN9IHN0eWxlPXtzdHlsZXMuY2xvc2VfaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEltZ1ByZXZpZXcoZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICc5MHZoJywgbWFyZ2luOiAnYXV0bycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvbnRhd2Vzb21lOiBob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2UtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMC43JSA0JScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgIH0sXHJcbiAgICBpbWdfcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnNSUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgekluZGV4OiAnOTk5J1xyXG4gICAgfSxcclxuICAgIGNsb3NlX2ltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzMwcHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaWV3UHJvZHVjdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */"));
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
  img_row: {
    margin: '5%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '999'
  },
  close_img_preview_fontawesome: {
    cursor: 'pointer',
    color: 'white',
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ViewProduct);

/***/ })

})
//# sourceMappingURL=vendor.js.d00e24d9dbcec33f70e7.hot-update.js.map