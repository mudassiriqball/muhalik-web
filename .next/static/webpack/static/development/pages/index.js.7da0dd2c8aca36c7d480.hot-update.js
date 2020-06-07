webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/slider-carousel.js":
/*!**********************************************************!*\
  !*** ./src/pages/components/customer/slider-carousel.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\customer\\slider-carousel.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




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

var SliderCarousel = function SliderCarousel(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "w-100 bg-white",
    style: {
      width: '100vw',
      maxWidth: '100%'
    },
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    activeIndex: index,
    onSelect: handleSelect,
    indicators: false,
    interval: "1500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, images && images.map(function (element, i) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, __jsx("img", {
      style: {
        maxHeight: '400px',
        width: '100vw',
        maxWidth: '100%'
      },
      className: "d-block bg-cover",
      src: element.img,
      alt: "Slide {i}",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, "Slide ", index + 1, " label"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, "Nulla vitae elit libero, a pharetra augue mollis interdum.")));
  })));
};

_s(SliderCarousel, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");

_c = SliderCarousel;
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (SliderCarousel);

var _c;

$RefreshReg$(_c, "SliderCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9zbGlkZXItY2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaW1nIiwiU2xpZGVyQ2Fyb3VzZWwiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4IiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImUiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFwIiwiZWxlbWVudCIsImkiLCJtYXhIZWlnaHQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDWDtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQURXLEVBRVg7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FGVyxFQUdYO0FBQUVBLEtBQUcsRUFBRTtBQUFQLENBSFcsRUFJWDtBQUFFQSxLQUFHLEVBQUU7QUFBUCxDQUpXLEVBS1g7QUFBRUEsS0FBRyxFQUFFO0FBQVAsQ0FMVyxDQUFmOztBQVFBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ0pDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBREk7QUFBQTtBQUFBLE1BQ3ZCQyxLQUR1QjtBQUFBLE1BQ2hCQyxRQURnQjs7QUFFOUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsYUFBRCxFQUFnQkMsQ0FBaEIsRUFBc0I7QUFDdkNILFlBQVEsQ0FBQ0UsYUFBRCxDQUFSO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBSyxFQUFFO0FBQUVFLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxjQUFRLEVBQUU7QUFBNUIsS0FBdkM7QUFBNkUsYUFBUyxNQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFVLGVBQVcsRUFBRU4sS0FBdkI7QUFBOEIsWUFBUSxFQUFFRSxZQUF4QztBQUFzRCxjQUFVLEVBQUUsS0FBbEU7QUFBeUUsWUFBUSxFQUFDLE1BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1IsTUFBTSxJQUFJQSxNQUFNLENBQUNhLEdBQVAsQ0FBVyxVQUFDQyxPQUFELEVBQVVDLENBQVY7QUFBQSxXQUNsQixNQUFDLHdEQUFELENBQVUsSUFBVjtBQUFlLFNBQUcsRUFBRUEsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQ0ksV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUUsT0FBYjtBQUFzQkwsYUFBSyxFQUFFLE9BQTdCO0FBQXNDQyxnQkFBUSxFQUFFO0FBQWhELE9BRFg7QUFFSSxlQUFTLEVBQUMsa0JBRmQ7QUFHSSxTQUFHLEVBQUVFLE9BQU8sQ0FBQ2IsR0FIakI7QUFJSSxTQUFHLEVBQUMsV0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFPSSxNQUFDLHdEQUFELENBQVUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBV0ssS0FBSyxHQUFHLENBQW5CLFdBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUZKLENBUEosQ0FEa0I7QUFBQSxHQUFYLENBRGYsQ0FESixDQURKO0FBb0JILENBMUJEOztHQUFNSixjOztLQUFBQSxjO0FBNEJOLElBQU1lLE1BQU0sR0FBRyxFQUFmO0FBRWVmLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43ZGEwZGQyYzhhY2EzNmM3ZDQ4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWwsIENvbCwgUm93LCBMaXN0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcxLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMi5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzMuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWc0LmpwZycgfSxcclxuICAgIHsgaW1nOiAnaGFzc2FuLmpwZycgfVxyXG5dXHJcblxyXG5jb25zdCBTbGlkZXJDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9J3ctMTAwIGJnLXdoaXRlJyBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JywgbWF4V2lkdGg6ICcxMDAlJyB9fSBub0d1dHRlcnMgPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgYWN0aXZlSW5kZXg9e2luZGV4fSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSBpbmRpY2F0b3JzPXtmYWxzZX0gaW50ZXJ2YWw9JzE1MDAnPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKChlbGVtZW50LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzQwMHB4Jywgd2lkdGg6ICcxMDB2dycsIG1heFdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgYmctY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbGVtZW50LmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU2xpZGUge2l9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TbGlkZSB7aW5kZXggKyAxfSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlckNhcm91c2VsIl0sInNvdXJjZVJvb3QiOiIifQ==