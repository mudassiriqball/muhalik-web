webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./node_modules/react-notification-badge/lib/components/AnimationCounter.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-notification-badge/lib/components/AnimationCounter.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Effect = _interopRequireDefault(__webpack_require__(/*! ./Effect */ "./node_modules/react-notification-badge/lib/components/Effect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultSetTimeout = function defaultSetTimeout(callback) {
  setTimeout(callback, 1000.0 / 60.0);
};

var defaultClearTimeout = function defaultClearTimeout(timer) {
  clearTimeout(timer);
};

var requestAnimationFrame = function () {
  if (typeof window === 'undefined') {
    return defaultSetTimeout;
  } else {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || defaultSetTimeout;
  }
}();

var cancelAnimationFrame = function () {
  if (typeof window === 'undefined') {
    return defaultClearTimeout;
  } else {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || defaultClearTimeout;
  }
}();

var now = typeof window !== 'undefined' && window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);

var getTime = function getTime() {
  return now && now.call(performance) || Date.now();
};

var AnimationCounter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnimationCounter, _React$Component);

  function AnimationCounter(props) {
    var _this;

    _classCallCheck(this, AnimationCounter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimationCounter).call(this, props));
    _this.state = {};
    _this.node = undefined;
    return _this;
  }

  _createClass(AnimationCounter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.count > 0) {
        this.node = _reactDom["default"].findDOMNode(this.refs.badge);
        this.animate();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.count > prevProps.count) {
        this.node = _reactDom["default"].findDOMNode(this.refs.badge);
        this.animate();
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var style0 = {
        '-moz-transform': this.props.effect[0],
        '-webkit-transform': this.props.effect[0],
        '-o-transform': this.props.effect[0],
        transform: this.props.effect[0]
      };
      this.attachStyle(style0);

      if (this.props.effect[2]) {
        this.attachStyle(this.props.effect[2]);
      }

      var startTime = getTime();
      var timer;

      var waitOrFinish = function waitOrFinish() {
        var lastTime = getTime();
        var frame = Math.floor((lastTime - startTime) / (1000.0 / 60.0) % _this2.props.frameLength);

        if (frame === _this2.props.frameLength - 1) {
          cancelAnimationFrame(timer);
          var style1 = {
            '-moz-transform': _this2.props.effect[1],
            '-webkit-transform': _this2.props.effect[1],
            '-o-transform': _this2.props.effect[1],
            transform: _this2.props.effect[1]
          };

          _this2.attachStyle(style1);

          if (_this2.props.effect[3]) {
            _this2.attachStyle(_this2.props.effect[3]);
          }
        } else {
          timer = requestAnimationFrame(waitOrFinish);
        }
      };

      waitOrFinish();
    }
  }, {
    key: "attachStyle",
    value: function attachStyle(style) {
      for (var key in style) {
        if (style.hasOwnProperty(key)) {
          this.node.style[key] = style[key];
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.props.label || this.props.count;
      return _react["default"].createElement("span", {
        ref: "badge",
        style: this.props.style,
        className: this.props.className
      }, value);
    }
  }]);

  return AnimationCounter;
}(_react["default"].Component);

AnimationCounter.propTypes = {
  count: _propTypes["default"].number,
  label: _propTypes["default"].string,
  style: _propTypes["default"].object,
  effect: _propTypes["default"].array,
  frameLength: _propTypes["default"].number,
  className: _propTypes["default"].string
};
AnimationCounter.defaultProps = {
  count: 1,
  label: null,
  style: {},
  effect: _Effect["default"].SCALE,
  frameLength: 30.0
};
var _default = AnimationCounter;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-notification-badge/lib/components/Effect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-notification-badge/lib/components/Effect.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  ROTATE_X: ['rotateX(-180deg)', 'rotateX(0deg)'],
  ROTATE_Y: ['rotateY(-180deg)', 'rotateY(0deg)'],
  SCALE: ['scale(1.8, 1.8)', 'scale(1, 1)']
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-notification-badge/lib/components/NotificationBadge.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-notification-badge/lib/components/NotificationBadge.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _AnimationCounter = _interopRequireDefault(__webpack_require__(/*! ./AnimationCounter */ "./node_modules/react-notification-badge/lib/components/AnimationCounter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  badge: {
    WebkitTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    MozTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    msTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    display: 'inline-block',
    position: 'absolute',
    minWidth: '10px',
    padding: '3px 7px',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    backgroundColor: 'rgba(212, 19, 13, 1)',
    borderRadius: '10px',
    top: '-2px',
    right: '-2px'
  }
};

