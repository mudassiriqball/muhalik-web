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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/pages/components/alert-modal.js":
/*!*********************************************!*\
  !*** ./src/pages/components/alert-modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\alert-modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function AlertModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "alert-modal",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      border: `1px solid ${props.color}`,
      borderRadius: '5px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    style: {
      color: `${props.color}`,
      borderBottom: `1px solid ${props.color}`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.iconName,
    style: {
      color: `${props.color}`,
      marginRight: '10px',
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "alert-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, props.header)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, props.message)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    onClick: props.onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Close"))));
}

/* harmony default export */ __webpack_exports__["default"] = (AlertModal);

/***/ }),

/***/ "./src/pages/components/toast.js":
/*!***************************************!*\
  !*** ./src/pages/components/toast.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\toast.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ShowToast = props => {
  return __jsx("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '40%',
      zIndex: '100'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    onClose: props.onCloseHandler,
    show: props.show,
    delay: 10000,
    autohide: true,
    style: {
      display: 'absolute',
      background: '#e6ffe6',
      width: '300px',
      border: `0.5px solid ${props.color}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.iconName,
    style: {
      color: `${props.color}`,
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    },
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx("span", {
    style: {
      marginLeft: '20px',
      fontSize: '18px',
      color: `${props.color}`,
      fontWeight: 'bold'
    },
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, props.header)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, {
    style: styles.toastBody,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, props.message)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowToast);
const styles = {
  toastBody: {
    fontSize: '16px',
    padding: '10px'
  }
};

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/bulk-upload.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/bulk-upload.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class BulkUpload extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "downloadBulkUploadTemplete", () => {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('/excel.xlsx').then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'muhalik bulk-upload templete.xlsx';
          a.click();
        });
      });
    });

    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit

    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }

  onChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  async fileUpload(file) {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__["default"].PATH + '/api/products/bulk-upload';
    const form = new FormData();
    form.append('file', file);
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, form, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      console.log(error);
    });
    return "fuck"; // const form = new FormData()
    // form.append('username', 'malcoded')
    // form.append('file', file)
    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //     body: form,
    // })
    // return response;
    // const response = await axios.post(
    //     url,
    //     { example: 'data' },
    //     { headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"  } }
    //   )

    return response; // const form = new FormData();
    // form.set('username', 'malcoded');
    // form.append('file', file);
    // return axios.post(url, file, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // })
    // const formData = new FormData();
    // formData.append('file', file)
    // const config = {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*"
    //     }
    // }
    // return post(url, formData, {
    //     headers: {
    //         'Access-Control-Allow-Origin': true,
    //     }
    // });
  }

  render() {
    return __jsx("div", null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx("h6", {
      className: "mr-auto"
    }, "Products Bulk Upload"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/index"
    }, __jsx("a", null, "Home"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: {
        background: 'skyblue'
      }
    }, "Download Templete"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "primary",
      size: "md",
      active: true,
      onClick: this.downloadBulkUploadTemplete
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDownload"],
      style: styles.fontawesome
    }), "Download")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: {
        background: 'skyblue'
      }
    }, "Upload File"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx("form", {
      onSubmit: this.onFormSubmit
    }, __jsx("div", {
      style: styles.browseBtnDiv
    }, __jsx("input", {
      type: "file",
      onChange: this.onChange
    })), __jsx("div", {
      style: {
        width: '100%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "primary",
      size: "md",
      active: true,
      type: "submit"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUpload"],
      style: styles.fontawesome
    }), "Upload")))))));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  card: {
    width: '100%'
  },
  browseBtnDiv: {
    width: '100%',
    padding: '0px 0px 10px 0px'
  },
  fontawesome: {
    color: 'white',
    marginRight: '10px',
    width: '14px',
    height: '14px',
    maxHeight: '14px',
    maxWidth: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BulkUpload);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/discounts.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/discounts.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Discounts = () => {
  return __jsx("div", null, __jsx("p", null, "This is Discount page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Discounts);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/inventory.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/inventory.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../styleSheet */ "./src/styleSheet.js");

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
      className: "jsx-750656228"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      defaultActiveKey: "profile",
      id: "uncontrolled-tab-example"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      eventKey: "home",
      title: "Home"
    }, __jsx("p", {
      className: "jsx-750656228"
    }, "Fuck")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      eventKey: "profile",
      title: "Profile"
    }, __jsx("p", {
      className: "jsx-750656228"
    }, "Fuck")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      eventKey: "contact",
      title: "Contact",
      disabled: true
    }, __jsx("p", {
      className: "jsx-750656228"
    }, "Fuck")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "750656228"
    }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxpbnZlbnRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNxQiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xcaW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIFRhYnMsIFRhYiwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG4vLyBhbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhVXNlcnMsIGZhVXNlclBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuXHJcbmNsYXNzIEludmVudG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3plaXQvbmV4dC5qcycpXHJcbiAgICAvLyAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIC8vICAgICByZXR1cm4geyBzdGFyczogMTAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwicHJvZmlsZVwiIGlkPVwidW5jb250cm9sbGVkLXRhYi1leGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJob21lXCIgdGl0bGU9XCJIb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GdWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cInByb2ZpbGVcIiB0aXRsZT1cIlByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZ1Y2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PVwiY29udGFjdFwiIHRpdGxlPVwiQ29udGFjdFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnVjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\inventory.js */"));
  }

}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/orders.js":
/*!****************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/orders.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const options = [{
  value: 'chocolat',
  label: 'Chocolat'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];

class Orders extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return __jsx(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
      isMulti: true,
      name: "colors",
      options: options,
      className: "basic-multi-select",
      classNamePrefix: "select"
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Orders);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-category.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-category.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../toast */ "./src/pages/components/toast.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-category.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class AddCategory extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleCategoryValueChange", e => {
      this.setState({
        categoryValue: e.target.value
      });
    });

    _defineProperty(this, "handleSubmit", () => {
      if (this.state.categoryValue == '') {
        this.setState({
          error: 'Enter Value First'
        });
      } else {
        this.setState({
          isLoading: true
        });
        this.setState({
          error: ''
        });
        this.addCategory(this);
      }
    });

    this.state = {
      isLoading: false,
      showToast: false,
      categoryValue: '',
      error: ''
    };
  } //  Submit data to api


  async addCategory(currentComponent) {
    // const url = MuhalikConfig.PATH + '/api/products/add';
    // await axios.post(url, {
    // this.state.categoryValue
    // }, {
    //     headers: { 'authorization': await getUncodededTokenFromStorage() }
    // }).then(function (response) {
    currentComponent.setState({
      isLoading: false
    });
    currentComponent.setState({
      showToast: true
    });
    return true; // }).catch(function (error) {
    //     currentComponent.setState({ isLoading: false });
    //     alert('Error: ', error.response.data.message);
    //     return false;
    // });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.showToast ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onCloseHandler: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      header: 'Success',
      message: 'Category Added Successfully',
      iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faThumbsUp"],
      color: "green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 41
      }
    }) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: styles.title_row,
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
      style: styles.title_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "mr-auto",
      style: styles.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, " Add New Category ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, "Product Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      style: styles.card_body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: this.state.categoryValue,
      onChange: this.handleCategoryValueChange,
      isInvalid: this.state.error,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 37
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
      type: "invalid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 37
      }
    }, this.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      size: "sm",
      onClick: this.handleSubmit.bind(this),
      disabled: this.state.isLoading,
      block: true,
      style: styles.submit_btn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
      animation: "grow",
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 61
      }
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 102
      }
    })))))));
  }

}

const styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '1.5% 4%'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '26px',
    height: '26px',
    maxHeight: '26px',
    maxWidth: '26px'
  },
  title: {
    color: 'gray'
  },
  card: {
    width: '100%',
    margin: '5%'
  },
  card_body: {
    padding: '5%'
  },
  error: {
    width: '100%',
    textAlign: 'center',
    color: '#DC3545',
    fontSize: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AddCategory);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js":
/*!********************************************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\add-new-field-name-model.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function AddNewFieldNameModal(props) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");

  function handleAdd() {
    if (value != "") {
      console.log("handle Category:", value);
      return true;
    } else {
      setError('Please Enter Value');
    }
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Header, {
    closeButton: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Add New Field")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Your Request for Adding New Field Name will be send to Admin, Admin will Approve/Discard it."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Field Name",
    name: "sku",
    value: value,
    onChange: e => setValue(e.target.value),
    isInvalid: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
    type: "invalid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, error)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "sm",
    className: "mr-auto",
    onClick: handleAdd ? props.onHide : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Add"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "sm",
    onClick: props.onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Cancel")));
}

/* harmony default export */ __webpack_exports__["default"] = (AddNewFieldNameModal);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../sdk/consts/fields-data */ "./src/sdk/consts/fields-data.js");
/* harmony import */ var _add_new_field_name_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-new-field-name-model */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\custom-fields.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const groupStyles = {
  border: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color}`,
  borderRadius: '5px',
  background: 'white',
  color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color}`
};

const Group = props => __jsx("div", {
  style: groupStyles,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["components"].Group, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
})));

const CustomFields = props => {
  const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    style: {
      width: '100%'
    },
    defaultActiveKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: styles.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    style: styles.card_header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Custome Fields"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"],
    size: "sm",
    eventKey: "0",
    style: {
      float: 'right',
      background: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSlidersH"],
    style: styles.accordin_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, props.showCustomFields ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 51
    }
  }, "Please First Create Variations") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    style: {
      margin: '0.5% 1%',
      padding: '1% 2%',
      background: 'lightGray'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "Field Name"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    options: _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_6__["groupedOptions"],
    components: {
      Group
    },
    value: props.customFieldNameSelected,
    onChange: props.fieldNameHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    style: {
      padding: '0%',
      margin: '0%',
      fontSize: '14px'
    },
    onClick: () => setModalShow(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, "Add New"), __jsx(_add_new_field_name_model__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, "Field Value "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Enter Value",
    name: "sku",
    value: props.value,
    onChange: props.fieldValueHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 41
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, props.isVariableProduct ? __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  }, "For Variable Products each Custom Field will be added to all variations") : null, __jsx("span", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, props.error)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline-primary",
    size: "sm",
    block: true,
    style: {
      margin: '2% 0px'
    },
    onClick: props.addFieldHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, "Add Field")), __jsx("div", {
    style: {
      background: 'lightGray',
      margin: '0.5% 1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, props.customFieldsArray && props.customFieldsArray.map((data, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    style: {
      padding: '1% 2%'
    },
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    value: data.name,
    onChange: () => data.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 45
    }
  }, data.name))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: data.value,
    onChange: () => data.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 45
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => props.delete(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 45
    }
  }, " delete"))))))))));
};

const styles = {
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%'
  },
  card_header: {
    width: '100%',
    alignItems: 'center',
    // color: '#6A7074',
    fontSize: '15px',
    background: 'lightgray'
  },
  label: {
    fontSize: '13px'
  },
  accordin_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js":
/*!********************************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sdk_consts_product_size_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../sdk/consts/product-size-options */ "./src/sdk/consts/product-size-options.js");
/* harmony import */ var _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../sdk/consts/product-color-options */ "./src/sdk/consts/product-color-options.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select/creatable */ "react-select/creatable");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_select_creatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select-material-ui */ "react-select-material-ui");
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_select_material_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../sdk/consts/fields-data */ "./src/sdk/consts/fields-data.js");
/* harmony import */ var _add_new_field_name_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-new-field-name-model */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\product-data.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import product_size_options from '../../../../../../../sdk/consts/product-size-options'
// import product_color_options from '../../../../../../../sdk/consts/product-color-options'
// import { Form, Col, Row, Card, InputGroup, Button, Toast, Tab, Nav, Tabs, Accordion, Spinner, Dropdown } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faPlus, faKey, faSlidersH, faStoreAlt, faTruck, faTools, faDollarSign, faListAlt, faArrowAltCircleDown,
// } from '@fortawesome/free-solid-svg-icons';
// import CreatableSelect from 'react-select/creatable';
// import ReactSelectMaterialUi from "react-select-material-ui";
// import GlobalStyleSheet from '../../../../../../../styleSheet';
// import MuhalikConfig from '../../../../../../../sdk/muhalik.config';
// import Select, { components } from 'react-select';
// import { groupedOptions } from '../../../../../../../sdk/consts/fields-data';
// import AddNewFieldNameModal from './add-new-field-name-model'
// const groupStyles = {
//     border: `1px solid ${GlobalStyleSheet.admin_primry_color}`,
//     borderRadius: '5px',
//     background: 'white',
//     color: `${GlobalStyleSheet.admin_primry_color}`,
// };
// const coomponents = {
//     DropdownIndicator: null,
// };
// const Group = props => (
//     <div style={groupStyles}>
//         <components.Group {...props} />
//     </div>
// );
// const ProductData = props => {
//     const [modalShow, setModalShow] = React.useState(false);
//     let variations = true;
//     if (props.attributesArray == '') {
//         variations = false;
//     } else {
//         variations = true;
//     }
//     return (
//         <Accordion style={{ width: '100%' }} defaultActiveKey="0">
//             <Card style={styles.card}>
//                 <Card.Header style={styles.card_header}>
//                     <Row noGutters style={{ display: 'flex', alignItems: 'center' }}>
//                         <Col lg={3} md={3} sm={3} xs={4}>
//                             Product Data
//                         </Col>
//                         <Col lg={3} md={3} sm={5} xs={8}>
//                             <Form.Control
//                                 as="select"
//                                 name="product_type"
//                                 size="sm"
//                                 value={props.product_type_values}
//                                 onChange={(e) => { props.onChange(e); props.productTypeHandler(e) }}
//                             >
//                                 <option value='simple-product'> Simple Product </option>
//                                 <option value="variable-prouct"> Variable Product </option>
//                             </Form.Control>
//                         </Col>
//                         <div className="mr-auto"></div>
//                         <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
//                             <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
//                         </Accordion.Toggle>
//                     </Row>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="0">
//                     <Card.Body style={{ padding: '0.5%', margin: '0px' }}>
//                         <Tab.Container id="left-tabs-example" defaultActiveKey="Inventory">
//                             <Row style={{ margin: '0px' }} noGutters>
//                                 <Col lg="auto" md="auto" sm="auto" xs="auto" style={{ background: `${GlobalStyleSheet.admin_primry_color}` }}>
//                                     <Nav variant="pills" className="flex-column" style={{ margin: '0px' }}>
//                                         <Nav.Item>
//                                             <div className="nav_link">
//                                                 <Nav.Link eventKey="Inventory" style={styles.nav_link}>
//                                                     <FontAwesomeIcon size="xs" icon={faStoreAlt} style={styles.product_fontawesome} />
//                                                     <div className="linkName"> Inventory </div>
//                                                 </Nav.Link>
//                                             </div>
//                                         </Nav.Item>
//                                         {!props.isVariableProduct ?
//                                             <Nav.Item>
//                                                 <div className="nav_link">
//                                                     <Nav.Link eventKey="General" style={styles.nav_link}>
//                                                         <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.product_fontawesome} />
//                                                         <div className="linkName"> General </div>
//                                                     </Nav.Link>
//                                                 </div>
//                                             </Nav.Item>
//                                             :
//                                             <>
//                                                 <Nav.Item>
//                                                     <div className="nav_link">
//                                                         <Nav.Link eventKey="Attributes" style={styles.nav_link}>
//                                                             <FontAwesomeIcon size="xs" icon={faListAlt} style={styles.product_fontawesome} />
//                                                             <div className="linkName"> Attributes </div>
//                                                         </Nav.Link>
//                                                     </div>
//                                                 </Nav.Item>
//                                                 <Nav.Item>
//                                                     <div className="nav_link">
//                                                         <Nav.Link eventKey="Variations" style={styles.nav_link}>
//                                                             <FontAwesomeIcon size="xs" icon={faListAlt} style={styles.product_fontawesome} />
//                                                             <div className="linkName"> Variations </div>
//                                                         </Nav.Link>
//                                                     </div>
//                                                 </Nav.Item>
//                                             </>
//                                         }
//                                         <Nav.Item>
//                                             <div className="nav_link">
//                                                 <Nav.Link eventKey="Shipping" style={styles.nav_link}>
//                                                     <FontAwesomeIcon size="xs" icon={faTruck} style={styles.product_fontawesome} />
//                                                     <div className="linkName"> Shipping </div>
//                                                 </Nav.Link>
//                                             </div>
//                                         </Nav.Item>
//                                         <Nav.Item>
//                                             <div className="nav_link">
//                                                 <Nav.Link eventKey="Advanced" style={styles.nav_link}>
//                                                     <FontAwesomeIcon size="xs" icon={faTools} style={styles.product_fontawesome} />
//                                                     <div className="linkName"> Advanced </div>
//                                                 </Nav.Link>
//                                             </div>
//                                         </Nav.Item>
//                                         {/* <Nav.Item>
//                                     <div className="nav_link">
//                                         <Nav.Link eventKey="Commission" style={styles.nav_link}>
//                                             <FontAwesomeIcon size="xs" icon={faDollarSign} style={styles.product_fontawesome} />
//                                             <div> Commission </div>
//                                         </Nav.Link>
//                                     </div>
//                                 </Nav.Item> */}
//                                     </Nav>
//                                 </Col>
//                                 <Col style={{ padding: '2%' }}>
//                                     <Tab.Content>
//                                         <Tab.Pane eventKey="General">
//                                             {props.isVariableProduct ? null :
//                                                 <>
//                                                     <Form.Row>
//                                                         <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
//                                                             <Form.Label style={styles.label}>Product Price <span> * </span></Form.Label>
//                                                             <InputGroup>
//                                                                 <Form.Control
//                                                                     type="number"
//                                                                     size="sm"
//                                                                     placeholder="Enter Product Price"
//                                                                     name="product_price"
//                                                                     value={props.product_price_values}
//                                                                     onChange={props.onChange}
//                                                                     isInvalid={props.product_price_touched && props.product_price_errors}
//                                                                 />
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.product_price_errors}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                         <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
//                                                             <Form.Label style={styles.label}>Product in Stock</Form.Label>
//                                                             <Form.Control type="number"
//                                                                 size="sm"
//                                                                 name="product_in_stock"
//                                                                 value={props.product_in_stock_values}
//                                                                 onChange={props.onChange}
//                                                                 isInvalid={props.product_in_stock_touched && props.product_in_stock_errors}
//                                                             />
//                                                             <Form.Control.Feedback type="invalid">
//                                                                 {props.product_in_stock_errors}
//                                                             </Form.Control.Feedback>
//                                                         </Form.Group>
//                                                         <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
//                                                             <Form.Label style={styles.label}>Brand Name</Form.Label>
//                                                             <InputGroup>
//                                                                 <Form.Control
//                                                                     type="text"
//                                                                     size="sm"
//                                                                     placeholder="Enter Brand Name"
//                                                                     name="product_brand_name"
//                                                                     value={props.product_brand_name_values}
//                                                                     onChange={props.onChange}
//                                                                     isInvalid={props.product_brand_name_touched && props.product_brand_name_errors}
//                                                                 />
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.product_brand_name_errors}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                     </Form.Row>
//                                                     <Form.Row>
//                                                         <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
//                                                             <Form.Label style={styles.label}>Image Link <span> * </span></Form.Label>
//                                                             {/* <CreatableSelect
//                                                                 isMulti
//                                                                 onChange={props.simpleProductImageLinkHandler}
//                                                                 value={props.imageLink}
//                                                                 placeholder="Select/Enter Size"
//                                                             /> */}
//                                                             <CreatableSelect
//                                                                 components={coomponents}
//                                                                 inputValue={props.inputValue}
//                                                                 isClearable
//                                                                 isMulti
//                                                                 menuIsOpen={false}
//                                                                 onChange={props.simpleProductImageLinkHandler}
//                                                                 onInputChange={props.simpleProductImageLinkInputChangeHandler}
//                                                                 onKeyDown={props.simpleProductImageLinkhandleKeyDownHandler}
//                                                                 placeholder="Type something and press enter..."
//                                                                 value={props.imageLink}
//                                                             />
//                                                         </Form.Group>
//                                                     </Form.Row>
//                                                     {/*<Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
//                                                     <Form.Label style={styles.label}>Product Color</Form.Label>
//                                                     <CreatableSelect
//                                                         onChange={props.productColorChangeHandler}
//                                                         options={product_color_options}
//                                                         value={props.color}
//                                                         placeholder="Select/Enter Color"
//                                                     />
//                                                 </Form.Group>
//                                             </Form.Row> */}
//                                                     <Form.Row>
//                                                         <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
//                                                             <Form.Label style={styles.label}>Product Warranty (months) </Form.Label>
//                                                             <InputGroup>
//                                                                 <Form.Control
//                                                                     type="number"
//                                                                     size="sm"
//                                                                     placeholder="Enter Product Warranty"
//                                                                     name="product_warranty"
//                                                                     value={props.product_warranty_values}
//                                                                     onChange={props.onChange}
//                                                                     isInvalid={props.product_warranty_touched && props.product_warranty_errors}
//                                                                 />
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.product_warranty_errors}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                         <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
//                                                             <Form.Label style={styles.label}> Warranty Type </Form.Label>
//                                                             <InputGroup>
//                                                                 <InputGroup.Prepend>
//                                                                     <Form.Control
//                                                                         as="select"
//                                                                         name="warranty_type"
//                                                                         size="sm"
//                                                                         value={props.warranty_type_values}
//                                                                         onChange={props.onChange}
//                                                                         isInvalid={props.warranty_type_touched && props.warranty_type_errors}
//                                                                     >
//                                                                         <option>Waranty Type</option>
//                                                                         <option> No Warranty </option>
//                                                                         <option> Brand Warranty </option>
//                                                                         <option> Local Warranty </option>
//                                                                         <option> Local Seller Warranty </option>
//                                                                         <option> Non-Local Warranty </option>
//                                                                         <option> Internationsl Warranty </option>
//                                                                         <option> Internationsl Seller Warranty </option>
//                                                                         <option> International Manufacturer Warranty </option>
//                                                                     </Form.Control>
//                                                                 </InputGroup.Prepend>
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.product_warranty_errors}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                         <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
//                                                             <Form.Label style={styles.label}>Product Discount</Form.Label>
//                                                             <InputGroup>
//                                                                 <Form.Control
//                                                                     type="number"
//                                                                     size="sm"
//                                                                     placeholder="Enter Discount on on Product(%)"
//                                                                     name="product_discount"
//                                                                     value={props.product_discount_values}
//                                                                     onChange={props.onChange}
//                                                                     isInvalid={props.product_discount_touched && props.product_discount_errors}
//                                                                 />
//                                                                 <InputGroup.Prepend>
//                                                                     <Button variant='primary' size="sm">%</Button>
//                                                                 </InputGroup.Prepend>
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.product_discount_errors}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                     </Form.Row>
//                                                 </>
//                                             }
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="Inventory">
//                                             <Form.Row>
//                                                 <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
//                                                     <Form.Label style={styles.label}>Product SKU</Form.Label>
//                                                     <InputGroup>
//                                                         <Form.Control
//                                                             type="text"
//                                                             size="sm"
//                                                             placeholder="Enter SKU (Stock Keeping Unit)"
//                                                             name="sku"
//                                                             value={props.sku_values}
//                                                             onChange={props.onChange}
//                                                             isInvalid={props.sku_touched && props.sku_errors}
//                                                         />
//                                                         <Form.Control.Feedback type="invalid">
//                                                             {props.sku_errors}
//                                                         </Form.Control.Feedback>
//                                                     </InputGroup>
//                                                 </Form.Group>
//                                             </Form.Row>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="Shipping">
//                                             <Form.Group as={Row} noGutters>
//                                                 <Form.Label style={styles.label}>Weight (kg)</Form.Label>
//                                                 <Form.Control type="number"
//                                                     name="product_weight"
//                                                     size="sm"
//                                                     value={props.product_weight_values}
//                                                     onChange={props.onChange}
//                                                     isInvalid={props.product_weight_touched && props.product_weight_errors}
//                                                 />
//                                                 <Form.Control.Feedback type="invalid">
//                                                     {props.product_weight_errors}
//                                                 </Form.Control.Feedback>
//                                             </Form.Group>
//                                             <Form.Group as={Row} noGutters>
//                                                 <Form.Label style={styles.label}>Dimensions (cm)</Form.Label>
//                                                 <InputGroup>
//                                                     <InputGroup.Prepend>
//                                                         <Form.Control
//                                                             type="number"
//                                                             name="dimension_length"
//                                                             size="sm"
//                                                             value={props.dimension_length_values}
//                                                             onChange={props.onChange}
//                                                             placeholder="Length"
//                                                             isInvalid={props.dimension_length_touched && props.dimension_length_errors}
//                                                         />
//                                                         <Form.Control.Feedback type="invalid">
//                                                             {props.dimension_length_errors}
//                                                         </Form.Control.Feedback>
//                                                     </InputGroup.Prepend>
//                                                     <Form.Control
//                                                         type="number"
//                                                         name="dimension_width"
//                                                         size="sm"
//                                                         value={props.dimension_width_values}
//                                                         placeholder="Width"
//                                                         onChange={props.onChange}
//                                                         isInvalid={props.dimension_width_touched && props.dimension_width_errors}
//                                                     />
//                                                     <InputGroup.Prepend>
//                                                         <Form.Control.Feedback type="invalid">
//                                                             {props.dimension_width_errors}
//                                                         </Form.Control.Feedback>
//                                                         <Form.Control
//                                                             type="number"
//                                                             name="dimension_height"
//                                                             size="sm"
//                                                             value={props.dimension_height_values}
//                                                             placeholder="Height"
//                                                             onChange={props.onChange}
//                                                             isInvalid={props.dimension_height_touched && props.dimension_height_errors}
//                                                         />
//                                                         <Form.Control.Feedback type="invalid">
//                                                             {props.dimension_height_errors}
//                                                         </Form.Control.Feedback>
//                                                     </InputGroup.Prepend>
//                                                 </InputGroup>
//                                             </Form.Group>
//                                             <Form.Row>
//                                                 <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
//                                                     <Form.Label style={styles.label}>Product Shipping Charges</Form.Label>
//                                                     <InputGroup>
//                                                         <Form.Control
//                                                             type="text"
//                                                             size="sm"
//                                                             placeholder="Enter Product Shipping Charges"
//                                                             name="shipping_charges"
//                                                             value={props.shipping_charges_values}
//                                                             onChange={props.onChange}
//                                                             isInvalid={props.shipping_charges_touched && props.shipping_charges_errors}
//                                                         />
//                                                         <InputGroup.Prepend>
//                                                             <Button variant='primary' size="sm">Riyal</Button>
//                                                         </InputGroup.Prepend>
//                                                         <Form.Control.Feedback type="invalid">
//                                                             {props.shipping_charges_errors}
//                                                         </Form.Control.Feedback>
//                                                     </InputGroup>
//                                                 </Form.Group>
//                                                 <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
//                                                     <Form.Label style={styles.label}>Product Handling Fee</Form.Label>
//                                                     <InputGroup>
//                                                         <Form.Control
//                                                             type="text"
//                                                             size="sm"
//                                                             placeholder="Enter Product Handling Fee"
//                                                             name="handling_fee"
//                                                             value={props.handling_fee_values}
//                                                             onChange={props.onChange}
//                                                             isInvalid={props.handling_fee_touched && props.handling_fee_errors}
//                                                         />
//                                                         <InputGroup.Prepend>
//                                                             <Button variant='primary' size="sm">Riyal</Button>
//                                                         </InputGroup.Prepend>
//                                                         <Form.Control.Feedback type="invalid">
//                                                             {props.handling_fee_errors}
//                                                         </Form.Control.Feedback>
//                                                     </InputGroup>
//                                                 </Form.Group>
//                                             </Form.Row>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="Attributes">
//                                             <Form.Row >
//                                                 <Form.Group as={Col} lg={5} md={5} sm={12} xs={12}>
//                                                     <Form.Label style={styles.label}>Field Name</Form.Label>
//                                                     <Select
//                                                         options={groupedOptions}
//                                                         components={{ Group }}
//                                                         value={props.productAttributeNameSelected}
//                                                         onChange={props.attributeNameHandler}
//                                                     />
//                                                     <Nav.Link style={{ padding: '0%', margin: '0%', fontSize: '14px' }} onClick={() => setModalShow(true)}>
//                                                         Add New
//                                                     </Nav.Link>
//                                                     <AddNewFieldNameModal
//                                                         show={modalShow}
//                                                         onHide={() => setModalShow(false)}
//                                                     />
//                                                 </Form.Group>
//                                                 <Form.Group as={Col} lg={7} md={7} sm={12} xs={12}>
//                                                     <Form.Label style={styles.label}>Field Value </Form.Label>
//                                                     <InputGroup>
//                                                         <Form.Control
//                                                             type="text"
//                                                             placeholder="Enter Value"
//                                                             name="sku"
//                                                             value={props.value}
//                                                             onChange={props.attributeValueHandler}
//                                                         />
//                                                         <Button variant="outline-primary" style={{ marginLeft: '1%' }}
//                                                             onClick={props.addAttributeHandler}>Add</Button>
//                                                     </InputGroup>
//                                                 </Form.Group>
//                                                 <Form.Label style={styles.label}>
//                                                     <span style={{ color: 'red' }}>{props.error}</span>
//                                                 </Form.Label>
//                                             </Form.Row>
//                                             <Form.Row>
//                                                 <Form.Label style={styles.label} className="mr-auto">For Multiple Values add | between values</Form.Label>
//                                                 <Button variant="outline-primary" size="sm"
//                                                     onClick={props.createVariationsHandler}>Create Variations</Button>
//                                             </Form.Row>
//                                             <hr />
//                                             {/* <Card style={{ background: 'lightGray', margin: '0.5% 1%' }}> */}
//                                             {props.attributesArray && props.attributesArray.map((data, index) =>
//                                                 <Form.Row style={{ padding: '0%' }} key={index}>
//                                                     <Form.Group as={Col} lg={5} md={5} sm={12} xs={12}>
//                                                         <Form.Control
//                                                             as="select"
//                                                             size="sm"
//                                                             value={data.productAttributeName}
//                                                             onChange={() => data.productAttributeName}
//                                                         >
//                                                             <option>{data.productAttributeName}</option>
//                                                         </Form.Control>
//                                                     </Form.Group>
//                                                     <Form.Group as={Col} lg={7} md={7} sm={12} xs={12}>
//                                                         <InputGroup>
//                                                             <Form.Control
//                                                                 type="text"
//                                                                 size="sm"
//                                                                 placeholder="Enter Value"
//                                                                 name="sku"
//                                                                 value={data.productAttributeValue}
//                                                                 onChange={() => data.productAttributeValue}
//                                                             />
//                                                             <Button variant="outline-primary" size="sm" style={{ marginLeft: '1%' }}
//                                                                 onClick={() => props.deleteAttributeHandler(index)}> delete</Button>
//                                                         </InputGroup>
//                                                     </Form.Group>
//                                                     {/* <Button variant="outline-primary" size="sm" block style={{ width: '100px' }}
//                                                     onClick={() => props.update(index, data.fieldName, data.fieldValue)}> update</Button> */}
//                                                 </Form.Row>
//                                             )}
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="Variations">
//                                             {variations ?
//                                                 <>
//                                                     <Form.Row>
//                                                         {/* Same Price */}
//                                                         <Form.Group as={Col} >
//                                                             <Form.Label style={styles.label}> Same Price</Form.Label>
//                                                             <InputGroup>
//                                                                 <Form.Control
//                                                                     type="number"
//                                                                     size="sm"
//                                                                     placeholder="Enter Price"
//                                                                     name="samePrice"
//                                                                     value={props.samePriceInput}
//                                                                     onChange={props.variationsSamePriceChanged}
//                                                                     isInvalid={props.samePriceError}
//                                                                 />
//                                                                 <InputGroup.Prepend>
//                                                                     <Button variant='primary' style={styles.label} onClick={props.variationsSamePriceHandler} size="sm">Apply</Button>
//                                                                 </InputGroup.Prepend>
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.samePriceError}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                         {/* Same Stock */}
//                                                         <Form.Group as={Col} >
//                                                             <Form.Label style={styles.label}> Same Stock</Form.Label>
//                                                             <InputGroup>
//                                                                 <Form.Control
//                                                                     type="number"
//                                                                     size="sm"
//                                                                     placeholder="Enter Stock"
//                                                                     name="sameStock"
//                                                                     value={props.sameStockInput}
//                                                                     onChange={props.variationsSameStockChanged}
//                                                                     isInvalid={props.sameStockError}
//                                                                 />
//                                                                 <InputGroup.Prepend>
//                                                                     <Button variant='primary' style={styles.label} onClick={props.variationsSameStockHandler} size="sm">Apply</Button>
//                                                                 </InputGroup.Prepend>
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.sameStockError}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                         {/* Same Image Link */}
//                                                         <Form.Group as={Col} >
//                                                             <Form.Label style={styles.label}> Same Image</Form.Label>
//                                                             <InputGroup>
//                                                                 <Form.Control
//                                                                     type="text"
//                                                                     size="sm"
//                                                                     placeholder="Enter Image Link"
//                                                                     name="sameImgLinkInput"
//                                                                     value={props.sameImgLinkInput}
//                                                                     onChange={props.variationsSameImgLinkChanged}
//                                                                     isInvalid={props.sameImgLinkError}
//                                                                 />
//                                                                 <InputGroup.Prepend>
//                                                                     <Button variant='primary' style={styles.label} onClick={props.variationsSameImgLinkHandler} size="sm">Apply</Button>
//                                                                 </InputGroup.Prepend>
//                                                                 <Form.Control.Feedback type="invalid">
//                                                                     {props.sameImgLinkError}
//                                                                 </Form.Control.Feedback>
//                                                             </InputGroup>
//                                                         </Form.Group>
//                                                     </Form.Row>
//                                                     <hr />
//                                                     {props.variationsArray && props.variationsArray.map((data, index) =>
//                                                         <div key={index} >
//                                                             <Accordion>
//                                                                 <Row noGutters style={{ border: props.variationsErrorHandler(data) }}>
//                                                                     {data.items && data.items.map((d, i) =>
//                                                                         <Form.Group as={Col} lg={3} md={3} sm={6} xs={6} key={i} >
//                                                                             <Form.Control
//                                                                                 type="text"
//                                                                                 size="sm"
//                                                                                 placeholder="Enter Value"
//                                                                                 name="sku"
//                                                                                 value={d.value}
//                                                                                 onChange={() => data.productAttributeValue}
//                                                                             />
//                                                                         </Form.Group>
//                                                                     )}
//                                                                     <div className="mr-auto"></div>
//                                                                     <Accordion.Toggle as={Form.Group} eventKey="0">
//                                                                         <Button variant="outline-primary" size="sm" style={{ marginRight: '10px' }}>
//                                                                             <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
//                                                                         </Button>
//                                                                     </Accordion.Toggle>
//                                                                     <Form.Group style={{ float: 'right' }}>
//                                                                         <Button variant="outline-danger" size="sm" style={{ marginLeft: '1%' }}
//                                                                             onClick={() => props.deleteVariationHandler(index)}> delete</Button>
//                                                                     </Form.Group>
//                                                                 </Row>
//                                                                 <Accordion.Collapse eventKey="0">
//                                                                     <div>
//                                                                         <Form.Row>
//                                                                             <Form.Group as={Col} lg={4} md={4} sm={6} xs={6}>
//                                                                                 <Form.Label style={styles.label}>Product Price<span>*</span></Form.Label>
//                                                                                 <InputGroup>
//                                                                                     <Form.Control
//                                                                                         type="number"
//                                                                                         size="sm"
//                                                                                         placeholder="Enter Product Price"
//                                                                                         name="product_price"
//                                                                                         value={data.price}
//                                                                                         onChange={(e) => props.variationPriceHandler(e, index)}
//                                                                                         isInvalid={data.price_error}
//                                                                                     />
//                                                                                     <Form.Control.Feedback type="invalid">
//                                                                                         {data.price_error}
//                                                                                     </Form.Control.Feedback>
//                                                                                 </InputGroup>
//                                                                             </Form.Group>
//                                                                             <Form.Group as={Col} lg={4} md={4} sm={6} xs={6}>
//                                                                                 <Form.Label style={styles.label}>Product in Stock</Form.Label>
//                                                                                 <Form.Control type="number"
//                                                                                     size="sm"
//                                                                                     name="product_in_stock"
//                                                                                     placeholder="Enter Product In Stock"
//                                                                                     value={data.stock}
//                                                                                     onChange={(e) => props.variationStockHandler(e, index)}
//                                                                                 />
//                                                                                 <Form.Control.Feedback type="invalid">
//                                                                                 </Form.Control.Feedback>
//                                                                             </Form.Group>
//                                                                             <Form.Group as={Col} lg={4} md={4} sm={12} xs={12}>
//                                                                                 <Form.Label style={styles.label}>Image Link</Form.Label>
//                                                                                 <Form.Control type="text"
//                                                                                     size="sm"
//                                                                                     name="image_link"
//                                                                                     placeholder="Enter Image Link"
//                                                                                     value={data.image_link}
//                                                                                     onChange={(e) => props.variationImageLinkHandler(e, index)}
//                                                                                     isInvalid={data.image_link_error}
//                                                                                 />
//                                                                                 <Form.Control.Feedback type="invalid">
//                                                                                     {data.image_link_error}
//                                                                                 </Form.Control.Feedback>
//                                                                             </Form.Group>
//                                                                         </Form.Row>
//                                                                         <Form.Row>
//                                                                             {data.customField && data.customField.map((d, i) =>
//                                                                                 <Form.Group as={Col} lg={3} md={3} sm={6} xs={6} key={i} >
//                                                                                     <Form.Label style={styles.label}>{d.name}</Form.Label>
//                                                                                     <InputGroup>
//                                                                                         <Form.Control
//                                                                                             type="text"
//                                                                                             size="sm"
//                                                                                             placeholder="Enter Value"
//                                                                                             name="sku"
//                                                                                             value={d.value}
//                                                                                             onChange={() => data.productAttributeValue}
//                                                                                         />
//                                                                                         <InputGroup.Prepend>
//                                                                                             <Button variant="outline-danger" size="sm" style={{ marginLeft: '1%' }}
//                                                                                                 onClick={() => props.deleteVariationCustomFieldHandler(index, i)}> delete</Button>
//                                                                                         </InputGroup.Prepend>
//                                                                                     </InputGroup>
//                                                                                 </Form.Group>
//                                                                             )}
//                                                                         </Form.Row>
//                                                                     </div>
//                                                                 </Accordion.Collapse>
//                                                             </Accordion>
//                                                             <hr />
//                                                         </div>
//                                                     )}
//                                                     <Button variant="outline-primary" size="sm" block onClick={props.saveVariationsHandler}> Save Variations</Button>
//                                                 </>
//                                                 :
//                                                 <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
//                                                     <Form.Label>Please First add Attributes from Attributes Tab</Form.Label>
//                                                 </div>
//                                             }
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="Advanced">
//                                             <Form.Row >
//                                                 <Form.Label style={styles.label}>Purchase Note</Form.Label>
//                                                 <InputGroup>
//                                                     <Form.Control
//                                                         type="text"
//                                                         size="sm"
//                                                         placeholder="Enter Purchase Notes"
//                                                         name="purchase_note"
//                                                         value={props.purchase_note_values}
//                                                         onChange={props.onChange}
//                                                         isInvalid={props.purchase_note_touched && props.purchase_note_errors}
//                                                     />
//                                                     <Form.Control.Feedback type="invalid">
//                                                         {props.purchase_note_errors}
//                                                     </Form.Control.Feedback>
//                                                 </InputGroup>
//                                             </Form.Row>
//                                         </Tab.Pane>
//                                         {/* <Tab.Pane eventKey="Commission">
//                                     Commission
//                                     </Tab.Pane> */}
//                                     </Tab.Content>
//                                 </Col>
//                             </Row>
//                         </Tab.Container>
//                     </Card.Body>
//                 </Accordion.Collapse>
//             </Card>
//             <style jsx>
//                 {`
//                     span {
//                         color: red
//                     }
//                     @media (max-width: 991px) {
//                         .linkName {
//                             display: none
//                         }
//                     }
//                 `}
//             </style>
//         </Accordion >
//     )
// }
// const styles = {
//     title_row: {
//         borderBottom: '1px solid gray',
//         padding: '1.5% 4%'
//     },
//     title_fontawesome: {
//         color: 'gray',
//         marginRight: '3%',
//         width: '26px',
//         height: '26px',
//         maxHeight: '26px',
//         maxWidth: '26px',
//     },
//     title: {
//         color: 'gray'
//     },
//     nav_link: {
//         color: 'white',
//         fontSize: '12px',
//         display: 'flex',
//         alignItems: 'center',
//         height: '45px',
//     },
//     row: {
//         margin: '2%',
//         padding: '0%'
//     },
//     card: {
//         width: '100%',
//     },
//     card_header: {
//         alignItems: 'center',
//         // color: '#6A7074',
//         fontSize: '15px',
//         background: 'lightgray'
//     },
//     buttons: {
//         background: `${GlobalStyleSheet.primry_color}`,
//         border: 'none',
//         fontSize: '10px',
//     },
//     submit_btn: {
//         background: `${GlobalStyleSheet.primry_color}`,
//         marginTop: '3%',
//     },
//     label: {
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
//     },
//     term_condition_label: {
//         width: '100%',
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
//         paddingTop: '-10px',
//         marginTop: '-10px',
//     },
//     fontawesome: {
//         color: `${GlobalStyleSheet.primary_text_color}`,
//         width: '15px',
//         height: '15px',
//         maxHeight: '15px',
//         maxWidth: '15px',
//     },
//     product_fontawesome: {
//         color: `${GlobalStyleSheet.primary_text_color}`,
//         marginRight: '10%',
//         width: '15px',
//         height: '15px',
//         maxHeight: '15px',
//         maxWidth: '15px',
//     },
//     variations_fontawesome: {
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         marginRight: '10%',
//         width: '15px',
//         height: '15px',
//         maxHeight: '15px',
//         maxWidth: '15px',
//     },
// }
// export default ProductData;












