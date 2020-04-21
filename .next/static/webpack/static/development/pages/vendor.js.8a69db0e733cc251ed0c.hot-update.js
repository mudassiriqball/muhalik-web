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
    className: "jsx-499777653",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: "jsx-499777653" + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-499777653" + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-499777653" + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "modal-close",
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
    className: "jsx-499777653" + " " + "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-499777653",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: data.value,
    style: {
      width: "100%",
      dispaly: 'flex'
    },
    className: "jsx-499777653",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 37
    }
  }))))) : null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.title_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], (_jsx = {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"],
    style: styles.title_fontawesome,
    onClick: props.back
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "mr-auto"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 17
  }), _jsx)), __jsx("div", {
    style: styles.title,
    className: "jsx-499777653" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: "jsx-499777653",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: "jsx-499777653",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, " Next ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.img_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx("div", {
      style: {
        margin: '0%'
      },
      className: "jsx-499777653",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
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
        lineNumber: 49,
        columnNumber: 25
      }
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "499777653",
    __self: _this
  }, ".fontawesome.jsx-499777653: hover.jsx-499777653{background:red;color:blue;}.iimg.jsx-499777653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;position:absolute;top:0%;bottom:0%;left:0%;right:0%;margin:auto;}.button.jsx-499777653{font-size:50px;color:#eee;margin:5px;}.card-icon-open.jsx-499777653{display:block;position:relative;left:45%;top:35px;font-size:30px;width:30px;color:#fff;cursor:pointer;opacity:0;-webkit-transform:translate(0%,-400%);-ms-transform:translate(0%,-400%);transform:translate(0%,-400%);-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;}.card-icon-open.jsx-499777653:focus,.card-icon-open.jsx-499777653:hover{color:#111;}.close-modal.jsx-499777653{position:fixed;top:0;right:5px;}.fullscreen.jsx-499777653{position:relative;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#eee;z-index:999;}.fullscreen.jsx-499777653:hover,.fullscreen.jsx-499777653:focus,.fullscreen.jsx-499777653:blur{-webkit-text-decoration:none;text-decoration:none;color:red;}.gallery-container.jsx-499777653{padding-top:10px;}.gallery-card.jsx-499777653{position:relative;overflow:hidden;margin-bottom:10px;}.gallery-thumbnail.jsx-499777653{max-width:100%;height:auto;border-radius:4px;}.gallery-thumbnail.jsx-499777653:focus~.card-icon-open.jsx-499777653,.gallery-thumbnail.jsx-499777653:hover~.card-icon-open.jsx-499777653,.gallery-thumbnail.jsx-499777653~.card-icon-open.jsx-499777653:focus,.gallery-thumbnail.jsx-499777653~.card-icon-open.jsx-499777653:hover{opacity:1;}.image-container.jsx-499777653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.image-rotate.jsx-499777653{font-size:44px;}.modal-overlay.jsx-499777653{position:fixed;top:0;left:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-499777653{position:relative;top:15%;z-index:11;padding:0;overflow:hidden;max-width:100%;max-height:100%;}.modal-close.jsx-499777653{font-size:44px;z-index:99;color:#eee;-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;}.modal-close.jsx-499777653:focus,.modal-close.jsx-499777653:hover{color:red;}.rotate-container.jsx-499777653{font-size:44px;position:fixed;top:0;left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGlCLEFBR3dDLEFBSUgsQUFXRyxBQUtELEFBY0gsQUFHSSxBQUtHLEFBU0csQUFJSixBQUdDLEFBS0gsQUFRTCxBQUdHLEFBS0UsQUFHQSxBQVNHLEFBU0gsQUFPTCxBQUdLLFVBdENuQixBQW9DQSxDQXpFQSxHQWRzQixDQXBCUCxBQWVBLEFBc0JMLEFBMEJNLEFBZ0JoQixBQUdVLEFBa0JLLEFBVUksRUF2RG5CLENBYnlCLEFBZ0JMLEFBaUNSLEdBckRFLEFBNkNILEtBbEZYLEFBZWUsQUE0RUEsQUFTQSxDQXJDTyxDQW9CUCxFQTJCTCxDQXhFVixDQWxCYSxFQXNDVSxFQXFEVixDQS9GYixBQTRFYyxBQVN1QixFQWpCdEIsRUEvREYsSUEyQ2IsQUFnREEsRUFuQm9CLEdBdkVELEFBNEJMLEFBbUNFLEdBMUJoQixPQVJBLEVBbUNzQyxDQVFuQixFQXZFSixHQW1CSSxNQXZDSixBQXNFWSxFQWpEWixFQXVFSyxLQXBETCxHQXZDRCxDQXFCSyxNQThEbkIsQ0EzQ2dCLEFBb0RoQixHQTNGcUIsS0FxQlAsSUFtQmQsS0F5REEsQ0EzRW1DLEdBckJ6QixPQUNHLFVBQ0YsUUFDQyxTQUNHLFlBQ2YsWUErRHVCLHlDQTlDYyxvREErQ3JDLHNCQTlDQSIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWxsLXByb2R1Y3RzLWNvbnRlbnRzXFx2aWV3LXByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UsIE1vZGFsLCBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVBsdXMsIGZhQXJyb3dMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFBcnJvd0FsdENpcmNsZUxlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MU5YakUxN3lZSmoyUHQ3YmU5X0owRFhkc25Oek80WWQ0XHJcbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xRjd5bFBFaF9VbXZpbUNnUEFPTTdyZjZnSl95RzhUSzlcclxuXHJcblxyXG5jb25zdCBWaWV3UHJvZHVjdCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFtpbWdQcmV2aWV3LCBzZXRJbWdQcmV2aWV3XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpbWdQcmV2aWV3ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIG9uQ2xpY2s9eygpID0+IHNldEltZ1ByZXZpZXcoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BhbHk6ICdmbGV4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJmb250YXdlc29tZVwiIGljb249e2ZhQXJyb3dMZWZ0fSBzdHlsZT17c3R5bGVzLnRpdGxlX2ZvbnRhd2Vzb21lfSBvbkNsaWNrPXtwcm9wcy5iYWNrfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMudGl0bGV9PiB7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBQcmV2IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gTmV4dCA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5pbWdfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsgJiYgcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JywgbWF4V2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC52YWx1ZX0gYWx0PVwiRmxvd2VycyBpbiBDaGFuaWFcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldERhdGEoZWxlbWVudCksIHNldEluZGV4KGluZGV4KSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb250YXdlc29tZTogaG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLmlpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6MCU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MCU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDowJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaWNvbi1vcGVuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNDAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaWNvbi1vcGVuOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWljb24tb3Blbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2UtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZ1bGxzY3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbjpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbjpibHVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktdGh1bWJuYWlsOmZvY3VzIH4gLmNhcmQtaWNvbi1vcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgIC5nYWxsZXJ5LXRodW1ibmFpbDpob3ZlciB+IC5jYXJkLWljb24tb3BlbixcclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS10aHVtYm5haWwgfiAuY2FyZC1pY29uLW9wZW46Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktdGh1bWJuYWlsIH4gLmNhcmQtaWNvbi1vcGVuOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2Utcm90YXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtY2xvc2U6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWNsb3NlOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJvdGF0ZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjclIDQlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGltZ19yb3c6IHtcclxuICAgICAgICBtYXJnaW46ICc1JScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB6SW5kZXg6ICc5OTknXHJcbiAgICB9LFxyXG4gICAgaW1nOiB7XHJcblxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaWV3UHJvZHVjdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */"));
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
//# sourceMappingURL=vendor.js.8a69db0e733cc251ed0c.hot-update.js.map