webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/main-carousel.js":
/*!********************************************************!*\
  !*** ./src/pages/components/customer/main-carousel.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");


var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\customer\\main-carousel.js",
    _s = $RefreshSig$(),
    _this2 = undefined,
    _s2 = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var images = [{
  img: 'carousel_img1.jpg'
}, {
  img: 'carousel_img2.jpg'
}, {
  img: 'carousel_img3.jpg'
}, {
  img: 'carousel_img4.jpg'
}];

function OnlyCarousel(props) {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    activeIndex: index,
    onSelect: handleSelect,
    indicators: false,
    interval: "1500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, images && images.map(function (element, i) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"].Item, {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx("img", {
      style: {
        maxHeight: '400px'
      },
      className: "d-block w-100",
      src: element.img,
      alt: "Slide {i}",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, "Slide ", index + 1, " label"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, "Nulla vitae elit libero, a pharetra augue mollis interdum.")));
  }));
}

_s(OnlyCarousel, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");

_c = OnlyCarousel;

var CarouselDiv = function CarouselDiv(props) {
  _s2();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      hoverCategory = _React$useState4[0],
      setHoverCategory = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      isCategoryOpen = _React$useState6[0],
      setIsCategoryOpen = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      category_id = _React$useState8[0],
      setCategory_id = _React$useState8[1];

  function categoryMouseEnter(index) {
    var copyArray = Object.assign([], props.categories_list);
    setCategory_id(copyArray[index]._id);
  }

  function categoryMouseLeave() {
    setCategory_id('');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1234515142" + " " + 'rr',
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "w-100",
    noGutters: true,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 3,
    md: 3,
    onMouseLeave: function onMouseLeave() {
      return categoryMouseLeave();
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, props.categories_list && props.categories_list.map(function (element, index) {
    return __jsx("div", {
      key: index,
      onMouseOver: function onMouseOver() {
        return categoryMouseEnter(index);
      },
      className: "jsx-1234515142" + " " + "category_list_item",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, element.value, __jsx("div", {
      className: "jsx-1234515142" + " " + 'mr-auto',
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronRight"],
      style: styles.categories_fontawesome,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 33
      }
    }));
  })), category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      overflowY: 'auto',
      zIndex: 100
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, props.sub_categories_list && props.sub_categories_list.map(function (element, index) {
    return element.category_id == category_id ? __jsx("div", {
      key: index,
      className: "jsx-1234515142" + " " + "category_list_item",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 37
      }
    }, element.value) : null;
  })) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12,
    style: {
      zIndex: 1
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(OnlyCarousel, {
    style: {
      maxHeight: '30vh'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1234515142",
    __self: _this2
  }, ".rr.jsx-1234515142{margin:1% 3%;padding:1% 2% 1% 1%;background:white;}.category_list_item.jsx-1234515142{cursor:pointer;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:15px;padding:3%;margin:0.5% 0%;color:gray;box-shadow:5px 5px 5px -1px rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.03);}.category_list_item.jsx-1234515142:hover{overflow:auto;color:#005ce6;box-shadow:inset 5px 5px 5px -1px rgba(0,0,0,0.1), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);border:1px solid rgba(0,0,0,0.01);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcbWFpbi1jYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RndCLEFBR2tDLEFBS00sQUFZRCxhQWhCRSxDQWlCRixDQVpILFdBQ1MsRUFpQndCLEtBdEIvQixpQkFDckIsOEVBSzJCLDZGQUNKLGVBQ0osQ0FldUIsVUFkbkIsZUFDSixTQWNmLEVBYmlELDZDQUNYLGtDQUN0QyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXG1haW4tY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCwgQ29sLCBSb3csIExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYVNob3BwaW5nQ2FydCwgZmFTaWduTGFuZ3VhZ2VcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMS5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzIuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWczLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nNC5qcGcnIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIE9ubHlDYXJvdXNlbChwcm9wcykge1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXtpbmRleH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gaW5kaWNhdG9ycz17ZmFsc2V9IGludGVydmFsPScxNTAwJz5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKChlbGVtZW50LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzQwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdTbGlkZSB7aX0nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNsaWRlIHtpbmRleCArIDF9IGxhYmVsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IENhcm91c2VsRGl2ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaG92ZXJDYXRlZ29yeSwgc2V0SG92ZXJDYXRlZ29yeV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmNhdGVnb3JpZXNfbGlzdClcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZChjb3B5QXJyYXlbaW5kZXhdLl9pZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZCgnJylcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JyJz5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSd3LTEwMCcgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBvbk1vdXNlTGVhdmU9eygpID0+IGNhdGVnb3J5TW91c2VMZWF2ZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IG92ZXJmbG93WTogJ2F1dG8nLCB6SW5kZXg6IDEwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhdGVnb3J5X2lkID09IGNhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs5fSBtZD17OX0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXt7IHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9ubHlDYXJvdXNlbCBzdHlsZT17eyBtYXhIZWlnaHQ6ICczMHZoJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucnJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxJSAzJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJSAyJSAxJSAxJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjUlIDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDVjZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMC4zcHggc29saWQgI2UzZWRmNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLTRweCAtNHB4IDZweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC41cHggLTAuNXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsMCwwLDAuMTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxMnB4IDEwcHggLTEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbERpdiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\main-carousel.js */"));
};

_s2(CarouselDiv, "QVvrzQjIAhS0oqLRblqS4RYfIiw=");

