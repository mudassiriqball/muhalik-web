module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+EWW":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "/fka":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vkTu");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = {
  background: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color}`
  },
  brand: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primary_text_color}`,
    fontSize: 'medium'
  },
  form: {
    border: `2px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color}`,
    width: '60%',
    borderRadius: '25px',
    padding: '0px 5px'
  },
  search_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].admin_primry_color}`,
    border: 'none'
  },
  search_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].body_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};

const AdminToolbar = () => __jsx("div", null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
  collapseOnSelect: true,
  expand: "lg",
  style: styles.background,
  variant: "dark"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
  href: "/",
  className: "mr-auto",
  style: styles.brand
}, "Muhalik"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
  style: {
    margin: '5px'
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
  style: {
    flex: '3'
  },
  type: "text",
  placeholder: "Search here",
  "aria-describedby": "searchBtn",
  name: "searchBtn"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  id: "searchBtn",
  style: styles.search_btn
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
  style: styles.search_fontawesome
}))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"],
  alignRight: true
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
  size: "sm",
  split: true,
  variant: "dark",
  id: "dropdown-split",
  style: {
    background: 'none',
    border: 'none'
  }
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-1"
}, "Acount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-2"
}, "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-3"
}, "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-3"
}, "Signout")))));

/* harmony default export */ __webpack_exports__["default"] = (AdminToolbar);
{
  /* 563D7C E35300 */
}

/***/ }),

/***/ "0T/a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var ctx = __webpack_require__("vCXk");
var hide = __webpack_require__("jOCL");
var has = __webpack_require__("Q8jq");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "14Ie":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IT5z");


/***/ }),

/***/ "2jw7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "40Gw":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("fZVS"), 'Object', { defineProperty: __webpack_require__("OtwA").f });


/***/ }),

/***/ "7FvJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("40Gw");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "7RBj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Reports = () => {
  return __jsx("div", {
    style: {
      width: '100%',
      background: 'yellow'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "daily",
    transition: false,
    id: "reports_tab",
    style: {
      padding: '0px',
      margin: '0px',
      width: '100%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "daily",
    title: "Daily Reports"
  }, __jsx("p", null, "Daily Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "weekly",
    title: "Weekly Reports"
  }, __jsx("p", null, "Weekly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "monthly",
    title: "Monthly Reports"
  }, __jsx("p", null, "Monthly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "yearly",
    title: "Yearly Reports"
  }, __jsx("p", null, "Yearly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "overall",
    title: "Overall Reports"
  }, __jsx("p", null, "Overall Reports"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Reports);

/***/ }),

/***/ "7WCM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Inventory extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  // static async getInitialProps(ctx) {
  //     const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //     const json = await res.json()
  //     return { stars: 10 }
  // }
  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Product In Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Product Sold"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Product Categories "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742"
    }, [".hover.jsx-3124640742{margin:5px 15px;}", ".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  card: {
    background: 'white',
    borderRadius: '0px',
    padding: '0px'
  },
  card_header: {
    background: 'white',
    color: 'gray',
    border: 'none'
  },
  card_text: {
    color: '#6A7074',
    fontSize: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "8v5W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "CQpV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Discount = () => {
  return __jsx("div", null, __jsx("p", null, "This is Discount page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Discount);

/***/ }),

/***/ "D0YP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Customers extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "New Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Top Customers "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742"
    }, [".hover.jsx-3124640742{margin:5px 15px;}", ".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  card: {
    background: 'white',
    borderRadius: '0px',
    padding: '0px'
  },
  card_header: {
    background: 'white',
    color: 'gray',
    border: 'none'
  },
  card_text: {
    color: '#6A7074',
    fontSize: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Customers);

/***/ }),

/***/ "D4ny":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ELB5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbar_admin_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/fka");
/* harmony import */ var _footer_admin_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zFog");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AdminLayout = props => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Muhalik"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
  integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
  crossorigin: "anonymous"
})), __jsx(_toolbar_admin_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, __jsx(_footer_admin_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (AdminLayout);

/***/ }),

/***/ "Ev2A":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
var document = __webpack_require__("2jw7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IT5z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin_dashboard_dashboard_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xv3N");
/* harmony import */ var _components_admin_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oV2t");
/* harmony import */ var _components_admin_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ELB5");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vkTu");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const BackDrop = props => __jsx("div", {
  className: "jsx-3404600223"
}, __jsx("div", {
  onClick: props.click,
  className: "jsx-3404600223"
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "3404600223"
}, [".jsx-3404600223{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:100;}"]));

class AdminDashboard extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      sideDrawerOpen: false,
      fuck: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "drawerToggleClickHandler", () => {
      this.setState(prevState => {
        return {
          sideDrawerOpen: !prevState.sideDrawerOpen
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "fuckClickHandler", () => {
      this.setState(prevState => {
        return {
          fuck: !prevState.fuck
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "backdropClickHandler", () => {
      this.setState({
        sideDrawerOpen: false
      });
    });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = __jsx(BackDrop, {
        click: this.backdropClickHandler
      });
    }

    return __jsx("div", {
      style: styles.body
    }, __jsx(_components_admin_dashboard_dashboard_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      show: this.state.fuck,
      drawerClickHandler: this.drawerToggleClickHandler,
      ClickHandler: this.fuckClickHandler
    }), __jsx(_components_admin_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      show: this.state.sideDrawerOpen,
      click: this.backdropClickHandler
    }), backdrop);
  }

}

const styles = {
  body: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].body_color}`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AdminDashboard);

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "LqFA":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b4pn");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "OtwA":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var toPrimitive = __webpack_require__("LqFA");
var dP = Object.defineProperty;

