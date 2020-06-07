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


var _this = undefined,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\customer\\main-carousel.js",
    _s = $RefreshSig$();



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

var CarouselDiv = function CarouselDiv(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "w-100 bg-white",
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    activeIndex: index,
    onSelect: handleSelect,
    indicators: false,
    interval: "1500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, images && images.map(function (element, i) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"].Item, {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("img", {
      style: {
        maxHeight: '400px'
      },
      src: element.img,
      alt: "Slide {i}",
      className: "jsx-2249590605" + " " + "d-block w-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "jsx-2249590605",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 33
      }
    }, "Slide ", index + 1, " label"), __jsx("p", {
      className: "jsx-2249590605",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, "Nulla vitae elit libero, a pharetra augue mollis interdum.")));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2249590605",
    __self: _this
  }, "@media (max-width:767px){.div.jsx-2249590605{padding:0%;margin:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcbWFpbi1jYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3dCLEFBSW9DLFdBQ0QsVUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXG1haW4tY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCwgQ29sLCBSb3csIExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYVNob3BwaW5nQ2FydCwgZmFTaWduTGFuZ3VhZ2VcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcxLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMi5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzMuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWc0LmpwZycgfSxcclxuICAgIHsgaW1nOiAnaGFzc2FuLmpwZycgfVxyXG5dXHJcblxyXG5jb25zdCBDYXJvdXNlbERpdiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3ctMTAwIGJnLXdoaXRlJyBub0d1dHRlcnMgPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXtpbmRleH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gaW5kaWNhdG9ycz17ZmFsc2V9IGludGVydmFsPScxNTAwJz5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoKGVsZW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnNDAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1NsaWRlIHtpfSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2xpZGUge2luZGV4ICsgMX0gbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgZmFDaGV2cm9uUmlnaHQ6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMTJweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMnB4JyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxEaXYiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\main-carousel.js */"));
};

_s(CarouselDiv, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");

_c = CarouselDiv;
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

var _c;

$RefreshReg$(_c, "CarouselDiv");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9tYWluLWNhcm91c2VsLmpzIl0sIm5hbWVzIjpbImltYWdlcyIsImltZyIsIkNhcm91c2VsRGl2IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJlIiwibWFwIiwiZWxlbWVudCIsImkiLCJtYXhIZWlnaHQiLCJzdHlsZXMiLCJjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwiZmFDaGV2cm9uUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDWDtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQURXLEVBRVg7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FGVyxFQUdYO0FBQUVBLEtBQUcsRUFBRTtBQUFQLENBSFcsRUFJWDtBQUFFQSxLQUFHLEVBQUU7QUFBUCxDQUpXLEVBS1g7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FMVyxDQUFmOztBQVFBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUNEQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQURDO0FBQUE7QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNiQyxRQURhOztBQUUzQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxhQUFELEVBQWdCQyxDQUFoQixFQUFzQjtBQUN2Q0gsWUFBUSxDQUFDRSxhQUFELENBQVI7QUFDSCxHQUZEOztBQUlBLFNBQ0ksbUVBQ0ksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxhQUFTLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVUsZUFBVyxFQUFFSCxLQUF2QjtBQUE4QixZQUFRLEVBQUVFLFlBQXhDO0FBQXNELGNBQVUsRUFBRSxLQUFsRTtBQUF5RSxZQUFRLEVBQUMsTUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUixNQUFNLElBQUlBLE1BQU0sQ0FBQ1csR0FBUCxDQUFXLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLFdBQ2xCLE1BQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQWUsU0FBRyxFQUFFQSxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDSSxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BRFg7QUFHSSxTQUFHLEVBQUVGLE9BQU8sQ0FBQ1gsR0FIakI7QUFJSSxTQUFHLEVBQUMsV0FKUjtBQUFBLDBDQUVjLGVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBT0ksTUFBQyx3REFBRCxDQUFVLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBV0ssS0FBSyxHQUFHLENBQW5CLFdBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBRkosQ0FQSixDQURrQjtBQUFBLEdBQVgsQ0FEZixDQURKLENBREo7QUFBQTtBQUFBO0FBQUEsNnZJQURKO0FBOEJILENBcENEOztHQUFNSixXOztLQUFBQSxXO0FBc0NOLElBQU1hLE1BQU0sR0FBRztBQUNYQyx3QkFBc0IsRUFBRTtBQUNwQkMsU0FBSyxFQUFFLE1BRGE7QUFFcEJDLFNBQUssRUFBRSxNQUZhO0FBR3BCQyxVQUFNLEVBQUUsTUFIWTtBQUlwQkwsYUFBUyxFQUFFLE1BSlM7QUFLcEJNLFlBQVEsRUFBRTtBQUxVLEdBRGI7QUFRWEMsZ0JBQWMsRUFBRTtBQUNaSixTQUFLLEVBQUUsTUFESztBQUVaQyxTQUFLLEVBQUUsTUFGSztBQUdaQyxVQUFNLEVBQUUsTUFISTtBQUlaTCxhQUFTLEVBQUUsTUFKQztBQUtaTSxZQUFRLEVBQUU7QUFMRTtBQVJMLENBQWY7QUFnQmVsQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWNiZGIzYTIwNmU5ZWZkMmFkMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsLCBDb2wsIFJvdywgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFTZWFyY2gsIGZhVXNlclBsdXMsIGZhTGFuZ3VhZ2UsIGZhUG93ZXJPZmYsIGZhVXNlcixcclxuICAgIGZhQ2FydFBsdXMsIGZhSGFuZHNIZWxwaW5nLCBmYVBlbiwgZmFTaWduT3V0QWx0LCBmYUdsb2JlLFxyXG4gICAgZmFMdWdnYWdlQ2FydCwgZmFGaWxlSW52b2ljZURvbGxhciwgZmFMaXN0QWx0LCBmYUVkaXQsXHJcbiAgICBmYVN0b3JlQWx0LCBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodCwgZmFMaXN0VWwsIGZhU2hvcHBpbmdDYXJ0LCBmYVNpZ25MYW5ndWFnZVxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzEuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcyLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMy5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzQuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdoYXNzYW4uanBnJyB9XHJcbl1cclxuXHJcbmNvbnN0IENhcm91c2VsRGl2ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0ndy0xMDAgYmctd2hpdGUnIG5vR3V0dGVycyA+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYWN0aXZlSW5kZXg9e2luZGV4fSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSBpbmRpY2F0b3JzPXtmYWxzZX0gaW50ZXJ2YWw9JzE1MDAnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMgJiYgaW1hZ2VzLm1hcCgoZWxlbWVudCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU2xpZGUge2l9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TbGlkZSB7aW5kZXggKyAxfSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGNhdGVnb3JpZXNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICBmYUNoZXZyb25SaWdodDoge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcxMnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEycHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbERpdiJdLCJzb3VyY2VSb290IjoiIn0=