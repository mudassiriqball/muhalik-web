webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/overlay-opover.js":
/*!************************************************!*\
  !*** ./src/pages/components/overlay-opover.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\overlay-opover.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // const OverlayPopover = (props) => (
//     <>
//         <OverlayTrigger trigger="hover" placement="bottom" delay={{ show: 200, hide: 100 }}
//             overlay={
//                 <Popover id="popover-basic">
//                     <Popover.Title as="h3">{props.title}</Popover.Title>
//                     <Popover.Content>
//                         {props.content}
//                     </Popover.Content>
//                 </Popover>
//             }>
//             {props.children}
//         </OverlayTrigger>
//     </>
// )

function popover(title, content) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    id: "popover-basic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Title, {
    as: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, content));
}

var OverlayPopover = function OverlayPopover(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
    trigger: "hover",
    placement: "bottom",
    delay: {
      show: 200,
      hide: 100
    },
    overlay: popover(props.title, props.content),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayPopover);

/***/ })

})
//# sourceMappingURL=index.js.158c027e9f5472fca2f3.hot-update.js.map