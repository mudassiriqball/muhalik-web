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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\custom-fields.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const groupStyles = {
  border: '2px dotted green',
  borderRadius: '5px',
  background: '#f2fcff'
};

const Group = props => __jsx("div", {
  style: groupStyles,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["components"].Group, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
})));

const CustomFields = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    style: {
      width: '100%'
    },
    defaultActiveKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: styles.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    style: styles.card_header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSlidersH"],
    style: styles.variations_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      background: 'lightGray',
      margin: '0.5% 1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    size: "sm",
    value: data.customFieldName,
    onChange: () => data.customFieldName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 45
    }
  }, data.customFieldName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: data.customFieldValue,
    onChange: () => data.fieldValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => props.delete(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 45
    }
  }, " delete")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    style: {
      margin: '0.5% 1%',
      padding: '1% 2%',
      background: 'lightGray'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
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
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
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
      lineNumber: 72,
      columnNumber: 33
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
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, "Field Value "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
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
      lineNumber: 82,
      columnNumber: 37
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, props.isVariableProduct ? __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }, "For Variable Products each Custom Field will be added to all variations") : null, __jsx("span", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
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
      lineNumber: 100,
      columnNumber: 29
    }
  }, "Add Field"))))));
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
  variations_fontawesome: {
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\product-data.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const groupStyles = {
  border: '2px dotted green',
  borderRadius: '5px',
  background: '#f2fcff'
};
const coomponents = {
  DropdownIndicator: null
};

const Group = props => __jsx("div", {
  style: groupStyles,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_11__["components"].Group, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
})));

const ProductData = props => {
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
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: styles.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    style: styles.card_header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
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
      lineNumber: 49,
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
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("option", {
    value: "simple-product",
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, " Simple Product "), __jsx("option", {
    value: "variable-prouct",
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, " Variable Product "))), __jsx("div", {
    className: "jsx-1365533928" + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSlidersH"],
    style: styles.variations_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Container, {
    id: "left-tabs-example",
    defaultActiveKey: "Inventory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
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
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Inventory",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faStoreAlt"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 53
    }
  }, " Inventory ")))), !props.isVariableProduct ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "General",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSlidersH"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 57
    }
  }, " General ")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Attributes",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 57
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faListAlt"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 61
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 61
    }
  }, " Attributes ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Variations",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 57
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faListAlt"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 61
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 61
    }
  }, " Variations "))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Shipping",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTruck"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 53
    }
  }, " Shipping ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "jsx-1365533928" + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    eventKey: "Advanced",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTools"],
    style: styles.product_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: "jsx-1365533928" + " " + "linkName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 53
    }
  }, " Advanced ")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    style: {
      padding: '2%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "General",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 41
    }
  }, props.isVariableProduct ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 151,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 61
    }
  }, "Product Price ", __jsx("span", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 108
    }
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Price",
    name: "product_price",
    value: props.product_price_values,
    onChange: props.onChange,
    isInvalid: props.product_price_touched && props.product_price_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 168,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 61
    }
  }, "Product in Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    name: "product_in_stock",
    value: props.product_in_stock_values,
    onChange: props.onChange,
    isInvalid: props.product_in_stock_touched && props.product_in_stock_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 61
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
      lineNumber: 181,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 61
    }
  }, "Brand Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Brand Name",
    name: "product_brand_name",
    value: props.product_brand_name_values,
    onChange: props.onChange,
    isInvalid: props.product_brand_name_touched && props.product_brand_name_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 65
    }
  }, props.product_brand_name_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 200,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 61
    }
  }, "Image Link ", __jsx("span", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
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
      lineNumber: 208,
      columnNumber: 61
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 233,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 61
    }
  }, "Product Warranty (months) "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Warranty",
    name: "product_warranty",
    value: props.product_warranty_values,
    onChange: props.onChange,
    isInvalid: props.product_warranty_touched && props.product_warranty_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 250,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 61
    }
  }, " Warranty Type "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "select",
    name: "warranty_type",
    size: "sm",
    value: props.warranty_type_values,
    onChange: props.onChange,
    isInvalid: props.warranty_type_touched && props.warranty_type_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 69
    }
  }, __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 73
    }
  }, "Waranty Type"), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 73
    }
  }, " No Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 73
    }
  }, " Brand Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 73
    }
  }, " Local Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 73
    }
  }, " Local Seller Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 73
    }
  }, " Non-Local Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 73
    }
  }, " Internationsl Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 73
    }
  }, " Internationsl Seller Warranty "), __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 73
    }
  }, " International Manufacturer Warranty "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
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
      lineNumber: 279,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 61
    }
  }, "Product Discount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 61
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Discount on on Product(%)",
    name: "product_discount",
    value: props.product_discount_values,
    onChange: props.onChange,
    isInvalid: props.product_discount_touched && props.product_discount_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 65
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 69
    }
  }, "%")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 65
    }
  }, props.product_discount_errors)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Inventory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
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
      lineNumber: 307,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 53
    }
  }, "Product SKU"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter SKU (Stock Keeping Unit)",
    name: "sku",
    value: props.sku_values,
    onChange: props.onChange,
    isInvalid: props.sku_touched && props.sku_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 57
    }
  }, props.sku_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Shipping",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"],
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 49
    }
  }, "Weight (kg)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "product_weight",
    size: "sm",
    value: props.product_weight_values,
    onChange: props.onChange,
    isInvalid: props.product_weight_touched && props.product_weight_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 49
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 49
    }
  }, props.product_weight_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"],
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 49
    }
  }, "Dimensions (cm)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "dimension_length",
    size: "sm",
    value: props.dimension_length_values,
    onChange: props.onChange,
    placeholder: "Length",
    isInvalid: props.dimension_length_touched && props.dimension_length_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 57
    }
  }, props.dimension_length_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "dimension_width",
    size: "sm",
    value: props.dimension_width_values,
    placeholder: "Width",
    onChange: props.onChange,
    isInvalid: props.dimension_width_touched && props.dimension_width_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 53
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 57
    }
  }, props.dimension_width_errors), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    name: "dimension_height",
    size: "sm",
    value: props.dimension_height_values,
    placeholder: "Height",
    onChange: props.onChange,
    isInvalid: props.dimension_height_touched && props.dimension_height_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 57
    }
  }, props.dimension_height_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
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
      lineNumber: 390,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 53
    }
  }, "Product Shipping Charges"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Shipping Charges",
    name: "shipping_charges",
    value: props.shipping_charges_values,
    onChange: props.onChange,
    isInvalid: props.shipping_charges_touched && props.shipping_charges_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 61
    }
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
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
      lineNumber: 410,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 53
    }
  }, "Product Handling Fee"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Handling Fee",
    name: "handling_fee",
    value: props.handling_fee_values,
    onChange: props.onChange,
    isInvalid: props.handling_fee_touched && props.handling_fee_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 57
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 61
    }
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 57
    }
  }, props.handling_fee_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Attributes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
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
      lineNumber: 439,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
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
      lineNumber: 452,
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
      lineNumber: 459,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 53
    }
  }, "Field Value "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
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
      lineNumber: 462,
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
      lineNumber: 469,
      columnNumber: 57
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
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
      lineNumber: 474,
      columnNumber: 53
    }
  }, props.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 49
    }
  }, "For Multiple Values add | between values"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    onClick: props.saveAttributesHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 49
    }
  }, "Save Attributes")), __jsx("hr", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
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
      lineNumber: 486,
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
      lineNumber: 487,
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
      lineNumber: 488,
      columnNumber: 57
    }
  }, __jsx("option", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
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
      lineNumber: 497,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
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
      lineNumber: 499,
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
      lineNumber: 507,
      columnNumber: 61
    }
  }, " delete")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Variations",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 41
    }
  }, variations ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.variationsArray && props.variationsArray.map((data, index) => __jsx("div", {
    key: index,
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 57
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
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
      lineNumber: 548,
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
      lineNumber: 550,
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
      lineNumber: 551,
      columnNumber: 77
    }
  }))), __jsx("div", {
    className: "jsx-1365533928" + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 69
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group,
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 69
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 73
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSlidersH"],
    style: styles.variations_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 77
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    style: {
      float: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 69
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => props.deleteVariationHandler(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 73
    }
  }, " delete"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 65
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 69
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
      lineNumber: 576,
      columnNumber: 73
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 77
    }
  }, "Product Price", __jsx("span", {
    className: "jsx-1365533928",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 123
    }
  }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 77
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
      lineNumber: 579,
      columnNumber: 81
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 81
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
      lineNumber: 593,
      columnNumber: 73
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 77
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
      lineNumber: 595,
      columnNumber: 77
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 77
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
      lineNumber: 605,
      columnNumber: 73
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 77
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
      lineNumber: 607,
      columnNumber: 77
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 77
    }
  }, data.image_link_error))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-primary",
    size: "sm",
    block: true,
    onClick: props.saveVariationsHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
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
      lineNumber: 629,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 53
    }
  }, "Please First add Attributes from Attributes Tab"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tab"].Pane, {
    eventKey: "Advanced",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    style: styles.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 49
    }
  }, "Purchase Note"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Purchase Notes",
    name: "purchase_note",
    value: props.purchase_note_values,
    onChange: props.onChange,
    isInvalid: props.purchase_note_touched && props.purchase_note_errors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 53
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 53
    }
  }, props.purchase_note_errors))))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1365533928",
    __self: undefined
  }, "span.jsx-1365533928{color:red;}@media (max-width:991px){.linkName.jsx-1365533928{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LWNvbnRlbnRzXFxwcm9kdWN0LWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeXBCaUIsQUFJb0IsQUFJSSxVQUpILEdBSUkiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXctY29udGVudHNcXHByb2R1Y3QtZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbmltcG9ydCB7IEZvcm0sIENvbCwgUm93LCBDYXJkLCBJbnB1dEdyb3VwLCBCdXR0b24sIFRvYXN0LCBUYWIsIE5hdiwgVGFicywgQWNjb3JkaW9uLCBTcGlubmVyLCBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhUGx1cywgZmFLZXksIGZhU2xpZGVyc0gsIGZhU3RvcmVBbHQsIGZhVHJ1Y2ssIGZhVG9vbHMsIGZhRG9sbGFyU2lnbiwgZmFMaXN0QWx0LCBmYUFycm93QWx0Q2lyY2xlRG93bixcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnO1xyXG5cclxuaW1wb3J0IFNlbGVjdCwgeyBjb21wb25lbnRzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IHsgY29sb3VyT3B0aW9ucywgZ3JvdXBlZE9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL2ZpZWxkcy1kYXRhJztcclxuXHJcbmNvbnN0IGdyb3VwU3R5bGVzID0ge1xyXG4gICAgYm9yZGVyOiAnMnB4IGRvdHRlZCBncmVlbicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgYmFja2dyb3VuZDogJyNmMmZjZmYnLFxyXG59O1xyXG5jb25zdCBjb29tcG9uZW50cyA9IHtcclxuICAgIERyb3Bkb3duSW5kaWNhdG9yOiBudWxsLFxyXG59O1xyXG5jb25zdCBHcm91cCA9IHByb3BzID0+IChcclxuICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGVzfT5cclxuICAgICAgICA8Y29tcG9uZW50cy5Hcm91cCB7Li4ucHJvcHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZHVjdERhdGEgPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQgdmFyaWF0aW9ucyA9IHRydWU7XHJcbiAgICBpZiAocHJvcHMuYXR0cmlidXRlc0FycmF5ID09ICcnKSB7XHJcbiAgICAgICAgdmFyaWF0aW9ucyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXJpYXRpb25zID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG5cclxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezN9IHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXs1fSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfdHlwZV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHByb3BzLm9uQ2hhbmdlKGUpOyBwcm9wcy5wcm9kdWN0VHlwZUhhbmRsZXIoZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzaW1wbGUtcHJvZHVjdCc+IFNpbXBsZSBQcm9kdWN0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2YXJpYWJsZS1wcm91Y3RcIj4gVmFyaWFibGUgUHJvZHVjdCA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgcGFkZGluZzogJzAuNSUnLCBtYXJnaW46ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImxlZnQtdGFicy1leGFtcGxlXCIgZGVmYXVsdEFjdGl2ZUtleT1cIkludmVudG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgdmFyaWFudD1cInBpbGxzXCIgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkludmVudG9yeVwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVN0b3JlQWx0fSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IEludmVudG9yeSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJHZW5lcmFsXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBHZW5lcmFsIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkF0dHJpYnV0ZXNcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBBdHRyaWJ1dGVzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlZhcmlhdGlvbnNcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBWYXJpYXRpb25zIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJTaGlwcGluZ1wiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRydWNrfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IFNoaXBwaW5nIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJBZHZhbmNlZFwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRvb2xzfSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IEFkdmFuY2VkIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkNvbW1pc3Npb25cIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhRG9sbGFyU2lnbn0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IENvbW1pc3Npb24gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMiUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJHZW5lcmFsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IFByaWNlIDxzcGFuPiAqIDwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfcHJpY2VfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfcHJpY2VfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X3ByaWNlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfcHJpY2VfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgaW4gU3RvY2s8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfaW5fc3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfaW5fc3RvY2tfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X2luX3N0b2NrX3RvdWNoZWQgJiYgcHJvcHMucHJvZHVjdF9pbl9zdG9ja19lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X2luX3N0b2NrX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5CcmFuZCBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEJyYW5kIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2JyYW5kX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X2JyYW5kX25hbWVfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV90b3VjaGVkICYmIHByb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X2JyYW5kX25hbWVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkltYWdlIExpbmsgPHNwYW4+ICogPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbWFnZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdC9FbnRlciBTaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e2Nvb21wb25lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17cHJvcHMuaW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51SXNPcGVuPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5zaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e3Byb3BzLnNpbXBsZVByb2R1Y3RJbWFnZUxpbmtJbnB1dENoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3Byb3BzLnNpbXBsZVByb2R1Y3RJbWFnZUxpbmtoYW5kbGVLZXlEb3duSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBzb21ldGhpbmcgYW5kIHByZXNzIGVudGVyLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbWFnZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBDb2xvcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMucHJvZHVjdENvbG9yQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9kdWN0X2NvbG9yX29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBXYXJyYW50eSAobW9udGhzKSA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFdhcnJhbnR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF93YXJyYW50eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X3dhcnJhbnR5X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBXYXJyYW50eSBUeXBlIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2FycmFudHlfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy53YXJyYW50eV90eXBlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLndhcnJhbnR5X3R5cGVfdG91Y2hlZCAmJiBwcm9wcy53YXJyYW50eV90eXBlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V2FyYW50eSBUeXBlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE5vIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBCcmFuZCBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTG9jYWwgV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IExvY2FsIFNlbGxlciBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTm9uLUxvY2FsIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBJbnRlcm5hdGlvbnNsIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBJbnRlcm5hdGlvbnNsIFNlbGxlciBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gSW50ZXJuYXRpb25hbCBNYW51ZmFjdHVyZXIgV2FycmFudHkgPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgRGlzY291bnQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBEaXNjb3VudCBvbiBvbiBQcm9kdWN0KCUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9kaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfZGlzY291bnRfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfZGlzY291bnRfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X2Rpc2NvdW50X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cInNtXCI+JTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfZGlzY291bnRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBTS1U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBTS1UgKFN0b2NrIEtlZXBpbmcgVW5pdClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNrdV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5za3VfdG91Y2hlZCAmJiBwcm9wcy5za3VfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2t1X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlNoaXBwaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XZWlnaHQgKGtnKTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X3dlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3Rfd2VpZ2h0X3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHJvZHVjdF93ZWlnaHRfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X3dlaWdodF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X3dlaWdodF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRpbWVuc2lvbnMgKGNtKTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaW1lbnNpb25fbGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRpbWVuc2lvbl9sZW5ndGhfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5kaW1lbnNpb25fbGVuZ3RoX3RvdWNoZWQgJiYgcHJvcHMuZGltZW5zaW9uX2xlbmd0aF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kaW1lbnNpb25fbGVuZ3RoX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaW1lbnNpb25fd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRpbWVuc2lvbl93aWR0aF92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuZGltZW5zaW9uX3dpZHRoX3RvdWNoZWQgJiYgcHJvcHMuZGltZW5zaW9uX3dpZHRoX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpbWVuc2lvbl93aWR0aF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpbWVuc2lvbl9oZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGltZW5zaW9uX2hlaWdodF92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmRpbWVuc2lvbl9oZWlnaHRfdG91Y2hlZCAmJiBwcm9wcy5kaW1lbnNpb25faGVpZ2h0X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Nn0gbWQ9ezZ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgU2hpcHBpbmcgQ2hhcmdlczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgU2hpcHBpbmcgQ2hhcmdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19jaGFyZ2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNoaXBwaW5nX2NoYXJnZXNfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2hpcHBpbmdfY2hhcmdlc190b3VjaGVkICYmIHByb3BzLnNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPVwic21cIj5SaXlhbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBIYW5kbGluZyBGZWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IEhhbmRsaW5nIEZlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYW5kbGluZ19mZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaGFuZGxpbmdfZmVlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmhhbmRsaW5nX2ZlZV90b3VjaGVkICYmIHByb3BzLmhhbmRsaW5nX2ZlZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9XCJzbVwiPlJpeWFsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGFuZGxpbmdfZmVlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZCBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuYXR0cmlidXRlTmFtZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFhYWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkJiYjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q2NjPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JvdXBlZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBHcm91cCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0QXR0cmlidXRlTmFtZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5hdHRyaWJ1dGVOYW1lSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezd9IG1kPXs3fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZCBWYWx1ZSA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5hdHRyaWJ1dGVWYWx1ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMSUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmFkZEF0dHJpYnV0ZUhhbmRsZXJ9PkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pntwcm9wcy5lcnJvcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0gY2xhc3NOYW1lPVwibXItYXV0b1wiPkZvciBNdWx0aXBsZSBWYWx1ZXMgYWRkIHwgYmV0d2VlbiB2YWx1ZXM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zYXZlQXR0cmlidXRlc0hhbmRsZXJ9PlNhdmUgQXR0cmlidXRlczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaWdodEdyYXknLCBtYXJnaW46ICcwLjUlIDElJyB9fT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hdHRyaWJ1dGVzQXJyYXkgJiYgcHJvcHMuYXR0cmlidXRlc0FycmF5Lm1hcCgoZGF0YSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17eyBwYWRkaW5nOiAnMCUnIH19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnByb2R1Y3RBdHRyaWJ1dGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2RhdGEucHJvZHVjdEF0dHJpYnV0ZU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17N30gbWQ9ezd9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZGF0YS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZUF0dHJpYnV0ZUhhbmRsZXIoaW5kZXgpfT4gZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy51cGRhdGUoaW5kZXgsIGRhdGEuZmllbGROYW1lLCBkYXRhLmZpZWxkVmFsdWUpfT4gdXBkYXRlPC9CdXR0b24+ICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJWYXJpYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcmlhdGlvbnMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBhcz17Um93fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90X3NwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhbWUgUHJpY2UgZm9yIGFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnByaWNlQ2hlY2tib3hIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub3Rfc3BlY2lmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtZVByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNhbWVQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLnNhbWVQcmljZUZvckFsbFZhcmlhdGlvbnNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMudmFyaWF0aW9uc0FycmF5ICYmIHByb3BzLnZhcmlhdGlvbnNBcnJheS5tYXAoKGRhdGEsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgYm9yZGVyOiBwcm9wcy52YXJpYXRpb25zRXJyb3JIYW5kbGVyKGRhdGEpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLml0ZW1zICYmIGRhdGEuaXRlbXMubWFwKChkLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17M30gbWQ9ezN9IHNtPXs2fSB4cz17Nn0ga2V5PXtpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2QudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGRhdGEucHJvZHVjdEF0dHJpYnV0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtGb3JtLkdyb3VwfSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMSUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5kZWxldGVWYXJpYXRpb25IYW5kbGVyKGluZGV4KX0+IGRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IFByaWNlPHNwYW4+Kjwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLnZhcmlhdGlvblByaWNlSGFuZGxlcihlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZGF0YS5wcmljZV9lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucHJpY2VfZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBpbiBTdG9jazwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9pbl9zdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IEluIFN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLnZhcmlhdGlvblN0b2NrSGFuZGxlcihlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5JbWFnZSBMaW5rPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBJbWFnZSBMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5pbWFnZV9saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMudmFyaWF0aW9uSW1hZ2VMaW5rSGFuZGxlcihlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtkYXRhLmltYWdlX2xpbmtfZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmltYWdlX2xpbmtfZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBibG9jayBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMudXBkYXRlKGluZGV4LCBkYXRhLmZpZWxkTmFtZSwgZGF0YS5maWVsZFZhbHVlKX0+IHVwZGF0ZTwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgc2l6ZT1cInNtXCIgYmxvY2sgb25DbGljaz17cHJvcHMuc2F2ZVZhcmlhdGlvbnNIYW5kbGVyfT4gU2F2ZSBWYXJpYXRpb25zPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBsZWFzZSBGaXJzdCBhZGQgQXR0cmlidXRlcyBmcm9tIEF0dHJpYnV0ZXMgVGFiPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBZHZhbmNlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlB1cmNoYXNlIE5vdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHVyY2hhc2UgTm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZV9ub3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2Vfbm90ZV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHVyY2hhc2Vfbm90ZV90b3VjaGVkICYmIHByb3BzLnB1cmNoYXNlX25vdGVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHVyY2hhc2Vfbm90ZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUYWIuUGFuZSBldmVudEtleT1cIkNvbW1pc3Npb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWlzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpbmtOYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9BY2NvcmRpb24gPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aXRsZV9yb3c6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzEuNSUgNCUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjZweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyNnB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgIH0sXHJcblxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAvLyBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzMlJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERhdGE7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new-contents\\\\product-data.js */"));
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select/creatable */ "react-select/creatable");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_select_creatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select-material-ui */ "react-select-material-ui");
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_select_material_ui__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../toast */ "./src/pages/components/toast.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-new-contents/custom-fields */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js");
/* harmony import */ var _add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-new-contents/product-data */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js");
/* harmony import */ var _sdk_consts_product_size_options__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-size-options */ "./src/sdk/consts/product-size-options.js");
/* harmony import */ var _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-color-options */ "./src/sdk/consts/product-color-options.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const product_attributes_list = [{
  value: 'Size',
  label: 'Size'
}, {
  value: 'Color',
  label: 'Color'
}, {
  value: 'Price',
  label: 'Price'
}]; // Option List for select Product Category (when offline)

