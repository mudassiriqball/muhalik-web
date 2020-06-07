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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_customer_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/customer/layout */ "./src/pages/components/customer/layout.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-typical */ "./node_modules/react-typical/dist/index.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_customer_main_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customer/main-carousel */ "./src/pages/components/customer/main-carousel.js");









var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var animation = __jsx("h5", {
  style: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 1000
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(react_typical__WEBPACK_IMPORTED_MODULE_18__["default"], {
  steps: ['This website is under development', 1000, 'Comming Soon...!', 1000, 'Be Ready to Shop online...', 1000],
  loop: Infinity,
  wrapper: "p",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
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
      if (Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_15__["removeTokenFromStorage"])()) {
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
                return Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_15__["getDecodedTokenFromStorage"])();

              case 2:
                token = _context.sent;

                if (token !== null) {
                  this.setState({
                    jwt_token: token.role
                  });
                }

                url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_17__["default"].PATH + '/api/categories/categories';
                currentComponent = this;
                _context.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get(url).then(function (response) {
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
      return __jsx("div", {
        style: styles.body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }
      }, "Muhalik"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }), __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
        integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      })), animation, __jsx(_components_customer_layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        token: this.state.jwt_token,
        logout: this.logout,
        categories_list: this.state.categories_list,
        sub_categories_list: this.state.sub_categories_list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, __jsx(_components_customer_main_carousel__WEBPACK_IMPORTED_MODULE_20__["default"], {
        categories_list: this.state.categories_list,
        sub_categories_list: this.state.sub_categories_list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var styles = {
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_16__["default"].body_color),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uIiwicG9zaXRpb24iLCJsZWZ0IiwiYm90dG9tIiwiekluZGV4IiwiSW5maW5pdHkiLCJJbmRleCIsInByb3BzIiwicmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSIsInNldFN0YXRlIiwiand0X3Rva2VuIiwiUm91dGVyIiwicmVsb2FkIiwicmVwbGFjZSIsImFsZXJ0Iiwic3RhdGUiLCJ0b2tlbiIsImNhdGVnb3JpZXNfbGlzdCIsInN1Yl9jYXRlZ29yaWVzX2xpc3QiLCJnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSIsInJvbGUiLCJ1cmwiLCJNdWhhbGlrQ29uZmlnIiwiUEFUSCIsImN1cnJlbnRDb21wb25lbnQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRlZ29yeSIsImRvY3MiLCJzdWJfY2F0ZWdvcnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJib2R5IiwibG9nb3V0IiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZCIsIkdsb2JhbFN0eWxlU2hlZXQiLCJib2R5X2NvbG9yIiwidG9wIiwicmlnaHQiLCJtaW5IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxTQUFTLEdBQ1Q7QUFBSSxPQUFLLEVBQUU7QUFBRUMsWUFBUSxFQUFFLFVBQVo7QUFBd0JDLFFBQUksRUFBRSxDQUE5QjtBQUFpQ0MsVUFBTSxFQUFFLENBQXpDO0FBQTRDQyxVQUFNLEVBQUU7QUFBcEQsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyxzREFBRDtBQUNJLE9BQUssRUFBRSxDQUFD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LENBQVdFLGVBSGhDO0FBSUksMkJBQW1CLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxtQkFKcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1JLE1BQUMsMkVBQUQ7QUFDSSx1QkFBZSxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsZUFEaEM7QUFFSSwyQkFBbUIsRUFBRSxLQUFLRixLQUFMLENBQVdHLG1CQUZwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkosQ0FiSixDQURKO0FBNEJIOzs7O0VBckVlcUIsK0M7O0FBd0VwQixJQUFNSCxNQUFNLEdBQUc7QUFDWEMsTUFBSSxFQUFFO0FBQ0ZHLGNBQVUsWUFBS0Msb0RBQWdCLENBQUNDLFVBQXRCLENBRFI7QUFFRnpDLFlBQVEsRUFBRSxVQUZSO0FBR0YwQyxPQUFHLEVBQUUsR0FISDtBQUlGekMsUUFBSSxFQUFFLEdBSko7QUFLRjBDLFNBQUssRUFBRSxHQUxMO0FBTUZDLGFBQVMsRUFBRTtBQU5UO0FBREssQ0FBZjtBQVVldkMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM4Nzg5MTY2NmY2NDZiOWY0OGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXIvbGF5b3V0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbkZyb21TdG9yYWdlLCByZW1vdmVUb2tlbkZyb21TdG9yYWdlLCBnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgVHlwaWNhbCBmcm9tICdyZWFjdC10eXBpY2FsJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IENhcm91c2VsRGl2IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci9tYWluLWNhcm91c2VsJ1xyXG5cclxubGV0IGFuaW1hdGlvbiA9XHJcbiAgICA8aDUgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIGJvdHRvbTogMCwgekluZGV4OiAxMDAwIH19PlxyXG4gICAgICAgIDxUeXBpY2FsXHJcbiAgICAgICAgICAgIHN0ZXBzPXtbJ1RoaXMgd2Vic2l0ZSBpcyB1bmRlciBkZXZlbG9wbWVudCcsIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAnQ29tbWluZyBTb29uLi4uIScsIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAnQmUgUmVhZHkgdG8gU2hvcCBvbmxpbmUuLi4nLCAxMDAwXX1cclxuICAgICAgICAgICAgbG9vcD17SW5maW5pdHl9XHJcbiAgICAgICAgICAgIHdyYXBwZXI9XCJwXCJcclxuICAgICAgICAvPlxyXG4gICAgPC9oNT5cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgICAgand0X3Rva2VuOiAnJyxcclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdDogW10sXHJcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzX2xpc3Q6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0RGVjb2RlZFRva2VuRnJvbVN0b3JhZ2UoKVxyXG4gICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgand0X3Rva2VuOiB0b2tlbi5yb2xlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvY2F0ZWdvcmllcyc7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IHRoaXM7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q6IHJlc3BvbnNlLmRhdGEuY2F0ZWdvcnkuZG9jcyxcclxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzX2xpc3Q6IHJlc3BvbnNlLmRhdGEuc3ViX2NhdGVnb3J5LmRvY3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXRlcm9yaWVzIEZldGNoaWcgRXJyb3I6ICcsIGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZW1vdmVUb2tlbkZyb21TdG9yYWdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGp3dF90b2tlbjogJycgfSlcclxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgUm91dGVyLnJlbG9hZCgnL2luZGV4Jyk7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvaW5kZXgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnTG9nb3V0IEZhaWxlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TXVoYWxpazwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm9cIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICB7YW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgPExheW91dFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuPXt0aGlzLnN0YXRlLmp3dF90b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICBsb2dvdXQ9e3RoaXMubG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5zdWJfY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbERpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0PXt0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==