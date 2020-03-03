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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/admin.js":
/*!****************************!*\
  !*** ./src/pages/admin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_admin_dashboard_dashboard_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard-tabs */ "./src/pages/components/admin/dashboard/dashboard-tabs.js");
/* harmony import */ var _components_admin_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard-side-drawer */ "./src/pages/components/admin/dashboard/dashboard-side-drawer.js");
/* harmony import */ var _components_admin_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/layout/AdminLayout */ "./src/pages/components/admin/layout/AdminLayout.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\admin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const BackDrop = props => __jsx("div", {
  className: "jsx-3404600223",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  onClick: props.click,
  className: "jsx-3404600223",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3404600223",
  __self: undefined
}, ".jsx-3404600223{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGFkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUU2QixlQUNKLFdBQ0MsWUFDTixNQUNDLE9BQ3VCLDJCQUNsQixZQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcRllQXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRGFzaGJvYXJkVGFicyBmcm9tICcuL2NvbXBvbmVudHMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC10YWJzJztcclxuaW1wb3J0IERhc2hib2FyZFNpZGVEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQtc2lkZS1kcmF3ZXInO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2FkbWluL2xheW91dC9BZG1pbkxheW91dCc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5cclxuY29uc3QgQmFja0Ryb3AgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17cHJvcHMuY2xpY2t9PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuY2xhc3MgQWRtaW5EYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgc2lkZURyYXdlck9wZW46IGZhbHNlLFxyXG4gICAgICAgIGZ1Y2s6IHRydWVcclxuICAgIH07XHJcbiAgICBkcmF3ZXJUb2dnbGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzaWRlRHJhd2VyT3BlbjogIXByZXZTdGF0ZS5zaWRlRHJhd2VyT3BlbiB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZ1Y2tDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBmdWNrOiAhcHJldlN0YXRlLmZ1Y2sgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZGVEcmF3ZXJPcGVuOiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBiYWNrZHJvcDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWRlRHJhd2VyT3Blbikge1xyXG4gICAgICAgICAgICBiYWNrZHJvcCA9IDxCYWNrRHJvcCBjbGljaz17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcn0gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICB7LyogPEFkbWluTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkVGFicyBzaG93PXt0aGlzLnN0YXRlLmZ1Y2t9IGRyYXdlckNsaWNrSGFuZGxlcj17dGhpcy5kcmF3ZXJUb2dnbGVDbGlja0hhbmRsZXJ9IENsaWNrSGFuZGxlcj17dGhpcy5mdWNrQ2xpY2tIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFNpZGVEcmF3ZXIgc2hvdz17dGhpcy5zdGF0ZS5zaWRlRHJhd2VyT3Blbn0gY2xpY2s9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhY2tkcm9wfVxyXG4gICAgICAgICAgICAgICAgey8qIDwvQWRtaW5MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgYm90dG9tOiAnMCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\admin.js */"));

class AdminDashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      sideDrawerOpen: false,
      fuck: true
    });

    _defineProperty(this, "drawerToggleClickHandler", () => {
      this.setState(prevState => {
        return {
          sideDrawerOpen: !prevState.sideDrawerOpen
        };
      });
    });

    _defineProperty(this, "fuckClickHandler", () => {
      this.setState(prevState => {
        return {
          fuck: !prevState.fuck
        };
      });
    });

    _defineProperty(this, "backdropClickHandler", () => {
      this.setState({
        sideDrawerOpen: false
      });
    });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = __jsx(BackDrop, {
        click: this.backdropClickHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      });
    }

    return __jsx("div", {
      style: styles.body,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_components_admin_dashboard_dashboard_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      show: this.state.fuck,
      drawerClickHandler: this.drawerToggleClickHandler,
      ClickHandler: this.fuckClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx(_components_admin_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      show: this.state.sideDrawerOpen,
      click: this.backdropClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
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
    bottom: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AdminDashboard);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-side-drawer.js":
/*!***********************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-side-drawer.js ***!
  \***********************************************************************/
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
/* harmony import */ var _dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-tabs-content/dashboard */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/dashboard.js");
/* harmony import */ var _dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-tabs-content/vendors */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/vendors.js");
/* harmony import */ var _dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-tabs-content/customers */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/customers.js");
/* harmony import */ var _dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-tabs-content/products */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/products.js");
/* harmony import */ var _dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-tabs-content/categories */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/categories.js");
/* harmony import */ var _dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-tabs-content/inventory */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/inventory.js");
/* harmony import */ var _dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-tabs-content/discount */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/discount.js");
/* harmony import */ var _dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-tabs-content/commision */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/commision.js");
/* harmony import */ var _dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-tabs-content/reports */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/reports.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-side-drawer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + (drawerClasses || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: styles.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, " Vendor "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "zero",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), "Dashboard", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "one",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), "Vendors", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "two",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), "Customers", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "four",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), "Categories", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "five",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), "Inventory", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "six",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), "Discounts", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "seven",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPercent"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), "Commission", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "eight",
    onClick: props.click,
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), "Reports", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  })))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1411943970", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "tabs_side_drawer_tab_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "zero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "four",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "five",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "six",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "seven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "eight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1411943970",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color],
    __self: undefined
  }, `.hover.__jsx-style-dynamic-selector:hover{background:#30313E;}.tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;padding:0px;}label.__jsx-style-dynamic-selector{margin-top:4%;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color};}@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1zaWRlLWRyYXdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SmlCLEFBRzRDLEFBR1AsQUFjWSxBQUdOLEFBS0osQUFNRyxBQUdBLFlBOUJ1QixDQTRCeEMsQUFHQSxDQVRtQyxJQUx4QixDQXBCZixVQXFCZ0IsWUFDaEIsUUFJQSxHQXRCOEMsZ0NBYTlDLE9BWm1CLGVBQ1QsTUFDSyxXQUNKLE9BQ0csVUFDTSxnQkFDSixZQUNpQixtR0FDTSxpSUFDdkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcYWRtaW5cXGRhc2hib2FyZFxcZGFzaGJvYXJkLXNpZGUtZHJhd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2LCBUYWIsIFJvdywgQ29sLCBJbWFnZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFQZXJzb25Cb290aCwgZmFUYWNob21ldGVyQWx0LCBmYUNoZXZyb25SaWdodCwgZmFVc2VycywgZmFMaXN0QWx0LCBmYVdhcmVob3VzZSwgZmFUYWdzLCBmYVBlcmNlbnQsIGZhQ2hhcnRCYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9kYXNoYm9hcmQnO1xyXG5pbXBvcnQgVmVuZG9ycyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvdmVuZG9ycyc7XHJcbmltcG9ydCBDdXN0b21lcnMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2N1c3RvbWVycyc7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvcHJvZHVjdHMnO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvY2F0ZWdvcmllcyc7XHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2ludmVudG9yeSc7XHJcbmltcG9ydCBEaXNjb3VudHMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2Rpc2NvdW50JztcclxuaW1wb3J0IENvbW1pc2lvbiBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvY29tbWlzaW9uJztcclxuaW1wb3J0IFJlcG9ydHMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L3JlcG9ydHMnO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVTaGVldCc7XHJcblxyXG5cclxuY29uc3QgRGFzaGJvYXJkU2lkZURyYXdlciA9IHByb3BzID0+IHtcclxuICAgIGxldCBkcmF3ZXJDbGFzc2VzID0gXCJ0YWJzX3NpZGVfZHJhd2VyXCI7XHJcbiAgICBpZiAocHJvcHMuc2hvdykge1xyXG4gICAgICAgIGRyYXdlckNsYXNzZXMgPSBcInRhYnNfc2lkZV9kcmF3ZXIgb3BlblwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImRhc2hib2FyZC10YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cIm9uZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTaWRlIERyYXdlciBDb21wb25lbnRzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RyYXdlckNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIiB2YXJpYW50PVwicGlsbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIExpbmtzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3N0eWxlcy5pbWFnZV9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmRleFwiIHN0eWxlPXtzdHlsZXMubXVoYWxpa30+IFZlbmRvciA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInplcm9cIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUYWNob21ldGVyQWx0fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwib25lXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUGVyc29uQm9vdGh9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlbmRvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidHdvXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcnN9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidGhyZWVcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJmb3VyXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJmaXZlXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2FyZWhvdXNlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwic2l4XCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFnc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzY291bnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzZXZlblwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlcmNlbnR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1pc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImVpZ2h0XCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hhcnRCYXJ9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzX3NpZGVfZHJhd2VyX3RhYl9jb250ZW50XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209e1wiYXV0b1wifSBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiemVyb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVuZG9ycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cInR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRhYi5QYW5lIGV2ZW50S2V5PVwidGhyZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiZm91clwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiZml2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJzaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzY291bnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwic2V2ZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWlzaW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEVuZCBvZiB0aGUgU2lkZSBEcmF3ZXIgQ29tcG9uZW50cyAqL31cclxuICAgICAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMTNFO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXIub3BlbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXJfdGFiX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBpbWFnZV9kaXY6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyUmlnaHQ6ICcwLjVweCBzb2xpZCBncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMiUnXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICB3aWR0aDogJzgwcHgnXHJcbiAgICB9LFxyXG4gICAgbXVoYWxpazoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCdcclxuICAgIH0sXHJcbiAgICAvLyB0YWJfbGluazoge1xyXG4gICAgLy8gICAgIGNvbG9yOiAnI2NjY2NjYycsXHJcbiAgICAvLyAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIC8vICAgICBwYWRkaW5nVG9wOiAnMiUnLFxyXG4gICAgLy8gICAgIHBhZGRpbmdCb3R0b206ICcyJScsXHJcbiAgICAvLyB9LFxyXG4gICAgdGFiX2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICc1JScsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogJzUlJyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwcHggOCUgMHB4IDUlJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZm9yd29yZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICc4cHggNSUgMHB4IDBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgd2lkdGg6ICc4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzhweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzhweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRTaWRlRHJhd2VyOyJdfQ== */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-side-drawer.js */`));
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
  // tab_link: {
  //     color: '#cccccc',
  //     fontSize: '14px',
  //     paddingTop: '2%',
  //     paddingBottom: '2%',
  // },
  tab_link: {
    color: 'white',
    fontSize: '14px',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    margin: '0px 8% 0px 5%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
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

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/categories.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/categories.js ***!
  \***********************************************************************************/
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\categories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Categories extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Product Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Product Sold"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, " Product Categories "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742",
      __self: this
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLWNvbnRlbnRcXGNhdGVnb3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdxQixBQUl3QixBQUVxQixnQkFGcEIsQUFJRCxlQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLWNvbnRlbnRcXGNhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBDYXRlZ29yaWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+UHJvZHVjdCBDYXRlZ29yaWVzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5Qcm9kdWN0IFNvbGQ8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gUHJvZHVjdCBDYXRlZ29yaWVzIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGh1bWJzVXB9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gIHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IEhlYWRlciA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgICBwYWRkaW5nOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNvbDoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwcHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICBjYXJkX3RleHQ6IHtcclxuICAgICAgICBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCdcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-tabs-content\\\\categories.js */"));
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/commision.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/commision.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\commision.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Commision = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "This is Commision page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Commision);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/customers.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/customers.js ***!
  \**********************************************************************************/
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\customers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Customers extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "New Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, " Top Customers "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742",
      __self: this
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLWNvbnRlbnRcXGN1c3RvbWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R3FCLEFBSXdCLEFBRXFCLGdCQUZwQixBQUlELGVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcYWRtaW5cXGRhc2hib2FyZFxcZGFzaGJvYXJkLXRhYnMtY29udGVudFxcY3VzdG9tZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBDdXN0b21lcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+Q3VzdG9tZXJzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5OZXcgQ3VzdG9tZXJzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IFRvcCBDdXN0b21lcnMgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNVcH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSAgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gSGVhZGVyIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTVweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dDoge1xyXG4gICAgICAgIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-tabs-content\\\\customers.js */"));
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Customers);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/dashboard.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/dashboard.js ***!
  \**********************************************************************************/
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, " Product Sold "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, " Oredrs "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "5678")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }))))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      md: 6,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      md: 6,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Customers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742",
      __self: this
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLWNvbnRlbnRcXGRhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SHFCLEFBSXdCLEFBRXFCLGdCQUZwQixBQUlELGVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcYWRtaW5cXGRhc2hib2FyZFxcZGFzaGJvYXJkLXRhYnMtY29udGVudFxcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5WZW5kb3JzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5DdXN0b21lcnM8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PiBQcm9kdWN0IFNvbGQgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNVcH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSAgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gT3JlZHJzIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU2NzhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlZlbmRvcnM8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezZ9IG1kPXs2fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+Q3VzdG9tZXJzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTVweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dDoge1xyXG4gICAgICAgIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-tabs-content\\\\dashboard.js */"));
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/discount.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/discount.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\discount.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Discount extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, "cvbnm");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Discount);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/inventory.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/inventory.js ***!
  \**********************************************************************************/
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\inventory.js";

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
      className: "jsx-3124640742",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Product In Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Product Sold"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, " Product Categories "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, " Header "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742",
      __self: this
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLWNvbnRlbnRcXGludmVudG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R3FCLEFBSXdCLEFBRXFCLGdCQUZwQixBQUlELGVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcYWRtaW5cXGRhc2hib2FyZFxcZGFzaGJvYXJkLXRhYnMtY29udGVudFxcaW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBJbnZlbnRvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnKVxyXG4gICAgLy8gICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAvLyAgICAgcmV0dXJuIHsgc3RhcnM6IDEwIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlByb2R1Y3QgSW4gU3RvY2s8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlByb2R1Y3QgU29sZDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PiBQcm9kdWN0IENhdGVnb3JpZXMgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNVcH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSAgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gSGVhZGVyIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTVweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dDoge1xyXG4gICAgICAgIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-tabs-content\\\\inventory.js */"));
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/products.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/products.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\products.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Products = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "This is Product page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/reports.js":
/*!********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/reports.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\reports.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Reports = () => {
  return __jsx("div", {
    style: {
      width: '100%',
      background: 'yellow'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "daily",
    transition: false,
    id: "reports_tab",
    style: {
      padding: '0px',
      margin: '0px',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "daily",
    title: "Daily Reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Daily Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "weekly",
    title: "Weekly Reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Weekly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "monthly",
    title: "Monthly Reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Monthly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "yearly",
    title: "Yearly Reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Yearly Reports")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    eventKey: "overall",
    title: "Overall Reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Overall Reports"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Reports);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs-content/vendors.js":
/*!********************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs-content/vendors.js ***!
  \********************************************************************************/
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs-content\\vendors.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting






class Vendor extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: styles.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "New Vendors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserPlus"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, " Top Vendors "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "1234")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faThumbsUp"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12,
      style: styles.col,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3124640742" + " " + "hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, " Admin Vendors "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "5678")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742",
      __self: this
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLWNvbnRlbnRcXHZlbmRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dxQixBQUl3QixBQUVxQixnQkFGcEIsQUFJRCxlQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLWNvbnRlbnRcXHZlbmRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG4vLyBhbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhVXNlcnMsIGZhVXNlclBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuXHJcbmNsYXNzIFZlbmRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlZlbmRvcnM8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9Pk5ldyBWZW5kb3JzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gVG9wIFZlbmRvcnMgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNVcH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSAgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gQWRtaW4gVmVuZG9ycyA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1Njc4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgICBwYWRkaW5nOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNvbDoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwcHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICBjYXJkX3RleHQ6IHtcclxuICAgICAgICBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCdcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlbmRvcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-tabs-content\\\\vendors.js */"));
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primry_color}`,
    width: '50px',
    height: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    float: 'right'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vendor);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-tabs.js":
/*!****************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-tabs.js ***!
  \****************************************************************/
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
/* harmony import */ var _dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-tabs-content/dashboard */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/dashboard.js");
/* harmony import */ var _dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-tabs-content/vendors */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/vendors.js");
/* harmony import */ var _dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-tabs-content/customers */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/customers.js");
/* harmony import */ var _dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-tabs-content/products */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/products.js");
/* harmony import */ var _dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-tabs-content/categories */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/categories.js");
/* harmony import */ var _dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-tabs-content/inventory */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/inventory.js");
/* harmony import */ var _dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-tabs-content/discount */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/discount.js");
/* harmony import */ var _dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-tabs-content/commision */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/commision.js");
/* harmony import */ var _dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-tabs-content/reports */ "./src/pages/components/admin/dashboard/dashboard-tabs-content/reports.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const DashboardTabs = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "zero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.body,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + (drawerClasses || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills",
    style: {
      minWidth: '320px',
      maxWidth: '320px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: styles.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, " Vendor "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "zero",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), "Dashboard", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "one",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), "Vendors", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "two",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), "Customers", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "four",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), "Categories", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "five",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), "Inventory", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "six",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), "Discounts", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "seven",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPercent"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), "Commission", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "eight",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), "Reports", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    style: styles.navbar,
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.drawerBtn,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "side_tab_toogle_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.buttons,
    onClick: props.drawerClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }))), __jsx("div", {
    style: styles.drawerBtn,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "tabs mr-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.buttons,
    onClick: props.ClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: styles.search_bar,
    className: "mr-xs-2",
    type: "text",
    placeholder: "Search here",
    "aria-describedby": "side_drawer_searchbar",
    name: "side_drawer_searchbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "side_drawer_searchBtn",
    style: styles.buttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"],
    alignRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    size: "sm",
    split: true,
    variant: "light",
    id: "dropdown-split",
    style: {
      background: 'none',
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }), "My Profile"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }), "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandsHelping"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }), "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }), "Logout")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2483564076", [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color]]]) + " " + "tab_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "zero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_vendors__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_customers__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "four",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_categories__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "five",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "six",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_discount__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "seven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_commision__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "eight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2483564076",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color],
    __self: undefined
  }, `.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer.open.__jsx-style-dynamic-selector{display:block;}.hover.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color};color:${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;}.hover.__jsx-style-dynamic-selector:hover{background:#30313E;}.side_tab_toogle_btn.__jsx-style-dynamic-selector{margin:0%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}@media (max-width:991px){.tabs.__jsx-style-dynamic-selector{display:none;}.tab_content.__jsx-style-dynamic-selector{display:none;}}@media (min-width:992px){.side_tab_toogle_btn.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJOaUIsQUFHa0MsQUFHQyxBQUcwQixBQU1yQixBQUl4QixBQUV1QixBQUtILEFBR0UsQUFLQSxVQWZyQixHQWZBLEFBdUJJLEFBR0EsQUFLQSxDQTVCSixJQWVlLENBTmYsVUFPQSxXQWJ1QyxtQ0FDSiwrQkFDRyxrQ0FDdEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcYWRtaW5cXGRhc2hib2FyZFxcZGFzaGJvYXJkLXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZSwgTmF2LCBOYXZiYXIsIERyb3Bkb3duLCBCdXR0b25Hcm91cCwgRm9ybSwgRm9ybUNvbnRyb2wsIElucHV0R3JvdXAsIEJ1dHRvbiwgU3Bpbm5lciwgVGFiLCBSb3csIENvbCwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFTZWFyY2gsIGZhQmFycywgZmFDaGV2cm9uUmlnaHQsIGZhVGFjaG9tZXRlckFsdCwgZmFQZXJzb25Cb290aCwgZmFIYW5kc0hlbHBpbmcsIGZhVXNlciwgZmFVc2VycywgZmFMaXN0QWx0LCBmYVdhcmVob3VzZSwgZmFUYWdzLCBmYVBlcmNlbnQsIGZhQ2hhcnRCYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9kYXNoYm9hcmQnO1xyXG5pbXBvcnQgVmVuZG9ycyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvdmVuZG9ycyc7XHJcbmltcG9ydCBDdXN0b21lcnMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2N1c3RvbWVycyc7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvcHJvZHVjdHMnO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvY2F0ZWdvcmllcyc7XHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2ludmVudG9yeSc7XHJcbmltcG9ydCBEaXNjb3VudHMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2Rpc2NvdW50JztcclxuaW1wb3J0IENvbW1pc2lvbiBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvY29tbWlzaW9uJztcclxuaW1wb3J0IFJlcG9ydHMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L3JlcG9ydHMnO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVTaGVldCc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmRUYWJzID0gcHJvcHMgPT4ge1xyXG4gICAgbGV0IGRyYXdlckNsYXNzZXMgPSBcInRhYnNfc2lkZV9kcmF3ZXJcIjtcclxuICAgIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICAgICAgZHJhd2VyQ2xhc3NlcyA9IFwidGFic19zaWRlX2RyYXdlciBvcGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImRhc2hib2FyZC10YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cInplcm9cIiAgPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNob3cvSGlkZSBUYWJzICYgVGFicy1Db250ZW50IHdoZW4gc2NyZWVuIFN3aXRjaGVzIHRvIExhcmdlL01lZGl1bSxTbWFsbCxFeHRyYS1TbWFsbCBEZXZpY2VzKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RyYXdlckNsYXNzZXN9ICBzdHlsZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU2hvdy9IaWRlIFRhYnMgU0lkZSBEcmF3ZXIgaW4gTGctRGV2aWNlcyB3aGVuIGJhciBidG4gQ2xpY2tlZCovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIiB2YXJpYW50PVwicGlsbHNcIiBzdHlsZT17eyBtaW5XaWR0aDogJzMyMHB4JywgbWF4V2lkdGg6ICczMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIHN0eWxlPXtzdHlsZXMuaW1hZ2VfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvaW5kZXhcIiBzdHlsZT17c3R5bGVzLm11aGFsaWt9PiBWZW5kb3IgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJ6ZXJvXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhY2hvbWV0ZXJBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJvbmVcIiBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUGVyc29uQm9vdGh9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlbmRvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidHdvXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInRocmVlXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJmb3VyXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiZml2ZVwiIHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXYXJlaG91c2V9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludmVudG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzaXhcIiBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFnc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzY291bnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzZXZlblwiIHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZXJjZW50fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21taXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJlaWdodFwiIHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGFydEJhcn0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgVGFicyBTaWRlIERyYXdlciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFRvb2xiYXIgJiBUYWJzIENvbnRlbnRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUb29sYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNvbGxhcHNlT25TZWxlY3QgZXhwYW5kPVwibGdcIiBzdHlsZT17c3R5bGVzLm5hdmJhcn0gdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaG93L0hpZGUgYmFyIGJ0biB3aGlsZSBzY3JlZW4gc3dpdGNoZXMgdG8gTGFyZ2UgdG8gU21hbGwsTWVkaXVtLEV4dHJhLVNtYWxsIERldmljZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVfdGFiX3Rvb2dsZV9idG5cIiBzdHlsZT17c3R5bGVzLmRyYXdlckJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbnN9IG9uQ2xpY2s9e3Byb3BzLmRyYXdlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSBzdHlsZT17c3R5bGVzLnNlYXJjaF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJhcnMgQnRuIHRvIFNob3cvSGlkZSBUYWJzIFNkZSBEcmF3ZXIgaW4gTGFyZ2UgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicyBtci1zbS00XCIgc3R5bGU9e3N0eWxlcy5kcmF3ZXJCdG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b25zfSBvbkNsaWNrPXtwcm9wcy5DbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gc3R5bGU9e3N0eWxlcy5zZWFyY2hfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZWFyY2ggQmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lIGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc2VhcmNoX2Jhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXIteHMtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaWRlX2RyYXdlcl9zZWFyY2hiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2lkZV9kcmF3ZXJfc2VhcmNoYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJzaWRlX2RyYXdlcl9zZWFyY2hCdG5cIiBzdHlsZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5zZWFyY2hfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFjY291bnQgU2V0dGluZyBEcm9wZG93biAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBhcz17QnV0dG9uR3JvdXB9IGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBzaXplPVwic21cIiBzcGxpdCB2YXJpYW50PVwibGlnaHRcIiBpZD1cImRyb3Bkb3duLXNwbGl0XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGFuZHNIZWxwaW5nfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVscD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiB0b29sYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFiIENvbnRlbnQgZm9yIExhcmdlIERldmljZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJ6ZXJvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVuZG9ycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwidHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGFiLlBhbmUgZXZlbnRLZXk9XCJ0aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJmb3VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJmaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cInNpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzY291bnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJzZXZlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWlzaW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBUYWIgQ29udGVudCBmb3IgTGFyZ2UgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIHRoZSBUb29sYmFyICYgVGFicyBDb21wb25lbnRzICovfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhvdmVyOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMTNFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNpZGVfdGFiX3Rvb2dsZV9idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAudGFicyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFiX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlX3RhYl90b29nbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGltYWdlX2Rpdjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJzAuNXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyJSdcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwcHgnXHJcbiAgICB9LFxyXG4gICAgbXVoYWxpazoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgbmF2YmFyOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxJSAxJScsXHJcbiAgICB9LFxyXG4gICAgZHJhd2VyQnRuOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxJScsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgIH0sXHJcbiAgICBjb2w6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzhweCcsXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoX2Jhcjoge1xyXG4gICAgICAgIGZsZXg6ICcxJyxcclxuICAgIH0sXHJcbiAgICB0YWJfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogJzglJyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnOCUnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCA4JSAwcHggMTIlJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZm9yd29yZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICc4cHggNSUgMHB4IDBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTZweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFRhYnM7Il19 */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-tabs.js */`));
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
  body: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`
  },
  navbar: {
    borderBottom: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`,
    background: 'white',
    padding: '1% 1%'
  },
  drawerBtn: {
    marginRight: '1%'
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
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color}`,
    border: 'none',
    width: 'auto',
    height: '38px'
  },
  search_bar: {
    flex: '1'
  },
  tab_link: {
    color: 'white',
    fontSize: '14px',
    paddingTop: '8%',
    paddingBottom: '8%'
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    margin: '0px 8% 0px 12%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    margin: '8px 5% 0px 0px',
    float: 'right',
    width: '10px',
    height: '10px',
    maxHeight: '10px',
    maxWidth: '10px'
  },
  search_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].body_color}`,
    width: '16px',
    height: '16px',
    maxHeight: '16px',
    maxWidth: '16px'
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
/* harmony default export */ __webpack_exports__["default"] = (DashboardTabs);

