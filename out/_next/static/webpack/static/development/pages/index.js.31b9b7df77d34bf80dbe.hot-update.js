webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/overlay-popover.js":
/*!*************************************************!*\
  !*** ./src/pages/components/overlay-popover.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\overlay-popover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


var UpdatingPopover = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (_ref, ref) {
  var popper = _ref.popper,
      children = _ref.children,
      _ = _ref.show,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["popper", "children", "show"]);

  useEffect(function () {
    console.log('updating!');
    popper.scheduleUpdate();
  }, [children, popper]);
  return __jsx(Popover, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref,
    content: true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), children);
});
var longContent = "\n  Very long\n  Multiline content\n  that is engaging and what-not\n";
var shortContent = 'Short and sweet!';

function OverlayPopover(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(shortContent),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      content = _React$useState2[0],
      setContent = _React$useState2[1];

  useEffect(function () {
    var timerId = setInterval(function () {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);
    return function () {
      return clearInterval(timerId);
    };
  });
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["OverlayTrigger"], {
    trigger: "click",
    overlay: __jsx(UpdatingPopover, {
      id: "popover-contained",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (OverlayPopover);

/***/ })

})
//# sourceMappingURL=index.js.31b9b7df77d34bf80dbe.hot-update.js.map