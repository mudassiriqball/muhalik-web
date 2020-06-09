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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

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
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
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

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
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
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
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


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
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


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

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

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
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
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

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
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
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
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
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
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
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

    const newData = Object.assign({}, data, {
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


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
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

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
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
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
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

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
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
        } = __webpack_require__(/*! react-is */ "react-is");

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
    return this.notify(data);
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
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
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
    return (0, _utils.loadGetInitialProps)(App, {
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
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

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

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

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

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
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
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/pages/components/customer/categories-slider.js":
/*!************************************************************!*\
  !*** ./src/pages/components/customer/categories-slider.js ***!
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
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\categories-slider.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const CategoriesSlider = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1181811970", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'category-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.categories_list && props.categories_list.map((element, index) => __jsx("div", {
    key: index,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1181811970", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'item',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, element.value)), props.sub_categories_list && props.sub_categories_list.map((element, index) => __jsx("div", {
    key: index,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1181811970", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'item',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, element.value))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1181811970",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color],
    __self: undefined
  }, `.category-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;background:#e3edf7;box-shadow:-1px 0px 10px 1px ${_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color};width:100%;padding:0.5%;overflow-y:scroll;border-radius:90px;}.category-container.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.category-container.__jsx-style-dynamic-selector{-ms-overflow-style:none;}.item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#e3edf7;border-radius:50%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;padding:0.5%;margin:0.5%;font-size:14px;min-width:100px;min-height:100px;box-shadow:6px 6px 10px -1px rgba(0,0,0,0.30),-6px -6px 10px -1px rgba(255,255,255,0.30);border:1px solid rgba(0,0,0,0);-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.item.__jsx-style-dynamic-selector:hover{box-shadow:inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);border:1px solid rgba(0,0,0,0.01);cursor:pointer;-webkit-transition:translateY(2px);transition:translateY(2px);color:blue;font-size:15px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNYWhhYWxrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcY2F0ZWdvcmllcy1zbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUd5QyxBQVNQLEFBR1csQUFHWCxBQW9CbUMsYUF6QnBELFdBR0Esa0RBR3VCLG1CQUNELFNBaEJDLFNBaUJBLFVBaEJ1QywwREFDL0MsV0FDRSxhQUNLLENBY0ssS0FpQlcsWUE5QmYsbUJBQ3ZCLEdBOEJtQixlQUNZLDZDQWxCVCxpQkFtQlAsQ0FsQkUsVUFtQkUsR0FsQkgsWUFDRyxBQWtCbkIsZUFqQm9CLGdCQUNDLGlCQUN5RSx5RkFDM0QsK0JBQ0wsc0dBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNYWhhYWxrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcY2F0ZWdvcmllcy1zbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5cclxuY29uc3QgQ2F0ZWdvcmllc1NsaWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZycgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbjogJzAlJyB9fSAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdpdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdpdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZWRmNztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDBweCAxMHB4IDFweCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2VkZjc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCAtMXB4IHJnYmEoMCwwLDAsMC4zMCksIC02cHggLTZweCAxMHB4IC0xcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMwKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLml0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA2cHggLTFweCByZ2JhKDAsMCwwLDAuMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLTRweCAtNHB4IDZweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC41cHggLTAuNXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsMCwwLDAuMTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxMnB4IDEwcHggLTEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXNTbGlkZXIiXX0= */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\categories-slider.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoriesSlider);

/***/ }),

/***/ "./src/pages/components/customer/footer.js":
/*!*************************************************!*\
  !*** ./src/pages/components/customer/footer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = () => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("div", {
  style: styles.footer,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}, "Copyright@ 2020", __jsx("span", {
  style: {
    fontSize: 'medium',
    fontWeight: 'bold'
  },
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 21
  }
}, " Muhalik "), "- Online Shopping Website"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  style: styles.card,
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 17
  }
}, __jsx("h5", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 21
  }
}, "Follow Us"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'social-media',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 21
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebook"],
  onClick: () => {
    window.open('https://www.facebook.com/MUHALIK2020 ', "_blank");
  },
  style: styles.fb_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 28
  }
})), __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInstagram"],
  onClick: () => {
    window.open('https://instagram.com/muhalik2020?igshid=sno76rv9kp60 ', "_blank");
  },
  style: styles.instagram_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 28
  }
})), __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTwitter"],
  onClick: () => {
    window.open('https://twitter.com/muhalik2020?s=09 ', "_blank");
  },
  style: styles.twitter_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 28
  }
})), __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWhatsapp"],
  onClick: () => {
    window.open('https://www.snapchat.com/add/muhalik2020', "_blank");
  },
  style: styles.whatsapp_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 28
  }
})), __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSnapchat"],
  onClick: () => {
    window.open('https://www.snapchat.com/add/muhalik2020', "_blank");
  },
  style: styles.snapchat_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 28
  }
})))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 17
  }
}, __jsx("h5", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 21
  }
}, "Payment Method:"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'social-media',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 21
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCcVisa"],
  style: styles.visa_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 28
  }
})), __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCcMastercard"],
  style: styles.master_card_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 28
  }
})), __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 25
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCcPaypal"],
  style: styles.paypal_fontawesome,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 28
  }
}))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  noGutters: true,
  style: {
    padding: '4% 6%'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 13
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'mr-auto',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 17
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_header',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 21
  }
}, "Services"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 21
  }
}, "Need Help?"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 21
  }
}, "Contact Us"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 21
  }
}, "Submit Issue")), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'mr-auto',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 17
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_header',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 21
  }
}, "About Us"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 21
  }
}, "Know More About Us"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 21
  }
}, "Muhalik's Team")), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'mr-auto',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 17
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_header',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 21
  }
}, "Terms & Conditions"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 21
  }
}, "Terms"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 21
  }
}, "Conditions"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 21
  }
}, "Rules & Regulations")), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 17
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_header',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 21
  }
}, "Sell With Us"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 21
  }
}, "Be Muhalik's Part"), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2569640005", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize]]]) + " " + 'list_text',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 21
  }
}, "Learn More")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2569640005",
  dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize],
  __self: undefined
}, `.list_header.__jsx-style-dynamic-selector{background:none;font-weight:bold;white-space:nowrap;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color};font-size:18px;margin-bottom:8%;}.list_text.__jsx-style-dynamic-selector{background:none;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color};font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize};margin:3% 0%;white-space:nowrap;}p.__jsx-style-dynamic-selector{color:white;font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].form_label_fontsize};}.social-media.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#e3edf7;border-radius:5px;}h5.__jsx-style-dynamic-selector{color:#e3edf7;}a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#e3edf7;border-radius:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-text-decoration:none;text-decoration:none;padding:1%;margin:2%;box-shadow:6px 6px 10px -1px rgba(0,0,0,0.30),-6px -6px 10px -1px rgba(255,255,255,0.30);border:1px solid rgba(0,0,0,0);-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}a.__jsx-style-dynamic-selector:hover{box-shadow:inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);border:1px solid rgba(0,0,0,0.01);-webkit-transition:translateY(2px);transition:translateY(2px);}@media (max-width:768px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNYWhhYWxrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEYSxBQUdxQyxBQVFBLEFBT0osQUFJQyxBQU9DLEFBR0QsQUFrQm1DLEFBTTlCLFlBcEN2QixFQVVDLEFBNEJHLEVBdERrQixBQVFrQixXQThDbkMsTUFyRG1CLGtCQVFvQixBQU8zQyxDQWR1QyxzQkFpQmhCLEFBVUEsYUExQkosR0FPRixHQW9CSyxTQTFCRCxDQU9FLFFBb0JBLFFBMUJ2QixHQU9BLDZDQVEyQixxQ0FZQSxLQWVXLGtDQUNQLHVCQTNCUixtQkFFeEIsa0JBQUMsQUFVeUIsRUFnQnpCLGdEQWZlLFdBQ0QsVUFDZ0YseUZBQzNELCtCQUNMLHNHQUU5QiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTWFoYWFsa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYUNjVmlzYSwgZmFDY01hc3RlcmNhcmQsIGZhQ2NQYXlwYWwsXHJcbiAgICBmYUZhY2Vib29rLCBmYUluc3RhZ3JhbSwgZmFUd2l0dGVyLCBmYVdoYXRzYXBwLCBmYVNuYXBjaGF0XHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIENvcHlyaWdodEAgMjAyMFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnbWVkaXVtJywgZm9udFdlaWdodDogJ2JvbGQnLCB9fT4gTXVoYWxpayA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAtIE9ubGluZSBTaG9wcGluZyBXZWJzaXRlXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmNhcmR9IGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkZvbGxvdyBVczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbC1tZWRpYScgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2t9IG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9NVUhBTElLMjAyMCAnLCBcIl9ibGFua1wiKSB9fSBzdHlsZT17c3R5bGVzLmZiX2ZvbnRhd2Vzb21lfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0gb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbignaHR0cHM6Ly9pbnN0YWdyYW0uY29tL211aGFsaWsyMDIwP2lnc2hpZD1zbm83NnJ2OWtwNjAgJywgXCJfYmxhbmtcIikgfX0gc3R5bGU9e3N0eWxlcy5pbnN0YWdyYW1fZm9udGF3ZXNvbWV9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbignaHR0cHM6Ly90d2l0dGVyLmNvbS9tdWhhbGlrMjAyMD9zPTA5ICcsIFwiX2JsYW5rXCIpIH19IHN0eWxlPXtzdHlsZXMudHdpdHRlcl9mb250YXdlc29tZX0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFXaGF0c2FwcH0gb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuc25hcGNoYXQuY29tL2FkZC9tdWhhbGlrMjAyMCcsIFwiX2JsYW5rXCIpIH19IHN0eWxlPXtzdHlsZXMud2hhdHNhcHBfZm9udGF3ZXNvbWV9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU25hcGNoYXR9IG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LnNuYXBjaGF0LmNvbS9hZGQvbXVoYWxpazIwMjAnLCBcIl9ibGFua1wiKSB9fSBzdHlsZT17c3R5bGVzLnNuYXBjaGF0X2ZvbnRhd2Vzb21lfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5QYXltZW50IE1ldGhvZDo8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtbWVkaWEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2NWaXNhfSBzdHlsZT17c3R5bGVzLnZpc2FfZm9udGF3ZXNvbWV9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2NNYXN0ZXJjYXJkfSBzdHlsZT17c3R5bGVzLm1hc3Rlcl9jYXJkX2ZvbnRhd2Vzb21lfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNjUGF5cGFsfSBzdHlsZT17c3R5bGVzLnBheXBhbF9mb250YXdlc29tZX0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IHBhZGRpbmc6ICc0JSA2JScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfaGVhZGVyJz5TZXJ2aWNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPk5lZWQgSGVscD88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF90ZXh0Jz5Db250YWN0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+U3VibWl0IElzc3VlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF9oZWFkZXInPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+S25vdyBNb3JlIEFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+TXVoYWxpaydzIFRlYW08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF9oZWFkZXInPlRlcm1zICYgQ29uZGl0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPlRlcm1zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+Q29uZGl0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPlJ1bGVzICYgUmVndWxhdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF9oZWFkZXInPlNlbGwgV2l0aCBVczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPkJlIE11aGFsaWsncyBQYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+TGVhcm4gTW9yZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmxpc3RfaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saXN0X3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyUgMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2VkZjc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UzZWRmNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCAtMXB4IHJnYmEoMCwwLDAsMC4zMCksIC02cHggLTZweCAxMHB4IC0xcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMwKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA2cHggLTFweCByZ2JhKDAsMCwwLDAuMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLTRweCAtNHB4IDZweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC41cHggLTAuNXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsMCwwLDAuMTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxMnB4IDEwcHggLTEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBwYWRkaW5nOiAnMiUgNSUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIG1hcmdpbjogJzAlIDUlJ1xyXG4gICAgfSxcclxuXHJcbiAgICBmYl9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzNCNTc5RCcsXHJcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIGluc3RhZ3JhbV9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnI0M5MzA4QScsXHJcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIHR3aXR0ZXJfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzYlJyxcclxuICAgICAgICBjb2xvcjogJyM1RUFBREUnLFxyXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgICB3aGF0c2FwcF9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzREQzc1OScsXHJcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIHNuYXBjaGF0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc2JScsXHJcbiAgICAgICAgY29sb3I6ICcjZTZlNjAwJyxcclxuICAgICAgICB3aWR0aDogJzQ0cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzQ0cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzQ0cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnNDRweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIHZpc2FfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzYlJyxcclxuICAgICAgICBjb2xvcjogJyMyMDIyNzYnLFxyXG4gICAgICAgIHdpZHRoOiAnNDVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc0NXB4JyxcclxuICAgIH0sXHJcbiAgICBtYXN0ZXJfY2FyZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnI0ZGNUYwMScsXHJcbiAgICAgICAgd2lkdGg6ICc0NXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQ1cHgnLFxyXG4gICAgfSxcclxuICAgIHBheXBhbF9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzA1OUNERScsXHJcbiAgICAgICAgd2lkdGg6ICc0NXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQ1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\footer.js */`));

const styles = {
  footer: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].admin_primry_color}`,
    padding: '2% 5%'
  },
  card: {
    margin: '0% 5%'
  },
  fb_fontawesome: {
    marginRight: '6%',
    color: '#3B579D',
    width: '40px',
    height: '40px',
    maxHeight: '40px',
    maxWidth: '40px'
  },
  instagram_fontawesome: {
    marginRight: '6%',
    color: '#C9308A',
    width: '40px',
    height: '40px',
    maxHeight: '40px',
    maxWidth: '40px'
  },
  twitter_fontawesome: {
    marginRight: '6%',
    color: '#5EAADE',
    width: '40px',
    height: '40px',
    maxHeight: '40px',
    maxWidth: '40px'
  },
  whatsapp_fontawesome: {
    marginRight: '6%',
    color: '#4DC759',
    width: '40px',
    height: '40px',
    maxHeight: '40px',
    maxWidth: '40px'
  },
  snapchat_fontawesome: {
    marginRight: '6%',
    color: '#e6e600',
    width: '44px',
    height: '44px',
    maxHeight: '44px',
    maxWidth: '44px'
  },
  visa_fontawesome: {
    marginRight: '6%',
    color: '#202276',
    width: '45px',
    height: '45px',
    maxHeight: '45px',
    maxWidth: '45px'
  },
  master_card_fontawesome: {
    marginRight: '6%',
    color: '#FF5F01',
    width: '45px',
    height: '45px',
    maxHeight: '45px',
    maxWidth: '45px'
  },
  paypal_fontawesome: {
    marginRight: '6%',
    color: '#059CDE',
    width: '45px',
    height: '45px',
    maxHeight: '45px',
    maxWidth: '45px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/pages/components/customer/layout.js":
/*!*************************************************!*\
  !*** ./src/pages/components/customer/layout.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar */ "./src/pages/components/customer/toolbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/pages/components/customer/footer.js");
