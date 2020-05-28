webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js":
/*!********************************************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\add-new-field-name-model.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






function AddNewFieldNameModal(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      showMessage = _React$useState6[0],
      setShowMessage = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      message = _React$useState8[0],
      setMessage = _React$useState8[1];

  function handleAdd() {
    return _handleAdd.apply(this, arguments);
  }

  function _handleAdd() {
    _handleAdd = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var url, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(error != "")) {
                _context.next = 8;
                break;
              }

              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_7__["default"].PATH + '/api/categories/field-request';
              data = [];
              data = {
                value: value,
                label: value
              };
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, {
                data: data
              }, {
                headers: {
                  'authorization': props.token
                }
              }).then(function (response) {
                setMessage('Your Request Sended Successfully, You will be informed soon');
                setShowMessage(true);
              })["catch"](function (error) {
                setMessage('Request Failed');
                setShowMessage(true);
              });

            case 6:
              _context.next = 9;
              break;

            case 8:
              setError('Must be 2-20 characters');

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleAdd.apply(this, arguments);
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    size: "md",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Add New Field")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, showMessage ? {
    message: message
  } : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "Your Request for Adding New Field Name will be send to Admin, Admin will Approve/Discard it."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Field Name",
    name: "sku",
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);

      if (value.length > 2 && value.length < 21) {
        setError('Must be 2-20 characters');
      } else {
        setError("");
      }
    },
    isInvalid: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, error))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "sm",
    className: "mr-auto",
    onClick: handleAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Add"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "sm",
    onClick: props.onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Cancel")));
}

_s(AddNewFieldNameModal, "3SbSgorYGZAo6Rvnjmc12Mk1XOk=");

_c = AddNewFieldNameModal;
/* harmony default export */ __webpack_exports__["default"] = (AddNewFieldNameModal);

var _c;

