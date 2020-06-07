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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1092874825", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color]]]) + " " + 'div',
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
  }, __jsx(OnlyCarousel, {
    style: {
      maxHeight: '400px'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1092874825",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color],
    __self: _this2
  }, ".div.__jsx-style-dynamic-selector{padding:0.1% 5%;background:white;box-shadow:10px 0px 10px 5px ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color, " inset;}.category_list_item.__jsx-style-dynamic-selector{cursor:pointer;width:98%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;padding:4% 5%;color:gray;}.category_list_item.__jsx-style-dynamic-selector:hover{z-index:100;color:#005ce6;border-radius:2px;box-shadow:-1px 0px 10px 1px rgba(0,0,0,0.12);}@media (max-width:767px){.div.__jsx-style-dynamic-selector{padding:0%;margin:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcbWFpbi1jYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRHdCLEFBR3FDLEFBS0QsQUFTSCxBQU9HLFdBQ0QsQ0FQQSxHQVRKLENBTE8sS0FzQmpCLElBaEJvQixDQVNGLE9BZDhDLFdBZWxCLDhDQUNsRCxPQWZBLDhCQUt1Qiw2RkFDSixlQUNELGNBQ0gsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXG1haW4tY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCwgQ29sLCBSb3csIExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYVNob3BwaW5nQ2FydCwgZmFTaWduTGFuZ3VhZ2VcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcxLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMi5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzMuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWc0LmpwZycgfSxcclxuICAgIHsgaW1nOiAnaGFzc2FuLmpwZycgfVxyXG5dXHJcblxyXG5mdW5jdGlvbiBPbmx5Q2Fyb3VzZWwocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoc2VsZWN0ZWRJbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IGluZGljYXRvcnM9e2ZhbHNlfSBpbnRlcnZhbD0nMTUwMCc+XHJcbiAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoZWxlbWVudCwgaSkgPT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU2xpZGUge2l9J1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TbGlkZSB7aW5kZXggKyAxfSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBDYXJvdXNlbERpdiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NhdGVnb3J5X2lkLCBzZXRDYXRlZ29yeV9pZF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy5jYXRlZ29yaWVzX2xpc3QpXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoY29weUFycmF5W2luZGV4XS5faWQpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoJycpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYnPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3ctMTAwIGJnLXdoaXRlJyBub0d1dHRlcnMgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPbmx5Q2Fyb3VzZWwgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnNDAwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4xJSA1JTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDBweCAxMHB4IDVweCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfSBpbnNldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQlIDUlOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDVjZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvblJpZ2h0OiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsRGl2Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\main-carousel.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9tYWluLWNhcm91c2VsLmpzIl0sIm5hbWVzIjpbImltYWdlcyIsImltZyIsIk9ubHlDYXJvdXNlbCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJoYW5kbGVTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZSIsIm1hcCIsImVsZW1lbnQiLCJpIiwibWF4SGVpZ2h0IiwiQ2Fyb3VzZWxEaXYiLCJjYXRlZ29yeV9pZCIsInNldENhdGVnb3J5X2lkIiwiY2F0ZWdvcnlNb3VzZUVudGVyIiwiY29weUFycmF5IiwiT2JqZWN0IiwiYXNzaWduIiwiY2F0ZWdvcmllc19saXN0IiwiX2lkIiwiY2F0ZWdvcnlNb3VzZUxlYXZlIiwiR2xvYmFsU3R5bGVTaGVldCIsInByaW1yeV9jb2xvciIsInN0eWxlcyIsImNhdGVnb3JpZXNfZm9udGF3ZXNvbWUiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJmYUNoZXZyb25SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDWDtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQURXLEVBRVg7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FGVyxFQUdYO0FBQUVBLEtBQUcsRUFBRTtBQUFQLENBSFcsRUFJWDtBQUFFQSxLQUFHLEVBQUU7QUFBUCxDQUpXLEVBS1g7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FMVyxDQUFmOztBQVFBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBREQ7QUFBQTtBQUFBLE1BQ2xCQyxLQURrQjtBQUFBLE1BQ1hDLFFBRFc7O0FBRXpCLE1BQU1DLFlBQVks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RSxNQUpDO0FBS1prQixZQUFRLEVBQUU7QUFMRTtBQVJMLENBQWY7QUFnQmVqQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDYwMTc1ZDI2ZjRkMjk3OTY5NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsLCBDb2wsIFJvdywgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFTZWFyY2gsIGZhVXNlclBsdXMsIGZhTGFuZ3VhZ2UsIGZhUG93ZXJPZmYsIGZhVXNlcixcclxuICAgIGZhQ2FydFBsdXMsIGZhSGFuZHNIZWxwaW5nLCBmYVBlbiwgZmFTaWduT3V0QWx0LCBmYUdsb2JlLFxyXG4gICAgZmFMdWdnYWdlQ2FydCwgZmFGaWxlSW52b2ljZURvbGxhciwgZmFMaXN0QWx0LCBmYUVkaXQsXHJcbiAgICBmYVN0b3JlQWx0LCBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodCwgZmFMaXN0VWwsIGZhU2hvcHBpbmdDYXJ0LCBmYVNpZ25MYW5ndWFnZVxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzEuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcyLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMy5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzQuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdoYXNzYW4uanBnJyB9XHJcbl1cclxuXHJcbmZ1bmN0aW9uIE9ubHlDYXJvdXNlbChwcm9wcykge1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXtpbmRleH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gaW5kaWNhdG9ycz17ZmFsc2V9IGludGVydmFsPScxNTAwJz5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKChlbGVtZW50LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzQwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdTbGlkZSB7aX0nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNsaWRlIHtpbmRleCArIDF9IGxhYmVsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IENhcm91c2VsRGl2ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmNhdGVnb3JpZXNfbGlzdClcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZChjb3B5QXJyYXlbaW5kZXhdLl9pZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZCgnJylcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdic+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0ndy0xMDAgYmctd2hpdGUnIG5vR3V0dGVycyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9ubHlDYXJvdXNlbCBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRpdntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjElIDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMHB4IDEwcHggNXB4ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9IGluc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNCUgNSU7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWNlNjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgZmFDaGV2cm9uUmlnaHQ6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMTJweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMnB4JyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxEaXYiXSwic291cmNlUm9vdCI6IiJ9