/* harmony import */ var _stick_bottom_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stick-bottom-navbar */ "./src/pages/components/customer/stick-bottom-navbar.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
})), props.carosuel, __jsx("div", {
  className: "jsx-3623398901" + " " + 'childrens',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, props.children), __jsx("div", {
  className: "jsx-3623398901" + " " + 'display_in_md_lg',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, __jsx(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "jsx-3623398901" + " " + 'display_in_sm_xs',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, __jsx(_stick_bottom_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3623398901",
  __self: undefined
}, "@media (min-width:767px){.display_in_md_lg.jsx-3623398901{display:block;}.display_in_sm_xs.jsx-3623398901{display:none;}.childrens.jsx-3623398901{padding:1% 3% 5% 3%;}}@media (max-width:767px){.display_in_md_lg.jsx-3623398901{display:none;}.display_in_sm_xs.jsx-3623398901{display:block;}.childrens.jsx-3623398901{padding:0.5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNYWhhYWxrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFLZ0IsQUFHQSxBQUV5QixBQU16QixBQUdBLEFBRWtCLGFBYmpCLEFBUUEsQUFNQSxDQWpCQSxBQWNBLE1BUkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE1haGFhbGtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGN1c3RvbWVyXFxsYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICcuL3Rvb2xiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuXHJcbmltcG9ydCBTdGlja3lCb3R0b21OYXZiYXIgZnJvbSAnLi9zdGljay1ib3R0b20tbmF2YmFyJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxUb29sYmFyIHsuLi5wcm9wc30gLz5cclxuICAgICAgICB7cHJvcHMuY2Fyb3N1ZWx9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoaWxkcmVucyc+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZyc+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fc21feHMnPlxyXG4gICAgICAgICAgICA8U3RpY2t5Qm90dG9tTmF2YmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgIC5kaXNwbGF5X2luX21kX2xne1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGlzcGxheV9pbl9zbV94c3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW5ze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDMlIDUlIDMlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgLmRpc3BsYXlfaW5fbWRfbGd7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpc3BsYXlfaW5fc21feHN7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbnN7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Mahaalk\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/components/customer/products.js":
/*!***************************************************!*\
  !*** ./src/pages/components/customer/products.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Products extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "m-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        border: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      style: {
        background: 'none',
        border: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 29
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 33
      }
    }, "New Arrival")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    }, 1))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "m-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        border: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      style: {
        background: 'none',
        border: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 33
      }
    }, "New Arrival")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    }, 1)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      noGutters: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "m-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        border: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      style: {
        background: 'none',
        border: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }, "Recomended For You")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 37
      }
    }, 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: styles.col,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    }, 1)))))));
  }

}

const styles = {
  col: {
    background: 'lightgray',
    padding: '10%',
    margin: '0% 1%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/pages/components/customer/slider-carousel.js":
/*!**********************************************************!*\
  !*** ./src/pages/components/customer/slider-carousel.js ***!
  \**********************************************************/
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
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\slider-carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const images = [{
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

const SliderCarousel = props => {
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "w-100 bg-white",
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: index,
    onSelect: handleSelect,
    indicators: false,
    interval: "1500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, images && images.map((element, i) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxHeight: '400px',
      width: '100vw',
      maxWidth: '100%'
    },
    className: "d-block bg-cover",
    src: element.img,
    alt: "Slide {i}",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Slide ", index + 1, " label"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, "Nulla vitae elit libero, a pharetra augue mollis interdum."))))));
};

const styles = {};
/* harmony default export */ __webpack_exports__["default"] = (SliderCarousel);

/***/ }),

/***/ "./src/pages/components/customer/stick-bottom-navbar.js":
/*!**************************************************************!*\
  !*** ./src/pages/components/customer/stick-bottom-navbar.js ***!
  \**************************************************************/
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
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\stick-bottom-navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const StickyBottomNavbar = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "white",
    variant: "dark",
    fixed: "bottom",
    className: "p-0 m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "d-inline-flex align-items-center w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["877515880", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#home",
    className: "text-center mr-auto p-0 m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHome"],
    style: styles.nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["877515880", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'label',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Home")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["877515880", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#home",
    className: "text-center mr-auto p-0 m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHome"],
    style: styles.nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["877515880", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'label',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "Home")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["877515880", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#home",
    className: "text-center mr-auto p-0 m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"],
    style: styles.nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["877515880", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'label',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, "Account")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "877515880",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color],
    __self: undefined
  }, `.label.__jsx-style-dynamic-selector{font-size:13px;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color};p-0;m-0;}.label.__jsx-style-dynamic-selector:hover{color:${_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color},;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNYWhhYWxrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcc3RpY2stYm90dG9tLW5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBR29DLEFBT3BCLGVBTndDLHFCQU12QyxjQUxPLElBRVIsSUFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTWFoYWFsa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXHN0aWNrLWJvdHRvbS1uYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd24sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYUhvbWVcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IFN0aWNreUJvdHRvbU5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhciBiZz1cIndoaXRlXCIgdmFyaWFudD1cImRhcmtcIiBmaXhlZD1cImJvdHRvbVwiIGNsYXNzTmFtZT0ncC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1yLWF1dG8gcC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5Ib21lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1yLWF1dG8gcC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5Ib21lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1yLWF1dG8gcC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5BY2NvdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIHAtMDtcclxuICAgICAgICAgICAgICAgICAgICBtLTBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sYWJlbDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzAlJ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUJvdHRvbU5hdmJhciJdfQ== */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\stick-bottom-navbar.js */`));
};