$RefreshReg$(_c, "AddNewFieldNameModal");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy92ZW5kb3IvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250ZW50cy9wcm9kdWN0LWNvbnRlbnRzL2FkZC1uZXctY29udGVudHMvYWRkLW5ldy1maWVsZC1uYW1lLW1vZGVsLmpzIl0sIm5hbWVzIjpbIkFkZE5ld0ZpZWxkTmFtZU1vZGFsIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVBZGQiLCJ1cmwiLCJNdWhhbGlrQ29uZmlnIiwiUEFUSCIsImRhdGEiLCJsYWJlbCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwid2lkdGgiLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwib25IaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQXFDO0FBQUE7O0FBQUEsd0JBQ1BDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRE87QUFBQTtBQUFBLE1BQzFCQyxLQUQwQjtBQUFBLE1BQ25CQyxRQURtQjs7QUFBQSx5QkFFUEgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGTztBQUFBO0FBQUEsTUFFMUJHLEtBRjBCO0FBQUEsTUFFbkJDLFFBRm1COztBQUFBLHlCQUdLTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhMO0FBQUE7QUFBQSxNQUcxQkssV0FIMEI7QUFBQSxNQUdiQyxjQUhhOztBQUFBLHlCQUlIUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUpHO0FBQUE7QUFBQSxNQUkxQk8sT0FKMEI7QUFBQSxNQUlqQkMsVUFKaUI7O0FBQUEsV0FNbEJDLFNBTmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtNQU1qQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDUU4sS0FBSyxJQUFJLEVBRGpCO0FBQUE7QUFBQTtBQUFBOztBQUVjTyxpQkFGZCxHQUVvQkMsMkRBQWEsQ0FBQ0MsSUFBZCxHQUFxQiwrQkFGekM7QUFHWUMsa0JBSFosR0FHbUIsRUFIbkI7QUFJUUEsa0JBQUksR0FBRztBQUNIWixxQkFBSyxFQUFFQSxLQURKO0FBRUhhLHFCQUFLLEVBQUViO0FBRkosZUFBUDtBQUpSO0FBQUEscUJBUWNjLDRDQUFLLENBQUNDLElBQU4sQ0FBV04sR0FBWCxFQUFnQjtBQUNsQkcsb0JBQUksRUFBSkE7QUFEa0IsZUFBaEIsRUFFSDtBQUNDSSx1QkFBTyxFQUFFO0FBQUUsbUNBQWlCbkIsS0FBSyxDQUFDb0I7QUFBekI7QUFEVixlQUZHLEVBSUhDLElBSkcsQ0FJRSxVQUFDQyxRQUFELEVBQWM7QUFDbEJaLDBCQUFVLENBQUMsNkRBQUQsQ0FBVjtBQUNBRiw4QkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILGVBUEssV0FPRyxVQUFDSCxLQUFELEVBQVc7QUFDaEJLLDBCQUFVLENBQUMsZ0JBQUQsQ0FBVjtBQUNBRiw4QkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILGVBVkssQ0FSZDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFvQlFGLHNCQUFRLENBQUMseUJBQUQsQ0FBUjs7QUFwQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FOaUM7QUFBQTtBQUFBOztBQThCakMsU0FDSSxNQUFDLHFEQUFELHlGQUNRTixLQURSO0FBRUksUUFBSSxFQUFDLElBRlQ7QUFHSSx1QkFBZ0IsK0JBSHBCO0FBSUksWUFBUSxNQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNSSxNQUFDLHFEQUFELENBQU8sTUFBUDtBQUFjLGVBQVcsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQsQ0FBTyxLQUFQO0FBQWEsTUFBRSxFQUFDLCtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLENBTkosRUFXSSxNQUFDLHFEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tPLFdBQVcsR0FDUjtBQUFFRSxXQUFPLEVBQVBBO0FBQUYsR0FEUSxHQUdSLG1FQUNJLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksU0FBSyxFQUFFO0FBQUVjLGNBQVEsRUFBRSxNQUFaO0FBQW9CQyxlQUFTLEVBQUUsUUFBL0I7QUFBeUNDLFdBQUssRUFBRTtBQUFoRCxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQURKLEVBSUksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxRQUFJLEVBQUMsSUFGVDtBQUdJLGVBQVcsRUFBQyxrQkFIaEI7QUFJSSxRQUFJLEVBQUMsS0FKVDtBQUtJLFNBQUssRUFBRXRCLEtBTFg7QUFNSSxZQUFRLEVBQUUsa0JBQUN1QixDQUFELEVBQU87QUFDYnRCLGNBQVEsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBRixDQUFTeEIsS0FBVixDQUFSOztBQUNBLFVBQUlBLEtBQUssQ0FBQ3lCLE1BQU4sR0FBZSxDQUFmLElBQW9CekIsS0FBSyxDQUFDeUIsTUFBTixHQUFlLEVBQXZDLEVBQTJDO0FBQ3ZDdEIsZ0JBQVEsQ0FBQyx5QkFBRCxDQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLGdCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0g7QUFDSixLQWJMO0FBY0ksYUFBUyxFQUFFRCxLQWRmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQWlCSSxNQUFDLG9EQUFELENBQU0sT0FBTixDQUFjLFFBQWQ7QUFBdUIsUUFBSSxFQUFDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsS0FETCxDQWpCSixDQURKLENBSkosQ0FKUixDQVhKLEVBOENJLE1BQUMscURBQUQsQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBa0IsYUFBUyxFQUFDLFNBQTVCO0FBQXNDLFdBQU8sRUFBRU0sU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBSUksTUFBQyxzREFBRDtBQUFRLFFBQUksRUFBQyxJQUFiO0FBQWtCLFdBQU8sRUFBRVgsS0FBSyxDQUFDNkIsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLENBOUNKLENBREo7QUF1REg7O0dBckZROUIsb0I7O0tBQUFBLG9CO0FBdUZNQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW4uanMuMGMyNzA4MTViYmEwODdmYjY1ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCBGb3JtLCBJbnB1dEdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCB7IGZhQ2xvc2VkQ2FwdGlvbmluZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmZ1bmN0aW9uIEFkZE5ld0ZpZWxkTmFtZU1vZGFsKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbc2hvd01lc3NhZ2UsIHNldFNob3dNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBZGQoKSB7XHJcbiAgICAgICAgaWYgKGVycm9yICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvY2F0ZWdvcmllcy9maWVsZC1yZXF1ZXN0JztcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXVxyXG4gICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IHByb3BzLnRva2VuIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1lvdXIgUmVxdWVzdCBTZW5kZWQgU3VjY2Vzc2Z1bGx5LCBZb3Ugd2lsbCBiZSBpbmZvcm1lZCBzb29uJylcclxuICAgICAgICAgICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnUmVxdWVzdCBGYWlsZWQnKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UodHJ1ZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ011c3QgYmUgMi0yMCBjaGFyYWN0ZXJzJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgTmV3IEZpZWxkXHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICB7c2hvd01lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbWVzc2FnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIFJlcXVlc3QgZm9yIEFkZGluZyBOZXcgRmllbGQgTmFtZSB3aWxsIGJlIHNlbmQgdG8gQWRtaW4sIEFkbWluIHdpbGwgQXBwcm92ZS9EaXNjYXJkIGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRmllbGQgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMiAmJiB2YWx1ZS5sZW5ndGggPCAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCdNdXN0IGJlIDItMjAgY2hhcmFjdGVycycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJtci1hdXRvXCIgb25DbGljaz17aGFuZGxlQWRkfT5cclxuICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNhbmNlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXdGaWVsZE5hbWVNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=