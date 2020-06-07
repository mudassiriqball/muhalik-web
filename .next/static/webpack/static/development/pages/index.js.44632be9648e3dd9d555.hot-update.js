webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_customer_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/customer/layout */ "./src/pages/components/customer/layout.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-typical */ "./node_modules/react-typical/dist/index.es.js");
/* harmony import */ var _components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/customer/slider-carousel */ "./src/pages/components/customer/slider-carousel.js");
/* harmony import */ var _components_customer_categories_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/customer/categories-slider */ "./src/pages/components/customer/categories-slider.js");
/* harmony import */ var _components_customer_products__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customer/products */ "./src/pages/components/customer/products.js");









var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var animation = __jsx("h3", {
  style: {
    background: 'green',
    color: 'white',
    position: 'fixed',
    left: '1%',
    bottom: '1%',
    zIndex: 1000
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx(react_typical__WEBPACK_IMPORTED_MODULE_17__["default"], {
  steps: ['This website is under development', 1000, 'Comming Soon...!', 1000, 'Be Ready to Shop online...', 1000],
  loop: Infinity,
  wrapper: "p",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}));

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "logout", function () {
      if (Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__["removeTokenFromStorage"])()) {
        _this.setState({
          jwt_token: ''
        }); // window.location.reload(true);


        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.reload('/index');
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace('/index');
      } else {
        alert('Logout Failed');
      }
    });

    _this.state = {
      token: '',
      jwt_token: '',
      categories_list: [],
      sub_categories_list: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var token, url, currentComponent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__["getDecodedTokenFromStorage"])();

              case 2:
                token = _context.sent;

                if (token !== null) {
                  this.setState({
                    jwt_token: token.role
                  });
                }

                url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_16__["default"].PATH + '/api/categories/categories';
                currentComponent = this;
                _context.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(url).then(function (response) {
                  currentComponent.setState({
                    categories_list: response.data.category.docs,
                    sub_categories_list: response.data.sub_category.docs
                  });
                })["catch"](function (error) {
                  console.log('Caterories Fetchig Error: ', error);
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
        style: styles.body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }
      }, "Muhalik"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }), __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
        integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      })), animation, __jsx(_components_customer_layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        token: this.state.jwt_token,
        logout: this.logout,
        categories_list: this.state.categories_list,
        sub_categories_list: this.state.sub_categories_list,
        carosuel: __jsx(_components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 35
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      }, __jsx(_components_customer_categories_slider__WEBPACK_IMPORTED_MODULE_19__["default"], {
        categories_list: this.state.categories_list,
        sub_categories_list: this.state.sub_categories_list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }
      }), __jsx(_components_customer_products__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var styles = {
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color),
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    minHeight: '100vh'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicG9zaXRpb24iLCJsZWZ0IiwiYm90dG9tIiwiekluZGV4IiwiSW5maW5pdHkiLCJJbmRleCIsInByb3BzIiwicmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSIsInNldFN0YXRlIiwiand0X3Rva2VuIiwiUm91dGVyIiwicmVsb2FkIiwicmVwbGFjZSIsImFsZXJ0Iiwic3RhdGUiLCJ0b2tlbiIsImNhdGVnb3JpZXNfbGlzdCIsInN1Yl9jYXRlZ29yaWVzX2xpc3QiLCJnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSIsInJvbGUiLCJ1cmwiLCJNdWhhbGlrQ29uZmlnIiwiUEFUSCIsImN1cnJlbnRDb21wb25lbnQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRlZ29yeSIsImRvY3MiLCJzdWJfY2F0ZWdvcnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJib2R5IiwibG9nb3V0IiwiQ29tcG9uZW50IiwiR2xvYmFsU3R5bGVTaGVldCIsImJvZHlfY29sb3IiLCJ0b3AiLCJyaWdodCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBSUEsU0FBUyxHQUNUO0FBQUksT0FBSyxFQUFFO0FBQUVDLGNBQVUsRUFBRSxPQUFkO0FBQXVCQyxTQUFLLEVBQUUsT0FBOUI7QUFBdUNDLFlBQVEsRUFBRSxPQUFqRDtBQUEwREMsUUFBSSxFQUFFLElBQWhFO0FBQXNFQyxVQUFNLEVBQUUsSUFBOUU7QUFBb0ZDLFVBQU0sRUFBRTtBQUE1RixHQUFYO0FBQUE7QUFBQTtBQUFBO0FB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QUR0QjtBQUVJLGNBQU0sRUFBRSxLQUFLNEIsTUFGakI7QUFHSSx1QkFBZSxFQUFFLEtBQUt2QixLQUFMLENBQVdFLGVBSGhDO0FBSUksMkJBQW1CLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxtQkFKcEM7QUFLSSxnQkFBUSxFQUFFLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPSSxNQUFDLCtFQUFEO0FBQWtCLHVCQUFlLEVBQUUsS0FBS0gsS0FBTCxDQUFXRSxlQUE5QztBQUErRCwyQkFBbUIsRUFBRSxLQUFLRixLQUFMLENBQVdHLG1CQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEosRUFRSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSixDQWJKLENBREosQ0FESjtBQTRCSDs7OztFQXJFZXFCLCtDOztBQXdFcEIsSUFBTUgsTUFBTSxHQUFHO0FBQ1hDLE1BQUksRUFBRTtBQUNGdEMsY0FBVSxZQUFLeUMsb0RBQWdCLENBQUNDLFVBQXRCLENBRFI7QUFFRnhDLFlBQVEsRUFBRSxVQUZSO0FBR0Z5QyxPQUFHLEVBQUUsR0FISDtBQUlGeEMsUUFBSSxFQUFFLEdBSko7QUFLRnlDLFNBQUssRUFBRSxHQUxMO0FBTUZDLGFBQVMsRUFBRTtBQU5UO0FBREssQ0FBZjtBQVVldEMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ0NjMyYmU5NjQ4ZTNkZDlkNTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXIvbGF5b3V0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbkZyb21TdG9yYWdlLCByZW1vdmVUb2tlbkZyb21TdG9yYWdlLCBnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgVHlwaWNhbCBmcm9tICdyZWFjdC10eXBpY2FsJ1xyXG5pbXBvcnQgU2xpZGVyQ2Fyb3VzZWwgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL3NsaWRlci1jYXJvdXNlbCdcclxuaW1wb3J0IENhdGVnb3JpZXNTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL2NhdGVnb3JpZXMtc2xpZGVyJ1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL3Byb2R1Y3RzJ1xyXG5cclxuXHJcbmxldCBhbmltYXRpb24gPVxyXG4gICAgPGgzIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdncmVlbicsIGNvbG9yOiAnd2hpdGUnLCBwb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogJzElJywgYm90dG9tOiAnMSUnLCB6SW5kZXg6IDEwMDAgfX0+XHJcbiAgICAgICAgPFR5cGljYWxcclxuICAgICAgICAgICAgc3RlcHM9e1snVGhpcyB3ZWJzaXRlIGlzIHVuZGVyIGRldmVsb3BtZW50JywgMTAwMCxcclxuICAgICAgICAgICAgICAgICdDb21taW5nIFNvb24uLi4hJywgMTAwMCxcclxuICAgICAgICAgICAgICAgICdCZSBSZWFkeSB0byBTaG9wIG9ubGluZS4uLicsIDEwMDBdfVxyXG4gICAgICAgICAgICBsb29wPXtJbmZpbml0eX1cclxuICAgICAgICAgICAgd3JhcHBlcj1cInBcIlxyXG4gICAgICAgIC8+XHJcbiAgICA8L2gzPlxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9rZW46ICcnLFxyXG4gICAgICAgICAgICBqd3RfdG9rZW46ICcnLFxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0OiBbXSxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSgpXHJcbiAgICAgICAgaWYgKHRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqd3RfdG9rZW46IHRva2VuLnJvbGUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvY2F0ZWdvcmllcy9jYXRlZ29yaWVzJztcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdDogcmVzcG9uc2UuZGF0YS5jYXRlZ29yeS5kb2NzLFxyXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogcmVzcG9uc2UuZGF0YS5zdWJfY2F0ZWdvcnkuZG9jc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhdGVyb3JpZXMgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgand0X3Rva2VuOiAnJyB9KVxyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVsb2FkKCcvaW5kZXgnKTtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9pbmRleCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdMb2dvdXQgRmFpbGVkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NdWhhbGlrPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm9cIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICB7YW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW49e3RoaXMuc3RhdGUuand0X3Rva2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQ9e3RoaXMubG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0PXt0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcm9zdWVsPXs8U2xpZGVyQ2Fyb3VzZWwgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcmllc1NsaWRlciBjYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuY2F0ZWdvcmllc19saXN0fSBzdWJfY2F0ZWdvcmllc19saXN0PXt0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yaWVzX2xpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgcmlnaHQ6ICcwJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=