const product_categories = [{
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
}]; // For React-Select

const components = {
  DropdownIndicator: null
}; // Model For React-Select

const createOption = label => ({
  value: label,
  label
}); // Yup Schema for validation fields


const schema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
  product_name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required("Enter Product Name").min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_description: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(5, "Must have at least 5 characters").max(200, "Can't be longer than 200 characters"),
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
  dangerous_goods: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_tags: yup__WEBPACK_IMPORTED_MODULE_4__["string"]()
});

class AddNew extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleProductTagChange", arr => {
      this.setState({
        productTags: arr
      });
    });

    _defineProperty(this, "handleProductCategoryChange", arr => {
      this.setState({
        productCategories: arr,
        categoryError: 'no_error',
        categoryErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleSimpleProductImageLinkChange", (arr, actionMeta) => {
      this.setState({
        simple_product_image_link: arr,
        image_linkError: 'no_error',
        image_linkErrorDiv: 'BorderDiv'
      });
    });

    _defineProperty(this, "handleSimpleProductImageLinkInputChange", aa => {
      this.setState({
        inputValue: aa
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

    _defineProperty(this, "handleAddProductAttributeClicked", () => {
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

    _defineProperty(this, "handleSaveProductAttributesClicked", () => {
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
          image_link_error: ''
        });
      }); // console.log("split Array: ", data)

      this.setState({
        variationsArray: data
      });
    });

    _defineProperty(this, "handleUpdateProductAttributeClicked", (index, name, value) => {
      const copyArray = Object.assign([], this.state.productAttributesArray);
      copyArray[index] = {
        productAttributeName: name,
        productAttributeValue: value
      };
      this.setState({
        productAttributesArray: copyArray
      });
    });

    _defineProperty(this, "handleDeleteProductAttributeClicked", index => {
      const copyArray = Object.assign([], this.state.productAttributesArray);
      copyArray.splice(index, 1);
      this.setState({
        productAttributesArray: copyArray
      });
    });

    _defineProperty(this, "handleDeleteProductVariationClicked", index => {
      const copyArray = Object.assign([], this.state.variationsArray);
      copyArray.splice(index, 1);
      this.setState({
        variationsArray: copyArray
      });
    });

    _defineProperty(this, "handleSamePriceForAllVariationsChanged", e => {
      this.setState({
        samePriceInput: e.target.value
      });
    });

    _defineProperty(this, "handleVariationSamePriceCheckboxChanged", e => {
      if (e.target.checked) {
        const copyArray = Object.assign([], this.state.variationsArray);
        copyArray.forEach(element => {
          element.price = this.state.samePrice;
        });
      }
    });

    _defineProperty(this, "handleVariationPriceChanged", (e, index) => {
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

    _defineProperty(this, "handleVariationProductInStockChanged", (e, index) => {
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

    _defineProperty(this, "handleVariationImageLinkChanged", (e, index) => {
      const copyArray = Object.assign([], this.state.variationsArray);
      let object = copyArray[index];
      object.image_link = e.target.value;
      copyArray[index] = object;
      this.setState({
        variationsArray: copyArray
      });
    });

    _defineProperty(this, "saveVariationsClicked", () => {
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

    _defineProperty(this, "variationsErrorCheck", data => {
      if (data.price_error != '' || data.image_link_error != '') {
        return '1px solid red';
      } else {
        return 'none';
      }
    });

    _defineProperty(this, "customFieldValueChangeHandler", e => {
      this.setState({
        customFieldValue: e.target.value
      });
    });

    _defineProperty(this, "addCustomFieldBtnClicked", () => {
      if (this.state.customFieldName != '' && this.state.customFieldValue != '') {
        this.setState({
          customFieldError: ''
        });
        const copyArray = Object.assign([], this.state.customFieldsArray);
        copyArray.push({
          customFieldName: this.state.customFieldName,
          customFieldValue: this.state.customFieldValue
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
        this.setState({
          customFieldsArray: copyArray
        });
      } else {
        this.setState({
          customFieldError: 'Enter Field Name and Value'
        });
      }
    });

    _defineProperty(this, "updateCustomFieldsEvent", (index, name, value) => {
      const copyArray = Object.assign([], this.state.customFieldsArray);
      copyArray[index] = {
        customFieldName: name,
        customFieldValue: value
      };
      this.setState({
        customFieldsArray: copyArray
      });
    });

    _defineProperty(this, "deleteCustomFieldsEvent", index => {
      const copyArray = Object.assign([], this.state.customFieldsArray);
      copyArray.splice(index, 1);
      this.setState({
        customFieldsArray: copyArray
      });
    });

    _defineProperty(this, "handleDangerousGoodsChange", (e, name) => {
      const copyArray = Object.assign([], this.state.dangerousGoodsArray);

      if (e.target.checked) {
        copyArray.push(name);
      } else {
        copyArray.forEach((element, index) => {
          if (element == name) {
            copyArray.splice(index, 1);
          }
        });
      }

      this.setState({
        dangerousGoodsArray: copyArray
      });
    });

    this.state = {
      isLoading: false,
      showToast: false,
      showVariationsErrorAlert: false,
      showSimpleProductPriceImgLinkErrorrAlert: false,
      isVariableProduct: false,
      product_categories_options: product_categories,
      productCategories: '',
      categoryError: 'no_error',
      categoryErrorDiv: 'BorderDiv',
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
    this.addCustomFieldBtnClicked = this.addCustomFieldBtnClicked.bind(this); // this.uploadProduct = this.uploadProduct.bind(this);
  } // Getting Product Categories from DB


  async componentDidMount() {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__["default"].PATH + '/api/products-categories/get-all';

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url);
      this.setState({
        product_categories_options: response.data.data
      });
    } catch (error) {
      console.error(error);
    }
  } //  Submit data to api


  async uploadProduct(data, currentComponent) {
    console.log('data: ', data); // const url = MuhalikConfig.PATH + '/api/products/add';
    // await axios.post(url, {
    //     data
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
  } // Product Attributes


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

  // Custom Fields
  customFieldNameChangeHandler(e) {
    this.setState({
      customFieldName: e.value
    });
    this.setState({
      customFieldNameSelected: e
    });
  }

  render() {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      validationSchema: schema,
      initialValues: {
        // product_name: '',
        // product_description: '',
        // // Product Data
        product_type: 'simple-product' // // => Inventory
        // sku: '',
        // // => General(Simple-Product)
        // product_price: '', product_in_stock: '', product_brand_name: '', product_image_link: '',
        // product_warranty: '', warranty_type: '', product_discount: '',
        // // => Attributes (Variable Product)
        // purchase_note: '',
        // // => Variations (Variable Product)
        // product_variations: '',
        // // => Shipping
        // product_weight: '', dimension_length: '', dimension_width: '',
        // dimension_height: '', shipping_charges: '', handling_fee: '',
        // // => Advanve
        // purchase_note: '',
        // // Custom Fields
        // custom_fields: '',
        // product_category: '',
        // dangerous_goods: '',
        // product_tags: '',

      },
      onSubmit: (values, {
        setSubmitting,
        resetForm
      }) => {
        if (this.state.productCategories == '' || this.state.simple_product_image_link == '' && values.product_type == 'simple-product') {
          // if (this.state.customFieldNameArray == '') {
          //     this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
          // }
          if (this.state.productCategories == '') {
            this.setState({
              categoryError: "error",
              categoryErrorDiv: 'RedBorderDiv'
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
            let array = [];
            this.state.productCategories.forEach(element => {
              array.push(element.value);
            });
            values.product_category = array;
            array = [];
            this.state.productTags.forEach(element => {
              array.push(element.value);
            });
            values.product_tags = array;
            values.dangerous_goods = this.state.dangerousGoodsArray;

            if (values.product_type == 'simple-product') {
              array = [];
              this.state.simple_product_image_link.forEach(element => {
                array.push(element.value);
              });
              values.product_image_link = array;
            } else {
              array = [];
              this.state.variationsArray.forEach(element => {
                let item = [];
                element.items.forEach(e => {
                  var obj = {};
                  obj[e.name] = e.value;
                  item.push(obj);
                });
                item.push({
                  price: element.price
                });
                item.push({
                  stock: element.stock
                });
                item.push({
                  image_link: element.image_link
                });
                console.log('item:', item);
                array.push(item);
              });
              values.product_variations = array;
              values.custom_fields = this.state.customFieldsArray;
            }

            console.log('values: ', values);
            resetForm();

            if (this.uploadProduct(values, this)) {
              this.setState({
                productCategories: '',
                categoryError: 'no_error',
                categoryErrorDiv: 'BorderDiv',
                productTags: [],
                warrantyType: 'Year',
                inputValue: '',
                simple_product_image_link: [],
                image_linkError: 'no_error',
                image_linkErrorDiv: 'BorderDiv',
                isVariableProduct: false,
                productAttributesArray: [],
                productAttributeName: '',
                productAttributeValue: '',
                productAttributeError: '',
                variationsArray: [],
                isVariationsSaved: false,
                customFieldsArray: [],
                customFieldName: '',
                customFieldValue: '',
                customFieldError: ''
              });
            }

            setSubmitting(false);
          }, 500);
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.title_row,
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 33
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"],
      style: styles.title_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 37
      }
    }), __jsx("div", {
      style: styles.title,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]) + " " + "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 37
      }
    }, " Add New Product")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      noValidate: true,
      onSubmit: handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 33
      }
    }, this.state.showToast ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onCloseHandler: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      header: 'Success',
      message: 'Product Uploaded Successfully',
      iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faThumbsUp"],
      color: "green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 61
      }
    }) : null, this.state.showVariationsErrorAlert ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onCloseHandler: e => this.setState({
        showVariationsErrorAlert: false
      }),
      show: this.state.showVariationsErrorAlert,
      header: 'Error',
      message: 'Please Add/Save Variations First',
      iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"],
      color: "red",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 41
      }
    }) : null, this.state.showSimpleProductPriceImgLinkErrorrAlert ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onCloseHandler: e => this.setState({
        showSimpleProductPriceImgLinkErrorrAlert: false
      }),
      show: this.state.showSimpleProductPriceImgLinkErrorrAlert,
      header: 'Error',
      message: 'Enter Price/Image Link in General Tab First',
      iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"],
      color: "red",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 41
      }
    }) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: {
        paddingTop: '2%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 9,
      md: 9,
      sm: 12,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 49
      }
    }, "Product Name", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 94
      }
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      type: "text",
      placeholder: "Enter Product Name",
      name: "product_name",
      value: values.product_name || '',
      onChange: handleChange,
      isInvalid: touched.product_name && errors.product_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 53
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
      type: "invalid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 53
      }
    }, errors.product_name))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 61
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
        lineNumber: 635,
        columnNumber: 61
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636,
        columnNumber: 65
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640,
        columnNumber: 61
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
        columnNumber: 65
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      as: "textarea",
      placeholder: "Enter Product Description",
      name: "product_description",
      value: values.product_description || '',
      rows: "7",
      onChange: handleChange,
      isInvalid: touched.product_description && errors.product_description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 69
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
      type: "invalid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 69
      }
    }, errors.product_description))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 45
      }
    }, __jsx(_add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_17__["default"], {
      productTypeHandler: this.handleProductTypeChange,
      isVariableProduct: this.state.isVariableProduct,
      product_type_values: values.product_type || '',
      product_price_values: values.product_price || '',
      product_price_touched: touched.product_price,
      product_price_errors: errors.product_price,
      product_in_stock_values: values.product_in_stock || '',
      product_in_stock_touched: touched.product_in_stock,
      product_in_stock_errors: errors.product_in_stock,
      product_brand_name_values: values.product_brand_name || '',
      product_brand_name_touched: touched.product_brand_name,
      product_brand_name_errors: errors.product_brand_name,
      imageLink: this.state.simple_product_image_link,
      simpleProductImageLinkHandler: this.handleSimpleProductImageLinkChange.bind(this),
      inputValue: this.state.inputValue,
      simpleProductImageLinkInputChangeHandler: this.handleSimpleProductImageLinkInputChange.bind(this),
      simpleProductImageLinkhandleKeyDownHandler: this.handleSimpleProductImage_linkKeyDown.bind(this),
      simpleProductError: this.state.showSimpleProductPriceImgLinkErrorrAlert,
      product_warranty_values: values.product_warranty || '',
      product_warranty_touched: touched.product_warranty,
      product_warranty_errors: errors.product_warranty,
      warranty_type_values: values.warranty_type || '',
      warranty_type_touched: touched.warranty_type,
      warranty_type_errors: errors.warranty_type,
      product_discount_values: values.product_discount || '',
      product_discount_touched: touched.product_discount,
      product_discount_errors: errors.product_discount,
      sku_values: values.sku || '',
      sku_touched: touched.sku,
      sku_errors: errors.sku,
      product_weight_values: values.product_weight || '',
      product_weight_touched: touched.product_weight,
      product_weight_errors: errors.product_weight,
      dimension_length_values: values.dimension_length || '',
      dimension_length_touched: touched.dimension_length,
      dimension_length_errors: errors.dimension_length,
      dimension_width_values: values.dimension_width || '',
      dimension_width_touched: touched.dimension_width,
      dimension_width_errors: errors.dimension_width,
      dimension_height_values: values.dimension_height || '',
      dimension_height_touched: touched.dimension_height,
      dimension_height_errors: errors.dimension_height,
      shipping_charges_values: values.shipping_charges || '',
      shipping_charges_touched: touched.shipping_charges,
      shipping_charges_errors: errors.shipping_charges,
      handling_fee_values: values.handling_fee || '',
      handling_fee_touched: touched.handling_fee,
      handling_fee_errors: errors.handling_fee,
      purchase_note_values: values.purchase_note || '',
      purchase_note_touched: touched.purchase_note,
      purchase_note_errors: errors.purchase_note,
      onChange: handleChange,
      touched: touched,
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
      addAttributeHandler: this.handleAddProductAttributeClicked.bind(this),
      update: this.handleUpdateProductAttributeClicked.bind(this),
      deleteAttributeHandler: this.handleDeleteProductAttributeClicked.bind(this),
      deleteVariationHandler: this.handleDeleteProductVariationClicked.bind(this),
      saveVariationsHandler: this.saveVariationsClicked.bind(this),
      variationsErrorHandler: this.variationsErrorCheck.bind(this),
      error: this.state.productAttributeError,
      saveAttributesHandler: this.handleSaveProductAttributesClicked,
      variationsArray: this.state.variationsArray,
      variationPriceHandler: this.handleVariationPriceChanged.bind(this),
      variationStockHandler: this.handleVariationProductInStockChanged.bind(this),
      variationImageLinkHandler: this.handleVariationImageLinkChanged.bind(this),
      priceCheckboxHandler: this.handleVariationSamePriceCheckboxChanged.bind(this),
      samePrice: this.state.samePriceInput,
      samePriceForAllVariationsHandler: this.handleSamePriceForAllVariationsChanged.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 49
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 45
      }
    }, __jsx(_add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_16__["default"], {
      customFieldsArray: this.state.customFieldsArray,
      isVariableProduct: this.state.isVariableProduct,
      name: this.state.customFieldName,
      value: this.state.customFieldValue,
      customFieldNameSelected: this.state.customFieldNameSelected,
      fieldNameHandler: this.customFieldNameChangeHandler.bind(this),
      fieldValueHandler: this.customFieldValueChangeHandler.bind(this),
      addFieldHandler: this.addCustomFieldBtnClicked.bind(this),
      update: this.updateCustomFieldsEvent.bind(this),
      delete: this.deleteCustomFieldsEvent.bind(this),
      error: this.state.customFieldError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 49
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 783,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 785,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 787,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789,
        columnNumber: 61
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
        lineNumber: 790,
        columnNumber: 61
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791,
        columnNumber: 65
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: {
        height: '250px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 61
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]) + " " + (this.state.categoryErrorDiv || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 796,
        columnNumber: 65
      }
    }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_10___default.a, {
      isMulti: true,
      onChange: this.handleProductCategoryChange,
      options: this.state.product_categories_options,
      value: this.state.productCategories,
      placeholder: "Select/Enter Category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 797,
        columnNumber: 69
      }
    })), __jsx("label", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]) + " " + (this.state.categoryError || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805,
        columnNumber: 65
      }
    }, "Selet Category")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 816,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820,
        columnNumber: 61
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
        lineNumber: 821,
        columnNumber: 61
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 65
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 825,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 826,
        columnNumber: 61
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "not_specified",
      label: "Not Specified",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Not Specified'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 827,
        columnNumber: 65
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833,
        columnNumber: 65
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "ceramic",
      label: "Ceramic",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Ceramic'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834,
        columnNumber: 65
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 840,
        columnNumber: 65
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "glass",
      label: "Glass",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Glass'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 65
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847,
        columnNumber: 65
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "metal",
      label: "Metal",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Metal'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848,
        columnNumber: 65
      }
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 65
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "plastic",
      label: "Plastic",
      style: styles.label,
      onChange: e => this.handleDangerousGoodsChange(e, 'Plastic'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855,
        columnNumber: 65
      }
    })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
      style: {
        width: '100%'
      },
      defaultActiveKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 869,
        columnNumber: 45
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 49
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 871,
        columnNumber: 53
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 872,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 873,
        columnNumber: 61
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
        lineNumber: 874,
        columnNumber: 61
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSlidersH"],
      style: styles.variations_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 65
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 878,
        columnNumber: 57
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: {
        height: '250px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 879,
        columnNumber: 61
      }
    }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_10___default.a, {
      isMulti: true,
      onChange: this.handleProductTagChange,
      options: _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_19__["default"],
      value: this.state.productTags,
      placeholder: "Select/Enter Tags",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 880,
        columnNumber: 65
      }
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
      style: styles.row,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 899,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 900,
        columnNumber: 41
      }
    }, __jsx("p", {
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901,
        columnNumber: 45
      }
    }, "Fields with ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901,
        columnNumber: 81
      }
    }, " * "), " are mandatory."), __jsx("p", {
      style: styles.label,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902,
        columnNumber: 45
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
        lineNumber: 903,
        columnNumber: 45
      }
    }, this.state.isLoading ? 'Uploading' : 'Upload', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      animation: "grow",
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905,
        columnNumber: 73
      }
    }) : __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905,
        columnNumber: 114
      }
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3833814464",
      dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color],
      __self: this
    }, `.no_error.__jsx-style-dynamic-selector{display:none;}.error.__jsx-style-dynamic-selector{margin-top:4px;color:#DC3545;font-size:14px;display:block;}.RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:0.5px 0px 0.2px 0.5px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWc1QnFDLEFBRzBELEFBR0UsQUFNWSxBQUtmLEFBSUYsQUFHOEIsQUFPdEIsVUFUdEIsRUFKZSxDQWRmLEVBR2tCLEdBeUJILEtBYmYsSUFOa0MsRUFMZixBQXlCbkIsV0FSbUMsSUFoQmpCLGFBS0gsQ0FKZixVQUtBLEdBV3NDLGtDQUNqQixpQkFFdEIsa0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBGb3JtLCBDb2wsIFJvdywgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uLCBUb2FzdCwgQWxlcnQsIE5hdiwgVGFicywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVBsdXMsIGZhS2V5LCBmYVNsaWRlcnNILCBmYVN0b3JlQWx0LCBmYVRydWNrLCBmYVRvb2xzLCBmYURvbGxhclNpZ24sIGZhRXhjbGFtYXRpb25UcmlhbmdsZSwgZmFMaXN0QWx0XHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCB7IGZhVGh1bWJzVXAsIGZhVGh1bWJzRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCBTaG93VG9hc3QgZnJvbSAnLi4vLi4vLi4vLi4vdG9hc3QnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgQ3VzdG9tRmllbGRzIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9jdXN0b20tZmllbGRzJztcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9wcm9kdWN0LWRhdGEnO1xyXG5pbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbmNvbnN0IHByb2R1Y3RfYXR0cmlidXRlc19saXN0ID0gW1xyXG4gICAgeyB2YWx1ZTogJ1NpemUnLCBsYWJlbDogJ1NpemUnIH0sXHJcbiAgICB7IHZhbHVlOiAnQ29sb3InLCBsYWJlbDogJ0NvbG9yJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1ByaWNlJywgbGFiZWw6ICdQcmljZScgfSxcclxuXVxyXG5cclxuLy8gT3B0aW9uIExpc3QgZm9yIHNlbGVjdCBQcm9kdWN0IENhdGVnb3J5ICh3aGVuIG9mZmxpbmUpXHJcbmNvbnN0IHByb2R1Y3RfY2F0ZWdvcmllcyA9IFtcclxuICAgIHsgdmFsdWU6ICdTaG9lJywgbGFiZWw6ICdTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0Nsb3RoJywgbGFiZWw6ICdDbG90aCcgfSxcclxuICAgIHsgdmFsdWU6ICdTaGlydCcsIGxhYmVsOiAnU2hpcnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnUGFudCcsIGxhYmVsOiAnUGFudCcgfVxyXG5dXHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG4vLyBZdXAgU2NoZW1hIGZvciB2YWxpZGF0aW9uIGZpZWxkc1xyXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KHtcclxuICAgIHByb2R1Y3RfbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgUHJvZHVjdCBOYW1lXCIpXHJcbiAgICAgICAgLm1pbigyLCBcIk11c3QgaGF2ZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDQwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnNcIiksXHJcbiAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDUsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoMjAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDIwMCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIC8vIFByb2R1Y3QgRGF0YVxyXG4gICAgcHJvZHVjdF90eXBlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgLy8gPT4gSW52ZW50b3J5XHJcbiAgICBza3U6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuICAgIC8vID0+IEdlbmVyYWwoU2ltcGxlLVByb2R1Y3QpXHJcbiAgICBwcm9kdWN0X3ByaWNlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgJ0VudGVyIEJldHdlZW4gMS0xMDAwMDAwJyksXHJcbiAgICBwcm9kdWN0X2luX3N0b2NrOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMSwgXCJNdXN0IGdyYXRlciB0aGFuIDEgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMDAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMDAwMFwiKSxcclxuICAgIHByb2R1Y3RfYnJhbmRfbmFtZTogeXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1pbigyLCBcIk11c3QgaGF2ZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDQwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnNcIiksXHJcbiAgICBwcm9kdWN0X2ltYWdlX2xpbms6IHl1cC5zdHJpbmcoKSxcclxuICAgIHByb2R1Y3Rfd2FycmFudHk6IHl1cC5udW1iZXIoKS5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCAnRW50ZXIgQmV0d2VlbiAwLTIwMCcpXHJcbiAgICAgICAgLm1heCgyMDAsICdFbnRlciBCZXR3ZWVuIDAtMjAwJyksXHJcbiAgICB3YXJyYW50eV90eXBlOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X2Rpc2NvdW50OiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuICAgIC8vID0+IEF0dHJpYnV0ZXMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICBwdXJjaGFzZV9ub3RlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgLy8gPT4gVmFyaWF0aW9ucyAoVmFyaWFibGUgUHJvZHVjdClcclxuICAgIHByb2R1Y3RfdmFyaWF0aW9uczogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIC8vID0+IFNoaXBwaW5nXHJcbiAgICBwcm9kdWN0X3dlaWdodDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG4gICAgZGltZW5zaW9uX2xlbmd0aDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG4gICAgZGltZW5zaW9uX3dpZHRoOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcbiAgICBkaW1lbnNpb25faGVpZ2h0OiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcbiAgICBzaGlwcGluZ19jaGFyZ2VzOiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG4gICAgaGFuZGxpbmdfZmVlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcblxyXG4gICAgLy8gPT4gQWR2YW52ZVxyXG4gICAgcHVyY2hhc2Vfbm90ZTogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGN1c3RvbV9maWVsZHM6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwcm9kdWN0X2NhdGVnb3J5OiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgZGFuZ2Vyb3VzX2dvb2RzOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF90YWdzOiB5dXAuc3RyaW5nKCksXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuY2xhc3MgQWRkTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb2FzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBwcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uczogcHJvZHVjdF9jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllczogJycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG5cclxuICAgICAgICAgICAgcHJvZHVjdFRhZ3M6IFtdLFxyXG5cclxuICAgICAgICAgICAgd2FycmFudHlUeXBlOiAnWWVhcicsXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbXSxcclxuICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogW10sXHJcblxyXG5cclxuICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLFxyXG4gICAgICAgICAgICBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVOYW1lU2VsZWN0ZWQ6ICcnLFxyXG5cclxuICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgaXNWYXJpYXRpb25zU2F2ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzYW1lUHJpY2VJbnB1dDogJycsXHJcblxyXG4gICAgICAgICAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lOiAnJyxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkRXJyb3I6ICcnLFxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZE5hbWVTZWxlY3RlZDogJycsXHJcblxyXG4gICAgICAgICAgICAvLyBEYW5nZXJvdXMgR29vZHNcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzR29vZHNBcnJheTogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkID0gdGhpcy5hZGRDdXN0b21GaWVsZEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnVwbG9hZFByb2R1Y3QgPSB0aGlzLnVwbG9hZFByb2R1Y3QuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXR0aW5nIFByb2R1Y3QgQ2F0ZWdvcmllcyBmcm9tIERCXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy1jYXRlZ29yaWVzL2dldC1hbGwnO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uczogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vICBTdWJtaXQgZGF0YSB0byBhcGlcclxuICAgIGFzeW5jIHVwbG9hZFByb2R1Y3QoZGF0YSwgY3VycmVudENvbXBvbmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOiAnLCBkYXRhKVxyXG4gICAgICAgIC8vIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzL2FkZCc7XHJcbiAgICAgICAgLy8gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHtcclxuICAgICAgICAvLyAgICAgZGF0YVxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgLy8gfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgc2hvd1RvYXN0OiB0cnVlIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAvLyAgICAgYWxlcnQoJ0Vycm9yOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZSA9IChhcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdFRhZ3M6IGFyciB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIFByb2R1Y3QgQ2F0ZWdvcnlcclxuICAgIGhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZSA9IChhcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdENhdGVnb3JpZXM6IGFyciwgY2F0ZWdvcnlFcnJvcjogJ25vX2Vycm9yJywgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2ltcGxlIFByb2R1Y3QgSW1hZ2UgTGlua1xyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlTGlua0NoYW5nZSA9IChhcnIsIGFjdGlvbk1ldGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogYXJyLCBpbWFnZV9saW5rRXJyb3I6ICdub19lcnJvcicsIGltYWdlX2xpbmtFcnJvckRpdjogJ0JvcmRlckRpdicgfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlTGlua0lucHV0Q2hhbmdlID0gKGFhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGFhIH0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZV9saW5rS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaztcclxuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbLi4uc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaywgY3JlYXRlT3B0aW9uKGlucHV0VmFsdWUpXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYWJsZVByb2R1Y3Q6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IEF0dHJpYnV0ZXNcclxuICAgIGhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVOYW1lQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IGUudmFsdWUgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZDogZSB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWUgIT0gJycgJiYgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycgfSlcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5KTtcclxuICAgICAgICAgICAgY29weUFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlVmFsdWU6IHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZVZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlTmFtZVNlbGVjdGVkOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZXNBcnJheTogY29weUFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJ0VudGVyIEZpZWxkIE5hbWUgYW5kIFZhbHVlJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTYXZlUHJvZHVjdEF0dHJpYnV0ZXNDbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBhbGxBcnJheXMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdmFyIHRyaW0gPSBlbGVtZW50LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB2YXIgc3BsaXRBcnJheSA9IHRyaW0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgYWxsQXJyYXlzLnB1c2goc3BsaXRBcnJheSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmFsbFBvc3NpYmxlQ2FzZXMoYWxsQXJyYXlzKVxyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBlbGVtZW50LnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gW107XHJcblxyXG4gICAgICAgICAgICBzcGxpdC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXlbaV0ucHJvZHVjdEF0dHJpYnV0ZU5hbWUsIHZhbHVlOiBlIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goeyBpdGVtczogaXRlbSwgcHJpY2U6ICcnLCBzdG9jazogJzEnLCBpbWFnZV9saW5rOiAnJywgcHJpY2VfZXJyb3I6ICcnLCBpbWFnZV9saW5rX2Vycm9yOiAnJyB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BsaXQgQXJyYXk6IFwiLCBkYXRhKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGRhdGEgfSlcclxuICAgIH1cclxuICAgIGFsbFBvc3NpYmxlQ2FzZXMoYXJyKSB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGFsbENhc2VzT2ZSZXN0ID0gdGhpcy5hbGxQb3NzaWJsZUNhc2VzKGFyci5zbGljZSgxKSk7ICAvLyByZWN1ciB3aXRoIHRoZSByZXN0IG9mIGFycmF5XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FzZXNPZlJlc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyWzBdW2pdICsgXCItXCIgKyBhbGxDYXNlc09mUmVzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0geyBwcm9kdWN0QXR0cmlidXRlTmFtZTogbmFtZSwgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVEZWxldGVQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RWYXJpYXRpb25DbGlja2VkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIC8vIFxyXG4gICAgaGFuZGxlU2FtZVByaWNlRm9yQWxsVmFyaWF0aW9uc0NoYW5nZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYW1lUHJpY2VJbnB1dDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVZhcmlhdGlvblNhbWVQcmljZUNoZWNrYm94Q2hhbmdlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlID0gdGhpcy5zdGF0ZS5zYW1lUHJpY2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gXHJcbiAgICBoYW5kbGVWYXJpYXRpb25QcmljZUNoYW5nZWQgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnByaWNlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25Qcm9kdWN0SW5TdG9ja0NoYW5nZWQgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnN0b2NrID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25JbWFnZUxpbmtDaGFuZ2VkID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBjb3B5QXJyYXlbaW5kZXhdO1xyXG4gICAgICAgIG9iamVjdC5pbWFnZV9saW5rID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBzYXZlVmFyaWF0aW9uc0NsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpY2UgPT0gJycgfHwgZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmljZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucHJpY2VfZXJyb3IgPSAnRW50ZXIgcHJpY2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yID0gJ0VudGVyIEltYWdlIExpbmsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlX2Vycm9yID0gJydcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGlua19lcnJvciA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhdGlvbnNTYXZlZDogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICB2YXJpYXRpb25zRXJyb3JDaGVjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2VfZXJyb3IgIT0gJycgfHwgZGF0YS5pbWFnZV9saW5rX2Vycm9yICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMXB4IHNvbGlkIHJlZCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICBjdXN0b21GaWVsZE5hbWVDaGFuZ2VIYW5kbGVyKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lOiBlLnZhbHVlIH0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkTmFtZVNlbGVjdGVkOiBlIH0pXHJcbiAgICB9XHJcbiAgICBjdXN0b21GaWVsZFZhbHVlQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkVmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcbiAgICBhZGRDdXN0b21GaWVsZEJ0bkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lICE9ICcnICYmIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRWYWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRFcnJvcjogJycgfSlcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSk7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkTmFtZTogdGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZFZhbHVlOiB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZE5hbWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZFZhbHVlOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lU2VsZWN0ZWQ6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkRXJyb3I6ICdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ3VzdG9tRmllbGRzRXZlbnQgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IHsgY3VzdG9tRmllbGROYW1lOiBuYW1lLCBjdXN0b21GaWVsZFZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ3VzdG9tRmllbGRzRXZlbnQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRGFuZ2Vyb3VzIEdvb2RzXHJcbiAgICBoYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZSA9IChlLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5KTtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkucHVzaChuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhbmdlcm91c0dvb2RzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gUHJvZHVjdCBEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlOiAnc2ltcGxlLXByb2R1Y3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vID0+IEludmVudG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNrdTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gPT4gR2VuZXJhbChTaW1wbGUtUHJvZHVjdClcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9kdWN0X3ByaWNlOiAnJywgcHJvZHVjdF9pbl9zdG9jazogJycsIHByb2R1Y3RfYnJhbmRfbmFtZTogJycsIHByb2R1Y3RfaW1hZ2VfbGluazogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF93YXJyYW50eTogJycsIHdhcnJhbnR5X3R5cGU6ICcnLCBwcm9kdWN0X2Rpc2NvdW50OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyA9PiBBdHRyaWJ1dGVzIChWYXJpYWJsZSBQcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHB1cmNoYXNlX25vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vID0+IFZhcmlhdGlvbnMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF92YXJpYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyA9PiBTaGlwcGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3Rfd2VpZ2h0OiAnJywgZGltZW5zaW9uX2xlbmd0aDogJycsIGRpbWVuc2lvbl93aWR0aDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGltZW5zaW9uX2hlaWdodDogJycsIHNoaXBwaW5nX2NoYXJnZXM6ICcnLCBoYW5kbGluZ19mZWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vID0+IEFkdmFudmVcclxuICAgICAgICAgICAgICAgICAgICAvLyBwdXJjaGFzZV9ub3RlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyBDdXN0b20gRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tX2ZpZWxkczogJycsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfY2F0ZWdvcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhbmdlcm91c19nb29kczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF90YWdzOiAnJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnIHx8ICh0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsgPT0gJycgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAnc2ltcGxlLXByb2R1Y3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWVBcnJheSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RXJyb3I6IFwiZXJyb3JcIiwgY2F0ZWdvcnlFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUVycm9yOiBcImVycm9yXCIsIGNhdGVnb3J5RXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsgPT0gJycgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogdHJ1ZSwgaW1hZ2VfbGlua0Vycm9yOiBcImVycm9yXCIsIGltYWdlX2xpbmtFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmlzVmFyaWF0aW9uc1NhdmVkID09IGZhbHNlICYmIHZhbHVlcy5wcm9kdWN0X3R5cGUgPT0gJ3ZhcmlhYmxlLXByb3VjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGVsZW1lbnQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfY2F0ZWdvcnkgPSBhcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb2R1Y3RUYWdzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChlbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3RhZ3MgPSBhcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuZGFuZ2Vyb3VzX2dvb2RzID0gdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMucHJvZHVjdF90eXBlID09ICdzaW1wbGUtcHJvZHVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGVsZW1lbnQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF9pbWFnZV9saW5rID0gYXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pdGVtcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wdXNoKG9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHVzaCh7IHByaWNlOiBlbGVtZW50LnByaWNlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHVzaCh7IHN0b2NrOiBlbGVtZW50LnN0b2NrIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHVzaCh7IGltYWdlX2xpbms6IGVsZW1lbnQuaW1hZ2VfbGluayB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbTonLCBpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zID0gYXJyYXk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuY3VzdG9tX2ZpZWxkcyA9IHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlczogJywgdmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkUHJvZHVjdCh2YWx1ZXMsIHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUYWdzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlUeXBlOiAnWWVhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWF0aW9uc1NhdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRFcnJvcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIHRvdWNoZWQsIGlzVmFsaWQsIGVycm9ycywgaGFuZGxlQmx1ciwgaXNTdWJtaXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMudGl0bGVfcm93fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzfSBzdHlsZT17c3R5bGVzLnRpdGxlX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gQWRkIE5ldyBQcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUb2FzdCA/IDxTaG93VG9hc3Qgb25DbG9zZUhhbmRsZXI9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX0gc2hvdz17dGhpcy5zdGF0ZS5zaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdWNjZXNzJ30gbWVzc2FnZT17J1Byb2R1Y3QgVXBsb2FkZWQgU3VjY2Vzc2Z1bGx5J30gaWNvbk5hbWU9e2ZhVGh1bWJzVXB9IGNvbG9yPXtcImdyZWVuXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dUb2FzdCBvbkNsb3NlSGFuZGxlcj17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IGZhbHNlIH0pfSBzaG93PXt0aGlzLnN0YXRlLnNob3dWYXJpYXRpb25zRXJyb3JBbGVydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydFcnJvcid9IG1lc3NhZ2U9eydQbGVhc2UgQWRkL1NhdmUgVmFyaWF0aW9ucyBGaXJzdCd9IGljb25OYW1lPXtmYUV4Y2xhbWF0aW9uVHJpYW5nbGV9IGNvbG9yPXtcInJlZFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd1RvYXN0IG9uQ2xvc2VIYW5kbGVyPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlIH0pfSBzaG93PXt0aGlzLnN0YXRlLnNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfSBtZXNzYWdlPXsnRW50ZXIgUHJpY2UvSW1hZ2UgTGluayBpbiBHZW5lcmFsIFRhYiBGaXJzdCd9IGljb25OYW1lPXtmYUV4Y2xhbWF0aW9uVHJpYW5nbGV9IGNvbG9yPXtcInJlZFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMiUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17OX0gbWQ9ezl9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBOYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBOYW1lPHNwYW4+Kjwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcm9kdWN0X25hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQucHJvZHVjdF9uYW1lICYmIGVycm9ycy5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IE5hbWUgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IERpc2NyaXB0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPlByb2R1Y3QgRGlzY3J1cHRpb248L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcm9kdWN0X2Rlc2NyaXB0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5wcm9kdWN0X2Rlc2NyaXB0aW9uICYmIGVycm9ycy5wcm9kdWN0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnByb2R1Y3RfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgRGF0YSBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3R9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfdHlwZSB8fCAnJ31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfcHJpY2UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2VfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9wcmljZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfaW5fc3RvY2sgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9pbl9zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2tfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9pbl9zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWVfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9icmFuZF9uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9icmFuZF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUxpbms9e3RoaXMuc3RhdGUuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsZVByb2R1Y3RJbWFnZUxpbmtIYW5kbGVyPXt0aGlzLmhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZUxpbmtDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsZVByb2R1Y3RJbWFnZUxpbmtJbnB1dENoYW5nZUhhbmRsZXI9e3RoaXMuaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlTGlua0lucHV0Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0SW1hZ2VMaW5raGFuZGxlS2V5RG93bkhhbmRsZXI9e3RoaXMuaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlX2xpbmtLZXlEb3duLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0RXJyb3I9e3RoaXMuc3RhdGUuc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3Rfd2FycmFudHkgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF93YXJyYW50eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHlfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93YXJyYW50eX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX3ZhbHVlcz17dmFsdWVzLndhcnJhbnR5X3R5cGUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX3RvdWNoZWQ9e3RvdWNoZWQud2FycmFudHlfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGVfZXJyb3JzPXtlcnJvcnMud2FycmFudHlfdHlwZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfZGlzY291bnQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9kaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9kaXNjb3VudH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VfdmFsdWVzPXt2YWx1ZXMuc2t1IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X3RvdWNoZWQ9e3RvdWNoZWQuc2t1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X2Vycm9ycz17ZXJyb3JzLnNrdX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3dlaWdodCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0X3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF93ZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X3dlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl9sZW5ndGggfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX3RvdWNoZWQ9e3RvdWNoZWQuZGltZW5zaW9uX2xlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGhfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2xlbmd0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGhfdmFsdWVzPXt2YWx1ZXMuZGltZW5zaW9uX3dpZHRoIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX3RvdWNoZWQ9e3RvdWNoZWQuZGltZW5zaW9uX3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl93aWR0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl9oZWlnaHQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X3RvdWNoZWQ9e3RvdWNoZWQuZGltZW5zaW9uX2hlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2hlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX3ZhbHVlcz17dmFsdWVzLnNoaXBwaW5nX2NoYXJnZXMgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX3RvdWNoZWQ9e3RvdWNoZWQuc2hpcHBpbmdfY2hhcmdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzPXtlcnJvcnMuc2hpcHBpbmdfY2hhcmdlc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGluZ19mZWVfdmFsdWVzPXt2YWx1ZXMuaGFuZGxpbmdfZmVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX3RvdWNoZWQ9e3RvdWNoZWQuaGFuZGxpbmdfZmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX2Vycm9ycz17ZXJyb3JzLmhhbmRsaW5nX2ZlZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX3ZhbHVlcz17dmFsdWVzLnB1cmNoYXNlX25vdGUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX3RvdWNoZWQ9e3RvdWNoZWQucHVyY2hhc2Vfbm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGVfZXJyb3JzPXtlcnJvcnMucHVyY2hhc2Vfbm90ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2xvckNoYW5nZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdENvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2l6ZT17dGhpcy5zdGF0ZS5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNpemVDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RTaXplQ2hhbmdlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNBcnJheT17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVOYW1lU2VsZWN0ZWQ9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWVIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVOYW1lQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGVIYW5kbGVyPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMuaGFuZGxlVXBkYXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUF0dHJpYnV0ZUhhbmRsZXI9e3RoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVZhcmlhdGlvbkhhbmRsZXI9e3RoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdFZhcmlhdGlvbkNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVWYXJpYXRpb25zSGFuZGxlcj17dGhpcy5zYXZlVmFyaWF0aW9uc0NsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNFcnJvckhhbmRsZXI9e3RoaXMudmFyaWF0aW9uc0Vycm9yQ2hlY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVFcnJvcn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQXR0cmlidXRlc0hhbmRsZXI9e3RoaXMuaGFuZGxlU2F2ZVByb2R1Y3RBdHRyaWJ1dGVzQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17dGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25QcmljZUhhbmRsZXI9e3RoaXMuaGFuZGxlVmFyaWF0aW9uUHJpY2VDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25TdG9ja0hhbmRsZXI9e3RoaXMuaGFuZGxlVmFyaWF0aW9uUHJvZHVjdEluU3RvY2tDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25JbWFnZUxpbmtIYW5kbGVyPXt0aGlzLmhhbmRsZVZhcmlhdGlvbkltYWdlTGlua0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlQ2hlY2tib3hIYW5kbGVyPXt0aGlzLmhhbmRsZVZhcmlhdGlvblNhbWVQcmljZUNoZWNrYm94Q2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZVByaWNlPXt0aGlzLnN0YXRlLnNhbWVQcmljZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZVByaWNlRm9yQWxsVmFyaWF0aW9uc0hhbmRsZXI9e3RoaXMuaGFuZGxlU2FtZVByaWNlRm9yQWxsVmFyaWF0aW9uc0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgRGF0YSBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEN1c3RvbSBGaWVsZHMgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5PXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZE5hbWVTZWxlY3RlZD17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZUhhbmRsZXI9e3RoaXMuY3VzdG9tRmllbGROYW1lQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZUhhbmRsZXI9e3RoaXMuY3VzdG9tRmllbGRWYWx1ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEZpZWxkSGFuZGxlcj17dGhpcy5hZGRDdXN0b21GaWVsZEJ0bkNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy51cGRhdGVDdXN0b21GaWVsZHNFdmVudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmRlbGV0ZUN1c3RvbUZpZWxkc0V2ZW50LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZEVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIEN1c3RvbSBGaWVsZHMgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBDYXRlZ29yeSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5Qcm9kdWN0IENhdGVnb3JpZXM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17eyBoZWlnaHQ6ICcyNTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jYXRlZ29yeUVycm9yRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENhdGVnb3J5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnByb2R1Y3RfY2F0ZWdvcmllc19vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QvRW50ZXIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZXQgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBhdGVnb3J5ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRGFuZ2Vyb3VzIEdvb2RzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPkRhbmdlcm91cyBHb29kczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0J1dHRvbn0gc2l6ZT1cInNtXCIgZXZlbnRLZXk9XCIwXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy52YXJpYXRpb25zX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90X3NwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb3QgU3BlY2lmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnTm90IFNwZWNpZmllZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2VyYW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJhbWljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnQ2VyYW1pYycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdHbGFzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWV0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWV0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdNZXRhbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhc3RpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGFzdGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnUGxhc3RpYycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mRGFuZ2Vyb3VzIEdvb2RzICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBUYWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPlByb2R1Y3QgVGFnczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0J1dHRvbn0gc2l6ZT1cInNtXCIgZXZlbnRLZXk9XCIwXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy52YXJpYXRpb25zX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXt7IGhlaWdodDogJzI1MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9kdWN0X2NvbG9yX29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdFRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QvRW50ZXIgVGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBUYWdzICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRm9ybSBTdWJtaXQgQnRuIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZpZWxkcyB3aXRoIDxzcGFuPiAqIDwvc3Bhbj4gYXJlIG1hbmRhdG9yeS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Rm9yIGFkZGluZyBuZXcgc2l6ZSwgY29sb3IsIGxpbms6IEVudGVyIHRleHQgYW5kIGhpdCBFbnRlciBvciBUYWIga2V5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gJ1VwbG9hZGluZycgOiAnVXBsb2FkJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiIHNpemU9XCJzbVwiIC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgRm9ybSBTdWJtaXQgQnRuIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9fZXJyb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNEQzM1NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJlZEJvcmRlckRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNEQzM1NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cHggMHB4IDAuMnB4IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkJvcmRlckRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aXRsZV9yb3c6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzEuNSUgNCUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjZweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyNnB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgIH0sXHJcblxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAvLyBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzElJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXc7Il19 */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js */`)));
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
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primry_color}`,
    border: 'none',
    fontSize: '10px'
  },
  submit_btn: {
    // background: `${GlobalStyleSheet.admin_primry_color}`,
    marginTop: '1%'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].form_label_fontsize}`
  },
  term_condition_label: {
    width: '100%',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].form_label_fontsize}`,
    paddingTop: '-10px',
    marginTop: '-10px'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primary_text_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].primary_text_color}`,
    marginRight: '10%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  variations_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AddNew);