const groupStyles = {
  border: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].admin_primry_color}`,
  borderRadius: '5px',
  background: 'white',
  color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].admin_primry_color}`
};
const coomponents = {
  DropdownIndicator: null
};

const Group = props => __jsx("div", {
  style: groupStyles,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 861,
    columnNumber: 5
  }
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_11__["components"].Group, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 862,
    columnNumber: 9
  }
})));

const ProductData = props => {
  const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  let variations = true;

  if (props.attributesArray == '') {
    variations = false;
  } else {
    variations = true;
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    style: {
      width: '100%'
    },
    defaultActiveKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: styles.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    style: styles.card_header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    noGutters: true,
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 3,
    md: 3,
    sm: 3,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 25
    }
  }, "Product Data"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 3,
    md: 3,
    sm: 5,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "select",
    name: "product_type",
    size: "sm",
    value: props.product_type_values,
    onChange: e => {
      props.onChange(e);
      props.productTypeHandler(e);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 29
    }
  }, __jsx("option", {
    value: "simple-product",
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 33
    }
  }, " Simple Product "), __jsx("option", {
    value: "variable-prouct",
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 33
    }
  }, " Variable Product "))), __jsx("div", {
    className: "jsx-1365533928" + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"],
    size: "sm",
    eventKey: "0",
    style: {
      float: 'right',
      background: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSlidersH"],
    style: styles.variations_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 29
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    style: {
      padding: '0.5%',
      margin: '0px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Container, {
    id: "left-tabs-example",
    defaultActiveKey: "Inventory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      margin: '0px'
    },
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 906,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
    style: {
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].admin_primry_color}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    variant: "pills",
    className: "flex-column",
    style: {
      margin: '0px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Inventory",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faStoreAlt"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 53
    }
  }, " Inventory ")))), !props.isVariableProduct ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "General",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSlidersH"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 57
    }
  }, " General ")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Attributes",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 57
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faListAlt"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933,
      columnNumber: 61
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
      columnNumber: 61
    }
  }, " Attributes ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 939,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Variations",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 57
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faListAlt"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941,
      columnNumber: 61
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
      columnNumber: 61
    }
  }, " Variations "))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Shipping",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTruck"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 53
    }
  }, " Shipping ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Advanced",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTools"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962,
      columnNumber: 53
    }
  }, " Advanced ")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    style: {
      padding: '2%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "General",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 41
    }
  }, props.isVariableProduct ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 61
    }
  }, "Product Price ", __jsx("span", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 108
    }
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Price",
    name: "product_price",
    value: props.product_price_values,
    onChange: props.onChange,
    isInvalid: props.product_price_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 65
    }
  }, props.product_price_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 61
    }
  }, "Product in Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    name: "product_in_stock",
    value: props.product_in_stock_values,
    onChange: props.onChange,
    isInvalid: props.product_in_stock_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 61
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 61
    }
  }, props.product_in_stock_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 61
    }
  }, "Brand Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Brand Name",
    name: "product_brand_name",
    value: props.product_brand_name_values,
    onChange: props.onChange,
    isInvalid: props.product_brand_name_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 65
    }
  }, props.product_brand_name_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1031,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 61
    }
  }, "Image Link ", __jsx("span", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 105
    }
  }, " * ")), __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_7___default.a, {
    components: coomponents,
    inputValue: props.inputValue,
    isClearable: true,
    isMulti: true,
    menuIsOpen: false,
    onChange: props.simpleProductImageLinkHandler,
    onInputChange: props.simpleProductImageLinkInputChangeHandler,
    onKeyDown: props.simpleProductImageLinkhandleKeyDownHandler,
    placeholder: "Type something and press enter...",
    value: props.imageLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 61
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 61
    }
  }, "Product Warranty (months) "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Warranty",
    name: "product_warranty",
    value: props.product_warranty_values,
    onChange: props.onChange,
    isInvalid: props.product_warranty_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 65
    }
  }, props.product_warranty_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083,
      columnNumber: 61
    }
  }, " Warranty Type "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "select",
    name: "warranty_type",
    size: "sm",
    value: props.warranty_type_values,
    onChange: props.onChange,
    isInvalid: props.warranty_type_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 69
    }
  }, __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094,
      columnNumber: 73
    }
  }, "Waranty Type"), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 73
    }
  }, " No Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 73
    }
  }, " Brand Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 73
    }
  }, " Local Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1098,
      columnNumber: 73
    }
  }, " Local Seller Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 73
    }
  }, " Non-Local Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 73
    }
  }, " Internationsl Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 73
    }
  }, " Internationsl Seller Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 73
    }
  }, " International Manufacturer Warranty "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
      columnNumber: 65
    }
  }, props.product_warranty_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1111,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112,
      columnNumber: 61
    }
  }, "Product Discount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1113,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Discount on on Product(%)",
    name: "product_discount",
    value: props.product_discount_values,
    onChange: props.onChange,
    isInvalid: props.product_discount_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124,
      columnNumber: 69
    }
  }, "%")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 65
    }
  }, props.product_discount_errors)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Inventory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1140,
      columnNumber: 53
    }
  }, "Product SKU"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter SKU (Stock Keeping Unit)",
    name: "sku",
    value: props.sku_values,
    onChange: props.onChange,
    isInvalid: props.sku_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 57
    }
  }, props.sku_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Shipping",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"],
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 49
    }
  }, "Weight (kg)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "product_weight",
    size: "sm",
    value: props.product_weight_values,
    onChange: props.onChange,
    isInvalid: props.product_weight_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165,
      columnNumber: 49
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 49
    }
  }, props.product_weight_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"],
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 49
    }
  }, "Dimensions (cm)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "dimension_length",
    size: "sm",
    value: props.dimension_length_values,
    onChange: props.onChange,
    placeholder: "Length",
    isInvalid: props.dimension_length_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 57
    }
  }, props.dimension_length_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "dimension_width",
    size: "sm",
    value: props.dimension_width_values,
    placeholder: "Width",
    onChange: props.onChange,
    isInvalid: props.dimension_width_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193,
      columnNumber: 53
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1203,
      columnNumber: 57
    }
  }, props.dimension_width_errors), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "dimension_height",
    size: "sm",
    value: props.dimension_height_values,
    placeholder: "Height",
    onChange: props.onChange,
    isInvalid: props.dimension_height_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215,
      columnNumber: 57
    }
  }, props.dimension_height_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1221,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1222,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1223,
      columnNumber: 53
    }
  }, "Product Shipping Charges"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Shipping Charges",
    name: "shipping_charges",
    value: props.shipping_charges_values,
    onChange: props.onChange,
    isInvalid: props.shipping_charges_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1225,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1235,
      columnNumber: 61
    }
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1237,
      columnNumber: 57
    }
  }, props.shipping_charges_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
      columnNumber: 53
    }
  }, "Product Handling Fee"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1244,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Handling Fee",
    name: "handling_fee",
    value: props.handling_fee_values,
    onChange: props.onChange,
    isInvalid: props.handling_fee_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1245,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1255,
      columnNumber: 61
    }
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1257,
      columnNumber: 57
    }
  }, props.handling_fee_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Attributes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1269,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1271,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272,
      columnNumber: 53
    }
  }, "Field Name"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
    options: _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_12__["groupedOptions"],
    components: {
      Group
    },
    value: props.productAttributeNameSelected,
    onChange: props.attributeNameHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273,
      columnNumber: 53
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    style: {
      padding: '0%',
      margin: '0%',
      fontSize: '14px'
    },
    onClick: () => setModalShow(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1279,
      columnNumber: 53
    }
  }, "Add New"), __jsx(_add_new_field_name_model__WEBPACK_IMPORTED_MODULE_13__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1282,
      columnNumber: 53
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1287,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1288,
      columnNumber: 53
    }
  }, "Field Value "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1289,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Enter Value",
    name: "sku",
    value: props.value,
    onChange: props.attributeValueHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1290,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    style: {
      marginLeft: '1%'
    },
    onClick: props.addAttributeHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1297,
      columnNumber: 57
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1301,
      columnNumber: 49
    }
  }, __jsx("span", {
    style: {
      color: 'red'
    },
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1302,
      columnNumber: 53
    }
  }, props.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1305,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1306,
      columnNumber: 49
    }
  }, "For Multiple Values add | between values"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    onClick: props.createVariationsHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1307,
      columnNumber: 49
    }
  }, "Create Variations")), __jsx("hr", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1310,
      columnNumber: 45
    }
  }), props.attributesArray && props.attributesArray.map((data, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    style: {
      padding: '0%'
    },
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1314,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1315,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "select",
    size: "sm",
    value: data.productAttributeName,
    onChange: () => data.productAttributeName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1316,
      columnNumber: 57
    }
  }, __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1322,
      columnNumber: 61
    }
  }, data.productAttributeName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1325,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1326,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: data.productAttributeValue,
    onChange: () => data.productAttributeValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1327,
      columnNumber: 61
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => props.deleteAttributeHandler(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1335,
      columnNumber: 61
    }
  }, " delete")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Variations",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1348,
      columnNumber: 41
    }
  }, variations ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1351,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1353,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1354,
      columnNumber: 61
    }
  }, " Same Price"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1355,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Price",
    name: "samePrice",
    value: props.samePriceInput,
    onChange: props.variationsSamePriceChanged,
    isInvalid: props.samePriceError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1356,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1365,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    style: styles.label,
    onClick: props.variationsSamePriceHandler,
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1366,
      columnNumber: 69
    }
  }, "Apply")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1368,
      columnNumber: 65
    }
  }, props.samePriceError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1374,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1375,
      columnNumber: 61
    }
  }, " Same Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1376,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Stock",
    name: "sameStock",
    value: props.sameStockInput,
    onChange: props.variationsSameStockChanged,
    isInvalid: props.sameStockError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1377,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1386,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    style: styles.label,
    onClick: props.variationsSameStockHandler,
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1387,
      columnNumber: 69
    }
  }, "Apply")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1389,
      columnNumber: 65
    }
  }, props.sameStockError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1395,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1396,
      columnNumber: 61
    }
  }, " Same Image"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1397,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Image Link",
    name: "sameImgLinkInput",
    value: props.sameImgLinkInput,
    onChange: props.variationsSameImgLinkChanged,
    isInvalid: props.sameImgLinkError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1398,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1407,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    style: styles.label,
    onClick: props.variationsSameImgLinkHandler,
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1408,
      columnNumber: 69
    }
  }, "Apply")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1410,
      columnNumber: 65
    }
  }, props.sameImgLinkError)))), __jsx("hr", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1416,
      columnNumber: 53
    }
  }), props.variationsArray && props.variationsArray.map((data, index) => __jsx("div", {
    key: index,
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1418,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1419,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    noGutters: true,
    style: {
      border: props.variationsErrorHandler(data)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1420,
      columnNumber: 65
    }
  }, data.items && data.items.map((d, i) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 3,
    md: 3,
    sm: 6,
    xs: 6,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1422,
      columnNumber: 73
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: d.value,
    onChange: () => data.productAttributeValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1423,
      columnNumber: 77
    }
  }))), __jsx("div", {
    className: "jsx-1365533928" + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1434,
      columnNumber: 69
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group,
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1435,
      columnNumber: 69
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginRight: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1436,
      columnNumber: 73
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSlidersH"],
    style: styles.variations_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1437,
      columnNumber: 77
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    style: {
      float: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1440,
      columnNumber: 69
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => props.deleteVariationHandler(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1441,
      columnNumber: 73
    }
  }, " delete"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1446,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1447,
      columnNumber: 69
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1448,
      columnNumber: 73
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1449,
      columnNumber: 77
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1450,
      columnNumber: 81
    }
  }, "Product Price", __jsx("span", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1450,
      columnNumber: 127
    }
  }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1451,
      columnNumber: 81
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Price",
    name: "product_price",
    value: data.price,
    onChange: e => props.variationPriceHandler(e, index),
    isInvalid: data.price_error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1452,
      columnNumber: 85
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1461,
      columnNumber: 85
    }
  }, data.price_error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1466,
      columnNumber: 77
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1467,
      columnNumber: 81
    }
  }, "Product in Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    name: "product_in_stock",
    placeholder: "Enter Product In Stock",
    value: data.stock,
    onChange: e => props.variationStockHandler(e, index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1468,
      columnNumber: 81
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1475,
      columnNumber: 81
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1478,
      columnNumber: 77
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1479,
      columnNumber: 81
    }
  }, "Image Link"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    name: "image_link",
    placeholder: "Enter Image Link",
    value: data.image_link,
    onChange: e => props.variationImageLinkHandler(e, index),
    isInvalid: data.image_link_error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1480,
      columnNumber: 81
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1488,
      columnNumber: 81
    }
  }, data.image_link_error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1493,
      columnNumber: 73
    }
  }, data.customField && data.customField.map((d, i) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    lg: 3,
    md: 3,
    sm: 6,
    xs: 6,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1495,
      columnNumber: 81
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1496,
      columnNumber: 85
    }
  }, d.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1497,
      columnNumber: 85
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: d.value,
    onChange: () => data.productAttributeValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1498,
      columnNumber: 89
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1506,
      columnNumber: 89
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => props.deleteVariationCustomFieldHandler(index, i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1507,
      columnNumber: 93
    }
  }, " delete"))))))))), __jsx("hr", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1517,
      columnNumber: 61
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    block: true,
    onClick: props.saveVariationsHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1520,
      columnNumber: 53
    }
  }, " Save Variations")) : __jsx("div", {
    style: {
      width: '100%',
      textAlign: 'center',
      marginTop: '10%'
    },
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1523,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1524,
      columnNumber: 53
    }
  }, "Please First add Attributes from Attributes Tab"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Advanced",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1530,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1531,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1532,
      columnNumber: 49
    }
  }, "Purchase Note"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1533,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Purchase Notes",
    name: "purchase_note",
    value: props.purchase_note_values,
    onChange: props.onChange,
    isInvalid: props.purchase_note_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1534,
      columnNumber: 53
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1543,
      columnNumber: 53
    }
  }, props.purchase_note_errors))))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1365533928",
    __self: undefined
  }, "span.jsx-1365533928{color:red;}@media (max-width:991px){.linkName.jsx-1365533928{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LWNvbnRlbnRzXFxwcm9kdWN0LWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdWhEaUIsQUFJb0IsQUFJSSxVQUpILEdBSUkiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXctY29udGVudHNcXHByb2R1Y3QtZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBpbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuLy8gaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbi8vIGltcG9ydCB7IEZvcm0sIENvbCwgUm93LCBDYXJkLCBJbnB1dEdyb3VwLCBCdXR0b24sIFRvYXN0LCBUYWIsIE5hdiwgVGFicywgQWNjb3JkaW9uLCBTcGlubmVyLCBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuLy8gaW1wb3J0IHtcclxuLy8gICAgIGZhUGx1cywgZmFLZXksIGZhU2xpZGVyc0gsIGZhU3RvcmVBbHQsIGZhVHJ1Y2ssIGZhVG9vbHMsIGZhRG9sbGFyU2lnbiwgZmFMaXN0QWx0LCBmYUFycm93QWx0Q2lyY2xlRG93bixcclxuLy8gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuLy8gaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuLy8gaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCI7XHJcbi8vIGltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG4vLyBpbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnO1xyXG5cclxuLy8gaW1wb3J0IFNlbGVjdCwgeyBjb21wb25lbnRzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuLy8gaW1wb3J0IHsgZ3JvdXBlZE9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL2ZpZWxkcy1kYXRhJztcclxuLy8gaW1wb3J0IEFkZE5ld0ZpZWxkTmFtZU1vZGFsIGZyb20gJy4vYWRkLW5ldy1maWVsZC1uYW1lLW1vZGVsJ1xyXG5cclxuLy8gY29uc3QgZ3JvdXBTdHlsZXMgPSB7XHJcbi8vICAgICBib3JkZXI6IGAxcHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuLy8gICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbi8vICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuLy8gfTtcclxuLy8gY29uc3QgY29vbXBvbmVudHMgPSB7XHJcbi8vICAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxuLy8gfTtcclxuLy8gY29uc3QgR3JvdXAgPSBwcm9wcyA9PiAoXHJcbi8vICAgICA8ZGl2IHN0eWxlPXtncm91cFN0eWxlc30+XHJcbi8vICAgICAgICAgPGNvbXBvbmVudHMuR3JvdXAgey4uLnByb3BzfSAvPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICk7XHJcblxyXG4vLyBjb25zdCBQcm9kdWN0RGF0YSA9IHByb3BzID0+IHtcclxuLy8gICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbi8vICAgICBsZXQgdmFyaWF0aW9ucyA9IHRydWU7XHJcbi8vICAgICBpZiAocHJvcHMuYXR0cmlidXRlc0FycmF5ID09ICcnKSB7XHJcbi8vICAgICAgICAgdmFyaWF0aW9ucyA9IGZhbHNlO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICB2YXJpYXRpb25zID0gdHJ1ZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG5cclxuLy8gICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuLy8gICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezN9IHhzPXs0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgRGF0YVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXs1fSB4cz17OH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X3R5cGVcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfdHlwZV92YWx1ZXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHByb3BzLm9uQ2hhbmdlKGUpOyBwcm9wcy5wcm9kdWN0VHlwZUhhbmRsZXIoZSkgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzaW1wbGUtcHJvZHVjdCc+IFNpbXBsZSBQcm9kdWN0IDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2YXJpYWJsZS1wcm91Y3RcIj4gVmFyaWFibGUgUHJvZHVjdCA8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbi8vICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgcGFkZGluZzogJzAuNSUnLCBtYXJnaW46ICcwcHgnIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImxlZnQtdGFicy1leGFtcGxlXCIgZGVmYXVsdEFjdGl2ZUtleT1cIkludmVudG9yeVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19IG5vR3V0dGVycz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAgfX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgdmFyaWFudD1cInBpbGxzXCIgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkludmVudG9yeVwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVN0b3JlQWx0fSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IEludmVudG9yeSA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJHZW5lcmFsXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBHZW5lcmFsIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkF0dHJpYnV0ZXNcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBBdHRyaWJ1dGVzIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlZhcmlhdGlvbnNcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBWYXJpYXRpb25zIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJTaGlwcGluZ1wiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRydWNrfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IFNoaXBwaW5nIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJBZHZhbmNlZFwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRvb2xzfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IEFkdmFuY2VkIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2Lkl0ZW0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkNvbW1pc3Npb25cIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhRG9sbGFyU2lnbn0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IENvbW1pc3Npb24gPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPiAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMiUnIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLkNvbnRlbnQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJHZW5lcmFsXCI+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/IG51bGwgOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IFByaWNlIDxzcGFuPiAqIDwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFByaWNlXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9wcmljZVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfcHJpY2VfdmFsdWVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfcHJpY2VfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X3ByaWNlX2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfcHJpY2VfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgaW4gU3RvY2s8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfaW5fc3RvY2tcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfaW5fc3RvY2tfdmFsdWVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X2luX3N0b2NrX3RvdWNoZWQgJiYgcHJvcHMucHJvZHVjdF9pbl9zdG9ja19lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X2luX3N0b2NrX2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5CcmFuZCBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEJyYW5kIE5hbWVcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2JyYW5kX25hbWVcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X2JyYW5kX25hbWVfdmFsdWVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV90b3VjaGVkICYmIHByb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X2JyYW5kX25hbWVfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkltYWdlIExpbmsgPHNwYW4+ICogPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDcmVhdGFibGVTZWxlY3RcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbWFnZUxpbmt9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdC9FbnRlciBTaXplXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e2Nvb21wb25lbnRzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17cHJvcHMuaW5wdXRWYWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51SXNPcGVuPXtmYWxzZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e3Byb3BzLnNpbXBsZVByb2R1Y3RJbWFnZUxpbmtJbnB1dENoYW5nZUhhbmRsZXJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3Byb3BzLnNpbXBsZVByb2R1Y3RJbWFnZUxpbmtoYW5kbGVLZXlEb3duSGFuZGxlcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBzb21ldGhpbmcgYW5kIHByZXNzIGVudGVyLi4uXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbWFnZUxpbmt9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBDb2xvcjwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMucHJvZHVjdENvbG9yQ2hhbmdlSGFuZGxlcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9kdWN0X2NvbG9yX29wdGlvbnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbG9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIENvbG9yXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PiAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBXYXJyYW50eSAobW9udGhzKSA8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFdhcnJhbnR5XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF93YXJyYW50eVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfdmFsdWVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X3dhcnJhbnR5X2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBXYXJyYW50eSBUeXBlIDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2FycmFudHlfdHlwZVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy53YXJyYW50eV90eXBlX3ZhbHVlc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLndhcnJhbnR5X3R5cGVfdG91Y2hlZCAmJiBwcm9wcy53YXJyYW50eV90eXBlX2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V2FyYW50eSBUeXBlPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE5vIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBCcmFuZCBXYXJyYW50eSA8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTG9jYWwgV2FycmFudHkgPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IExvY2FsIFNlbGxlciBXYXJyYW50eSA8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTm9uLUxvY2FsIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBJbnRlcm5hdGlvbnNsIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBJbnRlcm5hdGlvbnNsIFNlbGxlciBXYXJyYW50eSA8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gSW50ZXJuYXRpb25hbCBNYW51ZmFjdHVyZXIgV2FycmFudHkgPC9vcHRpb24+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgRGlzY291bnQ8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBEaXNjb3VudCBvbiBvbiBQcm9kdWN0KCUpXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9kaXNjb3VudFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfZGlzY291bnRfdmFsdWVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfZGlzY291bnRfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X2Rpc2NvdW50X2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cInNtXCI+JTwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfZGlzY291bnRfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBTS1U8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBTS1UgKFN0b2NrIEtlZXBpbmcgVW5pdClcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNrdV92YWx1ZXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5za3VfdG91Y2hlZCAmJiBwcm9wcy5za3VfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2t1X2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlNoaXBwaW5nXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gbm9HdXR0ZXJzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XZWlnaHQgKGtnKTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X3dlaWdodFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3Rfd2VpZ2h0X3ZhbHVlc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHJvZHVjdF93ZWlnaHRfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X3dlaWdodF9lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X3dlaWdodF9lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBub0d1dHRlcnM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRpbWVuc2lvbnMgKGNtKTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaW1lbnNpb25fbGVuZ3RoXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRpbWVuc2lvbl9sZW5ndGhfdmFsdWVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZ3RoXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5kaW1lbnNpb25fbGVuZ3RoX3RvdWNoZWQgJiYgcHJvcHMuZGltZW5zaW9uX2xlbmd0aF9lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kaW1lbnNpb25fbGVuZ3RoX2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaW1lbnNpb25fd2lkdGhcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRpbWVuc2lvbl93aWR0aF92YWx1ZXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaWR0aFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuZGltZW5zaW9uX3dpZHRoX3RvdWNoZWQgJiYgcHJvcHMuZGltZW5zaW9uX3dpZHRoX2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpbWVuc2lvbl93aWR0aF9lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpbWVuc2lvbl9oZWlnaHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGltZW5zaW9uX2hlaWdodF92YWx1ZXN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVpZ2h0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmRpbWVuc2lvbl9oZWlnaHRfdG91Y2hlZCAmJiBwcm9wcy5kaW1lbnNpb25faGVpZ2h0X2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Nn0gbWQ9ezZ9IHNtPXsxMn0geHM9ezEyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgU2hpcHBpbmcgQ2hhcmdlczwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgU2hpcHBpbmcgQ2hhcmdlc1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19jaGFyZ2VzXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNoaXBwaW5nX2NoYXJnZXNfdmFsdWVzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2hpcHBpbmdfY2hhcmdlc190b3VjaGVkICYmIHByb3BzLnNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPVwic21cIj5SaXlhbDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBIYW5kbGluZyBGZWU8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IEhhbmRsaW5nIEZlZVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYW5kbGluZ19mZWVcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaGFuZGxpbmdfZmVlX3ZhbHVlc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmhhbmRsaW5nX2ZlZV90b3VjaGVkICYmIHByb3BzLmhhbmRsaW5nX2ZlZV9lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9XCJzbVwiPlJpeWFsPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGFuZGxpbmdfZmVlX2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBdHRyaWJ1dGVzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZCBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dyb3VwZWRPcHRpb25zfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgR3JvdXAgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuYXR0cmlidXRlTmFtZUhhbmRsZXJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IHBhZGRpbmc6ICcwJScsIG1hcmdpbjogJzAlJywgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkTmV3RmllbGROYW1lTW9kYWxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17N30gbWQ9ezd9IHNtPXsxMn0geHM9ezEyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZpZWxkIFZhbHVlIDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmF0dHJpYnV0ZVZhbHVlSGFuZGxlcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuYWRkQXR0cmlidXRlSGFuZGxlcn0+QWRkPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e3Byb3BzLmVycm9yfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfSBjbGFzc05hbWU9XCJtci1hdXRvXCI+Rm9yIE11bHRpcGxlIFZhbHVlcyBhZGQgfCBiZXR3ZWVuIHZhbHVlczwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNyZWF0ZVZhcmlhdGlvbnNIYW5kbGVyfT5DcmVhdGUgVmFyaWF0aW9uczwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaWdodEdyYXknLCBtYXJnaW46ICcwLjUlIDElJyB9fT4gKi99XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hdHRyaWJ1dGVzQXJyYXkgJiYgcHJvcHMuYXR0cmlidXRlc0FycmF5Lm1hcCgoZGF0YSwgaW5kZXgpID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17eyBwYWRkaW5nOiAnMCUnIH19IGtleT17aW5kZXh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnByb2R1Y3RBdHRyaWJ1dGVOYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlTmFtZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2RhdGEucHJvZHVjdEF0dHJpYnV0ZU5hbWV9PC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17N30gbWQ9ezd9IHNtPXsxMn0geHM9ezEyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWVcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZUF0dHJpYnV0ZUhhbmRsZXIoaW5kZXgpfT4gZGVsZXRlPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy51cGRhdGUoaW5kZXgsIGRhdGEuZmllbGROYW1lLCBkYXRhLmZpZWxkVmFsdWUpfT4gdXBkYXRlPC9CdXR0b24+ICovfVxyXG5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlZhcmlhdGlvbnNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWF0aW9ucyA/XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgUHJpY2UgKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gU2FtZSBQcmljZTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByaWNlXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtZVByaWNlXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2FtZVByaWNlSW5wdXR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnZhcmlhdGlvbnNTYW1lUHJpY2VDaGFuZ2VkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2FtZVByaWNlRXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e3Byb3BzLnZhcmlhdGlvbnNTYW1lUHJpY2VIYW5kbGVyfSBzaXplPVwic21cIj5BcHBseTwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNhbWVQcmljZUVycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgU3RvY2sgKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gU2FtZSBTdG9jazwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFN0b2NrXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtZVN0b2NrXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2FtZVN0b2NrSW5wdXR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnZhcmlhdGlvbnNTYW1lU3RvY2tDaGFuZ2VkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2FtZVN0b2NrRXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e3Byb3BzLnZhcmlhdGlvbnNTYW1lU3RvY2tIYW5kbGVyfSBzaXplPVwic21cIj5BcHBseTwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNhbWVTdG9ja0Vycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgSW1hZ2UgTGluayAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBTYW1lIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEltYWdlIExpbmtcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYW1lSW1nTGlua0lucHV0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2FtZUltZ0xpbmtJbnB1dH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMudmFyaWF0aW9uc1NhbWVJbWdMaW5rQ2hhbmdlZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnNhbWVJbWdMaW5rRXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e3Byb3BzLnZhcmlhdGlvbnNTYW1lSW1nTGlua0hhbmRsZXJ9IHNpemU9XCJzbVwiPkFwcGx5PC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2FtZUltZ0xpbmtFcnJvcn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnZhcmlhdGlvbnNBcnJheSAmJiBwcm9wcy52YXJpYXRpb25zQXJyYXkubWFwKChkYXRhLCBpbmRleCkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IGJvcmRlcjogcHJvcHMudmFyaWF0aW9uc0Vycm9ySGFuZGxlcihkYXRhKSB9fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pdGVtcyAmJiBkYXRhLml0ZW1zLm1hcCgoZCwgaSkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezN9IG1kPXszfSBzbT17Nn0geHM9ezZ9IGtleT17aX0gPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWVcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkLnZhbHVlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBkYXRhLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Rm9ybS5Hcm91cH0gZXZlbnRLZXk9XCIwXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZVZhcmlhdGlvbkhhbmRsZXIoaW5kZXgpfT4gZGVsZXRlPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17Nn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBQcmljZTxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgUHJpY2VcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfcHJpY2VcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucHJpY2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLnZhcmlhdGlvblByaWNlSGFuZGxlcihlLCBpbmRleCl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2RhdGEucHJpY2VfZXJyb3J9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnByaWNlX2Vycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17Nn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBpbiBTdG9jazwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9pbl9zdG9ja1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBJbiBTdG9ja1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnN0b2NrfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLnZhcmlhdGlvblN0b2NrSGFuZGxlcihlLCBpbmRleCl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5JbWFnZSBMaW5rPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VfbGlua1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgSW1hZ2UgTGlua1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmltYWdlX2xpbmt9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMudmFyaWF0aW9uSW1hZ2VMaW5rSGFuZGxlcihlLCBpbmRleCl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZGF0YS5pbWFnZV9saW5rX2Vycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pbWFnZV9saW5rX2Vycm9yfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jdXN0b21GaWVsZCAmJiBkYXRhLmN1c3RvbUZpZWxkLm1hcCgoZCwgaSkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17M30gbWQ9ezN9IHNtPXs2fSB4cz17Nn0ga2V5PXtpfSA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntkLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZC52YWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlVmFyaWF0aW9uQ3VzdG9tRmllbGRIYW5kbGVyKGluZGV4LCBpKX0+IGRlbGV0ZTwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBibG9jayBvbkNsaWNrPXtwcm9wcy5zYXZlVmFyaWF0aW9uc0hhbmRsZXJ9PiBTYXZlIFZhcmlhdGlvbnM8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMCUnIH19PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGxlYXNlIEZpcnN0IGFkZCBBdHRyaWJ1dGVzIGZyb20gQXR0cmlidXRlcyBUYWI8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkFkdmFuY2VkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHVyY2hhc2UgTm90ZTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQdXJjaGFzZSBOb3Rlc1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlX25vdGVcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZV9ub3RlX3ZhbHVlc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wdXJjaGFzZV9ub3RlX3RvdWNoZWQgJiYgcHJvcHMucHVyY2hhc2Vfbm90ZV9lcnJvcnN9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wdXJjaGFzZV9ub3RlX2Vycm9yc31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRhYi5QYW5lIGV2ZW50S2V5PVwiQ29tbWlzc2lvblwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21taXNzaW9uXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+ICovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5Db250ZW50PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4vLyAgICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbi8vICAgICAgICAgICAgICAgICB7YFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAubGlua05hbWUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGB9XHJcbi8vICAgICAgICAgICAgIDwvc3R5bGU+XHJcbi8vICAgICAgICAgPC9BY2NvcmRpb24gPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBzdHlsZXMgPSB7XHJcbi8vICAgICB0aXRsZV9yb3c6IHtcclxuLy8gICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheScsXHJcbi8vICAgICAgICAgcGFkZGluZzogJzEuNSUgNCUnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuLy8gICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4vLyAgICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4vLyAgICAgICAgIHdpZHRoOiAnMjZweCcsXHJcbi8vICAgICAgICAgaGVpZ2h0OiAnMjZweCcsXHJcbi8vICAgICAgICAgbWF4SGVpZ2h0OiAnMjZweCcsXHJcbi8vICAgICAgICAgbWF4V2lkdGg6ICcyNnB4JyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB0aXRsZToge1xyXG4vLyAgICAgICAgIGNvbG9yOiAnZ3JheSdcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAgbmF2X2xpbms6IHtcclxuLy8gICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuLy8gICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4vLyAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuLy8gICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuLy8gICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuLy8gICAgIH0sXHJcblxyXG5cclxuLy8gICAgIHJvdzoge1xyXG4vLyAgICAgICAgIG1hcmdpbjogJzIlJyxcclxuLy8gICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2FyZDoge1xyXG4vLyAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2FyZF9oZWFkZXI6IHtcclxuLy8gICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuLy8gICAgICAgICAvLyBjb2xvcjogJyM2QTcwNzQnLFxyXG4vLyAgICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ2xpZ2h0Z3JheSdcclxuLy8gICAgIH0sXHJcbi8vICAgICBidXR0b25zOiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBib3JkZXI6ICdub25lJyxcclxuLy8gICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHN1Ym1pdF9idG46IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4vLyAgICAgICAgIG1hcmdpblRvcDogJzMlJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBsYWJlbDoge1xyXG4vLyAgICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuLy8gICAgIH0sXHJcbi8vICAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4vLyAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbi8vICAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4vLyAgICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbi8vICAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGZvbnRhd2Vzb21lOiB7XHJcbi8vICAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbi8vICAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuLy8gICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuLy8gICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuLy8gICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuLy8gICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbi8vICAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuLy8gICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuLy8gICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuLy8gICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuLy8gICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuLy8gICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbi8vICAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuLy8gICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuLy8gICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuLy8gICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4vLyAgICAgfSxcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERhdGE7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHByb2R1Y3Rfc2l6ZV9vcHRpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb25zdHMvcHJvZHVjdC1zaXplLW9wdGlvbnMnXHJcbmltcG9ydCBwcm9kdWN0X2NvbG9yX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LWNvbG9yLW9wdGlvbnMnXHJcblxyXG5pbXBvcnQgeyBGb3JtLCBDb2wsIFJvdywgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uLCBUb2FzdCwgVGFiLCBOYXYsIFRhYnMsIEFjY29yZGlvbiwgU3Bpbm5lciwgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVBsdXMsIGZhS2V5LCBmYVNsaWRlcnNILCBmYVN0b3JlQWx0LCBmYVRydWNrLCBmYVRvb2xzLCBmYURvbGxhclNpZ24sIGZhTGlzdEFsdCwgZmFBcnJvd0FsdENpcmNsZURvd24sXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBDcmVhdGFibGVTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2NyZWF0YWJsZSc7XHJcbmltcG9ydCBSZWFjdFNlbGVjdE1hdGVyaWFsVWkgZnJvbSBcInJlYWN0LXNlbGVjdC1tYXRlcmlhbC11aVwiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJztcclxuXHJcbmltcG9ydCBTZWxlY3QsIHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCB7IGdyb3VwZWRPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9maWVsZHMtZGF0YSc7XHJcbmltcG9ydCBBZGROZXdGaWVsZE5hbWVNb2RhbCBmcm9tICcuL2FkZC1uZXctZmllbGQtbmFtZS1tb2RlbCdcclxuXHJcbmNvbnN0IGdyb3VwU3R5bGVzID0ge1xyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbn07XHJcbmNvbnN0IGNvb21wb25lbnRzID0ge1xyXG4gICAgRHJvcGRvd25JbmRpY2F0b3I6IG51bGwsXHJcbn07XHJcbmNvbnN0IEdyb3VwID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17Z3JvdXBTdHlsZXN9PlxyXG4gICAgICAgIDxjb21wb25lbnRzLkdyb3VwIHsuLi5wcm9wc30gLz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUHJvZHVjdERhdGEgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbGV0IHZhcmlhdGlvbnMgPSB0cnVlO1xyXG4gICAgaWYgKHByb3BzLmF0dHJpYnV0ZXNBcnJheSA9PSAnJykge1xyXG4gICAgICAgIHZhcmlhdGlvbnMgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyaWF0aW9ucyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXszfSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0IERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17NX0geHM9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X3R5cGVfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBwcm9wcy5vbkNoYW5nZShlKTsgcHJvcHMucHJvZHVjdFR5cGVIYW5kbGVyKGUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc2ltcGxlLXByb2R1Y3QnPiBTaW1wbGUgUHJvZHVjdCA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmFyaWFibGUtcHJvdWN0XCI+IFZhcmlhYmxlIFByb2R1Y3QgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXt7IHBhZGRpbmc6ICcwLjUlJywgbWFyZ2luOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5Db250YWluZXIgaWQ9XCJsZWZ0LXRhYnMtZXhhbXBsZVwiIGRlZmF1bHRBY3RpdmVLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JyB9fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IHZhcmlhbnQ9XCJwaWxsc1wiIGNsYXNzTmFtZT1cImZsZXgtY29sdW1uXCIgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTdG9yZUFsdH0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBJbnZlbnRvcnkgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcHJvcHMuaXNWYXJpYWJsZVByb2R1Y3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiR2VuZXJhbFwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gR2VuZXJhbCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJBdHRyaWJ1dGVzXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gQXR0cmlidXRlcyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJWYXJpYXRpb25zXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gVmFyaWF0aW9ucyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiU2hpcHBpbmdcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUcnVja30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBTaGlwcGluZyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWR2YW5jZWRcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUb29sc30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBBZHZhbmNlZCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJDb21taXNzaW9uXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYURvbGxhclNpZ259IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiBDb21taXNzaW9uIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzIlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiR2VuZXJhbFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNWYXJpYWJsZVByb2R1Y3QgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBQcmljZSA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X3ByaWNlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X3ByaWNlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfcHJpY2VfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgaW4gU3RvY2s8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfaW5fc3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfaW5fc3RvY2tfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X2luX3N0b2NrX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfaW5fc3RvY2tfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkJyYW5kIE5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQnJhbmQgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfYnJhbmRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHJvZHVjdF9icmFuZF9uYW1lX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+SW1hZ2UgTGluayA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnNpbXBsZVByb2R1Y3RJbWFnZUxpbmtIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltYWdlTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIFNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17Y29vbXBvbmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtwcm9wcy5pbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJc09wZW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnNpbXBsZVByb2R1Y3RJbWFnZUxpbmtIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17cHJvcHMuc2ltcGxlUHJvZHVjdEltYWdlTGlua0lucHV0Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17cHJvcHMuc2ltcGxlUHJvZHVjdEltYWdlTGlua2hhbmRsZUtleURvd25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHNvbWV0aGluZyBhbmQgcHJlc3MgZW50ZXIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltYWdlTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IENvbG9yPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5wcm9kdWN0Q29sb3JDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2R1Y3RfY29sb3Jfb3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QvRW50ZXIgQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IFdhcnJhbnR5IChtb250aHMpIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgV2FycmFudHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X3dhcnJhbnR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdF93YXJyYW50eV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHJvZHVjdF93YXJyYW50eV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X3dhcnJhbnR5X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gV2FycmFudHkgVHlwZSA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndhcnJhbnR5X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMud2FycmFudHlfdHlwZV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy53YXJyYW50eV90eXBlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V2FyYW50eSBUeXBlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE5vIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBCcmFuZCBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTG9jYWwgV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IExvY2FsIFNlbGxlciBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTm9uLUxvY2FsIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBJbnRlcm5hdGlvbnNsIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBJbnRlcm5hdGlvbnNsIFNlbGxlciBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gSW50ZXJuYXRpb25hbCBNYW51ZmFjdHVyZXIgV2FycmFudHkgPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgRGlzY291bnQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBEaXNjb3VudCBvbiBvbiBQcm9kdWN0KCUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9kaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfZGlzY291bnRfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfZGlzY291bnRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPVwic21cIj4lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdF9kaXNjb3VudF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkludmVudG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IFNLVTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFNLVSAoU3RvY2sgS2VlcGluZyBVbml0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2t1X3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnNrdV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5za3VfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiU2hpcHBpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PldlaWdodCAoa2cpPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3Rfd2VpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdF93ZWlnaHRfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X3dlaWdodF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X3dlaWdodF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRpbWVuc2lvbnMgKGNtKTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaW1lbnNpb25fbGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRpbWVuc2lvbl9sZW5ndGhfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5kaW1lbnNpb25fbGVuZ3RoX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpbWVuc2lvbl9sZW5ndGhfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpbWVuc2lvbl93aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGltZW5zaW9uX3dpZHRoX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5kaW1lbnNpb25fd2lkdGhfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGltZW5zaW9uX3dpZHRoX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGltZW5zaW9uX2hlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kaW1lbnNpb25faGVpZ2h0X3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuZGltZW5zaW9uX2hlaWdodF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kaW1lbnNpb25faGVpZ2h0X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IFNoaXBwaW5nIENoYXJnZXM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFNoaXBwaW5nIENoYXJnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfY2hhcmdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zaGlwcGluZ19jaGFyZ2VzX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPVwic21cIj5SaXlhbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBIYW5kbGluZyBGZWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IEhhbmRsaW5nIEZlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYW5kbGluZ19mZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaGFuZGxpbmdfZmVlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmhhbmRsaW5nX2ZlZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9XCJzbVwiPlJpeWFsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGFuZGxpbmdfZmVlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZCBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dyb3VwZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgR3JvdXAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuYXR0cmlidXRlTmFtZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IHBhZGRpbmc6ICcwJScsIG1hcmdpbjogJzAlJywgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkTmV3RmllbGROYW1lTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17N30gbWQ9ezd9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZpZWxkIFZhbHVlIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmF0dHJpYnV0ZVZhbHVlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuYWRkQXR0cmlidXRlSGFuZGxlcn0+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e3Byb3BzLmVycm9yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfSBjbGFzc05hbWU9XCJtci1hdXRvXCI+Rm9yIE11bHRpcGxlIFZhbHVlcyBhZGQgfCBiZXR3ZWVuIHZhbHVlczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNyZWF0ZVZhcmlhdGlvbnNIYW5kbGVyfT5DcmVhdGUgVmFyaWF0aW9uczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaWdodEdyYXknLCBtYXJnaW46ICcwLjUlIDElJyB9fT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hdHRyaWJ1dGVzQXJyYXkgJiYgcHJvcHMuYXR0cmlidXRlc0FycmF5Lm1hcCgoZGF0YSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17eyBwYWRkaW5nOiAnMCUnIH19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnByb2R1Y3RBdHRyaWJ1dGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2RhdGEucHJvZHVjdEF0dHJpYnV0ZU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17N30gbWQ9ezd9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZUF0dHJpYnV0ZUhhbmRsZXIoaW5kZXgpfT4gZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy51cGRhdGUoaW5kZXgsIGRhdGEuZmllbGROYW1lLCBkYXRhLmZpZWxkVmFsdWUpfT4gdXBkYXRlPC9CdXR0b24+ICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlZhcmlhdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWF0aW9ucyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgUHJpY2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gU2FtZSBQcmljZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtZVByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2FtZVByaWNlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnZhcmlhdGlvbnNTYW1lUHJpY2VDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2FtZVByaWNlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e3Byb3BzLnZhcmlhdGlvbnNTYW1lUHJpY2VIYW5kbGVyfSBzaXplPVwic21cIj5BcHBseTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNhbWVQcmljZUVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgU3RvY2sgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gU2FtZSBTdG9jazwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtZVN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2FtZVN0b2NrSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnZhcmlhdGlvbnNTYW1lU3RvY2tDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2FtZVN0b2NrRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e3Byb3BzLnZhcmlhdGlvbnNTYW1lU3RvY2tIYW5kbGVyfSBzaXplPVwic21cIj5BcHBseTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNhbWVTdG9ja0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgSW1hZ2UgTGluayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBTYW1lIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEltYWdlIExpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYW1lSW1nTGlua0lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2FtZUltZ0xpbmtJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMudmFyaWF0aW9uc1NhbWVJbWdMaW5rQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnNhbWVJbWdMaW5rRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e3Byb3BzLnZhcmlhdGlvbnNTYW1lSW1nTGlua0hhbmRsZXJ9IHNpemU9XCJzbVwiPkFwcGx5PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2FtZUltZ0xpbmtFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnZhcmlhdGlvbnNBcnJheSAmJiBwcm9wcy52YXJpYXRpb25zQXJyYXkubWFwKChkYXRhLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IGJvcmRlcjogcHJvcHMudmFyaWF0aW9uc0Vycm9ySGFuZGxlcihkYXRhKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pdGVtcyAmJiBkYXRhLml0ZW1zLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezN9IG1kPXszfSBzbT17Nn0geHM9ezZ9IGtleT17aX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBkYXRhLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Rm9ybS5Hcm91cH0gZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZVZhcmlhdGlvbkhhbmRsZXIoaW5kZXgpfT4gZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBQcmljZTxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLnZhcmlhdGlvblByaWNlSGFuZGxlcihlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2RhdGEucHJpY2VfZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnByaWNlX2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBpbiBTdG9jazwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9pbl9zdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBJbiBTdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnN0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLnZhcmlhdGlvblN0b2NrSGFuZGxlcihlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5JbWFnZSBMaW5rPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgSW1hZ2UgTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmltYWdlX2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMudmFyaWF0aW9uSW1hZ2VMaW5rSGFuZGxlcihlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZGF0YS5pbWFnZV9saW5rX2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pbWFnZV9saW5rX2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jdXN0b21GaWVsZCAmJiBkYXRhLmN1c3RvbUZpZWxkLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17M30gbWQ9ezN9IHNtPXs2fSB4cz17Nn0ga2V5PXtpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntkLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlVmFyaWF0aW9uQ3VzdG9tRmllbGRIYW5kbGVyKGluZGV4LCBpKX0+IGRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBibG9jayBvbkNsaWNrPXtwcm9wcy5zYXZlVmFyaWF0aW9uc0hhbmRsZXJ9PiBTYXZlIFZhcmlhdGlvbnM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGxlYXNlIEZpcnN0IGFkZCBBdHRyaWJ1dGVzIGZyb20gQXR0cmlidXRlcyBUYWI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkFkdmFuY2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHVyY2hhc2UgTm90ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQdXJjaGFzZSBOb3Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlX25vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZV9ub3RlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wdXJjaGFzZV9ub3RlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnB1cmNoYXNlX25vdGVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGFiLlBhbmUgZXZlbnRLZXk9XCJDb21taXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1pc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saW5rTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uID5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxLjUlIDQlJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjZweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgcGFkZGluZzogJzAlJ1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgLy8gY29sb3I6ICcjNkE3MDc0JyxcclxuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdsaWdodGdyYXknXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBzdWJtaXRfYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5Ub3A6ICczJScsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICB9LFxyXG4gICAgdGVybV9jb25kaXRpb25fbGFiZWw6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICBwYWRkaW5nVG9wOiAnLTEwcHgnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJy0xMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICB2YXJpYXRpb25zX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REYXRhOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new-contents\\\\product-data.js */"));
};

const styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '1.5% 4%'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '26px',
    height: '26px',
    maxHeight: '26px',
    maxWidth: '26px'
  },
  title: {
    color: 'gray'
  },
  nav_link: {
    color: 'white',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%'
  },
  card_header: {
    alignItems: 'center',
    // color: '#6A7074',
    fontSize: '15px',
    background: 'lightgray'
  },
  buttons: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].primry_color}`,
    border: 'none',
    fontSize: '10px'
  },
  submit_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].primry_color}`,
    marginTop: '3%'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].form_label_fontsize}`
  },
  term_condition_label: {
    width: '100%',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].form_label_fontsize}`,
    paddingTop: '-10px',
    marginTop: '-10px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].primary_text_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].primary_text_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  variations_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProductData);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select/creatable */ "react-select/creatable");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select_creatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../alert-modal */ "./src/pages/components/alert-modal.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-new-contents/custom-fields */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js");
/* harmony import */ var _add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-new-contents/product-data */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js");
/* harmony import */ var _sdk_consts_product_size_options__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-size-options */ "./src/sdk/consts/product-size-options.js");
/* harmony import */ var _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-color-options */ "./src/sdk/consts/product-color-options.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















 // Option List for select Product Category (when offline)

let product_categories_options = [{
  value: 'Shoe',
  label: 'Shoe'
}, {
  value: 'Cloth',
  label: 'Cloth'
}, {
  value: 'Shirt',
  label: 'Shirt'
}, {
  value: 'Pant',
  label: 'Pant'
}];
const product_sub_categories_options = [{
  value: 'Sub Shoe',
  label: 'Sub Shoe'
}, {
  value: 'Sub Cloth',
  label: 'Sub Cloth'
}, {
  value: 'Sub Shirt',
  label: 'Sub Shirt'
}];
const product_sub_sub_categories_options = [{
  value: 'Foo',
  label: 'Foo'
}, {
  value: 'Loo',
  label: 'Loo'
}, {
  value: 'Khoo',
  label: 'Khoo'
}]; // For React-Select

