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
    className: "jsx-2516669707",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: "jsx-2516669707" + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2516669707" + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-2516669707" + " " + "close-modal",
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
    className: "jsx-2516669707" + " " + "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-2516669707",
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
    className: "jsx-2516669707",
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
    className: "jsx-2516669707" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: "jsx-2516669707",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: "jsx-2516669707",
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
      className: "jsx-2516669707",
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
    id: "2516669707",
    __self: _this
  }, ".fontawesome.jsx-2516669707: hover.jsx-2516669707{background:red;color:blue;}.iimg.jsx-2516669707{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;position:absolute;top:0%;bottom:0%;left:0%;right:0%;margin:auto;}.button.jsx-2516669707{font-size:50px;color:#eee;margin:5px;}.card-icon-open.jsx-2516669707{display:block;position:relative;left:45%;top:35px;font-size:30px;width:30px;color:#fff;cursor:pointer;opacity:0;-webkit-transform:translate(0%,-400%);-ms-transform:translate(0%,-400%);transform:translate(0%,-400%);-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;}.card-icon-open.jsx-2516669707:focus,.card-icon-open.jsx-2516669707:hover{color:#111;}.close-modal.jsx-2516669707{position:fixed;top:0;right:5px;}.fullscreen.jsx-2516669707{position:relative;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#eee;z-index:999;}.fullscreen.jsx-2516669707:hover,.fullscreen.jsx-2516669707:focus,.fullscreen.jsx-2516669707:blur{-webkit-text-decoration:none;text-decoration:none;color:red;}.gallery-container.jsx-2516669707{padding-top:10px;}.gallery-card.jsx-2516669707{position:relative;overflow:hidden;margin-bottom:10px;}.gallery-thumbnail.jsx-2516669707{max-width:100%;height:auto;border-radius:4px;}.gallery-thumbnail.jsx-2516669707:focus~.card-icon-open.jsx-2516669707,.gallery-thumbnail.jsx-2516669707:hover~.card-icon-open.jsx-2516669707,.gallery-thumbnail.jsx-2516669707~.card-icon-open.jsx-2516669707:focus,.gallery-thumbnail.jsx-2516669707~.card-icon-open.jsx-2516669707:hover{opacity:1;}.image-container.jsx-2516669707{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.image-rotate.jsx-2516669707{font-size:44px;}.modal-overlay.jsx-2516669707{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-2516669707{position:relative;top:15%;z-index:11;padding:0;overflow:hidden;max-width:100%;max-height:100%;}.modal-close.jsx-2516669707{font-size:44px;z-index:99;color:#eee;-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;}.modal-close.jsx-2516669707:focus,.modal-close.jsx-2516669707:hover{color:red;}.rotate-container.jsx-2516669707{font-size:44px;position:fixed;top:0;left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGlCLEFBR3dDLEFBSUgsQUFXRyxBQUtELEFBY0gsQUFHSSxBQUtHLEFBU0csQUFJSixBQUdDLEFBS0gsQUFRTCxBQUdHLEFBS0UsQUFHQSxBQVdHLEFBU0gsQUFPTCxBQUdLLFVBeENuQixBQXNDQSxDQTNFQSxHQWRzQixDQXBCUCxBQWVBLEFBc0JMLEFBMEJNLEFBZ0JoQixBQUdVLEFBb0JLLEFBVUksRUF6RG5CLENBYnlCLEFBZ0JMLEFBbUNSLEdBdkRFLEFBNkNILEtBbEZYLEFBZWUsQUE4RUEsQUFTQSxDQXZDTyxDQW9CVCxFQTZCSCxDQTFFVixDQWxCYSxFQXNDVSxFQXVEVixDQWpHYixBQW9FWSxBQVVFLEFBU3VCLElBbEZ4QixJQTJDYixBQXFCZSxBQTZCZixFQW5Cb0IsR0F6RUQsQUE0QkwsR0FTZCxHQTJCZSxJQW5DZixHQTZDbUIsRUF6RUosRUFnRUMsQ0E3Q0csTUF2Q0osQUFzRVksRUFqRFosRUF5RUssQ0FUa0IsSUE3Q3ZCLEdBdkNELENBcUJLLE9BbUJILEFBc0RoQixHQTdGcUIsS0FxQlAsSUFtQmQsSUE0Q0EsQ0FlQSxDQTdFbUMsR0FyQnpCLE9BQ0csVUFDRixRQUNDLFNBQ0csWUFDZixZQStEdUIseUNBOUNjLG9EQStDckMsc0JBOUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBJbWFnZSwgTW9kYWwsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xTlhqRTE3eVlKajJQdDdiZTlfSjBEWGRzbk56TzRZZDRcclxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFGN3lsUEVoX1VtdmltQ2dQQU9NN3JmNmdKX3lHOFRLOVxyXG5cclxuXHJcbmNvbnN0IFZpZXdQcm9kdWN0ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW2ltZ1ByZXZpZXcsIHNldEltZ1ByZXZpZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltZ1ByZXZpZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlXCIgb25DbGljaz17KCkgPT4gc2V0SW1nUHJldmlldyhmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZGlzcGFseTogJ2ZsZXgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMudGl0bGVfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZvbnRhd2Vzb21lXCIgaWNvbj17ZmFBcnJvd0xlZnR9IHN0eWxlPXtzdHlsZXMudGl0bGVfZm9udGF3ZXNvbWV9IG9uQ2xpY2s9e3Byb3BzLmJhY2t9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+IHtwcm9wcy5kYXRhLnByb2R1Y3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50aXRsZX0+IFByZXYgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBOZXh0IDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmltZ19yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMjAwcHgnLCBtYXhXaWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LnZhbHVlfSBhbHQ9XCJGbG93ZXJzIGluIENoYW5pYVwiIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0RGF0YShlbGVtZW50KSwgc2V0SW5kZXgoaW5kZXgpIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvbnRhd2Vzb21lOiBob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAuaWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowJTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowJTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pY29uLW9wZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC00MDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pY29uLW9wZW46Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaWNvbi1vcGVuOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mdWxsc2NyZWVuOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIC5mdWxsc2NyZWVuOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgIC5mdWxsc2NyZWVuOmJsdXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS10aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS10aHVtYm5haWw6Zm9jdXMgfiAuY2FyZC1pY29uLW9wZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgLmdhbGxlcnktdGh1bWJuYWlsOmhvdmVyIH4gLmNhcmQtaWNvbi1vcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgIC5nYWxsZXJ5LXRodW1ibmFpbCB+IC5jYXJkLWljb24tb3Blbjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeS10aHVtYm5haWwgfiAuY2FyZC1pY29uLW9wZW46aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1yb3RhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbC1vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAyMSwgMjEsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbC1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbC1jbG9zZTpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtY2xvc2U6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucm90YXRlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aXRsZV9yb3c6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuNyUgNCUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgaW1nX3Jvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzUlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIHpJbmRleDogJzk5OSdcclxuICAgIH0sXHJcbiAgICBpbWc6IHtcclxuXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdQcm9kdWN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */"));
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
//# sourceMappingURL=vendor.js.3f26e9f48d9a3a8f843c.hot-update.js.map