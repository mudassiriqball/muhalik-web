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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      message = _React$useState6[0],
      setMessage = _React$useState6[1];

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
              })["catch"](function (error) {
                setMessage('Request Failed');
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
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Add New Field")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Your Request for Adding New Field Name will be send to Admin, Admin will Approve/Discard it."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Field Name",
    name: "sku",
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);

      if (value.length <= 2 || value.length >= 21) {
        setError('Must be 3-20 characters');
      } else {
        setError("");
      }
    },
    isInvalid: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, error))), message ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, message) : null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "sm",
    className: "mr-auto",
    onClick: handleAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Add"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "sm",
    onClick: props.onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Cancel")));
}

_s(AddNewFieldNameModal, "xd07Z529czfNifU5dtzXG1ERg/g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy92ZW5kb3IvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250ZW50cy9wcm9kdWN0LWNvbnRlbnRzL2FkZC1uZXctY29udGVudHMvYWRkLW5ldy1maWVsZC1uYW1lLW1vZGVsLmpzIl0sIm5hbWVzIjpbIkFkZE5ld0ZpZWxkTmFtZU1vZGFsIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImVycm9yIiwic2V0RXJyb3IiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZUFkZCIsInVybCIsIk11aGFsaWtDb25maWciLCJQQVRIIiwiZGF0YSIsImxhYmVsIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFBQSx3QkFDUEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FETztBQUFBO0FBQUEsTUFDMUJDLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUFBLHlCQUVQSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZPO0FBQUE7QUFBQSxNQUUxQkcsS0FGMEI7QUFBQSxNQUVuQkMsUUFGbUI7O0FBQUEseUJBR0hMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSEc7QUFBQTtBQUFBLE1BRzFCSyxPQUgwQjtBQUFBLE1BR2pCQyxVQUhpQjs7QUFBQSxXQUtsQkMsU0FMa0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BS2pDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNR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SyxFQUFFO0FBQUVjLGNBQVEsRUFBRSxNQUFaO0FBQW9CQyxlQUFTLEVBQUUsUUFBL0I7QUFBeUNDLFdBQUssRUFBRTtBQUFoRCxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThFaEIsT0FBOUUsQ0FESSxHQUdKLElBOUJSLENBWEosRUE0Q0ksTUFBQyxxREFBRCxDQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsSUFBYjtBQUFrQixhQUFTLEVBQUMsU0FBNUI7QUFBc0MsV0FBTyxFQUFFRSxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFJSSxNQUFDLHNEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBa0IsV0FBTyxFQUFFVCxLQUFLLENBQUMyQixNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosQ0E1Q0osQ0FESjtBQXFESDs7R0FoRlE1QixvQjs7S0FBQUEsb0I7QUFrRk1BLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcy43ODBjZGM4ZGNiYmUyOTVhMDUyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwsIEZvcm0sIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IHsgZmFDbG9zZWRDYXB0aW9uaW5nIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuZnVuY3Rpb24gQWRkTmV3RmllbGROYW1lTW9kYWwocHJvcHMpIHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQWRkKCkge1xyXG4gICAgICAgIGlmIChlcnJvciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvZmllbGQtcmVxdWVzdCc7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gW11cclxuICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBwcm9wcy50b2tlbiB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCdZb3VyIFJlcXVlc3QgU2VuZGVkIFN1Y2Nlc3NmdWxseSwgWW91IHdpbGwgYmUgaW5mb3JtZWQgc29vbicpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnUmVxdWVzdCBGYWlsZWQnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignTXVzdCBiZSAyLTIwIGNoYXJhY3RlcnMnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcclxuICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgRmllbGRcclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91ciBSZXF1ZXN0IGZvciBBZGRpbmcgTmV3IEZpZWxkIE5hbWUgd2lsbCBiZSBzZW5kIHRvIEFkbWluLCBBZG1pbiB3aWxsIEFwcHJvdmUvRGlzY2FyZCBpdC5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBGaWVsZCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSAyIHx8IHZhbHVlLmxlbmd0aCA+PSAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignTXVzdCBiZSAzLTIwIGNoYXJhY3RlcnMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScgfX0+e21lc3NhZ2V9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibXItYXV0b1wiIG9uQ2xpY2s9e2hhbmRsZUFkZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17cHJvcHMub25IaWRlfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3RmllbGROYW1lTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9