const components = {
  DropdownIndicator: null
}; // Model For React-Select

const createOption = label => ({
  value: label,
  label
});

const react_select_styles = {
  control: base => _objectSpread({}, base, {
    fontSize: '13px'
  }),
  dropdownIndicator: base => _objectSpread({}, base, {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: '13px'
  }),
  clearIndicator: base => _objectSpread({}, base, {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: '13px'
  }),
  option: provided => _objectSpread({}, provided, {
    fontSize: '13px'
  })
}; // Yup Schema for validation fields

const schema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
  product_name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required("Enter Product Name").min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_description: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required("Enter Product Name").min(5, "Must have at least 5 characters").max(200, "Can't be longer than 200 characters"),
  // Product Data
  product_type: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  // => Inventory
  sku: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => General(Simple-Product)
  product_price: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000000').max(1000000, 'Enter Between 1-1000000'),
  product_in_stock: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(1, "Must grater than 1 digit").max(1000000, "Can't be longer than 1000000"),
  product_brand_name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_image_link: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_warranty: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-200').max(200, 'Enter Between 0-200'),
  warranty_type: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_discount: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => Attributes (Variable Product)
  purchase_note: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  // => Variations (Variable Product)
  product_variations: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  // => Shipping
  product_weight: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_length: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_width: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_height: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  shipping_charges: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100'),
  handling_fee: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  // => Advanve
  purchase_note: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  // Custom Fields
  custom_fields: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_category: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_sub_category: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_sub_sub_category: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  dangerous_goods: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_tags: yup__WEBPACK_IMPORTED_MODULE_4__["string"]()
});