/***/ }),

/***/ "./src/pages/components/admin/footer/admin-footer.js":
/*!***********************************************************!*\
  !*** ./src/pages/components/admin/footer/admin-footer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\footer\\admin-footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AdminFooter = () => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]]) + " " + "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]]) + " " + "fooeter_text text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Copyright@ 2020", __jsx("span", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, " Muhalik "), "- Online Shopping Website")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2300049164",
  dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color],
  __self: undefined
}, `.footer.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color};position:absolute;left:0;bottom:0;right:0;}.fooeter_text.__jsx-style-dynamic-selector{margin:10px;font-size:smaller;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color};}span.__jsx-style-dynamic-selector{font-weight:bold;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxmb290ZXJcXGFkbWluLWZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXb0IsQUFHeUQsQUFPNUIsQUFLSyxZQUpDLEtBS3RCLGFBSnVDLFVBUmpCLGtCQUNYLE9BQ0UsQUFPYixTQU5ZLFFBQ1oiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXEZZUFxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcYWRtaW5cXGZvb3RlclxcYWRtaW4tZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVTaGVldCc7XHJcblxyXG5jb25zdCBBZG1pbkZvb3RlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vZXRlcl90ZXh0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBDb3B5cmlnaHRAIDIwMjBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gTXVoYWxpayA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAtIE9ubGluZSBTaG9wcGluZyBXZWJzaXRlXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb2V0ZXJfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkZvb3RlcjsiXX0= */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\footer\\admin-footer.js */`));

/* harmony default export */ __webpack_exports__["default"] = (AdminFooter);

/***/ }),

/***/ "./src/pages/components/admin/layout/AdminLayout.js":
/*!**********************************************************!*\
  !*** ./src/pages/components/admin/layout/AdminLayout.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbar_admin_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolbar/admin-toolbar */ "./src/pages/components/admin/toolbar/admin-toolbar.js");
/* harmony import */ var _footer_admin_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/admin-footer */ "./src/pages/components/admin/footer/admin-footer.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\layout\\AdminLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AdminLayout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_toolbar_admin_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), props.children, __jsx(_footer_admin_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (AdminLayout);

/***/ }),

/***/ "./src/pages/components/admin/toolbar/admin-toolbar.js":
/*!*************************************************************!*\
  !*** ./src/pages/components/admin/toolbar/admin-toolbar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\admin\\toolbar\\admin-toolbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = {
  background: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}`
  },
  brand: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color}`,
    fontSize: 'medium'
  },
  form: {
    border: `2px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color}`,
    width: '60%',
    borderRadius: '25px',
    padding: '0px 5px'
  },
  search_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].admin_primry_color}`,
    border: 'none'
  },
  search_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].body_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};

const AdminToolbar = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
  collapseOnSelect: true,
  expand: "lg",
  style: styles.background,
  variant: "dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
  href: "/",
  className: "mr-auto",
  style: styles.brand,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Muhalik"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
  style: {
    margin: '5px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
  style: {
    flex: '3'
  },
  type: "text",
  placeholder: "Search here",
  "aria-describedby": "searchBtn",
  name: "searchBtn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  id: "searchBtn",
  style: styles.search_btn,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
  style: styles.search_fontawesome,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"],
  alignRight: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
  size: "sm",
  split: true,
  variant: "dark",
  id: "dropdown-split",
  style: {
    background: 'none',
    border: 'none'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "Acount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
  href: "#/action-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Signout")))));

/* harmony default export */ __webpack_exports__["default"] = (AdminToolbar);
{
  /* 563D7C E35300 */
}

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
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyleSheet); // "45: [Product upload page added]"
// "46: [Admin/Vendor Dashboard Mobile View Toolbar Error Solved]"
// "47: [Product upload connected to backend(produck modal updated)]"

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./src/pages/admin.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MudassirR\Desktop\FYP\muhalikweb\src\pages\admin.js */"./src/pages/admin.js");


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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map