exports.f = __webpack_require__("fZVS") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "Q8jq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "b4pn":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fZVS":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("14Ie")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7FvJ");

/***/ }),

/***/ "icUW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Product Sold "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Oredrs "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "5678")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      md: 6,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      md: 6,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742"
    }, [".hover.jsx-3124640742{margin:5px 15px;}", ".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  card: {
    background: 'white',
    borderRadius: '0px',
    padding: '0px'
  },
  card_header: {
    background: 'white',
    color: 'gray',
    border: 'none'
  },
  card_text: {
    color: '#6A7074',
    fontSize: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "jOCL":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");
module.exports = __webpack_require__("fZVS") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "kplv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Commision = () => {
  return __jsx("div", null, __jsx("p", null, "This is Commision page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Commision);

/***/ }),

/***/ "mf3m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Categories extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Product Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Product Sold"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Product Categories "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742"
    }, [".hover.jsx-3124640742{margin:5px 15px;}", ".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  card: {
    background: 'white',
    borderRadius: '0px',
    padding: '0px'
  },
  card_header: {
    background: 'white',
    color: 'gray',
    border: 'none'
  },
  card_text: {
    color: '#6A7074',
    fontSize: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "oV2t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("icUW");
/* harmony import */ var _dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ukOe");
/* harmony import */ var _dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("D0YP");
/* harmony import */ var _dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uVM9");
/* harmony import */ var _dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("mf3m");
/* harmony import */ var _dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("7WCM");
/* harmony import */ var _dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("CQpV");
/* harmony import */ var _dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kplv");
/* harmony import */ var _dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("7RBj");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("vkTu");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "one"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + (drawerClasses || "")
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: styles.image_div
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 5,
    xs: 5
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "text-center",
    src: "/static/a.png",
    fluid: true,
    style: styles.image
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 5,
    xs: 5
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik
  }, "Muhalik")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "zero",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome
  }), "Dashboard", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "one",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    style: styles.fontawesome
  }), "Vendors", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "two",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
    style: styles.fontawesome
  }), "Customers", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "four",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.fontawesome
  }), "Categories", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "five",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome
  }), "Inventory", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "six",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), "Discounts", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "seven",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPercent"],
    style: styles.fontawesome
  }), "Commission", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "eight",
    onClick: props.click,
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), "Reports", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3248124927", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "tabs_side_drawer_tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "zero"
  }, __jsx(_dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "one"
  }, __jsx(_dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "two"
  }, __jsx(_dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "four"
  }, __jsx(_dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "five"
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "six"
  }, __jsx(_dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "seven"
  }, __jsx(_dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "eight"
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__["default"], null)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3248124927",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]
  }, [".hover.__jsx-style-dynamic-selector:hover{background:#30313E;}", `.tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color};box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}`, ".tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}", "p.__jsx-style-dynamic-selector{text-align:center;padding:5% 0px;border-bottom:1px solid gray;}", `label.__jsx-style-dynamic-selector{margin-top:4%;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color};}`, "@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}"]));
};