class AddNew extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSimpleProductImageLinkChange", (arr, actionMeta) => {
      this.setState({
        simple_product_image_link: arr,
        image_linkError: 'no_error',
        image_linkErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleSimpleProductImageLinkInputChange", arr => {
      this.setState({
        inputValue: arr
      });
    });

    _defineProperty(this, "handleSimpleProductImage_linkKeyDown", event => {
      const inputValue = this.state.inputValue;
      const simple_product_image_link = this.state.simple_product_image_link;
      if (!inputValue) return;

      switch (event.key) {
        case 'Enter':
        case 'Tab':
          this.setState({
            inputValue: '',
            simple_product_image_link: [...simple_product_image_link, createOption(inputValue)]
          });
          event.preventDefault();
      }
    });

    _defineProperty(this, "handleProductAttributeValueChange", e => {
      this.setState({
        productAttributeValue: e.target.value
      });
    });

    _defineProperty(this, "handleAddProductAttributeClick", () => {
      if (this.state.productAttributeName != '' && this.state.productAttributeValue != '') {
        this.setState({
          productAttributeError: ''
        });
        const copyArray = Object.assign([], this.state.productAttributesArray);
        copyArray.push({
          productAttributeName: this.state.productAttributeName,
          productAttributeValue: this.state.productAttributeValue
        });
        this.setState({
          productAttributeName: ''
        });
        this.setState({
          productAttributeValue: ''
        });
        this.setState({
          productAttributeNameSelected: ''
        });
        this.setState({
          productAttributesArray: copyArray
        });
      } else {
        this.setState({
          productAttributeError: 'Enter Field Name and Value'
        });
      }
    });

    _defineProperty(this, "handleCreateVariationsClick", () => {
      var allArrays = [];
      this.state.productAttributesArray.forEach(element => {
        var trim = element.productAttributeValue.split(' ').join('');
        var splitArray = trim.split('|');
        allArrays.push(splitArray);
      });
      const array = this.allPossibleCases(allArrays);
      var data = [];
      array.forEach(element => {
        const split = element.split('-');
        let item = [];
        split.forEach((e, i) => {
          item.push({
            name: this.state.productAttributesArray[i].productAttributeName,
            value: e
          });
        });
        data.push({
          items: item,
          price: '',
          stock: '1',
          image_link: '',
          price_error: '',
          image_link_error: '',
          customField: []
        });
      }); // console.log("split Array: ", data)

      this.setState({
        variationsArray: data
      });
    });

    _defineProperty(this, "handleUpdateProductAttributeClick", (index, name, value) => {
      const copyArray = Object.assign([], this.state.productAttributesArray);
      copyArray[index] = {
        productAttributeName: name,
        productAttributeValue: value
      };
      this.setState({
        productAttributesArray: copyArray
      });
    });

    _defineProperty(this, "handleDeleteProductAttributeClick", index => {
      const copyArray = Object.assign([], this.state.productAttributesArray);
      copyArray.splice(index, 1);
      this.setState({
        productAttributesArray: copyArray
      });
    });

    _defineProperty(this, "handleVariationsSamePriceChanged", e => {
      if (e.target.value >= 0) {
        this.setState({
          samePriceInput: e.target.value
        });
      }
    });

    _defineProperty(this, "handleVariationsSamePriceClick", e => {
      if (this.state.samePriceInput != '') {
        const copyArray = Object.assign([], this.state.variationsArray);
        copyArray.forEach(element => {
          element.price = this.state.samePriceInput;
        });
        this.setState({
          variationsArray: copyArray
        });
      } else {
        this.setState({
          samePriceError: 'Enter Value'
        });
      }
    });

    _defineProperty(this, "handleVariationsSameStockChanged", e => {
      if (e.target.value >= 0) {
        this.setState({
          sameStockInput: e.target.value
        });
      }
    });

    _defineProperty(this, "handleVariationsSameStockClick", () => {
      if (this.state.sameStockInput != '') {
        const copyArray = Object.assign([], this.state.variationsArray);
        copyArray.forEach(element => {
          element.stock = this.state.sameStockInput;
        });
        this.setState({
          variationsArray: copyArray
        });
      } else {
        this.setState({
          sameStockError: 'Enter Value'
        });
      }
    });

    _defineProperty(this, "handleVariationsSameImgLinkChanged", e => {
      this.setState({
        sameImgLinkInput: e.target.value
      });
    });

    _defineProperty(this, "handleVariationsSameImgLinkClick", () => {
      if (this.state.sameImgLinkInput != '') {
        const copyArray = Object.assign([], this.state.variationsArray);
        copyArray.forEach(element => {
          element.image_link = this.state.sameImgLinkInput;
        });
        this.setState({
          variationsArray: copyArray
        });
      } else {
        this.setState({
          sameImgLinkError: 'Enter Value'
        });
      }
    });

    _defineProperty(this, "handleVariationPriceChange", (e, index) => {
      const copyArray = Object.assign([], this.state.variationsArray);
      let object = copyArray[index];

      if (e.target.value >= 0) {
        object.price = e.target.value;
        copyArray[index] = object;
        this.setState({
          variationsArray: copyArray
        });
      }
    });

    _defineProperty(this, "handleVariationProductInStockChang", (e, index) => {
      const copyArray = Object.assign([], this.state.variationsArray);
      let object = copyArray[index];

      if (e.target.value >= 0) {
        object.stock = e.target.value;
        copyArray[index] = object;
        this.setState({
          variationsArray: copyArray
        });
      }
    });

    _defineProperty(this, "handleVariationImageLinkChange", (e, index) => {
      const copyArray = Object.assign([], this.state.variationsArray);
      let object = copyArray[index];
      object.image_link = e.target.value;
      copyArray[index] = object;
      this.setState({
        variationsArray: copyArray
      });
    });

    _defineProperty(this, "handleDeleteProductVariationClick", index => {
      const copyArray = Object.assign([], this.state.variationsArray);
      copyArray.splice(index, 1);
      this.setState({
        variationsArray: copyArray
      });
    });

    _defineProperty(this, "handleDeleteVariationCustomFieldClick", (index, i) => {
      const copyArray = Object.assign([], this.state.variationsArray);
      copyArray[index].customField.splice(i, 1);
      this.setState({
        variationsArray: copyArray
      });
    });

    _defineProperty(this, "handleSaveVariationsClick", () => {
      const copyArray = Object.assign([], this.state.variationsArray);
      let flag = true;
      copyArray.forEach(element => {
        if (element.price == '' || element.image_link == '') {
          flag = false;

          if (element.price == '') {
            element.price_error = 'Enter price';
          }

          if (element.image_link == '') {
            element.image_link_error = 'Enter Image Link';
          }
        } else {
          element.price_error = '';
          element.image_link_error = '';
        }
      });

      if (flag == true) {
        this.setState({
          isVariationsSaved: true
        });
      }

      this.setState({
        variationsArray: copyArray
      });
    });

    _defineProperty(this, "handleVariationsErrorCheck", data => {
      if (data.price_error != '' || data.image_link_error != '') {
        return '1px solid red';
      } else {
        return 'none';
      }
    });

    _defineProperty(this, "handleCustomFieldValueChange", e => {
      this.setState({
        customFieldValue: e.target.value
      });
    });

    _defineProperty(this, "handleAddCustomFieldBtnClick", () => {
      if (this.state.customFieldName != '' && this.state.customFieldValue != '') {
        const copyArray = Object.assign([], this.state.variationsArray);

        if (this.state.isVariableProduct == true) {
          copyArray.forEach(element => {
            element.customField.push({
              name: this.state.customFieldName,
              value: this.state.customFieldValue
            });
            console.log("element.customField: ", element.customField);
          });
          this.setState({
            variationsArray: copyArray
          });
        } else {
          this.state.customFieldsArray.push({
            name: this.state.customFieldName,
            value: this.state.customFieldValue
          });
        }

        this.setState({
          customFieldError: ''
        });
        this.setState({
          customFieldName: ''
        });
        this.setState({
          customFieldValue: ''
        });
        this.setState({
          customFieldNameSelected: ''
        });
      } else {
        this.setState({
          customFieldError: 'Enter Field Name and Value'
        });
      }
    });

    _defineProperty(this, "updateCustomFieldsClick", (index, name, value) => {
      const copyArray = Object.assign([], this.state.customFieldsArray);
      copyArray[index] = {
        customFieldName: name,
        customFieldValue: value
      };
      this.setState({
        customFieldsArray: copyArray
      });
    });

    _defineProperty(this, "deleteCustomFieldsClick", index => {
      const copyArray = Object.assign([], this.state.customFieldsArray);
      copyArray.splice(index, 1);
      this.setState({
        customFieldsArray: copyArray
      });
    });

    _defineProperty(this, "handleProductCategoryChange", value => {
      this.setState({
        productCategories: value,
        subCategoryDisabled: false,
        categoryErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleProductSubCategoryChange", value => {
      this.setState({
        productSubCategories: value,
        subSubCategoryDisabled: false,
        subCategoryError: 'no_error',
        subCategoryErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleProductSubSubCategoryChange", value => {
      this.setState({
        productSubSubCategories: value,
        subSubCategoryError: 'no_error',
        subSubCategoryErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleDangerousGoodsChange", (e, name) => {
      const copyArray = Object.assign([], this.state.dangerousGoodsArray);

      if (e.target.checked) {
        copyArray.push({
          value: name
        });
      } else {
        copyArray.forEach((element, index) => {
          if (element.value == name) {
            copyArray.splice(index, 1);
          }
        });
      }

      this.setState({
        dangerousGoodsArray: copyArray
      });
    });

    _defineProperty(this, "handleProductTagChange", arr => {
      this.setState({
        productTags: arr
      });
    });

    this.state = {
      isLoading: false,
      showToast: false,
      showVariationsErrorAlert: false,
      showSimpleProductPriceImgLinkErrorrAlert: false,
      isVariableProduct: false,
      productCategories: '',
      productSubCategories: '',
      productSubSubCategories: '',
      subCategoryDisabled: true,
      subSubCategoryDisabled: true,
      subCategoryError: 'no_error',
      subSubCategoryError: 'no_error',
      categoryErrorDiv: 'BorderDiv',
      subCategoryErrorDiv: 'BorderDiv',
      subSubategoryErrorDiv: 'BorderDiv',
      productTags: [],
      warrantyType: 'Year',
      inputValue: '',
      simple_product_image_link: [],
      simple_product_image_link: [],
      image_linkError: 'no_error',
      image_linkErrorDiv: 'BorderDiv',
      // Product Attributes
      productAttributesArray: [],
      productAttributeName: '',
      productAttributeValue: '',
      productAttributeError: '',
      productAttributeNameSelected: '',
      variationsArray: [],
      isVariationsSaved: false,
      samePriceInput: '',
      samePriceError: '',
      sameStockInput: '',
      sameStockError: '',
      sameImgLinkInput: '',
      sameImgLinkError: '',
      // Custom Fields
      customFieldsArray: [],
      customFieldName: '',
      customFieldValue: '',
      customFieldError: '',
      customFieldNameSelected: '',
      // Dangerous Goods
      dangerousGoodsArray: []
    };
    this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
    this.handleAddCustomFieldBtnClick = this.handleAddCustomFieldBtnClick.bind(this); // this.uploadProduct = this.uploadProduct.bind(this);
  } // Getting Product Categories from DB


  async componentDidMount() {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + '/api/products-categories/get-all';

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url);
      product_categories_options = response.data.data;
    } catch (error) {
      console.log(error);
    }
  } //  Submit data to api


  async uploadProduct(data, currentComponent) {
    console.log('data: ', data);
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + '/api/products/add';
    await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, {
      data
    }, {
      headers: {
        'authorization': await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__["getUncodededTokenFromStorage"])()
      }
    }).then(function (response) {
      currentComponent.setState({
        isLoading: false
      });
      currentComponent.setState({
        showToast: true
      });
      return true;
    }).catch(function (error) {
      currentComponent.setState({
        isLoading: false
      });
      alert('Error: ', error.response.data.message);
      return false;
    });
  }

  handleProductTypeChange(e) {
    if (e.target.value == 'variable-prouct') {
      this.setState({
        isVariableProduct: true
      });
    } else {
      this.setState({
        isVariableProduct: false
      });
    }
  } // Product Data
  // => Simple Product Image Link


  // => End Of Simple Product Image Link
  // => Product Attributes (Variable Product)
  handleProductAttributeNameChange(e) {
    this.setState({
      productAttributeName: e.value
    });
    this.setState({
      productAttributeNameSelected: e
    });
  }

  allPossibleCases(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      var result = [];
      var allCasesOfRest = this.allPossibleCases(arr.slice(1)); // recur with the rest of array

      for (var i = 0; i < allCasesOfRest.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          result.push(arr[0][j] + "-" + allCasesOfRest[i]);
        }
      }

      return result;
    }
  }

  // => End Of Product Variations
  // End of Product Data
  // Custom Fields
  handleCustomFieldNameChange(e) {
    this.setState({
      customFieldName: e.value
    });
    this.setState({
      customFieldNameSelected: e
    });
  }

  render() {
    var showCustomFields = false;

    if (this.state.variationsArray.length == 0 && this.state.isVariableProduct == true) {
      showCustomFields = true;
    } else {
      showCustomFields = false;
    }

    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      validationSchema: schema,
      initialValues: {
        product_type: 'simple-product'
      },
      onSubmit: (values, {
        setSubmitting,
        resetForm
      }) => {
        if (this.state.productCategories == '' || this.state.productSubCategories == '' || this.state.productSubSubCategories == '' || this.state.simple_product_image_link == '' && values.product_type == 'simple-product') {
          if (this.state.productCategories == '') {
            this.setState({
              categoryErrorDiv: 'RedBorderDiv'
            });
          }

          if (this.state.productSubCategories == '') {
            this.setState({
              subCategoryErrorDiv: 'RedBorderDiv'
            });
          }

          if (this.state.productSubSubCategories == '') {
            this.setState({
              subSubCategoryErrorDiv: 'RedBorderDiv'
            });
          }

          if (this.state.simple_product_image_link == '' && values.product_type == 'simple-product') {
            this.setState({
              showSimpleProductPriceImgLinkErrorrAlert: true,
              image_linkError: "error",
              image_linkErrorDiv: 'RedBorderDiv'
            });
          }

          setSubmitting(false);
        } else if (this.state.isVariationsSaved == false && values.product_type == 'variable-prouct') {
          this.setState({
            showVariationsErrorAlert: true
          });
        } else {
          resetForm();
          setSubmitting(true);
          this.setState({
            isLoading: true
          });
          setTimeout(() => {
            let array = []; // this.state.productCategories.forEach(element => {
            //     array.push(element.value)
            // })

            values.product_category = this.state.productCategories;
            values.product_sub_category = this.state.productSubCategories;
            values.product_sub_sub_category = this.state.productSubSubCategories; // array = [];
            // this.state.productTags.forEach(element => {
            //     array.push(element.value)
            // })

            values.product_tags = this.state.productTags;
            values.dangerous_goods = this.state.dangerousGoodsArray;

            if (values.product_type == 'simple-product') {
              // array = [];
              // this.state.simple_product_image_link.forEach(element => {
              //     array.push(element.value)
              // })
              values.product_image_link = this.state.simple_product_image_link;

              if (this.state.customFieldsArray != []) {
                // array = []
                // this.state.customFieldsArray.forEach(custom => {
                //     var obj = {};
                //     obj[custom.customFieldName] = custom.customFieldValue;
                //     array.push(obj)
                // });
                values.custom_fields = this.state.customFieldsArray;
              }
            } else {
              array = [];
              this.state.variationsArray.forEach((element, index) => {
                let item = [];
                element.items.forEach(e => {
                  item.push({
                    name: e.name,
                    value: e.value
                  });
                });
                element.customField.forEach(e => {
                  item.push({
                    name: e.name,
                    value: e.value
                  });
                });
                item.push({
                  name: 'price',
                  value: element.price
                });
                item.push({
                  name: 'stock',
                  value: element.stock
                });
                item.push({
                  name: 'image_link',
                  value: element.image_link
                });
                array.push({
                  item: item
                });
              });
              values.product_variations = array;
            }

            resetForm();

            if (this.uploadProduct(values, this)) {
              this.setState({
                showSimpleProductPriceImgLinkErrorrAlert: false,
                isVariableProduct: false,
                productCategories: '',
                productSubCategories: '',
                productSubSubCategories: '',
                subCategoryDisabled: true,
                subSubCategoryDisabled: true,
                categoryErrorDiv: 'BorderDiv',
                subCategoryErrorDiv: 'BorderDiv',
                subSubategoryErrorDiv: 'BorderDiv',
                productTags: [],
                warrantyType: 'Year',
                inputValue: '',
                simple_product_image_link: [],
                simple_product_image_link: [],
                image_linkError: 'no_error',
                image_linkErrorDiv: 'BorderDiv',
                // Product Attributes
                productAttributesArray: [],
                productAttributeName: '',
                productAttributeValue: '',
                productAttributeError: '',
                productAttributeNameSelected: '',
                variationsArray: [],
                isVariationsSaved: false,
                samePriceInput: '',
                samePriceError: '',
                sameStockInput: '',
                sameStockError: '',
                sameImgLinkInput: '',
                sameImgLinkError: '',
                // Custom Fields
                customFieldsArray: [],
                customFieldName: '',
                customFieldValue: '',
                customFieldError: '',
                customFieldNameSelected: '',
                // Dangerous Goods
                dangerousGoodsArray: []
              });
            }

            setSubmitting(false);
          }, 500);
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
        columnNumber: 13
      }
    }, ({
      handleSubmit,
      handleChange,
      values,
      touched,
      isValid,
      errors,
      handleBlur,
      isSubmitting
    }) => __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.title_row,
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 29
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"],
      style: styles.title_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680,
        columnNumber: 33
      }
    }), __jsx("div", {
      style: styles.title,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]) + " " + "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 33
      }
    }, " Add New Product")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      noValidate: true,
      onSubmit: handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 29
      }
    }, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onHide: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      header: 'Success',
      message: 'Product Uploaded Successfully',
      iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faThumbsUp"],
      color: "#00b300",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 33
      }
    }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onHide: e => this.setState({
        showVariationsErrorAlert: false
      }),
      show: this.state.showVariationsErrorAlert,
      header: 'Error',
      message: 'Please Add/Save Variations First',
      iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"],
      color: "#ff3333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 33
      }
    }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onHide: e => this.setState({
        showSimpleProductPriceImgLinkErrorrAlert: false
      }),
      show: this.state.showSimpleProductPriceImgLinkErrorrAlert,
      header: 'Error',
      message: 'Enter Price/Image Link in General Tab First',
      iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"],
      color: "#ff3333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 33
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: {
        paddingTop: '2%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 9,
      md: 9,
      sm: 12,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 45
      }
    }, "Product Name", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 90
      }
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      type: "text",
      placeholder: "Enter Product Name",
      name: "product_name",
      value: values.product_name || '',
      onChange: handleChange,
      isInvalid: errors.product_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726,
        columnNumber: 49
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
      type: "invalid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 49
      }
    }, errors.product_name))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 744,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 745,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 746,
        columnNumber: 57
      }
    }, "Product Discruption"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
      size: "sm",
      eventKey: "0",
      style: {
        float: 'right',
        background: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 747,
        columnNumber: 57
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748,
        columnNumber: 61
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 751,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 61
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      as: "textarea",
      placeholder: "Enter Product Description",
      name: "product_description",
      value: values.product_description || '',
      rows: "7",
      onChange: handleChange,
      isInvalid: errors.product_description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754,
        columnNumber: 65
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
      type: "invalid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763,
        columnNumber: 65
      }
    }, errors.product_description))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 773,
        columnNumber: 41
      }
    }, __jsx(_add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_16__["default"], {
      productTypeHandler: this.handleProductTypeChange,
      isVariableProduct: this.state.isVariableProduct,
      product_type_values: values.product_type || '',
      product_price_values: values.product_price || '' // product_price_touched={touched.product_price}
      ,
      product_price_errors: errors.product_price,
      product_in_stock_values: values.product_in_stock || '' // product_in_stock_touched={touched.product_in_stock}
      ,
      product_in_stock_errors: errors.product_in_stock,
      product_brand_name_values: values.product_brand_name || '' // product_brand_name_touched={touched.product_brand_name}
      ,
      product_brand_name_errors: errors.product_brand_name,
      imageLink: this.state.simple_product_image_link,
      simpleProductImageLinkHandler: this.handleSimpleProductImageLinkChange.bind(this),
      inputValue: this.state.inputValue,
      simpleProductImageLinkInputChangeHandler: this.handleSimpleProductImageLinkInputChange.bind(this),
      simpleProductImageLinkhandleKeyDownHandler: this.handleSimpleProductImage_linkKeyDown.bind(this),
      simpleProductError: this.state.showSimpleProductPriceImgLinkErrorrAlert,
      product_warranty_values: values.product_warranty || '' // product_warranty_touched={touched.product_warranty}
      ,
      product_warranty_errors: errors.product_warranty,
      warranty_type_values: values.warranty_type || '' // warranty_type_touched={touched.warranty_type}
      ,
      warranty_type_errors: errors.warranty_type,
      product_discount_values: values.product_discount || '' // product_discount_touched={touched.product_discount}
      ,
      product_discount_errors: errors.product_discount,
      sku_values: values.sku || '' // sku_touched={touched.sku}
      ,
      sku_errors: errors.sku,
      product_weight_values: values.product_weight || '' // product_weight_touched={touched.product_weight}
      ,
      product_weight_errors: errors.product_weight,
      dimension_length_values: values.dimension_length || '' // dimension_length_touched={touched.dimension_length}
      ,
      dimension_length_errors: errors.dimension_length,
      dimension_width_values: values.dimension_width || '' // dimension_width_touched={touched.dimension_width}
      ,
      dimension_width_errors: errors.dimension_width,
      dimension_height_values: values.dimension_height || '' // dimension_height_touched={touched.dimension_height}
      ,
      dimension_height_errors: errors.dimension_height,
      shipping_charges_values: values.shipping_charges || '' // shipping_charges_touched={touched.shipping_charges}
      ,
      shipping_charges_errors: errors.shipping_charges,
      handling_fee_values: values.handling_fee || '' // handling_fee_touched={touched.handling_fee}
      ,
      handling_fee_errors: errors.handling_fee,
      purchase_note_values: values.purchase_note || '' // purchase_note_touched={touched.purchase_note}
      ,
      purchase_note_errors: errors.purchase_note,
      onChange: handleChange // touched={touched}
      ,
      errors: errors,
      productColorChangeHandler: this.handleProductColorChange // size={this.state.size}
      ,
      productSizeChangeHandler: this.handleProductSizeChange,
      attributesArray: this.state.productAttributesArray,
      name: this.state.productAttributeName,
      value: this.state.productAttributeValue,
      productAttributeNameSelected: this.state.productAttributeNameSelected,
      attributeNameHandler: this.handleProductAttributeNameChange.bind(this),
      attributeValueHandler: this.handleProductAttributeValueChange.bind(this),
      addAttributeHandler: this.handleAddProductAttributeClick.bind(this),
      update: this.handleUpdateProductAttributeClick.bind(this),
      deleteAttributeHandler: this.handleDeleteProductAttributeClick.bind(this),
      deleteVariationHandler: this.handleDeleteProductVariationClick.bind(this),
      deleteVariationCustomFieldHandler: this.handleDeleteVariationCustomFieldClick.bind(this),
      saveVariationsHandler: this.handleSaveVariationsClick.bind(this),
      variationsErrorHandler: this.handleVariationsErrorCheck.bind(this),
      error: this.state.productAttributeError,
      createVariationsHandler: this.handleCreateVariationsClick,
      variationsArray: this.state.variationsArray,
      variationPriceHandler: this.handleVariationPriceChange.bind(this),
      variationStockHandler: this.handleVariationProductInStockChang.bind(this),
      variationImageLinkHandler: this.handleVariationImageLinkChange.bind(this),
      samePriceInput: this.state.samePriceInput,
      samePriceError: this.state.samePriceError,
      variationsSamePriceChanged: this.handleVariationsSamePriceChanged.bind(this),
      variationsSamePriceHandler: this.handleVariationsSamePriceClick.bind(this),
      sameStockInput: this.state.sameStockInput,
      sameStockError: this.state.sameStockError,
      variationsSameStockChanged: this.handleVariationsSameStockChanged.bind(this),
      variationsSameStockHandler: this.handleVariationsSameStockClick.bind(this),
      sameImgLinkInput: this.state.sameImgLinkInput,
      sameImgLinkError: this.state.sameImgLinkError,
      variationsSameImgLinkChanged: this.handleVariationsSameImgLinkChanged.bind(this),
      variationsSameImgLinkHandler: this.handleVariationsSameImgLinkClick.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 774,
        columnNumber: 45
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 892,
        columnNumber: 41
      }
    }, __jsx(_add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_15__["default"], {
      customFieldsArray: this.state.customFieldsArray,
      isVariableProduct: this.state.isVariableProduct,
      name: this.state.customFieldName,
      value: this.state.customFieldValue,
      customFieldNameSelected: this.state.customFieldNameSelected,
      fieldNameHandler: this.handleCustomFieldNameChange.bind(this),
      fieldValueHandler: this.handleCustomFieldValueChange.bind(this),
      addFieldHandler: this.handleAddCustomFieldBtnClick.bind(this),
      update: this.updateCustomFieldsClick.bind(this),
      delete: this.deleteCustomFieldsClick.bind(this),
      error: this.state.customFieldError,
      showCustomFields: showCustomFields,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 893,
        columnNumber: 45
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 911,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 916,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 917,
        columnNumber: 57
      }
    }, "Product Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
      size: "sm",
      eventKey: "0",
      style: {
        float: 'right',
        background: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 918,
        columnNumber: 57
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919,
        columnNumber: 61
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 922,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924,
        columnNumber: 61
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 925,
        columnNumber: 65
      }
    }, "Category"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]) + " " + (this.state.categoryErrorDiv || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 926,
        columnNumber: 65
      }
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
      styles: react_select_styles,
      onChange: this.handleProductCategoryChange,
      options: product_categories_options,
      value: this.state.productCategories,
      isSearchable: true,
      isClearable: true,
      placeholder: "Select Category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 927,
        columnNumber: 69
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938,
        columnNumber: 61
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 65
      }
    }, "Sub Category"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]) + " " + (this.state.subCategoryErrorDiv || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940,
        columnNumber: 65
      }
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
      styles: react_select_styles,
      onChange: this.handleProductSubCategoryChange,
      options: product_sub_categories_options,
      value: this.state.productSubCategories,
      isSearchable: true,
      isClearable: true,
      placeholder: "Select Sub Category",
      isDisabled: this.state.subCategoryDisabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 941,
        columnNumber: 69
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 61
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 954,
        columnNumber: 65
      }
    }, "Sub Sub Category"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]) + " " + (this.state.subSubCategoryErrorDiv || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955,
        columnNumber: 65
      }
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
      styles: react_select_styles,
      onChange: this.handleProductSubSubCategoryChange,
      options: product_sub_sub_categories_options,
      value: this.state.productSubSubCategories,
      isSearchable: true,
      isClearable: true,
      placeholder: "Select Sub Sub Category",
      isDisabled: this.state.subSubCategoryDisabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 956,
        columnNumber: 69
      }
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 977,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 978,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 979,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980,
        columnNumber: 57
      }
    }, "Dangerous Goods"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
      size: "sm",
      eventKey: "0",
      style: {
        float: 'right',
        background: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 981,
        columnNumber: 57
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 982,
        columnNumber: 61
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 985,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 986,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "not_specified",
      label: "Not Specified",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Not Specified'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 987,
        columnNumber: 61
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 993,
        columnNumber: 61
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "ceramic",
      label: "Ceramic",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Ceramic'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 994,
        columnNumber: 61
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1000,
        columnNumber: 61
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "glass",
      label: "Glass",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Glass'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1001,
        columnNumber: 61
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1007,
        columnNumber: 61
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "metal",
      label: "Metal",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Metal'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1008,
        columnNumber: 61
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1014,
        columnNumber: 61
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "plastic",
      label: "Plastic",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Plastic'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1015,
        columnNumber: 61
      }
    })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1029,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1030,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1032,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033,
        columnNumber: 57
      }
    }, "Product Tags"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
      size: "sm",
      eventKey: "0",
      style: {
        float: 'right',
        background: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034,
        columnNumber: 57
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035,
        columnNumber: 61
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1038,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: {
        height: '250px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039,
        columnNumber: 57
      }
    }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_9___default.a, {
      isMulti: true,
      onChange: this.handleProductTagChange,
      options: _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_18__["default"],
      value: this.state.productTags,
      placeholder: "Select/Enter Tags",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040,
        columnNumber: 61
      }
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1059,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1060,
        columnNumber: 37
      }
    }, __jsx("p", {
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1061,
        columnNumber: 41
      }
    }, "Fields with ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1061,
        columnNumber: 77
      }
    }, " * "), " are mandatory."), __jsx("p", {
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1062,
        columnNumber: 41
      }
    }, "For adding new size, color, link: Enter text and hit Enter or Tab key"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      onSubmit: handleSubmit,
      disabled: this.state.isLoading,
      block: true,
      style: styles.submit_btn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1063,
        columnNumber: 41
      }
    }, this.state.isLoading ? 'Uploading' : 'Upload', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      animation: "grow",
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1065,
        columnNumber: 69
      }
    }) : __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1065,
        columnNumber: 110
      }
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3499326083",
      dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color],
      __self: this
    }, `.RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:1px;border-radius:2px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdqQ2lDLEFBR3dFLEFBTWYsQUFJRixBQUc4QixBQU90QixVQVR0QixFQUplLE1BY0EsS0FiZixJQVBnQixFQXFCaEIsVUFwQnNCLENBWWEsaUJBWHBCLFdBQ2YsR0FXc0Msa0NBQ2pCLGlCQUV0QixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWRkLW5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEZvcm0sIENvbCwgUm93LCBDYXJkLCBJbnB1dEdyb3VwLCBCdXR0b24sIFRvYXN0LCBBbGVydCwgTmF2LCBUYWJzLCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhUGx1cywgZmFLZXksIGZhU2xpZGVyc0gsIGZhU3RvcmVBbHQsIGZhVHJ1Y2ssIGZhVG9vbHMsIGZhRG9sbGFyU2lnbiwgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLCBmYUxpc3RBbHRcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9hbGVydC1tb2RhbCc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgQ3VzdG9tRmllbGRzIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9jdXN0b20tZmllbGRzJztcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9wcm9kdWN0LWRhdGEnO1xyXG5pbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbi8vIE9wdGlvbiBMaXN0IGZvciBzZWxlY3QgUHJvZHVjdCBDYXRlZ29yeSAod2hlbiBvZmZsaW5lKVxyXG5sZXQgcHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiAnU2hvZScsIGxhYmVsOiAnU2hvZScgfSxcclxuICAgIHsgdmFsdWU6ICdDbG90aCcsIGxhYmVsOiAnQ2xvdGgnIH0sXHJcbiAgICB7IHZhbHVlOiAnU2hpcnQnLCBsYWJlbDogJ1NoaXJ0JyB9LFxyXG4gICAgeyB2YWx1ZTogJ1BhbnQnLCBsYWJlbDogJ1BhbnQnIH1cclxuXVxyXG5jb25zdCBwcm9kdWN0X3N1Yl9jYXRlZ29yaWVzX29wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiAnU3ViIFNob2UnLCBsYWJlbDogJ1N1YiBTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1N1YiBDbG90aCcsIGxhYmVsOiAnU3ViIENsb3RoJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1N1YiBTaGlydCcsIGxhYmVsOiAnU3ViIFNoaXJ0JyB9LFxyXG5dXHJcbmNvbnN0IHByb2R1Y3Rfc3ViX3N1Yl9jYXRlZ29yaWVzX29wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiAnRm9vJywgbGFiZWw6ICdGb28nIH0sXHJcbiAgICB7IHZhbHVlOiAnTG9vJywgbGFiZWw6ICdMb28nIH0sXHJcbiAgICB7IHZhbHVlOiAnS2hvbycsIGxhYmVsOiAnS2hvbycgfSxcclxuXVxyXG5cclxuLy8gRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgRHJvcGRvd25JbmRpY2F0b3I6IG51bGwsXHJcbn07XHJcbi8vIE1vZGVsIEZvciBSZWFjdC1TZWxlY3RcclxuY29uc3QgY3JlYXRlT3B0aW9uID0gKGxhYmVsKSA9PiAoe1xyXG4gICAgdmFsdWU6IGxhYmVsLFxyXG4gICAgbGFiZWwsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVhY3Rfc2VsZWN0X3N0eWxlcyA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlKSA9PiAoe1xyXG4gICAgICAgIC4uLmJhc2UsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgIH0pLFxyXG4gICAgZHJvcGRvd25JbmRpY2F0b3I6IChiYXNlKSA9PiAoe1xyXG4gICAgICAgIC4uLmJhc2UsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICB9KSxcclxuICAgIGNsZWFySW5kaWNhdG9yOiAoYmFzZSkgPT4gKHtcclxuICAgICAgICAuLi5iYXNlLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSksXHJcbiAgICBvcHRpb246IHByb3ZpZGVkID0+ICh7XHJcbiAgICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgIH0pLFxyXG59O1xyXG5cclxuLy8gWXVwIFNjaGVtYSBmb3IgdmFsaWRhdGlvbiBmaWVsZHNcclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBwcm9kdWN0X25hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIFByb2R1Y3QgTmFtZVwiKVxyXG4gICAgICAgIC5taW4oMiwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCg0MCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiA0MCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIFByb2R1Y3QgTmFtZVwiKVxyXG4gICAgICAgIC5taW4oNSwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAwIGNoYXJhY3RlcnNcIiksXHJcbiAgICAvLyBQcm9kdWN0IERhdGFcclxuICAgIHByb2R1Y3RfdHlwZTogeXVwLnN0cmluZygpLFxyXG4gICAgLy8gPT4gSW52ZW50b3J5XHJcbiAgICBza3U6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG4gICAgLy8gPT4gR2VuZXJhbChTaW1wbGUtUHJvZHVjdClcclxuICAgIHByb2R1Y3RfcHJpY2U6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDEtMTAwMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMDAwLCAnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKSxcclxuICAgIHByb2R1Y3RfaW5fc3RvY2s6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigxLCBcIk11c3QgZ3JhdGVyIHRoYW4gMSBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwMDAwXCIpLFxyXG4gICAgcHJvZHVjdF9icmFuZF9uYW1lOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDIsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoNDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gNDAgY2hhcmFjdGVyc1wiKSxcclxuICAgIHByb2R1Y3RfaW1hZ2VfbGluazogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF93YXJyYW50eTogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMjAwJylcclxuICAgICAgICAubWF4KDIwMCwgJ0VudGVyIEJldHdlZW4gMC0yMDAnKSxcclxuICAgIHdhcnJhbnR5X3R5cGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIHByb2R1Y3RfZGlzY291bnQ6IHl1cC5udW1iZXIoKS5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpXHJcbiAgICAgICAgLm1heCgxMDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJyksXHJcbiAgICAvLyA9PiBBdHRyaWJ1dGVzIChWYXJpYWJsZSBQcm9kdWN0KVxyXG4gICAgcHVyY2hhc2Vfbm90ZTogeXVwLnN0cmluZygpLFxyXG4gICAgLy8gPT4gVmFyaWF0aW9ucyAoVmFyaWFibGUgUHJvZHVjdClcclxuICAgIHByb2R1Y3RfdmFyaWF0aW9uczogeXVwLnN0cmluZygpLFxyXG4gICAgLy8gPT4gU2hpcHBpbmdcclxuICAgIHByb2R1Y3Rfd2VpZ2h0OiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcbiAgICBkaW1lbnNpb25fbGVuZ3RoOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcbiAgICBkaW1lbnNpb25fd2lkdGg6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCBcIk11c3QgZ3JhdGVyIHRoYW4gMCBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMFwiKSxcclxuICAgIGRpbWVuc2lvbl9oZWlnaHQ6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCBcIk11c3QgZ3JhdGVyIHRoYW4gMCBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMFwiKSxcclxuICAgIHNoaXBwaW5nX2NoYXJnZXM6IHl1cC5udW1iZXIoKS5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpXHJcbiAgICAgICAgLm1heCgxMDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJyksXHJcbiAgICBoYW5kbGluZ19mZWU6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCBcIk11c3QgZ3JhdGVyIHRoYW4gMCBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMFwiKSxcclxuICAgIC8vID0+IEFkdmFudmVcclxuICAgIHB1cmNoYXNlX25vdGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGN1c3RvbV9maWVsZHM6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwcm9kdWN0X2NhdGVnb3J5OiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X3N1Yl9jYXRlZ29yeTogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF9zdWJfc3ViX2NhdGVnb3J5OiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgZGFuZ2Vyb3VzX2dvb2RzOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X3RhZ3M6IHl1cC5zdHJpbmcoKSxcclxufSk7XHJcblxyXG5cclxuY2xhc3MgQWRkTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb2FzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllczogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RTdWJDYXRlZ29yaWVzOiAnJyxcclxuICAgICAgICAgICAgcHJvZHVjdFN1YlN1YkNhdGVnb3JpZXM6ICcnLFxyXG5cclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlEaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgc3ViU3ViQ2F0ZWdvcnlEaXNhYmxlZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsXHJcbiAgICAgICAgICAgIHN1YlN1YkNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcbiAgICAgICAgICAgIHN1YlN1YmF0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcblxyXG5cclxuICAgICAgICAgICAgcHJvZHVjdFRhZ3M6IFtdLFxyXG5cclxuICAgICAgICAgICAgd2FycmFudHlUeXBlOiAnWWVhcicsXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbXSxcclxuICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogW10sXHJcblxyXG5cclxuICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLFxyXG4gICAgICAgICAgICBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVOYW1lU2VsZWN0ZWQ6ICcnLFxyXG5cclxuICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgaXNWYXJpYXRpb25zU2F2ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzYW1lUHJpY2VJbnB1dDogJycsXHJcbiAgICAgICAgICAgIHNhbWVQcmljZUVycm9yOiAnJyxcclxuICAgICAgICAgICAgc2FtZVN0b2NrSW5wdXQ6ICcnLFxyXG4gICAgICAgICAgICBzYW1lU3RvY2tFcnJvcjogJycsXHJcbiAgICAgICAgICAgIHNhbWVJbWdMaW5rSW5wdXQ6ICcnLFxyXG4gICAgICAgICAgICBzYW1lSW1nTGlua0Vycm9yOiAnJyxcclxuXHJcbiAgICAgICAgICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRFcnJvcjogJycsXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkTmFtZVNlbGVjdGVkOiAnJyxcclxuXHJcbiAgICAgICAgICAgIC8vIERhbmdlcm91cyBHb29kc1xyXG4gICAgICAgICAgICBkYW5nZXJvdXNHb29kc0FycmF5OiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRDdXN0b21GaWVsZEJ0bkNsaWNrID0gdGhpcy5oYW5kbGVBZGRDdXN0b21GaWVsZEJ0bkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy51cGxvYWRQcm9kdWN0ID0gdGhpcy51cGxvYWRQcm9kdWN0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGluZyBQcm9kdWN0IENhdGVnb3JpZXMgZnJvbSBEQlxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvcHJvZHVjdHMtY2F0ZWdvcmllcy9nZXQtYWxsJztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBwcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9ucyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICBTdWJtaXQgZGF0YSB0byBhcGlcclxuICAgIGFzeW5jIHVwbG9hZFByb2R1Y3QoZGF0YSwgY3VycmVudENvbXBvbmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOiAnLCBkYXRhKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzL2FkZCc7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHtcclxuICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgYWxlcnQoJ0Vycm9yOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBoYW5kbGVQcm9kdWN0VHlwZUNoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09ICd2YXJpYWJsZS1wcm91Y3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhYmxlUHJvZHVjdDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2R1Y3QgRGF0YVxyXG4gICAgLy8gPT4gU2ltcGxlIFByb2R1Y3QgSW1hZ2UgTGlua1xyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlTGlua0NoYW5nZSA9IChhcnIsIGFjdGlvbk1ldGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogYXJyLCBpbWFnZV9saW5rRXJyb3I6ICdub19lcnJvcicsIGltYWdlX2xpbmtFcnJvckRpdjogJ0JvcmRlckRpdicgfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlTGlua0lucHV0Q2hhbmdlID0gKGFycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBhcnIgfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlX2xpbmtLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcclxuICAgICAgICBjb25zdCBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rID0gdGhpcy5zdGF0ZS5zaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rO1xyXG4gICAgICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICAgICAgY2FzZSAnVGFiJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms6IFsuLi5zaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rLCBjcmVhdGVPcHRpb24oaW5wdXRWYWx1ZSldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyA9PiBFbmQgT2YgU2ltcGxlIFByb2R1Y3QgSW1hZ2UgTGlua1xyXG5cclxuICAgIC8vID0+IFByb2R1Y3QgQXR0cmlidXRlcyAoVmFyaWFibGUgUHJvZHVjdClcclxuICAgIGhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVOYW1lQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IGUudmFsdWUgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZDogZSB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdEF0dHJpYnV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lICE9ICcnICYmIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZVZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICcnIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZDogJycgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ3JlYXRlVmFyaWF0aW9uc0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBhbGxBcnJheXMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdmFyIHRyaW0gPSBlbGVtZW50LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB2YXIgc3BsaXRBcnJheSA9IHRyaW0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgYWxsQXJyYXlzLnB1c2goc3BsaXRBcnJheSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmFsbFBvc3NpYmxlQ2FzZXMoYWxsQXJyYXlzKVxyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBlbGVtZW50LnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gW107XHJcblxyXG4gICAgICAgICAgICBzcGxpdC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXlbaV0ucHJvZHVjdEF0dHJpYnV0ZU5hbWUsIHZhbHVlOiBlIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goeyBpdGVtczogaXRlbSwgcHJpY2U6ICcnLCBzdG9jazogJzEnLCBpbWFnZV9saW5rOiAnJywgcHJpY2VfZXJyb3I6ICcnLCBpbWFnZV9saW5rX2Vycm9yOiAnJywgY3VzdG9tRmllbGQ6IFtdIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGxpdCBBcnJheTogXCIsIGRhdGEpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogZGF0YSB9KVxyXG4gICAgfVxyXG4gICAgYWxsUG9zc2libGVDYXNlcyhhcnIpIHtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgYWxsQ2FzZXNPZlJlc3QgPSB0aGlzLmFsbFBvc3NpYmxlQ2FzZXMoYXJyLnNsaWNlKDEpKTsgIC8vIHJlY3VyIHdpdGggdGhlIHJlc3Qgb2YgYXJyYXlcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDYXNlc09mUmVzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcnJbMF1bal0gKyBcIi1cIiArIGFsbENhc2VzT2ZSZXN0W2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZVVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVDbGljayA9IChpbmRleCwgbmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSB7IHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiBuYW1lLCBwcm9kdWN0QXR0cmlidXRlVmFsdWU6IHZhbHVlIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RBdHRyaWJ1dGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIC8vID0+IEVuZCBPZiBQcm9kdWN0IEF0dHJpYnV0ZXNcclxuXHJcbiAgICAvLyA9PiBQcm9kdWN0IFZhcmlhdGlvbnMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICAvLyAgLy8gPT5TYW1lIFByaWNlIEZvciBBbGwgVmFyaWF0aW9uc1xyXG4gICAgaGFuZGxlVmFyaWF0aW9uc1NhbWVQcmljZUNoYW5nZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYW1lUHJpY2VJbnB1dDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25zU2FtZVByaWNlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNhbWVQcmljZUlucHV0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlID0gdGhpcy5zdGF0ZS5zYW1lUHJpY2VJbnB1dDtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2FtZVByaWNlRXJyb3I6ICdFbnRlciBWYWx1ZScgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAvLyA9PiBTYW1lIFN0b2NrIEZvciBBbGwgVmFyaWF0aW9uc1xyXG4gICAgaGFuZGxlVmFyaWF0aW9uc1NhbWVTdG9ja0NoYW5nZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYW1lU3RvY2tJbnB1dDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25zU2FtZVN0b2NrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2FtZVN0b2NrSW5wdXQgIT0gJycpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3RvY2sgPSB0aGlzLnN0YXRlLnNhbWVTdG9ja0lucHV0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNhbWVTdG9ja0Vycm9yOiAnRW50ZXIgVmFsdWUnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLy8gPT4gU2FtZSBJbWFnZSBsaW5rIEZvciBBbGwgVmFyaWF0aW9uc1xyXG4gICAgaGFuZGxlVmFyaWF0aW9uc1NhbWVJbWdMaW5rQ2hhbmdlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNhbWVJbWdMaW5rSW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25zU2FtZUltZ0xpbmtDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zYW1lSW1nTGlua0lucHV0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmltYWdlX2xpbmsgPSB0aGlzLnN0YXRlLnNhbWVJbWdMaW5rSW5wdXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2FtZUltZ0xpbmtFcnJvcjogJ0VudGVyIFZhbHVlJyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVWYXJpYXRpb25QcmljZUNoYW5nZSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gY29weUFycmF5W2luZGV4XTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICBvYmplY3QucHJpY2UgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZVZhcmlhdGlvblByb2R1Y3RJblN0b2NrQ2hhbmcgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnN0b2NrID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25JbWFnZUxpbmtDaGFuZ2UgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgb2JqZWN0LmltYWdlX2xpbmsgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RWYXJpYXRpb25DbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVEZWxldGVWYXJpYXRpb25DdXN0b21GaWVsZENsaWNrID0gKGluZGV4LCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0uY3VzdG9tRmllbGQuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVNhdmVWYXJpYXRpb25zQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpY2UgPT0gJycgfHwgZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmljZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucHJpY2VfZXJyb3IgPSAnRW50ZXIgcHJpY2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yID0gJ0VudGVyIEltYWdlIExpbmsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlX2Vycm9yID0gJydcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGlua19lcnJvciA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhdGlvbnNTYXZlZDogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25zRXJyb3JDaGVjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2VfZXJyb3IgIT0gJycgfHwgZGF0YS5pbWFnZV9saW5rX2Vycm9yICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMXB4IHNvbGlkIHJlZCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyA9PiBFbmQgT2YgUHJvZHVjdCBWYXJpYXRpb25zXHJcbiAgICAvLyBFbmQgb2YgUHJvZHVjdCBEYXRhXHJcblxyXG5cclxuXHJcbiAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICBoYW5kbGVDdXN0b21GaWVsZE5hbWVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZE5hbWU6IGUudmFsdWUgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lU2VsZWN0ZWQ6IGUgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUN1c3RvbUZpZWxkVmFsdWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZFZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkQ3VzdG9tRmllbGRCdG5DbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWUgIT0gJycgJiYgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvcHlBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3VzdG9tRmllbGQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50LmN1c3RvbUZpZWxkOiBcIiwgZWxlbWVudC5jdXN0b21GaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkRXJyb3I6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZE5hbWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZFZhbHVlOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lU2VsZWN0ZWQ6ICcnIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkRXJyb3I6ICdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ3VzdG9tRmllbGRzQ2xpY2sgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IHsgY3VzdG9tRmllbGROYW1lOiBuYW1lLCBjdXN0b21GaWVsZFZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ3VzdG9tRmllbGRzQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBQcm9kdWN0IENhdGVnb3J5XHJcbiAgICBoYW5kbGVQcm9kdWN0Q2F0ZWdvcnlDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdENhdGVnb3JpZXM6IHZhbHVlLCBzdWJDYXRlZ29yeURpc2FibGVkOiBmYWxzZSwgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcm9kdWN0U3ViQ2F0ZWdvcnlDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RTdWJDYXRlZ29yaWVzOiB2YWx1ZSwgc3ViU3ViQ2F0ZWdvcnlEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsIHN1YkNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcm9kdWN0U3ViU3ViQ2F0ZWdvcnlDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdFN1YlN1YkNhdGVnb3JpZXM6IHZhbHVlLCBzdWJTdWJDYXRlZ29yeUVycm9yOiAnbm9fZXJyb3InLCBzdWJTdWJDYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEYW5nZXJvdXMgR29vZHNcclxuICAgIGhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHsgdmFsdWU6IG5hbWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYW5nZXJvdXNHb29kc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvZHVjdCBUYWdzXHJcbiAgICBoYW5kbGVQcm9kdWN0VGFnQ2hhbmdlID0gKGFycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0VGFnczogYXJyIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNob3dDdXN0b21GaWVsZHMgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkubGVuZ3RoID09IDAgJiYgdGhpcy5zdGF0ZS5pc1ZhcmlhYmxlUHJvZHVjdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHNob3dDdXN0b21GaWVsZHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0N1c3RvbUZpZWxkcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZTogJ3NpbXBsZS1wcm9kdWN0JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnIHx8IHRoaXMuc3RhdGUucHJvZHVjdFN1YkNhdGVnb3JpZXMgPT0gJycgfHwgdGhpcy5zdGF0ZS5wcm9kdWN0U3ViU3ViQ2F0ZWdvcmllcyA9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rID09ICcnICYmIHZhbHVlcy5wcm9kdWN0X3R5cGUgPT0gJ3NpbXBsZS1wcm9kdWN0JykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdFN1YkNhdGVnb3JpZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJDYXRlZ29yeUVycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0U3ViU3ViQ2F0ZWdvcmllcyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YlN1YkNhdGVnb3J5RXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsgPT0gJycgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogdHJ1ZSwgaW1hZ2VfbGlua0Vycm9yOiBcImVycm9yXCIsIGltYWdlX2xpbmtFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmlzVmFyaWF0aW9uc1NhdmVkID09IGZhbHNlICYmIHZhbHVlcy5wcm9kdWN0X3R5cGUgPT0gJ3ZhcmlhYmxlLXByb3VjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcnJheS5wdXNoKGVsZW1lbnQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3Rfc3ViX2NhdGVnb3J5ID0gdGhpcy5zdGF0ZS5wcm9kdWN0U3ViQ2F0ZWdvcmllcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3N1Yl9zdWJfY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLnByb2R1Y3RTdWJTdWJDYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUucHJvZHVjdFRhZ3MuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcnJheS5wdXNoKGVsZW1lbnQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfdGFncyA9IHRoaXMuc3RhdGUucHJvZHVjdFRhZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmRhbmdlcm91c19nb29kcyA9IHRoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXJyYXkucHVzaChlbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSAhPSBbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXkuZm9yRWFjaChjdXN0b20gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb2JqW2N1c3RvbS5jdXN0b21GaWVsZE5hbWVdID0gY3VzdG9tLmN1c3RvbUZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcnJheS5wdXNoKG9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5jdXN0b21fZmllbGRzID0gdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lml0ZW1zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiBlLm5hbWUsIHZhbHVlOiBlLnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmN1c3RvbUZpZWxkLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiBlLm5hbWUsIHZhbHVlOiBlLnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiAncHJpY2UnLCB2YWx1ZTogZWxlbWVudC5wcmljZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiAnc3RvY2snLCB2YWx1ZTogZWxlbWVudC5zdG9jayB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiAnaW1hZ2VfbGluaycsIHZhbHVlOiBlbGVtZW50LmltYWdlX2xpbmsgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh7IGl0ZW06IGl0ZW0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3ZhcmlhdGlvbnMgPSBhcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkUHJvZHVjdCh2YWx1ZXMsIHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlLCBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzOiAnJywgcHJvZHVjdFN1YkNhdGVnb3JpZXM6ICcnLCBwcm9kdWN0U3ViU3ViQ2F0ZWdvcmllczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YkNhdGVnb3J5RGlzYWJsZWQ6IHRydWUsIHN1YlN1YkNhdGVnb3J5RGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLCBzdWJDYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2Jywgc3ViU3ViYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRhZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eVR5cGU6ICdZZWFyJywgaW5wdXRWYWx1ZTogJycsIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms6IFtdLCBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLCBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9kdWN0IEF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZXNBcnJheTogW10sIHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiAnJywgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiAnJywgcHJvZHVjdEF0dHJpYnV0ZUVycm9yOiAnJywgcHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheTogW10sIGlzVmFyaWF0aW9uc1NhdmVkOiBmYWxzZSwgc2FtZVByaWNlSW5wdXQ6ICcnLCBzYW1lUHJpY2VFcnJvcjogJycsIHNhbWVTdG9ja0lucHV0OiAnJywgc2FtZVN0b2NrRXJyb3I6ICcnLCBzYW1lSW1nTGlua0lucHV0OiAnJywgc2FtZUltZ0xpbmtFcnJvcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk6IFtdLCBjdXN0b21GaWVsZE5hbWU6ICcnLCBjdXN0b21GaWVsZFZhbHVlOiAnJywgY3VzdG9tRmllbGRFcnJvcjogJycsIGN1c3RvbUZpZWxkTmFtZVNlbGVjdGVkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGFuZ2Vyb3VzIEdvb2RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c0dvb2RzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgaXNWYWxpZCwgZXJyb3JzLCBoYW5kbGVCbHVyLCBpc1N1Ym1pdHRpbmdcclxuICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy50aXRsZV9yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gQWRkIE5ldyBQcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5zaG93VG9hc3QgPyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J1N1Y2Nlc3MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnUHJvZHVjdCBVcGxvYWRlZCBTdWNjZXNzZnVsbHknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uTmFtZT17ZmFUaHVtYnNVcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiIzAwYjMwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDogbnVsbCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUuc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0ID8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydFcnJvcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9eydQbGVhc2UgQWRkL1NhdmUgVmFyaWF0aW9ucyBGaXJzdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25OYW1lPXtmYUV4Y2xhbWF0aW9uVHJpYW5nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiNmZjMzMzNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA6IG51bGwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnN0YXRlLnNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQgPyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnRW50ZXIgUHJpY2UvSW1hZ2UgTGluayBpbiBHZW5lcmFsIFRhYiBGaXJzdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25OYW1lPXtmYUV4Y2xhbWF0aW9uVHJpYW5nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiNmZjMzMzNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA6IG51bGwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIH0gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMiUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs5fSBtZD17OX0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgTmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IE5hbWU8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByb2R1Y3RfbmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2Vycm9ycy5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgTmFtZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBEaXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UHJvZHVjdCBEaXNjcnVwdGlvbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByb2R1Y3RfZGVzY3JpcHRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlcnJvcnMucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBEYXRhIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfdHlwZSB8fCAnJ31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2VfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9wcmljZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF9wcmljZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2VfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9wcmljZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2tfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9pbl9zdG9jayB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF9pbl9zdG9ja190b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2tfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9pbl9zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2JyYW5kX25hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfYnJhbmRfbmFtZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTGluaz17dGhpcy5zdGF0ZS5zaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcj17dGhpcy5oYW5kbGVTaW1wbGVQcm9kdWN0SW1hZ2VMaW5rQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlUHJvZHVjdEltYWdlTGlua0lucHV0Q2hhbmdlSGFuZGxlcj17dGhpcy5oYW5kbGVTaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlUHJvZHVjdEltYWdlTGlua2hhbmRsZUtleURvd25IYW5kbGVyPXt0aGlzLmhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZV9saW5rS2V5RG93bi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0RXJyb3I9e3RoaXMuc3RhdGUuc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHlfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF93YXJyYW50eSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF93YXJyYW50eV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2FycmFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHlfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93YXJyYW50eX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGVfdmFsdWVzPXt2YWx1ZXMud2FycmFudHlfdHlwZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2FycmFudHlfdHlwZV90b3VjaGVkPXt0b3VjaGVkLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGVfZXJyb3JzPXtlcnJvcnMud2FycmFudHlfdHlwZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnRfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9kaXNjb3VudCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF9kaXNjb3VudF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9kaXNjb3VudH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV92YWx1ZXM9e3ZhbHVlcy5za3UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNrdV90b3VjaGVkPXt0b3VjaGVkLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X2Vycm9ycz17ZXJyb3JzLnNrdX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3Rfd2VpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9kdWN0X3dlaWdodF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X3dlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGhfdmFsdWVzPXt2YWx1ZXMuZGltZW5zaW9uX2xlbmd0aCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGltZW5zaW9uX2xlbmd0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGhfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2xlbmd0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25fd2lkdGggfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpbWVuc2lvbl93aWR0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl93aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl93aWR0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHRfdmFsdWVzPXt2YWx1ZXMuZGltZW5zaW9uX2hlaWdodCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGltZW5zaW9uX2hlaWdodF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2hlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXNfdmFsdWVzPXt2YWx1ZXMuc2hpcHBpbmdfY2hhcmdlcyB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hpcHBpbmdfY2hhcmdlc190b3VjaGVkPXt0b3VjaGVkLnNoaXBwaW5nX2NoYXJnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzPXtlcnJvcnMuc2hpcHBpbmdfY2hhcmdlc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV92YWx1ZXM9e3ZhbHVlcy5oYW5kbGluZ19mZWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsaW5nX2ZlZV90b3VjaGVkPXt0b3VjaGVkLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX2Vycm9ycz17ZXJyb3JzLmhhbmRsaW5nX2ZlZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGVfdmFsdWVzPXt2YWx1ZXMucHVyY2hhc2Vfbm90ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHVyY2hhc2Vfbm90ZV90b3VjaGVkPXt0b3VjaGVkLnB1cmNoYXNlX25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGVfZXJyb3JzPXtlcnJvcnMucHVyY2hhc2Vfbm90ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvbG9yQ2hhbmdlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0Q29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpemU9e3RoaXMuc3RhdGUuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNpemVDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RTaXplQ2hhbmdlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc0FycmF5PXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZD17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlTmFtZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0QXR0cmlidXRlTmFtZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEF0dHJpYnV0ZUhhbmRsZXI9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdEF0dHJpYnV0ZUNsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy5oYW5kbGVVcGRhdGVQcm9kdWN0QXR0cmlidXRlQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQXR0cmlidXRlSGFuZGxlcj17dGhpcy5oYW5kbGVEZWxldGVQcm9kdWN0QXR0cmlidXRlQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVmFyaWF0aW9uSGFuZGxlcj17dGhpcy5oYW5kbGVEZWxldGVQcm9kdWN0VmFyaWF0aW9uQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVmFyaWF0aW9uQ3VzdG9tRmllbGRIYW5kbGVyPXt0aGlzLmhhbmRsZURlbGV0ZVZhcmlhdGlvbkN1c3RvbUZpZWxkQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVZhcmlhdGlvbnNIYW5kbGVyPXt0aGlzLmhhbmRsZVNhdmVWYXJpYXRpb25zQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0Vycm9ySGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25zRXJyb3JDaGVjay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlRXJyb3J9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVWYXJpYXRpb25zSGFuZGxlcj17dGhpcy5oYW5kbGVDcmVhdGVWYXJpYXRpb25zQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17dGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvblByaWNlSGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25QcmljZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25TdG9ja0hhbmRsZXI9e3RoaXMuaGFuZGxlVmFyaWF0aW9uUHJvZHVjdEluU3RvY2tDaGFuZy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25JbWFnZUxpbmtIYW5kbGVyPXt0aGlzLmhhbmRsZVZhcmlhdGlvbkltYWdlTGlua0NoYW5nZS5iaW5kKHRoaXMpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZVByaWNlSW5wdXQ9e3RoaXMuc3RhdGUuc2FtZVByaWNlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVQcmljZUVycm9yPXt0aGlzLnN0YXRlLnNhbWVQcmljZUVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zU2FtZVByaWNlQ2hhbmdlZD17dGhpcy5oYW5kbGVWYXJpYXRpb25zU2FtZVByaWNlQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zU2FtZVByaWNlSGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25zU2FtZVByaWNlQ2xpY2suYmluZCh0aGlzKX1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZVN0b2NrSW5wdXQ9e3RoaXMuc3RhdGUuc2FtZVN0b2NrSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVTdG9ja0Vycm9yPXt0aGlzLnN0YXRlLnNhbWVTdG9ja0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zU2FtZVN0b2NrQ2hhbmdlZD17dGhpcy5oYW5kbGVWYXJpYXRpb25zU2FtZVN0b2NrQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zU2FtZVN0b2NrSGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25zU2FtZVN0b2NrQ2xpY2suYmluZCh0aGlzKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVJbWdMaW5rSW5wdXQ9e3RoaXMuc3RhdGUuc2FtZUltZ0xpbmtJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZUltZ0xpbmtFcnJvcj17dGhpcy5zdGF0ZS5zYW1lSW1nTGlua0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zU2FtZUltZ0xpbmtDaGFuZ2VkPXt0aGlzLmhhbmRsZVZhcmlhdGlvbnNTYW1lSW1nTGlua0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc1NhbWVJbWdMaW5rSGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25zU2FtZUltZ0xpbmtDbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBEYXRhIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZE5hbWVTZWxlY3RlZD17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lSGFuZGxlcj17dGhpcy5oYW5kbGVDdXN0b21GaWVsZE5hbWVDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZUhhbmRsZXI9e3RoaXMuaGFuZGxlQ3VzdG9tRmllbGRWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGaWVsZEhhbmRsZXI9e3RoaXMuaGFuZGxlQWRkQ3VzdG9tRmllbGRCdG5DbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlQ3VzdG9tRmllbGRzQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmRlbGV0ZUN1c3RvbUZpZWxkc0NsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDdXN0b21GaWVsZHM9e3Nob3dDdXN0b21GaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgQ3VzdG9tIEZpZWxkcyBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IENhdGVnb3J5ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5Qcm9kdWN0IENhdGVnb3JpZXM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0J1dHRvbn0gc2l6ZT1cInNtXCIgZXZlbnRLZXk9XCIwXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Q2F0ZWdvcnk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jYXRlZ29yeUVycm9yRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17cmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENhdGVnb3J5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5TdWIgQ2F0ZWdvcnk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdWJDYXRlZ29yeUVycm9yRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17cmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFN1YkNhdGVnb3J5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9kdWN0X3N1Yl9jYXRlZ29yaWVzX29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RTdWJDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdWIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLnN0YXRlLnN1YkNhdGVnb3J5RGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U3ViIFN1YiBDYXRlZ29yeTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnN1YlN1YkNhdGVnb3J5RXJyb3JEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtyZWFjdF9zZWxlY3Rfc3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0U3ViU3ViQ2F0ZWdvcnlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2R1Y3Rfc3ViX3N1Yl9jYXRlZ29yaWVzX29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RTdWJTdWJDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdWIgU3ViIENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5zdGF0ZS5zdWJTdWJDYXRlZ29yeURpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBhdGVnb3J5ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEYW5nZXJvdXMgR29vZHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPkRhbmdlcm91cyBHb29kczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdF9zcGVjaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb3QgU3BlY2lmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ05vdCBTcGVjaWZpZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2VyYW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNlcmFtaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnQ2VyYW1pYycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ0dsYXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWV0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnTWV0YWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhc3RpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnUGxhc3RpYycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2ZEYW5nZXJvdXMgR29vZHMgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgVGFncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UHJvZHVjdCBUYWdzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy52YXJpYXRpb25zX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0VGFnQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvZHVjdF9jb2xvcl9vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdFRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdC9FbnRlciBUYWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgVGFncyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZHMgd2l0aCA8c3Bhbj4gKiA8L3NwYW4+IGFyZSBtYW5kYXRvcnkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Rm9yIGFkZGluZyBuZXcgc2l6ZSwgY29sb3IsIGxpbms6IEVudGVyIHRleHQgYW5kIGhpdCBFbnRlciBvciBUYWIga2V5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaXNMb2FkaW5nfSBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/ICdVcGxvYWRpbmcnIDogJ1VwbG9hZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiIHNpemU9XCJzbVwiIC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBGb3JtIFN1Ym1pdCBCdG4gUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWRCb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQm9yZGVyRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMC43JSA0JScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgIH0sXHJcblxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAvLyBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzElJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXc7Il19 */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js */`)));
  }

}

const styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '0.7% 4%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px'
  },
  title: {
    color: 'gray'
  },
  nav_link: {
    color: 'white',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%'
  },
  card_header: {
    alignItems: 'center',
    // color: '#6A7074',
    fontSize: '14px',
    background: 'lightgray'
  },
  buttons: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].primry_color}`,
    border: 'none',
    fontSize: '10px'
  },
  submit_btn: {
    // background: `${GlobalStyleSheet.admin_primry_color}`,
    marginTop: '1%'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].form_label_fontsize}`
  },
  term_condition_label: {
    width: '100%',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].form_label_fontsize}`,
    paddingTop: '-10px',
    marginTop: '-10px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].primary_text_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].primary_text_color}`,
    marginRight: '10%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  variations_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AddNew);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products-contents/view-product.js":
/*!*************************************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products-contents/view-product.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\all-products-contents\\view-product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





 // https://drive.google.com/uc?export=view&id=1NXjE17yYJj2Pt7be9_J0DXdsnNzO4Yd4
// https://drive.google.com/uc?export=view&id=1F7ylPEh_UmvimCgPAOM7rf6gJ_yG8TK9

const ViewProduct = props => {
  const [imgPreview, setImgPreview] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false);
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState('');
  const len = props.data.product_image_link.length;

  function prevImage() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function nextImage() {
    if (index < len - 1) {
      setIndex(index + 1);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: styles.title_row,
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "fontawesome",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowLeft"],
    style: styles.title_fontawesome,
    onClick: props.back,
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, " Prev "), __jsx("div", {
    style: styles.title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, " Next ")), _.isEqual(props.data.product_type, "simple-product") ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: styles.img_row,
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, props.data.product_image_link && props.data.product_image_link.map((element, index) => __jsx("div", {
    style: {
      margin: '0%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    thumbnail: true,
    fluid: true,
    style: {
      minWidth: '200px',
      maxWidth: '200px'
    },
    src: element.value,
    alt: "Flowers in Chania",
    onClick: () => {
      setImgPreview(true), setIndex(index);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: styles.img_row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 32
    }
  }, "General Info")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, imgPreview ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "modal-overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "close-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronLeft"],
    style: styles.img_preview_fontawesome,
    onClick: () => prevImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronRight"],
    style: styles.img_preview_fontawesome,
    onClick: nextImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"],
    style: styles.img_preview_fontawesome,
    onClick: () => setImgPreview(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]) + " " + "image-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: props.data.product_image_link[index].value,
    style: {
      maxWidth: '100%',
      maxHeight: '90vh',
      margin: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2742845280", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  })))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2742845280",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color],
    __self: undefined
  }, `label.__jsx-style-dynamic-selector{width:100%;text-align:center;border-bottom:1px solid gray;line-height:0.1em;font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize};margin:0%;}label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color};color:white;padding:5px 10px;}.modal-overlay.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.__jsx-style-dynamic-selector{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.__jsx-style-dynamic-selector{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.__jsx-style-dynamic-selector{display:grid;height:100%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMtY29udGVudHNcXHZpZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmlCLEFBR29DLEFBUWlDLEFBSzdCLEFBV0csQUFRSCxBQVFGLFdBdkNLLEVBd0NOLEVBM0JOLEFBbUJPLEdBUkYsR0FWSixJQThCWCxHQTdCYSxDQWRvQixBQXdCakIsUUFUSixHQVJRLENBa0JBLElBVEwsT0FSVSxJQVNWLENBU0ksQ0F6QkcsU0FpQk4sRUFUaEIsR0FrQm9CLElBekJ1QixHQWlCTCxTQVN0QyxDQUlhLFNBQ0YsT0FDQyxLQWRaLEdBZWUsRUFoQ0QsU0FpQ2QsQ0FoQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFsbC1wcm9kdWN0cy1jb250ZW50c1xcdmlldy1wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEltYWdlLCBNb2RhbCwgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhVGltZXMsIGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFBcnJvd0FsdENpcmNsZUxlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MU5YakUxN3lZSmoyUHQ3YmU5X0owRFhkc25Oek80WWQ0XHJcbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xRjd5bFBFaF9VbXZpbUNnUEFPTTdyZjZnSl95RzhUSzlcclxuXHJcblxyXG5jb25zdCBWaWV3UHJvZHVjdCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFtpbWdQcmV2aWV3LCBzZXRJbWdQcmV2aWV3XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgbGVuID0gcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4IC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IChsZW4gLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJmb250YXdlc29tZVwiIGljb249e2ZhQXJyb3dMZWZ0fSBzdHlsZT17c3R5bGVzLnRpdGxlX2ZvbnRhd2Vzb21lfSBvbkNsaWNrPXtwcm9wcy5iYWNrfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMudGl0bGV9PiB7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGl0bGV9PiBQcmV2IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gTmV4dCA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIHtfLmlzRXF1YWwocHJvcHMuZGF0YS5wcm9kdWN0X3R5cGUsIFwic2ltcGxlLXByb2R1Y3RcIikgP1xyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmltZ19yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsgJiYgcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMjAwcHgnLCBtYXhXaWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbWVudC52YWx1ZX0gYWx0PVwiRmxvd2VycyBpbiBDaGFuaWFcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldEluZGV4KGluZGV4KSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5pbWdfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMuZ2VuZXJhbF9pbmZvX2xhYmVsfT5HZW5lcmFsIEluZm88L0Zvcm0uTGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHNwYW4+R2VuZXJhbCBJbmZvPC9zcGFuPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgey8qIEltYWdlIFByZXZpZXcgKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1nUHJldmlldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvbkxlZnR9IHN0eWxlPXtzdHlsZXMuaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByZXZJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV4dEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW1nUHJldmlldyhmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rW2luZGV4XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnOTB2aCcsIG1hcmdpbjogJ2F1dG8nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgc3BhbiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMC43JSA0JScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICBpbWdfcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZzogJ3doaXRlJyxcclxuICAgICAgICB6SW5kZXg6ICc5OTknXHJcbiAgICB9LFxyXG4gICAgaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXHJcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGdlbmVyYWxfaW5mb19sYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5J1xyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaWV3UHJvZHVjdDsiXX0= */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\all-products-contents\\view-product.js */`));
};

const styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '0.7% 4%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    cursor: 'pointer',
    marginRight: '3%',
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px'
  },
  title: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color}`
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize}`
  },
  img_row: {
    margin: '2%',
    display: 'flex',
    justifyContent: 'center',
    backgroung: 'white',
    zIndex: '999'
  },
  img_preview_fontawesome: {
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'lighter',
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  },
  general_info_label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize}`,
    width: '100%',
    borderBottom: '1px solid gray'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ViewProduct);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _all_products_contents_view_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-products-contents/view-product */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products-contents/view-product.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\all-products.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












class AllProducts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      productsArray: [],
      viewProduct: false,
      data: []
    };
  } // Getting Product Categories from DB


  async componentDidMount() {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_4__["default"].PATH + '/api/products/';

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);
      console.log('data:', response.data.data.docs);
      this.setState({
        productsArray: response.data.data.docs
      });
    } catch (error) {
      console.log('Data Fetching Eror:', error);
    }
  }

  handleViewProduct(index, i) {
    // let dataa;
    // Simple Product
    if (i == -1) {
      this.setState({
        data: this.state.productsArray[index],
        viewProduct: true
      });
    } else {
      // Variable Product
      // dataa = Object.assign([], this.state.productsArray[index])
      // dataa.product_variations = dataa.product_variations[i];
      this.setState({
        data: this.state.productsArray[index],
        viewProduct: true
      });
    } // console.log('datadata:', data)
    // Router.push({
    //     pathname: '/view-product',
    //     query: { data: data },
    // }, '/vendor/view-product?' + data.product_name);

  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.state.viewProduct ? __jsx(_all_products_contents_view_product__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.state.data,
      back: () => this.setState({
        viewProduct: false,
        data: []
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.title_row,
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPlus"],
      style: styles.title_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }), __jsx("div", {
      style: styles.title,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]) + " " + "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, " All Products")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: {
        margin: '2%',
        background: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      responsive: true,
      bordered: true,
      hover: true,
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, __jsx("thead", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }, __jsx("tr", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 37
      }
    }, __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 45
      }
    })), __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 41
      }
    }, "Name"), __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 41
      }
    }, "SKU"), __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }, "Stock"), __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 41
      }
    }, "Price"), __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 41
      }
    }, "Categories"), __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 41
      }
    }, "Tags"), __jsx("th", {
      style: {
        textAlign: 'center'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }, "Date"))), __jsx("tbody", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 33
      }
    }, this.state.productsArray && this.state.productsArray.map((element, index) => _.isEqual(element.product_type, "simple-product") ? __jsx("tr", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }, __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 89
      }
    })), __jsx("td", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]) + " " + "td",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 49
      }
    }, element.product_name, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]) + " " + "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 53
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: styles.nav_link,
      onClick: () => this.handleViewProduct(index, -1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 53
      }
    }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 53
      }
    }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 53
      }
    }, "Delete")), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 49
      }
    }, element.sku ? element.sku : '-'), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 49
      }
    }, element.product_in_stock), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 49
      }
    }, element.product_price), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 49
      }
    }, element.product_category && element.product_category.map(e => e.value + ',')), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 49
      }
    }, _.isEmpty(element.product_tags) ? '-' : element.product_tags.map(e => e.value + ',')), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 49
      }
    }, _.isEmpty(element.product_entry_date) ? '-' : element.product_entry_date)) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("tr", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 49
      }
    }, __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 57
      }
    })), __jsx("td", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]) + " " + "td",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 53
      }
    }, element.product_name, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]) + " " + "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 57
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: styles.nav_link,
      onClick: () => this.handleViewProduct(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 57
      }
    }, "View"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 57
      }
    }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 57
      }
    }, "Delete")), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 53
      }
    }, element.sku ? element.sku : '-'), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 53
      }
    }, element.product_variations.map(e => e.item[e.item.length - 2].value + ',')), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 53
      }
    }, element.product_variations.map(e => e.item[e.item.length - 3].value + ',')), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 53
      }
    }, element.product_category && element.product_category.map(e => e.value + ',')), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 53
      }
    }, _.isEmpty(element.product_tags) ? '-' : element.product_tags.map(e => e.value + ',')), __jsx("td", {
      align: "center",
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 53
      }
    }, _.isEmpty(element.product_entry_date) ? '-' : element.product_entry_date)))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3582920204",
      dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize],
      __self: this
    }, `.td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0pxQixBQUcwQywwRUFDTSxxRUFDQSw2RkFDb0IsdUNBQzNDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIFRhYmxlLCBGb3JtLCBCdXR0b24sIE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBWaWV3UHJvZHVjdCBmcm9tICcuL2FsbC1wcm9kdWN0cy1jb250ZW50cy92aWV3LXByb2R1Y3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcblxyXG5jbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0c0FycmF5OiBbXSxcclxuICAgICAgICAgICAgdmlld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHZXR0aW5nIFByb2R1Y3QgQ2F0ZWdvcmllcyBmcm9tIERCXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy8nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIHJlc3BvbnNlLmRhdGEuZGF0YS5kb2NzKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHNBcnJheTogcmVzcG9uc2UuZGF0YS5kYXRhLmRvY3MgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBGZXRjaGluZyBFcm9yOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVmlld1Byb2R1Y3QoaW5kZXgsIGkpIHtcclxuICAgICAgICAvLyBsZXQgZGF0YWE7XHJcbiAgICAgICAgLy8gU2ltcGxlIFByb2R1Y3RcclxuICAgICAgICBpZiAoaSA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5W2luZGV4XSwgdmlld1Byb2R1Y3Q6IHRydWUgfSlcclxuICAgICAgICB9IGVsc2UgeyAvLyBWYXJpYWJsZSBQcm9kdWN0XHJcbiAgICAgICAgICAgIC8vIGRhdGFhID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5W2luZGV4XSlcclxuICAgICAgICAgICAgLy8gZGF0YWEucHJvZHVjdF92YXJpYXRpb25zID0gZGF0YWEucHJvZHVjdF92YXJpYXRpb25zW2ldO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5W2luZGV4XSwgdmlld1Byb2R1Y3Q6IHRydWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGFkYXRhOicsIGRhdGEpXHJcbiAgICAgICAgLy8gUm91dGVyLnB1c2goe1xyXG4gICAgICAgIC8vICAgICBwYXRobmFtZTogJy92aWV3LXByb2R1Y3QnLFxyXG4gICAgICAgIC8vICAgICBxdWVyeTogeyBkYXRhOiBkYXRhIH0sXHJcbiAgICAgICAgLy8gfSwgJy92ZW5kb3Ivdmlldy1wcm9kdWN0PycgKyBkYXRhLnByb2R1Y3RfbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS52aWV3UHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdQcm9kdWN0OiBmYWxzZSwgZGF0YTogW10gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IHN0eWxlPXtzdHlsZXMudGl0bGVfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gQWxsIFByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBtYXJnaW46ICcyJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TS1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U3RvY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q2F0ZWdvcmllczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5UYWdzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5ICYmIHRoaXMuc3RhdGUucHJvZHVjdHNBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0VxdWFsKGVsZW1lbnQucHJvZHVjdF90eXBlLCBcInNpbXBsZS1wcm9kdWN0XCIpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PjxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVZpZXdQcm9kdWN0KGluZGV4LCAtMSl9PiBWaWV3IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+RGVsZXRlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQucHJvZHVjdF9pbl9zdG9ja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5wcm9kdWN0X3ByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9jYXRlZ29yeSAmJiBlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLmlzRW1wdHkoZWxlbWVudC5wcm9kdWN0X3RhZ3MpID8gJy0nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLmlzRW1wdHkoZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGUpID8gJy0nIDogZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVmlld1Byb2R1Y3QoaW5kZXgpfT5WaWV3PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PkRlbGV0ZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLml0ZW1bZS5pdGVtLmxlbmd0aCAtIDJdLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pdGVtW2UuaXRlbS5sZW5ndGggLSAzXS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9jYXRlZ29yeSAmJiBlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge18uaXNFbXB0eShlbGVtZW50LnByb2R1Y3RfdGFncykgPyAnLScgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Xy5pc0VtcHR5KGVsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlKSA/ICctJyA6IGVsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjclIDQlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFsbFByb2R1Y3RzOyJdfQ== */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\all-products.js */`));
  }

}

const styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '0.7% 4%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px'
  },
  title: {
    color: 'gray'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].form_label_fontsize}`
  },
  nav_link: {
    paddingLeft: '10px',
    paddingRight: '5px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AllProducts);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/monthly-reports.js":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/monthly-reports.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MonthlyReports = () => {
  return __jsx("div", null, "This is overall");
};

/* harmony default export */ __webpack_exports__["default"] = (MonthlyReports);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/overall-reports.js":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/overall-reports.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OverallReports = () => {
  return __jsx("div", null, "This is overall");
};

/* harmony default export */ __webpack_exports__["default"] = (OverallReports);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/weekly-reports.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/weekly-reports.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class WeeklyReports extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      striped: true,
      bordered: true,
      hover: true,
      responsive: true
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "First Name"), __jsx("th", null, "Last Name"), __jsx("th", null, "Username"))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "1"), __jsx("td", null, "Mark"), __jsx("td", null, "Otto"), __jsx("td", null, "@mdo")), __jsx("tr", null, __jsx("td", null, "2"), __jsx("td", null, "Jacob"), __jsx("td", null, "Thornton"), __jsx("td", null, "@fat")), __jsx("tr", null, __jsx("td", null, "3"), __jsx("td", {
      colSpan: "2"
    }, "Larry the Bird"), __jsx("td", null, "@twitter"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WeeklyReports);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/yearly-reports.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/yearly-reports.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const YearlyReports = () => {
  return __jsx("div", null, "This is overall");
};

/* harmony default export */ __webpack_exports__["default"] = (YearlyReports);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/reports.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/reports.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _report_contents_weekly_reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-contents/weekly-reports */ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/weekly-reports.js");
/* harmony import */ var _report_contents_monthly_reports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-contents/monthly-reports */ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/monthly-reports.js");
/* harmony import */ var _report_contents_yearly_reports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-contents/yearly-reports */ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/yearly-reports.js");
/* harmony import */ var _report_contents_overall_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-contents/overall-reports */ "./src/pages/components/vendor/dashboard/dashboard-contents/report-contents/overall-reports.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Reports = () => {
  return __jsx("div", {
    style: {
      width: '100%',
      margin: '2%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "overall",
    transition: false,
    id: "reports_tab",
    justify: true,
    fill: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "overall",
    title: "Overall"
  }, __jsx(_report_contents_overall_reports__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "yearly",
    title: "Yearly"
  }, __jsx(_report_contents_yearly_reports__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "monthly",
    title: "Monthly"
  }, __jsx(_report_contents_monthly_reports__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "weekly",
    title: "Weekly"
  }, __jsx(_report_contents_weekly_reports__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Reports);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/vendor-dashboard.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/vendor-dashboard.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\vendor-dashboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class VendorDashboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfTotalProducts: 1000,
      noOfInStockProducts: 2000,
      noOfSoldProducts: 3000,
      noOfReturnedProducts: 4000,
      totalEarnings: 5470,
      thisYearEarnings: 2309,
      thisMonthEarnings: 1207,
      noOfTotalOrders: 1190,
      noOfDeliveredOrders: 980,
      noOfPendingOrders: 120,
      noOfCancelledOrders: 100
    };
  }

  render() {
    return __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.title_row,
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
      style: styles.title_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }), __jsx("div", {
      style: styles.title,
      className: "jsx-4035273632" + " " + "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, " Dashboard ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: {
        padding: '0% 1%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.product_card_col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, "Products"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: styles.card_body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }
    }, __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }, "Total Products")), __jsx("div", {
      style: styles.total_product_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faProductHunt"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfTotalProducts,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 53
      }
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 41
      }
    }, "In-Stock Products")), __jsx("div", {
      style: styles.stock_product_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStoreAlt"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfInStockProducts,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 53
      }
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }, "Sold Products")), __jsx("div", {
      style: styles.sold_product_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckDouble"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfSoldProducts,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 53
      }
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 41
      }
    }, "Returned Products")), __jsx("div", {
      style: styles.returned_product_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faThumbsDown"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfReturnedProducts,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 53
      }
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.order_card_col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 29
      }
    }, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: styles.card_body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    }, __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 41
      }
    }, "Total Orders")), __jsx("div", {
      style: styles.total_order_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfTotalOrders,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 53
      }
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 41
      }
    }, "Deleivered Orders")), __jsx("div", {
      style: styles.delivered_order_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faThumbsUp"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfDeliveredOrders,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 53
      }
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 41
      }
    }, "Pending Orders")), __jsx("div", {
      style: styles.prnding_order_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClock"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 53
      }
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 41
      }
    }, "Cancelled Orders")), __jsx("div", {
      style: styles.cancelled_order_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBan"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfCancelledOrders,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 53
      }
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.earning_card_col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.total_earning_card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 33
      }
    }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: styles.total_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 53
      }
    }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.year_earning_card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 33
      }
    }, "This Year Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: styles.year_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 53
      }
    }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.month_earning_card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 33
      }
    }, "This Month Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: styles.month_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 41
      }
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 41
      }
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 49
      }
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 53
      }
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4035273632",
      __self: this
    }, "p.jsx-4035273632{width:100%;border-bottom:1.2px dashed lightgray;line-height:0.1em;}.label_span.jsx-4035273632{background:#fff;padding-right:3%;}.number_count.jsx-4035273632{color:white;font-size:25px;}.number_count_div.jsx-4035273632{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5%;background:red;border-radius:5px;}.number_count_div.jsx-4035273632:hover{margin:-5px 0px 5px 0px;box-shadow:0 4px 8px 0 black,0 6px 20px 0 yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFx2ZW5kb3ItZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9QcUIsQUFHd0MsQUFLSSxBQUlILEFBSUcsQUFRVSxXQXBCWSxDQVV6QyxHQUdpQixDQVBqQixRQWV1RCxHQVh0RCxNQUpBLGVBTHFCLGtCQUNyQixPQW9CQSxnQkFSc0IsNkZBQ1IsV0FDSSxlQUVuQixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xcdmVuZG9yLWRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVN0b3JlQWx0LCBmYVVzZXJQbHVzLCBmYUNoZWNrRG91YmxlLCBmYURvbGxhclNpZ24sIGZhVGFjaG9tZXRlckFsdCxcclxuICAgIGZhRWRpdCwgZmFDbG9jaywgZmFCYW5cclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBWZW5kb3JEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbm9PZlRvdGFsUHJvZHVjdHM6IDEwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZJblN0b2NrUHJvZHVjdHM6IDIwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZTb2xkUHJvZHVjdHM6IDMwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZSZXR1cm5lZFByb2R1Y3RzOiA0MDAwLFxyXG5cclxuICAgICAgICAgICAgdG90YWxFYXJuaW5nczogNTQ3MCxcclxuICAgICAgICAgICAgdGhpc1llYXJFYXJuaW5nczogMjMwOSxcclxuICAgICAgICAgICAgdGhpc01vbnRoRWFybmluZ3M6IDEyMDcsXHJcblxyXG4gICAgICAgICAgICBub09mVG90YWxPcmRlcnM6IDExOTAsXHJcbiAgICAgICAgICAgIG5vT2ZEZWxpdmVyZWRPcmRlcnM6IDk4MCxcclxuICAgICAgICAgICAgbm9PZlBlbmRpbmdPcmRlcnM6IDEyMCxcclxuICAgICAgICAgICAgbm9PZkNhbmNlbGxlZE9yZGVyczogMTAwLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy50aXRsZV9yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFjaG9tZXRlckFsdH0gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gRGFzaGJvYXJkIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBwYWRkaW5nOiAnMCUgMSUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2NhcmRfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXtzdHlsZXMuY2FyZF9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPlRvdGFsIFByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMudG90YWxfcHJvZHVjdF9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVByb2R1Y3RIdW50fSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mVG90YWxQcm9kdWN0c30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPkluLVN0b2NrIFByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMuc3RvY2tfcHJvZHVjdF9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0b3JlQWx0fSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mSW5TdG9ja1Byb2R1Y3RzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+U29sZCBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnNvbGRfcHJvZHVjdF9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrRG91YmxlfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mU29sZFByb2R1Y3RzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+UmV0dXJuZWQgUHJvZHVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5yZXR1cm5lZF9wcm9kdWN0X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGh1bWJzRG93bn0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlJldHVybmVkUHJvZHVjdHN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQ29sLTIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLm9yZGVyX2NhcmRfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17c3R5bGVzLmNhcmRfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5Ub3RhbCBPcmRlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy50b3RhbF9vcmRlcl9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVkaXR9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZUb3RhbE9yZGVyc30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPkRlbGVpdmVyZWQgT3JkZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMuZGVsaXZlcmVkX29yZGVyX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGh1bWJzVXB9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZEZWxpdmVyZWRPcmRlcnN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5QZW5kaW5nIE9yZGVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnBybmRpbmdfb3JkZXJfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDbG9ja30gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlBlbmRpbmdPcmRlcnN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5DYW5jZWxsZWQgT3JkZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMuY2FuY2VsbGVkX29yZGVyX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFufSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mQ2FuY2VsbGVkT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENvbC0zICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5lYXJuaW5nX2NhcmRfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3N0eWxlcy5lYXJuaW5nX2NhcmRfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMudG90YWxfZWFybmluZ19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5lYXJuaW5nX2NhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgRWFybmluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMudG90YWxfZXJybmluZ19yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURvbGxhclNpZ259IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZQZW5kaW5nT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3N0eWxlcy5lYXJuaW5nX2NhcmRfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMueWVhcl9lYXJuaW5nX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmVhcm5pbmdfY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIFllYXIgRWFybmluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMueWVhcl9lcnJuaW5nX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRG9sbGFyU2lnbn0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlBlbmRpbmdPcmRlcnN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17c3R5bGVzLmVhcm5pbmdfY2FyZF9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5tb250aF9lYXJuaW5nX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmVhcm5pbmdfY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIE1vbnRoIEVhcm5pbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLm1vbnRoX2Vycm5pbmdfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mUGVuZGluZ09yZGVyc30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS4ycHggZGFzaGVkIGxpZ2h0Z3JheTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC4xZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsX3NwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMyVcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5udW1iZXJfY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAubnVtYmVyX2NvdW50X2RpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAubnVtYmVyX2NvdW50X2Rpdjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtNXB4IDBweCA1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIGJsYWNrLCAwIDZweCAyMHB4IDAgeWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aXRsZV9yb3c6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgbGlnaHRncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMS41JSA0JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyNnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI2cHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgfSxcclxuXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgIH0sXHJcblxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6ICcxLjUlIDUlJyxcclxuICAgICAgICBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIC8vIGJvcmRlckJvdHRvbTogYDAuNXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWBcclxuICAgICAgICBmb250U2l6ZTogJzE1cHgnXHJcbiAgICB9LFxyXG4gICAgY2FyZF90ZXh0X2Rpdjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnNSUnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBQcm9kdWN0c1xyXG4gICAgcHJvZHVjdF9jYXJkX2NvbDoge1xyXG4gICAgICAgIHBhZGRpbmc6ICczJSAxJSdcclxuICAgIH0sXHJcbiAgICB0b3RhbF9wcm9kdWN0X3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdibHVlJyxcclxuICAgIH0sXHJcbiAgICBzdG9ja19wcm9kdWN0X3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdwdXJwbGUnLFxyXG4gICAgfSxcclxuICAgIHNvbGRfcHJvZHVjdF9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnZ3JlZW4nLFxyXG4gICAgfSxcclxuICAgIHJldHVybmVkX3Byb2R1Y3Rfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2dyYXknLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBPcmRlcnNcclxuICAgIG9yZGVyX2NhcmRfY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzMlIDElJ1xyXG4gICAgfSxcclxuICAgIHRvdGFsX29yZGVyX3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdibHVlJyxcclxuICAgIH0sXHJcbiAgICBkZWxpdmVyZWRfb3JkZXJfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2dyZWVuJyxcclxuICAgIH0sXHJcbiAgICBwcm5kaW5nX29yZGVyX3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZiZjAwJyxcclxuICAgIH0sXHJcbiAgICBjYW5jZWxsZWRfb3JkZXJfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEVhcm5pbmdzXHJcbiAgICBlYXJuaW5nX2NhcmRfY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzMlIDElJ1xyXG4gICAgfSxcclxuICAgIGVhcm5pbmdfY2FyZF9yb3c6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICc0JSdcclxuICAgIH0sXHJcbiAgICBlYXJuaW5nX2NhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICB0b3RhbF9lYXJuaW5nX2NhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDA5OWU2JyxcclxuICAgIH0sXHJcbiAgICB5ZWFyX2Vhcm5pbmdfY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNhYzAwZTYnLFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZSdcclxuICAgIH0sXHJcbiAgICBtb250aF9lYXJuaW5nX2NhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjYWM3MzM5JyxcclxuICAgIH0sXHJcbiAgICAvLyBcclxuICAgIHRvdGFsX2Vycm5pbmdfcm93OiB7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAnMyUgMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDA4OGNjJyxcclxuICAgIH0sXHJcbiAgICB5ZWFyX2Vycm5pbmdfcm93OiB7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAnMyUgMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjOTkwMGNjJyxcclxuICAgIH0sXHJcbiAgICBtb250aF9lcnJuaW5nX3Jvdzoge1xyXG4gICAgICAgIC8vIG1hcmdpbjogJzMlIDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzk5NjYzMycsXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzBweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzUwcHgnLFxyXG4gICAgICAgIGZsb2F0OiAncmlnaHQnXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZW5kb3JEYXNoYm9hcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\vendor-dashboard.js */"));
  }

}

const styles = {
  title_row: {
    borderBottom: '1px solid lightgray',
    padding: '1.5% 4%'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '26px',
    height: '26px',
    maxHeight: '26px',
    maxWidth: '26px'
  },
  title: {
    color: 'gray'
  },
  row: {
    margin: '2%',
    padding: '0px'
  },
  card_header: {
    // background: 'white',
    // padding: '1.5% 5%',
    color: '#6A7074',
    // borderBottom: `0.5px solid ${GlobalStyleSheet.body_color}`
    fontSize: '15px'
  },
  card_text_div: {
    color: '#6A7074',
    fontSize: '14px',
    padding: '5%'
  },
  // Products
  product_card_col: {
    padding: '3% 1%'
  },
  total_product_row: {
    background: 'blue'
  },
  stock_product_row: {
    background: 'purple'
  },
  sold_product_row: {
    background: 'green'
  },
  returned_product_row: {
    background: 'gray'
  },
  // Orders
  order_card_col: {
    padding: '3% 1%'
  },
  total_order_row: {
    background: 'blue'
  },
  delivered_order_row: {
    background: 'green'
  },
  prnding_order_row: {
    background: '#ffbf00'
  },
  cancelled_order_row: {
    background: 'red'
  },
  // Earnings
  earning_card_col: {
    padding: '3% 1%'
  },
  earning_card_row: {
    marginBottom: '4%'
  },
  earning_card_header: {
    color: 'white',
    fontSize: '15px'
  },
  total_earning_card: {
    width: '100%',
    background: '#0099e6'
  },
  year_earning_card: {
    width: '100%',
    background: '#ac00e6',
    color: 'blue'
  },
  month_earning_card: {
    width: '100%',
    background: '#ac7339'
  },
  // 
  total_errning_row: {
    // margin: '3% 0%',
    background: '#0088cc'
  },
  year_errning_row: {
    // margin: '3% 0%',
    background: '#9900cc'
  },
  month_errning_row: {
    // margin: '3% 0%',
    background: '#996633'
  },
  product_fontawesome: {
    color: 'white',
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_8__["default"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VendorDashboard);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-side-drawer.js":
/*!************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-side-drawer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dashboard_contents_vendor_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-contents/vendor-dashboard */ "./src/pages/components/vendor/dashboard/dashboard-contents/vendor-dashboard.js");
/* harmony import */ var _dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-contents/product-contents/all-products */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js");
/* harmony import */ var _dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-contents/product-contents/add-new */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js");
/* harmony import */ var _dashboard_contents_product_contents_add_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-contents/product-contents/add-category */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-category.js");
/* harmony import */ var _dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-contents/inventory */ "./src/pages/components/vendor/dashboard/dashboard-contents/inventory.js");
/* harmony import */ var _dashboard_contents_discounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-contents/discounts */ "./src/pages/components/vendor/dashboard/dashboard-contents/discounts.js");
/* harmony import */ var _dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-contents/reports */ "./src/pages/components/vendor/dashboard/dashboard-contents/reports.js");
/* harmony import */ var _dashboard_contents_bulk_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-contents/bulk-upload */ "./src/pages/components/vendor/dashboard/dashboard-contents/bulk-upload.js");
/* harmony import */ var _dashboard_contents_orders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-contents/orders */ "./src/pages/components/vendor/dashboard/dashboard-contents/orders.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  const [show_product, setShow_product] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "Dashboard"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + (drawerClasses || "")
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: styles.image
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik
  }, " ", props.token, " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Dashboard",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, "Dashboard"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: styles.nav_link,
    onClick: () => setShow_product(!show_product)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, " Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: show_product ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"],
    style: styles.forword_fontawesome
  })))), show_product ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AllProducts",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, " All Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddNew",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, " Add New "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddCategory",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, " Add Category "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, "Inventory"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "BulkUpload",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, "Bulk Upload"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Discounts",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, "Discount Coupons"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Orders",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, "Orders"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Reports",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, "Reports"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    onClick: (props.click, props.logoutClickHandler),
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPowerOff"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto"
  }, "Logout"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "tabs_side_drawer_tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Dashboard"
  }, __jsx(_dashboard_contents_vendor_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AllProducts"
  }, __jsx(_dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddNew"
  }, __jsx(_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddCategory"
  }, __jsx(_dashboard_contents_product_contents_add_category__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory"
  }, __jsx(_dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "BulkUpload"
  }, __jsx(_dashboard_contents_bulk_upload__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Discounts"
  }, __jsx(_dashboard_contents_discounts__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Orders"
  }, __jsx(_dashboard_contents_orders__WEBPACK_IMPORTED_MODULE_14__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Reports"
  }, __jsx(_dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_12__["default"], null)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3017863662",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]
  }, `.nav_link.__jsx-style-dynamic-selector{color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;}.nav_link.__jsx-style-dynamic-selector:hover{background:#30313E;}.tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;overflow-y:auto;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.product_submenu.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:0% 5% 0% 10%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;padding:0px;}label.__jsx-style-dynamic-selector{margin-top:4%;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color};}@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLXNpZGUtZHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtMaUIsQUFHNEQsQUFLaEIsQUFHUCxBQWVZLEFBR2dCLEFBTXRCLEFBS0osQUFNRyxBQUdBLFlBckN1QixDQW1DeEMsQUFHQSxDQVRtQyxJQUx4QixDQTNCZixVQTRCZ0IsTUFqQ21CLEtBMEJBLENBUW5DLFFBSUEsR0E3QjhDLGNBUlIsS0EwQkEsYUFKdEMsT0FibUIsU0FSbkIsS0EwQndCLENBakJkLE1BQ0ssV0FDSixFQWdCWCxLQWZvQixnQkFDTixVQUNNLGdCQUNKLFlBQ2lCLG1HQUNNLGlJQUN2QyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1zaWRlLWRyYXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOYXYsIFRhYiwgUm93LCBDb2wsIEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFVcGxvYWQsIGZhVGFjaG9tZXRlckFsdCwgZmFDaGV2cm9uUmlnaHQsIGZhQ2hldnJvbkRvd24sIGZhQ2hldnJvblVwLFxyXG4gICAgZmFQbHVzQ2lyY2xlLCBmYVBvd2VyT2ZmLCBmYUxpc3RBbHQsIGZhV2FyZWhvdXNlLCBmYVRhZ3MsIGZhUGVyY2VudCwgZmFDaGFydEJhclxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBWZW5kb3JEYXNoYm9hcmQgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvdmVuZG9yLWRhc2hib2FyZCc7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9wcm9kdWN0LWNvbnRlbnRzL2FsbC1wcm9kdWN0cyc7XHJcbmltcG9ydCBBZGROZXcgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvcHJvZHVjdC1jb250ZW50cy9hZGQtbmV3JztcclxuaW1wb3J0IEFkZENhdGVnb3J5IGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvYWRkLWNhdGVnb3J5JztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9pbnZlbnRvcnknO1xyXG5pbXBvcnQgRGlzY291bnRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2Rpc2NvdW50cyc7XHJcbmltcG9ydCBSZXBvcnRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3JlcG9ydHMnO1xyXG5pbXBvcnQgQnVsa1VwbG9hZCBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9idWxrLXVwbG9hZCc7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvb3JkZXJzJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuXHJcbmNvbnN0IERhc2hib2FyZFNpZGVEcmF3ZXIgPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQgZHJhd2VyQ2xhc3NlcyA9IFwidGFic19zaWRlX2RyYXdlclwiO1xyXG4gICAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgICAgICBkcmF3ZXJDbGFzc2VzID0gXCJ0YWJzX3NpZGVfZHJhd2VyIG9wZW5cIjtcclxuICAgIH1cclxuICAgIGNvbnN0IFtzaG93X3Byb2R1Y3QsIHNldFNob3dfcHJvZHVjdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImRhc2hib2FyZC10YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cIkRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFNpZGUgRHJhd2VyIENvbXBvbmVudHMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZHJhd2VyQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtblwiIHZhcmlhbnQ9XCJwaWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3N0eWxlcy5pbWFnZV9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmRleFwiIHN0eWxlPXtzdHlsZXMubXVoYWxpa30+IHtwcm9wcy50b2tlbn0gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkRhc2hib2FyZFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhY2hvbWV0ZXJBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHNldFNob3dfcHJvZHVjdCghc2hvd19wcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFByb2R1Y3RzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e3Nob3dfcHJvZHVjdCA/IGZhQ2hldnJvblVwIDogZmFDaGV2cm9uRG93bn0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dfcHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9zdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkFsbFByb2R1Y3RzXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9zdWJtZW51X2xpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBBbGwgUHJvZHVjdHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWRkTmV3XCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9zdWJtZW51X2xpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQbHVzQ2lyY2xlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IEFkZCBOZXcgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWRkQ2F0ZWdvcnlcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gQWRkIENhdGVnb3J5IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXYXJlaG91c2V9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkludmVudG9yeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQnVsa1VwbG9hZFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVwbG9hZH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+QnVsayBVcGxvYWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkRpc2NvdW50c1wiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRhZ3N9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkRpc2NvdW50IENvdXBvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIk9yZGVyc1wiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUYWdzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5PcmRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJSZXBvcnRzXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hhcnRCYXJ9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlJlcG9ydHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17cHJvcHMuY2xpY2ssIHByb3BzLmxvZ291dENsaWNrSGFuZGxlcn0gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNfc2lkZV9kcmF3ZXJfdGFiX2NvbnRlbnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17XCJhdXRvXCJ9IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJEYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVuZG9yRGFzaGJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWxsUHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxsUHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBZGROZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkTmV3IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWRkQ2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQnVsa1VwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdWxrVXBsb2FkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiRGlzY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIk9yZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJSZXBvcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgdGhlIFNpZGUgRHJhd2VyIENvbXBvbmVudHMgKi99XHJcbiAgICAgICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzEzRTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Rfc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlIDUlIDAlIDEwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyX3RhYl9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgaW1hZ2VfZGl2OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMC41cHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzIlJ1xyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICc4MHB4J1xyXG4gICAgfSxcclxuICAgIG11aGFsaWs6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4J1xyXG4gICAgfSxcclxuICAgIHByb2R1Y3Rfc3VibWVudV9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMXB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDBweCdcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzglJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZm9yd29yZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICB3aWR0aDogJzhweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnOHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFNpZGVEcmF3ZXI7Il19 */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-side-drawer.js */`));
};

const styles = {
  image_div: {
    background: 'white',
    width: '100%',
    borderRight: '0.5px solid gray',
    padding: '2%'
  },
  image: {
    width: '80px'
  },
  muhalik: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`,
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    padding: '0px',
    margin: '0px'
  },
  nav_link: {
    color: 'white',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  product_submenu_link: {
    color: 'white',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
    height: '40px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    marginRight: '8%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    float: 'right',
    width: '8px',
    height: '8px',
    maxHeight: '8px',
    maxWidth: '8px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DashboardSideDrawer);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard.js":
/*!************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dashboard_contents_vendor_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-contents/vendor-dashboard */ "./src/pages/components/vendor/dashboard/dashboard-contents/vendor-dashboard.js");
/* harmony import */ var _dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-contents/product-contents/all-products */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js");
/* harmony import */ var _dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-contents/product-contents/add-new */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js");
/* harmony import */ var _dashboard_contents_product_contents_add_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-contents/product-contents/add-category */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-category.js");
/* harmony import */ var _dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-contents/inventory */ "./src/pages/components/vendor/dashboard/dashboard-contents/inventory.js");
/* harmony import */ var _dashboard_contents_discounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-contents/discounts */ "./src/pages/components/vendor/dashboard/dashboard-contents/discounts.js");
/* harmony import */ var _dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-contents/reports */ "./src/pages/components/vendor/dashboard/dashboard-contents/reports.js");
/* harmony import */ var _dashboard_contents_bulk_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-contents/bulk-upload */ "./src/pages/components/vendor/dashboard/dashboard-contents/bulk-upload.js");
/* harmony import */ var _dashboard_contents_orders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-contents/orders */ "./src/pages/components/vendor/dashboard/dashboard-contents/orders.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const Dashboard = props => {
  let wprapper_Casses = "wrapper";

  if (props.show) {
    wprapper_Casses = "wrapper open";
  }

  const [show_product, setShow_product] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "Dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: styles.wrapper_col,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + (wprapper_Casses || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills",
    style: {
      minWidth: '220px',
      maxWidth: '220px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, " ", props.token, " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Dashboard",
    style: styles.nav_link,
    onClick: () => setShow_product(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, " Dashboard "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: styles.nav_link,
    onClick: () => setShow_product(!show_product),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, " Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: show_product ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  })))), show_product ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "product_submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AllProducts",
    style: styles.product_submenu_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  }, " All Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 45
    }
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "product_submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddNew",
    style: styles.product_submenu_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 45
    }
  }, " Add New "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 45
    }
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "product_submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddCategory",
    style: styles.product_submenu_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 45
    }
  }, " Add Category "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 45
    }
  })))) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    style: styles.nav_link,
    onClick: () => setShow_product(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }, " Inventory "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "BulkUpload",
    style: styles.nav_link,
    onClick: () => setShow_product(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 41
    }
  }, " Bulk Upload "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Discounts",
    style: styles.nav_link,
    onClick: () => setShow_product(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }, " Discount "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Orders",
    style: styles.nav_link,
    onClick: () => setShow_product(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 41
    }
  }, " Orders "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Reports",
    style: styles.nav_link,
    onClick: () => setShow_product(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, " Reports "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 41
    }
  })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    style: styles.navbar,
    variant: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: styles.toolbar_btn_div,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "side_tab_toogle_btn mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.toolbar_btn,
    onClick: props.drawerClickHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.toolbar_fontawesomer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 37
    }
  }))), __jsx("div", {
    style: styles.toolbar_btn_div,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "wrapper_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.toolbar_btn,
    onClick: props.wrapperBtnClickHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.toolbar_fontawesomer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    style: {
      width: '85%'
    },
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: styles.search_bar,
    type: "text",
    size: "sm",
    placeholder: "Search here",
    "aria-describedby": "side_drawer_searchbar",
    name: "side_drawer_searchbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "side_drawer_searchBtn",
    style: styles.toolbar_btn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.toolbar_fontawesomer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "account_settig_dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"],
    alignRight: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    size: "sm",
    split: true,
    variant: "light",
    id: "dropdown-split",
    style: {
      background: 'none',
      border: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 45
    }
  }), "My Profile"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 45
    }
  }), "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandsHelping"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 45
    }
  }), "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 41
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    onClick: props.logoutClickHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 45
    }
  }), "Logout"))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3739044186", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color]]]) + " " + "tab_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    style: {
      height: `calc(100vh - 65px)`,
      overflowY: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_vendor_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AllProducts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddNew",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddCategory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_product_contents_add_category__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "BulkUpload",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_bulk_upload__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Discounts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_discounts__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Orders",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_orders__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 37
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Reports",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 33
    }
  }, __jsx(_dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 37
    }
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3739044186",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color],
    __self: undefined
  }, `.show_product.__jsx-style-dynamic-selector{display:none;}.show_product.open.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.wrapper.__jsx-style-dynamic-selector{display:none;}.wrapper.open.__jsx-style-dynamic-selector{backgroung:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};display:block;height:100vh;overflow-y:auto;}.nav_link.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;}.nav_link.__jsx-style-dynamic-selector:hover{background:#30313E;}.product_submenu.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:0% 5% 0% 10%;}.product_submenu.__jsx-style-dynamic-selector:hover{background:#30313E;}.side_tab_toogle_btn.__jsx-style-dynamic-selector{margin:0%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}@media (max-width:991px){.wrapper_btn.__jsx-style-dynamic-selector{display:none;}.wrapper.__jsx-style-dynamic-selector{display:none;}.tab_content.__jsx-style-dynamic-selector{display:none;}.account_settig_dropdown.__jsx-style-dynamic-selector{display:none;}.wrapper.open.__jsx-style-dynamic-selector{display:none;height:0vh;}}@media (min-width:992px){.side_tab_toogle_btn.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNPaUIsQUFHa0MsQUFHQSxBQUdBLEFBRzRCLEFBTUQsQUFNckIsQUFHcUIsQUFNckIsQUFJeEIsQUFFdUIsQUFNbkIsQUFFZ0IsQUFHRSxBQUlsQixBQUVrQixBQU1BLFVBekJyQixHQWpDQSxBQU1BLEFBbUNJLEFBR0EsQUFHQSxBQUdBLEFBSUQsQUFLQyxLQXZCVyxDQWZmLEFBU0EsS0F3QkksS0FqQkosV0E1QmtCLEFBTWlCLEFBU0EsY0FkbEIsYUFDRyxJQUtrQixBQVNBLEdBdEJ0QyxTQVNBLHNCQUtxQixBQVNHLGlCQVJ4QixHQVNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UsIE5hdiwgTmF2YmFyLCBEcm9wZG93biwgQnV0dG9uR3JvdXAsIEZvcm0sIENvbnRhaW5lciwgRHJvcGRvd25CdXR0b24sIElucHV0R3JvdXAsIEJ1dHRvbiwgU3Bpbm5lciwgVGFiLCBSb3csIENvbCwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYUJhcnMsIGZhQ2hldnJvblJpZ2h0LCBmYVRhY2hvbWV0ZXJBbHQsIGZhVXBsb2FkLCBmYUhhbmRzSGVscGluZywgZmFVc2VyLFxyXG4gICAgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uVXAsIGZhUG93ZXJPZmYsIGZhTGlzdEFsdCwgZmFXYXJlaG91c2UsIGZhVGFncywgZmFQZXJjZW50LCBmYVBsdXNDaXJjbGUsIGZhQ2hhcnRCYXJcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgVmVuZG9yRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3ZlbmRvci1kYXNoYm9hcmQnO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvcHJvZHVjdC1jb250ZW50cy9hbGwtcHJvZHVjdHMnO1xyXG5pbXBvcnQgQWRkTmV3IGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvYWRkLW5ldyc7XHJcbmltcG9ydCBBZGRDYXRlZ29yeSBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9wcm9kdWN0LWNvbnRlbnRzL2FkZC1jYXRlZ29yeSc7XHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvaW52ZW50b3J5JztcclxuaW1wb3J0IERpc2NvdW50cyBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9kaXNjb3VudHMnO1xyXG5pbXBvcnQgUmVwb3J0cyBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9yZXBvcnRzJztcclxuaW1wb3J0IEJ1bGtVcGxvYWQgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvYnVsay11cGxvYWQnO1xyXG5pbXBvcnQgT3JkZXJzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL29yZGVycyc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9IHByb3BzID0+IHtcclxuICAgIGxldCB3cHJhcHBlcl9DYXNzZXMgPSBcIndyYXBwZXJcIjtcclxuICAgIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICAgICAgd3ByYXBwZXJfQ2Fzc2VzID0gXCJ3cmFwcGVyIG9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2hvd19wcm9kdWN0LCBzZXRTaG93X3Byb2R1Y3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRhYi5Db250YWluZXIgaWQ9XCJkYXNoYm9hcmQtdGFic1wiIGRlZmF1bHRBY3RpdmVLZXk9XCJEYXNoYm9hcmRcIiA+XHJcbiAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogU2hvdy9IaWRlIFRhYnMgJiBUYWJzLUNvbnRlbnQgd2hlbiBzY3JlZW4gU3dpdGNoZXMgdG8gTGFyZ2UvTWVkaXVtLFNtYWxsLEV4dHJhLVNtYWxsIERldmljZXMqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d3ByYXBwZXJfQ2Fzc2VzfSBzdHlsZT17c3R5bGVzLndyYXBwZXJfY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtblwiIHZhcmlhbnQ9XCJwaWxsc1wiIHN0eWxlPXt7IG1pbldpZHRoOiAnMjIwcHgnLCBtYXhXaWR0aDogJzIyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBzdHlsZT17c3R5bGVzLmltYWdlX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2luZGV4XCIgc3R5bGU9e3N0eWxlcy5tdWhhbGlrfT4ge3Byb3BzLnRva2VufSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJEYXNoYm9hcmRcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93X3Byb2R1Y3QoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUYWNob21ldGVyQWx0fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IERhc2hib2FyZCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gc2V0U2hvd19wcm9kdWN0KCFzaG93X3Byb2R1Y3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBQcm9kdWN0cyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17c2hvd19wcm9kdWN0ID8gZmFDaGV2cm9uVXAgOiBmYUNoZXZyb25Eb3dufSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dfcHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkFsbFByb2R1Y3RzXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gQWxsIFByb2R1Y3RzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Rfc3VibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWRkTmV3XCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQbHVzQ2lyY2xlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBBZGQgTmV3IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Rfc3VibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWRkQ2F0ZWdvcnlcIiBzdHlsZT17c3R5bGVzLnByb2R1Y3Rfc3VibWVudV9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IEFkZCBDYXRlZ29yeSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93X3Byb2R1Y3QoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXYXJlaG91c2V9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gSW52ZW50b3J5IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkJ1bGtVcGxvYWRcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93X3Byb2R1Y3QoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVcGxvYWR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gQnVsayBVcGxvYWQgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiRGlzY291bnRzXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gc2V0U2hvd19wcm9kdWN0KGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGFnc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBEaXNjb3VudCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJPcmRlcnNcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93X3Byb2R1Y3QoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUYWdzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IE9yZGVycyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiUmVwb3J0c1wiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHNldFNob3dfcHJvZHVjdChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoYXJ0QmFyfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFJlcG9ydHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBUYWJzIFNpZGUgRHJhd2VyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUb29sYmFyICYgVGFicyBDb250ZW50cyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVG9vbGJhciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjb2xsYXBzZU9uU2VsZWN0IGV4cGFuZD1cImxnXCIgc3R5bGU9e3N0eWxlcy5uYXZiYXJ9IHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU2hvdy9IaWRlIGJhciBidG4gd2hpbGUgc2NyZWVuIHN3aXRjaGVzIHRvIExhcmdlIHRvIFNtYWxsLE1lZGl1bSxFeHRyYS1TbWFsbCBEZXZpY2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlX3RhYl90b29nbGVfYnRuIG1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRufSBvbkNsaWNrPXtwcm9wcy5kcmF3ZXJDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gc3R5bGU9e3N0eWxlcy50b29sYmFyX2ZvbnRhd2Vzb21lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJhcnMgQnRuIHRvIFNob3cvSGlkZSBUYWJzIFNkZSBEcmF3ZXIgaW4gTGFyZ2UgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9idG5cIiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRufSBvbkNsaWNrPXtwcm9wcy53cmFwcGVyQnRuQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IHN0eWxlPXtzdHlsZXMudG9vbGJhcl9mb250YXdlc29tZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZWFyY2ggQmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7IHdpZHRoOiAnODUlJyB9fSBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLnNlYXJjaF9iYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaWRlX2RyYXdlcl9zZWFyY2hiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2lkZV9kcmF3ZXJfc2VhcmNoYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJzaWRlX2RyYXdlcl9zZWFyY2hCdG5cIiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IHN0eWxlPXtzdHlsZXMudG9vbGJhcl9mb250YXdlc29tZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFjY291bnQgU2V0dGluZyBEcm9wZG93biAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9zZXR0aWdfZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gYXM9e0J1dHRvbkdyb3VwfSBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHNpemU9XCJzbVwiIHNwbGl0IHZhcmlhbnQ9XCJsaWdodFwiIGlkPVwiZHJvcGRvd24tc3BsaXRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVlZGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGFuZHNIZWxwaW5nfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVscD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e3Byb3BzLmxvZ291dENsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBvd2VyT2ZmfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBUb29sYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFiIENvbnRlbnQgZm9yIExhcmdlIERldmljZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudCBzdHlsZT17eyBoZWlnaHQ6IGBjYWxjKDEwMHZoIC0gNjVweClgLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJEYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlbmRvckRhc2hib2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWxsUHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsbFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBZGROZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE5ldyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWRkQ2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZENhdGVnb3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudG9yeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQnVsa1VwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnVsa1VwbG9hZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiRGlzY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNjb3VudHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIk9yZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJSZXBvcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFRhYiBDb250ZW50IGZvciBMYXJnZSBEZXZpY2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgdGhlIFRvb2xiYXIgJiBUYWJzIENvbXBvbmVudHMgKi99XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5zaG93X3Byb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2hvd19wcm9kdWN0Lm9wZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53cmFwcGVyLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZzogICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZfbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdl9saW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMTNFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Rfc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCUgNSUgMCUgMTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Rfc3VibWVudTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzEzRTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zaWRlX3RhYl90b29nbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXJfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFiX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYWNjb3VudF9zZXR0aWdfZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53cmFwcGVyLm9wZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDB2aFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlX3RhYl90b29nbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGltYWdlX2Rpdjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJzAuNXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyJSdcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwcHgnXHJcbiAgICB9LFxyXG4gICAgbXVoYWxpazoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgd3JhcHBlcl9jb2w6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMSUgMSUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXJfYnRuX2Rpdjoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMSUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXJfYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICB3aWR0aDogJzMxcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMxcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcl9mb250YXdlc29tZXI6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE4cHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2hfYmFyOiB7XHJcbiAgICAgICAgZmxleDogJzEnLFxyXG4gICAgfSxcclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDVweCdcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0X3N1Ym1lbnVfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogJzQwcHgnXHJcbiAgICB9LFxyXG5cclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnOCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcclxuICAgIH0sXHJcbiAgICBmb3J3b3JkX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMHB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXX0= */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard.js */`));
};