const styles = {
  nav_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color}`,
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px',
    margin: '0px',
    padding: '0%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (StickyBottomNavbar);

/***/ }),

/***/ "./src/pages/components/customer/toolbar.js":
/*!**************************************************!*\
  !*** ./src/pages/components/customer/toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\toolbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;










const categoryArray = [{
  value: 'All'
}, {
  value: 'Machinay'
}, {
  value: 'Clothes'
}];

const Toolbar = props => {
  let loggedIn = false;
  let dashboard_href = '';

  if (props.token == '') {
    loggedIn = false;
  } else if (props.token == 'customer') {
    loggedIn = true;
    dashboard_href = './index';
  } else if (props.token == 'vendor') {
    loggedIn = true;
    dashboard_href = './vendor';
  } else if (props.token == 'admin') {
    loggedIn = true;
    dashboard_href = './admin';
  }

  const [searchType, setSearchType] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState('All');
  const [selectedLang, setSelectedLang] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState('En');
  const [isCategoryOpen, setIsCategoryOpen] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [isShopOpen, setIsShopOpen] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [isProductOpen, setIsProductOpen] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [hoverCategory, setHoverCategory] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [hoverProducts, setHoverProducts] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [hoverShops, setHoverShops] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [category_id, setCategory_id] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState('');
  const [isSticky, setSticky] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const ref = react__WEBPACK_IMPORTED_MODULE_10___default.a.useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_10___default.a.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  function toggle() {
    setIsCategoryOpen(!isCategoryOpen);
  }

  function categoryMouseEnter(index) {
    const copyArray = Object.assign([], props.categories_list);
    setCategory_id(copyArray[index]._id);
  }

  function categoryMouseLeave() {
    setCategory_id('');
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("div", {
    ref: ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + `sticky-wrapper${isSticky ? ' sticky' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'navbar w-100 p-0 m-0 sticky-inner',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'row w-100 m-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
    className: "d-inline-flex align-items-center m-0 p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    className: "d-inline-flex align-items-center p-0 m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'display_in_md_lg pr-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "muhalik.jpg",
    className: "display_in_md_lg",
    roundedCircle: true,
    fluid: true,
    style: {
      width: '60px',
      display: 'flex',
      margin: '0%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  })), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + " text_animation mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, "Mahaalk", __jsx("span", {
    style: {
      fontSize: '15px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'display_in_md_lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 81
    }
  }, "@2020")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "align-items-center m-0 p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'input-group',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'display_in_md_lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Prepend, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"],
    variant: "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 49
    }
  }, searchType), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    className: "super-colors",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 49
    }
  }, categoryArray.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    key: index,
    onClick: () => setSearchType(element.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 57
    }
  }, element.value)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    placeholder: "Search here",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"],
    style: styles.search_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 45
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "auto",
    md: "auto",
    sm: 0,
    xs: 0,
    className: "m-0 p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'display_in_md_lg align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "d-inline-flex align-items-center w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "./login",
    className: "ml-2 align-items-center",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'fontawesome',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"],
    style: styles.nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 53
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
    style: styles.nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 49
    }
  }, "Login/Join")), __jsx("div", {
    href: "#",
    style: {
      zIndex: 1
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'ml-2 d-flex flex-column',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'fontawesome',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "icons",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLanguage"],
    style: styles.nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 49
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "p-0 m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link,
    className: "d-inline-flex m-0 p-0 align-items-center",
    style: {
      color: 'gray'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'nav_link_text p-0 m-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 53
    }
  }, selectedLang)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    className: "super-colors",
    style: {
      zIndex: 100
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    onClick: () => setSelectedLang('En'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 53
    }
  }, "English"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    onClick: () => setSelectedLang("Ar"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 53
    }
  }, "العربية")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    className: "ml-2",
    style: styles.nav_link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'fontawesome',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShoppingCart"],
    style: styles.nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 49
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 45
    }
  }, "Cart")), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      fluid: true,
      style: {
        width: '35px',
        maxWidth: '35px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 65
      }
    }),
    className: "ml-2",
    id: "nav-dropdown",
    alignRight: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 53
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "./vendor",
    className: "d-inline-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 53
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    className: "d-inline-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 53
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 49
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    onClick: props.logout,
    className: "d-inline-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 53
    }
  }, "Logout"))) : null)))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'display_in_md_lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    className: "ml-3 mb-2 mr-3 p-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "w-100 d-inline-flex",
    style: {
      boxShadow: '-1px 0px 10px 1px rgba(0,0,0,0.12) inset',
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    onMouseOver: () => {
      setIsCategoryOpen(true), setHoverCategory(true);
    },
    onMouseLeave: () => {
      setIsCategoryOpen(false), setHoverCategory(false);
    },
    show: isCategoryOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    style: {
      paddingLeft: '1.5vw',
      paddingRight: '1.5vw',
      border: hoverCategory ? '1px solid lightgray' : null,
      background: hoverCategory ? 'white' : null,
      margin: hoverCategory ? '-1px' : '0px',
      color: hoverCategory ? `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}` : 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faListUl"],
    style: hoverCategory ? styles.second_nav_fontawesome_hover : styles.second_nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 37
    }
  }), __jsx("div", {
    style: {
      color: hoverCategory ? `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}` : 'white'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text ml-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, " Categories ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    style: {
      minWidth: category_id == '' ? '30.45vw' : '60vw',
      left: '-1px',
      borderTop: 'none',
      borderTopLeftRadius: '0px'
    },
    className: "m-0 p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    noGutters: true,
    onMouseLeave: () => categoryMouseLeave(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      height: '45vw',
      overflowY: 'auto',
      zIndex: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 41
    }
  }, props.categories_list && props.categories_list.map((element, index) => __jsx("div", {
    key: index,
    onMouseOver: () => categoryMouseEnter(index),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + "category_list_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 49
    }
  }, element.value, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 53
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronRight"],
    pull: "right",
    style: styles.faChevronRight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 53
    }
  })))), category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      height: '45vwx',
      overflowY: 'auto',
      boxShadow: '-2px 0px 10px 1px rgba(0,0,0,0.12)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 45
    }
  }, props.sub_categories_list && props.sub_categories_list.map((element, index) => element.category_id == category_id ? __jsx("div", {
    key: index,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + "category_list_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 57
    }
  }, element.value) : null)) : null))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    onMouseOver: () => {
      setIsShopOpen(true), setHoverShops(true);
    },
    onMouseLeave: () => {
      setIsShopOpen(false), setHoverShops(false);
    },
    show: isShopOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    style: {
      paddingLeft: '1vw',
      paddingRight: '1vw',
      border: hoverShops ? '1px solid lightgray' : null,
      background: hoverShops ? 'white' : null,
      margin: hoverShops ? '-1px' : '0px',
      color: hoverShops ? `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}` : 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStoreAlt"],
    style: hoverShops ? styles.second_nav_fontawesome_hover : styles.second_nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 37
    }
  }), __jsx("div", {
    style: {
      color: hoverShops ? `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}` : 'white'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text ml-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 37
    }
  }, " Shops ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    style: {
      minWidth: '80vw',
      minHeight: '45vw',
      left: '-1px',
      borderTop: 'none',
      borderTopLeftRadius: '0px'
    },
    className: "m-0 pt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 37
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 41
    }
  }, "Shops Will Show Here")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    onMouseOver: () => {
      setIsProductOpen(true), setHoverProducts(true);
    },
    onMouseLeave: () => {
      setIsProductOpen(false), setHoverProducts(false);
    },
    show: isProductOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    style: {
      paddingLeft: '1vw',
      paddingRight: '1vw',
      border: hoverProducts ? '1px solid lightgray' : null,
      background: hoverProducts ? 'white' : null,
      margin: hoverProducts ? '-1px' : '0px',
      color: hoverProducts ? `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}` : 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faProductHunt"],
    style: hoverProducts ? styles.second_nav_fontawesome_hover : styles.second_nav_fontawesome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 37
    }
  }), __jsx("div", {
    style: {
      color: hoverProducts ? `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}` : 'white'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text ml-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 37
    }
  }, " Products ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    style: {
      minWidth: '80vw',
      left: '-87%',
      minHeight: '45vw',
      borderTop: 'none',
      borderTopLeftRadius: '0px'
    },
    className: "m-0 pt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    noGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 37
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }, "Products Will Show Here")))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    style: {
      paddingLeft: '0.5vw',
      paddingRight: '0.5vw'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 37
    }
  }, "About Us"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    style: {
      paddingLeft: '0.5vw',
      paddingRight: '0.5vw'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 37
    }
  }, "Feedback"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    style: {
      paddingLeft: '0.5vw',
      paddingRight: '0.5vw'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 37
    }
  }, "Help?"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    style: {
      paddingLeft: '0.5vw',
      paddingRight: '0.5vw'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 37
    }
  }, "Sell With Muhalik"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    style: {
      paddingLeft: '1.5vw',
      paddingRight: '1.5vw'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1467328862", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 37
    }
  }, "Get Muhalik's App"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1467328862",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color],
    __self: undefined
  }, `.sticky-wrapper.__jsx-style-dynamic-selector{position:relative;}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector{background:white;position:fixed;top:0;left:0;right:0;z-index:1000;}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector{padding:5px 3%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color};}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector .text_animation.__jsx-style-dynamic-selector{color:white;}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector .nav_link_text.__jsx-style-dynamic-selector{color:white;}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector .nav_link_text.__jsx-style-dynamic-selector:hover{color:lightgray;}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector .fontawesome.__jsx-style-dynamic-selector{color:white;}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector .fontawesome.__jsx-style-dynamic-selector:hover{color:lightgray;}.fontawesome.__jsx-style-dynamic-selector{color:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color};}.text_animation.__jsx-style-dynamic-selector{-webkit-animation:mymove-__jsx-style-dynamic-selector 5s infinite;animation:mymove-__jsx-style-dynamic-selector 5s infinite;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color};font-family:Verdana,Geneva,sans-serif;margin:0%;}@-webkit-keyframes mymove-__jsx-style-dynamic-selector{50%{text-shadow:10px 10px 10px green;}}@keyframes mymove-__jsx-style-dynamic-selector{50%{text-shadow:10px 10px 10px green;}}.nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:13px;padding:0px;margin:0px;color:gray;}.second_nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:14px;color:white;}.nav_link_text.__jsx-style-dynamic-selector:hover,.second_nav_link_text.__jsx-style-dynamic-selector:hover{color:lightgray;}.category_list_item.__jsx-style-dynamic-selector{cursor:pointer;width:98%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;padding:2% 4%;margin:1% -2% 0% 2%;color:gray;}.category_list_item.__jsx-style-dynamic-selector:hover{z-index:100;color:#005ce6;border-radius:2px;box-shadow:-1px 0px 10px 1px rgba(0,0,0,0.12);}.row.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:10px 3%;}.input-group.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding-left:7%;padding-right:12%;}@media (max-width:992px){.input-group.__jsx-style-dynamic-selector{padding:0%;}}@media (min-width:767px){}@media (max-width:767px){.display_in_md_lg.__jsx-style-dynamic-selector{display:none;}.input-group.__jsx-style-dynamic-selector{padding:0%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNYWhhYWxrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwVGlCLEFBRzJDLEFBSUQsQUFTRixBQUlILEFBSUEsQUFHSSxBQUdKLEFBR0ksQUFJbUIsQUFJTixBQU9RLEFBSWxCLEFBT0EsQUFLSCxBQUlELEFBVUgsQUFNWSxBQU1MLEFBUUosQUFVRSxBQU1GLFdBZmYsQUFnQkEsQ0E5RkosQUFJQSxBQU1BLEFBZ0RrQixDQThCZCxFQTNGTCxBQW1EZSxDQXpDZCxBQU1BLEFBK0JBLENBekRtQixDQUpuQixDQWlEbUIsQUFPQSxNQVVLLENBVUYsTUF2RVosQ0F1Q2dDLENBTTFCLEFBT0EsQ0F2QmhCLEdBNUJXLE1BdUV1QyxDQXRFdEMsQ0E0Q0csQUFPZixPQWxEaUIsRUFNakIsRUF1Q0QsU0E1Q0MsRUE0Q0Esc0JBeUJBLEdBU3dCLFNBTkcsc0JBM0NZLEdBNkJoQixnQ0E1QnFCLG9DQTJDekIsQUFNQyxFQWhETixTQTJDVSxDQTFDeEIsSUFnRHNCLFNBckJILEVBZ0JuQixPQU1BLE1BckJrQixjQUNNLG9CQUNULFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE1haGFhbGtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGN1c3RvbWVyXFx0b29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIE5hdmJhciwgTmF2LCBGb3JtLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgSW1hZ2UsIEJ1dHRvbixcclxuICAgIE5hdkRyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgQ2FyZCwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwLFxyXG4gICAgUm93LCBDb2wsIE92ZXJsYXlUcmlnZ2VyLCBQb3BvdmVyXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYVNob3BwaW5nQ2FydCwgZmFTaWduTGFuZ3VhZ2VcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcnJheSA9IFt7IHZhbHVlOiAnQWxsJyB9LCB7IHZhbHVlOiAnTWFjaGluYXknIH0sIHsgdmFsdWU6ICdDbG90aGVzJyB9XVxyXG5jb25zdCBUb29sYmFyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgbGV0IGxvZ2dlZEluID0gZmFsc2VcclxuICAgIGxldCBkYXNoYm9hcmRfaHJlZiA9ICcnXHJcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gJycpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2luZGV4J1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAndmVuZG9yJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vdmVuZG9yJ1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9hZG1pbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtzZWxlY3RlZExhbmcsIHNldFNlbGVjdGVkTGFuZ10gPSBSZWFjdC51c2VTdGF0ZSgnRW4nKVxyXG4gICAgY29uc3QgW2lzQ2F0ZWdvcnlPcGVuLCBzZXRJc0NhdGVnb3J5T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1Nob3BPcGVuLCBzZXRJc1Nob3BPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzUHJvZHVjdE9wZW4sIHNldElzUHJvZHVjdE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW2hvdmVyQ2F0ZWdvcnksIHNldEhvdmVyQ2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaG92ZXJQcm9kdWN0cywgc2V0SG92ZXJQcm9kdWN0c10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtob3ZlclNob3BzLCBzZXRIb3ZlclNob3BzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yeV9pZCwgc2V0Q2F0ZWdvcnlfaWRdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG5cclxuICAgIGNvbnN0IFtpc1N0aWNreSwgc2V0U3RpY2t5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0U3RpY2t5KHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4oIWlzQ2F0ZWdvcnlPcGVuKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmNhdGVnb3JpZXNfbGlzdClcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZChjb3B5QXJyYXlbaW5kZXhdLl9pZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGlja3ktd3JhcHBlciR7aXNTdGlja3kgPyAnIHN0aWNreScgOiAnJ31gfSByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciB3LTEwMCBwLTAgbS0wIHN0aWNreS1pbm5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgdy0xMDAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9J2F1dG8nIG1kPSdhdXRvJyBzbT0nYXV0bycgeHM9J2F1dG8nIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbS0wIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHAtMCBtLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZyBwci0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZycgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzYwcHgnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbjogJzAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiB0ZXh0X2FuaW1hdGlvbiBtci0yXCI+TWFoYWFsazxzcGFuIGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZycgc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fT5AMjAyMDwvc3Bhbj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIG0tMCBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBhcz17QnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtCdXR0b259IHZhcmlhbnQ9J3N1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0U2VhcmNoVHlwZShlbGVtZW50LnZhbHVlKX0+e2VsZW1lbnQudmFsdWV9PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdzdWNjZXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSBzdHlsZT17c3R5bGVzLnNlYXJjaF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPSdhdXRvJyBtZD0nYXV0bycgc209ezB9IHhzPXswfSBjbGFzc05hbWU9J20tMCBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0nbWwtMiBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udGF3ZXNvbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5Mb2dpbi9Kb2luPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaHJlZj0nIycgY2xhc3NOYW1lPSdtbC0yIGQtZmxleCBmbGV4LWNvbHVtbicgc3R5bGU9e3sgekluZGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250YXdlc29tZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdpY29ucycgaWNvbj17ZmFMYW5ndWFnZX0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGNsYXNzTmFtZT0ncC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggbS0wIHAtMCBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCBwLTAgbS0wJz57c2VsZWN0ZWRMYW5nfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwic3VwZXItY29sb3JzXCIgc3R5bGU9e3sgekluZGV4OiAxMDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZExhbmcoJ0VuJyl9PkVuZ2xpc2g8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZExhbmcoXCJBclwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wi2KfZhNi52LHYqNmK2KlcIn08L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9J21sLTInIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250YXdlc29tZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5DYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9ezxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgbWF4V2lkdGg6ICczNXB4JyB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC0yJyBpZD1cIm5hdi1kcm9wZG93blwiIGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e2Rhc2hib2FyZF9ocmVmfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPScuL3ZlbmRvcicgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e3Byb3BzLmxvZ291dH0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBvd2VyT2ZmfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9J21sLTMgbWItMiBtci0zIHAtMCAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0ndy0xMDAgZC1pbmxpbmUtZmxleCcgc3R5bGU9e3sgYm94U2hhZG93OiAnLTFweCAwcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjEyKSBpbnNldCcsIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4geyBzZXRJc0NhdGVnb3J5T3Blbih0cnVlKSwgc2V0SG92ZXJDYXRlZ29yeSh0cnVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyBzZXRJc0NhdGVnb3J5T3BlbihmYWxzZSksIHNldEhvdmVyQ2F0ZWdvcnkoZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNDYXRlZ29yeU9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMS41dncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMS41dncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBob3ZlckNhdGVnb3J5ID8gJzFweCBzb2xpZCBsaWdodGdyYXknIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGhvdmVyQ2F0ZWdvcnkgPyAnd2hpdGUnIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogaG92ZXJDYXRlZ29yeSA/ICctMXB4JyA6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhvdmVyQ2F0ZWdvcnkgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaXN0VWx9IHN0eWxlPXtob3ZlckNhdGVnb3J5ID8gc3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWVfaG92ZXIgOiBzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0IG1sLTInIHN0eWxlPXt7IGNvbG9yOiBob3ZlckNhdGVnb3J5ID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICd3aGl0ZScgfX0+IENhdGVnb3JpZXMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6IGNhdGVnb3J5X2lkID09ICcnID8gJzMwLjQ1dncnIDogJzYwdncnLCBsZWZ0OiAnLTFweCcsIGJvcmRlclRvcDogJ25vbmUnLCBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMHB4JyB9fSBjbGFzc05hbWU9J20tMCBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBvbk1vdXNlTGVhdmU9eygpID0+IGNhdGVnb3J5TW91c2VMZWF2ZSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGhlaWdodDogJzQ1dncnLCBvdmVyZmxvd1k6ICdhdXRvJywgekluZGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBwdWxsPVwicmlnaHRcIiBzdHlsZT17c3R5bGVzLmZhQ2hldnJvblJpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgaGVpZ2h0OiAnNDV2d3gnLCBvdmVyZmxvd1k6ICdhdXRvJywgYm94U2hhZG93OiAnLTJweCAwcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjEyKScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gY2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvIERyb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaG9wcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7IHNldElzU2hvcE9wZW4odHJ1ZSksIHNldEhvdmVyU2hvcHModHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNTaG9wT3BlbihmYWxzZSksIHNldEhvdmVyU2hvcHMoZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNTaG9wT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMXZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogaG92ZXJTaG9wcyA/ICcxcHggc29saWQgbGlnaHRncmF5JyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBob3ZlclNob3BzID8gJ3doaXRlJyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGhvdmVyU2hvcHMgPyAnLTFweCcgOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBob3ZlclNob3BzID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdG9yZUFsdH0gc3R5bGU9e2hvdmVyU2hvcHMgPyBzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZV9ob3ZlciA6IHN0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQgbWwtMicgc3R5bGU9e3sgY29sb3I6IGhvdmVyU2hvcHMgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ3doaXRlJyB9fT4gU2hvcHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6ICc4MHZ3JywgbWluSGVpZ2h0OiAnNDV2dycsIGxlZnQ6ICctMXB4JywgYm9yZGVyVG9wOiAnbm9uZScsIGJvcmRlclRvcExlZnRSYWRpdXM6ICcwcHgnIH19IGNsYXNzTmFtZT0nbS0wIHB0LTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5TaG9wcyBXaWxsIFNob3cgSGVyZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3RzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHsgc2V0SXNQcm9kdWN0T3Blbih0cnVlKSwgc2V0SG92ZXJQcm9kdWN0cyh0cnVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyBzZXRJc1Byb2R1Y3RPcGVuKGZhbHNlKSwgc2V0SG92ZXJQcm9kdWN0cyhmYWxzZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXtpc1Byb2R1Y3RPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzF2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBob3ZlclByb2R1Y3RzID8gJzFweCBzb2xpZCBsaWdodGdyYXknIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGhvdmVyUHJvZHVjdHMgPyAnd2hpdGUnIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogaG92ZXJQcm9kdWN0cyA/ICctMXB4JyA6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhvdmVyUHJvZHVjdHMgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17aG92ZXJQcm9kdWN0cyA/IHN0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lX2hvdmVyIDogc3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCBtbC0yJyBzdHlsZT17eyBjb2xvcjogaG92ZXJQcm9kdWN0cyA/IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgOiAnd2hpdGUnIH19PiBQcm9kdWN0cyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBzdHlsZT17eyBtaW5XaWR0aDogJzgwdncnLCBsZWZ0OiAnLTg3JScsIG1pbkhlaWdodDogJzQ1dncnLCBib3JkZXJUb3A6ICdub25lJywgYm9yZGVyVG9wTGVmdFJhZGl1czogJzBweCcgfX0gY2xhc3NOYW1lPSdtLTAgcHQtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Qcm9kdWN0cyBXaWxsIFNob3cgSGVyZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMC41dncnLCBwYWRkaW5nUmlnaHQ6ICcwLjV2dycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+QWJvdXQgVXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMC41dncnLCBwYWRkaW5nUmlnaHQ6ICcwLjV2dycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+RmVlZGJhY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMC41dncnLCBwYWRkaW5nUmlnaHQ6ICcwLjV2dycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+SGVscD88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMC41dncnLCBwYWRkaW5nUmlnaHQ6ICcwLjV2dycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+U2VsbCBXaXRoIE11aGFsaWs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMS41dncnLCBwYWRkaW5nUmlnaHQ6ICcxLjV2dycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+R2V0IE11aGFsaWsncyBBcHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQgPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreSAuc3RpY2t5LWlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGlja3kgLnN0aWNreS1pbm5lciAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5IC5zdGlja3ktaW5uZXIgLnRleHRfYW5pbWF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreSAuc3RpY2t5LWlubmVyIC5uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5IC5zdGlja3ktaW5uZXIgLm5hdl9saW5rX3RleHQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5IC5zdGlja3ktaW5uZXIgLmZvbnRhd2Vzb21lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5IC5zdGlja3ktaW5uZXIgLmZvbnRhd2Vzb21lOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mb250YXdlc29tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0X2FuaW1hdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBteW1vdmUgNXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbXltb3ZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHt0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggZ3JlZW47fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRfbmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmtfdGV4dDpob3ZlciwgLnNlY29uZF9uYXZfbGlua190ZXh0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiUgNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMSUgLTIlIDAlIDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWNlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDBweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0LWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTIlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGlzcGxheV9pbl9tZF9sZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgT3Zlcmx5UG9wb3ZlciA9IChwcm9wcykgPT4gKFxyXG4gICAgPE92ZXJsYXlUcmlnZ2VyIHRyaWdnZXI9e1snaG92ZXInLCAnZm9jdXMnXX0gcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17XHJcbiAgICAgICAgPFBvcG92ZXIgaWQ9XCJwb3BvdmVyLWJhc2ljXCI+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLlRpdGxlIGFzPVwiaDRcIj57cHJvcHMudGl0bGV9PC9Qb3BvdmVyLlRpdGxlPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgIH0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgIH0sXHJcbiAgICBzZWFyY2hfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCdcclxuICAgIH0sXHJcbiAgICBuYXZfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBtaW5XaWR0aDogJzI0cHgnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjRweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCAyMHB4IDBweCAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRfbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZF9uYXZfZm9udGF3ZXNvbWVfaG92ZXI6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgZmFDaGV2cm9uUmlnaHQ6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4vLyAgICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4vLyAgICAgICAgICAgICA8bWFpbj5cclxuLy8gICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmcgPGNvZGU+cGFnZXMvaW5kZXguanM8L2NvZGU+XHJcbi8vICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TGVhcm4gJnJhcnI7PC9oMz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxhXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXNcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FeGFtcGxlcyAmcmFycjs8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyBwcm9qZWN0cy48L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8YVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL2ltcG9ydD9maWx0ZXI9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRlcGxveSAmcmFycjs8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxyXG4vLyAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbi8vICAgICAgICAgICAgIDxmb290ZXI+XHJcbi8vICAgICAgICAgICAgICAgICA8YVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbi8vICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieXsnICd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG5cclxuLy8gICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4vLyAgICAgICAgIC5jb250YWluZXIge1xyXG4vLyAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgbWFpbiB7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbi8vICAgICAgICAgICBmbGV4OiAxO1xyXG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBmb290ZXIge1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgZm9vdGVyIGltZyB7XHJcbi8vICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgZm9vdGVyIGEge1xyXG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGEge1xyXG4vLyAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAudGl0bGUgYSB7XHJcbi8vICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4vLyAgICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4vLyAgICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC50aXRsZSB7XHJcbi8vICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC50aXRsZSxcclxuLy8gICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4vLyAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuLy8gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGNvZGUge1xyXG4vLyAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuLy8gICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4vLyAgICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuZ3JpZCB7XHJcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuLy8gICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbi8vICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmNhcmQge1xyXG4vLyAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4vLyAgICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4vLyAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4vLyAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5jYXJkOmhvdmVyLFxyXG4vLyAgICAgICAgIC5jYXJkOmZvY3VzLFxyXG4vLyAgICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbi8vICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuLy8gICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5jYXJkIGgzIHtcclxuLy8gICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmNhcmQgcCB7XHJcbi8vICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbi8vICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmxvZ28ge1xyXG4vLyAgICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuLy8gICAgICAgICAgIC5ncmlkIHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4vLyAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4vLyAgICAgICAgIGh0bWwsXHJcbi8vICAgICAgICAgYm9keSB7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuLy8gICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuLy8gICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICoge1xyXG4vLyAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIGB9PC9zdHlsZT5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfVxyXG4iXX0= */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\components\\customer\\toolbar.js */`));
};