const styles = {
  image_div: {
    background: 'white',
    marginRight: '1px',
    padding: '10% 2%'
  },
  image: {
    width: '100%'
  },
  muhalik: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color}`,
    fontSize: '28px',
    fontWeight: 'bold'
  },
  // tab_link: {
  //     color: '#cccccc',
  //     fontSize: '14px',
  //     paddingTop: '2%',
  //     paddingBottom: '2%',
  // },
  tab_link: {
    color: '#cccccc',
    fontSize: '14px',
    paddingTop: '8%',
    paddingBottom: '8%'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color}`,
    margin: '0px 8% 0px 5%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color}`,
    margin: '8px 5% 0px 0px',
    float: 'right',
    width: '8px',
    height: '8px',
    maxHeight: '8px',
    maxWidth: '8px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DashboardSideDrawer);

/***/ }),

/***/ "p9MR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "pH/F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("fZVS") && !__webpack_require__("14Ie")(function () {
  return Object.defineProperty(__webpack_require__("Ev2A")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "uVM9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Products = () => {
  return __jsx("div", null, __jsx("p", null, "This is Product page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "ukOe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vkTu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Vendor extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, "New Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Top Vendors "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Admin Vendors "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "5678")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742"
    }, [".hover.jsx-3124640742{margin:5px 15px;}", ".hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}"]));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  card: {
    background: 'white',
    borderRadius: '0px',
    padding: '0px'
  },
  card_header: {
    background: 'white',
    color: 'gray',
    border: 'none'
  },
  card_text: {
    color: '#6A7074',
    fontSize: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vendor);

/***/ }),