/***/ }),

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import React, { Component } from 'react';
// import { Row, Table } from 'react-bootstrap';
// class Products extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <Row style={{margin: '0% 1.5% 1.5% 1.5%', background: 'white' }}>
//                 <Table striped bordered hover responsive style={{padding: '0%', margin: '0%'}}>
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                         </tr>
//                         <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                         </tr>
//                         <tr>
//                             <td>3</td>
//                             <td colSpan="2">Larry the Bird</td>
//                             <td>@twitter</td>
//                         </tr>
//                     </tbody>
//                 </Table>
//             </Row>
//         );
//     }
// }
// export default Products;
const AllProducts = () => __jsx("h1", null, "Vriables");

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
      className: "jsx-4035273632"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.title_row,
      noGutters: true
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
      style: styles.title_fontawesome
    }), __jsx("div", {
      style: styles.title,
      className: "jsx-4035273632" + " " + "mr-auto"
    }, " Dashboard ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: {
        padding: '0% 1%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.product_card_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header
    }, "Products"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: styles.card_body
    }, __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Total Products")), __jsx("div", {
      style: styles.total_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faProductHunt"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfTotalProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "In-Stock Products")), __jsx("div", {
      style: styles.stock_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStoreAlt"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfInStockProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Sold Products")), __jsx("div", {
      style: styles.sold_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckDouble"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfSoldProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Returned Products")), __jsx("div", {
      style: styles.returned_product_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faThumbsDown"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfReturnedProducts,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.order_card_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.card_header
    }, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      style: styles.card_body
    }, __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Total Orders")), __jsx("div", {
      style: styles.total_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfTotalOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Deleivered Orders")), __jsx("div", {
      style: styles.delivered_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faThumbsUp"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfDeliveredOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Pending Orders")), __jsx("div", {
      style: styles.prnding_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClock"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))), __jsx("div", {
      style: styles.card_text_div,
      className: "jsx-4035273632"
    }, __jsx("p", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      className: "jsx-4035273632" + " " + "label_span"
    }, "Cancelled Orders")), __jsx("div", {
      style: styles.cancelled_order_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBan"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfCancelledOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 4,
      md: 4,
      sm: 12,
      xs: 12,
      style: styles.earning_card_col
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.total_earning_card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header
    }, "Total Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, __jsx("div", {
      style: styles.total_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.year_earning_card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header
    }, "This Year Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, __jsx("div", {
      style: styles.year_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: styles.earning_card_row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: styles.month_earning_card
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      style: styles.earning_card_header
    }, "This Month Earnings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, __jsx("div", {
      style: styles.month_errning_row,
      className: "jsx-4035273632" + " " + "number_count_div"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"],
      className: "mr-auto",
      style: styles.product_fontawesome
    }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      start: 0,
      end: this.state.noOfPendingOrders,
      delay: 0,
      duration: 10
    }, ({
      countUpRef
    }) => __jsx("div", {
      className: "jsx-4035273632"
    }, __jsx("span", {
      ref: countUpRef,
      className: "jsx-4035273632" + " " + "number_count"
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4035273632"
    }, "p.jsx-4035273632{width:100%;border-bottom:1.2px dashed lightgray;line-height:0.1em;}.label_span.jsx-4035273632{background:#fff;padding-right:3%;}.number_count.jsx-4035273632{color:white;font-size:25px;}.number_count_div.jsx-4035273632{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5%;background:red;border-radius:5px;}.number_count_div.jsx-4035273632:hover{margin:-5px 0px 5px 0px;box-shadow:0 4px 8px 0 black,0 6px 20px 0 yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFx2ZW5kb3ItZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9QcUIsQUFHd0MsQUFLSSxBQUlILEFBSUcsQUFRVSxXQXBCWSxDQVV6QyxHQUdpQixDQVBqQixRQWV1RCxHQVh0RCxNQUpBLGVBTHFCLGtCQUNyQixPQW9CQSxnQkFSc0IsNkZBQ1IsV0FDSSxlQUVuQixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xcdmVuZG9yLWRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVN0b3JlQWx0LCBmYVVzZXJQbHVzLCBmYUNoZWNrRG91YmxlLCBmYURvbGxhclNpZ24sIGZhVGFjaG9tZXRlckFsdCxcclxuICAgIGZhRWRpdCwgZmFDbG9jaywgZmFCYW5cclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBWZW5kb3JEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbm9PZlRvdGFsUHJvZHVjdHM6IDEwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZJblN0b2NrUHJvZHVjdHM6IDIwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZTb2xkUHJvZHVjdHM6IDMwMDAsXHJcbiAgICAgICAgICAgIG5vT2ZSZXR1cm5lZFByb2R1Y3RzOiA0MDAwLFxyXG5cclxuICAgICAgICAgICAgdG90YWxFYXJuaW5nczogNTQ3MCxcclxuICAgICAgICAgICAgdGhpc1llYXJFYXJuaW5nczogMjMwOSxcclxuICAgICAgICAgICAgdGhpc01vbnRoRWFybmluZ3M6IDEyMDcsXHJcblxyXG4gICAgICAgICAgICBub09mVG90YWxPcmRlcnM6IDExOTAsXHJcbiAgICAgICAgICAgIG5vT2ZEZWxpdmVyZWRPcmRlcnM6IDk4MCxcclxuICAgICAgICAgICAgbm9PZlBlbmRpbmdPcmRlcnM6IDEyMCxcclxuICAgICAgICAgICAgbm9PZkNhbmNlbGxlZE9yZGVyczogMTAwLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy50aXRsZV9yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFjaG9tZXRlckFsdH0gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gRGFzaGJvYXJkIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17e3BhZGRpbmc6ICcwJSAxJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9jYXJkX2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17c3R5bGVzLmNhcmRfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5Ub3RhbCBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnRvdGFsX3Byb2R1Y3Rfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQcm9kdWN0SHVudH0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlRvdGFsUHJvZHVjdHN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5Jbi1TdG9jayBQcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnN0b2NrX3Byb2R1Y3Rfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdG9yZUFsdH0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZkluU3RvY2tQcm9kdWN0c30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPlNvbGQgUHJvZHVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5zb2xkX3Byb2R1Y3Rfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0RvdWJsZX0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlNvbGRQcm9kdWN0c30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0X2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxfc3BhblwiPlJldHVybmVkIFByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMucmV0dXJuZWRfcHJvZHVjdF9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRodW1ic0Rvd259IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZSZXR1cm5lZFByb2R1Y3RzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENvbC0yICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5vcmRlcl9jYXJkX2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3N0eWxlcy5jYXJkX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+VG90YWwgT3JkZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50X2RpdlwiIHN0eWxlPXtzdHlsZXMudG90YWxfb3JkZXJfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mVG90YWxPcmRlcnN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dF9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsX3NwYW5cIj5EZWxlaXZlcmVkIE9yZGVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLmRlbGl2ZXJlZF9vcmRlcl9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRodW1ic1VwfSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mRGVsaXZlcmVkT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+UGVuZGluZyBPcmRlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5wcm5kaW5nX29yZGVyX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2xvY2t9IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZQZW5kaW5nT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHRfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbF9zcGFuXCI+Q2FuY2VsbGVkIE9yZGVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLmNhbmNlbGxlZF9vcmRlcl9yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhbn0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZkNhbmNlbGxlZE9yZGVyc30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb2wtMyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuZWFybmluZ19jYXJkX2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXtzdHlsZXMuZWFybmluZ19jYXJkX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLnRvdGFsX2Vhcm5pbmdfY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuZWFybmluZ19jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIEVhcm5pbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnRvdGFsX2Vycm5pbmdfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgc3RhcnQ9ezB9IGVuZD17dGhpcy5zdGF0ZS5ub09mUGVuZGluZ09yZGVyc30gZGVsYXk9ezB9IGR1cmF0aW9uPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyX2NvdW50XCIgcmVmPXtjb3VudFVwUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3VudFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXtzdHlsZXMuZWFybmluZ19jYXJkX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLnllYXJfZWFybmluZ19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5lYXJuaW5nX2NhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBZZWFyIEVhcm5pbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudF9kaXZcIiBzdHlsZT17c3R5bGVzLnllYXJfZXJybmluZ19yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURvbGxhclNpZ259IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBzdGFydD17MH0gZW5kPXt0aGlzLnN0YXRlLm5vT2ZQZW5kaW5nT3JkZXJzfSBkZWxheT17MH0gZHVyYXRpb249ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY291bnRVcFJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRcIiByZWY9e2NvdW50VXBSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3N0eWxlcy5lYXJuaW5nX2NhcmRfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMubW9udGhfZWFybmluZ19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5lYXJuaW5nX2NhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aCBFYXJuaW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJfY291bnRfZGl2XCIgc3R5bGU9e3N0eWxlcy5tb250aF9lcnJuaW5nX3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRG9sbGFyU2lnbn0gY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIHN0YXJ0PXswfSBlbmQ9e3RoaXMuc3RhdGUubm9PZlBlbmRpbmdPcmRlcnN9IGRlbGF5PXswfSBkdXJhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBjb3VudFVwUmVmIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlcl9jb3VudFwiIHJlZj17Y291bnRVcFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEuMnB4IGRhc2hlZCBsaWdodGdyYXk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbF9zcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAubnVtYmVyX2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm51bWJlcl9jb3VudF9kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm51bWJlcl9jb3VudF9kaXY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTVweCAwcHggNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCBibGFjaywgMCA2cHggMjBweCAwIHllbGxvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzEuNSUgNCUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjZweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyNnB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgIH0sXHJcblxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAvLyBwYWRkaW5nOiAnMS41JSA1JScsXHJcbiAgICAgICAgY29sb3I6ICcjNkE3MDc0JyxcclxuICAgICAgICAvLyBib3JkZXJCb3R0b206IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gXHJcbiAgICAgICAgZm9udFNpemU6ICcxNXB4J1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dF9kaXY6IHtcclxuICAgICAgICBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzUlJyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHJvZHVjdHNcclxuICAgIHByb2R1Y3RfY2FyZF9jb2w6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMyUgMSUnXHJcbiAgICB9LFxyXG4gICAgdG90YWxfcHJvZHVjdF9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnYmx1ZScsXHJcbiAgICB9LFxyXG4gICAgc3RvY2tfcHJvZHVjdF9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAncHVycGxlJyxcclxuICAgIH0sXHJcbiAgICBzb2xkX3Byb2R1Y3Rfcm93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2dyZWVuJyxcclxuICAgIH0sXHJcbiAgICByZXR1cm5lZF9wcm9kdWN0X3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdncmF5JyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gT3JkZXJzXHJcbiAgICBvcmRlcl9jYXJkX2NvbDoge1xyXG4gICAgICAgIHBhZGRpbmc6ICczJSAxJSdcclxuICAgIH0sXHJcbiAgICB0b3RhbF9vcmRlcl9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnYmx1ZScsXHJcbiAgICB9LFxyXG4gICAgZGVsaXZlcmVkX29yZGVyX3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdncmVlbicsXHJcbiAgICB9LFxyXG4gICAgcHJuZGluZ19vcmRlcl9yb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmYmYwMCcsXHJcbiAgICB9LFxyXG4gICAgY2FuY2VsbGVkX29yZGVyX3Jvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZWQnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFYXJuaW5nc1xyXG4gICAgZWFybmluZ19jYXJkX2NvbDoge1xyXG4gICAgICAgIHBhZGRpbmc6ICczJSAxJSdcclxuICAgIH0sXHJcbiAgICBlYXJuaW5nX2NhcmRfcm93OiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNCUnXHJcbiAgICB9LFxyXG4gICAgZWFybmluZ19jYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgdG90YWxfZWFybmluZ19jYXJkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwOTllNicsXHJcbiAgICB9LFxyXG4gICAgeWVhcl9lYXJuaW5nX2NhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjYWMwMGU2JyxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnXHJcbiAgICB9LFxyXG4gICAgbW9udGhfZWFybmluZ19jYXJkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2FjNzMzOScsXHJcbiAgICB9LFxyXG4gICAgLy8gXHJcbiAgICB0b3RhbF9lcnJuaW5nX3Jvdzp7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAnMyUgMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDA4OGNjJyxcclxuICAgIH0sXHJcbiAgICB5ZWFyX2Vycm5pbmdfcm93OntcclxuICAgICAgICAvLyBtYXJnaW46ICczJSAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyM5OTAwY2MnLFxyXG4gICAgfSxcclxuICAgIG1vbnRoX2Vycm5pbmdfcm93OntcclxuICAgICAgICAvLyBtYXJnaW46ICczJSAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyM5OTY2MzMnLFxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9kdWN0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzMwcHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVuZG9yRGFzaGJvYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\vendor-dashboard.js */"));
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-side-drawer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  const [show_product, setShow_product] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "Dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + (drawerClasses || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
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
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, " ", props.token, " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Dashboard",
    onClick: props.click,
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 37
    }
  }, "Dashboard"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: styles.nav_link,
    onClick: () => setShow_product(!show_product),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, " Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: show_product ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  })))), show_product ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "product_submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AllProducts",
    onClick: props.click,
    style: styles.product_submenu_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }, " All Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "product_submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddNew",
    onClick: props.click,
    style: styles.product_submenu_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }, " Add New "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "product_submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddCategory",
    onClick: props.click,
    style: styles.product_submenu_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, " Add Category "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  })))) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    onClick: props.click,
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, "Inventory"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "BulkUpload",
    onClick: props.click,
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, "Bulk Upload"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Discounts",
    onClick: props.click,
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }, "Discount Coupons"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Orders",
    onClick: props.click,
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, "Orders"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Reports",
    onClick: props.click,
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 37
    }
  }, "Reports"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "nav_link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    onClick: (props.click, props.logoutClickHandler),
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPowerOff"],
    style: styles.fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, "Logout"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  })))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "tabs_side_drawer_tab_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "VendorDashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_vendor_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AllProducts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddNew",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddCategory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_product_contents_add_category__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "BulkUpload",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_bulk_upload__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Discounts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_discounts__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Orders",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_orders__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Reports",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, __jsx(_dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 33
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3017863662",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color],
    __self: undefined
  }, `.nav_link.__jsx-style-dynamic-selector{color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;}.nav_link.__jsx-style-dynamic-selector:hover{background:#30313E;}.tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;overflow-y:auto;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.product_submenu.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:0% 5% 0% 10%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;padding:0px;}label.__jsx-style-dynamic-selector{margin-top:4%;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color};}@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLXNpZGUtZHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtMaUIsQUFHNEQsQUFLaEIsQUFHUCxBQWVZLEFBR2dCLEFBTXRCLEFBS0osQUFNRyxBQUdBLFlBckN1QixDQW1DeEMsQUFHQSxDQVRtQyxJQUx4QixDQTNCZixVQTRCZ0IsTUFqQ21CLEtBMEJBLENBUW5DLFFBSUEsR0E3QjhDLGNBUlIsS0EwQkEsYUFKdEMsT0FibUIsU0FSbkIsS0EwQndCLENBakJkLE1BQ0ssV0FDSixFQWdCWCxLQWZvQixnQkFDTixVQUNNLGdCQUNKLFlBQ2lCLG1HQUNNLGlJQUN2QyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1zaWRlLWRyYXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOYXYsIFRhYiwgUm93LCBDb2wsIEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFVcGxvYWQsIGZhVGFjaG9tZXRlckFsdCwgZmFDaGV2cm9uUmlnaHQsIGZhQ2hldnJvbkRvd24sIGZhQ2hldnJvblVwLFxyXG4gICAgZmFQbHVzQ2lyY2xlLCBmYVBvd2VyT2ZmLCBmYUxpc3RBbHQsIGZhV2FyZWhvdXNlLCBmYVRhZ3MsIGZhUGVyY2VudCwgZmFDaGFydEJhclxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBWZW5kb3JEYXNoYm9hcmQgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvdmVuZG9yLWRhc2hib2FyZCc7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9wcm9kdWN0LWNvbnRlbnRzL2FsbC1wcm9kdWN0cyc7XHJcbmltcG9ydCBBZGROZXcgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvcHJvZHVjdC1jb250ZW50cy9hZGQtbmV3JztcclxuaW1wb3J0IEFkZENhdGVnb3J5IGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvYWRkLWNhdGVnb3J5JztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9pbnZlbnRvcnknO1xyXG5pbXBvcnQgRGlzY291bnRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2Rpc2NvdW50cyc7XHJcbmltcG9ydCBSZXBvcnRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3JlcG9ydHMnO1xyXG5pbXBvcnQgQnVsa1VwbG9hZCBmcm9tICcuL2Rhc2hib2FyZC1jb250ZW50cy9idWxrLXVwbG9hZCc7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvb3JkZXJzJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuXHJcbmNvbnN0IERhc2hib2FyZFNpZGVEcmF3ZXIgPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQgZHJhd2VyQ2xhc3NlcyA9IFwidGFic19zaWRlX2RyYXdlclwiO1xyXG4gICAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgICAgICBkcmF3ZXJDbGFzc2VzID0gXCJ0YWJzX3NpZGVfZHJhd2VyIG9wZW5cIjtcclxuICAgIH1cclxuICAgIGNvbnN0IFtzaG93X3Byb2R1Y3QsIHNldFNob3dfcHJvZHVjdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImRhc2hib2FyZC10YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cIkRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFNpZGUgRHJhd2VyIENvbXBvbmVudHMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZHJhd2VyQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtblwiIHZhcmlhbnQ9XCJwaWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3N0eWxlcy5pbWFnZV9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmRleFwiIHN0eWxlPXtzdHlsZXMubXVoYWxpa30+IHtwcm9wcy50b2tlbn0gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkRhc2hib2FyZFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhY2hvbWV0ZXJBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHNldFNob3dfcHJvZHVjdCghc2hvd19wcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFByb2R1Y3RzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e3Nob3dfcHJvZHVjdCA/IGZhQ2hldnJvblVwIDogZmFDaGV2cm9uRG93bn0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dfcHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9zdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkFsbFByb2R1Y3RzXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9zdWJtZW51X2xpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBBbGwgUHJvZHVjdHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWRkTmV3XCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9zdWJtZW51X2xpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQbHVzQ2lyY2xlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IEFkZCBOZXcgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWRkQ2F0ZWdvcnlcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gQWRkIENhdGVnb3J5IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXYXJlaG91c2V9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkludmVudG9yeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQnVsa1VwbG9hZFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVwbG9hZH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+QnVsayBVcGxvYWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkRpc2NvdW50c1wiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRhZ3N9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkRpc2NvdW50IENvdXBvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIk9yZGVyc1wiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUYWdzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5PcmRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJSZXBvcnRzXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hhcnRCYXJ9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlJlcG9ydHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17cHJvcHMuY2xpY2ssIHByb3BzLmxvZ291dENsaWNrSGFuZGxlcn0gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNfc2lkZV9kcmF3ZXJfdGFiX2NvbnRlbnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17XCJhdXRvXCJ9IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJWZW5kb3JEYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVuZG9yRGFzaGJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWxsUHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxsUHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBZGROZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkTmV3IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWRkQ2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQnVsa1VwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdWxrVXBsb2FkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiRGlzY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIk9yZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJSZXBvcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgdGhlIFNpZGUgRHJhd2VyIENvbXBvbmVudHMgKi99XHJcbiAgICAgICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzEzRTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Rfc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlIDUlIDAlIDEwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyX3RhYl9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgaW1hZ2VfZGl2OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMC41cHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzIlJ1xyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICc4MHB4J1xyXG4gICAgfSxcclxuICAgIG11aGFsaWs6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4J1xyXG4gICAgfSxcclxuICAgIHByb2R1Y3Rfc3VibWVudV9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMXB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDBweCdcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzglJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZm9yd29yZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICB3aWR0aDogJzhweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnOHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFNpZGVEcmF3ZXI7Il19 */
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React, { Component } from 'react';
// import Router from 'next/router';
// import DashboardTabs from './components/vendor/dashboard/dashboard-tabs';
// import DashboardSideDrawer from './components/vendor/dashboard/dashboard-side-drawer';
// import GlobalStyleSheet from '../styleSheet';
// import { chectAuth, removeTokenFromStorage } from '../sdk/core/authentication-service';
// const BackDrop = props => (
//     <div>
//         <div onClick={props.click}>
//         </div>
//         <style jsx>{`
//              position: fixed;
//              width: 100%;
//              height: 100%;
//              top: 0;
//              left: 0;
//              background: rgba(0, 0, 0, 0.3);
//              z-index: 100;
//         `}</style>
//     </div>
// )
// class VendorDashboard extends Component {
//     constructor(props) {
//         super(props);
//         this.authUser();
//         this.state = {
//             sideDrawerOpen: false,
//             showSideDrawer: true,
//             jwt_token: '',
//         }
//     }
//     async authUser() {
//         this.setState({ jwt_token: await chectAuth('vendor')});
//     }
//     drawerToggleClickHandler = () => {
//         this.setState(prevState => {
//             return { sideDrawerOpen: !prevState.sideDrawerOpen };
//         });
//     };
//     showSideDrawerClickHandler = () => {
//         this.setState(prevState => {
//             return { showSideDrawer: !prevState.showSideDrawer };
//         });
//     };
//     backdropClickHandler = () => {
//         this.setState({ sideDrawerOpen: false });
//     };
//     logout(){
//         removeTokenFromStorage();
//     }
//     render() {
//         let backdrop;
//         if (this.state.sideDrawerOpen) {
//             backdrop = <BackDrop click={this.backdropClickHandler} />;
//         }
//         return (
//             <div style={styles.body}>
//                 {/* <AdminLayout> */}
//                 <DashboardTabs token={this.state.jwt_token} show={this.state.showSideDrawer} drawerClickHandler={this.drawerToggleClickHandler} 
//                 ClickHandler={this.showSideDrawerClickHandler} logoutClickHandler={this.logout}/>
//                 <DashboardSideDrawer token={this.state.jwt_token} show={this.state.sideDrawerOpen} 
//                 click={this.backdropClickHandler} logoutClickHandler={this.logout} />
//                 {backdrop}
//                 {/* </AdminLayout> */}
//             </div>
//         );
//     }
// }
// const styles = {
//     body: {
//         background: `${GlobalStyleSheet.body_color}`,
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         right: '0',
//         bottom: '0',
//     },
// }
// export default VendorDashboard;







