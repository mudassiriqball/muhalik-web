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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1288121415",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: "jsx-1288121415" + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1288121415" + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1288121415" + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "jsx-1288121415" + " " + "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: data.value,
    style: {
      maxWidth: "50%",
      maxHeight: '50%',
      dispaly: 'flex'
    },
    className: "jsx-1288121415",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  })))) : null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.title_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], (_jsx = {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"],
    style: styles.title_fontawesome,
    onClick: props.back
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "mr-auto"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }), _jsx)), __jsx("div", {
    style: styles.title,
    className: "jsx-1288121415" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: "jsx-1288121415",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: "jsx-1288121415",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, " Next ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.img_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx("div", {
      style: {
        margin: '0%'
      },
      className: "jsx-1288121415",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
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
        lineNumber: 46,
        columnNumber: 25
      }
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1288121415",
    __self: _this
  }, ".fontawesome.jsx-1288121415: hover.jsx-1288121415{background:red;color:blue;}.modal-overlay.jsx-1288121415{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-1288121415{position:relative;z-index:11;margin:2%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.jsx-1288121415{position:fixed;top:10px;right:10px;}.image-container.jsx-1288121415{display:grid;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGlCLEFBR3dDLEFBSUEsQUFXRyxBQVFILEFBS0YsYUFDRCxFQTVCRCxBQUlMLEFBbUJHLEdBUkUsR0FWSixHQW1CSSxDQU1ZLENBN0IzQixFQUthLENBVUMsTUFTZCxFQWxCWSxFQVVRLE1BVEwsVUFVSSxDQVRKLFdBQ0MsR0FTSSxTQVJrQixPQVN0Qyx3QkFSQSxjQW1CdUIsNkZBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBJbWFnZSwgTW9kYWwsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhQ3Jvc3MsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xTlhqRTE3eVlKajJQdDdiZTlfSjBEWGRzbk56TzRZZDRcclxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFGN3lsUEVoX1VtdmltQ2dQQU9NN3JmNmdKX3lHOFRLOVxyXG5cclxuXHJcbmNvbnN0IFZpZXdQcm9kdWN0ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW2ltZ1ByZXZpZXcsIHNldEltZ1ByZXZpZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltZ1ByZXZpZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZvbnRhd2Vzb21lXCIgaWNvbj17ZmFUaW1lc30gc3R5bGU9e3N0eWxlcy5jbG9zZV9pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW1nUHJldmlldyhmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjUwJVwiLCBtYXhIZWlnaHQ6ICc1MCUnLCBkaXNwYWx5OiAnZmxleCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJmb250YXdlc29tZVwiIGljb249e2ZhQXJyb3dMZWZ0fSBzdHlsZT17c3R5bGVzLnRpdGxlX2ZvbnRhd2Vzb21lfSBvbkNsaWNrPXtwcm9wcy5iYWNrfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMudGl0bGV9PiB7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBQcmV2IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gTmV4dCA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5pbWdfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsgJiYgcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JywgbWF4V2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC52YWx1ZX0gYWx0PVwiRmxvd2VycyBpbiBDaGFuaWFcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldERhdGEoZWxlbWVudCksIHNldEluZGV4KGluZGV4KSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb250YXdlc29tZTogaG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjEsIDIxLCAyMSwgMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlLW1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aXRsZV9yb3c6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuNyUgNCUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgaW1nX3Jvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzUlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIHpJbmRleDogJzk5OSdcclxuICAgIH0sXHJcbiAgICBjbG9zZV9pbWdfcHJldmlld19mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMzBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICczMHB4JyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlld1Byb2R1Y3Q7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */"));
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
//# sourceMappingURL=vendor.js.9a135894d1f1f580fb97.hot-update.js.map