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
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");


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
}, {
  img: 'hassan.jpg'
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
      lineNumber: 28,
      columnNumber: 9
    }
  }, images && images.map(function (element, i) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"].Item, {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
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
        lineNumber: 31,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, "Slide ", index + 1, " label"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, "Nulla vitae elit libero, a pharetra augue mollis interdum.")));
  }));
}

_s(OnlyCarousel, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");

_c = OnlyCarousel;

var CarouselDiv = function CarouselDiv(props) {
  _s2();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      category_id = _React$useState4[0],
      setCategory_id = _React$useState4[1];

  function categoryMouseEnter(index) {
    var copyArray = Object.assign([], props.categories_list);
    setCategory_id(copyArray[index]._id);
  }

  function categoryMouseLeave() {
    setCategory_id('');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1348105974", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color]]]) + " " + 'div',
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "w-100 bg-white",
    noGutters: true,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    onMouseLeave: function onMouseLeave() {
      return categoryMouseLeave();
    },
    style: {
      boxShadow: '-1px 0px 10px 1px rgba(0,0,0,0.12) inset',
      zIndex: 1
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1348105974", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color]]]) + " " + 'col-lg-3 col-md-3 block_sm',
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1348105974", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1348105974", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronRight"],
      style: styles.faChevronRight,
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
      zIndex: 100,
      position: 'absolute',
      left: '28%',
      background: 'white',
      width: '25%',
      heiht: '100%'
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1348105974", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx(OnlyCarousel, {
    style: {
      maxHeight: '400px'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1348105974",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color],
    __self: _this2
  }, ".div.__jsx-style-dynamic-selector{margin:1% 3%;padding:1% 2%;background:white;box-shadow:0px 0px 10px 1px ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color, " inset;}.category_list_item.__jsx-style-dynamic-selector{cursor:pointer;width:98%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;padding:4% 5%;color:gray;}.category_list_item.__jsx-style-dynamic-selector:hover{z-index:100;color:#005ce6;border-radius:2px;box-shadow:-1px 0px 10px 1px rgba(0,0,0,0.12);}.block_sm.__jsx-style-dynamic-selector{display:block;}@media (max-width:767px){.block_sm.__jsx-style-dynamic-selector{display:none;}.div.__jsx-style-dynamic-selector{padding:0%;margin:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcbWFpbi1jYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR3dCLEFBR2tDLEFBTUUsQUFTSCxBQU1FLEFBSUcsQUFHRixXQUNELENBYkEsQ0FmQSxBQXlCZCxDQUpKLENBZmMsTUF1QlYsSUF0Qm9CLENBU0YsQ0FmRCxpQkFDOEMsQUFlakIsOENBQ2xELGlCQWZBLG9CQUt1Qiw2RkFDSixlQUNELGNBQ0gsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXG1haW4tY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCwgQ29sLCBSb3csIExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYVNob3BwaW5nQ2FydCwgZmFTaWduTGFuZ3VhZ2VcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcxLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMi5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzMuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWc0LmpwZycgfSxcclxuICAgIHsgaW1nOiAnaGFzc2FuLmpwZycgfVxyXG5dXHJcblxyXG5mdW5jdGlvbiBPbmx5Q2Fyb3VzZWwocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoc2VsZWN0ZWRJbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IGluZGljYXRvcnM9e2ZhbHNlfSBpbnRlcnZhbD0nMTUwMCc+XHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoZWxlbWVudCwgaSkgPT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU2xpZGUge2l9J1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TbGlkZSB7aW5kZXggKyAxfSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBDYXJvdXNlbERpdiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NhdGVnb3J5X2lkLCBzZXRDYXRlZ29yeV9pZF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy5jYXRlZ29yaWVzX2xpc3QpXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoY29weUFycmF5W2luZGV4XS5faWQpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoJycpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3ctMTAwIGJnLXdoaXRlJyBub0d1dHRlcnMgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMyBjb2wtbWQtMyBibG9ja19zbScgb25Nb3VzZUxlYXZlPXsoKSA9PiBjYXRlZ29yeU1vdXNlTGVhdmUoKX0gc3R5bGU9e3sgYm94U2hhZG93OiAnLTFweCAwcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjEyKSBpbnNldCcsIHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZhQ2hldnJvblJpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzI4JScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNSUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhdGVnb3J5X2lkID09IGNhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs5fSBtZD17OX0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXt7IHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9ubHlDYXJvdXNlbCBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRpdntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDElIDMlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn0gaW5zZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0JSA1JTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1Y2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDBweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsb2NrX3Nte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJsb2NrX3Nte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvblJpZ2h0OiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsRGl2Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\main-carousel.js */")));
};

_s2(CarouselDiv, "RERAwRLRqm1cp9TMUn/AGamAx38=");

_c2 = CarouselDiv;
var styles = {
  categories_fontawesome: {
    color: 'gray',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  faChevronRight: {
    color: 'gray',
    width: '12px',
    height: '12px',
    maxHeight: '12px',
    maxWidth: '12px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9tYWluLWNhcm91c2VsLmpzIl0sIm5hbWVzIjpbImltYWdlcyIsImltZyIsIk9ubHlDYXJvdXNlbCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJoYW5kbGVTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZSIsIm1hcCIsImVsZW1lbnQiLCJpIiwibWF4SGVpZ2h0IiwiQ2Fyb3VzZWxEaXYiLCJjYXRlZ29yeV9pZCIsInNldENhdGVnb3J5X2lkIiwiY2F0ZWdvcnlNb3VzZUVudGVyIiwiY29weUFycmF5IiwiT2JqZWN0IiwiYXNzaWduIiwiY2F0ZWdvcmllc19saXN0IiwiX2lkIiwiY2F0ZWdvcnlNb3VzZUxlYXZlIiwiR2xvYmFsU3R5bGVTaGVldCIsInByaW1yeV9jb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsInZhbHVlIiwiZmFDaGV2cm9uUmlnaHQiLCJzdHlsZXMiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImxlZnQiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlodCIsInN1Yl9jYXRlZ29yaWVzX2xpc3QiLCJjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lIiwiY29sb3IiLCJoZWlnaHQiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDWDtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQURXLEVBRVg7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FGVyxFQUdYO0FBQUVBLEtBQUcsRUFBRTtBQUFQLENBSFcsRUFJWDtBQUFFQSxLQUFHLEVBQUU7QUFBUCxDQUpXLEVBS1g7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FMVyxDQUFmOztBQVFBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUE7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LElBOUJSLEVBZ0NJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFtQixNQUFFLEVBQUUsRUFBdkI7QUFBMkIsTUFBRSxFQUFFLEVBQS9CO0FBQW1DLFNBQUssRUFBRTtBQUFFRCxZQUFNLEVBQUU7QUFBVixLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxZQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUVkLGVBQVMsRUFBRTtBQUFiLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWhDSixDQURKLENBREo7QUFBQTtBQUFBLGNBNEMyQ1csbURBQWdCLENBQUNDLFlBNUM1RDtBQUFBO0FBQUEseUhBNEMyQ0QsbURBQWdCLENBQUNDLFlBNUM1RCxnNlNBREo7QUE2RUgsQ0F2RkQ7O0lBQU1YLFc7O01BQUFBLFc7QUF5Rk4sSUFBTWdCLE1BQU0sR0FBRztBQUNYUSx3QkFBc0IsRUFBRTtBQUNwQkMsU0FBSyxFQUFFLE1BRGE7QUFFcEJKLFNBQUssRUFBRSxNQUZhO0FBR3BCSyxVQUFNLEVBQUUsTUFIWTtBQUlwQjNCLGFBQVMsRUFBRSxNQUpTO0FBS3BCNEIsWUFBUSxFQUFFO0FBTFUsR0FEYjtBQVFYWixnQkFBYyxFQUFFO0FBQ1pVLFNBQUssRUFBRSxNQURLO0FBRVpKLFNBQUssRUFBRSxNQUZLO0FBR1pLLFVBQU0sRUFBRSxNQUhJO0FBSVozQixhQUFTLEVBQUUsTUFKQztBQUtaNEIsWUFBUSxFQUFFO0FBTEU7QUFSTCxDQUFmO0FBZ0JlM0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ3NjQ1NTg0NWI4ZGY0ZGRhMWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCwgQ29sLCBSb3csIExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYVNob3BwaW5nQ2FydCwgZmFTaWduTGFuZ3VhZ2VcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcxLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMi5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzMuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWc0LmpwZycgfSxcclxuICAgIHsgaW1nOiAnaGFzc2FuLmpwZycgfVxyXG5dXHJcblxyXG5mdW5jdGlvbiBPbmx5Q2Fyb3VzZWwocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoc2VsZWN0ZWRJbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IGluZGljYXRvcnM9e2ZhbHNlfSBpbnRlcnZhbD0nMTUwMCc+XHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoZWxlbWVudCwgaSkgPT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU2xpZGUge2l9J1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TbGlkZSB7aW5kZXggKyAxfSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBDYXJvdXNlbERpdiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NhdGVnb3J5X2lkLCBzZXRDYXRlZ29yeV9pZF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy5jYXRlZ29yaWVzX2xpc3QpXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoY29weUFycmF5W2luZGV4XS5faWQpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoJycpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3ctMTAwIGJnLXdoaXRlJyBub0d1dHRlcnMgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMyBjb2wtbWQtMyBibG9ja19zbScgb25Nb3VzZUxlYXZlPXsoKSA9PiBjYXRlZ29yeU1vdXNlTGVhdmUoKX0gc3R5bGU9e3sgYm94U2hhZG93OiAnLTFweCAwcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjEyKSBpbnNldCcsIHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZhQ2hldnJvblJpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzI4JScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNSUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhdGVnb3J5X2lkID09IGNhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs5fSBtZD17OX0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXt7IHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9ubHlDYXJvdXNlbCBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRpdntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDElIDMlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn0gaW5zZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0JSA1JTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1Y2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDBweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsb2NrX3Nte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJsb2NrX3Nte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvblJpZ2h0OiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsRGl2Il0sInNvdXJjZVJvb3QiOiIifQ==