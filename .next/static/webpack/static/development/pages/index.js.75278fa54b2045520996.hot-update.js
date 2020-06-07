webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/main-carousel.js":
false,

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
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");


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
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 29,
      columnNumber: 13
    }
  }, images && images.map(function (element, i) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx("img", {
      style: {
        maxHeight: '400px'
      },
      className: "d-block w-100",
      src: element.img,
      alt: "Slide {i}",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, "Slide ", index + 1, " label"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customer/slider-carousel */ "./src/pages/components/customer/slider-carousel.js");









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
      }, __jsx(_components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9zbGlkZXItY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImltYWdlcyIsImltZyIsIlNsaWRlckNhcm91c2VsIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJlIiwibWFwIiwiZWxlbWVudCIsImkiLCJtYXhIZWlnaHQiLCJzdHlsZXMiLCJhbmltYXRpb24iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJib3R0b20iLCJ6SW5kZXgiLCJJbmZpbml0eSIsIkluZGV4IiwicmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSIsInNldFN0YXRlIiwiand0X3Rva2VuIiwiUm91dGVyIiwicmVsb2FkIiwicmVwbGFjZSIsImFsZXJ0Iiwic3RhdGUiLCJ0b2tlbiIsImNhdGVnb3JpZXNfbGlzdCIsInN1Yl9jYXRlZ29yaWVzX2xpc3QiLCJnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSIsInJvbGUiLCJ1cmwiLCJNdWhhbGlrQ29uZmlnIiwiUEFUSCIsImN1cnJlbnRDb21wb25lbnQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRlZ29yeSIsImRvY3MiLCJzdWJfY2F0ZWdvcnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibG9nb3V0IiwiQ29tcG9uZW50IiwiR2xvYmFsU3R5bGVTaGVldCIsImJvZHlfY29sb3IiLCJ0b3AiLCJyaWdodCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNYO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBRFcs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QUFXRyxtQkFGcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5KLENBYkosQ0FESjtBQTRCSDs7OztFQXJFZW9CLCtDOztBQXdFcEIsSUFBTXhDLE1BQU0sR0FBRztBQUNYc0MsTUFBSSxFQUFFO0FBQ0ZwQyxjQUFVLFlBQUt1QyxvREFBZ0IsQ0FBQ0MsVUFBdEIsQ0FEUjtBQUVGdEMsWUFBUSxFQUFFLFVBRlI7QUFHRnVDLE9BQUcsRUFBRSxHQUhIO0FBSUZ0QyxRQUFJLEVBQUUsR0FKSjtBQUtGdUMsU0FBSyxFQUFFLEdBTEw7QUFNRkMsYUFBUyxFQUFFO0FBTlQ7QUFESyxDQUFmO0FBVWVwQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzUyNzhmYTU0YjIwNDU1MjA5OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsLCBDb2wsIFJvdywgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFTZWFyY2gsIGZhVXNlclBsdXMsIGZhTGFuZ3VhZ2UsIGZhUG93ZXJPZmYsIGZhVXNlcixcclxuICAgIGZhQ2FydFBsdXMsIGZhSGFuZHNIZWxwaW5nLCBmYVBlbiwgZmFTaWduT3V0QWx0LCBmYUdsb2JlLFxyXG4gICAgZmFMdWdnYWdlQ2FydCwgZmFGaWxlSW52b2ljZURvbGxhciwgZmFMaXN0QWx0LCBmYUVkaXQsXHJcbiAgICBmYVN0b3JlQWx0LCBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodCwgZmFMaXN0VWwsIGZhU2hvcHBpbmdDYXJ0LCBmYVNpZ25MYW5ndWFnZVxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzEuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcyLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMy5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzQuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdoYXNzYW4uanBnJyB9XHJcbl1cclxuXHJcbmNvbnN0IFNsaWRlckNhcm91c2VsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGNsYXNzTmFtZT0ndy0xMDAgYmctd2hpdGUnIG5vR3V0dGVycyA+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IGluZGljYXRvcnM9e2ZhbHNlfSBpbnRlcnZhbD0nMTUwMCc+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoKGVsZW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnNDAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1NsaWRlIHtpfSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2xpZGUge2luZGV4ICsgMX0gbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJDYXJvdXNlbCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci9sYXlvdXQnXHJcbmltcG9ydCB7IGdldFRva2VuRnJvbVN0b3JhZ2UsIHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UsIGdldERlY29kZWRUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBUeXBpY2FsIGZyb20gJ3JlYWN0LXR5cGljYWwnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgU2xpZGVyQ2Fyb3VzZWwgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL3NsaWRlci1jYXJvdXNlbCdcclxuXHJcbmxldCBhbmltYXRpb24gPVxyXG4gICAgPGgzIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdncmVlbicsIGNvbG9yOiAnd2hpdGUnLCBwb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogJzElJywgYm90dG9tOiAnMSUnLCB6SW5kZXg6IDEwMDAgfX0+XHJcbiAgICAgICAgPFR5cGljYWxcclxuICAgICAgICAgICAgc3RlcHM9e1snVGhpcyB3ZWJzaXRlIGlzIHVuZGVyIGRldmVsb3BtZW50JywgMTAwMCxcclxuICAgICAgICAgICAgICAgICdDb21taW5nIFNvb24uLi4hJywgMTAwMCxcclxuICAgICAgICAgICAgICAgICdCZSBSZWFkeSB0byBTaG9wIG9ubGluZS4uLicsIDEwMDBdfVxyXG4gICAgICAgICAgICBsb29wPXtJbmZpbml0eX1cclxuICAgICAgICAgICAgd3JhcHBlcj1cInBcIlxyXG4gICAgICAgIC8+XHJcbiAgICA8L2gzPlxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9rZW46ICcnLFxyXG4gICAgICAgICAgICBqd3RfdG9rZW46ICcnLFxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0OiBbXSxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXREZWNvZGVkVG9rZW5Gcm9tU3RvcmFnZSgpXHJcbiAgICAgICAgaWYgKHRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqd3RfdG9rZW46IHRva2VuLnJvbGUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvY2F0ZWdvcmllcy9jYXRlZ29yaWVzJztcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdDogcmVzcG9uc2UuZGF0YS5jYXRlZ29yeS5kb2NzLFxyXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogcmVzcG9uc2UuZGF0YS5zdWJfY2F0ZWdvcnkuZG9jc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhdGVyb3JpZXMgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgand0X3Rva2VuOiAnJyB9KVxyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVsb2FkKCcvaW5kZXgnKTtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9pbmRleCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdMb2dvdXQgRmFpbGVkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NdWhhbGlrPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1wiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIlwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIHthbmltYXRpb259XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW49e3RoaXMuc3RhdGUuand0X3Rva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ291dD17dGhpcy5sb2dvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0PXt0aGlzLnN0YXRlLmNhdGVnb3JpZXNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0PXt0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlckNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9