const BackDrop = props => __jsx("div", {
  className: "jsx-3404600223"
}, __jsx("div", {
  onClick: props.click,
  className: "jsx-3404600223"
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3404600223"
}, ".jsx-3404600223{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFx2ZW5kb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdvQixBQUU2QixlQUNKLFdBQ0MsWUFDTixNQUNDLE9BQ3VCLDJCQUNsQixZQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcdmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBEYXNoYm9hcmRUYWJzIGZyb20gJy4vY29tcG9uZW50cy92ZW5kb3IvZGFzaGJvYXJkL2Rhc2hib2FyZC10YWJzJztcclxuLy8gaW1wb3J0IERhc2hib2FyZFNpZGVEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL3ZlbmRvci9kYXNoYm9hcmQvZGFzaGJvYXJkLXNpZGUtZHJhd2VyJztcclxuLy8gaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vc3R5bGVTaGVldCc7XHJcbi8vIGltcG9ydCB7IGNoZWN0QXV0aCwgcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5cclxuLy8gY29uc3QgQmFja0Ryb3AgPSBwcm9wcyA9PiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgb25DbGljaz17cHJvcHMuY2xpY2t9PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuLy8gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgdG9wOiAwO1xyXG4vLyAgICAgICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuLy8gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuLy8gICAgICAgICBgfTwvc3R5bGU+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gKVxyXG5cclxuLy8gY2xhc3MgVmVuZG9yRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4vLyAgICAgICAgIHRoaXMuYXV0aFVzZXIoKTtcclxuLy8gICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4vLyAgICAgICAgICAgICBzaWRlRHJhd2VyT3BlbjogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIHNob3dTaWRlRHJhd2VyOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBqd3RfdG9rZW46ICcnLFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBhc3luYyBhdXRoVXNlcigpIHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgand0X3Rva2VuOiBhd2FpdCBjaGVjdEF1dGgoJ3ZlbmRvcicpfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZHJhd2VyVG9nZ2xlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHsgc2lkZURyYXdlck9wZW46ICFwcmV2U3RhdGUuc2lkZURyYXdlck9wZW4gfTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH07XHJcbi8vICAgICBzaG93U2lkZURyYXdlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB7IHNob3dTaWRlRHJhd2VyOiAhcHJldlN0YXRlLnNob3dTaWRlRHJhd2VyIH07XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaWRlRHJhd2VyT3BlbjogZmFsc2UgfSk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGxvZ291dCgpe1xyXG4vLyAgICAgICAgIHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgbGV0IGJhY2tkcm9wO1xyXG4vLyAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNpZGVEcmF3ZXJPcGVuKSB7XHJcbi8vICAgICAgICAgICAgIGJhY2tkcm9wID0gPEJhY2tEcm9wIGNsaWNrPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyfSAvPjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuLy8gICAgICAgICAgICAgICAgIHsvKiA8QWRtaW5MYXlvdXQ+ICovfVxyXG4vLyAgICAgICAgICAgICAgICAgPERhc2hib2FyZFRhYnMgdG9rZW49e3RoaXMuc3RhdGUuand0X3Rva2VufSBzaG93PXt0aGlzLnN0YXRlLnNob3dTaWRlRHJhd2VyfSBkcmF3ZXJDbGlja0hhbmRsZXI9e3RoaXMuZHJhd2VyVG9nZ2xlQ2xpY2tIYW5kbGVyfSBcclxuLy8gICAgICAgICAgICAgICAgIENsaWNrSGFuZGxlcj17dGhpcy5zaG93U2lkZURyYXdlckNsaWNrSGFuZGxlcn0gbG9nb3V0Q2xpY2tIYW5kbGVyPXt0aGlzLmxvZ291dH0vPlxyXG4vLyAgICAgICAgICAgICAgICAgPERhc2hib2FyZFNpZGVEcmF3ZXIgdG9rZW49e3RoaXMuc3RhdGUuand0X3Rva2VufSBzaG93PXt0aGlzLnN0YXRlLnNpZGVEcmF3ZXJPcGVufSBcclxuLy8gICAgICAgICAgICAgICAgIGNsaWNrPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyfSBsb2dvdXRDbGlja0hhbmRsZXI9e3RoaXMubG9nb3V0fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAge2JhY2tkcm9wfVxyXG4vLyAgICAgICAgICAgICAgICAgey8qIDwvQWRtaW5MYXlvdXQ+ICovfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBzdHlsZXMgPSB7XHJcbi8vICAgICBib2R5OiB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbi8vICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbi8vICAgICAgICAgdG9wOiAnMCcsXHJcbi8vICAgICAgICAgbGVmdDogJzAnLFxyXG4vLyAgICAgICAgIHJpZ2h0OiAnMCcsXHJcbi8vICAgICAgICAgYm90dG9tOiAnMCcsXHJcbi8vICAgICB9LFxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBWZW5kb3JEYXNoYm9hcmQ7XHJcblxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy92ZW5kb3IvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XHJcbmltcG9ydCBEYXNoYm9hcmRTaWRlRHJhd2VyIGZyb20gJy4vY29tcG9uZW50cy92ZW5kb3IvZGFzaGJvYXJkL2Rhc2hib2FyZC1zaWRlLWRyYXdlcic7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgeyBjaGVjdEF1dGgsIHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEJhY2tEcm9wID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Byb3BzLmNsaWNrfT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmNsYXNzIFZlbmRvckRhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmF1dGhVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2lkZURyYXdlck9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93V3JhcHBlcjogdHJ1ZSxcclxuICAgICAgICAgICAgand0X3Rva2VuOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYXV0aFVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGp3dF90b2tlbjogYXdhaXQgY2hlY3RBdXRoKCd2ZW5kb3InKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdlclRvZ2dsZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHNpZGVEcmF3ZXJPcGVuOiAhcHJldlN0YXRlLnNpZGVEcmF3ZXJPcGVuIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2hvd1dyYXBwZXJDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzaG93V3JhcHBlcjogIXByZXZTdGF0ZS5zaG93V3JhcHBlciB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2lkZURyYXdlck9wZW46IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICByZW1vdmVUb2tlbkZyb21TdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBiYWNrZHJvcDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWRlRHJhd2VyT3Blbikge1xyXG4gICAgICAgICAgICBiYWNrZHJvcCA9IDxCYWNrRHJvcCBjbGljaz17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcn0gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICB7LyogPEFkbWluTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgdG9rZW49e3RoaXMuc3RhdGUuand0X3Rva2VufSBzaG93PXt0aGlzLnN0YXRlLnNob3dXcmFwcGVyfSBkcmF3ZXJDbGlja0hhbmRsZXI9e3RoaXMuZHJhd2VyVG9nZ2xlQ2xpY2tIYW5kbGVyfSBcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJCdG5DbGlja0hhbmRsZXI9e3RoaXMuU2hvd1dyYXBwZXJDbGlja0hhbmRsZXJ9IGxvZ291dENsaWNrSGFuZGxlcj17dGhpcy5sb2dvdXR9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGFzaGJvYXJkU2lkZURyYXdlciB0b2tlbj17dGhpcy5zdGF0ZS5qd3RfdG9rZW59IHNob3c9e3RoaXMuc3RhdGUuc2lkZURyYXdlck9wZW59IFxyXG4gICAgICAgICAgICAgICAgY2xpY2s9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ9IGxvZ291dENsaWNrSGFuZGxlcj17dGhpcy5sb2dvdXR9IC8+XHJcbiAgICAgICAgICAgICAgICB7YmFja2Ryb3B9XHJcbiAgICAgICAgICAgICAgICB7LyogPC9BZG1pbkxheW91dD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgcmlnaHQ6ICcwJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZW5kb3JEYXNoYm9hcmQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\vendor.js */"));

class VendorDashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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
        click: this.backdropClickHandler
      });
    }

    return __jsx("div", {
      style: styles.body
    }, __jsx(_components_vendor_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      token: this.state.jwt_token,
      show: this.state.showWrapper,
      drawerClickHandler: this.drawerToggleClickHandler,
      wrapperBtnClickHandler: this.ShowWrapperClickHandler,
      logoutClickHandler: this.logout
    }), __jsx(_components_vendor_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      token: this.state.jwt_token,
      show: this.state.sideDrawerOpen,
      click: this.backdropClickHandler,
      logoutClickHandler: this.logout
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
/* harmony default export */ __webpack_exports__["default"] = (VendorDashboard);

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
  } catch (error) {
    console.log("error:", error);
  }
}
function chectAuth(rolee) {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);

    if (decodedToken.data.role !== rolee) {
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
const path = 'https://muhalik.herokuapp.com'; // const path = 'http://localhost:5000';git 
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

/***/ 3:
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