const styles = {
  image_div: {
    background: 'white',
    width: '100%',
    borderRight: '0.5px solid gray',
    padding: '2%'
  },
  image: {
    width: '100px'
  },
  muhalik: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`,
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    background: 'none'
  },
  wrapper_col: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`
  },
  navbar: {
    borderBottom: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`,
    background: 'white',
    padding: '1% 1%'
  },
  toolbar_btn_div: {
    marginRight: '1%'
  },
  toolbar_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`,
    border: 'none',
    width: '31px',
    height: '31px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px'
  },
  toolbar_fontawesomer: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  search_bar: {
    flex: '1'
  },
  nav_link: {
    color: 'white',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  product_submenu_link: {
    color: 'white',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
    height: '40px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    marginRight: '8%',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    width: '10px',
    height: '10px',
    maxHeight: '10px',
    maxWidth: '10px'
  },
  dropDown_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`,
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/pages/vendor.js":
/*!*****************************!*\
  !*** ./src/pages/vendor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_vendor_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vendor/dashboard/dashboard */ "./src/pages/components/vendor/dashboard/dashboard.js");
/* harmony import */ var _components_vendor_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/vendor/dashboard/dashboard-side-drawer */ "./src/pages/components/vendor/dashboard/dashboard-side-drawer.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\vendor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const BackDrop = props => __jsx("div", {
  className: "jsx-3404600223",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("div", {
  onClick: props.click,
  className: "jsx-3404600223",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3404600223",
  __self: undefined
}, ".jsx-3404600223{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFx2ZW5kb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV29CLEFBRTZCLGVBQ0osV0FDQyxZQUNOLE1BQ0MsT0FDdUIsMkJBQ2xCLFlBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFx2ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvdmVuZG9yL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkU2lkZURyYXdlciBmcm9tICcuL2NvbXBvbmVudHMvdmVuZG9yL2Rhc2hib2FyZC9kYXNoYm9hcmQtc2lkZS1kcmF3ZXInO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IHsgY2hlY3RBdXRoLCByZW1vdmVUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSc7XHJcblxyXG5jb25zdCBCYWNrRHJvcCA9IHByb3BzID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtwcm9wcy5jbGlja30+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5jbGFzcyBWZW5kb3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoVXNlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNpZGVEcmF3ZXJPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1dyYXBwZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGp3dF90b2tlbjogJycsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGF1dGhVc2VyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqd3RfdG9rZW46IGF3YWl0IGNoZWN0QXV0aCgndmVuZG9yJykgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd2VyVG9nZ2xlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2lkZURyYXdlck9wZW46ICFwcmV2U3RhdGUuc2lkZURyYXdlck9wZW4gfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTaG93V3JhcHBlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHNob3dXcmFwcGVyOiAhcHJldlN0YXRlLnNob3dXcmFwcGVyIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaWRlRHJhd2VyT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICByZW1vdmVUb2tlbkZyb21TdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBiYWNrZHJvcDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWRlRHJhd2VyT3Blbikge1xyXG4gICAgICAgICAgICBiYWNrZHJvcCA9IDxCYWNrRHJvcCBjbGljaz17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcn0gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICB7LyogPEFkbWluTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgdG9rZW49e3RoaXMuc3RhdGUuand0X3Rva2VufSBzaG93PXt0aGlzLnN0YXRlLnNob3dXcmFwcGVyfSBkcmF3ZXJDbGlja0hhbmRsZXI9e3RoaXMuZHJhd2VyVG9nZ2xlQ2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXJCdG5DbGlja0hhbmRsZXI9e3RoaXMuU2hvd1dyYXBwZXJDbGlja0hhbmRsZXJ9IGxvZ291dENsaWNrSGFuZGxlcj17dGhpcy5sb2dvdXR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPERhc2hib2FyZFNpZGVEcmF3ZXIgdG9rZW49e3RoaXMuc3RhdGUuand0X3Rva2VufSBzaG93PXt0aGlzLnN0YXRlLnNpZGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyfSBsb2dvdXRDbGlja0hhbmRsZXI9e3RoaXMubG9nb3V0fSAvPlxyXG4gICAgICAgICAgICAgICAge2JhY2tkcm9wfVxyXG4gICAgICAgICAgICAgICAgey8qIDwvQWRtaW5MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVuZG9yOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\vendor.js */"));

class Vendor extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "drawerToggleClickHandler", () => {
      this.setState(prevState => {
        return {
          sideDrawerOpen: !prevState.sideDrawerOpen
        };
      });
    });

    _defineProperty(this, "ShowWrapperClickHandler", () => {
      this.setState(prevState => {
        return {
          showWrapper: !prevState.showWrapper
        };
      });
    });

    _defineProperty(this, "backdropClickHandler", () => {
      this.setState({
        sideDrawerOpen: false
      });
    });

    this.authUser();
    this.state = {
      sideDrawerOpen: false,
      showWrapper: true,
      jwt_token: ''
    };
  }

  async authUser() {
    this.setState({
      jwt_token: await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__["chectAuth"])('vendor')
    });
  }

  logout() {
    Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__["removeTokenFromStorage"])();
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = __jsx(BackDrop, {
        click: this.backdropClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 24
        }
      });
    }

    return __jsx("div", {
      style: styles.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx(_components_vendor_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      token: this.state.jwt_token,
      show: this.state.showWrapper,
      drawerClickHandler: this.drawerToggleClickHandler,
      wrapperBtnClickHandler: this.ShowWrapperClickHandler,
      logoutClickHandler: this.logout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }), __jsx(_components_vendor_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      token: this.state.jwt_token,
      show: this.state.sideDrawerOpen,
      click: this.backdropClickHandler,
      logoutClickHandler: this.logout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }), backdrop);
  }

}

const styles = {
  body: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].body_color}`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    minHeight: '100vh'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vendor);

/***/ }),

/***/ "./src/sdk/consts/fields-data.js":
/*!***************************************!*\
  !*** ./src/sdk/consts/fields-data.js ***!
  \***************************************/
/*! exports provided: generalOptions, laptop, stateOptions, groupedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalOptions", function() { return generalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "laptop", function() { return laptop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateOptions", function() { return stateOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupedOptions", function() { return groupedOptions; });
const generalOptions = [{
  value: 'Color',
  label: 'Color'
}, {
  value: 'Size',
  label: 'Size'
}, {
  value: 'Width',
  label: 'Width'
}, {
  value: 'Length',
  label: 'Length'
}, {
  value: 'Quality',
  label: 'Quality'
}, {
  value: 'Camera',
  label: 'Camera'
}];
const laptop = [{
  value: 'USB Type/ Post',
  label: 'USB Type/ Post'
}, {
  value: 'Screen Resolution',
  label: 'Screen Resolution'
}, {
  value: 'Displays Type',
  label: 'Displays Type'
}, {
  value: 'Processor',
  label: 'Processor'
}, {
  value: 'RAM',
  label: 'RAM'
}, {
  value: 'ROM',
  label: 'ROM'
}, {
  value: 'SSD',
  label: 'SSD'
}, {
  value: 'Graphic Card',
  label: 'RAM'
}, {
  value: 'Operating System',
  label: 'Operating System'
}];
const stateOptions = [{
  value: 'AL',
  label: 'Alabama'
}, {
  value: 'AK',
  label: 'Alaska'
}, {
  value: 'AS',
  label: 'American Samoa'
}, {
  value: 'AZ',
  label: 'Arizona'
}, {
  value: 'AR',
  label: 'Arkansas'
}, {
  value: 'CA',
  label: 'California'
}, {
  value: 'CO',
  label: 'Colorado'
}, {
  value: 'CT',
  label: 'Connecticut'
}, {
  value: 'DE',
  label: 'Delaware'
}, {
  value: 'DC',
  label: 'District Of Columbia'
}, {
  value: 'FM',
  label: 'Federated States Of Micronesia'
}, {
  value: 'FL',
  label: 'Florida'
}, {
  value: 'GA',
  label: 'Georgia'
}, {
  value: 'GU',
  label: 'Guam'
}, {
  value: 'HI',
  label: 'Hawaii'
}, {
  value: 'ID',
  label: 'Idaho'
}, {
  value: 'IL',
  label: 'Illinois'
}, {
  value: 'IN',
  label: 'Indiana'
}, {
  value: 'IA',
  label: 'Iowa'
}, {
  value: 'KS',
  label: 'Kansas'
}, {
  value: 'KY',
  label: 'Kentucky'
}, {
  value: 'LA',
  label: 'Louisiana'
}, {
  value: 'ME',
  label: 'Maine'
}, {
  value: 'MH',
  label: 'Marshall Islands'
}, {
  value: 'MD',
  label: 'Maryland'
}, {
  value: 'MA',
  label: 'Massachusetts'
}, {
  value: 'MI',
  label: 'Michigan'
}, {
  value: 'MN',
  label: 'Minnesota'
}, {
  value: 'MS',
  label: 'Mississippi'
}, {
  value: 'MO',
  label: 'Missouri'
}, {
  value: 'MT',
  label: 'Montana'
}, {
  value: 'NE',
  label: 'Nebraska'
}, {
  value: 'NV',
  label: 'Nevada'
}, {
  value: 'NH',
  label: 'New Hampshire'
}, {
  value: 'NJ',
  label: 'New Jersey'
}, {
  value: 'NM',
  label: 'New Mexico'
}, {
  value: 'NY',
  label: 'New York'
}, {
  value: 'NC',
  label: 'North Carolina'
}, {
  value: 'ND',
  label: 'North Dakota'
}, {
  value: 'MP',
  label: 'Northern Mariana Islands'
}, {
  value: 'OH',
  label: 'Ohio'
}, {
  value: 'OK',
  label: 'Oklahoma'
}, {
  value: 'OR',
  label: 'Oregon'
}, {
  value: 'PW',
  label: 'Palau'
}, {
  value: 'PA',
  label: 'Pennsylvania'
}, {
  value: 'PR',
  label: 'Puerto Rico'
}, {
  value: 'RI',
  label: 'Rhode Island'
}, {
  value: 'SC',
  label: 'South Carolina'
}, {
  value: 'SD',
  label: 'South Dakota'
}, {
  value: 'TN',
  label: 'Tennessee'
}, {
  value: 'TX',
  label: 'Texas'
}, {
  value: 'UT',
  label: 'Utah'
}, {
  value: 'VT',
  label: 'Vermont'
}, {
  value: 'VI',
  label: 'Virgin Islands'
}, {
  value: 'VA',
  label: 'Virginia'
}, {
  value: 'WA',
  label: 'Washington'
}, {
  value: 'WV',
  label: 'West Virginia'
}, {
  value: 'WI',
  label: 'Wisconsin'
}, {
  value: 'WY',
  label: 'Wyoming'
}];
const groupedOptions = [{
  label: 'General',
  options: generalOptions
}, {
  label: 'Laptop',
  options: laptop
},, {
  label: 'States',
  options: stateOptions
}];

/***/ }),

/***/ "./src/sdk/consts/product-color-options.js":
/*!*************************************************!*\
  !*** ./src/sdk/consts/product-color-options.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Option List for select Product Color
const product_color_options = [// A
{
  value: 'Apricot',
  label: 'Apricot'
}, {
  value: 'Aquamarine',
  label: 'Aquamarine'
}, // B
{
  value: 'Black',
  label: 'Black'
}, {
  value: 'Blue',
  label: 'Blue'
}, {
  value: 'Bronze',
  label: 'Bronze'
}, {
  value: 'Baby-Blue',
  label: 'Baby-Blue'
}, {
  value: 'Blue-Green',
  label: 'Blue-Green'
}, {
  value: 'Blue-Violet',
  label: 'Blue-Violet'
}, // C
{
  value: 'Chocolate',
  label: 'Chocolate'
}, {
  value: 'Coffee',
  label: 'Coffee'
}, {
  value: 'Cyan',
  label: 'Cyan'
}, // D
{
  value: 'Desert-Sand',
  label: 'Desert-Sand'
}, // G
{
  value: 'Gray',
  label: 'Gray'
}, {
  value: 'Green',
  label: 'Green'
}, // I
{
  value: 'Indigo',
  label: 'Indigo'
}, // L
{
  value: 'Lime',
  label: 'Lime'
}, // M
{
  value: 'Magenta',
  label: 'Magenta'
}, {
  value: 'Maroon',
  label: 'Maroon'
}, // N
{
  value: 'Navy',
  label: 'Navy'
}, {
  value: 'Navy-Blue',
  label: 'Navy-Blue'
}, // O
{
  value: 'Orange',
  label: 'Orange'
}, {
  value: 'Olive',
  label: 'Olive'
}, // P
{
  value: 'Pink',
  label: 'Pink'
}, {
  value: 'Peach',
  label: 'Peach'
}, {
  value: 'Purple',
  label: 'Purple'
}, // R
{
  value: 'Red',
  label: 'Chocolate'
}, {
  value: 'Rose',
  label: 'Rose'
}, {
  value: 'Red-Violet',
  label: 'Red-Violet'
}, // S
{
  value: 'Silver',
  label: 'Silver'
}, {
  value: 'Sky-Blue',
  label: 'Sky-Blue'
}, // T
{
  value: 'Tan',
  label: 'Tan'
}, {
  value: 'Teal',
  label: 'Teal'
}, {
  value: 'Turquoise',
  label: 'Turquoise'
}, // V
{
  value: 'Violet',
  label: 'Violet'
}, // W
{
  value: 'White',
  label: 'White'
}, // Y
{
  value: 'Yellow',
  label: 'Yellow'
}];
/* harmony default export */ __webpack_exports__["default"] = (product_color_options);

/***/ }),

/***/ "./src/sdk/consts/product-size-options.js":
/*!************************************************!*\
  !*** ./src/sdk/consts/product-size-options.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Option List for select Product Size
const product_size_options = [{
  value: 'X-S',
  label: 'X-Small'
}, {
  value: 'S',
  label: 'Small'
}, {
  value: 'M',
  label: 'Medium'
}, {
  value: 'L',
  label: 'Large'
}, {
  value: 'X-L',
  label: 'X-Large'
}, {
  value: '10',
  label: '10'
}, {
  value: '11',
  label: '11'
}, {
  value: '12',
  label: '12'
}, {
  value: '13',
  label: '13'
}, {
  value: '14',
  label: '14'
}, {
  value: '15',
  label: '15'
}, {
  value: '16',
  label: '16'
}, {
  value: '17',
  label: '17'
}, {
  value: '18',
  label: '18'
}, {
  value: '19',
  label: '19'
}, {
  value: '20',
  label: '20'
}, {
  value: '21',
  label: '20'
}, {
  value: '22',
  label: '20'
}, {
  value: '23',
  label: '20'
}, {
  value: '24',
  label: '20'
}, {
  value: '25',
  label: '20'
}, {
  value: '26',
  label: '20'
}, {
  value: '27',
  label: '20'
}, {
  value: '28',
  label: '20'
}, {
  value: '29',
  label: '20'
}, {
  value: '30',
  label: '30'
}, {
  value: '31',
  label: '31'
}, {
  value: '32',
  label: '32'
}, {
  value: '33',
  label: '33'
}, {
  value: '34',
  label: '34'
}, {
  value: '35',
  label: '35'
}, {
  value: '36',
  label: '36'
}, {
  value: '37',
  label: '37'
}, {
  value: '38',
  label: '38'
}, {
  value: '49',
  label: '49'
}, {
  value: '40',
  label: '40'
}, {
  value: '41',
  label: '41'
}, {
  value: '42',
  label: '42'
}, {
  value: '43',
  label: '43'
}, {
  value: '44',
  label: '44'
}, {
  value: '45',
  label: '45'
}, {
  value: '46',
  label: '46'
}, {
  value: '47',
  label: '47'
}, {
  value: '48',
  label: '48'
}, {
  value: '49',
  label: '49'
}, {
  value: '50',
  label: '50'
}, {
  value: '51',
  label: '51'
}, {
  value: '52',
  label: '52'
}, {
  value: '53',
  label: '53'
}, {
  value: '54',
  label: '54'
}, {
  value: '55',
  label: '55'
}, {
  value: '56',
  label: '56'
}, {
  value: '57',
  label: '57'
}, {
  value: '58',
  label: '58'
}, {
  value: '59',
  label: '59'
}, {
  value: '60',
  label: '60'
}, {
  value: '61',
  label: '61'
}, {
  value: '62',
  label: '62'
}, {
  value: '63',
  label: '63'
}, {
  value: '64',
  label: '64'
}, {
  value: '65',
  label: '65'
}, {
  value: '66',
  label: '66'
}, {
  value: '67',
  label: '67'
}, {
  value: '67',
  label: '68'
}, {
  value: '69',
  label: '69'
}, {
  value: '70',
  label: '70'
}, {
  value: '71',
  label: '71'
}, {
  value: '72',
  label: '72'
}, {
  value: '73',
  label: '73'
}, {
  value: '74',
  label: '74'
}, {
  value: '75',
  label: '75'
}, {
  value: '76',
  label: '76'
}, {
  value: '77',
  label: '77'
}, {
  value: '78',
  label: '78'
}, {
  value: '79',
  label: '79'
}, {
  value: '80',
  label: '80'
}, {
  value: '81',
  label: '81'
}, {
  value: '82',
  label: '82'
}, {
  value: '83',
  label: '83'
}, {
  value: '84',
  label: '84'
}, {
  value: '85',
  label: '85'
}, {
  value: '86',
  label: '86'
}, {
  value: '87',
  label: '87'
}, {
  value: '88',
  label: '88'
}, {
  value: '89',
  label: '89'
}, {
  value: '90',
  label: '90'
}, {
  value: '91',
  label: '91'
}, {
  value: '92',
  label: '92'
}, {
  value: '93',
  label: '93'
}, {
  value: '94',
  label: '94'
}, {
  value: '95',
  label: '95'
}, {
  value: '96',
  label: '96'
}, {
  value: '97',
  label: '97'
}, {
  value: '98',
  label: '98'
}, {
  value: '99',
  label: '99'
}, {
  value: '100',
  label: '100'
}];
/* harmony default export */ __webpack_exports__["default"] = (product_size_options);

/***/ }),

/***/ "./src/sdk/core/authentication-service.js":
/*!************************************************!*\
  !*** ./src/sdk/core/authentication-service.js ***!
  \************************************************/
/*! exports provided: saveTokenToStorage, getTokenFromStorage, getUncodededTokenFromStorage, removeTokenFromStorage, chectAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokenToStorage", function() { return saveTokenToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenFromStorage", function() { return getTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUncodededTokenFromStorage", function() { return getUncodededTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTokenFromStorage", function() { return removeTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chectAuth", function() { return chectAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-localstorage */ "reactjs-localstorage");
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// export default AuthenticationService;
 // import { useRouter } from 'next/router'
// import Router from 'next/router'




const AuthenticationService = () => __jsx("div", null);

async function saveTokenToStorage(token) {
  await reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].set('token', token);
}
function getTokenFromStorage() {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
    return decodedToken.data;
  } catch (error) {
    return null;
  }
}
function getUncodededTokenFromStorage() {
  return reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
}
function removeTokenFromStorage() {
  try {
    reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].remove('token');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/index');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.reload('/index');
  } catch (error) {
    console.log("error:", error);
  }
}
function chectAuth(rolee) {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);

    if (decodedToken.data.role == 'admin') {
      return decodedToken.data.fullName;
    } else if (decodedToken.data.role !== rolee) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/index');
    } else {
      return decodedToken.data.fullName;
    }
  } catch (error) {
    return null;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (AuthenticationService);

/***/ }),

/***/ "./src/sdk/muhalik.config.js":
/*!***********************************!*\
  !*** ./src/sdk/muhalik.config.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// export default class MuhalikConfig {
const path = 'https://muhalikweb.herokuapp.com'; // const path = 'https://muhalik.herokuapp.com';
// const path = 'http://localhost:5000';
//     static getPath() {
//       return MySouqConfig.path;
//     }
//   }

const MuhalikConfig = {
  PATH: path
};
/* harmony default export */ __webpack_exports__["default"] = (MuhalikConfig);

/***/ }),

/***/ "./src/styleSheet.js":
/*!***************************!*\
  !*** ./src/styleSheet.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
let GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  admin_primry_color: '#373948',
  primary_text_color: 'white',
  // Body color
  body_color: '#F1F1F1',
  // body_color: '#DDE1E3',
  // body_color: '#F0F0F0',
  // Fontsize for all the labels of any form control (input, textbox etc):
  form_label_fontsize: '13px'
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyleSheet); // "45: [Product upload page added]"
// "46: [Admin/Vendor Dashboard Mobile View Toolbar Error Solved]"
// "47: [Product upload connected to backend(produck modal updated)]"
// "48: [Admin/Vendor Layout Updated]""
// 49: git commit -m "49: [jwt_token added and route redirect added]"
//  50 [header set into post request]git commit -m ""
// 51 git commit -m "51: [routing-guard/toast added & login/signup/v-signup layout updated & index.js updated]"
// 52 git commit -m "52: [Index.js updated, signup updated]"
// 53 git commit -m "53: [vendor dashboard layout updated]"
// 54[add product updated(simple & variable product), layout changed]

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/vendor.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MudassirR\Desktop\Muhalik\muhalikweb\src\pages\vendor.js */"./src/pages/vendor.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-select-material-ui":
/*!*******************************************!*\
  !*** external "react-select-material-ui" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select-material-ui");

/***/ }),

/***/ "react-select/creatable":
/*!*****************************************!*\
  !*** external "react-select/creatable" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select/creatable");

/***/ }),

/***/ "reactjs-localstorage":
/*!***************************************!*\
  !*** external "reactjs-localstorage" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-localstorage");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=vendor.js.map