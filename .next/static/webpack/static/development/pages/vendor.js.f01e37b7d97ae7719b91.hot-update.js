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
    className: "jsx-3513739210",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: "jsx-3513739210" + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-3513739210" + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3513739210" + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return setImgPreview(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, "Close")), __jsx("div", {
    className: "jsx-3513739210" + " " + "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: data.value,
    style: {
      width: "100%",
      dispaly: 'flex'
    },
    className: "jsx-3513739210",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  })))) : null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.title_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], (_jsx = {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"],
    style: styles.title_fontawesome,
    onClick: props.back
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "mr-auto"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 17
  }), _jsx)), __jsx("div", {
    style: styles.title,
    className: "jsx-3513739210" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: "jsx-3513739210",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: "jsx-3513739210",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, " Next ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.img_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx("div", {
      style: {
        margin: '0%'
      },
      className: "jsx-3513739210",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 47,
        columnNumber: 25
      }
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3513739210",
    __self: _this
  }, ".fontawesome.jsx-3513739210: hover.jsx-3513739210{background:red;color:blue;}.modal-overlay.jsx-3513739210{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-3513739210{position:relative;z-index:11;margin:2%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.jsx-3513739210{position:fixed;top:10px;right:10px;}.image-container.jsx-3513739210{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.button.jsx-3513739210{font-size:50px;color:#eee;margin:5px;}.card-icon-open.jsx-3513739210{display:block;position:relative;left:45%;top:35px;font-size:30px;width:30px;color:#fff;cursor:pointer;opacity:0;-webkit-transform:translate(0%,-400%);-ms-transform:translate(0%,-400%);transform:translate(0%,-400%);-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;}.card-icon-open.jsx-3513739210:focus,.card-icon-open.jsx-3513739210:hover{color:#111;}.fullscreen.jsx-3513739210{position:relative;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#eee;z-index:999;}.fullscreen.jsx-3513739210:hover,.fullscreen.jsx-3513739210:focus,.fullscreen.jsx-3513739210:blur{-webkit-text-decoration:none;text-decoration:none;color:red;}.gallery-container.jsx-3513739210{padding-top:10px;}.gallery-card.jsx-3513739210{position:relative;overflow:hidden;margin-bottom:10px;}.gallery-thumbnail.jsx-3513739210{max-width:100%;height:auto;border-radius:4px;}.gallery-thumbnail.jsx-3513739210:focus~.card-icon-open.jsx-3513739210,.gallery-thumbnail.jsx-3513739210:hover~.card-icon-open.jsx-3513739210,.gallery-thumbnail.jsx-3513739210~.card-icon-open.jsx-3513739210:focus,.gallery-thumbnail.jsx-3513739210~.card-icon-open.jsx-3513739210:hover{opacity:1;}.image-rotate.jsx-3513739210{font-size:44px;}.rotate-container.jsx-3513739210{font-size:44px;position:fixed;top:0;left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGlCLEFBR3dDLEFBSUEsQUFXRyxBQVFILEFBS0YsQUFVRSxBQUtELEFBY0gsQUFJTyxBQVNHLEFBSUosQUFHQyxBQUtILEFBUUwsQUFJSyxBQUlBLFVBUG5CLENBakNBLEdBZHNCLENBM0NQLEFBSUwsQUFtQkcsQUFlRSxBQTRDQyxBQVloQixBQUltQixFQXhCbkIsQ0EzRGUsQUE4Q1UsQUFnQkwsR0F4RVQsR0FtQkksRUF2QmYsQUFzQ2UsQ0E0Q08sQ0E3RVQsQ0FVQyxDQW1GSixFQXZERyxFQWtDVSxDQXJEdkIsQ0EyRWEsQ0E3RkQsQUFpQ1osRUF2Qm9CLEVBNEJQLElBckNFLEFBNEVmLEFBaUJBLEtBdkRtQixBQXdCTCxHQVNkLEVBN0RtQixDQVRKLElBOERmLEtBeEJlLEVBckNDLENBb0RHLEVBM0NDLElBU08sRUFvQlosR0FyQ3VCLElBb0R2QixHQTNDZixDQTZCbUIsT0FlSCxRQWRGLElBZWQsSUFyREEsRUF1Q21DLDZEQXRCWix5Q0F1QmMsb0RBdEJyQyxzQkF1QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFsbC1wcm9kdWN0cy1jb250ZW50c1xcdmlldy1wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEltYWdlLCBNb2RhbCwgQnV0dG9uLCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFQbHVzLCBmYUFycm93TGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQXJyb3dBbHRDaXJjbGVMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFOWGpFMTd5WUpqMlB0N2JlOV9KMERYZHNuTnpPNFlkNFxyXG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MUY3eWxQRWhfVW12aW1DZ1BBT003cmY2Z0pfeUc4VEs5XHJcblxyXG5cclxuY29uc3QgVmlld1Byb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbaW1nUHJldmlldywgc2V0SW1nUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1nUHJldmlldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SW1nUHJldmlldyhmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BhbHk6ICdmbGV4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMudGl0bGVfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZvbnRhd2Vzb21lXCIgaWNvbj17ZmFBcnJvd0xlZnR9IHN0eWxlPXtzdHlsZXMudGl0bGVfZm9udGF3ZXNvbWV9IG9uQ2xpY2s9e3Byb3BzLmJhY2t9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+IHtwcm9wcy5kYXRhLnByb2R1Y3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50aXRsZX0+IFByZXYgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBOZXh0IDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmltZ19yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMjAwcHgnLCBtYXhXaWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LnZhbHVlfSBhbHQ9XCJGbG93ZXJzIGluIENoYW5pYVwiIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0RGF0YShlbGVtZW50KSwgc2V0SW5kZXgoaW5kZXgpIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvbnRhd2Vzb21lOiBob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2UtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWljb24tb3BlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTQwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWljb24tb3Blbjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pY29uLW9wZW46aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzExMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZ1bGxzY3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbjpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbjpibHVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktdGh1bWJuYWlsOmZvY3VzIH4gLmNhcmQtaWNvbi1vcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgIC5nYWxsZXJ5LXRodW1ibmFpbDpob3ZlciB+IC5jYXJkLWljb24tb3BlbixcclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS10aHVtYm5haWwgfiAuY2FyZC1pY29uLW9wZW46Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktdGh1bWJuYWlsIH4gLmNhcmQtaWNvbi1vcGVuOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXJvdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJvdGF0ZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjclIDQlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGltZ19yb3c6IHtcclxuICAgICAgICBtYXJnaW46ICc1JScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB6SW5kZXg6ICc5OTknXHJcbiAgICB9LFxyXG4gICAgaW1nOiB7XHJcblxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaWV3UHJvZHVjdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */"));
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
  img: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ViewProduct);

/***/ })

})
//# sourceMappingURL=vendor.js.f01e37b7d97ae7719b91.hot-update.js.map