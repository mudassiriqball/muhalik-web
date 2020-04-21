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

  var length = props.data.product_image_link.length();

  function prevImage() {
    if (index != 0) {
      setIndex(index + 1);
    }
  }

  function nextImage() {
    console.log('index:', index);
    console.log('length:', length);

    if (index >= length) {
      setIndex(index);
    } else {
      setIndex(index + 1);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.title_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], (_jsx = {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"],
    style: styles.title_fontawesome,
    onClick: props.back
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "mr-auto"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 17
  }), _jsx)), __jsx("div", {
    style: styles.title,
    className: "jsx-1214552832" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: "jsx-1214552832",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: "jsx-1214552832",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, " Next ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: styles.img_row,
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx("div", {
      style: {
        margin: '0%'
      },
      className: "jsx-1214552832",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
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
        setImgPreview(true), setIndex(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }));
  })), __jsx("div", {
    className: "jsx-1214552832",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: "jsx-1214552832" + " " + "modal-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1214552832" + " " + "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1214552832" + " " + "close-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-1214552832" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-1214552832" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronLeft"],
    style: styles.close_img_preview_fontawesome,
    onClick: function onClick() {
      return prevImage;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronRight"],
    style: styles.close_img_preview_fontawesome,
    onClick: nextImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-1214552832" + " " + "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"],
    style: styles.close_img_preview_fontawesome,
    onClick: function onClick() {
      return setImgPreview(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "jsx-1214552832" + " " + "image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: props.data.product_image_link[index].value,
    style: {
      maxWidth: '100%',
      maxHeight: '90vh',
      margin: 'auto'
    },
    className: "jsx-1214552832",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1214552832",
    __self: _this
  }, ".fontawesome.jsx-1214552832: hover.jsx-1214552832{background:red;color:blue;}.modal-overlay.jsx-1214552832{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-1214552832{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.jsx-1214552832{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.jsx-1214552832{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWlCLEFBR3dDLEFBSUEsQUFXRyxBQVFILEFBUUYsYUFDRCxFQS9CRCxBQUlMLEFBbUJPLEdBUkYsR0FWSixJQThCWCxDQWxDQSxFQUthLENBVUcsUUFUSixJQVVRLElBVEwsV0FDQSxDQVNJLFVBUkgsS0FTSSxPQVJrQixTQVN0QyxDQUlhLFNBQ0YsT0FDQyxLQWRaLEdBZWUsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWxsLXByb2R1Y3RzLWNvbnRlbnRzXFx2aWV3LXByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UsIE1vZGFsLCBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVBsdXMsIGZhQXJyb3dMZWZ0LCBmYVRpbWVzLCBmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQXJyb3dBbHRDaXJjbGVMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFOWGpFMTd5WUpqMlB0N2JlOV9KMERYZHNuTnpPNFlkNFxyXG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MUY3eWxQRWhfVW12aW1DZ1BBT003cmY2Z0pfeUc4VEs5XHJcblxyXG5cclxuY29uc3QgVmlld1Byb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbaW1nUHJldmlldywgc2V0SW1nUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgbGVuZ3RoID0gcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubGVuZ3RoKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldkltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEltYWdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleDonLCBpbmRleClcclxuICAgICAgICBjb25zb2xlLmxvZygnbGVuZ3RoOicsIGxlbmd0aClcclxuICAgICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMudGl0bGVfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZvbnRhd2Vzb21lXCIgaWNvbj17ZmFBcnJvd0xlZnR9IHN0eWxlPXtzdHlsZXMudGl0bGVfZm9udGF3ZXNvbWV9IG9uQ2xpY2s9e3Byb3BzLmJhY2t9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+IHtwcm9wcy5kYXRhLnByb2R1Y3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50aXRsZX0+IFByZXYgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBOZXh0IDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmltZ19yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMjAwcHgnLCBtYXhXaWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LnZhbHVlfSBhbHQ9XCJGbG93ZXJzIGluIENoYW5pYVwiIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0SW5kZXgoaW5kZXgpIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgey8qIEltYWdlIFByZXZpZXcgKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1nUHJldmlldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvbkxlZnR9IHN0eWxlPXtzdHlsZXMuY2xvc2VfaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByZXZJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5jbG9zZV9pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV4dEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gc3R5bGU9e3N0eWxlcy5jbG9zZV9pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW1nUHJldmlldyhmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGlua1tpbmRleF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzkwdmgnLCBtYXJnaW46ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuZm9udGF3ZXNvbWU6IGhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tb2RhbC1vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAyMSwgMjEsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlLW1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjclIDQlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIGltZ19yb3c6IHtcclxuICAgICAgICBtYXJnaW46ICc1JScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB6SW5kZXg6ICc5OTknXHJcbiAgICB9LFxyXG4gICAgY2xvc2VfaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzBweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdQcm9kdWN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products-contents\\\\view-product.js */"));
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
//# sourceMappingURL=vendor.js.ae8f315340b5acb7d032.hot-update.js.map