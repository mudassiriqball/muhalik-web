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
/* harmony import */ var _components_customer_category_row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/customer/category-row */ "./src/pages/components/customer/category-row.js");









var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var animation = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], {
  className: "justify-content-md-center",
  style: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '83vh'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
  lg: "auto",
  md: "auto",
  sm: "auto",
  xs: "auto",
  style: {
    background: '#46d267',
    padding: '5%'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, __jsx(react_typical__WEBPACK_IMPORTED_MODULE_18__["default"], {
  steps: ['This website is under development', 1000, 'Comming Soon...!', 1000, 'Be Ready to Shop online...', 1000],
  loop: Infinity,
  wrapper: "p",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }
})))));

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
          lineNumber: 74,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }, "Muhalik"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }), __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
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
          lineNumber: 79,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }
      })), __jsx(_components_customer_layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        token: this.state.jwt_token,
        logout: this.logout,
        categories_list: this.state.categories_list,
        sub_categories_list: this.state.sub_categories_list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, __jsx(_components_customer_main_carousel__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }
      }), animation));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var styles = {
  body: {
    background: '#f1f3f4',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIkluZmluaXR5IiwiSW5kZXgiLCJwcm9wcyIsInJlbW92ZVRva2VuRnJvbVN0b3JhZ2UiLCJzZXRTdGF0ZSIsImp3dF90b2tlbiIsIlJvdXRlciIsInJlbG9hZCIsInJlcGxhY2UiLCJhbGVydCIsInN0YXRlIiwidG9rZW4iLCJjYXRlZ29yaWVzX2xpc3QiLCJzdWJfY2F0ZWdvcmllc19saXN0IiwiZ2V0RGVjb2RlZFRva2VuRnJvbVN0b3JhZ2UiLCJyb2xlIiwidXJsIiwiTXVoYWxpa0NvbmZpZyIsIlBBVEgiLCJjdXJyZW50Q29tcG9uZW50IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0ZWdvcnkiLCJkb2NzIiwic3ViX2NhdGVnb3J5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiYm9keSIsImxvZ291dCIsIkNvbXBvbmVudCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsU0FBUyxHQUNULE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJLE1BQUMsb0RBQUQ7QUFBSyxXQUFTLEVBQUMsMkJBQWY7QUFBMkMsT0FBSyxFQUFFO0FBQUVDLFdBQU8sRUFBRSxNQUFYO0FBQW1CQyxjQUFVLEVBQUUsUUFBL0I7QUFBeUNDLGFBQVMsRUFBRTtBQUFwRCxHQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyxvREFBRDtBQUFLLElBQUUsRUFBQyxNQUFSO0FBQWUsSUFBRSxFQUFDLE1BQWxCO0FBQXlCLElBQUUsRUFBQyxNQUE1QjtBQUFtQyxJQUFFLEVBQUMsTUFBdEM7QUFBNkMsT0FBSyxFQUFFO0FBQUVDLGNBQVUsRUFBRSxTQUFkO0FBQXlCQyxXQUFPLEVBQUU7QUFBbEMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSSxNQUFDLHNEQUFEO0FBQ0ksT0FBSyxFQUFFLENBQUMsbUNBQUQsRUFBc0MsSUFBdEMsRUFDSCxrQkFERyxFQUNpQixJQURqQixFQUVILDRCQUZHLEVBRTJCLElBRjNCLENBRFg7QUFJSSxNQUFJLEVBQUVDLFFBSlY7QUFLSSxTQUFPLEVBQUMsR0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosQ0FESixDQURKLENBREosQ0FESjs7SUFpQk1DLEs7Ozs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxpTkE0QlYsWUFBTTtBQUNYLFVBQUlDLGdHQUFzQixFQUExQixFQUE4QjtBQUMxQixjQUFLQyxRQUFMLENBQWM7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQWQsRUFEMEIsQ0FFMUI7OztBQUNBQywyREFBTSxDQUFDQyxNQUFQLENBQWMsUUFBZDtBQUNBRCwyREFBTSxDQUFDRSxPQUFQLENBQWUsUUFBZjtBQUNILE9BTEQsTUFLTztBQUNIQyxhQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0g7QUFDSixLQXJDa0I7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxFQURFO0FBRVROLGVBQVMsRUFBRSxFQUZGO0FBSVRPLHFCQUFlLEVBQUUsRUFKUjtBQUtUQyx5QkFBbUIsRUFBRTtBQUxaLEtBQWI7QUFGZTtBQVNsQjs7Ozs7Ozs7Ozs7O3VCQUd1QkMsb0dBQTBCLEU7OztBQUF4Q0gscUI7O0FBQ04sb0JBQUlBLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2hCLHVCQUFLUCxRQUFMLENBQWM7QUFBRUMsNkJBQVMsRUFBRU0sS0FBSyxDQUFDSTtBQUFuQixtQkFBZDtBQUNIOztBQUNLQyxtQixHQUFNQyw0REFBYSxDQUFDQyxJQUFkLEdBQXFCLDRCO0FBQzNCQyxnQyxHQUFtQixJOzt1QkFDbkJDLDZDQUFLLENBQUNDLEdBQU4sQ0FBVUwsR0FBVixFQUFlTSxJQUFmLENBQW9CLFVBQUNDLFFBQUQsRUFBYztBQUNwQ0osa0NBQWdCLENBQUNmLFFBQWpCLENBQTBCO0FBQ3RCUSxtQ0FBZSxFQUFFVyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsUUFBZCxDQUF1QkMsSUFEbEI7QUFFdEJiLHVDQUFtQixFQUFFVSxRQUFRLENBQUNDLElBQVQsQ0FBY0csWUFBZCxDQUEyQkQ7QUFGMUIsbUJBQTFCO0FBSUgsaUJBTEssV0FLRyxVQUFDRSxLQUFELEVBQVc7QUFDaEJDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0YsS0FBMUM7QUFDSCxpQkFQSyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBcUJEO0FBQ0wsYUFDSTtBQUFLLGFBQUssRUFBRUcsTUFBTSxDQUFDQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDLHdFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFHSTtBQUFNLGVBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFISixFQUlJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFDSSxZQUFJLEVBQUMsdUVBRFQ7QUFFSSxpQkFBUyxFQUFDLHlFQUZkO0FBR0ksbUJBQVcsRUFBQyxXQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkosRUFTSTtBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQyxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEosQ0FESixFQVlJLE1BQUMsb0VBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS3RCLEtBQUwsQ0FBV0wsU0FEdEI7QUFFSSxjQUFNLEVBQUUsS0FBSzRCLE1BRmpCO0FBR0ksdUJBQWUsRUFBRSxLQUFLdkIsS0FBTCxDQUFXRSxlQUhoQztBQUlJLDJCQUFtQixFQUFFLEtBQUtGLEtBQUwsQ0FBV0csbUJBSnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNSSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFOSixFQU9LbkIsU0FQTCxDQVpKLENBREo7QUF5Qkg7Ozs7RUFsRWV3QywrQzs7QUFxRXBCLElBQU1ILE1BQU0sR0FBRztBQUNYQyxNQUFJLEVBQUU7QUFDRmxDLGNBQVUsRUFBRSxTQURWO0FBRUZxQyxZQUFRLEVBQUUsVUFGUjtBQUdGQyxPQUFHLEVBQUUsR0FISDtBQUlGQyxRQUFJLEVBQUUsR0FKSjtBQUtGQyxTQUFLLEVBQUUsR0FMTDtBQU1GekMsYUFBUyxFQUFFO0FBTlQ7QUFESyxDQUFmO0FBVWVJLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lNzVhNDNlNWRiZmI3M2M5ZjE4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL2xheW91dCdcclxuaW1wb3J0IHsgZ2V0VG9rZW5Gcm9tU3RvcmFnZSwgcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSwgZ2V0RGVjb2RlZFRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IFR5cGljYWwgZnJvbSAncmVhY3QtdHlwaWNhbCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBDYXJvdXNlbERpdiBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXIvbWFpbi1jYXJvdXNlbCdcclxuaW1wb3J0IENhdGVnb3J5Um93IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci9jYXRlZ29yeS1yb3cnXHJcblxyXG5sZXQgYW5pbWF0aW9uID1cclxuICAgIDxDb250YWluZXIgPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1pbkhlaWdodDogJzgzdmgnIH19PlxyXG4gICAgICAgICAgICA8Q29sIGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjNDZkMjY3JywgcGFkZGluZzogJzUlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHM9e1snVGhpcyB3ZWJzaXRlIGlzIHVuZGVyIGRldmVsb3BtZW50JywgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb21taW5nIFNvb24uLi4hJywgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdCZSBSZWFkeSB0byBTaG9wIG9ubGluZS4uLicsIDEwMDBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wPXtJbmZpbml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcj1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9rZW46ICcnLFxyXG4gICAgICAgICAgICBqd3RfdG9rZW46ICcnLFxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0OiBbXSxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSgpXHJcbiAgICAgICAgaWYgKHRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqd3RfdG9rZW46IHRva2VuLnJvbGUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvY2F0ZWdvcmllcy9jYXRlZ29yaWVzJztcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdDogcmVzcG9uc2UuZGF0YS5jYXRlZ29yeS5kb2NzLFxyXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogcmVzcG9uc2UuZGF0YS5zdWJfY2F0ZWdvcnkuZG9jc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhdGVyb3JpZXMgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgand0X3Rva2VuOiAnJyB9KVxyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVsb2FkKCcvaW5kZXgnKTtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9pbmRleCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdMb2dvdXQgRmFpbGVkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NdWhhbGlrPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1wiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIlwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbj17dGhpcy5zdGF0ZS5qd3RfdG9rZW59XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0PXt0aGlzLmxvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxEaXYgLz5cclxuICAgICAgICAgICAgICAgICAgICB7YW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmMWYzZjQnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==