/***/ "vCXk":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8v5W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vkTu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
const GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  admin_primry_color: '#373948',
  primary_text_color: 'white',
  // Body color
  body_color: '#DDE1E3',
  // body_color: '#F0F0F0',
  // Fontsize for all the labels of any form control (input, textbox etc):
  form_label_fontsize: '13px'
};
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyleSheet);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xv3N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("icUW");
/* harmony import */ var _dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ukOe");
/* harmony import */ var _dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("D0YP");
/* harmony import */ var _dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uVM9");
/* harmony import */ var _dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("mf3m");
/* harmony import */ var _dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("7WCM");
/* harmony import */ var _dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("CQpV");
/* harmony import */ var _dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kplv");
/* harmony import */ var _dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("7RBj");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("vkTu");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DashboardTabs = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "zero",
    style: styles.row
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: styles.row
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + (drawerClasses || "")
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 3,
    md: 3,
    style: {
      maxWidth: '300px',
      padding: '0px'
    }
  }, __jsx("div", {
    style: styles.body,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "tabs"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: styles.image_div
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "text-center",
    src: "/static/a.png",
    fluid: true,
    style: styles.image
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: styles.muhalik
  }, "Muhalik")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "zero",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome
  }), "Dashboard", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "one",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    style: styles.fontawesome
  }), "Vendors", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "two",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
    style: styles.fontawesome
  }), "Customers", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "four",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.fontawesome
  }), "Categories", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "five",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome
  }), "Inventory", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "six",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), "Discounts", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "seven",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPercent"],
    style: styles.fontawesome
  }), "Commission", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "hover"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "eight",
    style: styles.tab_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), "Reports", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: styles.row
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    style: styles.navbar,
    variant: "dark"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "side_tab_toogle_btn mr-auto"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "mr-auto",
    style: styles.buttons,
    onClick: props.drawerClickHandler
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "tabs mr-sm-4"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "mr-auto",
    style: styles.buttons,
    onClick: props.ClickHandler
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    className: "mr-auto"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: styles.search_bar,
    className: "mr-xs-2",
    type: "text",
    placeholder: "Search here",
    "aria-describedby": "side_drawer_searchbar",
    name: "side_drawer_searchbar"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "side_drawer_searchBtn",
    style: styles.buttons
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.search_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"]
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    size: "sm",
    split: true,
    variant: "light",
    id: "dropdown-split",
    style: {
      background: 'none',
      border: 'none'
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-1"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    style: styles.dropDown_fontawesome
  }), "My Profile"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-2"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome
  }), "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandsHelping"],
    style: styles.dropDown_fontawesome
  }), "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider, null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome
  }), "Logout")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3698805138", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]]]) + " " + "tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "zero"
  }, __jsx(_dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "one"
  }, __jsx(_dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "two"
  }, __jsx(_dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "four"
  }, __jsx(_dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "five"
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "six"
  }, __jsx(_dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "seven"
  }, __jsx(_dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "eight"
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__["default"], null))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3698805138",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color]
  }, [".tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}", ".tabs_side_drawer.open.__jsx-style-dynamic-selector{display:block;}", `.hover.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color};color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color};}`, ".hover.__jsx-style-dynamic-selector:hover{background:#30313E;}", ".side_tab_toogle_btn.__jsx-style-dynamic-selector{margin:1% 0%;}", "@media (max-width:991px){.tabs.__jsx-style-dynamic-selector{display:none;}.tab_content.__jsx-style-dynamic-selector{display:none;}}", "@media (min-width:992px){.side_tab_toogle_btn.__jsx-style-dynamic-selector{display:none;}}"]));
};

const styles = {
  image_div: {
    background: 'white',
    marginRight: '1px',
    padding: '30px 10px'
  },
  image: {
    width: '100px'
  },
  muhalik: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color}`,
    fontSize: '28px',
    fontWeight: 'bold'
  },
  body: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color}`
  },
  navbar: {
    borderBottom: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color}`,
    background: 'white',
    padding: '2% 2%'
  },
  row: {
    padding: '0px',
    margin: '0px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  buttons: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color}`,
    border: 'none',
    width: 'auto',
    height: '38px'
  },
  search_bar: {
    flex: '1'
  },
  tab_link: {
    color: '#cccccc',
    fontSize: '14px',
    paddingTop: '8%',
    paddingBottom: '8%'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color}`,
    margin: '0px 8% 0px 12%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color}`,
    margin: '8px 5% 0px 0px',
    float: 'right',
    width: '10px',
    height: '10px',
    maxHeight: '10px',
    maxWidth: '10px'
  },
  search_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].body_color}`,
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  dropDown_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].admin_primry_color}`,
    margin: '0px 20px 0px -5px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DashboardTabs);

/***/ }),

/***/ "zFog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vkTu");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AdminFooter = () => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primary_text_color]]])
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primary_text_color]]]) + " " + "footer"
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primary_text_color]]]) + " " + "fooeter_text text-center"
}, "Copyright@ 2020", __jsx("span", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primary_text_color]]])
}, " Muhalik "), "- Online Shopping Website")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2300049164",
  dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primary_text_color]
}, [`.footer.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primry_color};position:absolute;left:0;bottom:0;right:0;}`, `.fooeter_text.__jsx-style-dynamic-selector{margin:10px;font-size:smaller;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].primary_text_color};}`, "span.__jsx-style-dynamic-selector{font-weight:bold;}"]));

/* harmony default export */ __webpack_exports__["default"] = (AdminFooter);

/***/ })

/******/ });