const OverlyPopover = props => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
  trigger: ['hover', 'focus'],
  placement: "bottom",
  overlay: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    id: "popover-basic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Title, {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }
  }, props.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 13
    }
  }, props.content)),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 438,
    columnNumber: 5
  }
}, props.children);

const styles = {
  nav_link: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '13px'
  },
  search_fontawesome: {
    color: 'white',
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px',
    fontWeight: 'normal'
  },
  nav_fontawesome: {
    minWidth: '24px',
    minHeight: '24px',
    maxHeight: '24px',
    maxWidth: '24px'
  },
  dropDown_fontawesome: {
    color: 'gray',
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  second_nav_fontawesome: {
    color: 'white',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  second_nav_fontawesome_hover: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  faChevronRight: {
    color: 'gray',
    width: '10px',
    height: '10px',
    maxHeight: '10px',
    maxWidth: '10px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar); // import Head from 'next/head'
// export default function Home() {
//     return (
//         <div className="container">
//             <Head>
//                 <title>Create Next App</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <main>
//                 <h1 className="title">
//                     Welcome to <a href="https://nextjs.org">Next.js!</a>
//                 </h1>
//                 <p className="description">
//                     Get started by editing <code>pages/index.js</code>
//                 </p>
//                 <div className="grid">
//                     <a href="https://nextjs.org/docs" className="card">
//                         <h3>Documentation &rarr;</h3>
//                         <p>Find in-depth information about Next.js features and API.</p>
//                     </a>
//                     <a href="https://nextjs.org/learn" className="card">
//                         <h3>Learn &rarr;</h3>
//                         <p>Learn about Next.js in an interactive course with quizzes!</p>
//                     </a>
//                     <a
//                         href="https://github.com/vercel/next.js/tree/master/examples"
//                         className="card"
//                     >
//                         <h3>Examples &rarr;</h3>
//                         <p>Discover and deploy boilerplate example Next.js projects.</p>
//                     </a>
//                     <a
//                         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//                         className="card"
//                     >
//                         <h3>Deploy &rarr;</h3>
//                         <p>
//                             Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//                     </a>
//                 </div>
//             </main>
//             <footer>
//                 <a
//                     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Powered by{' '}
//                     <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//                 </a>
//             </footer>
//             <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }
//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }
//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         footer img {
//           margin-left: 0.5rem;
//         }
//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         a {
//           color: inherit;
//           text-decoration: none;
//         }
//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }
//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }
//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }
//         .title,
//         .description {
//           text-align: center;
//         }
//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }
//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }
//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;
//           max-width: 800px;
//           margin-top: 3rem;
//         }
//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }
//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }
//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }
//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }
//         .logo {
//           height: 1em;
//         }
//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>
//             <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//         </div>
//     )
// }

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_customer_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customer/layout */ "./src/pages/components/customer/layout.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-typical */ "react-typical");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_typical__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/customer/slider-carousel */ "./src/pages/components/customer/slider-carousel.js");
/* harmony import */ var _components_customer_categories_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/customer/categories-slider */ "./src/pages/components/customer/categories-slider.js");
/* harmony import */ var _components_customer_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/customer/products */ "./src/pages/components/customer/products.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














let animation = __jsx("h3", {
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
}, __jsx(react_typical__WEBPACK_IMPORTED_MODULE_8___default.a, {
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

async function getStaticProps() {
  const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_7__["default"].PATH + '/api/categories/categories';
  const data = [];
  await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(response => {
    data = response.data.category.docs;
  }).catch(error => {
    console.log('Caterories Fetchig Error: ', error);
  });
  return {
    props: {
      data
    }
  };
}

class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "logout", () => {
      if (Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__["removeTokenFromStorage"])()) {
        this.setState({
          jwt_token: ''
        }); // window.location.reload(true);

        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.reload('/index');
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace('/index');
      } else {
        alert('Logout Failed');
      }
    });

    this.state = {
      token: '',
      jwt_token: '',
      products_list: [],
      categories_list: this.props.data,
      sub_categories_list: []
    };
  }

  async componentDidMount() {
    const token = await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__["getDecodedTokenFromStorage"])();

    if (token !== null) {
      this.setState({
        jwt_token: token.role
      });
    } // const url = MuhalikConfig.PATH + '/api/categories/categories';
    // const currentComponent = this;
    // await axios.get(url).then((response) => {
    //     currentComponent.setState({
    //         categories_list: response.data.category.docs,
    //         sub_categories_list: response.data.sub_category.docs
    //     });
    // }).catch((error) => {
    //     console.log('Caterories Fetchig Error: ', error)
    // })

  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      style: styles.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }, "Muhalik"), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    }), __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
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
        lineNumber: 93,
        columnNumber: 25
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    })), animation, __jsx(_components_customer_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      token: this.state.jwt_token,
      logout: this.logout,
      categories_list: this.state.categories_list,
      sub_categories_list: this.state.sub_categories_list,
      carosuel: __jsx(_components_customer_slider_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 35
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, __jsx(_components_customer_categories_slider__WEBPACK_IMPORTED_MODULE_10__["default"], {
      categories_list: this.state.categories_list,
      sub_categories_list: this.state.sub_categories_list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }), __jsx(_components_customer_products__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }))));
  }

}

