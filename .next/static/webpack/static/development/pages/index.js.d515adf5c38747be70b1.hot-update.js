webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/categories-slider.js":
/*!************************************************************!*\
  !*** ./src/pages/components/customer/categories-slider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var CategoriesSlider = function CategoriesSlider(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

_c = CategoriesSlider;
/* harmony default export */ __webpack_exports__["default"] = (CategoriesSlider);

var _c;

$RefreshReg$(_c, "CategoriesSlider");

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

/***/ }),

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
/* harmony import */ var _components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/customer/slider-carousel */ "./src/pages/components/customer/slider-carousel.js");
/* harmony import */ var _components_customer_categories_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customer/categories-slider */ "./src/pages/components/customer/categories-slider.js");









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
      }, __jsx(_components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_19__["default"], {
        categories_list: this.state.categories_list,
        sub_categories_list: this.state.sub_categories_list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      }), __jsx(_components_customer_categories_slider__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9jYXRlZ29yaWVzLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2F0ZWdvcmllc1NsaWRlciIsInByb3BzIiwiYW5pbWF0aW9uIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicG9zaXRpb24iLCJsZWZ0IiwiYm90dG9tIiwiekluZGV4IiwiSW5maW5pdHkiLCJJbmRleCIsInJlbW92ZVRva2VuRnJvbVN0b3JhZ2UiLCJzZXRTdGF0ZSIsImp3dF90b2tlbiIsIlJvdXRlciIsInJlbG9hZCIsInJlcGxhY2UiLCJhbGVydCIsInN0YXRlIiwidG9rZW4iLCJjYXRlZ29yaWVzX2xpc3QiLCJzdWJfY2F0ZWdvcmllc19saXN0IiwiZ2V0RGVjb2RlZFRva2VuRnJvbVN0b3JhZ2UiLCJyb2xlIiwidXJsIiwiTXVoYWxpa0NvbmZpZyIsIlBBVEgiLCJjdXJyZW50Q29tcG9uZW50IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0ZWdvcnkiLCJkb2NzIiwic3ViX2NhdGVnb3J5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiYm9keSIsImxvZ291dCIsIkNvbXBvbmVudCIsIkdsb2JhbFN0eWxlU2hlZXQiLCJib2R5X2NvbG9yIiwidG9wIiwicmlnaHQiLCJtaW5IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUVoQyxTQUNJLGtFQURKO0FBS0gsQ0FQRDs7S0FBTUQsZ0I7QUFTU0EsK0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZGV4LmpzLmQ1MTVhZGY1YzM4NzQ3YmU3MGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgQ2F0ZWdvcmllc1NsaWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXNTbGlkZXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXIvbGF5b3V0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbkZyb21TdG9yYWdlLCByZW1vdmVUb2tlbkZyb21TdG9yYWdlLCBnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgVHlwaWNhbCBmcm9tICdyZWFjdC10eXBpY2FsJ1xyXG5pbXBvcnQgU2xpZGVyQ2Fyb3VzZWwgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL3NsaWRlci1jYXJvdXNlbCdcclxuaW1wb3J0IENhdGVnb3JpZXNTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL2NhdGVnb3JpZXMtc2xpZGVyJ1xyXG5cclxubGV0IGFuaW1hdGlvbiA9XHJcbiAgICA8aDMgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2dyZWVuJywgY29sb3I6ICd3aGl0ZScsIHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAnMSUnLCBib3R0b206ICcxJScsIHpJbmRleDogMTAwMCB9fT5cclxuICAgICAgICA8VHlwaWNhbFxyXG4gICAgICAgICAgICBzdGVwcz17WydUaGlzIHdlYnNpdGUgaXMgdW5kZXIgZGV2ZWxvcG1lbnQnLCAxMDAwLFxyXG4gICAgICAgICAgICAgICAgJ0NvbW1pbmcgU29vbi4uLiEnLCAxMDAwLFxyXG4gICAgICAgICAgICAgICAgJ0JlIFJlYWR5IHRvIFNob3Agb25saW5lLi4uJywgMTAwMF19XHJcbiAgICAgICAgICAgIGxvb3A9e0luZmluaXR5fVxyXG4gICAgICAgICAgICB3cmFwcGVyPVwicFwiXHJcbiAgICAgICAgLz5cclxuICAgIDwvaDM+XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgICAgIGp3dF90b2tlbjogJycsXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q6IFtdLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldERlY29kZWRUb2tlbkZyb21TdG9yYWdlKClcclxuICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGp3dF90b2tlbjogdG9rZW4ucm9sZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMnO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0OiByZXNwb25zZS5kYXRhLmNhdGVnb3J5LmRvY3MsXHJcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiByZXNwb25zZS5kYXRhLnN1Yl9jYXRlZ29yeS5kb2NzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZXJvcmllcyBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqd3RfdG9rZW46ICcnIH0pXHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZWxvYWQoJy9pbmRleCcpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2luZGV4Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0xvZ291dCBGYWlsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk11aGFsaWs8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xLCB1c2VyLXNjYWxhYmxlPW5vXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAge2FuaW1hdGlvbn1cclxuICAgICAgICAgICAgICAgIDxMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbj17dGhpcy5zdGF0ZS5qd3RfdG9rZW59XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0PXt0aGlzLmxvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0PXt0aGlzLnN0YXRlLmNhdGVnb3JpZXNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5zdWJfY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpZXNTbGlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==