_c2 = CarouselDiv;
var styles = {
  categories_fontawesome: {
    color: 'gray',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CarouselDiv);

var _c, _c2;

$RefreshReg$(_c, "OnlyCarousel");
$RefreshReg$(_c2, "CarouselDiv");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9tYWluLWNhcm91c2VsLmpzIl0sIm5hbWVzIjpbImltYWdlcyIsImltZyIsIk9ubHlDYXJvdXNlbCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJoYW5kbGVTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZSIsIm1hcCIsImVsZW1lbnQiLCJpIiwibWF4SGVpZ2h0IiwiQ2Fyb3VzZWxEaXYiLCJob3ZlckNhdGVnb3J5Iiwic2V0SG92ZXJDYXRlZ29yeSIsImlzQ2F0ZWdvcnlPcGVuIiwic2V0SXNDYXRlZ29yeU9wZW4iLCJjYXRlZ29yeV9pZCIsInNldENhdGVnb3J5X2lkIiwiY2F0ZWdvcnlNb3VzZUVudGVyIiwiY29weUFycmF5IiwiT2JqZWN0IiwiYXNzaWduIiwiY2F0ZWdvcmllc19saXN0IiwiX2lkIiwiY2F0ZWdvcnlNb3VzZUxlYXZlIiwidmFsdWUiLCJmYUNoZXZyb25SaWdodCIsInN0eWxlcyIsImNhdGVnb3JpZXNfZm9udGF3ZXNvbWUiLCJvdmVyZmxvd1kiLCJ6SW5kZXgiLCJzdWJfY2F0ZWdvcmllc19saXN0IiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNYO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBRFcsRUFFWDtBQUFFQSxLQUFHLEVBQUU7QUFBUCxDQUZXLEVBR1g7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FIVyxFQUlYO0FBQUVBLEtBQUcsRUFBRTtBQUFQLENBSlcsQ0FBZjs7QUFPQSxTQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUFBOztBQUFBLHdCQUNDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUREO0FBQUE7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsWUFBRDtBQUFjLFNBQUssRUFBRTtBQUFFcEIsZUFBUyxFQUFFO0FBQWIsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBeEJKLENBREosQ0FESjtBQUFBO0FBQUE7QUFBQSw0NVJBREo7QUFnRUgsQ0E1RUQ7O0lBQU1DLFc7O01BQUFBLFc7QUE4RU4sSUFBTWdCLE1BQU0sR0FBRztBQUNYQyx3QkFBc0IsRUFBRTtBQUNwQkksU0FBSyxFQUFFLE1BRGE7QUFFcEJDLFNBQUssRUFBRSxNQUZhO0FBR3BCQyxVQUFNLEVBQUUsTUFIWTtBQUlwQnhCLGFBQVMsRUFBRSxNQUpTO0FBS3BCeUIsWUFBUSxFQUFFO0FBTFU7QUFEYixDQUFmO0FBU2V4QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWUyOGNmNzM0YzM4ZTg1YzNhMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsLCBDb2wsIFJvdywgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFTZWFyY2gsIGZhVXNlclBsdXMsIGZhTGFuZ3VhZ2UsIGZhUG93ZXJPZmYsIGZhVXNlcixcclxuICAgIGZhQ2FydFBsdXMsIGZhSGFuZHNIZWxwaW5nLCBmYVBlbiwgZmFTaWduT3V0QWx0LCBmYUdsb2JlLFxyXG4gICAgZmFMdWdnYWdlQ2FydCwgZmFGaWxlSW52b2ljZURvbGxhciwgZmFMaXN0QWx0LCBmYUVkaXQsXHJcbiAgICBmYVN0b3JlQWx0LCBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodCwgZmFMaXN0VWwsIGZhU2hvcHBpbmdDYXJ0LCBmYVNpZ25MYW5ndWFnZVxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcxLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMi5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzMuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWc0LmpwZycgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gT25seUNhcm91c2VsKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWwgYWN0aXZlSW5kZXg9e2luZGV4fSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSBpbmRpY2F0b3JzPXtmYWxzZX0gaW50ZXJ2YWw9JzE1MDAnPlxyXG4gICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoKGVsZW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnNDAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1NsaWRlIHtpfSdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2xpZGUge2luZGV4ICsgMX0gbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5OdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgQ2Fyb3VzZWxEaXYgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtob3ZlckNhdGVnb3J5LCBzZXRIb3ZlckNhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzQ2F0ZWdvcnlPcGVuLCBzZXRJc0NhdGVnb3J5T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjYXRlZ29yeV9pZCwgc2V0Q2F0ZWdvcnlfaWRdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUVudGVyKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMuY2F0ZWdvcmllc19saXN0KVxyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKGNvcHlBcnJheVtpbmRleF0uX2lkKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKCcnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnInPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3ctMTAwJyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IG9uTW91c2VMZWF2ZT17KCkgPT4gY2F0ZWdvcnlNb3VzZUxlYXZlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiBvbk1vdXNlT3Zlcj17KCkgPT4gY2F0ZWdvcnlNb3VzZUVudGVyKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeV9pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIHpJbmRleDogMTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gY2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezl9IG1kPXs5fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3sgekluZGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T25seUNhcm91c2VsIHN0eWxlPXt7IG1heEhlaWdodDogJzMwdmgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5ycntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDElIDMlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDIlIDElIDElO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNSUgMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4wMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWNlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAwLjNweCBzb2xpZCAjZTNlZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCAtNHB4IC00cHggNnB4IC0xcHggcmdiYSgyNTUsMjU1LDI1NSwwLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0wLjVweCAtMC41cHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cHggMC41cHggMHB4IHJnYmEoMCwwLDAsMC4xNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMHB4IDEycHggMTBweCAtMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsRGl2Il0sInNvdXJjZVJvb3QiOiIifQ==