var NotificationBadge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotificationBadge, _React$Component);

  function NotificationBadge(props) {
    var _this;

    _classCallCheck(this, NotificationBadge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NotificationBadge).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(NotificationBadge, [{
    key: "render",
    value: function render() {
      var badgeStyle = this.merge(styles.badge, this.props.style);
      var containerStyle = this.merge(styles.container, this.props.containerStyle);
      var value = this.props.count > 0 ? _react["default"].createElement(_AnimationCounter["default"], {
        key: "badgekey",
        style: badgeStyle,
        className: this.props.className,
        count: this.props.count,
        label: this.props.label,
        effect: this.props.effect,
        fps: this.props.fps,
        frameLength: this.props.frameLength
      }) : undefined;
      return _react["default"].createElement("div", {
        style: containerStyle
      }, value);
    }
  }, {
    key: "merge",
    value: function merge(obj1, obj2) {
      var obj = {};

      for (var attrname1 in obj1) {
        if (obj1.hasOwnProperty(attrname1)) {
          obj[attrname1] = obj1[attrname1];
        }
      }

      for (var attrname2 in obj2) {
        if (obj2.hasOwnProperty(attrname2)) {
          obj[attrname2] = obj2[attrname2];
        }
      }

      return obj;
    }
  }]);

  return NotificationBadge;
}(_react["default"].Component);

NotificationBadge.propTypes = {
  containerStyle: _propTypes["default"].object,
  count: _propTypes["default"].number,
  label: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  effect: _propTypes["default"].array,
  fps: _propTypes["default"].number,
  frameLength: _propTypes["default"].number
};
NotificationBadge.defaultProps = {
  count: 0,
  style: {},
  containerStyle: {}
};
var _default = NotificationBadge;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-notification-badge/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-notification-badge/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Effect", {
  enumerable: true,
  get: function get() {
    return _Effect["default"];
  }
});
exports["default"] = void 0;

var _NotificationBadge = _interopRequireDefault(__webpack_require__(/*! ./components/NotificationBadge */ "./node_modules/react-notification-badge/lib/components/NotificationBadge.js"));

var _Effect = _interopRequireDefault(__webpack_require__(/*! ./components/Effect */ "./node_modules/react-notification-badge/lib/components/Effect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _NotificationBadge["default"];
exports["default"] = _default;

/***/ }),

/***/ "./src/pages/components/card_accordion.js":
/*!************************************************!*\
  !*** ./src/pages/components/card_accordion.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_notification_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-notification-badge */ "./node_modules/react-notification-badge/lib/index.js");
/* harmony import */ var react_notification_badge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_notification_badge__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\card_accordion.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var CardAccordion = function CardAccordion(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
    defaultActiveKey: "0",
    style: {
      margin: '2%'
    },
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: styles.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    style: styles.card_header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    className: "p-0 ml-0 mt-0 mb-0 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, props.title), props.notification ? __jsx(react_notification_badge__WEBPACK_IMPORTED_MODULE_5___default.a, {
    count: 52,
    effect: react_notification_badge__WEBPACK_IMPORTED_MODULE_5__["Effect"].SCALE,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }) // <Badge variant="primary" style={{ fontSize: '13px' }}>9</Badge>
  : null, __jsx("div", {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Toggle, {
    eventKey: "0",
    style: {
      background: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.slider_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Collapse, {
    eventKey: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, props.children)))));
};

var styles = {
  card: {
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].card_header_fontsize),
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].card_header_background)
  },
  slider_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].admin_primry_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CardAccordion);

/***/ })

})
//# sourceMappingURL=admin.js.b7240a949e92472d7c99.hot-update.js.map