const styles = {
  body: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].body_color}`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    minHeight: '100vh'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/sdk/core/authentication-service.js":
/*!************************************************!*\
  !*** ./src/sdk/core/authentication-service.js ***!
  \************************************************/
/*! exports provided: saveTokenToStorage, getDecodedTokenFromStorage, getTokenFromStorage, removeTokenFromStorage, checkAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokenToStorage", function() { return saveTokenToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecodedTokenFromStorage", function() { return getDecodedTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenFromStorage", function() { return getTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTokenFromStorage", function() { return removeTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-localstorage */ "reactjs-localstorage");
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Mahaalk\\muhalikweb\\src\\sdk\\core\\authentication-service.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// export default AuthenticationService;




const AuthenticationService = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
});

async function saveTokenToStorage(token) {
  await reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].set('token', token);
}
function getDecodedTokenFromStorage() {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
    return decodedToken.data;
  } catch (error) {
    return null;
  }
}
function getTokenFromStorage() {
  return reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
}
function removeTokenFromStorage() {
  try {
    reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].remove('token');
    return true;
  } catch (error) {
    console.log("error:", error);
    return false;
  }
}
function checkAuth(rolee) {
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
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/index');
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
const path = 'https://muhalikweb.herokuapp.com'; // const path = 'http://localhost:5000';

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  // body_color: '#F1F1F1',
  body_color: '#F2F3F7',
  // body_color: '#e3edf7',
  // Fontsize for all the labels of any form control (input, textbox etc):
  form_label_fontsize: '13px',
  card_header_fontsize: '14px',
  card_header_background: 'lightgray',
  react_select_styles: {
    control: base => _objectSpread(_objectSpread({}, base), {}, {
      fontSize: '13px'
    }),
    dropdownIndicator: base => _objectSpread(_objectSpread({}, base), {}, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    clearIndicator: base => _objectSpread(_objectSpread({}, base), {}, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    option: provided => _objectSpread(_objectSpread({}, provided), {}, {
      fontSize: '13px',
      display: 'absolute',
      zIndex: '1000'
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyleSheet);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MudassirR\Desktop\Mahaalk\muhalikweb\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

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

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-typical":
/*!********************************!*\
  !*** external "react-typical" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typical");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tZXIvY2F0ZWdvcmllcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL2N1c3RvbWVyL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci9zbGlkZXItY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tZXIvc3RpY2stYm90dG9tLW5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci90b29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2RrL211aGFsaWsuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZVNoZWV0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImp3dC1kZWNvZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGljYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdGpzLWxvY2Fsc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkNhdGVnb3JpZXNTbGlkZXIiLCJHbG9iYWxTdHlsZVNoZWV0IiwicHJpbXJ5X2NvbG9yIiwiY2F0ZWdvcmllc19saXN0IiwibWFwIiwiZWxlbWVudCIsImluZGV4Iiwic3ViX2NhdGVnb3JpZXNfbGlzdCIsIkZvb3RlciIsInByaW1hcnlfdGV4dF9jb2xvciIsImZvcm1fbGFiZWxfZm9udHNpemUiLCJzdHlsZXMiLCJmb290ZXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjYXJkIiwiZmFGYWNlYm9vayIsIm9wZW4iLCJmYl9mb250YXdlc29tZSIsImZhSW5zdGFncmFtIiwiaW5zdGFncmFtX2ZvbnRhd2Vzb21lIiwiZmFUd2l0dGVyIiwidHdpdHRlcl9mb250YXdlc29tZSIsImZhV2hhdHNhcHAiLCJ3aGF0c2FwcF9mb250YXdlc29tZSIsImZhU25hcGNoYXQiLCJzbmFwY2hhdF9mb250YXdlc29tZSIsImZhQ2NWaXNhIiwidmlzYV9mb250YXdlc29tZSIsImZhQ2NNYXN0ZXJjYXJkIiwibWFzdGVyX2NhcmRfZm9udGF3ZXNvbWUiLCJmYUNjUGF5cGFsIiwicGF5cGFsX2ZvbnRhd2Vzb21lIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJhZG1pbl9wcmltcnlfY29sb3IiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIkxheW91dCIsImNhcm9zdWVsIiwiUHJvZHVjdHMiLCJzdGF0ZSIsImJvcmRlciIsImNvbCIsImltYWdlcyIsImltZyIsIlNsaWRlckNhcm91c2VsIiwic2V0SW5kZXgiLCJ1c2VTdGF0ZSIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJpIiwiU3RpY2t5Qm90dG9tTmF2YmFyIiwiZmFIb21lIiwibmF2X2ZvbnRhd2Vzb21lIiwiZmFVc2VyIiwiY2F0ZWdvcnlBcnJheSIsIlRvb2xiYXIiLCJsb2dnZWRJbiIsImRhc2hib2FyZF9ocmVmIiwidG9rZW4iLCJzZWFyY2hUeXBlIiwic2V0U2VhcmNoVHlwZSIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsImlzQ2F0ZWdvcnlPcGVuIiwic2V0SXNDYXRlZ29yeU9wZW4iLCJpc1Nob3BPcGVuIiwic2V0SXNTaG9wT3BlbiIsImlzUHJvZHVjdE9wZW4iLCJzZXRJc1Byb2R1Y3RPcGVuIiwiaG92ZXJDYXRlZ29yeSIsInNldEhvdmVyQ2F0ZWdvcnkiLCJob3ZlclByb2R1Y3RzIiwic2V0SG92ZXJQcm9kdWN0cyIsImhvdmVyU2hvcHMiLCJzZXRIb3ZlclNob3BzIiwiY2F0ZWdvcnlfaWQiLCJzZXRDYXRlZ29yeV9pZCIsImlzU3RpY2t5Iiwic2V0U3RpY2t5IiwidXNlUmVmIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiY2F0ZWdvcnlNb3VzZUVudGVyIiwiY29weUFycmF5IiwiYXNzaWduIiwiX2lkIiwiY2F0ZWdvcnlNb3VzZUxlYXZlIiwiZGlzcGxheSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwiZmFTZWFyY2giLCJzZWFyY2hfZm9udGF3ZXNvbWUiLCJuYXZfbGluayIsImZhVXNlclBsdXMiLCJ6SW5kZXgiLCJmYUxhbmd1YWdlIiwiTmF2IiwiZmFTaG9wcGluZ0NhcnQiLCJkcm9wRG93bl9mb250YXdlc29tZSIsImxvZ291dCIsImZhUG93ZXJPZmYiLCJib3hTaGFkb3ciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImZhTGlzdFVsIiwic2Vjb25kX25hdl9mb250YXdlc29tZV9ob3ZlciIsInNlY29uZF9uYXZfZm9udGF3ZXNvbWUiLCJtaW5XaWR0aCIsImxlZnQiLCJib3JkZXJUb3AiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwib3ZlcmZsb3dZIiwiZmFDaGV2cm9uUmlnaHQiLCJmYVN0b3JlQWx0IiwibWluSGVpZ2h0IiwiZmFQcm9kdWN0SHVudCIsIk92ZXJseVBvcG92ZXIiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJhbmltYXRpb24iLCJwb3NpdGlvbiIsImJvdHRvbSIsIkluZmluaXR5IiwiZ2V0U3RhdGljUHJvcHMiLCJNdWhhbGlrQ29uZmlnIiwiUEFUSCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0ZWdvcnkiLCJkb2NzIiwiY2F0Y2giLCJsb2ciLCJJbmRleCIsInJlbW92ZVRva2VuRnJvbVN0b3JhZ2UiLCJzZXRTdGF0ZSIsImp3dF90b2tlbiIsImFsZXJ0IiwicHJvZHVjdHNfbGlzdCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0RGVjb2RlZFRva2VuRnJvbVN0b3JhZ2UiLCJyb2xlIiwiYm9keSIsImJvZHlfY29sb3IiLCJyaWdodCIsIkF1dGhlbnRpY2F0aW9uU2VydmljZSIsInNhdmVUb2tlblRvU3RvcmFnZSIsInJlYWN0TG9jYWxTdG9yYWdlIiwiZGVjb2RlZFRva2VuIiwiZ2V0VG9rZW5Gcm9tU3RvcmFnZSIsInJlbW92ZSIsImNoZWNrQXV0aCIsInJvbGVlIiwiZnVsbE5hbWUiLCJjYXJkX2hlYWRlcl9mb250c2l6ZSIsImNhcmRfaGVhZGVyX2JhY2tncm91bmQiLCJyZWFjdF9zZWxlY3Rfc3R5bGVzIiwiY29udHJvbCIsImJhc2UiLCJkcm9wZG93bkluZGljYXRvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiY2xlYXJJbmRpY2F0b3IiLCJvcHRpb24iLCJwcm92aWRlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVB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Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM3NCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBSXlFLFNBQVMsR0FDVDtBQUFJLE9BQUssRUFBRTtBQUFFckcsY0FBVSxFQUFFLE9BQWQ7QUFBdUJJLFNBQUssRUFBRSxPQUE5QjtBQUF1Q2tHLFlBQVEsRUFBRSxPQUFqRDtB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RztBQUdmQyxtQkFBYSxFQUFFLENBSEE7QUFJZnBLLGNBQVEsRUFBRTtBQUpLLE1BTEY7QUFXakJxSyxrQkFBYyxFQUFHSixJQUFELG9DQUNUQSxJQURTO0FBRVpFLGdCQUFVLEVBQUUsQ0FGQTtBQUdaQyxtQkFBYSxFQUFFLENBSEg7QUFJWnBLLGNBQVEsRUFBRTtBQUpFLE1BWEM7QUFpQmpCc0ssVUFBTSxFQUFFQyxRQUFRLG9DQUNUQSxRQURTO0FBRVp2SyxjQUFRLEVBQUUsTUFGRTtBQUdadUYsYUFBTyxFQUFFLFVBSEc7QUFJWk8sWUFBTSxFQUFFO0FBSkk7QUFqQkM7QUFqQkYsQ0FBdkI7QUEyQ2UxRywrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQSwrRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCB7IFJvdywgQ29sLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yaWVzU2xpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnJyByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luOiAnMCUnIH19IC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2l0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2l0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDEwcHggMXB4ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZWRmNztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IC0xcHggcmdiYSgwLDAsMCwwLjMwKSwgLTZweCAtNnB4IDEwcHggLTFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCA0cHggNHB4IDZweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCAtNHB4IC00cHggNnB4IC0xcHggcmdiYSgyNTUsMjU1LDI1NSwwLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0wLjVweCAtMC41cHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cHggMC41cHggMHB4IHJnYmEoMCwwLDAsMC4xNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMHB4IDEycHggMTBweCAtMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllc1NsaWRlciIsImltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYUNjVmlzYSwgZmFDY01hc3RlcmNhcmQsIGZhQ2NQYXlwYWwsXHJcbiAgICBmYUZhY2Vib29rLCBmYUluc3RhZ3JhbSwgZmFUd2l0dGVyLCBmYVdoYXRzYXBwLCBmYVNuYXBjaGF0XHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIENvcHlyaWdodEAgMjAyMFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnbWVkaXVtJywgZm9udFdlaWdodDogJ2JvbGQnLCB9fT4gTXVoYWxpayA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAtIE9ubGluZSBTaG9wcGluZyBXZWJzaXRlXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLmNhcmR9IGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkZvbGxvdyBVczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbC1tZWRpYScgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2t9IG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9NVUhBTElLMjAyMCAnLCBcIl9ibGFua1wiKSB9fSBzdHlsZT17c3R5bGVzLmZiX2ZvbnRhd2Vzb21lfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0gb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbignaHR0cHM6Ly9pbnN0YWdyYW0uY29tL211aGFsaWsyMDIwP2lnc2hpZD1zbm83NnJ2OWtwNjAgJywgXCJfYmxhbmtcIikgfX0gc3R5bGU9e3N0eWxlcy5pbnN0YWdyYW1fZm9udGF3ZXNvbWV9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbignaHR0cHM6Ly90d2l0dGVyLmNvbS9tdWhhbGlrMjAyMD9zPTA5ICcsIFwiX2JsYW5rXCIpIH19IHN0eWxlPXtzdHlsZXMudHdpdHRlcl9mb250YXdlc29tZX0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFXaGF0c2FwcH0gb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuc25hcGNoYXQuY29tL2FkZC9tdWhhbGlrMjAyMCcsIFwiX2JsYW5rXCIpIH19IHN0eWxlPXtzdHlsZXMud2hhdHNhcHBfZm9udGF3ZXNvbWV9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU25hcGNoYXR9IG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LnNuYXBjaGF0LmNvbS9hZGQvbXVoYWxpazIwMjAnLCBcIl9ibGFua1wiKSB9fSBzdHlsZT17c3R5bGVzLnNuYXBjaGF0X2ZvbnRhd2Vzb21lfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5QYXltZW50IE1ldGhvZDo8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtbWVkaWEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2NWaXNhfSBzdHlsZT17c3R5bGVzLnZpc2FfZm9udGF3ZXNvbWV9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2NNYXN0ZXJjYXJkfSBzdHlsZT17c3R5bGVzLm1hc3Rlcl9jYXJkX2ZvbnRhd2Vzb21lfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNjUGF5cGFsfSBzdHlsZT17c3R5bGVzLnBheXBhbF9mb250YXdlc29tZX0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IHBhZGRpbmc6ICc0JSA2JScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfaGVhZGVyJz5TZXJ2aWNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPk5lZWQgSGVscD88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF90ZXh0Jz5Db250YWN0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+U3VibWl0IElzc3VlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF9oZWFkZXInPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+S25vdyBNb3JlIEFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+TXVoYWxpaydzIFRlYW08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF9oZWFkZXInPlRlcm1zICYgQ29uZGl0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPlRlcm1zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+Q29uZGl0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPlJ1bGVzICYgUmVndWxhdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdF9oZWFkZXInPlNlbGwgV2l0aCBVczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0X3RleHQnPkJlIE11aGFsaWsncyBQYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RfdGV4dCc+TGVhcm4gTW9yZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmxpc3RfaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saXN0X3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyUgMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2VkZjc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UzZWRmNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCAtMXB4IHJnYmEoMCwwLDAsMC4zMCksIC02cHggLTZweCAxMHB4IC0xcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMwKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA2cHggLTFweCByZ2JhKDAsMCwwLDAuMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgLTRweCAtNHB4IDZweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC41cHggLTAuNXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsMCwwLDAuMTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxMnB4IDEwcHggLTEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBwYWRkaW5nOiAnMiUgNSUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIG1hcmdpbjogJzAlIDUlJ1xyXG4gICAgfSxcclxuXHJcbiAgICBmYl9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzNCNTc5RCcsXHJcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIGluc3RhZ3JhbV9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnI0M5MzA4QScsXHJcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIHR3aXR0ZXJfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzYlJyxcclxuICAgICAgICBjb2xvcjogJyM1RUFBREUnLFxyXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgICB3aGF0c2FwcF9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzREQzc1OScsXHJcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIHNuYXBjaGF0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc2JScsXHJcbiAgICAgICAgY29sb3I6ICcjZTZlNjAwJyxcclxuICAgICAgICB3aWR0aDogJzQ0cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzQ0cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzQ0cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnNDRweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIHZpc2FfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzYlJyxcclxuICAgICAgICBjb2xvcjogJyMyMDIyNzYnLFxyXG4gICAgICAgIHdpZHRoOiAnNDVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc0NXB4JyxcclxuICAgIH0sXHJcbiAgICBtYXN0ZXJfY2FyZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnI0ZGNUYwMScsXHJcbiAgICAgICAgd2lkdGg6ICc0NXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQ1cHgnLFxyXG4gICAgfSxcclxuICAgIHBheXBhbF9mb250YXdlc29tZToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNiUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzA1OUNERScsXHJcbiAgICAgICAgd2lkdGg6ICc0NXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzQ1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vdG9vbGJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5cclxuaW1wb3J0IFN0aWNreUJvdHRvbU5hdmJhciBmcm9tICcuL3N0aWNrLWJvdHRvbS1uYXZiYXInXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPFRvb2xiYXIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgIHtwcm9wcy5jYXJvc3VlbH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hpbGRyZW5zJz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnJz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9zbV94cyc+XHJcbiAgICAgICAgICAgIDxTdGlja3lCb3R0b21OYXZiYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgLmRpc3BsYXlfaW5fbWRfbGd7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXNwbGF5X2luX3NtX3hze1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbnN7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSUgMyUgNSUgMyU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICAuZGlzcGxheV9pbl9tZF9sZ3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGlzcGxheV9pbl9zbV94c3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuc3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5cclxuY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdtLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TmV3IEFycml2YWw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nbS0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5ldyBBcnJpdmFsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdtLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXI6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UmVjb21lbmRlZCBGb3IgWW91PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY29sOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpZ2h0Z3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzEwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnMCUgMSUnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiLCJpbXBvcnQgeyBDYXJvdXNlbCwgQ29sLCBSb3csIExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzEuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdjYXJvdXNlbF9pbWcyLmpwZycgfSxcclxuICAgIHsgaW1nOiAnY2Fyb3VzZWxfaW1nMy5qcGcnIH0sXHJcbiAgICB7IGltZzogJ2Nhcm91c2VsX2ltZzQuanBnJyB9LFxyXG4gICAgeyBpbWc6ICdoYXNzYW4uanBnJyB9XHJcbl1cclxuXHJcbmNvbnN0IFNsaWRlckNhcm91c2VsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGNsYXNzTmFtZT0ndy0xMDAgYmctd2hpdGUnIG5vR3V0dGVycyA+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IGluZGljYXRvcnM9e2ZhbHNlfSBpbnRlcnZhbD0nMTUwMCc+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzICYmIGltYWdlcy5tYXAoKGVsZW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnNDAwcHgnLCB3aWR0aDogJzEwMHZ3JywgbWF4V2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBiZy1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnQuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdTbGlkZSB7aX0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNsaWRlIHtpbmRleCArIDF9IGxhYmVsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyQ2Fyb3VzZWwiLCJpbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd24sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhTGlzdFVsLCBmYUhvbWVcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IFN0aWNreUJvdHRvbU5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhciBiZz1cIndoaXRlXCIgdmFyaWFudD1cImRhcmtcIiBmaXhlZD1cImJvdHRvbVwiIGNsYXNzTmFtZT0ncC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1yLWF1dG8gcC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5Ib21lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1yLWF1dG8gcC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5Ib21lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1yLWF1dG8gcC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5BY2NvdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIHAtMDtcclxuICAgICAgICAgICAgICAgICAgICBtLTBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sYWJlbDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzAlJ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUJvdHRvbU5hdmJhciIsImltcG9ydCB7XHJcbiAgICBOYXZiYXIsIE5hdiwgRm9ybSwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEltYWdlLCBCdXR0b24sXHJcbiAgICBOYXZEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIENhcmQsIERyb3Bkb3duLCBCdXR0b25Hcm91cCxcclxuICAgIFJvdywgQ29sLCBPdmVybGF5VHJpZ2dlciwgUG9wb3ZlclxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVNlYXJjaCwgZmFVc2VyUGx1cywgZmFMYW5ndWFnZSwgZmFQb3dlck9mZiwgZmFVc2VyLFxyXG4gICAgZmFDYXJ0UGx1cywgZmFIYW5kc0hlbHBpbmcsIGZhUGVuLCBmYVNpZ25PdXRBbHQsIGZhR2xvYmUsXHJcbiAgICBmYUx1Z2dhZ2VDYXJ0LCBmYUZpbGVJbnZvaWNlRG9sbGFyLCBmYUxpc3RBbHQsIGZhRWRpdCxcclxuICAgIGZhU3RvcmVBbHQsIGZhQ2hldnJvbkRvd24sIGZhQ2hldnJvblJpZ2h0LCBmYUxpc3RVbCwgZmFTaG9wcGluZ0NhcnQsIGZhU2lnbkxhbmd1YWdlXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyByZW1vdmVUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbeyB2YWx1ZTogJ0FsbCcgfSwgeyB2YWx1ZTogJ01hY2hpbmF5JyB9LCB7IHZhbHVlOiAnQ2xvdGhlcycgfV1cclxuY29uc3QgVG9vbGJhciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGxldCBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICBsZXQgZGFzaGJvYXJkX2hyZWYgPSAnJ1xyXG4gICAgaWYgKHByb3BzLnRva2VuID09ICcnKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSBmYWxzZVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnY3VzdG9tZXInKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9pbmRleCdcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ3ZlbmRvcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL3ZlbmRvcidcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ2FkbWluJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vYWRtaW4nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFR5cGUsIHNldFNlYXJjaFR5cGVdID0gUmVhY3QudXNlU3RhdGUoJ0FsbCcpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gUmVhY3QudXNlU3RhdGUoJ0VuJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wT3Blbiwgc2V0SXNTaG9wT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1Byb2R1Y3RPcGVuLCBzZXRJc1Byb2R1Y3RPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtob3ZlckNhdGVnb3J5LCBzZXRIb3ZlckNhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hvdmVyUHJvZHVjdHMsIHNldEhvdmVyUHJvZHVjdHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaG92ZXJTaG9wcywgc2V0SG92ZXJTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgICBjb25zdCBbaXNTdGlja3ksIHNldFN0aWNreV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFN0aWNreShyZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKCFpc0NhdGVnb3J5T3BlbilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy5jYXRlZ29yaWVzX2xpc3QpXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoY29weUFycmF5W2luZGV4XS5faWQpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoJycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3RpY2t5LXdyYXBwZXIke2lzU3RpY2t5ID8gJyBzdGlja3knIDogJyd9YH0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXIgdy0xMDAgcC0wIG0tMCBzdGlja3ktaW5uZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHctMTAwIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPSdhdXRvJyBtZD0nYXV0bycgc209J2F1dG8nIHhzPSdhdXRvJyBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG0tMCBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcgcHItMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcnIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICc2MHB4JywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICcwJScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCIgdGV4dF9hbmltYXRpb24gbXItMlwiPk1haGFhbGs8c3BhbiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcnIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcgfX0+QDIwMjA8L3NwYW4+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBtLTAgcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gYXM9e0J1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PSdzdWNjZXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwic3VwZXItY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFR5cGUoZWxlbWVudC52YWx1ZSl9PntlbGVtZW50LnZhbHVlfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5zZWFyY2hfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz0nYXV0bycgbWQ9J2F1dG8nIHNtPXswfSB4cz17MH0gY2xhc3NOYW1lPSdtLTAgcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScuL2xvZ2luJyBjbGFzc05hbWU9J21sLTIgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnRhd2Vzb21lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+TG9naW4vSm9pbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGhyZWY9JyMnIGNsYXNzTmFtZT0nbWwtMiBkLWZsZXggZmxleC1jb2x1bW4nIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udGF3ZXNvbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0naWNvbnMnIGljb249e2ZhTGFuZ3VhZ2V9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9J3AtMCBtLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IG0tMCBwLTAgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQgcC0wIG0tMCc+e3NlbGVjdGVkTGFuZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT1cInN1cGVyLWNvbG9yc1wiIHN0eWxlPXt7IHpJbmRleDogMTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRMYW5nKCdFbicpfT5FbmdsaXNoPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRMYW5nKFwiQXJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcItin2YTYudix2KjZitipXCJ9PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtbC0yJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udGF3ZXNvbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+Q2FydDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXs8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMzVweCcsIG1heFdpZHRoOiAnMzVweCcgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtMicgaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj0nLi92ZW5kb3InIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlByb2ZpbGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvbkNsaWNrPXtwcm9wcy5sb2dvdXR9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSdtbC0zIG1iLTIgbXItMyBwLTAgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J3ctMTAwIGQtaW5saW5lLWZsZXgnIHN0eWxlPXt7IGJveFNoYWRvdzogJy0xcHggMHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC4xMikgaW5zZXQnLCBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHsgc2V0SXNDYXRlZ29yeU9wZW4odHJ1ZSksIHNldEhvdmVyQ2F0ZWdvcnkodHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNDYXRlZ29yeU9wZW4oZmFsc2UpLCBzZXRIb3ZlckNhdGVnb3J5KGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e2lzQ2F0ZWdvcnlPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzEuNXZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzEuNXZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogaG92ZXJDYXRlZ29yeSA/ICcxcHggc29saWQgbGlnaHRncmF5JyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBob3ZlckNhdGVnb3J5ID8gJ3doaXRlJyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGhvdmVyQ2F0ZWdvcnkgPyAnLTFweCcgOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBob3ZlckNhdGVnb3J5ID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdFVsfSBzdHlsZT17aG92ZXJDYXRlZ29yeSA/IHN0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lX2hvdmVyIDogc3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCBtbC0yJyBzdHlsZT17eyBjb2xvcjogaG92ZXJDYXRlZ29yeSA/IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgOiAnd2hpdGUnIH19PiBDYXRlZ29yaWVzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHN0eWxlPXt7IG1pbldpZHRoOiBjYXRlZ29yeV9pZCA9PSAnJyA/ICczMC40NXZ3JyA6ICc2MHZ3JywgbGVmdDogJy0xcHgnLCBib3JkZXJUb3A6ICdub25lJywgYm9yZGVyVG9wTGVmdFJhZGl1czogJzBweCcgfX0gY2xhc3NOYW1lPSdtLTAgcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgb25Nb3VzZUxlYXZlPXsoKSA9PiBjYXRlZ29yeU1vdXNlTGVhdmUoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBoZWlnaHQ6ICc0NXZ3Jywgb3ZlcmZsb3dZOiAnYXV0bycsIHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiIG9uTW91c2VPdmVyPXsoKSA9PiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gcHVsbD1cInJpZ2h0XCIgc3R5bGU9e3N0eWxlcy5mYUNoZXZyb25SaWdodH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGhlaWdodDogJzQ1dnd4Jywgb3ZlcmZsb3dZOiAnYXV0bycsIGJveFNoYWRvdzogJy0ycHggMHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC4xMiknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhdGVnb3J5X2lkID09IGNhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8LyBEcm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU2hvcHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4geyBzZXRJc1Nob3BPcGVuKHRydWUpLCBzZXRIb3ZlclNob3BzKHRydWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7IHNldElzU2hvcE9wZW4oZmFsc2UpLCBzZXRIb3ZlclNob3BzKGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e2lzU2hvcE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMXZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzF2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGhvdmVyU2hvcHMgPyAnMXB4IHNvbGlkIGxpZ2h0Z3JheScgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaG92ZXJTaG9wcyA/ICd3aGl0ZScgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBob3ZlclNob3BzID8gJy0xcHgnIDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaG92ZXJTaG9wcyA/IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgOiAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtob3ZlclNob3BzID8gc3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWVfaG92ZXIgOiBzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0IG1sLTInIHN0eWxlPXt7IGNvbG9yOiBob3ZlclNob3BzID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICd3aGl0ZScgfX0+IFNob3BzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHN0eWxlPXt7IG1pbldpZHRoOiAnODB2dycsIG1pbkhlaWdodDogJzQ1dncnLCBsZWZ0OiAnLTFweCcsIGJvcmRlclRvcDogJ25vbmUnLCBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMHB4JyB9fSBjbGFzc05hbWU9J20tMCBwdC0zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+U2hvcHMgV2lsbCBTaG93IEhlcmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7IHNldElzUHJvZHVjdE9wZW4odHJ1ZSksIHNldEhvdmVyUHJvZHVjdHModHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNQcm9kdWN0T3BlbihmYWxzZSksIHNldEhvdmVyUHJvZHVjdHMoZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNQcm9kdWN0T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMXZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogaG92ZXJQcm9kdWN0cyA/ICcxcHggc29saWQgbGlnaHRncmF5JyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBob3ZlclByb2R1Y3RzID8gJ3doaXRlJyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGhvdmVyUHJvZHVjdHMgPyAnLTFweCcgOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBob3ZlclByb2R1Y3RzID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e2hvdmVyUHJvZHVjdHMgPyBzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZV9ob3ZlciA6IHN0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQgbWwtMicgc3R5bGU9e3sgY29sb3I6IGhvdmVyUHJvZHVjdHMgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ3doaXRlJyB9fT4gUHJvZHVjdHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6ICc4MHZ3JywgbGVmdDogJy04NyUnLCBtaW5IZWlnaHQ6ICc0NXZ3JywgYm9yZGVyVG9wOiAnbm9uZScsIGJvcmRlclRvcExlZnRSYWRpdXM6ICcwcHgnIH19IGNsYXNzTmFtZT0nbS0wIHB0LTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UHJvZHVjdHMgV2lsbCBTaG93IEhlcmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzAuNXZ3JywgcGFkZGluZ1JpZ2h0OiAnMC41dncnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzAuNXZ3JywgcGFkZGluZ1JpZ2h0OiAnMC41dncnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkZlZWRiYWNrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzAuNXZ3JywgcGFkZGluZ1JpZ2h0OiAnMC41dncnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkhlbHA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzAuNXZ3JywgcGFkZGluZ1JpZ2h0OiAnMC41dncnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNlbGwgV2l0aCBNdWhhbGlrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEuNXZ3JywgcGFkZGluZ1JpZ2h0OiAnMS41dncnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkdldCBNdWhhbGlrJ3MgQXBwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkID5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGlja3ktd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGlja3kgLnN0aWNreS1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5IC5zdGlja3ktaW5uZXIgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreSAuc3RpY2t5LWlubmVyIC50ZXh0X2FuaW1hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGlja3kgLnN0aWNreS1pbm5lciAubmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreSAuc3RpY2t5LWlubmVyIC5uYXZfbGlua190ZXh0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreSAuc3RpY2t5LWlubmVyIC5mb250YXdlc29tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreSAuc3RpY2t5LWlubmVyIC5mb250YXdlc29tZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9udGF3ZXNvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGV4dF9hbmltYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbXltb3ZlIDVzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwJSB7dGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGdyZWVuO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kX25hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQ6aG92ZXIsIC5zZWNvbmRfbmF2X2xpbmtfdGV4dDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDQlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDElIC0yJSAwJSAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDVjZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5wdXQtZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpc3BsYXlfaW5fbWRfbGcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE92ZXJseVBvcG92ZXIgPSAocHJvcHMpID0+IChcclxuICAgIDxPdmVybGF5VHJpZ2dlciB0cmlnZ2VyPXtbJ2hvdmVyJywgJ2ZvY3VzJ119IHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9e1xyXG4gICAgICAgIDxQb3BvdmVyIGlkPVwicG9wb3Zlci1iYXNpY1wiPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5UaXRsZSBhcz1cImg0XCI+e3Byb3BzLnRpdGxlfTwvUG9wb3Zlci5UaXRsZT5cclxuICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICB9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbik7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnXHJcbiAgICB9LFxyXG4gICAgbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgbWluV2lkdGg6ICcyNHB4JyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI0cHgnLFxyXG4gICAgfSxcclxuICAgIGRyb3BEb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kX25hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRfbmF2X2ZvbnRhd2Vzb21lX2hvdmVyOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvblJpZ2h0OiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzEwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTBweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgPEhlYWQ+XHJcbi8vICAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuLy8gICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuLy8gICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuLy8gICAgICAgICAgICAgPG1haW4+XHJcbi8vICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzITwvYT5cclxuLy8gICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5nIDxjb2RlPnBhZ2VzL2luZGV4LmpzPC9jb2RlPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxlYXJuICZyYXJyOzwvaDM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8YVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RXhhbXBsZXMgJnJhcnI7PC9oMz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGFcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9pbXBvcnQ/ZmlsdGVyPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXBsb3kgJnJhcnI7PC9oMz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cclxuLy8gICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8L21haW4+XHJcblxyXG4vLyAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4vLyAgICAgICAgICAgICAgICAgPGFcclxuLy8gICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbi8vICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuLy8gICAgICAgICAuY29udGFpbmVyIHtcclxuLy8gICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIG1haW4ge1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4vLyAgICAgICAgICAgZmxleDogMTtcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgZm9vdGVyIHtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGZvb3RlciBpbWcge1xyXG4vLyAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGZvb3RlciBhIHtcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBhIHtcclxuLy8gICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4vLyAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLnRpdGxlIGEge1xyXG4vLyAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuLy8gICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuLy8gICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4vLyAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAudGl0bGUge1xyXG4vLyAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAudGl0bGUsXHJcbi8vICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuLy8gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbi8vICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBjb2RlIHtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuLy8gICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmdyaWQge1xyXG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbi8vICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5jYXJkIHtcclxuLy8gICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuLy8gICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuLy8gICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuLy8gICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuY2FyZDpob3ZlcixcclxuLy8gICAgICAgICAuY2FyZDpmb2N1cyxcclxuLy8gICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4vLyAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbi8vICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuY2FyZCBoMyB7XHJcbi8vICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5jYXJkIHAge1xyXG4vLyAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4vLyAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5sb2dvIHtcclxuLy8gICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbi8vICAgICAgICAgICAuZ3JpZCB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgYH08L3N0eWxlPlxyXG5cclxuLy8gICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuLy8gICAgICAgICBodG1sLFxyXG4vLyAgICAgICAgIGJvZHkge1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbi8vICAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbi8vICAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAqIHtcclxuLy8gICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICBgfTwvc3R5bGU+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vIH1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyL2xheW91dCdcclxuaW1wb3J0IHsgZ2V0VG9rZW5Gcm9tU3RvcmFnZSwgcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSwgZ2V0RGVjb2RlZFRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vc3R5bGVTaGVldCc7XHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IFR5cGljYWwgZnJvbSAncmVhY3QtdHlwaWNhbCdcclxuaW1wb3J0IFNsaWRlckNhcm91c2VsIGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci9zbGlkZXItY2Fyb3VzZWwnXHJcbmltcG9ydCBDYXRlZ29yaWVzU2xpZGVyIGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci9jYXRlZ29yaWVzLXNsaWRlcidcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci9wcm9kdWN0cydcclxuXHJcblxyXG5sZXQgYW5pbWF0aW9uID1cclxuICAgIDxoMyBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnZ3JlZW4nLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6ICcxJScsIGJvdHRvbTogJzElJywgekluZGV4OiAxMDAwIH19PlxyXG4gICAgICAgIDxUeXBpY2FsXHJcbiAgICAgICAgICAgIHN0ZXBzPXtbJ1RoaXMgd2Vic2l0ZSBpcyB1bmRlciBkZXZlbG9wbWVudCcsIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAnQ29tbWluZyBTb29uLi4uIScsIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAnQmUgUmVhZHkgdG8gU2hvcCBvbmxpbmUuLi4nLCAxMDAwXX1cclxuICAgICAgICAgICAgbG9vcD17SW5maW5pdHl9XHJcbiAgICAgICAgICAgIHdyYXBwZXI9XCJwXCJcclxuICAgICAgICAvPlxyXG4gICAgPC9oMz5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMnO1xyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkYXRhID0gcmVzcG9uc2UuZGF0YS5jYXRlZ29yeS5kb2NzXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZXJvcmllcyBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgICAgIGp3dF90b2tlbjogJycsXHJcblxyXG4gICAgICAgICAgICBwcm9kdWN0c19saXN0OiBbXSxcclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdDogdGhpcy5wcm9wcy5kYXRhLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldERlY29kZWRUb2tlbkZyb21TdG9yYWdlKClcclxuICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGp3dF90b2tlbjogdG9rZW4ucm9sZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMnO1xyXG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICAgIC8vIGF3YWl0IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgY2F0ZWdvcmllc19saXN0OiByZXNwb25zZS5kYXRhLmNhdGVnb3J5LmRvY3MsXHJcbiAgICAgICAgLy8gICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiByZXNwb25zZS5kYXRhLnN1Yl9jYXRlZ29yeS5kb2NzXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnQ2F0ZXJvcmllcyBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqd3RfdG9rZW46ICcnIH0pXHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZWxvYWQoJy9pbmRleCcpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2luZGV4Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0xvZ291dCBGYWlsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk11aGFsaWs8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1wiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbmltYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbj17dGhpcy5zdGF0ZS5qd3RfdG9rZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dD17dGhpcy5sb2dvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3N1ZWw9ezxTbGlkZXJDYXJvdXNlbCAvPn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzU2xpZGVyIGNhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3R9IHN1Yl9jYXRlZ29yaWVzX2xpc3Q9e3RoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwiLy8gZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRpb25TZXJ2aWNlO1xyXG5pbXBvcnQgeyByZWFjdExvY2FsU3RvcmFnZSB9IGZyb20gJ3JlYWN0anMtbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0ICogYXMgZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBBdXRoZW50aWNhdGlvblNlcnZpY2UgPSAoKSA9PiAoXHJcbiAgICA8ZGl2PjwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVRva2VuVG9TdG9yYWdlKHRva2VuKSB7XHJcbiAgICBhd2FpdCByZWFjdExvY2FsU3RvcmFnZS5zZXQoJ3Rva2VuJywgdG9rZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVjb2RlZFRva2VuRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVhY3RMb2NhbFN0b3JhZ2UuZ2V0KCd0b2tlbicpO1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGRlY29kZSh0b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGRlY29kZWRUb2tlbi5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gcmVhY3RMb2NhbFN0b3JhZ2UuZ2V0KCd0b2tlbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVhY3RMb2NhbFN0b3JhZ2UucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdXRoKHJvbGVlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVhY3RMb2NhbFN0b3JhZ2UuZ2V0KCd0b2tlbicpO1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGRlY29kZSh0b2tlbik7XHJcbiAgICAgICAgaWYgKGRlY29kZWRUb2tlbi5kYXRhLnJvbGUgPT0gJ2FkbWluJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlZFRva2VuLmRhdGEuZnVsbE5hbWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZWNvZGVkVG9rZW4uZGF0YS5yb2xlICE9PSByb2xlZSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2luZGV4JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlZFRva2VuLmRhdGEuZnVsbE5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2luZGV4JylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRpb25TZXJ2aWNlOyIsIlxyXG5jb25zdCBwYXRoID0gJ2h0dHBzOi8vbXVoYWxpa3dlYi5oZXJva3VhcHAuY29tJztcclxuLy8gY29uc3QgcGF0aCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnO1xyXG5cclxuY29uc3QgTXVoYWxpa0NvbmZpZyA9IHtcclxuICAgIFBBVEg6IHBhdGgsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11aGFsaWtDb25maWc7IiwiXHJcbi8vIGV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZVNoZWV0ID0ge1xyXG4vLyAgICAgLy8gcHJpbXJ5X2NvbG9yOiAnIzU2M0Q3QycsXHJcbi8vICAgICBwcmltcnlfY29sb3I6ICcjMjhBNzQ1JyxcclxuLy8gICAgIHByaW1hcnlfdGV4dF9jb2xvcjogJ3doaXRlJyxcclxuLy8gfVxyXG5cclxubGV0IEdsb2JhbFN0eWxlU2hlZXQgPSB7XHJcbiAgICAvLyBwcmltcnlfY29sb3I6ICcjNTYzRDdDJyxcclxuICAgIHByaW1yeV9jb2xvcjogJyMyOEE3NDUnLFxyXG5cclxuICAgIGFkbWluX3ByaW1yeV9jb2xvcjogJyMzNzM5NDgnLFxyXG4gICAgcHJpbWFyeV90ZXh0X2NvbG9yOiAnd2hpdGUnLFxyXG5cclxuICAgIC8vIEJvZHkgY29sb3JcclxuICAgIC8vIGJvZHlfY29sb3I6ICcjRjFGMUYxJyxcclxuICAgIGJvZHlfY29sb3I6ICcjRjJGM0Y3JyxcclxuICAgIC8vIGJvZHlfY29sb3I6ICcjZTNlZGY3JyxcclxuXHJcbiAgICAvLyBGb250c2l6ZSBmb3IgYWxsIHRoZSBsYWJlbHMgb2YgYW55IGZvcm0gY29udHJvbCAoaW5wdXQsIHRleHRib3ggZXRjKTpcclxuICAgIGZvcm1fbGFiZWxfZm9udHNpemU6ICcxM3B4JyxcclxuICAgIGNhcmRfaGVhZGVyX2ZvbnRzaXplOiAnMTRweCcsXHJcbiAgICBjYXJkX2hlYWRlcl9iYWNrZ3JvdW5kOiAnbGlnaHRncmF5JyxcclxuXHJcbiAgICByZWFjdF9zZWxlY3Rfc3R5bGVzOiB7XHJcbiAgICAgICAgY29udHJvbDogKGJhc2UpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmJhc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZHJvcGRvd25JbmRpY2F0b3I6IChiYXNlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5iYXNlLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNsZWFySW5kaWNhdG9yOiAoYmFzZSkgPT4gKHtcclxuICAgICAgICAgICAgLi4uYmFzZSxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICB9KSxcclxuICAgICAgICBvcHRpb246IHByb3ZpZGVkID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB6SW5kZXg6ICcxMDAwJyxcclxuICAgICAgICB9KSxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlU2hlZXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqd3QtZGVjb2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR5cGljYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Rqcy1sb2NhbHN0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==